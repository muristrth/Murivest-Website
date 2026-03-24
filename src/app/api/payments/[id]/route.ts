import { createClient } from '@/lib/supabase/server'
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const supabase = await createClient()
    const { id } = await params;
    
    const { data: payment, error } = await supabase
      .from('payments')
      .select(`
        *,
        profiles(id, full_name, email),
        orders(id, order_number, publication_id, deal_id),
        publications(title),
        deals(title)
      `)
      .eq('id', id)
      .single();

    if (error) throw error;

    const transformedPayment = {
      ...payment,
      customer: {
        id: payment.profiles.id,
        name: payment.profiles.full_name,
        email: payment.profiles.email,
      },
      order: {
        id: payment.orders.id,
        order_number: payment.orders.order_number,
        item_title: payment.publications?.title || payment.deals?.title,
      },
    };

    return NextResponse.json({ payment: transformedPayment });
  } catch (error) {
    console.error('Fetch payment error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch payment' },
      { status: 500 }
    );
  }
}