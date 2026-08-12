import { createAdminClient } from '@/lib/supabase/admin'
import { requireAdvisor } from '@/lib/auth/requireRole'

export const dynamic = 'force-dynamic'

export default async function AdvisorOpportunitiesPage() {
  await requireAdvisor()
  const supabase = createAdminClient()

  const { data: deals } = await supabase
    .from('off_market_deals')
    .select('id,title,asset_class,location,indicative_price,status,access_level,created_at')
    .order('created_at', { ascending: false })
    .limit(50)

  return (
    <div className="space-y-8">
      <div>
        <p className="text-[10px] tracking-[0.28em] uppercase text-[#B8956B] mb-2">Advisor Workspace</p>
        <h1 className="font-serif text-4xl text-[#1B4332]">Opportunities</h1>
        <p className="text-sm text-[#1B4332]/60 mt-2">
          Off-market deals available to share with your assigned investors.
        </p>
      </div>

      {!deals || deals.length === 0 ? (
        <div className="bg-white border border-[#1B4332]/10 p-12 text-center">
          <p className="text-sm text-[#1B4332]/50">No off-market opportunities are listed yet.</p>
        </div>
      ) : (
        <div className="bg-white border border-[#1B4332]/10 divide-y divide-[#1B4332]/10">
          {deals.map((deal) => (
            <div key={deal.id} className="p-4 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-[#1B4332]">{deal.title}</p>
                <p className="text-xs text-[#1B4332]/50 mt-1">
                  {deal.asset_class} &middot; {deal.location}
                  {deal.indicative_price ? ` · ${deal.indicative_price}` : ''}
                </p>
              </div>
              <span className="text-[10px] uppercase tracking-[0.15em] px-2 py-1 border border-[#1B4332]/20 text-[#1B4332]/60 whitespace-nowrap">
                {deal.status || 'active'}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
