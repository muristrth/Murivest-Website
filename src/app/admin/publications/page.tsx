import { createAdminClient } from '@/lib/supabase/admin'

export default async function AdminPublicationsPage() {
  const supabase = createAdminClient()

  const { data: publications } = await supabase
    .from('publications')
    .select('id,title,category,is_public,is_portal_visible,created_at')
    .order('created_at', { ascending: false })

  return (
    <div>
      <div className="mb-8">
        <p className="text-[10px] tracking-[0.28em] uppercase text-[#8B7355] mb-2">Admin Console</p>
        <h1 className="font-serif text-4xl text-[#0B1426]">Publications</h1>
      </div>

      <div className="overflow-x-auto bg-white border border-[#D4AF37]/15">
        <table className="w-full text-sm">
          <thead className="bg-[#F8F7F4]">
            <tr>
              <th className="text-left px-4 py-3">Title</th>
              <th className="text-left px-4 py-3">Category</th>
              <th className="text-left px-4 py-3">Public</th>
              <th className="text-left px-4 py-3">Portal Visible</th>
              <th className="text-left px-4 py-3">Created</th>
            </tr>
          </thead>
          <tbody>
            {publications?.map((item) => (
              <tr key={item.id} className="border-t border-[#E5E2DC]">
                <td className="px-4 py-3">{item.title}</td>
                <td className="px-4 py-3">{item.category}</td>
                <td className="px-4 py-3">{item.is_public ? 'Yes' : 'No'}</td>
                <td className="px-4 py-3">{item.is_portal_visible ? 'Yes' : 'No'}</td>
                <td className="px-4 py-3">
                  {item.created_at ? new Date(item.created_at).toLocaleDateString() : '—'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}