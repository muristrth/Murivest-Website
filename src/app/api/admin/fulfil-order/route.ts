import { createClient } from '@/lib/supabase/server'
import { NextRequest, NextResponse } from 'next/server'
import { sendOrderFulfilledEmail } from '@/lib/email/templates/orderFulfilled';
import { createNotification } from '@/lib/notifications';

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient()
    
    const { data: { user: adminUser } } = await supabase.auth.getUser();
    
    if (!adminUser) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { orderId } = await request.json();

    if (!orderId) {
      return NextResponse.json({ error: 'Missing orderId' }, { status: 400 });
    }

    // Update order status
    const { data: order, error } = await supabase
      .from('orders')
      .update({
        status: 'fulfilled',
        fulfilled_at: new Date().toISOString(),
        fulfilled_by: adminUser.id,
      })
      .eq('id', orderId)
      .select(`
        *,
        profiles(email, full_name)
      `)
      .single();

    if (error) throw error;

    // Create audit log
    await supabase.from('audit_logs').insert({
      action: 'order_fulfilled',
      entity_type: 'order',
      entity_id: orderId,
      user_id: adminUser.id,
      details: {
        previous_status: order.status,
        new_status: 'fulfilled',
        fulfilled_at: order.fulfilled_at,
      },
    });

    // Send email notification (non-blocking)
    try {
      await sendOrderFulfilledEmail(
        order.profiles?.full_name ?? 'Customer',
        order.order_type ?? '',
        order.item_title ?? ''
      );
    } catch (emailError) {
      console.error('Failed to send order fulfilled email:', emailError);
    }

    // Create notification for the user
    await createNotification({
      userId: order.user_id,
      type: 'order_fulfilled',
      title: 'Order Fulfilled',
      message: 'Your order has been fulfilled and is being dispatched. You will receive tracking information shortly.',
      link: '/portal/orders',
    })

    return NextResponse.json({ success: true, order });
  } catch (error) {
    console.error('Fulfil order error:', error);
    return NextResponse.json(
      { error: 'Failed to fulfil order' },
      { status: 500 }
    );
  }
}