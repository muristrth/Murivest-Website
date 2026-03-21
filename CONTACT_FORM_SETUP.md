# Contact Form Email Setup

This document explains how to set up the contact form email functionality for the Murivest website.

## Overview

The contact form now sends form submissions directly to your email using Nodemailer. When a user submits the contact form, you will receive:

1. **Notification Email**: A detailed email with all form data sent to your specified email address
2. **Confirmation Email**: An automatic thank-you email sent to the user

## Setup Instructions

### 1. Environment Variables

Create a `.env.local` file in your project root (copy from `.env.example`) and configure the following variables:

```env
# Email Configuration
SMTP_HOST="smtp.gmail.com"
SMTP_PORT=587
SMTP_USER="your-email@gmail.com"
SMTP_PASS="your-app-password"
CONTACT_EMAIL="advisory@murivest.com"
```

### 2. Gmail Setup (if using Gmail)

If you're using Gmail as your SMTP provider:

1. **Enable 2-Factor Authentication** on your Google account
2. **Generate an App Password**:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a password for "Mail"
   - Use this 16-character password as `SMTP_PASS`

3. **Allow less secure apps** (if needed):
   - Some Gmail accounts may require this setting
   - Go to Google Account settings → Security → Less secure app access

### 3. Alternative Email Providers

#### Outlook/Hotmail
```env
SMTP_HOST="smtp-mail.outlook.com"
SMTP_PORT=587
SMTP_USER="your-email@outlook.com"
SMTP_PASS="your-password"
```

#### Yahoo
```env
SMTP_HOST="smtp.mail.yahoo.com"
SMTP_PORT=587
SMTP_USER="your-email@yahoo.com"
SMTP_PASS="your-app-password"
```

#### Custom SMTP Server
```env
SMTP_HOST="your-smtp-server.com"
SMTP_PORT=587
SMTP_USER="your-email@yourdomain.com"
SMTP_PASS="your-password"
```

## Email Content

### Notification Email (sent to you)
Contains all form data in a formatted HTML email:
- Name
- Email
- Phone (if provided)
- Investment Range (if provided)
- Property Type Interest (if provided)
- Message
- Submission timestamp

### Confirmation Email (sent to user)
A professional thank-you email confirming receipt of their inquiry.

## Testing

1. **Start the development server**:
   ```bash
   npm run dev
   ```

2. **Submit a test form**:
   - Go to `/contact` page
   - Fill out and submit the form
   - Check your email for the notification
   - Check the user's email for confirmation

3. **Check server logs** for any errors

## Troubleshooting

### Common Issues

1. **"Authentication failed" error**:
   - Verify SMTP credentials
   - For Gmail, ensure you're using an App Password, not your regular password
   - Check if 2FA is enabled and App Password is correct

2. **"Connection timeout" error**:
   - Verify SMTP_HOST and SMTP_PORT are correct
   - Check if your network allows SMTP connections
   - Try using port 465 with `secure: true` for SSL

3. **Emails not being delivered**:
   - Check spam/junk folders
   - Verify the recipient email address
   - Check SMTP server logs if available

### Debug Mode

Add this to your environment variables for detailed logging:
```env
DEBUG=nodemailer:*
```

## Security Notes

- Never commit `.env.local` to version control
- Use App Passwords instead of regular passwords for Gmail
- Consider using dedicated SMTP services like SendGrid, Mailgun, or AWS SES for production
- The API route includes basic input validation and sanitization

## Production Deployment

For production environments, consider using:
- **SendGrid**: Professional email delivery service
- **Mailgun**: Reliable SMTP service
- **AWS SES**: Amazon's email service
- **Postmark**: High-deliverability email service

These services provide better deliverability, analytics, and support than basic SMTP.