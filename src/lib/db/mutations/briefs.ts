import { createAdminClient } from '@/lib/supabase/admin'
import type { AssetBrief, AssetBriefInsert } from '@/lib/types/database'
import { slugify } from '@/lib/utils/slugify'

export async function createBrief(data: Omit<AssetBriefInsert, 'slug'>): Promise<AssetBrief> {
  const supabase = createAdminClient()
  
  const slug = slugify(data.title)
  
  const { data: brief, error } = await supabase
    .from('asset_briefs')
    .insert({ ...data, slug })
    .select()
    .single()
  
  if (error) {
    throw new Error(error.message)
  }
  
  return brief
}

export async function updateBrief(
  id: string,
  data: Partial<AssetBriefInsert>
): Promise<AssetBrief> {
  const supabase = createAdminClient()
  
  if (data.title) {
    data.slug = slugify(data.title)
  }
  
  const { data: brief, error } = await supabase
    .from('asset_briefs')
    .update({ ...data, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select()
    .single()
  
  if (error) {
    throw new Error(error.message)
  }
  
  return brief
}

export async function deleteBrief(id: string): Promise<void> {
  const supabase = createAdminClient()
  
  const { error } = await supabase
    .from('asset_briefs')
    .delete()
    .eq('id', id)
  
  if (error) {
    throw new Error(error.message)
  }
}

export async function markBriefAsSold(id: string): Promise<AssetBrief> {
  const supabase = createAdminClient()
  
  const { data: brief, error } = await supabase
    .from('asset_briefs')
    .update({
      status: 'sold',
      updated_at: new Date().toISOString(),
    })
    .eq('id', id)
    .select()
    .single()
  
  if (error) {
    throw new Error(error.message)
  }
  
  return brief
}

export async function withdrawBrief(id: string): Promise<AssetBrief> {
  const supabase = createAdminClient()
  
  const { data: brief, error } = await supabase
    .from('asset_briefs')
    .update({
      status: 'withdrawn',
      updated_at: new Date().toISOString(),
    })
    .eq('id', id)
    .select()
    .single()
  
  if (error) {
    throw new Error(error.message)
  }
  
  return brief
}