// app/advisor/dashboard/page.tsx
import Link from 'next/link'
import {
  Briefcase,
  Users,
  ListChecks,
  MessageSquare,
  ArrowRight,
  Clock,
} from 'lucide-react'
import { createAdminClient } from '@/lib/supabase/admin'
import { getUser } from '@/lib/auth/getUser'
import { isPrivilegedRole } from '@/lib/auth/requireRole'

export const dynamic = 'force-dynamic'

export default async function AdvisorDashboardPage() {
  const current = await getUser()
  const advisorId = current!.user.id
  const privileged = isPrivilegedRole(current!.profile?.role as any)

  const supabase = createAdminClient()

  const mandateQuery = supabase.from('mandates').select('*', { count: 'exact', head: true })
  const taskQuery = supabase.from('advisor_tasks').select('*', { count: 'exact', head: true }).neq('status', 'done')
  const enquiryQuery = supabase.from('enquiries').select('*', { count: 'exact', head: true }).eq('status', 'open')
  const investorQuery = supabase.from('profiles').select('*', { count: 'exact', head: true }).eq('role', 'investor')

  if (!privileged) {
    mandateQuery.eq('advisor_id', advisorId)
    taskQuery.eq('advisor_id', advisorId)
    enquiryQuery.eq('advisor_id', advisorId)
    investorQuery.eq('assigned_advisor_id', advisorId)
  }

  const [{ count: mandateCount }, { count: taskCount }, { count: enquiryCount }, { count: investorCount }] =
    await Promise.all([mandateQuery, taskQuery, enquiryQuery, investorQuery])

  const { data: recentTasks } = await (privileged
    ? supabase.from('advisor_tasks').select('*').neq('status', 'done').order('due_date', { ascending: true }).limit(5)
    : supabase
        .from('advisor_tasks')
        .select('*')
        .eq('advisor_id', advisorId)
        .neq('status', 'done')
        .order('due_date', { ascending: true })
        .limit(5))

  const statsCards = [
    { label: 'Active Mandates', value: mandateCount || 0, icon: Briefcase, href: '/advisor/mandates' },
    { label: 'Assigned Investors', value: investorCount || 0, icon: Users, href: '/advisor/investors' },
    { label: 'Open Tasks', value: taskCount || 0, icon: ListChecks, href: '/advisor/tasks' },
    { label: 'Open Enquiries', value: enquiryCount || 0, icon: MessageSquare, href: '/advisor/enquiries' },
  ]

  return (
    <div className="space-y-8">
      <div>
        <p className="text-[10px] tracking-[0.28em] uppercase text-[#B8956B] mb-2">Advisor Workspace</p>
        <h1 className="font-serif text-4xl text-[#1B4332]">Dashboard</h1>
        <p className="text-sm text-[#2C3E35]/70 mt-2">
          {privileged
            ? 'Overview across all mandates, investors, and tasks.'
            : 'Overview of your assigned mandates, investors, and tasks.'}
        </p>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
        {statsCards.map((card) => {
          const Icon = card.icon
          return (
            <Link
              key={card.label}
              href={card.href}
              className="group bg-white border border-[#1B4332]/10 p-6 hover:border-[#B8956B]/30 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 flex items-center justify-center bg-[#1B4332]/5 text-[#1B4332]">
                  <Icon className="h-6 w-6" />
                </div>
                <ArrowRight className="h-5 w-5 text-[#1B4332]/20 group-hover:text-[#B8956B] transition-colors" />
              </div>
              <p className="text-[10px] tracking-[0.18em] uppercase text-[#1B4332]/50 mb-2">{card.label}</p>
              <div className="font-serif text-4xl text-[#1B4332]">{card.value}</div>
            </Link>
          )
        })}
      </div>

      <div className="bg-white border border-[#1B4332]/10 p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-[#B8956B]" />
            <h2 className="font-serif text-xl text-[#1B4332]">Upcoming Tasks</h2>
          </div>
          <Link
            href="/advisor/tasks"
            className="text-[11px] uppercase tracking-[0.15em] text-[#B8956B] hover:text-[#1B4332] transition-colors"
          >
            View All
          </Link>
        </div>

        {recentTasks && recentTasks.length > 0 ? (
          <div className="space-y-3">
            {recentTasks.map((task) => (
              <div
                key={task.id}
                className="flex items-center justify-between py-3 border-b border-[#1B4332]/5 last:border-0"
              >
                <div>
                  <p className="text-sm font-medium text-[#1B4332]">{task.title}</p>
                  {task.due_date && (
                    <p className="text-xs text-[#2C3E35]/60">
                      Due {new Date(task.due_date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
                    </p>
                  )}
                </div>
                <span
                  className={`text-[10px] uppercase tracking-wider px-2 py-1 ${
                    task.priority === 'urgent'
                      ? 'bg-red-50 text-red-700'
                      : task.priority === 'high'
                        ? 'bg-amber-50 text-amber-700'
                        : 'bg-[#1B4332]/5 text-[#1B4332]/60'
                  }`}
                >
                  {task.priority}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-[#2C3E35]/60">No open tasks right now.</p>
        )}
      </div>
    </div>
  )
}
