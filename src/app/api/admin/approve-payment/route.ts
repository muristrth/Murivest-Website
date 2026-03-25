import { createClient } from '@/lib/supabase/server'
import { NextRequest, NextResponse } from 'next/server'
import { sendPaymentApprovedEmail } from '@/lib/email/templates/paymentApproved';
import { createNotification } from '@/lib/notifications';

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient()
    
    const { data: { user: adminUser } } = await supabase.auth.getUser();
    
    if (!adminUser) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { paymentId, decision, notes } = await request.json();

    // Update payment status
    const { data: payment, error } = await supabase
      .from('payments')
      .update({
        status: decision,
        reviewed_at: new Date().toISOString(),
        reviewed_by: adminUser.id,
        notes,
      })
      .eq('id', paymentId)
      .select(`
        *,
        profiles(email, full_name),
        orders(id, order_number)
      `)
      .single();

    if (error) throw error;

    // Update order status if approved
    if (decision === 'approved') {
      await supabase
        .from('orders')
        .update({ 
          status: 'paid',
          payment_status: 'approved',
        })
        .eq('id', payment.order_id);
    }

    // Create audit log
    await supabase.from('audit_logs').insert({
      action: 'payment_approved',
      entity_type: 'payment',
      entity_id: paymentId,
      user_id: adminUser.id,
      details: { decision, notes },
    });

    // Send email notification
    if (decision === 'approved') {
      await sendPaymentApprovedEmail(
        payment.profiles.full_name,
        payment.amount,
        payment.currency || 'USD',
        payment.orders.order_type || 'default'
      );

      // Create notification for the user
      await createNotification({
        userId: payment.user_id,
        type: 'payment_confirmed',
        title: 'Payment Confirmed',
        message: `Your payment of KES ${payment.amount?.toLocaleString() || '2,000'} has been verified and confirmed. Your order is now being processed.`,
        link: '/investor-portal/orders',
      });
    } else if (decision === 'declined') {
      // Create notification for declined payment
      await createNotification({
        userId: payment.user_id,
        type: 'payment_declined',
        title: 'Payment Declined',
        message: 'Your payment could not be verified. Please contact support or try again.',
        link: '/investor-portal/payments',
      });
    }

    return NextResponse.json({ success: true, payment });
  } catch (error) {
    console.error('Approve payment error:', error);
    return NextResponse.json(
      { error: 'Failed to approve payment' },
      { status: 500 }
    );
  }
}