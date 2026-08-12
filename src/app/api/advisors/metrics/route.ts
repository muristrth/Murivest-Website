// app/api/advisors/metrics/route.ts
import { NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase';

export async function GET() {
  const supabase = createAdminClient();
  const today    = new Date().toISOString().split('T')[0];
  const month    = today.slice(0,7);
  const weekStart = (() => {
    const d = new Date(); d.setDate(d.getDate() - ((d.getDay()+6)%7));
    return d.toISOString().split('T')[0];
  })();

  try {
    const [empRes, activeRes, weekRes, monthRes, topRes] = await Promise.all([
      supabase.from('employees').select('id', { count: 'exact', head: true }).eq('is_active', true),
      supabase.from('daily_logs').select('employee_id', { count: 'exact', head: true }).eq('log_date', today),
      supabase.from('daily_logs').select('property_uploads,investor_outreaches,meetings_booked').gte('log_date', weekStart),
      supabase.from('daily_logs').select('exclusive_mandates,revenue_generated,deals_closed').gte('log_date', `${month}-01`),
      supabase.from('v_current_week_leaderboard').select('employee_id,name,performance_score').order('leaderboard_rank').limit(1).maybeSingle(),
    ]);

    const weekData  = weekRes.data  ?? [];
    const monthData = monthRes.data ?? [];

    return NextResponse.json({
      total_employees:               empRes.count   ?? 0,
      active_today:                  activeRes.count ?? 0,
      properties_this_week:          weekData.reduce((a,r) => a + (r.property_uploads ?? 0), 0),
      investor_outreaches_this_week: weekData.reduce((a,r) => a + (r.investor_outreaches ?? 0), 0),
      meetings_this_week:            weekData.reduce((a,r) => a + (r.meetings_booked ?? 0), 0),
      mandates_this_month:           monthData.reduce((a,r) => a + (r.exclusive_mandates ?? 0), 0),
      revenue_this_month:            monthData.reduce((a,r) => a + Number(r.revenue_generated ?? 0), 0),
      deals_this_month:              monthData.reduce((a,r) => a + (r.deals_closed ?? 0), 0),
      top_performer:                 topRes.data ?? null,
    });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'Database error';
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
