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
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email to internal team about new subscriber
    await transporter.sendMail({
      from: `"Murivest Newsletter" <${process.env.SMTP_USER}>`,
      to: process.env.NEWSLETTER_EMAIL || process.env.CONTACT_EMAIL || 'info@murivest.co.ke',
      subject: `📧 New Newsletter Subscriber: ${email}`,
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
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <title>Welcome to Murivest Market Updates</title>
            <style>
              body { font-family: 'Inter', Arial, sans-serif; line-height: 1.6; color: #1a1a1a; margin: 0; padding: 0; background-color: #f8f9fb; }
              .container { max-width: 600px; margin: 0 auto; background: #ffffff; box-shadow: 0 10px 30px rgba(0,0,0,0.1); }
              .header { background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%); padding: 40px 30px; text-align: center; }
              .logo img { max-height: 50px; width: auto; margin-bottom: 20px; }
              .header h1 { color: #ffffff; margin: 0; font-size: 28px; font-weight: 700; }
              .content { padding: 40px 30px; }
              .welcome { background: linear-gradient(135deg, #d4af37, #f4d03f); color: #1a1a1a; padding: 20px; margin: -40px -30px 30px -30px; text-align: center; font-weight: 600; }
              .cta-button { background: linear-gradient(135deg, #d4af37, #f4d03f); color: #1a1a1a; padding: 15px 30px; text-decoration: none; border-radius: 6px; font-weight: 600; display: inline-block; margin: 20px 0; }
              .footer { padding: 30px; background: #f8f9fb; text-align: center; border-top: 1px solid #e5e5e5; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <div class="logo">
                  <img src="/logo.png" alt="Murivest Realty Group" />
                </div>
                <h1>MURIVEST MARKET UPDATES</h1>
              </div>

              <div class="content">
                <div class="welcome">
                  🎯 Welcome to Our Exclusive Market Intelligence Network
                </div>

                <h2>Thank You for Joining Our Community!</h2>

                <p>You've successfully subscribed to receive our premium market insights and investment opportunities. As a member of our exclusive network, you'll be among the first to know about:</p>

                <ul>
                  <li>🏢 New property investment opportunities</li>
                  <li>📊 Quarterly market reports and analysis</li>
                  <li>💰 Emerging trends in Kenyan real estate</li>
                  <li>🎪 Exclusive investor events and webinars</li>
                  <li>📈 Currency and economic updates</li>
                </ul>

                <p>Our next quarterly report will be delivered to your inbox soon. In the meantime, explore our current investment opportunities:</p>

                <a href="https://www.murivest.co.ke/properties" class="cta-button">View Investment Properties</a>

                <p style="margin-top: 30px; color: #666; font-size: 14px;">
                  You can unsubscribe at any time using the link in our emails. We respect your privacy and will never share your information.
                </p>
              </div>

              <div class="footer">
                <p><strong>Murivest Realty Group</strong><br>
                Westlands Business District, Nairobi, Kenya<br>
                +254 115 277 610 | info@murivest.co.ke</p>
              </div>
            </div>
          </body>
        </html>
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