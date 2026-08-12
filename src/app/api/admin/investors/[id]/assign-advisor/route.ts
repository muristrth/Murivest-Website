import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { verifyAdmin } from '@/lib/auth/requireAdmin'

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { authorized, userId, error: authError } = await verifyAdmin()

  if (!authorized) {
    return NextResponse.json({ error: authError || 'Admin access required' }, { status: 403 })
  }

  const { id } = await params
  const body = await request.json()
  const advisorId: string | null = body.advisorId || null

  const supabase = createAdminClient()

  const { error } = await supabase
    .from('profiles')
    .update({ assigned_advisor_id: advisorId })
    .eq('id', id)

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 })
  }

  await supabase.from('audit_log').insert({
    actor_id: userId,
    actor_role: 'admin',
    action: 'investor.assign_advisor',
    entity_type: 'profiles',
    entity_id: id,
    metadata: { advisor_id: advisorId },
  })

  return NextResponse.json({ success: true })
}
