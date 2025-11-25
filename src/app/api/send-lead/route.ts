// app/api/send-lead/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone } = body;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

// Refined Email to High Net Worth Investors
await transporter.sendMail({
  from: `"Murivest Realty Group" <${process.env.SMTP_USER}>`,
  to: email,
  subject: '2025 Nairobi Prime Commercial Real Estate Report',
  html: `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="margin: 0; padding: 0; background-color: #0f172a;">
      <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #0f172a;">
        <tr>
          <td align="center" style="padding: 60px 20px;">
            <table width="600" cellpadding="0" cellspacing="0" style="background-color: #1e293b; border: 1px solid rgba(217, 119, 6, 0.1);">
              
              <!-- Header with decorative line -->
              <tr>
                <td style="padding: 50px 60px 40px; text-align: center;">
                  <div style="height: 1px; width: 60px; background: linear-gradient(to right, transparent, #d97706, transparent); margin: 0 auto 30px;"></div>
                  <p style="margin: 0; font-family: Georgia, serif; font-size: 11px; letter-spacing: 0.3em; text-transform: uppercase; color: #d97706;">
                    Murivest Realty Group
                  </p>
                </td>
              </tr>

              <!-- Greeting -->
              <tr>
                <td style="padding: 0 60px 40px;">
                  <p style="margin: 0 0 30px; font-family: Georgia, serif; font-size: 18px; font-weight: 300; color: #ffffff; line-height: 1.6;">
                    Dear ${name},
                  </p>
                  <p style="margin: 0 0 25px; font-family: Georgia, serif; font-size: 15px; font-weight: 300; color: #cbd5e1; line-height: 1.8;">
                    Thank you for your interest in Nairobi's prime commercial real estate market. We are pleased to share our exclusive 2025 market intelligence report with you.
                  </p>
                  <p style="margin: 0 0 25px; font-family: Georgia, serif; font-size: 15px; font-weight: 300; color: #cbd5e1; line-height: 1.8;">
                    This comprehensive analysis provides insights into yield performance, emerging corridors, and institutional-grade investment opportunities across Kenya's capital.
                  </p>
                </td>
              </tr>

              <!-- CTA Button -->
              <tr>
                <td style="padding: 0 60px 50px; text-align: center;">
                  <a href="https://www.murivest.co.ke/Murivest%20Realty%20The%20Nairobi%20Yield%20Report%20Q4%202025.pdf" 
                     style="display: inline-block; padding: 18px 50px; background-color: #d97706; color: #ffffff; text-decoration: none; font-family: Georgia, serif; font-size: 12px; letter-spacing: 0.2em; text-transform: uppercase; border: 1px solid #d97706; transition: all 0.3s;">
                    Access Report
                  </a>
                </td>
              </tr>

              <!-- Divider -->
              <tr>
                <td style="padding: 0 60px;">
                  <div style="height: 1px; background: rgba(255, 255, 255, 0.05);"></div>
                </td>
              </tr>

              <!-- Signature -->
              <tr>
                <td style="padding: 40px 60px 50px;">
                  <p style="margin: 0 0 8px; font-family: Georgia, serif; font-size: 14px; font-weight: 300; color: #cbd5e1;">
                    With regards,
                  </p>
                  <p style="margin: 0 0 3px; font-family: Georgia, serif; font-size: 15px; font-weight: 400; color: #ffffff;">
                    Mark Muriithi
                  </p>
                  <p style="margin: 0; font-family: Georgia, serif; font-size: 13px; font-weight: 300; color: #94a3b8;">
                    Principal, Murivest Realty Group
                  </p>
                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td style="padding: 30px 60px 50px; text-align: center;">
                  <div style="height: 1px; width: 40px; background: #d97706; margin: 0 auto 25px;"></div>
                  <p style="margin: 0; font-family: Georgia, serif; font-size: 11px; color: #64748b; line-height: 1.6;">
                    Murivest Realty Group Ltd.<br>
                    Nairobi, Kenya
                  </p>
                </td>
              </tr>

            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `,
});

    // 2. Email to You (Notification)
    await transporter.sendMail({
      from: `"System Bot" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL,
      subject: 'New HNWI Lead: Yield Atlas',
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 });
  }
}