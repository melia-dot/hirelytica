import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, email, company } = await request.json();

    if (!name || !email || !company) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { 
          status: 400,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
          }
        }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { 
          status: 400,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
          }
        }
      );
    }

    await resend.emails.send({
      from: 'Hirelytica <hello@hirelytica.com>',
      to: [email],
      subject: 'Welcome to Hirelytica - Early Access Confirmed!',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Inter, Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .button { display: inline-block; background: #667eea; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; margin: 20px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Welcome to Hirelytica!</h1>
              <p>The future of recruitment is here</p>
            </div>
            <div class="content">
              <p>Hi ${name},</p>
              
              <p>Thanks for signing up for early access to Hirelytica! We're excited to have ${company} join our community of forward-thinking companies revolutionizing their hiring process.</p>
              
              <p><strong>What's next?</strong></p>
              <ul>
                <li>We'll keep you updated on our progress</li>
                <li>You'll be among the first to access new features</li>
                <li>Early access to exclusive pricing</li>
              </ul>
              
              <p>We'll be in touch soon with more details about your early access invitation.</p>
              
              <p>Best regards,<br>
              The Hirelytica Team</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    await resend.emails.send({
      from: 'Hirelytica <hello@hirelytica.com>',
      to: ['mikael@nuvancelabs.com'],
      subject: '🎉 New Hirelytica Signup!',
      html: `
        <h2>New Early Access Signup</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Date:</strong> ${new Date().toLocaleDateString()}</p>
      `,
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Signup successful! Welcome email sent.' 
    }, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      }
    });

  } catch (error) {
    console.error('Signup error:', error);
    return NextResponse.json(
      { error: 'Failed to process signup', details: error.message },
      { 
        status: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        }
      }
    );
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
