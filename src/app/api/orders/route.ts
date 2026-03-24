import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const supabase = await createClient()
    
    const { data: orders, error } = await supabase
      .from('orders')
      .select(`
        *,
        profiles(full_name),
        publications(title),
        deals(title)
      `)
      .order('created_at', { ascending: false });

    if (error) throw error;

    // Transform data
    interface Profile {
      full_name?: string;
    }

    interface Publication {
      title?: string;
    }

    interface Deal {
      title?: string;
    }

    interface Order {
      id: number;
      created_at: string;
      profiles?: Profile | null;
      publications?: Publication | null;
      deals?: Deal | null;
      publication_id?: number | null;
      deal_id?: number | null;
      // Add other fields as needed
      [key: string]: any;
    }

    interface TransformedOrder extends Order {
      customer_name: string;
      item_title: string;
      item_type: 'publication' | 'deal';
    }

    const transformedOrders: TransformedOrder[] | undefined = orders?.map((order: Order): TransformedOrder => ({
      ...order,
      customer_name: order.profiles?.full_name || 'Unknown',
      item_title: order.publications?.title || order.deals?.title || 'Unknown',
      item_type: order.publication_id ? 'publication' : 'deal',
    }));

    return NextResponse.json({ orders: transformedOrders });
  } catch (error) {
    console.error('Fetch orders error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch orders' },
      { status: 500 }
    );
  }
}