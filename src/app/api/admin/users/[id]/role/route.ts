import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { verifyAdmin } from '@/lib/auth/requireAdmin'

const VALID_ROLES = ['investor', 'advisor', 'admin', 'super_admin'] as const

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { authorized, userId } = await verifyAdmin()

  if (!authorized) {
    return NextResponse.json({ error: 'Admin access required' }, { status: 403 })
  }

  const { id } = await params
  const { role } = await request.json()

  if (!VALID_ROLES.includes(role)) {
    return NextResponse.json({ error: 'Invalid role' }, { status: 400 })
  }

  const supabase = createAdminClient()

  // Keep the legacy investor_status admin gate in sync so requireAdmin()
  // continues to work regardless of which flow granted admin access.
  const update: Record<string, unknown> = { role }
  if (role === 'admin' || role === 'super_admin') {
    update.investor_status = 'admin'
  }

  const { data, error } = await supabase
    .from('profiles')
    .update(update)
    .eq('id', id)
    .select()
    .single()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 })
  }

  await supabase.from('audit_log').insert({
    actor_id: userId,
    actor_role: 'admin',
    action: 'user.role_change',
    entity_type: 'profiles',
    entity_id: id,
    metadata: { new_role: role },
  })

  return NextResponse.json({ success: true, profile: data })
}
