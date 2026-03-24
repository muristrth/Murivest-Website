// Order fulfilled email template
export function generateOrderFulfilledEmail(
  name: string,
  orderType: string,
  itemTitle: string,
  _downloadLink?: string
): { subject: string; html: string } {
  return {
    subject: `Order Fulfilled - ${itemTitle}`,
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
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Murivest</h1>
          </div>
          <div class="content">
            <h2>Order Fulfilled</h2>
            <p>Hello ${name},</p>
            <div class="success">
              ✓ Your order has been fulfilled
            </div>
            <p><strong>Order Type:</strong> ${orderType}</p>
            <p><strong>Item:</strong> ${itemTitle}</p>
          </div>
        </div>
      </body>
      </html>
    `,
  }
}

// API route export wrapper
export async function sendOrderFulfilledEmail(
  _name: string,
  _orderType: string,
  _itemTitle: string
): Promise<boolean> {
  console.log('Order fulfilled email would be sent')
  return true
}