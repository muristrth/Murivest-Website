// app/api/advisors/employees/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase';

export async function GET(_req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const supabase = createAdminClient();
    const { data, error } = await supabase
      .from('employees').select('*').eq('id', params.id).single();
    if (error) throw error;
    return NextResponse.json(data);
  } catch (err: unknown) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }
}

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const supabase = createAdminClient();
    const body = await req.json();
    const { data, error } = await supabase
      .from('employees').update(body).eq('id', params.id).select().single();
    if (error) throw error;
    return NextResponse.json(data);
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'Update failed';
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}