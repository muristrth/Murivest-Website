import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { createClient as createUserClient } from '@/lib/supabase/server'

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

function validatePaymentMessage(msg: string): string | null {
  const text = msg.trim()
  if (text.length < 10) return 'Please provide the full M-Pesa confirmation message.'

  const hasCode = /[A-Z0-9]{8,12}/i.test(text)
  const hasAmount = /2000|2,000|kes\s*2000|ksh\s*2000/i.test(text)

  if (!hasCode) return 'Could not detect a payment reference.'
  if (!hasAmount) return 'Could not detect the expected amount in the message.'

  return null
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { orderId, mpesaMessage } = body as { orderId: string; mpesaMessage: string }

    if (!orderId || !mpesaMessage) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 })
    }

    const validationError = validatePaymentMessage(mpesaMessage)
    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 })
    }

    const supabase = await createUserClient()

    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: 'You must be signed in.' }, { status: 401 })
    }

    const { data: order, error: orderError } = await supabase
      .from('brief_orders')
      .select('*')
      .eq('id', orderId)
      .eq('user_id', user.id)
      .single()

    if (orderError || !order) {
      return NextResponse.json({ error: 'Order not found.' }, { status: 404 })
    }

    const { data: profile } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', user.id)
      .maybeSingle()

    await supabase.from('payment_confirmations').insert({
      order_id: order.id,
      user_id: user.id,
      payment_method: 'mpesa',
      mpesa_message: mpesaMessage,
      review_status: 'submitted',
    })

    await supabase.from('brief_orders').update({ status: 'pending' }).eq('id', order.id)

    const transporter = createTransporter()

    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: user.email!,
      subject: 'Payment confirmation received · Murivest Realty',
      html: `
        <div style="font-family:Arial,sans-serif;padding:24px">
          <h2>Payment confirmation received</h2>
          <p>Your payment confirmation has been submitted successfully. Our team will review it.</p>
          <p><strong>Order ID:</strong> ${order.id}</p>
        </div>
      `,
    })

    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.ALERT_EMAIL!,
      subject: `⚠️ Payment submitted · ${profile?.full_name || user.email} · Order ${order.id}`,
      html: `
        <div style="font-family:Arial,sans-serif;padding:24px">
          <h2>Payment submitted</h2>
          <p><strong>Investor:</strong> ${profile?.full_name || user.email}</p>
          <p><strong>Order ID:</strong> ${order.id}</p>
          <p><strong>M-Pesa message:</strong><br>${mpesaMessage}</p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[mpesa-confirmation] error:', error)
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({ error: 'Method not allowed.' }, { status: 405 })
}