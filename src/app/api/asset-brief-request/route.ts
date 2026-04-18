// app/api/asset-brief-request/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

interface RequestBody {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  organization: string;
  title: string;
  networth: string;
  interest: string;
  consentMarketing: boolean;
  consentTerms: boolean;
  qualificationStatus: 'qualified' | 'pending' | 'declined';
  submittedAt: string;
}

export async function POST(request: Request) {
  try {
    const body: RequestBody = await request.json();
    
    if (!body.email || !body.firstName || !body.lastName || !body.consentTerms) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '465'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });

    const networthMap: Record<string, string> = {
      'below_100m': 'Below KES 100M', '100m_500m': 'KES 100M – 500M',
      '500m_1b': 'KES 500M – 1B', '1b_5b': 'KES 1B – 5B',
      '5b_plus': 'KES 5B+', 'institutional': 'Institutional Mandate'
    };

    const statusColor = { qualified: '#22c55e', pending: '#B8956B', declined: '#ef4444' };

    // Read PDF file for attachment
    let pdfAttachment = null;
    try {
      const pdfPath = path.join(process.cwd(), 'public', 'assetbrief.pdf');
      if (fs.existsSync(pdfPath)) {
        pdfAttachment = {
          filename: 'Murivest_2026_Asset_Brief.pdf',
          content: fs.readFileSync(pdfPath),
          contentType: 'application/pdf'
        };
      }
    } catch (err) {
      console.error('PDF attachment error:', err);
    }

    const adminMailOptions = {
      from: process.env.FROM_EMAIL,
      to: process.env.ADMIN_EMAIL,
      subject: `Asset Brief Request - ${body.qualificationStatus.toUpperCase()}: ${body.firstName} ${body.lastName}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Georgia, serif; background-color: #0a0a0a; color: #FAF9F6; margin: 0; padding: 20px; }
            .container { max-width: 600px; margin: 0 auto; background: #111; border: 1px solid #B8956B; }
            .header { background: #1B4332; padding: 30px; text-align: center; border-bottom: 2px solid #B8956B; }
            .content { padding: 40px; }
            .status-badge { display: inline-block; padding: 8px 16px; background: ${statusColor[body.qualificationStatus]}; color: #0a0a0a; font-size: 0.75rem; letter-spacing: 0.2em; text-transform: uppercase; font-weight: bold; margin-bottom: 20px; }
            .field { margin-bottom: 20px; border-bottom: 1px solid rgba(184,149,107,0.2); padding-bottom: 10px; }
            .label { font-size: 0.7rem; letter-spacing: 0.2em; text-transform: uppercase; color: #B8956B; margin-bottom: 5px; }
            .value { font-size: 1.1rem; color: #FAF9F6; }
            .footer { background: #0a0a0a; padding: 20px; text-align: center; font-size: 0.7rem; color: rgba(250,249,246,0.5); border-top: 1px solid rgba(184,149,107,0.2); }
            .consent-box { background: rgba(27,67,50,0.3); border-left: 3px solid #B8956B; padding: 15px; margin: 20px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="color: #B8956B; font-size: 1.5rem; margin: 0;">MURIVEST</h1>
              <p style="color: rgba(250,249,246,0.6); font-size: 0.8rem; margin: 10px 0 0 0;">Private Asset Division</p>
            </div>
            <div class="content">
              <div class="status-badge">${body.qualificationStatus}</div>
              
              <div class="field"><div class="label">Submission Time</div><div class="value">${new Date(body.submittedAt).toLocaleString('en-KE', { timeZone: 'Africa/Nairobi' })}</div></div>
              <div class="field"><div class="label">Name</div><div class="value">${body.firstName} ${body.lastName}</div></div>
              <div class="field"><div class="label">Email</div><div class="value">${body.email}</div></div>
              <div class="field"><div class="label">Phone</div><div class="value">${body.phone}</div></div>
              <div class="field"><div class="label">Organization</div><div class="value">${body.organization}</div></div>
              <div class="field"><div class="label">Title</div><div class="value">${body.title}</div></div>
              <div class="field"><div class="label">Investable Capital</div><div class="value">${networthMap[body.networth]}</div></div>
              <div class="field"><div class="label">Interest</div><div class="value">${body.interest}</div></div>

              <div class="consent-box">
                <div class="label">Consent Given</div>
                <div class="value" style="font-size: 0.9rem;">
                  Marketing: ${body.consentMarketing ? 'Yes' : 'No'}<br>
                  Terms: ${body.consentTerms ? 'Yes' : 'No'}
                </div>
              </div>

              ${body.qualificationStatus === 'qualified' ? '<div style="background: rgba(34,197,94,0.1); border-left: 3px solid #22c55e; padding: 15px; margin-top: 30px;"><p style="margin: 0; color: #22c55e;"><strong>PDF ATTACHED & AUTO-DOWNLOAD TRIGGERED</strong></p></div>' : ''}
            </div>
            <div class="footer">
              <p>Murivest Realty Ltd • Private Capital Advisory</p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `ASSET BRIEF REQUEST - ${body.qualificationStatus.toUpperCase()}\n\nName: ${body.firstName} ${body.lastName}\nEmail: ${body.email}\nPhone: ${body.phone}\nOrg: ${body.organization}\nTitle: ${body.title}\nCapital: ${networthMap[body.networth]}\nMarketing Consent: ${body.consentMarketing}\nTerms Accepted: ${body.consentTerms}`
    };

    await transporter.sendMail(adminMailOptions);

    if (body.qualificationStatus === 'qualified') {
      const userMailOptions: any = {
        from: process.env.FROM_EMAIL,
        to: body.email,
        subject: 'Your Murivest Asset Brief Access | Private Circulation',
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <style>
              body { font-family: Georgia, serif; background-color: #0a0a0a; color: #FAF9F6; margin: 0; padding: 20px; }
              .container { max-width: 600px; margin: 0 auto; background: #111; border: 1px solid #B8956B; }
              .header { background: #1B4332; padding: 40px; text-align: center; border-bottom: 1px solid #B8956B; }
              .content { padding: 40px; }
              .cta { display: inline-block; margin: 30px 0; padding: 16px 32px; background: #B8956B; color: #0a0a0a; text-decoration: none; font-size: 0.75rem; letter-spacing: 0.2em; text-transform: uppercase; }
              .footer { background: #0a0a0a; padding: 30px; text-align: center; font-size: 0.75rem; color: rgba(250,249,246,0.5); border-top: 1px solid rgba(184,149,107,0.2); }
              .attachment-notice { background: rgba(184,149,107,0.1); border: 1px solid #B8956B; padding: 20px; margin: 30px 0; text-align: center; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1 style="color: #FAF9F6; font-size: 1.8rem; margin: 0; font-weight: 300;">Access Confirmed</h1>
                <p style="color: #B8956B; margin: 10px 0 0 0; font-size: 0.9rem; letter-spacing: 0.2em;">PRIVATE ASSET BRIEF 2026</p>
              </div>
              <div class="content">
                <p style="font-size: 1.1rem; line-height: 1.6;">Dear ${body.firstName},</p>
                <p>Your request for the Murivest Private Asset Brief has been approved. Welcome to our closed network of institutional investors.</p>
                
                <div class="attachment-notice">
                  <p style="margin: 0; color: #B8956B; font-size: 0.8rem; letter-spacing: 0.1em; text-transform: uppercase;">PDF Attached</p>
                  <p style="margin: 10px 0 0 0; font-size: 0.9rem; color: #FAF9F6;">Murivest_2026_Asset_Brief.pdf</p>
                </div>
                
                <p style="border-left: 2px solid #B8956B; padding-left: 20px; color: rgba(250,249,246,0.7); font-style: italic;">
                  "Select assets featured in past briefs achieved full occupancy prior to close and delivered consistent cashflow within year one of acquisition."
                </p>
                
                ${body.consentMarketing ? '<p style="font-size: 0.85rem; color: rgba(250,249,246,0.6); margin-top: 30px; padding-top: 20px; border-top: 1px solid rgba(184,149,107,0.2);">You have opted in to receive future Asset Briefs and market reports. You may unsubscribe at any time.</p>' : ''}
                
                <p style="margin-top: 40px;">Regards,<br><strong style="color: #B8956B;">Murivest Advisory Team</strong></p>
              </div>
              <div class="footer">
                <p>Murivest Realty Ltd • Nairobi, Kenya</p>
                <p style="margin-top: 10px; font-size: 0.65rem; color: rgba(250,249,246,0.3);">Confidential. Intended solely for the named recipient.</p>
              </div>
            </div>
          </body>
          </html>
        `,
        attachments: pdfAttachment ? [pdfAttachment] : []
      };

      await transporter.sendMail(userMailOptions);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Asset brief request error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}