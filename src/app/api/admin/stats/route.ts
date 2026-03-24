import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const supabase = await createClient()
    
    // Get counts
    const [
      { count: totalUsers },
      { count: verifiedInvestors },
      { count: pendingVerifications },
      { count: newUsersThisMonth },
      { count: totalOrders },
      { count: pendingOrders },
      totalRevenueData,
    ] = await Promise.all([
      supabase.from('profiles').select('*', { count: 'exact', head: true }),
      supabase.from('profiles').select('*', { count: 'exact', head: true }).eq('verification_status', 'verified'),
      supabase.from('profiles').select('*', { count: 'exact', head: true }).eq('verification_status', 'pending'),
      supabase.from('profiles').select('*', { count: 'exact', head: true }).gte('created_at', new Date(new Date().setDate(1)).toISOString()),
      supabase.from('orders').select('*', { count: 'exact', head: true }),
      supabase.from('orders').select('*', { count: 'exact', head: true }).eq('status', 'pending'),
      supabase.from('orders').select('total_amount').eq('status', 'fulfilled'),
    ]);

    // Calculate total revenue
    const revenue = Array.isArray(totalRevenueData?.data)
      ? totalRevenueData.data.reduce((sum, order) => sum + (order.total_amount || 0), 0)
      : 0;

    return NextResponse.json({
      totalUsers: totalUsers || 0,
      verifiedInvestors: verifiedInvestors || 0,
      pendingVerifications: pendingVerifications || 0,
      newUsersThisMonth: newUsersThisMonth || 0,
      totalOrders: totalOrders || 0,
      pendingOrders: pendingOrders || 0,
      totalRevenue: revenue,
    });
  } catch (error) {
    console.error('Fetch stats error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch stats' },
      { status: 500 }
    );
  }
}