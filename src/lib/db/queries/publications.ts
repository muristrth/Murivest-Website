import { createAdminClient } from '@/lib/supabase/admin'
import type { Publication, PublicationCategory, PublicationAccess } from '@/lib/types/database'

export async function getAllPublications(
  options?: {
    category?: PublicationCategory
    accessLevel?: PublicationAccess
    limit?: number
    offset?: number
    featured?: boolean
  }
): Promise<{ publications: Publication[]; total: number }> {
  const supabase = createAdminClient()
  
  let query = supabase.from('publications').select('*', { count: 'exact' })
  
  if (options?.category) {
    query = query.eq('category', options.category)
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
  
  const { data: publications, error, count } = await query.order('published_at', { ascending: false })
  
  if (error) {
    throw new Error(error.message)
  }
  
  return { publications: publications || [], total: count || 0 }
}

export async function getPublicationById(id: string): Promise<Publication | null> {
  const supabase = createAdminClient()
  
  const { data, error } = await supabase
    .from('publications')
    .select('*')
    .eq('id', id)
    .single()
  
  if (error) {
    if (error.code === 'PGRST116') return null
    throw new Error(error.message)
  }
  
  return data
}

export async function getPublicationBySlug(slug: string): Promise<Publication | null> {
  const supabase = createAdminClient()
  
  const { data, error } = await supabase
    .from('publications')
    .select('*')
    .eq('slug', slug)
    .single()
  
  if (error) {
    if (error.code === 'PGRST116') return null
    throw new Error(error.message)
  }
  
  return data
}

export async function getPublicationsByAccess(
  accessLevel: PublicationAccess
): Promise<Publication[]> {
  const supabase = createAdminClient()
  
  const { data, error } = await supabase
    .from('publications')
    .select('*')
    .eq('access_level', accessLevel)
    .eq('status', 'published')
    .order('published_at', { ascending: false })
  
  if (error) throw new Error(error.message)
  
  return data || []
}

export async function getPublicationStats(): Promise<{
  total: number
  byCategory: Record<PublicationCategory, number>
}> {
  const supabase = createAdminClient()
  
  const categories: PublicationCategory[] = [
    'market_report', 'investment_analysis', 'quarterly_update', 'research_brief', 'white_paper'
  ]
  
  const results = await Promise.all(
    categories.map(async (cat) => {
      const { count } = await supabase
        .from('publications')
        .select('*', { count: 'exact', head: true })
        .eq('category', cat)
      return { category: cat, count: count || 0 }
    })
  )
  
  const byCategory = results.reduce((acc, { category, count }) => {
    acc[category] = count
    return acc
  }, {} as Record<PublicationCategory, number>)
  
  const { count: total } = await supabase
    .from('publications')
    .select('*', { count: 'exact', head: true })
  
  return { total: total || 0, byCategory }
}