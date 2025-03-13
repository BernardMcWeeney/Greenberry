import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

export async function onRequestPost(context) {
  try {
    // Parse the form data from the request
    const formData = await context.request.formData();
    
    // Extract form fields
    const name = formData.get('full-name');
    const email = formData.get('email');
    const phone = formData.get('phone') || 'Not provided';
    const service = formData.get('service') || 'Not specified';
    const message = formData.get('message');
    
    // Validate required fields
    if (!name || !email || !message) {
      return new Response(JSON.stringify({ 
        success: false, 
        message: 'Missing required fields' 
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    // Create SES client with AWS credentials
    // These credentials should be stored as environment variables in Cloudflare Pages
    const sesClient = new SESClient({
      region: context.env.AWS_REGION,
      credentials: {
        accessKeyId: context.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: context.env.AWS_SECRET_ACCESS_KEY,
      },
    });
    
    // Set up email parameters
    const emailParams = {
      Source: context.env.FROM_EMAIL_ADDRESS, // The email address you've verified with SES
      Destination: {
        ToAddresses: [context.env.TO_EMAIL_ADDRESS], // Your email address
      },
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
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Phone:</strong> ${phone}</p>
<p><strong>Service:</strong> ${service}</p>
<p><strong>Message:</strong> ${message}</p>
            `,
            Charset: 'UTF-8',
          },
        },
      },
    };
    
    // Send the email
    const command = new SendEmailCommand(emailParams);
    await sesClient.send(command);
    
    // Return success response
    return new Response(JSON.stringify({ 
      success: true, 
      message: 'Form submitted successfully' 
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
    
  } catch (error) {
    console.error('Error processing form submission:', error);
    
    // Return error response
    return new Response(JSON.stringify({ 
      success: false, 
      message: 'An error occurred while processing your request' 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}