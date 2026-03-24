import { createAdminClient } from '@/lib/supabase/admin'
import type { PaymentConfirmation, PaymentConfirmationInsert, PaymentStatus, ReviewStatus } from '@/lib/types/database'

export async function createPayment(data: PaymentConfirmationInsert): Promise<PaymentConfirmation> {
  const supabase = createAdminClient()
  
  const { data: payment, error } = await supabase
    .from('payment_confirmations')
    .insert(data)
    .select()
    .single()
  
  if (error) {
    throw new Error(error.message)
  }
  
  return payment
}

export async function updatePayment(
  id: string,
  data: Partial<PaymentConfirmationInsert>
): Promise<PaymentConfirmation> {
  const supabase = createAdminClient()
  
  const { data: payment, error } = await supabase
    .from('payment_confirmations')
    .update({ ...data, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select()
    .single()
  
  if (error) {
    throw new Error(error.message)
  }
  
  return payment
}

export async function verifyPayment(
  id: string,
  verifiedBy: string
): Promise<PaymentConfirmation> {
  const supabase = createAdminClient()
  
  const { data: payment, error } = await supabase
    .from('payment_confirmations')
    .update({
      status: 'verified',
      review_status: 'approved',
      verified_by: verifiedBy,
      verified_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    })
    .eq('id', id)
    .select()
    .single()
  
  if (error) {
    throw new Error(error.message)
  }
  
  return payment
}

export async function rejectPayment(
  id: string,
  notes?: string
): Promise<PaymentConfirmation> {
  const supabase = createAdminClient()
  
  const { data: payment, error } = await supabase
    .from('payment_confirmations')
    .update({
      status: 'failed',
      review_status: 'rejected',
      notes: notes || 'Payment rejected',
      updated_at: new Date().toISOString(),
    })
    .eq('id', id)
    .select()
    .single()
  
  if (error) {
    throw new Error(error.message)
  }
  
  return payment
}

export async function refundPayment(id: string): Promise<PaymentConfirmation> {
  const supabase = createAdminClient()
  
  const { data: payment, error } = await supabase
    .from('payment_confirmations')
    .update({
      status: 'refunded',
      updated_at: new Date().toISOString(),
    })
    .eq('id', id)
    .select()
    .single()
  
  if (error) {
    throw new Error(error.message)
  }
  
  return payment
}