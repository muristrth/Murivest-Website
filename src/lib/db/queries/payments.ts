import { createAdminClient } from '@/lib/supabase/admin'
import type { PaymentConfirmation, PaymentStatus, ReviewStatus, PaymentMethod } from '@/lib/types/database'

export async function getAllPayments(
  options?: {
    userId?: string
    status?: PaymentStatus
    reviewStatus?: ReviewStatus
    paymentMethod?: PaymentMethod
    limit?: number
    offset?: number
  }
): Promise<{ payments: PaymentConfirmation[]; total: number }> {
  const supabase = createAdminClient()
  
  let query = supabase.from('payment_confirmations').select('*', { count: 'exact' })
  
  if (options?.userId) {
    query = query.eq('user_id', options.userId)
  }
  
  if (options?.status) {
    query = query.eq('status', options.status)
  }
  
  if (options?.reviewStatus) {
    query = query.eq('review_status', options.reviewStatus)
  }
  
  if (options?.paymentMethod) {
    query = query.eq('payment_method', options.paymentMethod)
  }
  
  if (options?.limit) {
    query = query.limit(options.limit)
  }
  
  if (options?.offset) {
    query = query.range(options.offset, options.offset + (options.limit || 10) - 1)
  }
  
  const { data: payments, error, count } = await query.order('created_at', { ascending: false })
  
  if (error) {
    throw new Error(error.message)
  }
  
  return { payments: payments || [], total: count || 0 }
}

export async function getPaymentById(id: string): Promise<PaymentConfirmation | null> {
  const supabase = createAdminClient()
  
  const { data, error } = await supabase
    .from('payment_confirmations')
    .select('*')
    .eq('id', id)
    .single()
  
  if (error) {
    if (error.code === 'PGRST116') return null
    throw new Error(error.message)
  }
  
  return data
}

export async function getPaymentByOrderId(orderId: string): Promise<PaymentConfirmation | null> {
  const supabase = createAdminClient()
  
  const { data, error } = await supabase
    .from('payment_confirmations')
    .select('*')
    .eq('order_id', orderId)
    .single()
  
  if (error) {
    if (error.code === 'PGRST116') return null
    throw new Error(error.message)
  }
  
  return data
}

export async function getPaymentsByUser(userId: string): Promise<PaymentConfirmation[]> {
  const supabase = createAdminClient()
  
  const { data, error } = await supabase
    .from('payment_confirmations')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })
  
  if (error) throw new Error(error.message)
  
  return data || []
}

export async function getPendingPaymentsCount(): Promise<number> {
  const supabase = createAdminClient()
  
  const { count, error } = await supabase
    .from('payment_confirmations')
    .select('*', { count: 'exact', head: true })
    .eq('review_status', 'submitted')
  
  if (error) throw new Error(error.message)
  
  return count || 0
}