import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { renderToBuffer } from '@react-pdf/renderer';
import { MandatePDF } from '@/components/MandatePDF';
import React from 'react';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    console.log('Received mandate data:', {
      vendorName: data.vendorName,
      email: data.email,
      titleNumber: data.titleNumber
    });

    // Validate required fields
    const requiredFields = ['vendorName', 'vendorId', 'email', 'phone', 
                           'titleNumber', 'location', 'price', 'commission'];
    
    for (const field of requiredFields) {
      if (!data[field] || data[field].toString().trim() === '') {
        console.error(`Missing required field: ${field}`);
        return NextResponse.json(
          { success: false, error: `${field} is required` }, 
          { status: 400 }
        );
      }
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email format' }, 
        { status: 400 }
      );
    }

    // Generate mandate reference
    const mandateRef = `ATS-${data.titleNumber.replace(/\//g, '').slice(-5)}-${Date.now().toString().slice(-6)}`;

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false, // Set to true in production
      },
    });

    // Verify transporter connection
    try {
      await transporter.verify();
      console.log('SMTP transporter verified successfully');
    } catch (verifyError) {
      console.error('SMTP verification failed:', verifyError);
      return NextResponse.json(
        { success: false, error: 'Email service temporarily unavailable' }, 
        { status: 503 }
      );
    }

    // Email recipients
    const sellerEmail = data.email;
    const companyEmail = 'murivestrealty@gmail.com';
    
    console.log('Sending emails to:', { seller: sellerEmail, company: companyEmail });

    // HTML Email Template
    // Email HTML Template - Old Money / Golf Club Lounge Aesthetic
const htmlTemplate = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Authority to Sell - Mandate Confirmation</title>
</head>
<body style="margin: 0; padding: 0; background-color: #FAF9F6; font-family: 'Cormorant Garamond', Georgia, 'Times New Roman', serif;">
  
  <!-- Header -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #1B4332; padding: 48px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0">
          <tr>
            <td style="text-align: center; padding: 24px;">
              <div style="border: 1px solid #B8956B; padding: 32px 48px; display: inline-block;">
                <h1 style="color: #FAF9F6; font-size: 28px; margin: 0; font-weight: 400; letter-spacing: 0.3em; text-transform: uppercase;">
                  Murivest
                </h1>
                <p style="color: #B8956B; font-size: 11px; margin: 12px 0 0 0; font-weight: 400; letter-spacing: 0.4em; text-transform: uppercase; font-family: 'Inter', system-ui, sans-serif;">
                  Realty Limited
                </p>
              </div>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>

  <!-- Main Content -->
  <table width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td align="center" style="padding: 48px 24px;">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #FFFFFF; border: 1px solid #E8E6E1;">
          <tr>
            <td style="padding: 56px 48px;">
              
              <!-- Mandate Reference -->
              <table width="100%" style="background-color: #FAF9F6; border-left: 3px solid #B8956B; margin-bottom: 40px;">
                <tr>
                  <td style="padding: 24px;">
                    <p style="margin: 0; color: #8B8680; font-size: 10px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.2em; font-family: 'Inter', system-ui, sans-serif;">
                      Mandate Reference
                    </p>
                    <p style="margin: 8px 0 0 0; color: #1B4332; font-size: 20px; font-weight: 400; letter-spacing: 0.15em; font-family: 'Cormorant Garamond', Georgia, serif;">
                      ${mandateRef}
                    </p>
                  </td>
                </tr>
              </table>

              <!-- Title -->
              <h2 style="color: #2C2C2C; font-size: 24px; margin: 0 0 24px 0; font-weight: 400; letter-spacing: 0.02em; line-height: 1.3;">
                Authority to Sell<br>
                <span style="color: #8B8680; font-style: italic; font-size: 20px;">Formal Mandate Acknowledgment</span>
              </h2>
              
              <div style="width: 48px; height: 1px; background-color: #B8956B; margin: 32px 0;"></div>

              <p style="color: #5A5A5A; font-size: 15px; margin: 0 0 40px 0; line-height: 1.8; font-weight: 300;">
                This communication serves as confirmation that <strong style="color: #1B4332; font-weight: 400;">Murivest Realty Limited</strong> 
                has been formally engaged to represent your property interests. We are honored to act as your exclusive advisor 
                in the disposition of the asset detailed herein.
              </p>

              <!-- Section 1: Vendor Info -->
              <table width="100%" style="margin-bottom: 32px;">
                <tr>
                  <td style="border-bottom: 1px solid #E8E6E1; padding-bottom: 16px;">
                    <p style="color: #1B4332; font-size: 11px; margin: 0; font-weight: 500; text-transform: uppercase; letter-spacing: 0.2em; font-family: 'Inter', system-ui, sans-serif;">
                      Principal Information
                    </p>
                  </td>
                </tr>
              </table>
              
              <table width="100%" style="margin-bottom: 40px;">
                <tr>
                  <td width="50%" style="padding: 0 16px 16px 0; vertical-align: top;">
                    <p style="margin: 0; color: #8B8680; font-size: 9px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.15em; font-family: 'Inter', system-ui, sans-serif;">Vendor Name</p>
                    <p style="margin: 6px 0 0 0; color: #2C2C2C; font-size: 14px; font-weight: 400; letter-spacing: 0.02em;">${data.vendorName}</p>
                  </td>
                  <td width="50%" style="padding: 0 0 16px 16px; vertical-align: top;">
                    <p style="margin: 0; color: #8B8680; font-size: 9px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.15em; font-family: 'Inter', system-ui, sans-serif;">Identification</p>
                    <p style="margin: 6px 0 0 0; color: #2C2C2C; font-size: 14px; font-weight: 400; letter-spacing: 0.02em;">${data.vendorId}</p>
                  </td>
                </tr>
                <tr>
                  <td width="50%" style="padding: 16px 16px 0 0; vertical-align: top; border-top: 1px solid #F5F4F0;">
                    <p style="margin: 0; color: #8B8680; font-size: 9px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.15em; font-family: 'Inter', system-ui, sans-serif;">Telephone</p>
                    <p style="margin: 6px 0 0 0; color: #2C2C2C; font-size: 14px; font-weight: 400; letter-spacing: 0.02em;">${data.phone}</p>
                  </td>
                  <td width="50%" style="padding: 16px 0 0 16px; vertical-align: top; border-top: 1px solid #F5F4F0;">
                    <p style="margin: 0; color: #8B8680; font-size: 9px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.15em; font-family: 'Inter', system-ui, sans-serif;">Email Address</p>
                    <p style="margin: 6px 0 0 0; color: #2C2C2C; font-size: 14px; font-weight: 400; letter-spacing: 0.02em;">${data.email}</p>
                  </td>
                </tr>
              </table>

              <!-- Section 2: Property Details -->
              <table width="100%" style="margin-bottom: 32px;">
                <tr>
                  <td style="border-bottom: 1px solid #E8E6E1; padding-bottom: 16px;">
                    <p style="color: #1B4332; font-size: 11px; margin: 0; font-weight: 500; text-transform: uppercase; letter-spacing: 0.2em; font-family: 'Inter', system-ui, sans-serif;">
                      Asset & Transaction Details
                    </p>
                  </td>
                </tr>
              </table>
              
              <table width="100%" style="margin-bottom: 40px;">
                <tr>
                  <td width="50%" style="padding: 0 16px 16px 0; vertical-align: top;">
                    <p style="margin: 0; color: #8B8680; font-size: 9px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.15em; font-family: 'Inter', system-ui, sans-serif;">Title Number</p>
                    <p style="margin: 6px 0 0 0; color: #2C2C2C; font-size: 14px; font-weight: 400; letter-spacing: 0.02em;">${data.titleNumber}</p>
                  </td>
                  <td width="50%" style="padding: 0 0 16px 16px; vertical-align: top;">
                    <p style="margin: 0; color: #8B8680; font-size: 9px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.15em; font-family: 'Inter', system-ui, sans-serif;">Location</p>
                    <p style="margin: 6px 0 0 0; color: #2C2C2C; font-size: 14px; font-weight: 400; letter-spacing: 0.02em;">${data.location}</p>
                  </td>
                </tr>
                <tr>
                  <td width="50%" style="padding: 16px 16px 0 0; vertical-align: top; border-top: 1px solid #F5F4F0;">
                    <p style="margin: 0; color: #8B8680; font-size: 9px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.15em; font-family: 'Inter', system-ui, sans-serif;">Indicative Value</p>
                    <p style="margin: 6px 0 0 0; color: #1B4332; font-size: 16px; font-weight: 400; letter-spacing: 0.02em;">KES ${parseInt(data.price || '0').toLocaleString()}</p>
                  </td>
                  <td width="50%" style="padding: 16px 0 0 16px; vertical-align: top; border-top: 1px solid #F5F4F0;">
                    <p style="margin: 0; color: #8B8680; font-size: 9px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.15em; font-family: 'Inter', system-ui, sans-serif;">Commission Structure</p>
                    <p style="margin: 6px 0 0 0; color: #2C2C2C; font-size: 14px; font-weight: 400; letter-spacing: 0.02em;">${data.commission}</p>
                  </td>
                </tr>
              </table>

              <!-- Authorization Statement -->
              <table width="100%" style="background-color: #FAF9F6; border: 1px solid #E8E6E1; margin: 40px 0;">
                <tr>
                  <td style="padding: 32px;">
                    <p style="margin: 0; color: #5A5A5A; font-size: 13px; line-height: 1.8; font-weight: 300; font-style: italic;">
                      By execution of this mandate, the undersigned confirms that all information provided is true, accurate, 
                      and complete to the best of their knowledge, and that they possess the requisite legal authority to 
                      effect the sale of the aforementioned property.
                    </p>
                    <div style="margin-top: 16px; padding-top: 16px; border-top: 1px solid #E8E6E1;">
                      <p style="margin: 0; color: #1B4332; font-size: 10px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.15em; font-family: 'Inter', system-ui, sans-serif;">
                        Marketing Authorization Granted
                      </p>
                    </div>
                  </td>
                </tr>
              </table>

              <!-- Internal Notice -->
              <table width="100%" style="background-color: #FEFCFA; border-left: 3px solid #B8956B; margin: 40px 0;">
                <tr>
                  <td style="padding: 24px;">
                    <p style="margin: 0; color: #8B8680; font-size: 9px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.2em; font-family: 'Inter', system-ui, sans-serif;">
                      Internal Advisory Notice
                    </p>
                    <p style="margin: 12px 0 0 0; color: #5A5A5A; font-size: 12px; line-height: 1.7; font-weight: 300;">
                      Prior to finalizing documentation, please verify title ownership against vendor identification 
                      and conduct standard due diligence as per firm protocols.
                    </p>
                  </td>
                </tr>
              </table>

              <div style="width: 48px; height: 1px; background-color: #B8956B; margin: 48px auto;"></div>

              <p style="color: #8B8680; font-size: 11px; margin: 0; text-align: center; font-weight: 300; font-style: italic; line-height: 1.6;">
                This communication constitutes a binding record of engagement commencement 
                and shall be retained for compliance purposes in accordance with Kenyan law.
              </p>

            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>

  <!-- Footer -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #1B4332; padding: 48px 24px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0">
          <tr>
            <td style="text-align: center; padding-bottom: 32px;">
              <div style="border: 1px solid #B8956B; padding: 24px 40px; display: inline-block; margin-bottom: 32px;">
                <p style="color: #FAF9F6; font-size: 20px; margin: 0; font-weight: 400; letter-spacing: 0.2em; text-transform: uppercase;">
                  Murivest Realty Limited
                </p>
              </div>
              <p style="color: #B8956B; font-size: 10px; margin: 0; font-weight: 400; letter-spacing: 0.3em; text-transform: uppercase; font-family: 'Inter', system-ui, sans-serif;">
                Licensed Real Estate Agency | Estate Agents Registration Board (EARB) Kenya
              </p>
            </td>
          </tr>
          <tr>
            <td style="border-top: 1px solid #2D5A45; padding-top: 32px; text-align: center;">
              <p style="margin: 0 0 8px 0; color: #8B8680; font-size: 12px; font-weight: 300; letter-spacing: 0.05em;">
                Westlands, Nairobi, Kenya
              </p>
              <p style="margin: 0 0 24px 0; color: #8B8680; font-size: 12px; font-weight: 300; letter-spacing: 0.05em;">
                <a href="mailto:investments@murivest.co.ke" style="color: #B8956B; text-decoration: none; border-bottom: 1px solid #B8956B;">investments@murivest.co.ke</a>
                <span style="color: #2D5A45; margin: 0 12px;">|</span>
                +254 729 170 156
              </p>
              
              <div style="width: 24px; height: 1px; background-color: #B8956B; margin: 24px auto;"></div>

              <p style="margin: 24px 0 0 0; color: #5A7A6A; font-size: 10px; line-height: 1.6; font-weight: 300; font-style: italic;">
                Confidential communication intended solely for the named recipient. 
                If received in error, please notify the sender immediately and delete all copies.
              </p>
              <p style="margin: 16px 0 0 0; color: #5A7A6A; font-size: 10px; font-weight: 300;">
                © ${new Date().getFullYear()} Murivest Realty Limited. All Rights Reserved.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>

</body>
</html>
`;

    // Send email to seller and CC company
    const mailOptions = {
      from: {
        name: 'Murivest Realty Limited',
        address: process.env.SMTP_USER || 'investments@murivest.co.ke'
      },
      to: sellerEmail,
      cc: companyEmail,
      subject: `Authority to Sell Mandate - ${mandateRef}`,
      html: htmlTemplate,
      priority: "high" as "high",
      attachments: [
        {
          filename: `Mandate-${mandateRef}.pdf`,
          contentType: 'application/pdf'
        }
      ],
      headers: {
        'X-Mandate-Ref': mandateRef,
        'X-Priority': '1',
        'Importance': 'high'
      }
    };
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', {
      messageId: info.messageId,
      mandateRef: mandateRef,
      accepted: info.accepted,
      rejected: info.rejected
    });

    return NextResponse.json({ 
      success: true, 
      mandateReference: mandateRef,
      message: 'Mandate executed and email sent successfully'
    });

  } catch (error) {
    console.error('Mandate execution failed:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to process mandate. Please try again.' }, 
      { status: 500 }
    );
  }
}