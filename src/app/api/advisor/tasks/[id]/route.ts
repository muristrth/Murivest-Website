import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { getUser } from '@/lib/auth/getUser'
import { isPrivilegedRole } from '@/lib/auth/requireRole'

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const current = await getUser()

  if (!current) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
  }

  const role = current.profile?.role
  if (role !== 'advisor' && !isPrivilegedRole(role as any)) {
    return NextResponse.json({ error: 'Advisor access required' }, { status: 403 })
  }

  const body = await request.json()
  const status = body.status as 'todo' | 'in_progress' | 'done'

  if (!['todo', 'in_progress', 'done'].includes(status)) {
    return NextResponse.json({ error: 'Invalid status' }, { status: 400 })
  }

  const supabase = createAdminClient()

  let query = supabase.from('advisor_tasks').update({ status }).eq('id', id)
  if (!isPrivilegedRole(role as any)) {
    query = query.eq('advisor_id', current.user.id)
  }

  const { error } = await query

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 })
  }

  await supabase.from('audit_log').insert({
    actor_id: current.user.id,
    actor_role: role,
    action: 'advisor_task.status_update',
    entity_type: 'advisor_tasks',
    entity_id: id,
    metadata: { status },
  })

  return NextResponse.json({ success: true })
}
