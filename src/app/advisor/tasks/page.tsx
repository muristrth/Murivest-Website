// app/advisor/tasks/page.tsx
import { createAdminClient } from '@/lib/supabase/admin'
import { getUser } from '@/lib/auth/getUser'
import { isPrivilegedRole } from '@/lib/auth/requireRole'
import TasksBoard from './TasksBoard'

export const dynamic = 'force-dynamic'

export default async function AdvisorTasksPage() {
  const current = await getUser()
  const advisorId = current!.user.id
  const privileged = isPrivilegedRole(current!.profile?.role as any)

  const supabase = createAdminClient()
  let query = supabase.from('advisor_tasks').select('*').order('due_date', { ascending: true, nullsFirst: false })

  if (!privileged) {
    query = query.eq('advisor_id', advisorId)
  }

  const { data: tasks, error } = await query

  return (
    <div className="space-y-8">
      <div>
        <p className="text-[10px] tracking-[0.28em] uppercase text-[#B8956B] mb-2">Advisor Workspace</p>
        <h1 className="font-serif text-4xl text-[#1B4332]">Tasks</h1>
        <p className="text-sm text-[#2C3E35]/70 mt-2">
          Track follow-ups, document requests, and mandate action items.
        </p>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 p-4 text-sm text-red-700">
          Could not load tasks: {error.message}
        </div>
      )}

      <TasksBoard initialTasks={tasks || []} />
    </div>
  )
}
