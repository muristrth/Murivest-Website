import { createAdminClient } from '@/lib/supabase/admin'
import NewMandateForm from './NewMandateForm'

export const dynamic = 'force-dynamic'

export default async function NewMandatePage() {
  const supabase = createAdminClient()

  const [{ data: investors }, { data: advisors }] = await Promise.all([
    supabase.from('profiles').select('id, full_name, email').eq('role', 'investor').order('full_name'),
    supabase.from('profiles').select('id, full_name, email').eq('role', 'advisor').order('full_name'),
  ])

  return (
    <div className="space-y-8">
      <div>
        <p className="text-[10px] tracking-[0.28em] uppercase text-[#B8956B] mb-2">Advisory</p>
        <h1 className="font-serif text-4xl text-[#1B4332]">New Mandate</h1>
      </div>

      <NewMandateForm investors={investors || []} advisors={advisors || []} />
    </div>
  )
}
