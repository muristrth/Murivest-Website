import { createAdminClient } from '@/lib/supabase/admin'
import type { Publication, PublicationInsert } from '@/lib/types/database'
import { slugify } from '@/lib/utils/slugify'

export async function createPublication(data: Omit<PublicationInsert, 'slug'>): Promise<Publication> {
  const supabase = createAdminClient()
  
  // Generate slug from title
  const slug = slugify(data.title)
  
  const { data: publication, error } = await supabase
    .from('publications')
    .insert({ ...data, slug })
    .select()
    .single()
  
  if (error) {
    throw new Error(error.message)
  }
  
  return publication
}

export async function updatePublication(
  id: string,
  data: Partial<PublicationInsert>
): Promise<Publication> {
  const supabase = createAdminClient()
  
  // If title is being updated, regenerate slug
  if (data.title) {
    data.slug = slugify(data.title)
  }
  
  const { data: publication, error } = await supabase
    .from('publications')
    .update({ ...data, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select()
    .single()
  
  if (error) {
    throw new Error(error.message)
  }
  
  return publication
}

export async function deletePublication(id: string): Promise<void> {
  const supabase = createAdminClient()
  
  const { error } = await supabase
    .from('publications')
    .delete()
    .eq('id', id)
  
  if (error) {
    throw new Error(error.message)
  }
}

export async function publishPublication(id: string): Promise<Publication> {
  const supabase = createAdminClient()
  
  const { data: publication, error } = await supabase
    .from('publications')
    .update({
      published_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    })
    .eq('id', id)
    .select()
    .single()
  
  if (error) {
    throw new Error(error.message)
  }
  
  return publication
}

export async function unpublishPublication(id: string): Promise<Publication> {
  const supabase = createAdminClient()
  
  const { data: publication, error } = await supabase
    .from('publications')
    .update({
      published_at: null,
      updated_at: new Date().toISOString(),
    })
    .eq('id', id)
    .select()
    .single()
  
  if (error) {
    throw new Error(error.message)
  }
  
  return publication
}