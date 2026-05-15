import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Email validation
function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// SMTP Transport (Gmail via custom SMTP config)
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === 'true', // true for 465
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const location = formData.get('location') as string;
    const currentRole = formData.get('currentRole') as string;
    const experience = formData.get('experience') as string;
    const linkedin = formData.get('linkedin') as string;
    const message = formData.get('message') as string;
    const cvFile = formData.get('cv') as File;

    // Validation
    if (!name || !email || !phone || !location || !experience || !message || !cvFile) {
      return NextResponse.json(
        { error: 'All required fields must be filled, including CV.' },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
    }

    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ];

    if (!allowedTypes.includes(cvFile.type)) {
      return NextResponse.json(
        { error: 'CV must be PDF, DOC, or DOCX.' },
        { status: 400 }
      );
    }

    if (cvFile.size > 5 * 1024 * 1024) {
      return NextResponse.json(
        { error: 'CV file must be less than 5 MB.' },
        { status: 400 }
      );
    }

    // Convert file to buffer
    const buffer = Buffer.from(await cvFile.arrayBuffer());

    const emailHtml = `
      <h2>New Career Application: Sales Associate</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Location:</strong> ${location}</p>
      <p><strong>Current Role:</strong> ${currentRole || 'Not provided'}</p>
      <p><strong>Experience:</strong> ${experience}</p>
      <p><strong>LinkedIn:</strong> ${linkedin || 'Not provided'}</p>
      <p><strong>Why Murivest?</strong><br/>${message.replace(/\n/g, '<br/>')}</p>
    `;

    // Send main email to hiring team
    await transporter.sendMail({
      from: `"${process.env.SMTP_FROM_NAME}" <${process.env.SMTP_FROM}>`,
      to: process.env.ADMIN_EMAIL || process.env.INVESTMENT_DESK_EMAIL,
      replyTo: email, // so you can reply directly to applicant
      subject: `New Job Application: ${name} - Sales Associate`,
      html: emailHtml,
      attachments: [
        {
          filename: cvFile.name,
          content: buffer,
        },
      ],
    });

    // Optional: send alert copy to internal inbox
    if (process.env.ALERT_EMAIL) {
      await transporter.sendMail({
        from: `"${process.env.SMTP_FROM_NAME}" <${process.env.SMTP_FROM}>`,
        to: process.env.ALERT_EMAIL,
        subject: `ALERT: New Application Received - ${name}`,
        html: `<p>A new application has been submitted by <strong>${name}</strong>.</p>`,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error.' },
      { status: 500 }
    );
  }
}