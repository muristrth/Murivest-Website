// app/advisor/enquiries/page.tsx
import { createAdminClient } from '@/lib/supabase/admin'
import { getUser } from '@/lib/auth/getUser'
import { isPrivilegedRole } from '@/lib/auth/requireRole'
import { MessageSquare } from 'lucide-react'

export const dynamic = 'force-dynamic'

const statusStyles: Record<string, string> = {
  open: 'bg-amber-50 text-amber-700',
  in_progress: 'bg-blue-50 text-blue-700',
  resolved: 'bg-green-50 text-green-700',
  closed: 'bg-[#1B4332]/5 text-[#1B4332]/60',
}

export default async function AdvisorEnquiriesPage() {
  const current = await getUser()
  const advisorId = current!.user.id
  const privileged = isPrivilegedRole(current!.profile?.role as any)

  const supabase = createAdminClient()
  let query = supabase
    .from('enquiries')
    .select('*, investor:investor_id(full_name, email)')
    .order('created_at', { ascending: false })

  if (!privileged) {
    query = query.eq('advisor_id', advisorId)
  }

  const { data: enquiries, error } = await query

  return (
    <div className="space-y-8">
      <div>
        <p className="text-[10px] tracking-[0.28em] uppercase text-[#B8956B] mb-2">Advisor Workspace</p>
        <h1 className="font-serif text-4xl text-[#1B4332]">Enquiries</h1>
        <p className="text-sm text-[#2C3E35]/70 mt-2">
          Messages from investors about mandates and opportunities.
        </p>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 p-4 text-sm text-red-700">
          Could not load enquiries: {error.message}
        </div>
      )}

      {!error && (!enquiries || enquiries.length === 0) && (
        <div className="bg-white border border-[#1B4332]/10 p-12 text-center">
          <MessageSquare className="h-10 w-10 text-[#1B4332]/20 mx-auto mb-4" />
          <p className="text-sm text-[#2C3E35]/60">No enquiries yet.</p>
        </div>
      )}

      {enquiries && enquiries.length > 0 && (
        <div className="bg-white border border-[#1B4332]/10 divide-y divide-[#1B4332]/5">
          {enquiries.map((enquiry: any) => (
            <div key={enquiry.id} className="p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                <p className="font-serif text-lg text-[#1B4332]">{enquiry.subject}</p>
                <span
                  className={`self-start text-[10px] uppercase tracking-wider px-3 py-1 ${
                    statusStyles[enquiry.status] || 'bg-[#1B4332]/5 text-[#1B4332]/60'
                  }`}
                >
                  {enquiry.status.replace('_', ' ')}
                </span>
              </div>
              <p className="text-xs text-[#2C3E35]/60 mb-2">
                From {enquiry.investor?.full_name || enquiry.investor?.email} ·{' '}
                {new Date(enquiry.created_at).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
              </p>
              <p className="text-sm text-[#2C3E35]/80">{enquiry.message}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
