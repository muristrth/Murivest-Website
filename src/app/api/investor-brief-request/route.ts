/**
 * src/app/api/investor-brief-request/route.ts — FULL REVISED
 * ─────────────────────────────────────────────────────────────────────────────
 * Handles initial lead submission (digital + hard copy)
 * → Sends investor confirmation email with FlipHTML5 link
 * → Sends internal alert email with all lead details incl. shipping address
 *
 * ENV VARIABLES (.env.local / Vercel):
 *   SMTP_HOST        smtp.gmail.com
 *   SMTP_PORT        587
 *   SMTP_SECURE      false
 *   SMTP_USER        investments@murivest.co.ke
 *   SMTP_PASS        your_gmail_app_password
 *   SMTP_FROM        Murivest Realty Ltd <investments@murivest.co.ke>
 *   ALERT_EMAIL      investments@murivest.co.ke
 *   FLIPHTML5_URL    https://online.fliphtml5.com/YOUR-LINK/
 * ─────────────────────────────────────────────────────────────────────────────
 */

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

function createTransporter() {
  return nodemailer.createTransport({
    host:   process.env.SMTP_HOST!,
    port:   parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER!,
      pass: process.env.SMTP_PASS!,
    },
  });
}

/* ── Investor confirmation email ─────────────────────────────────────────── */
function investorConfirmationEmail(data: {
  name: string; email: string; company: string;
  deliveryType: string; shippingAddress: string; flipUrl: string;
}) {
  const firstName = data.name.split(' ')[0];
  const isDigital = data.deliveryType === 'digital';

  return {
    subject: `Your Copy — Nairobi Private Commercial Asset Brief · Murivest Realty`,
    html: `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#F2EDE0;font-family:'Georgia',serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#F2EDE0;padding:32px 16px;">
  <tr><td align="center">
  <table width="100%" style="max-width:580px;background:#F9F6EF;border-radius:3px;overflow:hidden;box-shadow:0 4px 24px rgba(4,14,28,0.12);border:1px solid rgba(196,158,76,0.2);">

    <!-- Header -->
    <tr><td style="background:linear-gradient(135deg,#071828 0%,#0A2540 55%,#0d3160 100%);padding:36px 36px 30px;border-bottom:3px solid #C49E4C;">
      <p style="margin:0 0 10px;font-size:9px;letter-spacing:3px;text-transform:uppercase;color:#C49E4C;font-family:Arial,sans-serif;">◆ &nbsp; Restricted Institutional Publication &nbsp; ◆</p>
      <h1 style="margin:0 0 8px;font-size:24px;font-weight:700;color:#F9F6EF;line-height:1.2;">Nairobi Private Commercial Asset Brief</h1>
      <p style="margin:0;font-size:13px;color:rgba(249,246,239,0.68);font-style:italic;font-family:Arial,sans-serif;">Inaugural Edition · Murivest Realty Ltd · 2025</p>
    </td></tr>

    <!-- Body -->
    <tr><td style="padding:32px 36px 0;">
      <p style="margin:0 0 16px;font-size:15px;color:#2d2416;line-height:1.7;">Dear ${firstName},</p>
      <p style="margin:0 0 16px;font-family:Arial,sans-serif;font-size:14px;color:#5a4e3a;line-height:1.75;">
        ${isDigital
          ? `Thank you for registering your interest in the <em>Nairobi Private Commercial Asset Brief</em>. Your digital edition is now available for immediate access via the link below. A copy has also been dispatched to this email address for your records.`
          : `Thank you for registering your interest in the <em>Nairobi Private Commercial Asset Brief</em>. We have received your physical copy request and payment confirmation.
             <strong style="color:#0A2540;">Your physical edition will be dispatched to your confirmed address within 12–24 hours of payment verification.</strong>
             In the meantime, the digital edition is available instantly via the button below.`
        }
      </p>
    </td></tr>

    ${!isDigital ? `
    <!-- Delivery address -->
    <tr><td style="padding:0 36px 20px;">
      <table width="100%" style="background:rgba(10,37,64,0.04);border:1px solid rgba(10,37,64,0.1);border-radius:2px;">
        <tr><td style="padding:10px 14px;font-family:Arial,sans-serif;font-size:9px;letter-spacing:1.5px;text-transform:uppercase;color:#0A2540;font-weight:700;border-bottom:1px solid rgba(10,37,64,0.08);">Delivery Address</td></tr>
        <tr><td style="padding:10px 14px;font-family:Arial,sans-serif;font-size:13px;color:#0A2540;font-weight:600;line-height:1.5;">${data.shippingAddress || 'As confirmed on your order form'}</td></tr>
      </table>
    </td></tr>` : ''}

    <!-- CTA -->
    <tr><td style="padding:${isDigital ? '24px' : '4px'} 36px 24px;">
      <table cellpadding="0" cellspacing="0">
        <tr><td style="background:linear-gradient(135deg,#0A2540,#0d3160);border-radius:2px;border-bottom:3px solid #C49E4C;">
          <a href="${data.flipUrl}" target="_blank" style="display:inline-block;padding:14px 28px;color:#F9F6EF;text-decoration:none;font-family:Arial,sans-serif;font-size:11px;letter-spacing:2px;text-transform:uppercase;font-weight:700;">
            View Asset Brief Now &nbsp;→
          </a>
        </td></tr>
      </table>
    </td></tr>

    <!-- What to expect -->
    <tr><td style="padding:0 36px 28px;">
      <p style="margin:0 0 10px;font-family:Arial,sans-serif;font-size:10px;letter-spacing:1.5px;text-transform:uppercase;color:#7a6a52;border-bottom:1px solid rgba(10,37,64,0.1);padding-bottom:8px;">What to Expect Next</p>
      <ul style="margin:0;padding-left:18px;font-family:Arial,sans-serif;font-size:13px;color:#5a4e3a;line-height:1.9;">
        ${isDigital ? `
        <li>Instant digital access via the button above</li>
        <li>Future editions of the Nairobi Private Commercial Asset Brief</li>
        <li>Commercial real estate market intelligence and institutional insights</li>
        <li>Curated investment opportunities and deal flow alerts from Murivest Realty Ltd</li>
        ` : `
        <li>Physical copy dispatched within 12–24 hours of payment confirmation</li>
        <li>Instant digital access via the button above</li>
        <li>Email confirmation once your physical copy is dispatched</li>
        <li>Future editions and commercial real estate intelligence from Murivest Realty Ltd</li>
        `}
      </ul>
    </td></tr>

    <!-- Signature -->
    <tr><td style="padding:0 36px 32px;border-top:1px solid rgba(10,37,64,0.08);">
      <p style="margin:20px 0 4px;font-size:14px;color:#0A2540;font-weight:700;">Murivest Realty Ltd</p>
      <p style="margin:0;font-family:Arial,sans-serif;font-size:12px;color:#7a6a52;line-height:1.6;">
        Institutional Real Estate Intelligence · Nairobi, Kenya<br>
        <a href="mailto:investments@murivest.co.ke" style="color:#C49E4C;text-decoration:none;">investments@murivest.co.ke</a>
      </p>
    </td></tr>

    <!-- Footer -->
    <tr><td style="background:#EFE9DC;padding:14px 36px;border-top:1px solid rgba(10,37,64,0.1);">
      <p style="margin:0;font-family:Arial,sans-serif;font-size:9.5px;color:#7a6a52;line-height:1.6;">
        This publication is intended exclusively for qualified institutional investors and accredited individuals. It is not a solicitation or offer to purchase securities or real estate assets. Data sourced from KNBS, Statista, Knight Frank, Altrata, Cytonn Research, and public market sources. To unsubscribe, reply with "Unsubscribe" in the subject line.
      </p>
    </td></tr>

  </table>
  </td></tr>
</table>
</body>
</html>`,
  };
}

/* ── Internal alert email ────────────────────────────────────────────────── */
function internalAlertEmail(data: Record<string, unknown>) {
  const isHard = data.deliveryType === 'hard';
  const rows = {
    Name:              data.name,
    Email:             data.email,
    Phone:             data.phone || 'N/A',
    Company:           data.company,
    Title:             data.title || 'N/A',
    AUM:               data.investorType,
    'Investment Focus':data.investmentFocus || 'N/A',
    'Copy Type':       data.deliveryType,
    Amount:            isHard ? 'KES 2,000 (S&H)' : 'Complimentary',
    'Delivery Address':data.shippingAddress || (isHard ? '⚠️ Not provided' : 'N/A — Digital'),
    Source:            data.source,
  };

  return {
    subject: `[NPCAB Lead] ${data.name} · ${data.company} · ${isHard ? '⚠️ Hard Copy' : '✅ Digital'}`,
    html: `
<table style="font-family:Arial,sans-serif;font-size:13px;color:#1a1a1a;max-width:540px;border-collapse:collapse;">
  <tr><td style="background:#0A2540;padding:16px 20px;color:#C49E4C;font-size:16px;font-weight:700;border-bottom:3px solid #C49E4C;">
    New Investor Lead — Nairobi Private Commercial Asset Brief
  </td></tr>
  <tr><td style="padding:20px;">
    ${Object.entries(rows).map(([k, v]) => `
      <div style="display:flex;gap:8px;margin-bottom:9px;padding-bottom:9px;border-bottom:1px solid #eee;">
        <strong style="min-width:130px;color:#0A2540;flex-shrink:0;">${k}:</strong>
        <span style="word-break:break-word;">${v}</span>
      </div>`).join('')}

    ${isHard
      ? `<div style="background:#FFF3CD;border:1px solid #FFC107;padding:14px;border-radius:3px;margin-top:14px;">
           ⚠️ <strong>ACTION REQUIRED:</strong> Hard copy requested. Await M-Pesa payment confirmation, then dispatch physical copy to:<br><br>
           <strong style="font-size:14px;color:#0A2540;line-height:1.5;">${data.shippingAddress || 'Address not yet provided — check M-Pesa confirmation'}</strong>
         </div>`
      : `<div style="background:#D4EDDA;border:1px solid #28a745;padding:12px;border-radius:3px;margin-top:14px;">
           ✅ Digital copy automatically dispatched to investor email.
         </div>`
    }
  </td></tr>
</table>`,
  };
}

/* ── Route handler ───────────────────────────────────────────────────────── */
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      name, email, company, title,
      investorType, investmentFocus,
      deliveryType, shippingAddress,
      source, flipUrl,
    } = body;

    if (!name || !email || !company || !deliveryType) {
      return NextResponse.json({ success: false, error: 'Missing required fields.' }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ success: false, error: 'Invalid email address.' }, { status: 400 });
    }

    const transporter   = createTransporter();
    const resolvedFlip  = flipUrl || process.env.FLIPHTML5_URL || '#';

    // 1. Investor confirmation email
    const confirmTpl = investorConfirmationEmail({
      name, email, company, deliveryType,
      shippingAddress: shippingAddress || '',
      flipUrl: resolvedFlip,
    });
    await transporter.sendMail({
      from:    process.env.SMTP_FROM,
      to:      email,
      subject: confirmTpl.subject,
      html:    confirmTpl.html,
    });

    // 2. Internal alert email
    const alertTpl = internalAlertEmail({
      name, email, phone: body.phone, company, title,
      investorType, investmentFocus, deliveryType,
      shippingAddress: shippingAddress || 'N/A',
      source,
    });
    await transporter.sendMail({
      from:    process.env.SMTP_FROM,
      to:      process.env.ALERT_EMAIL,
      subject: alertTpl.subject,
      html:    alertTpl.html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('[NPCAB] investor-brief-request error:', error);
    return NextResponse.json({ success: false, error: 'Internal server error.' }, { status: 500 });
  }
}

export function GET() {
  return NextResponse.json({ error: 'Method not allowed.' }, { status: 405 });
}