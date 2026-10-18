import nodemailer from 'nodemailer';
import {
  BUDGETS,
  CONTACT_METHODS,
  INTERESTS,
  INVESTOR_CATEGORIES,
  TIMEFRAMES,
  labelFor,
  type EnquiryPayload,
} from './uk-enquiry-schema';

/**
 * IMPORTANT: I could not see your repository, so these env names are the common
 * ones. The first one found is used. If your existing SMTP setup uses different
 * names, add them to the lists below, or replace sendUkEnquiryEmail() with a call
 * to your existing mail helper (see README).
 */
const env = (...names: string[]) => {
  for (const n of names) {
    const v = process.env[n];
    if (v && v.trim()) return v.trim();
  }
  return undefined;
};

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');

const oneLine = (s: string) => s.replace(/[\r\n]+/g, ' ').trim();

export async function sendUkEnquiryEmail(d: EnquiryPayload) {
  const host = env('SMTP_HOST', 'EMAIL_HOST', 'MAIL_HOST');
  const port = Number(env('SMTP_PORT', 'EMAIL_PORT', 'MAIL_PORT') ?? '587');
  const user = env('SMTP_USER', 'SMTP_USERNAME', 'EMAIL_USER', 'MAIL_USER');
  const pass = env('SMTP_PASS', 'SMTP_PASSWORD', 'EMAIL_PASS', 'EMAIL_PASSWORD', 'MAIL_PASS');
  const secure = (env('SMTP_SECURE', 'EMAIL_SECURE') ?? String(port === 465)) === 'true';
  const from = env('SMTP_FROM', 'EMAIL_FROM', 'MAIL_FROM') ?? user;
  const to = env(
    'UK_ENQUIRY_TO',
    'ENQUIRY_TO_EMAIL',
    'CONTACT_TO_EMAIL',
    'CONTACT_EMAIL',
    'ADMIN_EMAIL',
    'TO_EMAIL',
  ) ?? user;

  if (!host || !user || !pass || !from || !to) {
    throw new Error('SMTP environment variables are not fully configured');
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });

  const rows: Array<[string, string]> = [
    ['Name', d.fullName],
    ['Email', d.email],
    ['Phone / WhatsApp', d.phone],
    ['Country', d.country],
    ['City', d.city || 'Not provided'],
    ['Investor category (self-declared)', labelFor(INVESTOR_CATEGORIES, d.investorCategory)],
    ['Interest', labelFor(INTERESTS, d.interest)],
    ['Budget', labelFor(BUDGETS, d.budget)],
    ['Timeframe', labelFor(TIMEFRAMES, d.timeframe)],
    ['Preferred contact', labelFor(CONTACT_METHODS, d.contactMethod)],
    ['Source', d.ref || 'direct'],
    ['Consent given', 'Yes'],
  ];

  const text =
    rows.map(([k, v]) => `${k}: ${v}`).join('\n') +
    `\n\nMessage:\n${d.message || '(none)'}\n`;

  const html =
    `<table style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px">` +
    rows
      .map(
        ([k, v]) =>
          `<tr><td style="padding:6px 12px;border:1px solid #ddd;background:#faf9f6"><strong>${esc(k)}</strong></td>` +
          `<td style="padding:6px 12px;border:1px solid #ddd">${esc(v)}</td></tr>`,
      )
      .join('') +
    `</table><p style="font-family:Arial,sans-serif;font-size:14px"><strong>Message</strong><br>${esc(
      d.message || '(none)',
    ).replace(/\n/g, '<br>')}</p>`;

  await transporter.sendMail({
    from,
    to,
    replyTo: `${oneLine(d.fullName).replace(/[<>"]/g, '')} <${d.email}>`,
    subject: oneLine(`UK investor enquiry: ${d.fullName} (${labelFor(BUDGETS, d.budget)})`),
    text,
    html,
  });
}