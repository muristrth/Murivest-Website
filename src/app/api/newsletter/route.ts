import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Create email transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '465', 10),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email to internal team about new subscriber
    await transporter.sendMail({
      from: `"Murivest Newsletter" <${process.env.SMTP_USER}>`,
      to: process.env.NEWSLETTER_EMAIL || process.env.CONTACT_EMAIL || 'info@murivest.co.ke',
      subject: `New Newsletter Subscriber: ${email}`,
      text: `New newsletter subscriber: ${email}\n\nSubscribed on: ${new Date().toLocaleString('en-KE', { timeZone: 'Africa/Nairobi' })}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #d4af37;">New Newsletter Subscriber</h2>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subscribed on:</strong> ${new Date().toLocaleString('en-KE', { timeZone: 'Africa/Nairobi' })}</p>
          <hr>
          <p style="color: #666; font-size: 12px;">Murivest Realty Group - Newsletter Management</p>
        </div>
      `,
    });

    // Confirmation email to subscriber
    await transporter.sendMail({
      from: `"Murivest Realty Group" <${process.env.SMTP_USER}>`,
      to: email,
      subject: 'Welcome to Murivest Market Updates',
      html: `
        <!DOCTYPE html> <html> <head> <meta charset="utf-8" /> <title>Murivest Market Intelligence</title> <style> body { margin: 0; padding: 0; background: #f5f5f3; font-family: Arial, Helvetica, sans-serif; color: #1f1f1f; line-height: 1.7; } .container { max-width: 640px; margin: 40px auto; background: #ffffff; border: 1px solid #e4e1db; } .header { padding: 42px 48px 32px; border-bottom: 1px solid #ece8e1; } .eyebrow { font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; color: #8b7355; margin-bottom: 14px; } .title { font-size: 28px; line-height: 1.3; font-weight: 600; color: #1c1c1c; margin: 0; } .content { padding: 42px 48px; } p { margin: 0 0 18px; color: #3e3e3e; font-size: 15px; } .section-title { font-size: 14px; font-weight: 600; letter-spacing: 0.04em; text-transform: uppercase; color: #1f1f1f; margin: 32px 0 18px; } ul { margin: 0 0 28px; padding-left: 18px; } li { margin-bottom: 10px; color: #3f3f3f; font-size: 15px; } .button { display: inline-block; padding: 14px 22px; background: #1f1f1f; color: #ffffff !important; text-decoration: none; font-size: 12px; letter-spacing: 0.12em; text-transform: uppercase; margin-top: 12px; } .divider { height: 1px; background: #ece8e1; margin: 36px 0; } .footer { padding: 32px 48px; border-top: 1px solid #ece8e1; background: #faf9f7; } .footer p { font-size: 13px; color: #6a6a6a; margin-bottom: 10px; } .small { font-size: 12px; color: #8a8a8a; } @media (max-width: 640px) { .header, .content, .footer { padding: 28px 24px; } .title { font-size: 24px; } p, li { font-size: 14px; } } </style> </head> <body> <div class="container"> <div class="header"> <div class="eyebrow"> Murivest Research </div> <h1 class="title"> Subscription Confirmed </h1> </div> <div class="content"> <p> Thank you for subscribing to Murivest market updates and research commentary. </p> <p> You will periodically receive analysis covering investment activity, pricing trends, development pipelines, and capital market movements across Kenya’s property sector. </p> <div class="section-title"> Areas Covered </div> <ul> <li>Commercial office and mixed-use markets</li> <li>Residential pricing and rental trends</li> <li>Land and infrastructure corridors</li> <li>Investment transaction activity</li> <li>Hospitality and alternative asset classes</li> </ul> <p> Our research is prepared for investors, developers, occupiers, and institutions monitoring East African real estate markets. </p> <a href="https://www.murivest.co.ke/blog" class="button" > View Latest Research </a> <div class="divider"></div> <p class="small"> This email was sent following a newsletter subscription request submitted through the Murivest website. </p> </div> <div class="footer"> <p> <strong>Murivest Realty Group</strong> </p> <p> Westlands Business District<br /> Nairobi, Kenya </p> <p> +254 115 277 610<br /> info@murivest.co.ke </p> <p class="small"> You may unsubscribe from market updates at any time. </p> </div> </div> </body> </html>
      `,
    });

    return NextResponse.json(
      { message: 'Successfully subscribed to newsletter' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { error: 'Failed to subscribe. Please try again.' },
      { status: 500 }
    );
  }
}