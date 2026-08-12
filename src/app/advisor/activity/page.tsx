import { createAdminClient } from '@/lib/supabase/admin'
import { requireAdvisor } from '@/lib/auth/requireRole'

export const dynamic = 'force-dynamic'

function formatAction(action: string) {
  return action.replace(/[._]/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
}

export default async function AdvisorActivityPage() {
  const user = await requireAdvisor()
  const supabase = createAdminClient()

  const { data: entries } = await supabase
    .from('audit_log')
    .select('id, action, entity_type, metadata, created_at')
    .eq('actor_id', user.user.id)
    .order('created_at', { ascending: false })
    .limit(50)

  return (
    <div className="space-y-8">
      <div>
        <p className="text-[10px] tracking-[0.28em] uppercase text-[#B8956B] mb-2">Advisor Workspace</p>
        <h1 className="font-serif text-4xl text-[#1B4332]">Activity</h1>
        <p className="text-sm text-[#1B4332]/60 mt-2">A record of your recent actions across mandates, tasks, and enquiries.</p>
      </div>

      {!entries || entries.length === 0 ? (
        <div className="bg-white border border-[#1B4332]/10 p-12 text-center">
          <p className="text-sm text-[#1B4332]/50">No activity recorded yet. Actions you take will appear here.</p>
        </div>
      ) : (
        <div className="bg-white border border-[#1B4332]/10 divide-y divide-[#1B4332]/10">
          {entries.map((entry) => (
            <div key={entry.id} className="p-4 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-[#1B4332]">{formatAction(entry.action)}</p>
                <p className="text-xs text-[#1B4332]/50 mt-1 capitalize">{entry.entity_type}</p>
              </div>
              <span className="text-xs text-[#1B4332]/40 whitespace-nowrap">
                {new Date(entry.created_at).toLocaleString('en-GB', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
