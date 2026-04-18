/**
 * Cloudflare Pages middleware for content negotiation.
 *
 * When an agent sends `Accept: text/markdown`, convert the rendered HTML
 * page to markdown on the fly and return it with the correct Content-Type.
 * Browsers (Accept: text/html) are served the normal HTML response.
 *
 * Implements: https://developers.cloudflare.com/fundamentals/reference/markdown-for-agents/
 */

export const onRequest = async (context) => {
  const { request, next } = context;

  const response = await next();

  if (!wantsMarkdown(request)) {
    return appendVary(response);
  }

  const contentType = response.headers.get('Content-Type') || '';
  if (!contentType.includes('text/html')) {
    return appendVary(response);
  }

  const html = await response.text();
  const markdown = htmlToMarkdown(html, new URL(request.url));

  const headers = new Headers(response.headers);
  headers.set('Content-Type', 'text/markdown; charset=utf-8');
  headers.set('Vary', mergeVary(headers.get('Vary'), 'Accept'));
  headers.delete('Content-Length');

  return new Response(markdown, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
};

function wantsMarkdown(request) {
  const accept = request.headers.get('Accept') || '';
  if (!accept) return false;
  const entries = accept.split(',').map((s) => s.trim().toLowerCase());
  let mdQ = 0;
  let htmlQ = 0;
  for (const entry of entries) {
    const [type, ...params] = entry.split(';').map((s) => s.trim());
    const q = parseFloat(
      (params.find((p) => p.startsWith('q=')) || 'q=1').slice(2)
    );
    if (type === 'text/markdown') mdQ = Math.max(mdQ, isNaN(q) ? 1 : q);
    else if (type === 'text/html') htmlQ = Math.max(htmlQ, isNaN(q) ? 1 : q);
  }
  return mdQ > 0 && mdQ >= htmlQ;
}

function mergeVary(existing, value) {
  if (!existing) return value;
  const set = new Set(existing.split(',').map((s) => s.trim()));
  set.add(value);
  return Array.from(set).join(', ');
}

function appendVary(response) {
  const headers = new Headers(response.headers);
  headers.set('Vary', mergeVary(headers.get('Vary'), 'Accept'));
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

/* ------------------------------------------------------------------ */
/*  Minimal, dependency-free HTML -> Markdown serializer.              */
/*  Scoped to what the site actually renders: headings, paragraphs,    */
/*  lists, links, images, emphasis, code, blockquotes.                 */
/* ------------------------------------------------------------------ */

function htmlToMarkdown(html, baseUrl) {
  // Extract <title>
  const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  const title = titleMatch ? decodeEntities(stripTags(titleMatch[1])).trim() : '';

  // Extract <meta name="description">
  const descMatch = html.match(
    /<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["']/i
  );
  const description = descMatch ? decodeEntities(descMatch[1]).trim() : '';

  // Prefer <main>; fall back to <body>.
  const mainMatch =
    html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i) ||
    html.match(/<body\b[^>]*>([\s\S]*?)<\/body>/i);
  const mainHtml = mainMatch ? mainMatch[1] : html;

  // Strip script/style/noscript/template/svg blocks.
  const cleaned = mainHtml
    .replace(/<script\b[\s\S]*?<\/script>/gi, '')
    .replace(/<style\b[\s\S]*?<\/style>/gi, '')
    .replace(/<noscript\b[\s\S]*?<\/noscript>/gi, '')
    .replace(/<template\b[\s\S]*?<\/template>/gi, '')
    .replace(/<svg\b[\s\S]*?<\/svg>/gi, '')
    .replace(/<!--[\s\S]*?-->/g, '');

  const body = serialize(cleaned, baseUrl);

  const frontmatter =
    (title ? `# ${title}\n\n` : '') +
    (description ? `> ${description}\n\n` : '');

  return (
    frontmatter +
    body.replace(/\n{3,}/g, '\n\n').trim() +
    `\n\n---\nSource: ${baseUrl.href}\n`
  );
}

function stripTags(s) {
  return s.replace(/<[^>]+>/g, '');
}

function decodeEntities(s) {
  return s
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(parseInt(n, 10)))
    .replace(/&#x([0-9a-fA-F]+);/g, (_, n) => String.fromCharCode(parseInt(n, 16)));
}

function absolutize(href, baseUrl) {
  if (!href) return href;
  try {
    return new URL(href, baseUrl).href;
  } catch {
    return href;
  }
}

/**
 * Simple linear tokenizer-serializer. Not a full HTML parser — but robust
 * enough for server-rendered Astro output which is well-formed.
 */
function serialize(html, baseUrl) {
  const TAG = /<\/?([a-zA-Z][a-zA-Z0-9]*)\b([^>]*)>/g;
  let result = '';
  let cursor = 0;
  const stack = [];
  let listStack = []; // { type: 'ul'|'ol', index: number }
  let inPre = false;

  const flushText = (text) => {
    if (!text) return;
    const decoded = decodeEntities(text);
    if (inPre) {
      result += decoded;
      return;
    }
    // Collapse whitespace outside <pre>.
    const collapsed = decoded.replace(/\s+/g, ' ');
    if (!collapsed.trim() && !result.endsWith(' ') && !result.endsWith('\n')) {
      result += ' ';
      return;
    }
    result += collapsed;
  };

  let m;
  while ((m = TAG.exec(html)) !== null) {
    flushText(html.slice(cursor, m.index));
    cursor = TAG.lastIndex;

    const raw = m[0];
    const name = m[1].toLowerCase();
    const attrs = parseAttrs(m[2]);
    const closing = raw.startsWith('</');
    const selfClosing = raw.endsWith('/>');

    if (closing) {
      handleClose(name);
      continue;
    }

    handleOpen(name, attrs, selfClosing);
  }
  flushText(html.slice(cursor));
  return result;

  function handleOpen(name, attrs, selfClosing) {
    switch (name) {
      case 'br':
        result += '  \n';
        return;
      case 'hr':
        ensureBlank();
        result += '---\n\n';
        return;
      case 'img': {
        const src = absolutize(attrs.src, baseUrl);
        const alt = (attrs.alt || '').replace(/\]/g, '');
        if (src) result += `![${alt}](${src})`;
        return;
      }
      case 'h1':
      case 'h2':
      case 'h3':
      case 'h4':
      case 'h5':
      case 'h6':
        ensureBlank();
        result += '#'.repeat(parseInt(name[1], 10)) + ' ';
        stack.push(name);
        return;
      case 'p':
        ensureBlank();
        stack.push('p');
        return;
      case 'strong':
      case 'b':
        result += '**';
        stack.push('strong');
        return;
      case 'em':
      case 'i':
        result += '*';
        stack.push('em');
        return;
      case 'code':
        if (!inPre) result += '`';
        stack.push('code');
        return;
      case 'pre':
        ensureBlank();
        result += '```\n';
        inPre = true;
        stack.push('pre');
        return;
      case 'blockquote':
        ensureBlank();
        result += '> ';
        stack.push('blockquote');
        return;
      case 'ul':
        ensureBlank();
        listStack.push({ type: 'ul', index: 0 });
        stack.push('ul');
        return;
      case 'ol':
        ensureBlank();
        listStack.push({ type: 'ol', index: 0 });
        stack.push('ol');
        return;
      case 'li': {
        if (!result.endsWith('\n')) result += '\n';
        const list = listStack[listStack.length - 1];
        const indent = '  '.repeat(Math.max(0, listStack.length - 1));
        if (list && list.type === 'ol') {
          list.index += 1;
          result += `${indent}${list.index}. `;
        } else {
          result += `${indent}- `;
        }
        stack.push('li');
        return;
      }
      case 'a': {
        const href = absolutize(attrs.href, baseUrl);
        stack.push({ tag: 'a', href });
        result += '[';
        return;
      }
      case 'nav':
      case 'header':
      case 'footer':
      case 'aside':
        // Skip chrome — don't emit content.
        stack.push({ tag: name, skip: true, skipStart: result.length });
        return;
      default:
        // Treat as transparent container.
        stack.push(name);
        return;
    }
  }

  function handleClose(name) {
    // Pop until we find a matching frame (tolerant of mismatched nesting).
    for (let i = stack.length - 1; i >= 0; i--) {
      const frame = stack[i];
      const frameTag = typeof frame === 'string' ? frame : frame.tag;
      if (frameTag !== name) continue;
      stack.splice(i, 1);

      switch (name) {
        case 'h1':
        case 'h2':
        case 'h3':
        case 'h4':
        case 'h5':
        case 'h6':
        case 'p':
          result = result.replace(/[ \t]+$/, '') + '\n\n';
          return;
        case 'strong':
        case 'b':
          result += '**';
          return;
        case 'em':
        case 'i':
          result += '*';
          return;
        case 'code':
          if (!inPre) result += '`';
          return;
        case 'pre':
          inPre = false;
          if (!result.endsWith('\n')) result += '\n';
          result += '```\n\n';
          return;
        case 'blockquote':
          result += '\n\n';
          return;
        case 'ul':
        case 'ol':
          listStack.pop();
          if (!result.endsWith('\n')) result += '\n';
          if (listStack.length === 0) result += '\n';
          return;
        case 'li':
          if (!result.endsWith('\n')) result += '\n';
          return;
        case 'a':
          if (typeof frame === 'object' && frame.href) {
            result += `](${frame.href})`;
          } else {
            result += ']';
          }
          return;
        case 'nav':
        case 'header':
        case 'footer':
        case 'aside':
          if (typeof frame === 'object' && frame.skip) {
            result = result.slice(0, frame.skipStart);
          }
          return;
      }
      return;
    }
  }

  function ensureBlank() {
    if (!result) return;
    if (result.endsWith('\n\n')) return;
    if (result.endsWith('\n')) result += '\n';
    else result += '\n\n';
  }
}

function parseAttrs(raw) {
  const attrs = {};
  if (!raw) return attrs;
  const re = /([a-zA-Z_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/g;
  let m;
  while ((m = re.exec(raw)) !== null) {
    const name = m[1].toLowerCase();
    const value = m[2] ?? m[3] ?? m[4] ?? '';
    attrs[name] = decodeEntities(value);
  }
  return attrs;
}
