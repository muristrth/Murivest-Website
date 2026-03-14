/**
 * src/app/api/investor-brief-request/route.ts — GOLF CLUB LOUNGE EDITION
 * ─────────────────────────────────────────────────────────────────────────────
 * Handles initial lead submission (digital + hard copy)
 * → Sends investor confirmation email (lounge-styled, cream + tobacco)
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
 *   FLIPHTML5_URL    https://online.fliphtml5.com/murivest/yhhx/
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

/* ── Lounge palette (email-safe) ─────────────────────────────────────────── */
const E = {
  cream:     '#F8F7F4',
  creamDark: '#F0EFE9',
  charcoal:  '#2C2C2C',
  charcoalL: '#4A4A4A',
  tobacco:   '#8B7355',
  tobaccoL:  '#A68B6A',
  hairline:  '#E5E2DC',
  white:     '#FFFFFF',
};

/* ── Investor confirmation email ─────────────────────────────────────────── */
function investorConfirmationEmail(data: {
  name: string; email: string; company: string;
  deliveryType: string; shippingAddress: string; flipUrl: string;
}) {
  const firstName = data.name.split(' ')[0];
  const isDigital = data.deliveryType === 'digital';

  return {
    subject: `Your Investment Memorandum — Nairobi Private Commercial Asset Brief · Murivest Realty`,
    html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nairobi Private Commercial Asset Brief</title>
</head>
<body style="margin:0;padding:0;background:${E.creamDark};font-family:'Georgia',serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:${E.creamDark};padding:36px 16px;">
<tr><td align="center">
<table width="100%" style="max-width:560px;background:${E.cream};border:1px solid ${E.hairline};">

  <!-- Header Rule -->
  <tr><td style="background:${E.charcoal};padding:0;height:3px;"></td></tr>

  <!-- Header -->
  <tr><td style="padding:36px 40px 28px;border-bottom:1px solid ${E.hairline};">
    <p style="margin:0 0 14px;font-family:Arial,sans-serif;font-size:9px;letter-spacing:0.3em;text-transform:uppercase;color:${E.tobacco};">
      Restricted Institutional Publication
    </p>
    <h1 style="margin:0 0 6px;font-size:28px;font-weight:400;color:${E.charcoal};line-height:1.15;letter-spacing:-0.01em;">
      Nairobi Private Commercial<br>Asset Brief
    </h1>
    <p style="margin:0;font-family:Arial,sans-serif;font-size:12px;color:${E.tobaccoL};font-style:italic;">
      Murivest Realty Ltd · Inaugural Edition · 2025
    </p>
  </td></tr>

  <!-- Salutation -->
  <tr><td style="padding:32px 40px 0;">
    <p style="margin:0 0 16px;font-size:16px;color:${E.charcoal};line-height:1.5;">
      Dear ${firstName},
    </p>
    <p style="margin:0 0 16px;font-family:Arial,sans-serif;font-size:14px;color:${E.charcoalL};line-height:1.8;font-weight:300;">
      ${isDigital
        ? `Your request for the <em>Nairobi Private Commercial Asset Brief</em> has been confirmed. The digital edition is now available for immediate access and has been dispatched to this address for your records.`
        : `Your request for the <em>Nairobi Private Commercial Asset Brief</em> physical edition has been confirmed. <strong style="color:${E.charcoal};font-weight:400;">Your copy will be dispatched to your confirmed address within 12–24 hours of payment verification.</strong> The digital edition is available immediately via the link below.`
      }
    </p>
  </td></tr>

  ${!isDigital ? `
  <!-- Delivery address -->
  <tr><td style="padding:0 40px 20px;">
    <table width="100%" style="border:1px solid ${E.hairline};background:${E.creamDark};">
      <tr>
        <td style="padding:10px 16px;font-family:Arial,sans-serif;font-size:9px;letter-spacing:0.25em;text-transform:uppercase;color:${E.tobacco};border-bottom:1px solid ${E.hairline};">
          Dispatch Address
        </td>
      </tr>
      <tr>
        <td style="padding:12px 16px;font-family:Arial,sans-serif;font-size:13px;color:${E.charcoal};line-height:1.6;">
          ${data.shippingAddress || 'As confirmed on your order form'}
        </td>
      </tr>
    </table>
  </td></tr>
  ` : ''}

  <!-- CTA -->
  <tr><td style="padding:${isDigital ? '20px' : '4px'} 40px 28px;">
    <table cellpadding="0" cellspacing="0">
      <tr>
        <td style="background:${E.tobacco};padding:0;">
          <a href="${data.flipUrl}" target="_blank"
             style="display:inline-block;padding:16px 32px;color:${E.white};text-decoration:none;font-family:Arial,sans-serif;font-size:10px;letter-spacing:0.25em;text-transform:uppercase;font-weight:400;">
            View Asset Brief &nbsp;→
          </a>
        </td>
      </tr>
    </table>
  </td></tr>

  <!-- Divider -->
  <tr><td style="padding:0 40px;">
    <hr style="border:none;border-top:1px solid ${E.hairline};margin:0;">
  </td></tr>

  <!-- What to expect -->
  <tr><td style="padding:24px 40px 32px;">
    <p style="margin:0 0 14px;font-family:Arial,sans-serif;font-size:9px;letter-spacing:0.25em;text-transform:uppercase;color:${E.tobacco};">
      What to Expect
    </p>
    ${isDigital ? `
    <table width="100%" cellpadding="0" cellspacing="0">
      ${['Instant digital access via the button above', 'Future editions of the Nairobi Private Commercial Asset Brief', 'Commercial real estate market intelligence and institutional insights', 'Curated investment opportunities and deal flow alerts'].map(item => `
      <tr>
        <td style="padding:6px 0;border-bottom:1px solid ${E.hairline};">
          <table cellpadding="0" cellspacing="0"><tr>
            <td style="width:12px;padding-right:10px;font-family:Arial,sans-serif;font-size:10px;color:${E.tobacco};vertical-align:top;padding-top:2px;">—</td>
            <td style="font-family:Arial,sans-serif;font-size:13px;color:${E.charcoalL};line-height:1.6;font-weight:300;">${item}</td>
          </tr></table>
        </td>
      </tr>`).join('')}
    </table>
    ` : `
    <table width="100%" cellpadding="0" cellspacing="0">
      ${['Physical copy dispatched within 12–24 hours of payment confirmation', 'Email confirmation once your physical copy is dispatched', 'Instant digital access available via the button above', 'Future editions and commercial real estate intelligence from Murivest Realty Ltd'].map(item => `
      <tr>
        <td style="padding:6px 0;border-bottom:1px solid ${E.hairline};">
          <table cellpadding="0" cellspacing="0"><tr>
            <td style="width:12px;padding-right:10px;font-family:Arial,sans-serif;font-size:10px;color:${E.tobacco};vertical-align:top;padding-top:2px;">—</td>
            <td style="font-family:Arial,sans-serif;font-size:13px;color:${E.charcoalL};line-height:1.6;font-weight:300;">${item}</td>
          </tr></table>
        </td>
      </tr>`).join('')}
    </table>
    `}
  </td></tr>

  <!-- Signature -->
  <tr><td style="padding:0 40px 36px;border-top:1px solid ${E.hairline};">
    <p style="margin:24px 0 4px;font-size:15px;color:${E.charcoal};font-weight:400;">
      Murivest Realty Ltd
    </p>
    <p style="margin:0;font-family:Arial,sans-serif;font-size:12px;color:${E.tobaccoL};line-height:1.6;">
      Institutional Real Estate Intelligence · Nairobi, Kenya<br>
      <a href="mailto:investments@murivest.co.ke" style="color:${E.tobacco};text-decoration:none;">investments@murivest.co.ke</a>
    </p>
  </td></tr>

  <!-- Bottom rule -->
  <tr><td style="background:${E.charcoal};padding:0;height:2px;"></td></tr>

  <!-- Footer -->
  <tr><td style="background:${E.creamDark};padding:14px 40px;">
    <p style="margin:0;font-family:Arial,sans-serif;font-size:9.5px;color:${E.tobaccoL};line-height:1.7;letter-spacing:0.02em;">
      This publication is intended exclusively for qualified institutional investors and accredited individuals.
      Not a solicitation or offer to purchase securities or real estate assets.
      Data sourced from KNBS, Statista, Knight Frank, Altrata, and Cytonn Research.
      To unsubscribe, reply with "Unsubscribe" in the subject line.
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
  const rows: [string, unknown][] = [
    ['Name',             data.name],
    ['Email',            data.email],
    ['Phone',            data.phone || 'N/A'],
    ['Company',          data.company],
    ['Title',            data.title || 'N/A'],
    ['AUM',              data.investorType],
    ['Investment Focus', data.investmentFocus || 'N/A'],
    ['Copy Type',        data.deliveryType],
    ['Amount',           isHard ? 'KES 2,000 (S&H)' : 'Complimentary'],
    ['Delivery Address', data.shippingAddress || (isHard ? '⚠️ Not provided' : 'N/A — Digital')],
    ['Source',           data.source],
  ];

  return {
    subject: `[NPCAB Lead] ${data.name} · ${data.company} · ${isHard ? '⚠️ Hard Copy' : '✅ Digital'}`,
    html: `
<table style="font-family:Arial,sans-serif;font-size:13px;color:#2C2C2C;max-width:540px;border-collapse:collapse;border:1px solid #E5E2DC;">
  <tr>
    <td style="background:#2C2C2C;padding:16px 20px;color:#F8F7F4;font-size:15px;border-bottom:2px solid #8B7355;">
      New Investor Lead — Nairobi Private Commercial Asset Brief
    </td>
  </tr>
  <tr><td style="padding:20px;">
    ${rows.map(([k, v]) => `
    <div style="display:flex;gap:8px;margin-bottom:10px;padding-bottom:10px;border-bottom:1px solid #E5E2DC;">
      <strong style="min-width:140px;color:#8B7355;flex-shrink:0;font-weight:400;">${k}:</strong>
      <span style="color:#4A4A4A;word-break:break-word;">${v}</span>
    </div>`).join('')}

    ${isHard
      ? `<div style="background:#F8F3EC;border-left:2px solid #8B7355;padding:14px;margin-top:14px;">
           <strong style="color:#2C2C2C;font-weight:400;">Action Required</strong><br>
           <span style="font-size:12px;color:#4A4A4A;line-height:1.7;">
             Hard copy requested. Await M-Pesa payment confirmation, then dispatch physical copy to:<br><br>
             <strong style="color:#2C2C2C;">${data.shippingAddress || 'Address not yet confirmed'}</strong>
           </span>
         </div>`
      : `<div style="background:#F0F8F0;border-left:2px solid #5A8B5A;padding:12px;margin-top:14px;">
           <span style="font-size:12px;color:#4A4A4A;">✅ Digital copy automatically dispatched to investor email.</span>
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

    const transporter  = createTransporter();
    const resolvedFlip = flipUrl || process.env.FLIPHTML5_URL || '#';

    // 1. Investor confirmation email
    const confirmTpl = investorConfirmationEmail({
      name, email, company, deliveryType,
      shippingAddress: shippingAddress || '',
      flipUrl: resolvedFlip,
    });
    await transporter.sendMail({
      from: process.env.SMTP_FROM, to: email,
      subject: confirmTpl.subject, html: confirmTpl.html,
    });

    // 2. Internal alert
    const alertTpl = internalAlertEmail({
      name, email, phone: body.phone, company, title,
      investorType, investmentFocus, deliveryType,
      shippingAddress: shippingAddress || 'N/A',
      source,
    });
    await transporter.sendMail({
      from: process.env.SMTP_FROM, to: process.env.ALERT_EMAIL,
      subject: alertTpl.subject, html: alertTpl.html,
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