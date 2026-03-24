// Payment approved email template
export function generatePaymentApprovedEmail(
  name: string,
  amount: number,
  currency: string,
  orderType: string
): { subject: string; html: string } {
  const symbol = currency === 'USD' ? '$' : currency === 'KES' ? 'KES ' : currency

  return {
    subject: 'Payment Verified - Murivest',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #1B4332; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #1B4332; color: white; padding: 20px; text-align: center; }
          .content { padding: 20px; background: #FAF9F6; }
          .success { background: #d4edda; border: 1px solid #c3e6cb; color: #155724; padding: 15px; text-align: center; border-radius: 4px; margin: 15px 0; }
          .amount { font-size: 32px; font-weight: bold; color: #B8956B; text-align: center; margin: 20px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Murivest</h1>
          </div>
          <div class="content">
            <h2>Payment Verified</h2>
            <p>Hello ${name},</p>
            <div class="success">
              ✓ Your payment has been verified successfully
            </div>
            <div class="amount">${symbol}${amount.toLocaleString()}</div>
            <p><strong>Order Type:</strong> ${orderType}</p>
            <p>Your access has been granted. You can now view your purchased content in the investor portal.</p>
          </div>
        </div>
      </body>
      </html>
    `,
  }
}

// Payment rejected email
export function generatePaymentRejectedEmail(
  name: string,
  amount: number,
  currency: string,
  reason: string
): { subject: string; html: string } {
  const symbol = currency === 'USD' ? '$' : currency === 'KES' ? 'KES ' : currency

  return {
    subject: 'Payment Verification Failed - Murivest',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #1B4332; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #1B4332; color: white; padding: 20px; text-align: center; }
          .content { padding: 20px; background: #FAF9F6; }
          .error { background: #f8d7da; border: 1px solid #f5c6cb; color: #721c24; padding: 15px; border-radius: 4px; margin: 15px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Murivest</h1>
          </div>
          <div class="content">
            <h2>Payment Verification Failed</h2>
            <p>Hello ${name},</p>
            <div class="error">
              Unfortunately, we were unable to verify your payment.
            </div>
            <p><strong>Amount:</strong> ${symbol}${amount.toLocaleString()}</p>
            <p><strong>Reason:</strong> ${reason}</p>
          </div>
        </div>
      </body>
      </html>
    `,
  }
}

// API route export wrapper
export async function sendPaymentApprovedEmail(
  _name: string,
  _amount: number,
  _currency: string,
  _orderType: string
): Promise<boolean> {
  // Email sending would be implemented here with actual email service
  console.log('Payment approved email would be sent')
  return true
}