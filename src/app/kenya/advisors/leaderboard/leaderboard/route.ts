// app/api/advisors/leaderboard/route.ts
import { NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase';

export async function GET() {
  const supabase = createAdminClient();
  try {
    const { data, error } = await supabase
      .from('v_current_week_leaderboard')
      .select('*')
      .order('leaderboard_rank', { ascending: true })
      .limit(25);
    if (error) throw error;
    return NextResponse.json(data ?? []);
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'Database error';
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
