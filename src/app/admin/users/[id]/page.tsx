import { createAdminClient } from '@/lib/supabase/admin'

export default async function AdminUserDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const supabase = createAdminClient()

  const { data: user, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', id)
    .single()

  if (error || !user) {
    return (
      <div className="bg-white border border-red-200 p-6 text-red-700">
        User not found
      </div>
    )
  }

  return (
    <div>
      <h1 className="font-serif text-4xl mb-6">{user.full_name}</h1>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="border p-4">Email not stored in profile</div>
        <div className="border p-4">Organisation: {user.organisation}</div>
        <div className="border p-4">Phone: {user.phone}</div>
        <div className="border p-4">Status: {user.investor_status}</div>
      </div>
    </div>
  )
}