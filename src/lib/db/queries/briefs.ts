import { createAdminClient } from '@/lib/supabase/admin'
import type { AssetBrief, BriefAccess, PropertyType } from '@/lib/types/database'

export async function getAllBriefs(
  options?: {
    propertyType?: PropertyType
    accessLevel?: BriefAccess
    status?: 'active' | 'sold' | 'withdrawn'
    limit?: number
    offset?: number
    featured?: boolean
  }
): Promise<{ briefs: AssetBrief[]; total: number }> {
  const supabase = createAdminClient()
  
  let query = supabase.from('asset_briefs').select('*', { count: 'exact' })
  
  if (options?.propertyType) {
    query = query.eq('property_type', options.propertyType)
  }
  
  if (options?.accessLevel) {
    query = query.eq('access_level', options.accessLevel)
  }
  
  if (options?.status) {
    query = query.eq('status', options.status)
  }
  
  if (options?.featured) {
    query = query.eq('featured', true)
  }
  
  if (options?.limit) {
    query = query.limit(options.limit)
  }
  
  if (options?.offset) {
    query = query.range(options.offset, options.offset + (options.limit || 10) - 1)
  }
  
  const { data: briefs, error, count } = await query.order('created_at', { ascending: false })
  
  if (error) {
    throw new Error(error.message)
  }
  
  return { briefs: briefs || [], total: count || 0 }
}

export async function getBriefById(id: string): Promise<AssetBrief | null> {
  const supabase = createAdminClient()
  
  const { data, error } = await supabase
    .from('asset_briefs')
    .select('*')
    .eq('id', id)
    .single()
  
  if (error) {
    if (error.code === 'PGRST116') return null
    throw new Error(error.message)
  }
  
  return data
}

export async function getBriefBySlug(slug: string): Promise<AssetBrief | null> {
  const supabase = createAdminClient()
  
  const { data, error } = await supabase
    .from('asset_briefs')
    .select('*')
    .eq('slug', slug)
    .single()
  
  if (error) {
    if (error.code === 'PGRST116') return null
    throw new Error(error.message)
  }
  
  return data
}

export async function getBriefsByAccess(
  accessLevel: BriefAccess
): Promise<AssetBrief[]> {
  const supabase = createAdminClient()
  
  const { data, error } = await supabase
    .from('asset_briefs')
    .select('*')
    .eq('access_level', accessLevel)
    .eq('status', 'active')
    .order('created_at', { ascending: false })
  
  if (error) throw new Error(error.message)
  
  return data || []
}