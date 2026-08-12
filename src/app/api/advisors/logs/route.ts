// app/api/advisors/logs/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const employee_id = searchParams.get('employee_id');
  const date        = searchParams.get('date');
  const supabase    = createAdminClient();

  try {
    if (employee_id && date) {
      const { data, error } = await supabase
        .from('daily_logs').select('*').eq('employee_id', employee_id).eq('log_date', date).maybeSingle();
      if (error) throw error;
      return NextResponse.json(data);
    }
    if (employee_id) {
      const { data, error } = await supabase
        .from('daily_logs').select('*').eq('employee_id', employee_id).order('log_date', { ascending: false }).limit(30);
      if (error) throw error;
      return NextResponse.json(data);
    }
    // Admin: all logs for today
    const today = new Date().toISOString().split('T')[0];
    const { data, error } = await supabase
      .from('daily_logs').select('*, employees(name,role)').eq('log_date', today);
    if (error) throw error;
    return NextResponse.json(data);
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'Database error';
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const supabase = createAdminClient();
  try {
    const body = await req.json();
    const { employee_id, ...fields } = body;
    if (!employee_id) return NextResponse.json({ error: 'employee_id required' }, { status: 400 });

    const log_date = fields.log_date ?? new Date().toISOString().split('T')[0];

    const payload = {
      employee_id, log_date,
      crm_reviews:           fields.crm_reviews           ?? 0,
      lead_followups:        fields.lead_followups         ?? 0,
      investor_outreaches:   fields.investor_outreaches    ?? 0,
      whatsapp_replies:      fields.whatsapp_replies       ?? 0,
      property_uploads:      fields.property_uploads       ?? 0,
      jiji_postings:         fields.jiji_postings          ?? 0,
      linkedin_outreaches:   fields.linkedin_outreaches    ?? 0,
      seller_sourcing_calls: fields.seller_sourcing_calls  ?? 0,
      client_calls:          fields.client_calls           ?? 0,
      property_inspections:  fields.property_inspections   ?? 0,
      negotiations:          fields.negotiations           ?? 0,
      investor_followups:    fields.investor_followups     ?? 0,
      reports_submitted:     fields.reports_submitted      ?? 0,
      crm_updates:           fields.crm_updates            ?? 0,
      next_day_planned:      fields.next_day_planned       ?? false,
      meetings_booked:       fields.meetings_booked        ?? 0,
      exclusive_mandates:    fields.exclusive_mandates     ?? 0,
      deals_closed:          fields.deals_closed           ?? 0,
      revenue_generated:     fields.revenue_generated      ?? 0,
      notes:                 fields.notes                  ?? null,
    };

    const { data, error } = await supabase
      .from('daily_logs')
      .upsert(payload, { onConflict: 'employee_id,log_date' })
      .select().single();
    if (error) throw error;
    return NextResponse.json(data, { status: 201 });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'Failed to save log';
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
