import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const supabase = await createClient()
    
    const { data: payments, error } = await supabase
      .from('payments')
      .select(`
        *,
        profiles(full_name)
      `)
      .order('created_at', { ascending: false });

    if (error) throw error;

    // Transform data
    const transformedPayments = payments?.map(payment => ({
      ...payment,
      customer_name: payment.profiles?.full_name || 'Unknown',
    }));

    return NextResponse.json({ payments: transformedPayments });
  } catch (error) {
    console.error('Fetch payments error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch payments' },
      { status: 500 }
    );
  }
}