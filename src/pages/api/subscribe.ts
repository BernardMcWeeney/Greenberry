import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request, locals, clientAddress }) => {
  const env = locals.runtime.env;

  try {
    const formData = await request.formData();

    const email = formData.get('email');
    const turnstileToken = formData.get('cf-turnstile-response');

    if (!email || !validateEmail(String(email))) {
      return json({ success: false, message: 'Please provide a valid email address' }, 400);
    }

    if (!turnstileToken) {
      return json({ success: false, message: 'CAPTCHA verification failed' }, 400);
    }

    const ip =
      request.headers.get('CF-Connecting-IP') || clientAddress || undefined;
    const turnstileVerification = await verifyTurnstileToken(
      String(turnstileToken),
      ip,
      env.TURNSTILE_SECRET_KEY,
    );

    if (!turnstileVerification.success) {
      return json({ success: false, message: 'CAPTCHA verification failed' }, 400);
    }

    const normalized = String(email).toLowerCase();

    const { results } = await env.DB.prepare(
      'SELECT email FROM subscribers WHERE email = ?',
    )
      .bind(normalized)
      .all();

    if (results.length > 0) {
      return json(
        { success: false, message: 'This email is already subscribed to our newsletter' },
        400,
      );
    }

    const timestamp = new Date().toISOString();
    await env.DB.prepare(
      'INSERT INTO subscribers (email, subscribed_at) VALUES (?, ?)',
    )
      .bind(normalized, timestamp)
      .run();

    return json(
      { success: true, message: 'You have been successfully subscribed to our newsletter' },
      200,
    );
  } catch (error) {
    console.error('Error processing subscription:', error);
    return json(
      { success: false, message: 'An error occurred while processing your subscription' },
      500,
    );
  }
};

function json(body: unknown, status: number): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.toLowerCase());
}

async function verifyTurnstileToken(
  token: string,
  ip: string | undefined,
  secret: string,
): Promise<{ success: boolean }> {
  try {
    const formData = new FormData();
    formData.append('secret', secret);
    formData.append('response', token);
    if (ip) formData.append('remoteip', ip);

    const result = await fetch(
      'https://challenges.cloudflare.com/turnstile/v0/siteverify',
      { method: 'POST', body: formData },
    );
    return (await result.json()) as { success: boolean };
  } catch (error) {
    console.error('Turnstile verification error:', error);
    return { success: false };
  }
}
