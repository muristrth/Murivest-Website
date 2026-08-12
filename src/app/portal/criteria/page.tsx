import { createClient } from '@/lib/supabase/server'
import { Target, Shield } from 'lucide-react'
import Link from 'next/link'
import CriteriaForm from '@/components/portal/CriteriaForm'
import CriteriaActiveToggle from '@/components/portal/CriteriaActiveToggle'

export const dynamic = 'force-dynamic'

export default async function PortalCriteriaPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="bg-white border border-[#B8956B]/20 p-12 max-w-md text-center">
          <Shield className="h-12 w-12 text-[#B8956B] mx-auto mb-4" />
          <h1 className="font-serif text-3xl text-[#1B4332] mb-3">Authentication Required</h1>
          <Link href="/portal?mode=login" className="inline-block bg-[#1B4332] text-white px-8 py-3 text-xs uppercase tracking-[0.15em] hover:bg-[#2D5A47] transition-colors">
            Sign In to Portal
          </Link>
        </div>
      </div>
    )
  }

  const { data: criteria } = await supabase
    .from('acquisition_criteria')
    .select('*')
    .eq('investor_id', user.id)
    .order('created_at', { ascending: false })

  return (
    <div className="space-y-10">
      <div className="pb-8 border-b border-[#1B4332]/10">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#B8956B]">Investor Portal</span>
        </div>
        <h1 className="font-serif text-4xl lg:text-5xl text-[#1B4332]">Acquisition Criteria</h1>
        <p className="text-sm text-[#2C3E35]/70 mt-2 max-w-2xl">
          Define your target markets, asset types, and pricing bands. Your advisor uses this to match you with
          relevant off-market opportunities.
        </p>
      </div>

      {criteria && criteria.length > 0 && (
        <section className="space-y-3">
          <h2 className="font-serif text-xl text-[#1B4332]">Your Criteria</h2>
          <div className="bg-white border border-[#1B4332]/10 divide-y divide-[#1B4332]/10">
            {criteria.map((c) => (
              <div key={c.id} className="p-5 flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-[#1B4332] capitalize">
                    {c.markets?.join(', ').replace(/-/g, ' ')}
                  </p>
                  <p className="text-xs text-[#1B4332]/60 mt-1 capitalize">
                    {c.asset_types?.join(', ').replace(/-/g, ' ')}
                  </p>
                  <p className="text-xs text-[#1B4332]/40 mt-1">
                    {c.min_price ? `From $${Number(c.min_price).toLocaleString()}` : ''}
                    {c.max_price ? ` to $${Number(c.max_price).toLocaleString()}` : ''}
                    {c.min_yield ? ` · Min yield ${c.min_yield}%` : ''}
                  </p>
                  {c.notes && <p className="text-xs text-[#1B4332]/50 mt-2">{c.notes}</p>}
                </div>
                <CriteriaActiveToggle id={c.id} isActive={c.is_active} />
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="bg-white border border-[#1B4332]/10 p-8">
        <div className="flex items-center gap-3 mb-6">
          <Target className="h-5 w-5 text-[#B8956B]" />
          <h2 className="font-serif text-2xl text-[#1B4332]">Add New Criteria</h2>
        </div>
        <CriteriaForm />
      </section>
    </div>
  )
}
