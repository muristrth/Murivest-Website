import Link from 'next/link'
import { createAdminClient } from '@/lib/supabase/admin'
import { Briefcase } from 'lucide-react'

export const dynamic = 'force-dynamic'

const statusStyles: Record<string, string> = {
  draft: 'bg-[#1B4332]/5 text-[#1B4332]/60',
  active: 'bg-green-50 text-green-700',
  paused: 'bg-amber-50 text-amber-700',
  completed: 'bg-blue-50 text-blue-700',
  cancelled: 'bg-red-50 text-red-700',
}

export default async function AdminMandatesPage() {
  const supabase = createAdminClient()

  const { data: mandates, error } = await supabase
    .from('mandates')
    .select('*, investor:investor_id(full_name, email), advisor:advisor_id(full_name, email)')
    .order('created_at', { ascending: false })

  return (
    <div className="space-y-8">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <p className="text-[10px] tracking-[0.28em] uppercase text-[#B8956B] mb-2">Advisory</p>
          <h1 className="font-serif text-4xl text-[#1B4332]">Mandates</h1>
        </div>
        <Link
          href="/admin/mandates/new"
          className="inline-flex items-center gap-2 bg-[#1B4332] text-white px-6 py-3 text-xs uppercase tracking-[0.15em] hover:bg-[#2D5A47] transition-colors"
        >
          <Briefcase className="h-4 w-4" />
          New Mandate
        </Link>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 p-4 text-sm text-red-700">
          Could not load mandates: {error.message}
        </div>
      )}

      {!error && (!mandates || mandates.length === 0) && (
        <div className="bg-white border border-[#1B4332]/10 p-12 text-center">
          <Briefcase className="h-10 w-10 text-[#1B4332]/20 mx-auto mb-4" />
          <p className="text-sm text-[#2C3E35]/60">No mandates created yet.</p>
        </div>
      )}

      {mandates && mandates.length > 0 && (
        <div className="bg-white border border-[#1B4332]/10 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#1B4332]/10 bg-[#FAF9F6]">
                <th className="text-left py-3 px-4 text-[10px] uppercase tracking-[0.15em] text-[#1B4332]/50 font-medium">Mandate</th>
                <th className="text-left py-3 px-4 text-[10px] uppercase tracking-[0.15em] text-[#1B4332]/50 font-medium">Investor</th>
                <th className="text-left py-3 px-4 text-[10px] uppercase tracking-[0.15em] text-[#1B4332]/50 font-medium">Advisor</th>
                <th className="text-left py-3 px-4 text-[10px] uppercase tracking-[0.15em] text-[#1B4332]/50 font-medium">Market</th>
                <th className="text-left py-3 px-4 text-[10px] uppercase tracking-[0.15em] text-[#1B4332]/50 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {mandates.map((mandate: any) => (
                <tr key={mandate.id} className="border-b border-[#1B4332]/5 hover:bg-[#FAF9F6] transition-colors">
                  <td className="py-4 px-4 text-sm font-medium text-[#1B4332]">{mandate.title}</td>
                  <td className="py-4 px-4 text-sm text-[#2C3E35]/80">
                    {mandate.investor?.full_name || mandate.investor?.email || '—'}
                  </td>
                  <td className="py-4 px-4 text-sm text-[#2C3E35]/80">
                    {mandate.advisor?.full_name || mandate.advisor?.email || 'Unassigned'}
                  </td>
                  <td className="py-4 px-4 text-sm text-[#2C3E35]/80 capitalize">{mandate.market}</td>
                  <td className="py-4 px-4">
                    <span className={`text-[10px] uppercase tracking-wider px-2 py-1 ${statusStyles[mandate.status] || ''}`}>
                      {mandate.status.replace('_', ' ')}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
