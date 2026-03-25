import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

// Paybill constants
const PAYBILL = '303030'
const ACCOUNT = '2048650433'
const AMOUNT = 2000

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { orderId, mpesaMessage } = body

    if (!orderId || !mpesaMessage) {
      return NextResponse.json(
        { error: 'Order ID and M-Pesa message are required.' },
        { status: 400 }
      )
    }

    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json(
        { error: 'You must be signed in.' },
        { status: 401 }
      )
    }

    // Get the order
    const { data: order, error: orderError } = await supabase
      .from('brief_orders')
      .select('*')
      .eq('id', orderId)
      .eq('user_id', user.id)
      .single()

    if (orderError || !order) {
      return NextResponse.json(
        { error: 'Order not found or access denied.' },
        { status: 404 }
      )
    }

    // Check if order can accept payment
    if (!['pending', 'awaiting_payment'].includes(order.status)) {
      return NextResponse.json(
        { error: `Order cannot accept payment. Current status: ${order.status}` },
        { status: 400 }
      )
    }

    // Validate the M-Pesa message
    const text = mpesaMessage.trim()
    if (text.length < 10) {
      return NextResponse.json(
        { error: 'Please provide your complete confirmation details.' },
        { status: 400 }
      )
    }

    const hasMpesaCode = /[A-Z0-9]{8,12}/i.test(text)
    const hasAmount = /2000|2[,.]?000|kes\s*2000|ksh\s*2000/i.test(text)

    if (!hasMpesaCode) {
      return NextResponse.json(
        { error: 'Could not detect a payment reference code in the message.' },
        { status: 400 }
      )
    }

    if (!hasAmount) {
      return NextResponse.json(
        { error: 'Could not detect the expected amount (KES 2,000).' },
        { status: 400 }
      )
    }

    // Update order with payment message
    const { error: updateError } = await supabase
      .from('brief_orders')
      .update({
        mpesa_message: mpesaMessage,
        payment_method: 'M-Pesa',
        payment_review_status: 'pending',
        status: 'payment_confirmed',
        updated_at: new Date().toISOString(),
      })
      .eq('id', orderId)

    if (updateError) {
      console.error('Error updating order:', updateError)
      return NextResponse.json(
        { error: 'Failed to submit payment confirmation.' },
        { status: 500 }
      )
    }

    // Create payment record
    const { data: payment, error: paymentError } = await supabase
      .from('payments')
      .insert({
        order_id: orderId,
        user_id: user.id,
        amount_kes: order.amount_kes || AMOUNT,
        payment_method: 'M-Pesa',
        mpesa_message: mpesaMessage,
        status: 'pending',
        review_status: 'pending',
      })
      .select()
      .single()

    if (paymentError) {
      console.error('Error creating payment record:', paymentError)
    }

    // Create notification for admin (you may want to get admin users differently)
    await supabase.from('notifications').insert({
      user_id: user.id,
      type: 'payment_submitted',
      title: 'Payment Confirmation Submitted',
      message: `Order ${orderId.substring(0, 8)} has a new payment confirmation awaiting review.`,
      link: '/admin/payments',
    })

    // Send email confirmation to user
    // Note: Email sending would require SMTP setup

    return NextResponse.json({
      success: true,
      message: 'Payment confirmation submitted successfully. You will be notified once verified.',
      payment: payment || null,
      order: {
        id: order.id,
        status: 'payment_confirmed',
      },
    })
  } catch (error) {
    console.error('[investor-order-payment] error:', error)
    return NextResponse.json(
      { error: 'Internal server error.' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed.' },
    { status: 405 }
  )
}
