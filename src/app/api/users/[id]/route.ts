import { createClient } from '@/lib/supabase/server'
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const supabase = await createClient()
    const { id } = await params;
    
    const { data: user, error } = await supabase
      .from('profiles')
      .select(`
        *,
        orders:orders(count),
        documents:user_documents(*)
      `)
      .eq('id', id)
      .single();

    if (error) throw error;

    // Calculate total spent
    const { data: orders } = await supabase
      .from('orders')
      .select('total_amount')
      .eq('user_id', id)
      .eq('status', 'fulfilled');

    const totalSpent = orders?.reduce((sum, order) => sum + order.total_amount, 0) || 0;

    return NextResponse.json({ 
      user: {
        ...user,
        orders_count: orders?.length || 0,
        total_spent: totalSpent,
      }
    });
  } catch (error) {
    console.error('Fetch user error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch user' },
      { status: 500 }
    );
  }
}