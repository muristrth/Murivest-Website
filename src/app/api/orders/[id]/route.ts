import { createClient } from '@/lib/supabase/server'
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const supabase = await createClient()
    const { id } = await params;
    
    const { data: order, error } = await supabase
      .from('orders')
      .select(`
        *,
        profiles(id, full_name, email),
        publications(id, title),
        deals(id, title)
      `)
      .eq('id', id)
      .single();

    if (error) throw error;

    const transformedOrder = {
      ...order,
      customer: {
        id: order.profiles.id,
        name: order.profiles.full_name,
        email: order.profiles.email,
      },
      item: {
        id: order.publications?.id || order.deals?.id,
        title: order.publications?.title || order.deals?.title,
        type: order.publication_id ? 'publication' : 'deal',
      },
    };

    return NextResponse.json({ order: transformedOrder });
  } catch (error) {
    console.error('Fetch order error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch order' },
      { status: 500 }
    );
  }
}