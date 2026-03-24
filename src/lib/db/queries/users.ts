import { createAdminClient } from '@/lib/supabase/admin'
import type { Profile, InvestorStatus } from '@/lib/types/database'

export async function getAllUsers(
  options?: {
    status?: InvestorStatus
    limit?: number
    offset?: number
  }
): Promise<{ users: Profile[]; total: number }> {
  const supabase = createAdminClient()
  
  let query = supabase.from('profiles').select('*', { count: 'exact' })
  
  if (options?.status) {
    query = query.eq('investor_status', options.status)
  }
  
  if (options?.limit) {
    query = query.limit(options.limit)
  }
  
  if (options?.offset) {
    query = query.range(options.offset, options.offset + (options.limit || 10) - 1)
  }
  
  const { data: users, error, count } = await query.order('created_at', { ascending: false })
  
  if (error) {
    throw new Error(error.message)
  }
  
  return { users: users || [], total: count || 0 }
}

export async function getUserById(id: string): Promise<Profile | null> {
  const supabase = createAdminClient()
  
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', id)
    .single()
  
  if (error) {
    if (error.code === 'PGRST116') return null
    throw new Error(error.message)
  }
  
  return data
}

export async function getUserByEmail(_email: string): Promise<Profile | null> {
  // This requires admin API access - simplified for now
  return null
}

export async function searchUsers(query: string): Promise<Profile[]> {
  const supabase = createAdminClient()
  
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .or(`full_name.ilike.%${query}%,email.ilike.%${query}%,organisation.ilike.%${query}%`)
    .order('created_at', { ascending: false })
    .limit(20)
  
  if (error) throw new Error(error.message)
  
  return data || []
}

export async function getUserStats(): Promise<{
  total: number
  registered: number
  verified: number
  premium: number
}> {
  const supabase = createAdminClient()
  
  const [
    { count: total },
    { count: registered },
    { count: verified },
    { count: premium },
  ] = await Promise.all([
    supabase.from('profiles').select('*', { count: 'exact', head: true }),
    supabase.from('profiles').select('*', { count: 'exact', head: true }).eq('investor_status', 'registered'),
    supabase.from('profiles').select('*', { count: 'exact', head: true }).eq('investor_status', 'verified'),
    supabase.from('profiles').select('*', { count: 'exact', head: true }).eq('investor_status', 'premium'),
  ])
  
  return {
    total: total || 0,
    registered: registered || 0,
    verified: verified || 0,
    premium: premium || 0,
  }
}