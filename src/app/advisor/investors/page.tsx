// app/advisor/investors/page.tsx
import { createAdminClient } from '@/lib/supabase/admin'
import { getUser } from '@/lib/auth/getUser'
import { isPrivilegedRole } from '@/lib/auth/requireRole'
import { Users } from 'lucide-react'

export const dynamic = 'force-dynamic'

const statusStyles: Record<string, string> = {
  registered: 'bg-[#1B4332]/5 text-[#1B4332]/60',
  verified: 'bg-green-50 text-green-700',
  premium: 'bg-[#B8956B]/10 text-[#8a6b46]',
  admin: 'bg-blue-50 text-blue-700',
}

export default async function AdvisorInvestorsPage() {
  const current = await getUser()
  const advisorId = current!.user.id
  const privileged = isPrivilegedRole(current!.profile?.role as any)

  const supabase = createAdminClient()
  let query = supabase
    .from('profiles')
    .select('*')
    .eq('role', 'investor')
    .order('created_at', { ascending: false })

  if (!privileged) {
    query = query.eq('assigned_advisor_id', advisorId)
  }

  const { data: investors, error } = await query

  return (
    <div className="space-y-8">
      <div>
        <p className="text-[10px] tracking-[0.28em] uppercase text-[#B8956B] mb-2">Advisor Workspace</p>
        <h1 className="font-serif text-4xl text-[#1B4332]">Investors</h1>
        <p className="text-sm text-[#2C3E35]/70 mt-2">
          {privileged ? 'All investors on the platform.' : 'Investors assigned to you.'}
        </p>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 p-4 text-sm text-red-700">
          Could not load investors: {error.message}
        </div>
      )}

      {!error && (!investors || investors.length === 0) && (
        <div className="bg-white border border-[#1B4332]/10 p-12 text-center">
          <Users className="h-10 w-10 text-[#1B4332]/20 mx-auto mb-4" />
          <p className="text-sm text-[#2C3E35]/60">No investors assigned yet.</p>
        </div>
      )}

      {investors && investors.length > 0 && (
        <div className="bg-white border border-[#1B4332]/10 divide-y divide-[#1B4332]/5">
          {investors.map((investor: any) => (
            <div key={investor.id} className="p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <p className="font-serif text-lg text-[#1B4332]">{investor.full_name || investor.email}</p>
                <p className="text-xs text-[#2C3E35]/60 mt-1">
                  {investor.organisation || 'Independent'} {investor.aum ? `· AUM ${investor.aum}` : ''}
                </p>
              </div>
              <span
                className={`self-start md:self-center text-[10px] uppercase tracking-wider px-3 py-1 ${
                  statusStyles[investor.investor_status] || 'bg-[#1B4332]/5 text-[#1B4332]/60'
                }`}
              >
                {investor.investor_status}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
