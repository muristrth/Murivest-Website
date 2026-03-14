/**
 * src/app/api/mpesa-confirmation/route.ts — GOLF CLUB LOUNGE EDITION
 * ─────────────────────────────────────────────────────────────────────────────
 * Handles M-Pesa confirmation for hard copy orders.
 * → Sends investor "payment confirmed" email (lounge-styled)
 * → Sends internal urgent dispatch alert with shipping address + M-Pesa message
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

/* ── Lounge palette ──────────────────────────────────────────────────────── */
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

/* ── Investor payment confirmed email ────────────────────────────────────── */
function paymentConfirmedEmail(data: {
  name: string; email: string; company: string;
  shippingAddress: string; mpesaMessage: string; flipUrl: string;
}) {
  const firstName = data.name.split(' ')[0];

  return {
    subject: `Payment Confirmed — Physical Copy Dispatching Within 12–24h · Murivest Realty`,
    html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0;padding:0;background:${E.creamDark};font-family:'Georgia',serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:${E.creamDark};padding:36px 16px;">
<tr><td align="center">
<table width="100%" style="max-width:560px;background:${E.cream};border:1px solid ${E.hairline};">

  <!-- Top rule -->
  <tr><td style="background:${E.charcoal};padding:0;height:3px;"></td></tr>

  <!-- Header -->
  <tr><td style="padding:36px 40px 28px;border-bottom:1px solid ${E.hairline};">
    <p style="margin:0 0 14px;font-family:Arial,sans-serif;font-size:9px;letter-spacing:0.3em;text-transform:uppercase;color:${E.tobacco};">
      Payment Confirmed · Physical Copy Order
    </p>
    <h1 style="margin:0 0 6px;font-size:26px;font-weight:400;color:${E.charcoal};line-height:1.2;">
      Nairobi Private Commercial Asset Brief
    </h1>
    <p style="margin:0;font-family:Arial,sans-serif;font-size:12px;color:${E.tobaccoL};font-style:italic;">
      Murivest Realty Ltd · Physical Copy Dispatch Confirmation
    </p>
  </td></tr>

  <!-- Confirmation status -->
  <tr><td style="padding:24px 40px 0;">
    <p style="margin:0 0 16px;font-size:16px;color:${E.charcoal};line-height:1.5;">
      Dear ${firstName},
    </p>
    <p style="margin:0 0 20px;font-family:Arial,sans-serif;font-size:14px;color:${E.charcoalL};line-height:1.8;font-weight:300;">
      We have received your payment confirmation for the <em>Nairobi Private Commercial Asset Brief</em> physical edition.
      <strong style="color:${E.charcoal};font-weight:400;">Your copy will be dispatched within 12–24 hours</strong> of payment verification.
    </p>
  </td></tr>

  <!-- Dispatch address -->
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

  <!-- Payment reference -->
  <tr><td style="padding:0 40px 24px;">
    <table width="100%" style="border:1px solid ${E.hairline};background:${E.creamDark};">
      <tr>
        <td style="padding:10px 16px;font-family:Arial,sans-serif;font-size:9px;letter-spacing:0.25em;text-transform:uppercase;color:${E.tobacco};border-bottom:1px solid ${E.hairline};">
          Payment Reference
        </td>
      </tr>
      <tr>
        <td style="padding:12px 16px;font-family:'Courier New',monospace;font-size:12px;color:${E.charcoal};line-height:1.6;word-break:break-all;">
          ${data.mpesaMessage}
        </td>
      </tr>
    </table>
  </td></tr>

  <!-- Digital access -->
  <tr><td style="padding:0 40px 28px;">
    <p style="margin:0 0 14px;font-family:Arial,sans-serif;font-size:14px;color:${E.charcoalL};line-height:1.8;font-weight:300;">
      Your <strong style="color:${E.charcoal};font-weight:400;">digital edition is available for immediate reading</strong> while your physical copy is being processed:
    </p>
    <table cellpadding="0" cellspacing="0">
      <tr>
        <td style="background:${E.tobacco};padding:0;">
          <a href="${data.flipUrl}" target="_blank"
             style="display:inline-block;padding:16px 32px;color:${E.white};text-decoration:none;font-family:Arial,sans-serif;font-size:10px;letter-spacing:0.25em;text-transform:uppercase;font-weight:400;">
            Read Digital Edition &nbsp;→
          </a>
        </td>
      </tr>
    </table>
  </td></tr>

  <!-- Divider -->
  <tr><td style="padding:0 40px;">
    <hr style="border:none;border-top:1px solid ${E.hairline};margin:0;">
  </td></tr>

  <!-- Delivery timeline -->
  <tr><td style="padding:24px 40px 32px;">
    <p style="margin:0 0 14px;font-family:Arial,sans-serif;font-size:9px;letter-spacing:0.25em;text-transform:uppercase;color:${E.tobacco};">
      Delivery Timeline
    </p>
    <table width="100%" cellpadding="0" cellspacing="0">
      ${[
        'Our team will verify your payment within 2–4 hours',
        'Dispatch confirmation email with tracking details to follow',
        'Physical copy delivered to your confirmed address within 12–24 hours',
        'Contact us on WhatsApp or email for any delivery queries',
      ].map(item => `
      <tr>
        <td style="padding:7px 0;border-bottom:1px solid ${E.hairline};">
          <table cellpadding="0" cellspacing="0"><tr>
            <td style="width:12px;padding-right:10px;font-family:Arial,sans-serif;font-size:10px;color:${E.tobacco};vertical-align:top;padding-top:2px;">—</td>
            <td style="font-family:Arial,sans-serif;font-size:13px;color:${E.charcoalL};line-height:1.6;font-weight:300;">${item}</td>
          </tr></table>
        </td>
      </tr>`).join('')}
    </table>
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
    <p style="margin:0;font-family:Arial,sans-serif;font-size:9.5px;color:${E.tobaccoL};line-height:1.7;">
      Payment confirmation for the Nairobi Private Commercial Asset Brief physical edition.
      ABSA Paybill 303030 · Account 2048650433. Not a solicitation or offer to purchase securities.
    </p>
  </td></tr>

</table>
</td></tr>
</table>
</body>
</html>`,
  };
}

/* ── Internal payment alert ──────────────────────────────────────────────── */
function internalPaymentAlert(data: {
  name: string; email: string; phone?: string; company: string;
  shippingAddress: string; mpesaMessage: string;
}) {
  const rows: [string, string][] = [
    ['Investor Name',    data.name],
    ['Email',            data.email],
    ['Phone',            data.phone || 'N/A'],
    ['Company',          data.company],
    ['Delivery Address', data.shippingAddress || '⚠️ Not provided'],
  ];

  return {
    subject: `⚠️ [PAYMENT CONFIRMED] ${data.name} · ${data.company} — Dispatch Physical Copy`,
    html: `
<table style="font-family:Arial,sans-serif;font-size:13px;color:#2C2C2C;max-width:540px;border-collapse:collapse;border:1px solid #E5E2DC;">
  <tr>
    <td style="background:#2C2C2C;padding:16px 20px;color:#F8F7F4;font-size:14px;border-bottom:2px solid #8B7355;">
      ⚠️ Payment Confirmed — Dispatch Physical Copy
    </td>
  </tr>
  <tr><td style="padding:20px;">
    <p style="margin:0 0 16px;font-size:13px;color:#4A4A4A;line-height:1.6;font-weight:300;">
      A hard copy order has been confirmed with payment. Please arrange dispatch within 12–24 hours.
    </p>

    ${rows.map(([k, v]) => `
    <div style="display:flex;gap:8px;margin-bottom:10px;padding-bottom:10px;border-bottom:1px solid #E5E2DC;">
      <strong style="min-width:140px;color:#8B7355;flex-shrink:0;font-weight:400;">${k}:</strong>
      <span style="color:#4A4A4A;word-break:break-word;">${v}</span>
    </div>`).join('')}

    <div style="background:#F8F3EC;border-left:2px solid #8B7355;padding:14px;margin:14px 0;">
      <strong style="color:#2C2C2C;font-weight:400;">M-Pesa Confirmation Message</strong><br>
      <span style="font-family:'Courier New',monospace;font-size:12px;color:#4A4A4A;word-break:break-all;line-height:1.6;">${data.mpesaMessage}</span>
    </div>

    <div style="background:#F0F8F0;border-left:2px solid #5A8B5A;padding:14px;">
      <strong style="color:#2C2C2C;font-weight:400;">Action Required</strong><br>
      <span style="font-size:12px;color:#4A4A4A;line-height:1.7;">
        ✅ Digital copy has been sent to the investor automatically.<br>
        📦 Verify M-Pesa payment and dispatch physical copy within 12–24 hours to:<br><br>
        <strong style="color:#2C2C2C;font-size:14px;">${data.shippingAddress || 'Address not provided — contact investor'}</strong>
      </span>
    </div>

    <p style="margin:14px 0 0;font-size:11px;color:#A68B6A;">Paybill: 303030 · Account: 2048650433 · ABSA Bank Kenya</p>
  </td></tr>
</table>`,
  };
}

/* ── Route handler ───────────────────────────────────────────────────────── */
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, company, shippingAddress, mpesaMessage, flipUrl } = body;

    if (!name || !email || !mpesaMessage) {
      return NextResponse.json({ success: false, error: 'Missing required fields.' }, { status: 400 });
    }

    const transporter  = createTransporter();
    const resolvedFlip = flipUrl || process.env.FLIPHTML5_URL || '#';

    // 1. Investor payment confirmed email
    const investorTpl = paymentConfirmedEmail({
      name, email, company,
      shippingAddress: shippingAddress || '',
      mpesaMessage,
      flipUrl: resolvedFlip,
    });
    await transporter.sendMail({
      from: process.env.SMTP_FROM, to: email,
      subject: investorTpl.subject, html: investorTpl.html,
    });

    // 2. Internal dispatch alert
    const alertTpl = internalPaymentAlert({
      name, email, phone, company,
      shippingAddress: shippingAddress || 'Not provided',
      mpesaMessage,
    });
    await transporter.sendMail({
      from: process.env.SMTP_FROM, to: process.env.ALERT_EMAIL,
      subject: alertTpl.subject, html: alertTpl.html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('[NPCAB] mpesa-confirmation error:', error);
    return NextResponse.json({ success: false, error: 'Internal server error.' }, { status: 500 });
  }
}

export function GET() {
  return NextResponse.json({ error: 'Method not allowed.' }, { status: 405 });
}