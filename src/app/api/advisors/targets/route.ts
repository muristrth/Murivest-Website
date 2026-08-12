// app/api/advisors/targets/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const employee_id = searchParams.get('employee_id');
  const month       = searchParams.get('month') ?? new Date().toISOString().slice(0,7);
  if (!employee_id) return NextResponse.json({ error: 'employee_id required' }, { status: 400 });

  const supabase   = createAdminClient();
  const weekStart  = (() => { const d=new Date(); d.setDate(d.getDate()-((d.getDay()+6)%7)); return d.toISOString().split('T')[0]; })();

  try {
    const [wRes, mRes] = await Promise.all([
      supabase.from('weekly_kpi_targets').select('*').eq('employee_id', employee_id).eq('week_start', weekStart).maybeSingle(),
      supabase.from('monthly_targets').select('*').eq('employee_id', employee_id).eq('month', month).maybeSingle(),
    ]);
    return NextResponse.json({ weekly: wRes.data, monthly: mRes.data });
  } catch (err: unknown) {
    return NextResponse.json({ error: 'Database error' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const supabase = createAdminClient();
  try {
    const body = await req.json();
    const { employee_id, week_start, monthly, ...weeklyFields } = body;
    const results: Record<string, unknown> = {};

    if (week_start) {
      const { data, error } = await supabase
        .from('weekly_kpi_targets')
        .upsert({ employee_id, week_start, ...weeklyFields }, { onConflict: 'employee_id,week_start' })
        .select().single();
      if (error) throw error;
      results.weekly = data;
    }
    if (monthly) {
      const { data, error } = await supabase
        .from('monthly_targets')
        .upsert({ employee_id, ...monthly }, { onConflict: 'employee_id,month' })
        .select().single();
      if (error) throw error;
      results.monthly = data;
    }
    return NextResponse.json(results, { status: 201 });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'Failed to save targets';
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
