import { createAdminClient } from '@/lib/supabase/admin'
import AdvisorAssignSelect from '@/components/admin/AdvisorAssignSelect'

export const dynamic = 'force-dynamic'

export default async function AdminUserDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const supabase = createAdminClient()

  const [{ data: user, error }, { data: advisors }] = await Promise.all([
    supabase.from('profiles').select('*').eq('id', id).single(),
    supabase.from('profiles').select('id, full_name, email').eq('role', 'advisor').order('full_name'),
  ])

  if (error || !user) {
    return (
      <div className="bg-white border border-red-200 p-6 text-red-700">
        User not found
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div>
        <p className="text-[10px] tracking-[0.28em] uppercase text-[#B8956B] mb-2">Investor Management</p>
        <h1 className="font-serif text-4xl text-[#1B4332]">{user.full_name || user.email}</h1>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white border border-[#1B4332]/10 p-4">
          <p className="text-[10px] uppercase tracking-[0.15em] text-[#1B4332]/50 mb-1">Email</p>
          <p className="text-sm text-[#1B4332]">{user.email}</p>
        </div>
        <div className="bg-white border border-[#1B4332]/10 p-4">
          <p className="text-[10px] uppercase tracking-[0.15em] text-[#1B4332]/50 mb-1">Organisation</p>
          <p className="text-sm text-[#1B4332]">{user.organisation || '—'}</p>
        </div>
        <div className="bg-white border border-[#1B4332]/10 p-4">
          <p className="text-[10px] uppercase tracking-[0.15em] text-[#1B4332]/50 mb-1">Phone</p>
          <p className="text-sm text-[#1B4332]">{user.phone || '—'}</p>
        </div>
        <div className="bg-white border border-[#1B4332]/10 p-4">
          <p className="text-[10px] uppercase tracking-[0.15em] text-[#1B4332]/50 mb-1">Status</p>
          <p className="text-sm text-[#1B4332] capitalize">{user.investor_status}</p>
        </div>
      </div>

      <div className="bg-white border border-[#1B4332]/10 p-6 max-w-md">
        <h2 className="font-serif text-xl text-[#1B4332] mb-4">Advisor Assignment</h2>
        <AdvisorAssignSelect
          investorId={user.id}
          currentAdvisorId={user.assigned_advisor_id}
          advisors={advisors || []}
        />
      </div>
    </div>
  )
}
