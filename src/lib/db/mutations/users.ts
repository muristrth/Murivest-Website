import { createAdminClient } from '@/lib/supabase/admin'
import type { Profile, ProfileInsert, InvestorStatus } from '@/lib/types/database'

export async function createProfile(data: ProfileInsert): Promise<Profile> {
  const supabase = createAdminClient()
  
  const { data: profile, error } = await supabase
    .from('profiles')
    .insert(data)
    .select()
    .single()
  
  if (error) {
    throw new Error(error.message)
  }
  
  return profile
}

export async function updateProfile(
  id: string,
  data: Partial<ProfileInsert>
): Promise<Profile> {
  const supabase = createAdminClient()
  
  const { data: profile, error } = await supabase
    .from('profiles')
    .update(data)
    .eq('id', id)
    .select()
    .single()
  
  if (error) {
    throw new Error(error.message)
  }
  
  return profile
}

export async function updateInvestorStatus(
  id: string,
  status: InvestorStatus,
  verifiedBy?: string
): Promise<Profile> {
  const supabase = createAdminClient()
  
  const updateData: Partial<ProfileInsert> = {
    investor_status: status,
  }
  
  if (status === 'verified' || status === 'premium') {
    updateData.verified_at = new Date().toISOString()
  }
  
  if (verifiedBy) {
    updateData.verified_by = verifiedBy
  }
  
  const { data: profile, error } = await supabase
    .from('profiles')
    .update(updateData)
    .eq('id', id)
    .select()
    .single()
  
  if (error) {
    throw new Error(error.message)
  }
  
  return profile
}

export async function deleteProfile(id: string): Promise<void> {
  const supabase = createAdminClient()
  
  const { error } = await supabase
    .from('profiles')
    .delete()
    .eq('id', id)
  
  if (error) {
    throw new Error(error.message)
  }
}

export async function updateProfileAUM(
  id: string,
  aum: string,
  portfolioValue?: number
): Promise<Profile> {
  const supabase = createAdminClient()
  
  const { data: profile, error } = await supabase
    .from('profiles')
    .update({
      aum,
      portfolio_value: portfolioValue,
      updated_at: new Date().toISOString(),
    })
    .eq('id', id)
    .select()
    .single()
  
  if (error) {
    throw new Error(error.message)
  }
  
  return profile
}