import type { APIRoute } from 'astro';
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

export const prerender = false;

export const POST: APIRoute = async ({ request, locals, clientAddress }) => {
  const env = locals.runtime.env;

  try {
    const formData = await request.formData();

    const name = formData.get('full-name');
    const email = formData.get('email');
    const phone = formData.get('phone') || 'Not provided';
    const service = formData.get('service') || 'Not specified';
    const message = formData.get('message');
    const turnstileToken = formData.get('cf-turnstile-response');

    if (!name || !email || !message) {
      return json({ success: false, message: 'Missing required fields' }, 400);
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

    const sesClient = new SESClient({
      region: env.AWS_REGION,
      credentials: {
        accessKeyId: env.AWS_ACCESS_KEY_ID,
        secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
      },
    });

    const command = new SendEmailCommand({
      Source: env.FROM_EMAIL_ADDRESS,
      Destination: { ToAddresses: [env.TO_EMAIL_ADDRESS] },
      Message: {
        Subject: {
          Data: `New Contact Form Submission from ${name}`,
          Charset: 'UTF-8',
        },
        Body: {
          Text: {
            Data: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Service: ${service}
Message: ${message}
            `,
            Charset: 'UTF-8',
          },
          Html: {
            Data: `
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> ${escapeHtml(String(name))}</p>
<p><strong>Email:</strong> ${escapeHtml(String(email))}</p>
<p><strong>Phone:</strong> ${escapeHtml(String(phone))}</p>
<p><strong>Service:</strong> ${escapeHtml(String(service))}</p>
<p><strong>Message:</strong> ${escapeHtml(String(message))}</p>
            `,
            Charset: 'UTF-8',
          },
        },
      },
    });

    await sesClient.send(command);

    return json({ success: true, message: 'Form submitted successfully' }, 200);
  } catch (error) {
    console.error('Error processing form submission:', error);
    return json(
      { success: false, message: 'An error occurred while processing your request' },
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

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
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
