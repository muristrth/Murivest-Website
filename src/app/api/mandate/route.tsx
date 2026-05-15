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
        rejectUnauthorized: true, // Set to true in production
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
    const companyEmail = 'capital@murivest.co.ke';
    
    console.log('Sending emails to:', { seller: sellerEmail, company: companyEmail });

    // HTML Email Template
    const htmlTemplate = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Authority to Sell - Mandate Confirmation</title>
      </head>
      <body style="margin: 0; padding: 0; background-color: #f5f7fa; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
        
        <!-- Header -->
        <table width="100%" cellpadding="0" cellspacing="0" style="background: linear-gradient(135deg, #0a192f 0%, #1e3a8a 100%); padding: 40px 0;">
          <tr>
            <td align="center">
              <table width="600" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="text-align: center; padding: 20px;">
                    <h1 style="color: #d4af37; font-size: 32px; margin: 0; font-weight: 700; letter-spacing: 2px;">
                      MURIVEST REALTY LIMITED
                    </h1>
                    <p style="color: #ffffff; font-size: 14px; margin: 10px 0 0 0; font-weight: 300; letter-spacing: 1px;">
                      Transforming Real Estate Transactions
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>

        <!-- Main Content -->
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td align="center" style="padding: 40px 0;">
              <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; box-shadow: 0 8px 24px rgba(0,0,0,0.12);">
                <tr>
                  <td style="padding: 50px;">
                    
                    <!-- Mandate Reference -->
                    <table width="100%" style="background: linear-gradient(135deg, #f8f9fa 0%, #e2e8f0 100%); border-left: 6px solid #d4af37; border-radius: 6px; margin-bottom: 40px;">
                      <tr>
                        <td style="padding: 20px;">
                          <p style="margin: 0; color: #0a192f; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px;">
                            Official Mandate Reference Number
                          </p>
                          <p style="margin: 8px 0 0 0; color: #d4af37; font-size: 24px; font-weight: 800; letter-spacing: 2px;">
                            ${mandateRef}
                          </p>
                        </td>
                      </tr>
                    </table>

                    <!-- Title -->
                    <h2 style="color: #0a192f; font-size: 26px; margin: 0 0 25px 0; font-weight: 800; text-transform: uppercase; letter-spacing: 1px;">
                      Authority to Sell – Formal Mandate Acknowledgment
                    </h2>
                    
                    <p style="color: #475569; font-size: 15px; margin: 0 0 35px 0; line-height: 1.7;">
                      This communication serves as official confirmation that <strong style="color: #0a192f;">Murivest Realty Limited</strong> 
                      has been granted formal authority to market and facilitate the sale of the property detailed below, 
                      pursuant to the terms and conditions herein contained.
                    </p>

                    <!-- Section 1: Vendor Info -->
                    <table width="100%" style="margin-bottom: 35px;">
                      <tr>
                        <td style="border-bottom: 3px solid #d4af37; padding-bottom: 12px;">
                          <h3 style="color: #0a192f; font-size: 18px; margin: 0; font-weight: 800; text-transform: uppercase; letter-spacing: 1px;">
                            Section 1: Vendor Information
                          </h3>
                        </td>
                      </tr>
                    </table>
                    
                    <table width="100%" style="margin-bottom: 30px; background: #f8fafc; border-radius: 8px;">
                      <tr>
                        <td style="padding: 20px;">
                      <table width="100%">
                        <tr>
                          <td width="50%" style="padding: 10px 0;">
                            <p style="margin: 0; color: #64748b; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">Full Legal Name</p>
                            <p style="margin: 6px 0 0 0; color: #0a192f; font-size: 15px; font-weight: 600;">${data.vendorName}</p>
                          </td>
                          <td width="50%" style="padding: 10px 0;">
                            <p style="margin: 0; color: #64748b; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">Identification No.</p>
                            <p style="margin: 6px 0 0 0; color: #0a192f; font-size: 15px; font-weight: 600;">${data.vendorId}</p>
                          </td>
                        </tr>
                        <tr>
                          <td width="50%" style="padding: 10px 0;">
                            <p style="margin: 0; color: #64748b; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">Primary Contact</p>
                            <p style="margin: 6px 0 0 0; color: #0a192f; font-size: 15px; font-weight: 600;">${data.phone}</p>
                          </td>
                          <td width="50%" style="padding: 10px 0;">
                            <p style="margin: 0; color: #64748b; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">Email Address</p>
                            <p style="margin: 6px 0 0 0; color: #0a192f; font-size: 15px; font-weight: 600;">${data.email}</p>
                          </td>
                        </tr>
                      </table>
                        </td>
                      </tr>
                    </table>

                    <!-- Section 2: Property Details -->
                    <table width="100%" style="margin-bottom: 35px;">
                      <tr>
                        <td style="border-bottom: 3px solid #d4af37; padding-bottom: 12px;">
                          <h3 style="color: #0a192f; font-size: 18px; margin: 0; font-weight: 800; text-transform: uppercase; letter-spacing: 1px;">
                            Section 2: Property & Transaction Details
                          </h3>
                        </td>
                      </tr>
                    </table>
                    
                    <table width="100%" style="margin-bottom: 30px; background: #f8fafc; border-radius: 8px;">
                      <tr>
                        <td style="padding: 20px;">
                      <table width="100%">
                        <tr>
                          <td width="50%" style="padding: 10px 0;">
                            <p style="margin: 0; color: #64748b; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">Property Title No.</p>
                            <p style="margin: 6px 0 0 0; color: #0a192f; font-size: 15px; font-weight: 600;">${data.titleNumber}</p>
                          </td>
                          <td width="50%" style="padding: 10px 0;">
                            <p style="margin: 0; color: #64748b; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">Physical Location</p>
                            <p style="margin: 6px 0 0 0; color: #0a192f; font-size: 15px; font-weight: 600;">${data.location}</p>
                          </td>
                        </tr>
                        <tr>
                          <td width="50%" style="padding: 10px 0;">
                            <p style="margin: 0; color: #64748b; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">Listing Price</p>
                            <p style="margin: 6px 0 0 0; color: #0a192f; font-size: 15px; font-weight: 600;">KES ${parseInt(data.price || '0').toLocaleString()}</p>
                          </td>
                          <td width="50%" style="padding: 10px 0;">
                            <p style="margin: 0; color: #64748b; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">Professional Commission</p>
                            <p style="margin: 6px 0 0 0; color: #0a192f; font-size: 15px; font-weight: 600;">${data.commission}</p>
                          </td>
                        </tr>
                      </table>
                        </td>
                      </tr>
                    </table>

                    <!-- Authorization Statement -->
                    <table width="100%" style="background: linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%); border: 1px solid #f59e0b; border-radius: 8px; margin: 35px 0;">
                      <tr>
                        <td style="padding: 25px;">
                          <p style="margin: 0; color: #92400e; font-size: 14px; line-height: 1.7; font-style: italic;">
                            <strong>Authorization & Verification:</strong> By execution of this mandate, the Vendor hereby 
                            confirms that all information provided herein is true, accurate, and complete to the best of 
                            their knowledge. The Vendor further warrants that they possess the requisite legal authority 
                            to effect the sale of the aforementioned property. Murivest Realty Limited is hereby 
                            authorized to commence marketing activities immediately upon receipt of this formal acknowledgment.
                          </p>
                        </td>
                      </tr>
                    </table>

                    <!-- Important Notice -->
                    <table width="100%" style="background: linear-gradient(135deg, #fef2f2 0%, #fecaca 100%); border: 1px solid #ef4444; border-radius: 8px; margin: 35px 0;">
                      <tr>
                        <td style="padding: 20px;">
                          <p style="margin: 0; color: #b91c1c; font-size: 13px; font-weight: 700; text-transform: uppercase;">
                            ⚠️ IMPORTANT NOTICE FOR MURIVEST ADMINISTRATION
                          </p>
                          <p style="margin: 12px 0 0 0; color: #7f1d1d; font-size: 13px; line-height: 1.6;">
                            Prior to finalizing the Authority to Sell document for signature, please conduct due diligence 
                            by cross-referencing the Property Title Number against the Vendor's official Identification 
                            Documents to verify ownership authenticity and legal capacity.
                          </p>
                        </td>
                      </tr>
                    </table>

                    <p style="color: #64748b; font-size: 13px; margin: 30px 0 0 0; text-align: center; font-style: italic;">
                      This electronic communication constitutes a binding record of the marketing commencement date 
                      and shall be retained for compliance and audit purposes in accordance with Kenyan law.
                    </p>

                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>

        <!-- Footer -->
        <table width="100%" cellpadding="0" cellspacing="0" style="background: linear-gradient(135deg, #0a192f 0%, #1e3a8a 100%); padding: 50px 0; margin-top: 50px;">
          <tr>
            <td align="center">
              <table width="600" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="text-align: center; padding-bottom: 25px;">
                    <h3 style="color: #d4af37; font-size: 22px; margin: 0 0 12px 0; font-weight: 800;">
                      Murivest Realty Limited
                    </h3>
                    <p style="color: #e2e8f0; font-size: 14px; margin: 0; font-weight: 500;">
                      Licensed Real Estate Agency | Estate Agents Registration Board (EARB) Kenya
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="border-top: 2px solid #1e40af; padding-top: 25px; text-align: center;">
                    <p style="margin: 0 0 12px 0; color: #cbd5e1; font-size: 13px; font-weight: 500;">
                      <strong style="color: #d4af37;">Registered Office:</strong> 
                      Westlands, Nairobi, Kenya
                    </p>
                    <p style="margin: 0 0 12px 0; color: #cbd5e1; font-size: 13px; font-weight: 500;">
                      <strong style="color: #d4af37;">Investments & Mandates:</strong> 
                       <a href="mailto:capital@murivest.co.ke" style="color: #d4af37; text-decoration: none;">capital@murivest.co.ke</a>
                      | <strong style="color: #d4af37;">Tel:</strong> +254 787 707 284
                    </p>
                    <p style="margin: 25px 0 0 0; color: #94a3b8; font-size: 11px; line-height: 1.6; text-align: justify;">
                      <strong>CONFIDENTIALITY NOTICE:</strong> This document contains confidential and privileged information intended solely for the named recipient(s). 
                      If you have received this communication in error, please notify the sender immediately and delete all copies from your system. 
                      Unauthorized dissemination, distribution, copying, or disclosure is strictly prohibited and may be unlawful.
                    </p>
                    <p style="margin: 20px 0 0 0; color: #94a3b8; font-size: 11px;">
                      <strong>DISCLAIMER:</strong> This mandate acknowledgment does not constitute a legally binding contract until a formal Authority to Sell agreement is executed by both parties.
                    </p>
                    <p style="margin: 25px 0 0 0; color: #94a3b8; font-size: 11px; font-weight: 600;">
                      © ${new Date().getFullYear()} Murivest Realty Limited. All Rights Reserved. 
                      | <a href="#" style="color: #94a3b8;">Privacy Policy</a> | <a href="#" style="color: #94a3b8;">Terms of Service</a>
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
         address: process.env.SMTP_USER || 'capital@murivest.co.ke'
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