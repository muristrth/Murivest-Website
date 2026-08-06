// app/api/advisors/contacts/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const employee_id = searchParams.get('employee_id');
  const supabase    = createAdminClient();

  try {
    let q = supabase.from('contacts').select('*').order('created_at', { ascending: false });
    if (employee_id) q = q.eq('employee_id', employee_id);
    const { data, error } = await q.limit(100);
    if (error) throw error;
    return NextResponse.json(data);
  } catch (err: unknown) {
    return NextResponse.json({ error: 'Database error' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const supabase = createAdminClient();
  try {
    const body = await req.json();
    const { data, error } = await supabase.from('contacts').insert(body).select().single();
    if (error) throw error;
    return NextResponse.json(data, { status: 201 });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'Failed to create contact';
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}