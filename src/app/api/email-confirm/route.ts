import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

function createTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST!,
    port: parseInt(process.env.SMTP_PORT || '465', 10),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER!,
      pass: process.env.SMTP_PASS!,
    },
  })
}

function validatePaymentMessage(msg: string, expectedAmount: number): { valid: boolean; error: string } {
  const text = msg.trim()

  if (text.length < 30) {
    return { valid: false, error: 'Message too short. Please paste the complete M-Pesa confirmation SMS.' }
  }

  const requiredKeywords = ['Confirmed', 'Ksh', 'MARK MAINA MURIITHI', 'sent to']
  for (const kw of requiredKeywords) {
    if (!text.includes(kw)) {
      return { valid: false, error: `Missing required keyword: "${kw}".` }
    }
  }

  const amountStr = expectedAmount.toLocaleString()
  const hasCorrectAmount =
    text.includes(`Ksh ${amountStr}`) ||
    text.includes(`Ksh${amountStr}`) ||
    new RegExp(`Ksh\\s*${amountStr.replace(/,/g, '[,]?')}`).test(text)

  if (!hasCorrectAmount) {
    return { valid: false, error: `Amount must be exactly Ksh ${amountStr}.` }
  }

  if (!text.includes('478891')) {
    return { valid: false, error: 'Account number 478891 not found.' }
  }

  if (!/\d{1,2}:\d{2}\s*(AM|PM)/i.test(text)) {
    return { valid: false, error: 'Valid time not found.' }
  }

  if (!/[A-Z0-9]{8,12}/.test(text)) {
    return { valid: false, error: 'Transaction reference not found.' }
  }

  return { valid: true, error: '' }
}

// Enforce the same 1-day-advance booking rule server-side (defends
// against a bypassed/spoofed client request)
function isValidBookingDate(dateStr: string): boolean {
  if (!dateStr) return false
  const selected = new Date(dateStr)
  const minDate = new Date()
  minDate.setDate(minDate.getDate() + 1)
  minDate.setHours(0, 0, 0, 0)
  selected.setHours(0, 0, 0, 0)
  return selected >= minDate
}

function clientEmailTemplate(data: {
  fullName: string
  viewingType: string
  propertyLocation: string
  propertyName: string
  preferredDate: string
  preferredTime: string
  viewingFee: number
}) {
  const { fullName, viewingType, propertyLocation, propertyName, preferredDate, preferredTime, viewingFee } = data

  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Site Visit Confirmed · Murivest Realty</title>
</head>
<body style="margin:0;padding:0;background-color:#FAF9F6;font-family:Georgia,'Times New Roman',serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
    <tr>
      <td align="center" style="padding:48px 20px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;background:#ffffff;border:1px solid #E5E2DC;border-radius:8px;overflow:hidden;">
          <tr>
            <td style="background:#1B4332;padding:40px 40px 32px;text-align:center;">
              <div style="color:#D4B896;font-size:11px;letter-spacing:3px;text-transform:uppercase;margin-bottom:16px;">Murivest Realty</div>
              <h1 style="color:#ffffff;font-size:24px;font-weight:400;margin:0;letter-spacing:-0.5px;">Site Visit Confirmed</h1>
              <p style="color:rgba(255,255,255,0.6);font-size:14px;margin:12px 0 0;font-family:Arial,sans-serif;">Your appointment has been scheduled and verified.</p>
            </td>
          </tr>
          <tr>
            <td style="padding:40px;">
              <p style="color:#2C2C2C;font-size:15px;line-height:1.7;margin:0 0 24px;font-family:Arial,sans-serif;">
                Dear ${fullName},
              </p>
              <p style="color:#6B7280;font-size:14px;line-height:1.7;margin:0 0 32px;font-family:Arial,sans-serif;">
                Thank you for your payment. Your site visit has been confirmed. Kindly note that all viewings
                are scheduled subject to our advance-booking policy and preferred morning hours. A member of
                our advisory team will contact you within 24 hours to finalize arrangements.
              </p>

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#FAF9F6;border:1px solid #E5E2DC;border-radius:6px;margin-bottom:24px;">
                <tr><td style="padding:24px;">
                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                    <tr>
                      <td style="padding-bottom:12px;border-bottom:1px solid #E5E2DC;">
                        <span style="color:#9CA3AF;font-size:10px;letter-spacing:2px;text-transform:uppercase;font-family:Arial,sans-serif;">Viewing Type</span>
                        <p style="color:#2C2C2C;font-size:16px;margin:4px 0 0;font-weight:500;text-transform:capitalize;">${viewingType}</p>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:12px 0;border-bottom:1px solid #E5E2DC;">
                        <span style="color:#9CA3AF;font-size:10px;letter-spacing:2px;text-transform:uppercase;font-family:Arial,sans-serif;">Property</span>
                        <p style="color:#2C2C2C;font-size:16px;margin:4px 0 0;font-weight:500;">${propertyName || propertyLocation}</p>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:12px 0;border-bottom:1px solid #E5E2DC;">
                        <span style="color:#9CA3AF;font-size:10px;letter-spacing:2px;text-transform:uppercase;font-family:Arial,sans-serif;">Date & Time</span>
                        <p style="color:#2C2C2C;font-size:16px;margin:4px 0 0;font-weight:500;">${preferredDate} at ${preferredTime}</p>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding-top:12px;">
                        <span style="color:#9CA3AF;font-size:10px;letter-spacing:2px;text-transform:uppercase;font-family:Arial,sans-serif;">Viewing Fee Paid</span>
                        <p style="color:#1B4332;font-size:20px;margin:4px 0 0;font-weight:600;">Ksh ${viewingFee.toLocaleString()}</p>
                      </td>
                    </tr>
                  </table>
                </td></tr>
              </table>

              <p style="color:#6B7280;font-size:13px;line-height:1.6;margin:0;font-family:Arial,sans-serif;">
                If you need to reschedule, please contact us at least 24 hours in advance.
              </p>
            </td>
          </tr>
          <tr>
            <td style="background:#F5F4F0;padding:24px 40px;text-align:center;border-top:1px solid #E5E2DC;">
              <p style="color:#9CA3AF;font-size:11px;margin:0;font-family:Arial,sans-serif;letter-spacing:1px;">
                MURIVEST REALTY · NAIROBI, KENYA
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}

function adminEmailTemplate(data: {
  fullName: string
  email: string
  phone: string
  viewingType: string
  propertyLocation: string
  propertyName: string
  budget: string
  shopSize: string
  preferredDate: string
  preferredTime: string
  viewingFee: number
  mpesaMessage: string
}) {
  const {
    fullName, email, phone, viewingType, propertyLocation, propertyName,
    budget, shopSize, preferredDate, preferredTime, viewingFee, mpesaMessage,
  } = data

  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Site Visit Booking · Murivest</title>
</head>
<body style="margin:0;padding:0;background-color:#FAF9F6;font-family:Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
    <tr>
      <td align="center" style="padding:40px 20px;">
        <table role="presentation" width="640" cellpadding="0" cellspacing="0" border="0" style="max-width:640px;width:100%;background:#ffffff;border:1px solid #E5E2DC;border-radius:6px;">
          <tr>
            <td style="background:#1B4332;padding:28px 32px;">
              <span style="color:#D4B896;font-size:10px;letter-spacing:3px;text-transform:uppercase;">Admin Alert</span>
              <h1 style="color:#ffffff;font-size:20px;font-weight:400;margin:8px 0 0;">New Site Visit Booking</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr><td style="padding-bottom:16px;">
                  <span style="color:#9CA3AF;font-size:10px;letter-spacing:2px;text-transform:uppercase;">Client</span>
                  <p style="color:#2C2C2C;font-size:16px;margin:4px 0 0;font-weight:600;">${fullName}</p>
                  <p style="color:#6B7280;font-size:13px;margin:4px 0 0;">${email} · ${phone}</p>
                </td></tr>
                <tr><td style="padding:16px 0;border-top:1px solid #E5E2DC;">
                  <span style="color:#9CA3AF;font-size:10px;letter-spacing:2px;text-transform:uppercase;">Viewing Type</span>
                  <p style="color:#2C2C2C;font-size:15px;margin:4px 0 0;text-transform:capitalize;">${viewingType} · Ksh ${viewingFee.toLocaleString()}</p>
                </td></tr>
                <tr><td style="padding:16px 0;border-top:1px solid #E5E2DC;">
                  <span style="color:#9CA3AF;font-size:10px;letter-spacing:2px;text-transform:uppercase;">Property</span>
                  <p style="color:#2C2C2C;font-size:15px;margin:4px 0 0;">${propertyName || '—'} · ${propertyLocation}</p>
                </td></tr>
                <tr><td style="padding:16px 0;border-top:1px solid #E5E2DC;">
                  <span style="color:#9CA3AF;font-size:10px;letter-spacing:2px;text-transform:uppercase;">Schedule</span>
                  <p style="color:#2C2C2C;font-size:15px;margin:4px 0 0;">${preferredDate} at ${preferredTime}</p>
                </td></tr>
                ${budget ? `<tr><td style="padding:16px 0;border-top:1px solid #E5E2DC;">
                  <span style="color:#9CA3AF;font-size:10px;letter-spacing:2px;text-transform:uppercase;">Budget</span>
                  <p style="color:#2C2C2C;font-size:15px;margin:4px 0 0;">${budget}</p>
                </td></tr>` : ''}
                ${shopSize ? `<tr><td style="padding:16px 0;border-top:1px solid #E5E2DC;">
                  <span style="color:#9CA3AF;font-size:10px;letter-spacing:2px;text-transform:uppercase;">Shop Size</span>
                  <p style="color:#2C2C2C;font-size:15px;margin:4px 0 0;text-transform:capitalize;">${shopSize.replace('_', ' ')}</p>
                </td></tr>` : ''}
                <tr><td style="padding:16px 0;border-top:1px solid #E5E2DC;">
                  <span style="color:#9CA3AF;font-size:10px;letter-spacing:2px;text-transform:uppercase;">M-Pesa Confirmation</span>
                  <div style="background:#FAF9F6;border:1px solid #E5E2DC;border-radius:4px;padding:12px;margin-top:8px;">
                    <p style="color:#2C2C2C;font-size:13px;line-height:1.6;margin:0;white-space:pre-wrap;font-family:monospace;">${mpesaMessage.replace(/\n/g, '<br>')}</p>
                  </div>
                </td></tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const {
      fullName,
      email,
      phone,
      viewingType,
      propertyLocation,
      propertyName,
      budget,
      shopSize,
      preferredDate,
      preferredTime,
      viewingFee,
      mpesaMessage,
    } = body

    if (!fullName || !email || !phone || !viewingType || !propertyLocation || !preferredDate || !preferredTime || !mpesaMessage) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 })
    }

    if (!isValidBookingDate(preferredDate)) {
      return NextResponse.json(
        { error: 'Viewings must be booked at least one day in advance. Please choose a later date.' },
        { status: 400 }
      )
    }

    const validation = validatePaymentMessage(mpesaMessage, Number(viewingFee))
    if (!validation.valid) {
      return NextResponse.json(
        { error: `Payment could not be verified: ${validation.error} Please confirm that you pasted the complete M-Pesa confirmation SMS.` },
        { status: 400 }
      )
    }

    const transporter = createTransporter()

    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: email,
      subject: 'Site Visit Confirmed · Murivest Realty',
      html: clientEmailTemplate({
        fullName,
        viewingType,
        propertyLocation,
        propertyName,
        preferredDate,
        preferredTime,
        viewingFee: Number(viewingFee),
      }),
    })

    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.ALERT_EMAIL!,
      subject: `New Booking · ${fullName} · ${viewingType} · ${propertyName || propertyLocation}`,
      html: adminEmailTemplate({
        fullName,
        email,
        phone,
        viewingType,
        propertyLocation,
        propertyName,
        budget: budget || '',
        shopSize: shopSize || '',
        preferredDate,
        preferredTime,
        viewingFee: Number(viewingFee),
        mpesaMessage,
      }),
    })

    return NextResponse.json({ success: true, message: 'Payment verified and emails sent.' })
  } catch (error) {
    console.error('[email-confirm] error:', error)
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({ error: 'Method not allowed.' }, { status: 405 })
}