import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/app/lib/supabase';

function isAuthorized(request: NextRequest): boolean {
  const token = request.headers.get('x-admin-token');
  return token === process.env.ADMIN_SECRET_TOKEN;
}

export async function POST(request: NextRequest, { params }: { params: { id: string } }) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { id } = params;
  const body = await request.json();

  const { data: existing } = await supabaseAdmin.from('leads').select('status').eq('id', id).single();
  if (!existing) return NextResponse.json({ error: 'Lead not found' }, { status: 404 });

  const { data: lead, error } = await supabaseAdmin
    .from('leads')
    .update({ status: body.status, internal_notes: body.notes || undefined })
    .eq('id', id)
    .select()
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  await supabaseAdmin.from('lead_activities').insert({
    lead_id: id,
    actor: body.actor || 'admin',
    action_type: 'status_changed',
    description: `Status manually updated from ${existing.status} to ${body.status}`,
    metadata: { from: existing.status, to: body.status },
  });

  return NextResponse.json({ lead });
}