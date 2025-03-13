export async function onRequestPost(context) {
    try {
      // Parse form data
      const formData = await context.request.formData();
      
      // Extract data from the form
      const email = formData.get('email');
      const turnstileToken = formData.get('cf-turnstile-response');
      
      // Validate email format
      if (!email || !validateEmail(email)) {
        return new Response(JSON.stringify({ 
          success: false, 
          message: 'Please provide a valid email address' 
        }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        });
      }
      
      // Validate Turnstile token
      if (!turnstileToken) {
        return new Response(JSON.stringify({ 
          success: false, 
          message: 'CAPTCHA verification failed' 
        }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        });
      }
      
      // Verify the Turnstile token
      const turnstileVerification = await verifyTurnstileToken(turnstileToken, context.request.headers.get('CF-Connecting-IP'), context);
      
      if (!turnstileVerification.success) {
        return new Response(JSON.stringify({ 
          success: false, 
          message: 'CAPTCHA verification failed' 
        }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        });
      }
      
      // Check if email already exists to prevent duplicates
      const { results } = await context.env.DB.prepare(
        'SELECT email FROM subscribers WHERE email = ?'
      )
      .bind(email.toLowerCase())
      .all();
      
      if (results.length > 0) {
        return new Response(JSON.stringify({ 
          success: false, 
          message: 'This email is already subscribed to our newsletter' 
        }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        });
      }
      
      // Add the email to the database
      const timestamp = new Date().toISOString();
      await context.env.DB.prepare(
        'INSERT INTO subscribers (email, subscribed_at) VALUES (?, ?)'
      )
      .bind(email.toLowerCase(), timestamp)
      .run();
      
      // Return success response
      return new Response(JSON.stringify({ 
        success: true, 
        message: 'You have been successfully subscribed to our newsletter' 
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
      
    } catch (error) {
      console.error('Error processing subscription:', error);
      
      // Return error response
      return new Response(JSON.stringify({ 
        success: false, 
        message: 'An error occurred while processing your subscription' 
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  }
  
  /**
   * Validates an email address format
   */
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }
  
  /**
   * Verifies a Turnstile token with Cloudflare's API
   */
  async function verifyTurnstileToken(token, ip, context) {
    try {
      const formData = new FormData();
      formData.append('secret', context.env.TURNSTILE_SECRET_KEY);
      formData.append('response', token);
      if (ip) {
        formData.append('remoteip', ip);
      }
  
      const result = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        method: 'POST',
        body: formData
      });
  
      return await result.json();
    } catch (error) {
      console.error('Turnstile verification error:', error);
      return { success: false, error: 'Verification failed' };
    }
  }