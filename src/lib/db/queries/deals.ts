import { createAdminClient } from '@/lib/supabase/admin'
import type { OffMarketDeal, DealStage, PublicationAccess, PropertyType } from '@/lib/types/database'

export async function getAllDeals(
  options?: {
    propertyType?: PropertyType
    region?: string
    dealStage?: DealStage
    status?: 'active' | 'sold' | 'withdrawn' | 'archived'
    accessLevel?: PublicationAccess
    limit?: number
    offset?: number
    featured?: boolean
  }
): Promise<{ deals: OffMarketDeal[]; total: number }> {
  const supabase = createAdminClient()
  
  let query = supabase.from('off_market_deals').select('*', { count: 'exact' })
  
  if (options?.propertyType) {
    query = query.eq('property_type', options.propertyType)
  }
  
  if (options?.region) {
    query = query.eq('region', options.region)
  }
  
  if (options?.dealStage) {
    query = query.eq('deal_stage', options.dealStage)
  }
  
  if (options?.status) {
    query = query.eq('status', options.status)
  }
  
  if (options?.accessLevel) {
    query = query.eq('access_level', options.accessLevel)
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
  
  const { data: deals, error, count } = await query.order('created_at', { ascending: false })
  
  if (error) {
    throw new Error(error.message)
  }
  
  return { deals: deals || [], total: count || 0 }
}

export async function getDealById(id: string): Promise<OffMarketDeal | null> {
  const supabase = createAdminClient()
  
  const { data, error } = await supabase
    .from('off_market_deals')
    .select('*')
    .eq('id', id)
    .single()
  
  if (error) {
    if (error.code === 'PGRST116') return null
    throw new Error(error.message)
  }
  
  return data
}

export async function getDealBySlug(slug: string): Promise<OffMarketDeal | null> {
  const supabase = createAdminClient()
  
  const { data, error } = await supabase
    .from('off_market_deals')
    .select('*')
    .eq('slug', slug)
    .single()
  
  if (error) {
    if (error.code === 'PGRST116') return null
    throw new Error(error.message)
  }
  
  return data
}

export async function getDealsByAccess(
  accessLevel: PublicationAccess
): Promise<OffMarketDeal[]> {
  const supabase = createAdminClient()
  
  const { data, error } = await supabase
    .from('off_market_deals')
    .select('*')
    .eq('access_level', accessLevel)
    .eq('status', 'active')
    .order('created_at', { ascending: false })
  
  if (error) throw new Error(error.message)
  
  return data || []
}