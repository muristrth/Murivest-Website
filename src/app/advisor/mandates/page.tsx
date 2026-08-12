// app/advisor/mandates/page.tsx
import { createAdminClient } from '@/lib/supabase/admin'
import { getUser } from '@/lib/auth/getUser'
import { isPrivilegedRole } from '@/lib/auth/requireRole'
import { Briefcase } from 'lucide-react'

export const dynamic = 'force-dynamic'

const statusStyles: Record<string, string> = {
  draft: 'bg-[#1B4332]/5 text-[#1B4332]/60',
  active: 'bg-green-50 text-green-700',
  paused: 'bg-amber-50 text-amber-700',
  completed: 'bg-blue-50 text-blue-700',
  cancelled: 'bg-red-50 text-red-700',
}

export default async function AdvisorMandatesPage() {
  const current = await getUser()
  const advisorId = current!.user.id
  const privileged = isPrivilegedRole(current!.profile?.role as any)

  const supabase = createAdminClient()
  let query = supabase
    .from('mandates')
    .select('*, investor:investor_id(full_name, email)')
    .order('created_at', { ascending: false })

  if (!privileged) {
    query = query.eq('advisor_id', advisorId)
  }

  const { data: mandates, error } = await query

  return (
    <div className="space-y-8">
      <div>
        <p className="text-[10px] tracking-[0.28em] uppercase text-[#B8956B] mb-2">Advisor Workspace</p>
        <h1 className="font-serif text-4xl text-[#1B4332]">Mandates</h1>
        <p className="text-sm text-[#2C3E35]/70 mt-2">
          Engagements you are managing on behalf of investors, tracked from intake through close.
        </p>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 p-4 text-sm text-red-700">
          Could not load mandates: {error.message}
        </div>
      )}

      {!error && (!mandates || mandates.length === 0) && (
        <div className="bg-white border border-[#1B4332]/10 p-12 text-center">
          <Briefcase className="h-10 w-10 text-[#1B4332]/20 mx-auto mb-4" />
          <p className="text-sm text-[#2C3E35]/60">No mandates assigned yet.</p>
        </div>
      )}

      {mandates && mandates.length > 0 && (
        <div className="bg-white border border-[#1B4332]/10 divide-y divide-[#1B4332]/5">
          {mandates.map((mandate: any) => (
            <div key={mandate.id} className="p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <p className="font-serif text-lg text-[#1B4332]">{mandate.title}</p>
                <p className="text-xs text-[#2C3E35]/60 mt-1">
                  {mandate.investor?.full_name || mandate.investor?.email || 'Unassigned investor'} · {mandate.market}
                </p>
                {mandate.target_asset_types?.length > 0 && (
                  <p className="text-xs text-[#2C3E35]/50 mt-1">{mandate.target_asset_types.join(', ')}</p>
                )}
              </div>
              <span
                className={`self-start md:self-center text-[10px] uppercase tracking-wider px-3 py-1 ${
                  statusStyles[mandate.status] || 'bg-[#1B4332]/5 text-[#1B4332]/60'
                }`}
              >
                {mandate.status.replace('_', ' ')}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
