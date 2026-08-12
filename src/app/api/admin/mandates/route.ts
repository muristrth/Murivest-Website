import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { verifyAdmin } from '@/lib/auth/requireAdmin'

export async function POST(request: NextRequest) {
  const { authorized, userId, error: authError } = await verifyAdmin()

  if (!authorized) {
    return NextResponse.json({ error: authError || 'Admin access required' }, { status: 403 })
  }

  const body = await request.json()
  const { title, investorId, advisorId, market, status, targetAssetTypes, minTicketSize, maxTicketSize, notes } = body

  if (!title || !investorId) {
    return NextResponse.json({ error: 'Title and investor are required' }, { status: 400 })
  }

  const supabase = createAdminClient()

  const { data, error } = await supabase
    .from('mandates')
    .insert({
      title,
      investor_id: investorId,
      advisor_id: advisorId || null,
      market: market || 'kenya',
      status: status || 'draft',
      target_asset_types: targetAssetTypes || [],
      min_ticket_size: minTicketSize || null,
      max_ticket_size: maxTicketSize || null,
      notes: notes || null,
      created_by: userId,
    })
    .select()
    .single()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 })
  }

  await supabase.from('audit_log').insert({
    actor_id: userId,
    actor_role: 'admin',
    action: 'mandate.create',
    entity_type: 'mandates',
    entity_id: data.id,
    metadata: { title, investor_id: investorId, advisor_id: advisorId },
  })

  if (advisorId) {
    await supabase.from('notifications').insert({
      user_id: advisorId,
      type: 'mandate_update',
      title: 'New mandate assigned',
      body: `You have been assigned to the mandate "${title}".`,
      link: '/advisor/mandates',
    })
  }

  return NextResponse.json({ success: true, mandate: data })
}
