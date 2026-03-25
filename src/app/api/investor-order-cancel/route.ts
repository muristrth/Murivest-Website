import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { orderId, cancellationReason } = body

    if (!orderId) {
      return NextResponse.json(
        { error: 'Order ID is required.' },
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

    // Check if order can be cancelled
    if (!['pending', 'awaiting_payment'].includes(order.status)) {
      return NextResponse.json(
        { error: `Order cannot be cancelled. Current status: ${order.status}` },
        { status: 400 }
      )
    }

    // Update order status to cancelled
    const { error: updateError } = await supabase
      .from('brief_orders')
      .update({
        status: 'cancelled',
        cancelled_at: new Date().toISOString(),
        cancellation_reason: cancellationReason || 'Cancelled by customer',
        cancelled_by: user.id,
        updated_at: new Date().toISOString(),
      })
      .eq('id', orderId)

    if (updateError) {
      console.error('Error cancelling order:', updateError)
      return NextResponse.json(
        { error: 'Failed to cancel order.' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      message: 'Order cancelled successfully.',
      order: {
        id: order.id,
        status: 'cancelled',
      },
    })
  } catch (error) {
    console.error('[investor-order-cancel] error:', error)
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
