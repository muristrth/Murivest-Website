import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(request: NextRequest) {
  try {
    const payload = await request.json();

    const {
      name,
      email,
      phone,
      organization,
      mandateType,
      investmentRange,
      timeline,
      message,
    } = payload;

    const mailOptions = {
      from: {
        name: process.env.SMTP_FROM_NAME || 'Murivest Investment Desk',
        address: process.env.SMTP_FROM || 'capital@murivest.co.ke',
      },
      to: process.env.INVESTMENT_DESK_EMAIL || 'capital@murivest.co.ke',
      replyTo: email,
      subject: `New Advisory Inquiry — ${organization || 'Individual'} (${mandateType || 'Unspecified'})`,
      text: `
New institutional inquiry received via murivest.co.ke

──────────────────────────────
CONTACT DETAILS
──────────────────────────────
Name:           ${name || 'Not provided'}
Email:          ${email || 'Not provided'}
Phone:          ${phone || 'Not provided'}
Organization:   ${organization || 'Not provided'}

──────────────────────────────
MANDATE PARAMETERS
──────────────────────────────
Mandate Type:   ${mandateType || 'Not selected'}
Investment:     ${investmentRange || 'Not selected'}
Timeline:       ${timeline || 'Not selected'}

──────────────────────────────
MESSAGE
──────────────────────────────
${message || 'No additional message provided.'}

──────────────────────────────
Received: ${new Date().toLocaleString('en-KE', { timeZone: 'Africa/Nairobi' })}
      `.trim(),
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #111111; background: #f5f5f0; padding: 40px 20px; }
    .container { max-width: 640px; margin: 0 auto; background: #ffffff; border: 1px solid #DED8CE; }
    .header { background: #111111; padding: 32px; text-align: center; }
    .header h1 { color: #ffffff; font-size: 18px; font-weight: 400; letter-spacing: 0.08em; text-transform: uppercase; margin: 0; }
    .body { padding: 40px 32px; }
    .section { margin-bottom: 32px; }
    .section-title { font-size: 11px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: #A67C52; margin-bottom: 16px; border-bottom: 1px solid #DED8CE; padding-bottom: 8px; }
    .field { margin-bottom: 12px; font-size: 14px; line-height: 1.6; }
    .label { color: #595959; display: inline-block; min-width: 120px; }
    .value { color: #111111; font-weight: 500; }
    .message-box { background: #f9f8f6; border: 1px solid #DED8CE; padding: 20px; font-size: 14px; line-height: 1.7; color: #333333; white-space: pre-wrap; }
    .footer { background: #f9f8f6; padding: 20px 32px; font-size: 12px; color: #595959; text-align: center; border-top: 1px solid #DED8CE; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Advisory Inquiry</h1>
    </div>
    <div class="body">
      <div class="section">
        <div class="section-title">Contact Details</div>
        <div class="field"><span class="label">Name:</span> <span class="value">${name || 'Not provided'}</span></div>
        <div class="field"><span class="label">Email:</span> <span class="value">${email || 'Not provided'}</span></div>
        <div class="field"><span class="label">Phone:</span> <span class="value">${phone || 'Not provided'}</span></div>
        <div class="field"><span class="label">Organization:</span> <span class="value">${organization || 'Not provided'}</span></div>
      </div>
      <div class="section">
        <div class="section-title">Mandate Parameters</div>
        <div class="field"><span class="label">Mandate Type:</span> <span class="value">${mandateType || 'Not selected'}</span></div>
        <div class="field"><span class="label">Investment Range:</span> <span class="value">${investmentRange || 'Not selected'}</span></div>
        <div class="field"><span class="label">Timeline:</span> <span class="value">${timeline || 'Not selected'}</span></div>
      </div>
      <div class="section">
        <div class="section-title">Message</div>
        <div class="message-box">${message ? message.replace(/\n/g, '<br>') : 'No additional message provided.'}</div>
      </div>
    </div>
    <div class="footer">
      Received via murivest.co.ke &middot; ${new Date().toLocaleString('en-KE', { timeZone: 'Africa/Nairobi' })}
    </div>
  </div>
</body>
</html>
      `.trim(),
    };

    await transporter.sendMail(mailOptions);

    // Optional: Send auto-reply to the submitter
    if (email) {
      await transporter.sendMail({
        from: {
          name: process.env.SMTP_FROM_NAME || 'Murivest Investment Desk',
          address: process.env.SMTP_FROM || 'capital@murivest.co.ke',
        },
        to: email,
        subject: 'Your inquiry has been received — Murivest Advisory',
        text: `
Dear ${name || 'Valued Contact'},

Thank you for reaching out to the Murivest Investment Desk.

We have received your inquiry and a member of our advisory team will respond directly within one business day. Every detail you have shared remains strictly confidential.

If your matter is urgent, please contact us directly at capital@murivest.co.ke.

Warm regards,
Murivest Investment Desk
        `.trim(),
        html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #111111; background: #f5f5f0; padding: 40px 20px; }
    .container { max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #DED8CE; }
    .header { padding: 40px 32px 24px; text-align: center; border-bottom: 1px solid #DED8CE; }
    .logo { font-size: 14px; font-weight: 500; letter-spacing: 0.12em; text-transform: uppercase; color: #A67C52; }
    .body { padding: 40px 32px; font-size: 15px; line-height: 1.7; color: #333333; }
    .signature { margin-top: 32px; padding-top: 24px; border-top: 1px solid #DED8CE; font-size: 14px; color: #595959; }
    .footer { background: #111111; padding: 24px 32px; text-align: center; font-size: 12px; color: #888888; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="logo">Murivest Investment Desk</div>
    </div>
    <div class="body">
      <p>Dear ${name || 'Valued Contact'},</p>
      <p>Thank you for reaching out to the Murivest Investment Desk.</p>
      <p>We have received your inquiry and a member of our advisory team will respond directly within one business day. Every detail you have shared remains strictly confidential.</p>
      <p>If your matter is urgent, please contact us directly at <a href="mailto:capital@murivest.co.ke" style="color: #A67C52; text-decoration: none;">capital@murivest.co.ke</a>.</p>
      <div class="signature">
        <p>Warm regards,<br><strong style="color: #111111;">Murivest Investment Desk</strong></p>
      </div>
    </div>
    <div class="footer">
      This is an automated confirmation. Please do not reply to this email.
    </div>
  </div>
</body>
</html>
        `.trim(),
      });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to send message' },
      { status: 500 }
    );
  }
}