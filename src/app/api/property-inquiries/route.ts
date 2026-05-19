import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface PropertyInquiryData {
  propertyType: string;
  location: string;
  price: string;
  name: string;
  email: string;
  phone: string;
  description: string;
  source: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: PropertyInquiryData = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.propertyType) {
      return NextResponse.json(
        { error: 'Name, email, and property type are required' },
        { status: 400 }
      );
    }

    // Create email transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '465'),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email content for internal team
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>New Property Disposition Inquiry - Murivest Realty Group</title>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;700&family=Inter:wght@300;400;500;600&display=swap');

            body {
              font-family: 'Inter', Arial, sans-serif;
              line-height: 1.6;
              color: #FFFFFF;
              margin: 0;
              padding: 0;
              background-color: #f8f9fb;
            }
            .container {
              max-width: 650px;
              margin: 0 auto;
              background: #ffffff;
              box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            }
            .header {
              background: linear-gradient(135deg, #FFFFFF 0%, #2d2d2d 100%);
              padding: 40px 30px;
              text-align: center;
              position: relative;
              overflow: hidden;
            }
            .header::before {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" patternUnits="userSpaceOnUse" width="100" height="100"><circle cx="20" cy="20" r="1" fill="%23ffffff" opacity="0.1"/><circle cx="80" cy="40" r="1" fill="%23ffffff" opacity="0.1"/><circle cx="40" cy="80" r="1" fill="%23ffffff" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
              opacity: 0.3;
            }
            .logo {
              position: relative;
              z-index: 2;
            }
            .logo img {
              max-height: 60px;
              width: auto;
            }
            .header h1 {
              font-family: 'Playfair Display', serif;
              color: #ffffff;
              margin: 20px 0 10px 0;
              font-size: 28px;
              font-weight: 700;
              position: relative;
              z-index: 2;
            }
            .header p {
              color: #e5e5e5;
              margin: 0;
              font-size: 16px;
              font-weight: 300;
              position: relative;
              z-index: 2;
            }
            .content {
              padding: 40px 30px;
              background: #ffffff;
            }
            .priority-banner {
              background: linear-gradient(90deg, #d4af37, #f4d03f);
              color: #FFFFFF;
              padding: 15px 25px;
              margin: -40px -30px 30px -30px;
              text-align: center;
              font-weight: 600;
              text-transform: uppercase;
              letter-spacing: 1px;
              font-size: 14px;
            }
            .field {
              margin-bottom: 25px;
              border-bottom: 1px solid #f0f0f0;
              padding-bottom: 15px;
            }
            .field:last-child {
              border-bottom: none;
              margin-bottom: 0;
            }
            .label {
              font-weight: 600;
              color: #FFFFFF;
              font-size: 14px;
              text-transform: uppercase;
              letter-spacing: 0.5px;
              margin-bottom: 8px;
            }
            .value {
              padding: 15px 20px;
              background: #f8f9fb;
              border-left: 4px solid #d4af37;
              font-size: 16px;
              color: #2d2d2d;
            }
            .investment-highlight {
              background: linear-gradient(135deg, #f8f9fb, #e8f4f8);
              border: 2px solid #d4af37;
              border-radius: 8px;
              padding: 20px;
              margin: 20px 0;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="logo">
                <img src="/logo.webp" alt="Murivest Realty Group" />
              </div>
              <h1>High-Priority Asset Disposition Inquiry</h1>
              <p>Institutional Property Mandate</p>
            </div>

            <div class="content">
              <div class="priority-banner">
                New Institutional Asset Disposition Lead - Immediate Attention Required
              </div>

              <div class="field">
                <div class="label">Property Owner Name:</div>
                <div class="value">${body.name}</div>
              </div>

              <div class="field">
                <div class="label">Contact Email:</div>
                <div class="value">${body.email}</div>
              </div>

              ${body.phone ? `
              <div class="field">
                <div class="label">Direct Phone:</div>
                <div class="value">${body.phone}</div>
              </div>
              ` : ''}

              <div class="investment-highlight">
                <div class="label">💰 Asset Class:</div>
                <div class="value" style="background: transparent; border: none; padding: 10px 0; font-size: 18px; font-weight: 600; color: #d4af37;">${body.propertyType}</div>
              </div>

              ${body.location ? `
              <div class="field">
                <div class="label">Property Location:</div>
                <div class="value">${body.location}</div>
              </div>
              ` : ''}

              ${body.price ? `
              <div class="field">
                <div class="label">Target Valuation:</div>
                <div class="value">${body.price}</div>
              </div>
              ` : ''}

              ${body.description ? `
              <div class="field">
                <div class="label">Asset Summary:</div>
                <div class="value">${body.description.replace(/\n/g, '<br>')}</div>
              </div>
              ` : ''}

              <div class="field">
                <div class="label">Inquiry Received:</div>
                <div class="value">${new Date().toLocaleString('en-KE', {
                  timeZone: 'Africa/Nairobi',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })} (EAT)</div>
              </div>

              <div style="margin-top: 30px; padding: 20px; background: #FFFFFF; color: white; text-align: center; border-radius: 8px;">
                <p style="margin: 0; font-weight: 600; font-size: 16px;">⚡ ACTION REQUIRED: Contact within 2 hours for optimal disposition strategy</p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    // Send email to internal team
    await transporter.sendMail({
      from: `"Murivest Asset Disposition Portal" <${process.env.SMTP_USER}>`,
       to: process.env.CONTACT_EMAIL || 'capital@murivest.co.ke',
      subject: `HIGH-PRIORITY: New Asset Disposition Inquiry from ${body.name}`,
      text: `New Property Disposition Inquiry - URGENT FOLLOW-UP REQUIRED\n\nOwner: ${body.name}\nEmail: ${body.email}\nProperty Type: ${body.propertyType}\nLocation: ${body.location}\nPrice: ${body.price}\nPhone: ${body.phone}\n\nDescription: ${body.description}`,
      html: htmlContent,
    });

    return NextResponse.json(
      { message: 'Property inquiry submitted successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Property inquiry submission error:', error);
    return NextResponse.json(
      { error: 'Failed to process your inquiry. Please contact us directly.' },
      { status: 500 }
    );
  }
}