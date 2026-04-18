import { defineMiddleware } from 'astro:middleware';

/**
 * Replaces two Cloudflare Pages artefacts that don't exist on Workers:
 *   1. `_headers` — we now set Link response headers + correct Content-Type
 *      for extensionless `.well-known` files here.
 *   2. `Accept: text/markdown` content negotiation — when an agent asks for
 *      markdown, we convert the rendered HTML to markdown on the fly.
 *
 * See https://developers.cloudflare.com/fundamentals/reference/markdown-for-agents/
 */
export const onRequest = defineMiddleware(async (context, next) => {
  const { request } = context;
  const url = new URL(request.url);
  const response = await next();

  // 1. Fix Content-Type for extensionless well-known resources.
  if (url.pathname === '/.well-known/api-catalog') {
    return withHeaders(response, {
      'Content-Type': 'application/linkset+json; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    });
  }
  if (url.pathname === '/.well-known/agent-skills/index.json') {
    return withHeaders(response, {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    });
  }

  // 2. Add Link: response header on the homepage (RFC 8288).
  if (url.pathname === '/' || url.pathname === '') {
    appendHeader(
      response,
      'Link',
      [
        '</sitemap-index.xml>; rel="sitemap"',
        '</.well-known/api-catalog>; rel="api-catalog"',
        '</.well-known/agent-skills/index.json>; rel="https://agentskills.io/rel/skills-index"',
      ].join(', '),
    );
  }

  // 3. Security header (replaces `_headers` catch-all).
  response.headers.set('X-Content-Type-Options', 'nosniff');

  // 4. Markdown content negotiation.
  if (!wantsMarkdown(request)) {
    appendHeader(response, 'Vary', 'Accept');
    return response;
  }

  const contentType = response.headers.get('Content-Type') || '';
  if (!contentType.includes('text/html')) {
    appendHeader(response, 'Vary', 'Accept');
    return response;
  }

  const html = await response.text();
  const markdown = htmlToMarkdown(html, url);

  const headers = new Headers(response.headers);
  headers.set('Content-Type', 'text/markdown; charset=utf-8');
  appendToHeaders(headers, 'Vary', 'Accept');
  headers.delete('Content-Length');

  return new Response(markdown, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
});

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function withHeaders(response: Response, overrides: Record<string, string>): Response {
  const headers = new Headers(response.headers);
  for (const [k, v] of Object.entries(overrides)) headers.set(k, v);
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

function appendHeader(response: Response, name: string, value: string): void {
  appendToHeaders(response.headers, name, value);
}

function appendToHeaders(headers: Headers, name: string, value: string): void {
  const existing = headers.get(name);
  if (!existing) {
    headers.set(name, value);
    return;
  }
  const set = new Set(existing.split(',').map((s) => s.trim()));
  for (const part of value.split(',').map((s) => s.trim())) set.add(part);
  headers.set(name, Array.from(set).join(', '));
}

function wantsMarkdown(request: Request): boolean {
  const accept = request.headers.get('Accept') || '';
  if (!accept) return false;
  const entries = accept.split(',').map((s) => s.trim().toLowerCase());
  let mdQ = 0;
  let htmlQ = 0;
  for (const entry of entries) {
    const [type, ...params] = entry.split(';').map((s) => s.trim());
    const qParam = params.find((p) => p.startsWith('q='));
    const q = qParam ? parseFloat(qParam.slice(2)) : 1;
    const qv = Number.isNaN(q) ? 1 : q;
    if (type === 'text/markdown') mdQ = Math.max(mdQ, qv);
    else if (type === 'text/html') htmlQ = Math.max(htmlQ, qv);
  }
  return mdQ > 0 && mdQ >= htmlQ;
}

/* ------------------------------------------------------------------ */
/*  HTML -> Markdown serializer (dependency-free).                     */
/* ------------------------------------------------------------------ */

function htmlToMarkdown(html: string, baseUrl: URL): string {
  const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  const title = titleMatch ? decodeEntities(stripTags(titleMatch[1])).trim() : '';

  const descMatch = html.match(
    /<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["']/i,
  );
  const description = descMatch ? decodeEntities(descMatch[1]).trim() : '';

  const mainMatch =
    html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i) ||
    html.match(/<body\b[^>]*>([\s\S]*?)<\/body>/i);
  const mainHtml = mainMatch ? mainMatch[1] : html;

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

function stripTags(s: string): string {
  return s.replace(/<[^>]+>/g, '');
}

function decodeEntities(s: string): string {
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

function absolutize(href: string | undefined, baseUrl: URL): string | undefined {
  if (!href) return href;
  try {
    return new URL(href, baseUrl).href;
  } catch {
    return href;
  }
}

type Frame = string | { tag: string; href?: string; skip?: boolean; skipStart?: number };

function serialize(html: string, baseUrl: URL): string {
  const TAG = /<\/?([a-zA-Z][a-zA-Z0-9]*)\b([^>]*)>/g;
  let result = '';
  let cursor = 0;
  const stack: Frame[] = [];
  const listStack: { type: 'ul' | 'ol'; index: number }[] = [];
  let inPre = false;

  const flushText = (text: string) => {
    if (!text) return;
    const decoded = decodeEntities(text);
    if (inPre) {
      result += decoded;
      return;
    }
    const collapsed = decoded.replace(/\s+/g, ' ');
    if (!collapsed.trim() && !result.endsWith(' ') && !result.endsWith('\n')) {
      result += ' ';
      return;
    }
    result += collapsed;
  };

  let m: RegExpExecArray | null;
  while ((m = TAG.exec(html)) !== null) {
    flushText(html.slice(cursor, m.index));
    cursor = TAG.lastIndex;

    const raw = m[0];
    const name = m[1].toLowerCase();
    const attrs = parseAttrs(m[2]);
    const closing = raw.startsWith('</');

    if (closing) {
      handleClose(name);
      continue;
    }

    handleOpen(name, attrs);
  }
  flushText(html.slice(cursor));
  return result;

  function handleOpen(name: string, attrs: Record<string, string>) {
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
        stack.push({ tag: name, skip: true, skipStart: result.length });
        return;
      default:
        stack.push(name);
        return;
    }
  }

  function handleClose(name: string) {
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
          if (typeof frame === 'object' && frame.skip && typeof frame.skipStart === 'number') {
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

function parseAttrs(raw: string): Record<string, string> {
  const attrs: Record<string, string> = {};
  if (!raw) return attrs;
  const re = /([a-zA-Z_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(raw)) !== null) {
    const name = m[1].toLowerCase();
    const value = m[2] ?? m[3] ?? m[4] ?? '';
    attrs[name] = decodeEntities(value);
  }
  return attrs;
}
