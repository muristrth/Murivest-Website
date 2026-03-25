import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { createClient as createUserClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { createNotification } from '@/lib/notifications'

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

function investorEmail(data: { name: string; email: string; orderType: 'digital' | 'hard'; flipUrl: string }) {
  const firstName = data.name.split(' ')[0] || 'Investor'
  const isDigital = data.orderType === 'digital'

  return {
    subject: isDigital
      ? 'Your digital brief request has been received · Murivest Realty'
      : 'Your hard-copy brief order has been created · Murivest Realty',
    html: `
      <div style="font-family:Arial,sans-serif;background:#F8F7F4;padding:32px;color:#2C2C2C">
        <div style="max-width:620px;margin:0 auto;background:#fff;border:1px solid #E5E2DC">
          <div style="padding:32px 36px;border-bottom:1px solid #E5E2DC">
            <div style="font-size:10px;letter-spacing:.28em;text-transform:uppercase;color:#8B7355;margin-bottom:12px">Murivest Investor Portal</div>
            <h1 style="margin:0;font-family:Georgia,serif;font-weight:400;font-size:28px">Brief Request Confirmed</h1>
          </div>
          <div style="padding:32px 36px">
            <p>Dear ${firstName},</p>
            <p style="line-height:1.8;color:#4A4A4A">
              ${
                isDigital
                  ? 'Your digital brief request has been recorded successfully.'
                  : 'Your hard-copy request has been created successfully. Kindly complete M-Pesa payment and submit confirmation in your portal.'
              }
            </p>
            <div style="margin-top:24px">
              <a href="${data.flipUrl}" target="_blank" style="display:inline-block;background:#8B7355;color:#fff;text-decoration:none;padding:14px 22px;font-size:12px;letter-spacing:.18em;text-transform:uppercase">
                View Publication
              </a>
            </div>
          </div>
        </div>
      </div>
    `,
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { orderType } = body as { orderType: 'digital' | 'hard' }

    if (!orderType || !['digital', 'hard'].includes(orderType)) {
      return NextResponse.json({ error: 'Invalid order type.' }, { status: 400 })
    }

    const supabase = await createUserClient()
    const admin = createAdminClient()

    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: 'You must be signed in.' }, { status: 401 })
    }

    const { data: profile } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', user.id)
      .maybeSingle()

    if (!profile) {
      return NextResponse.json({ error: 'Profile not found.' }, { status: 404 })
    }

    const { data: firstPublication } = await admin
      .from('publications')
      .select('id,title,fliphtml_url,file_url')
      .order('created_at', { ascending: false })
      .limit(1)
      .maybeSingle()

    const flipUrl =
      firstPublication?.fliphtml_url ||
      firstPublication?.file_url ||
      process.env.FLIPHTML5_URL ||
      '#'

    const { data: order, error: insertError } = await supabase
      .from('brief_orders')
      .insert({
        user_id: user.id,
        publication_id: firstPublication?.id || null,
        order_type: orderType,
        amount_kes: orderType === 'hard' ? 2000 : 0,
        status: orderType === 'hard' ? 'awaiting_payment' : 'paid',
        contact_name: profile.full_name || user.email || 'Investor',
        contact_email: user.email!,
        contact_phone: profile.phone,
        organisation: profile.organisation,
        shipping_address: orderType === 'hard' ? profile.organisation || '' : null,
        notes: 'Created from investor portal starter flow',
        source: 'portal',
      })
      .select('id')
      .single()

    if (insertError || !order) {
      return NextResponse.json({ error: insertError?.message || 'Failed to create order.' }, { status: 500 })
    }

    const transporter = createTransporter()
    const tpl = investorEmail({
      name: profile.full_name || user.email || 'Investor',
      email: user.email!,
      orderType,
      flipUrl,
    })

    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: user.email!,
      subject: tpl.subject,
      html: tpl.html,
    })

    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.ALERT_EMAIL!,
      subject: `[Murivest Order] ${profile.full_name || user.email} · ${orderType.toUpperCase()} · ${order.id}`,
      html: `<p>New order created.</p><p>Order ID: ${order.id}</p><p>User: ${profile.full_name || user.email}</p><p>Type: ${orderType}</p>`,
    })

    // Create notification for the user
    await createNotification({
      userId: user.id,
      type: 'order_created',
      title: orderType === 'digital' ? 'Digital Brief Requested' : 'Hard Copy Order Created',
      message: orderType === 'digital' 
        ? `Your digital Investment Brief has been requested and is being processed.`
        : `Your hard copy order (KES 2,000) has been created. Please complete payment to confirm.`,
      link: '/investor-portal/orders',
    })

    return NextResponse.json({
      success: true,
      orderId: order.id,
      nextStep:
        orderType === 'hard'
          ? 'Hard-copy order created. Proceed to M-Pesa payment and then submit confirmation.'
          : 'Digital brief request created successfully.',
    })
  } catch (error) {
    console.error('[investor-brief-request] error:', error)
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({ error: 'Method not allowed.' }, { status: 405 })
}