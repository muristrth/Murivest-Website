import nodemailer from 'nodemailer'

// Email configuration
const emailConfig = {
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER || '',
    pass: process.env.SMTP_PASS || '',
  },
}

// Create transporter
export const transporter = nodemailer.createTransport({
  host: emailConfig.host,
  port: emailConfig.port,
  secure: emailConfig.secure,
  auth: emailConfig.auth,
})

// Email from address
export const FROM_EMAIL = process.env.FROM_EMAIL || 'noreply@murivest.com'
export const FROM_NAME = 'Murivest Investor Relations'

// Verification email
export async function sendVerificationEmail(
  email: string,
  name: string,
  verificationUrl: string
): Promise<boolean> {
  try {
    await transporter.sendMail({
      from: `"${FROM_NAME}" <${FROM_EMAIL}>`,
      to: email,
      subject: 'Verify Your Murivest Investor Portal Account',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #1B4332; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #1B4332; color: white; padding: 20px; text-align: center; }
            .content { padding: 20px; background: #FAF9F6; }
            .button { display: inline-block; padding: 12px 24px; background: #B8956B; color: white; text-decoration: none; border-radius: 4px; margin: 20px 0; }
            .footer { padding: 20px; text-align: center; font-size: 12px; color: #666; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Murivest</h1>
            </div>
            <div class="content">
              <h2>Hello ${name},</h2>
              <p>Thank you for registering with the Murivest Investor Portal. To access your account, please verify your email address.</p>
              <p style="text-align: center;">
                <a href="${verificationUrl}" class="button">Verify Email</a>
              </p>
              <p>If you did not create this account, please ignore this email.</p>
              <p>This link will expire in 24 hours.</p>
            </div>
            <div class="footer">
              <p>© ${new Date().getFullYear()} Murivest. All rights reserved.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    })
    return true
  } catch (error) {
    console.error('Failed to send verification email:', error)
    return false
  }
}

// Contact notification
export async function sendContactNotification(
  email: string,
  name: string,
  subject: string,
  message: string
): Promise<boolean> {
  try {
    await transporter.sendMail({
      from: `"${FROM_NAME}" <${FROM_EMAIL}>`,
      to: email,
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #1B4332; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .content { padding: 20px; background: #FAF9F6; border: 1px solid #ddd; }
          </style>
        </head>
        <body>
          <div class="container">
            <h2>New Contact Form Submission</h2>
            <div class="content">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Subject:</strong> ${subject}</p>
              <p><strong>Message:</strong></p>
              <p>${message}</p>
            </div>
          </div>
        </body>
        </html>
      `,
    })
    return true
  } catch (error) {
    console.error('Failed to send contact notification:', error)
    return false
  }
}

// Newsletter welcome
export async function sendNewsletterWelcome(email: string): Promise<boolean> {
  try {
    await transporter.sendMail({
      from: `"${FROM_NAME}" <${FROM_EMAIL}>`,
      to: email,
      subject: 'Welcome to Murivest Insights',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #1B4332; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #1B4332; color: white; padding: 20px; text-align: center; }
            .content { padding: 20px; background: #FAF9F6; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Murivest</h1>
            </div>
            <div class="content">
              <h2>Welcome to Murivest Insights</h2>
              <p>Thank you for subscribing to our newsletter. You will now receive exclusive market insights, investment opportunities, and property updates directly to your inbox.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    })
    return true
  } catch (error) {
    console.error('Failed to send newsletter welcome:', error)
    return false
  }
}