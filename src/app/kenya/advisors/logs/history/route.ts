// app/api/advisors/logs/history/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const employee_id = searchParams.get('employee_id');
  const days        = parseInt(searchParams.get('days') ?? '30', 10);
  if (!employee_id) return NextResponse.json({ error: 'employee_id required' }, { status: 400 });

  const supabase  = createAdminClient();
  const since     = new Date();
  since.setDate(since.getDate() - days);

  try {
    const { data, error } = await supabase
      .from('daily_logs')
      .select('*')
      .eq('employee_id', employee_id)
      .gte('log_date', since.toISOString().split('T')[0])
      .order('log_date', { ascending: false });
    if (error) throw error;
    return NextResponse.json(data);
  } catch (err: unknown) {
    return NextResponse.json({ error: 'Database error' }, { status: 500 });
  }
}