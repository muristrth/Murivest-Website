import { createAdminClient } from '@/lib/supabase/admin'

export const dynamic = 'force-dynamic'

export default async function AdminBriefsPage() {
  const supabase = createAdminClient()

  const { data: briefs, error } = await supabase
    .from('asset_briefs')
    .select(
      'id, title, asset_class, location, price_kes, requires_order, is_public_teaser, created_at'
    )
    .order('created_at', { ascending: false })

  if (error) {
    return (
      <div>
        <div className="mb-8">
          <p className="text-[10px] tracking-[0.28em] uppercase text-[#8B7355] mb-2">
            Admin Console
          </p>
          <h1 className="font-serif text-4xl text-[#0B1426]">Briefs</h1>
        </div>
        <div className="bg-white border border-red-200 text-red-700 p-6">
          Failed to load briefs: {error.message}
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="mb-8">
        <p className="text-[10px] tracking-[0.28em] uppercase text-[#8B7355] mb-2">
          Admin Console
        </p>
        <h1 className="font-serif text-4xl text-[#0B1426]">Briefs</h1>
      </div>

      <div className="overflow-x-auto bg-white border border-[#D4AF37]/15">
        <table className="w-full text-sm">
          <thead className="bg-[#F8F7F4]">
            <tr>
              <th className="text-left px-4 py-3">Title</th>
              <th className="text-left px-4 py-3">Asset Class</th>
              <th className="text-left px-4 py-3">Location</th>
              <th className="text-left px-4 py-3">Price (KES)</th>
              <th className="text-left px-4 py-3">Requires Order</th>
              <th className="text-left px-4 py-3">Public Teaser</th>
              <th className="text-left px-4 py-3">Created</th>
            </tr>
          </thead>
          <tbody>
            {briefs?.length ? (
              briefs.map((brief) => (
                <tr key={brief.id} className="border-t border-[#E5E2DC]">
                  <td className="px-4 py-3 font-medium">{brief.title}</td>
                  <td className="px-4 py-3">{brief.asset_class || '—'}</td>
                  <td className="px-4 py-3">{brief.location || '—'}</td>
                  <td className="px-4 py-3">
                    {typeof brief.price_kes === 'number'
                      ? brief.price_kes.toLocaleString()
                      : '—'}
                  </td>
                  <td className="px-4 py-3">{brief.requires_order ? 'Yes' : 'No'}</td>
                  <td className="px-4 py-3">{brief.is_public_teaser ? 'Yes' : 'No'}</td>
                  <td className="px-4 py-3">
                    {brief.created_at
                      ? new Date(brief.created_at).toLocaleDateString()
                      : '—'}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="px-4 py-10 text-center text-[#0B1426]/60">
                  No briefs found yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}