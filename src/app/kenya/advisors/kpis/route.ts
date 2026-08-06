// app/api/advisors/kpis/route.ts — weekly KPI roll-up for one employee from the view
import { NextRequest, NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const employee_id = searchParams.get('employee_id');
  if (!employee_id) return NextResponse.json({ error: 'employee_id required' }, { status: 400 });

  const supabase = createAdminClient();
  try {
    const { data, error } = await supabase
      .from('v_current_week_leaderboard')
      .select('*')
      .eq('employee_id', employee_id)
      .maybeSingle();
    if (error) throw error;
    return NextResponse.json(data);
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'Database error';
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}