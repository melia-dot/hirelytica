// File: /app/api/signup/route.ts

import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

console.log('API Key exists:', !!'re_Q4RaKv1j_4YFTtGugeXucZhSZuCTkezrY');
console.log('API Key starts with re_:', 're_Q4RaKv1j_4YFTtGugeXucZhSZuCTkezrY'?.startsWith('re_'));

const resend = new Resend('re_Q4RaKv1j_4YFTtGugeXucZhSZuCTkezrY');

export async function POST(request: NextRequest) {
  try {
    const { name, email, company } = await request.json();

    // Validate input
    if (!name || !email || !company) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Send welcome email to user
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

    // Send notification email to you
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
    });

  } catch (error) {
    console.error('Signup error:', error);
    return NextResponse.json(
      { error: 'Failed to process signup' },
      { status: 500 }
    );
  }
}