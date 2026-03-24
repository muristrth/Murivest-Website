import { createAdminClient } from '@/lib/supabase/admin'

export const dynamic = 'force-dynamic'

export default async function AdminUsersPage() {
  const supabase = createAdminClient()

  const { data: users } = await supabase
    .from('profiles')
    .select('id,full_name,organisation,phone,investor_status,created_at')
    .order('created_at', { ascending: false })

  return (
    <div>
      <div className="mb-8">
        <p className="text-[10px] tracking-[0.28em] uppercase text-[#8B7355] mb-2">Admin Console</p>
        <h1 className="font-serif text-4xl text-[#0B1426]">Users</h1>
      </div>

      <div className="overflow-x-auto bg-white border border-[#D4AF37]/15">
        <table className="w-full text-sm">
          <thead className="bg-[#F8F7F4]">
            <tr>
              <th className="text-left px-4 py-3">Name</th>
              <th className="text-left px-4 py-3">Organisation</th>
              <th className="text-left px-4 py-3">Phone</th>
              <th className="text-left px-4 py-3">Status</th>
              <th className="text-left px-4 py-3">Created</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user) => (
              <tr key={user.id} className="border-t border-[#E5E2DC]">
                <td className="px-4 py-3">{user.full_name || 'Unnamed user'}</td>
                <td className="px-4 py-3">{user.organisation || '—'}</td>
                <td className="px-4 py-3">{user.phone || '—'}</td>
                <td className="px-4 py-3 uppercase text-xs">{user.investor_status}</td>
                <td className="px-4 py-3">
                  {user.created_at ? new Date(user.created_at).toLocaleDateString() : '—'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}