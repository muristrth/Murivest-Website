import { createAdminClient } from '@/lib/supabase/admin'
import type { BriefOrder, BriefOrderInsert, OrderStatus } from '@/lib/types/database'

export async function createOrder(data: BriefOrderInsert): Promise<BriefOrder> {
  const supabase = createAdminClient()
  
  const { data: order, error } = await supabase
    .from('brief_orders')
    .insert(data)
    .select()
    .single()
  
  if (error) {
    throw new Error(error.message)
  }
  
  return order
}

export async function updateOrder(
  id: string,
  data: Partial<BriefOrderInsert>
): Promise<BriefOrder> {
  const supabase = createAdminClient()
  
  const { data: order, error } = await supabase
    .from('brief_orders')
    .update({ ...data, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select()
    .single()
  
  if (error) {
    throw new Error(error.message)
  }
  
  return order
}

export async function updateOrderStatus(
  id: string,
  status: OrderStatus
): Promise<BriefOrder> {
  const supabase = createAdminClient()
  
  const { data: order, error } = await supabase
    .from('brief_orders')
    .update({
      status,
      updated_at: new Date().toISOString(),
    })
    .eq('id', id)
    .select()
    .single()
  
  if (error) {
    throw new Error(error.message)
  }
  
  return order
}

export async function fulfillOrder(
  id: string,
  fulfilledBy: string
): Promise<BriefOrder> {
  const supabase = createAdminClient()
  
  const { data: order, error } = await supabase
    .from('brief_orders')
    .update({
      status: 'fulfilled',
      fulfilled_by: fulfilledBy,
      fulfilled_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    })
    .eq('id', id)
    .select()
    .single()
  
  if (error) {
    throw new Error(error.message)
  }
  
  return order
}

export async function cancelOrder(id: string): Promise<BriefOrder> {
  const supabase = createAdminClient()
  
  const { data: order, error } = await supabase
    .from('brief_orders')
    .update({
      status: 'cancelled',
      updated_at: new Date().toISOString(),
    })
    .eq('id', id)
    .select()
    .single()
  
  if (error) {
    throw new Error(error.message)
  }
  
  return order
}