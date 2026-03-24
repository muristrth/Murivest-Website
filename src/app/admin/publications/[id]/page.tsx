import { createAdminClient } from '@/lib/supabase/admin'

export default async function AdminPublicationDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const supabase = createAdminClient()

  const { data: publication } = await supabase
    .from('publications')
    .select('*')
    .eq('id', id)
    .single()

  if (!publication) return <div>Publication not found</div>

  return (
    <div>
      <h1 className="font-serif text-4xl mb-6">{publication.title}</h1>
      <p className="text-sm text-[#0B1426]/70 mb-4">{publication.summary}</p>
      <p className="text-sm">Category: {publication.category}</p>
    </div>
  )
}