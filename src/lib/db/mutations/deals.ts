import { createAdminClient } from '@/lib/supabase/admin'
import type { OffMarketDeal, OffMarketDealInsert } from '@/lib/types/database'
import { slugify } from '@/lib/utils/slugify'

export async function createDeal(data: Omit<OffMarketDealInsert, 'slug'>): Promise<OffMarketDeal> {
  const supabase = createAdminClient()
  
  const slug = slugify(data.title)
  
  const { data: deal, error } = await supabase
    .from('off_market_deals')
    .insert({ ...data, slug })
    .select()
    .single()
  
  if (error) {
    throw new Error(error.message)
  }
  
  return deal
}

export async function updateDeal(
  id: string,
  data: Partial<OffMarketDealInsert>
): Promise<OffMarketDeal> {
  const supabase = createAdminClient()
  
  if (data.title) {
    data.slug = slugify(data.title)
  }
  
  const { data: deal, error } = await supabase
    .from('off_market_deals')
    .update({ ...data, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select()
    .single()
  
  if (error) {
    throw new Error(error.message)
  }
  
  return deal
}

export async function deleteDeal(id: string): Promise<void> {
  const supabase = createAdminClient()
  
  const { error } = await supabase
    .from('off_market_deals')
    .delete()
    .eq('id', id)
  
  if (error) {
    throw new Error(error.message)
  }
}

export async function archiveDeal(id: string): Promise<OffMarketDeal> {
  const supabase = createAdminClient()
  
  const { data: deal, error } = await supabase
    .from('off_market_deals')
    .update({
      status: 'archived',
      updated_at: new Date().toISOString(),
    })
    .eq('id', id)
    .select()
    .single()
  
  if (error) {
    throw new Error(error.message)
  }
  
  return deal
}