// app/api/advisors/employees/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase';

export async function GET() {
  try {
    const supabase = createAdminClient();
    const { data, error } = await supabase
      .from('employees')
      .select('id,name,email,role,avatar_url,phone,hire_date,department,is_active,created_at,updated_at')
      .eq('is_active', true)
      .order('name');
    if (error) throw error;
    return NextResponse.json(data);
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'Database error';
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const supabase = createAdminClient();
    const body = await req.json();
    const { name, email, role, phone, department, hire_date } = body;
    if (!name || !email) return NextResponse.json({ error: 'name and email required' }, { status: 400 });

    const { data, error } = await supabase
      .from('employees')
      .insert({ name, email, role: role ?? 'associate', phone: phone ?? null, department: department ?? 'brokerage', hire_date: hire_date ?? new Date().toISOString().split('T')[0] })
      .select()
      .single();
    if (error) throw error;
    return NextResponse.json(data, { status: 201 });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'Failed to create employee';
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
