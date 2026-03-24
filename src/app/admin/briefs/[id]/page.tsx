import { createAdminClient } from '@/lib/supabase/admin'

export default async function AdminBriefDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const supabase = createAdminClient()

  const { data: brief } = await supabase
    .from('asset_briefs')
    .select('*')
    .eq('id', id)
    .single()

  if (!brief) return <div>Brief not found</div>

  return (
    <div>
      <h1 className="font-serif text-4xl mb-6">{brief.title}</h1>
      <p>{brief.teaser}</p>
      <p className="mt-3">Price: KES {brief.price_kes}</p>
    </div>
  )
}