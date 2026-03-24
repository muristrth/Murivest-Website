import { createAdminClient } from '@/lib/supabase/admin'
import type { BriefOrder, OrderStatus } from '@/lib/types/database'

export async function getAllOrders(
  options?: {
    userId?: string
    status?: OrderStatus
    orderType?: 'brief_purchase' | 'brief_request' | 'publication_access'
    limit?: number
    offset?: number
  }
): Promise<{ orders: BriefOrder[]; total: number }> {
  const supabase = createAdminClient()
  
  let query = supabase.from('brief_orders').select('*', { count: 'exact' })
  
  if (options?.userId) {
    query = query.eq('user_id', options.userId)
  }
  
  if (options?.status) {
    query = query.eq('status', options.status)
  }
  
  if (options?.orderType) {
    query = query.eq('order_type', options.orderType)
  }
  
  if (options?.limit) {
    query = query.limit(options.limit)
  }
  
  if (options?.offset) {
    query = query.range(options.offset, options.offset + (options.limit || 10) - 1)
  }
  
  const { data: orders, error, count } = await query.order('created_at', { ascending: false })
  
  if (error) {
    throw new Error(error.message)
  }
  
  return { orders: orders || [], total: count || 0 }
}

export async function getOrderById(id: string): Promise<BriefOrder | null> {
  const supabase = createAdminClient()
  
  const { data, error } = await supabase
    .from('brief_orders')
    .select('*')
    .eq('id', id)
    .single()
  
  if (error) {
    if (error.code === 'PGRST116') return null
    throw new Error(error.message)
  }
  
  return data
}

export async function getOrdersByUser(userId: string): Promise<BriefOrder[]> {
  const supabase = createAdminClient()
  
  const { data, error } = await supabase
    .from('brief_orders')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })
  
  if (error) throw new Error(error.message)
  
  return data || []
}

export async function getUserOrderStats(userId: string): Promise<{
  total: number
  pending: number
  fulfilled: number
}> {
  const supabase = createAdminClient()
  
  const [
    { count: total },
    { count: pending },
    { count: fulfilled },
  ] = await Promise.all([
    supabase.from('brief_orders').select('*', { count: 'exact', head: true }).eq('user_id', userId),
    supabase.from('brief_orders').select('*', { count: 'exact', head: true }).eq('user_id', userId).in('status', ['pending', 'awaiting_payment']),
    supabase.from('brief_orders').select('*', { count: 'exact', head: true }).eq('user_id', userId).eq('status', 'fulfilled'),
  ])
  
  return {
    total: total || 0,
    pending: pending || 0,
    fulfilled: fulfilled || 0,
  }
}