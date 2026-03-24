// Payment types for payment confirmations
import type { PaymentMethod, PaymentStatus, ReviewStatus } from './database'

export interface Payment {
  id: string
  order_id: string | null
  user_id: string
  amount: number
  currency: string
  payment_method: PaymentMethod
  transaction_id: string | null
  phone_number: string | null
  status: PaymentStatus
  review_status: ReviewStatus
  receipt_url: string | null
  notes: string | null
  verified_by: string | null
  verified_at: string | null
  created_at: string
  updated_at: string
  // Joined fields
  user_name?: string
  user_email?: string
  order_type?: string
}

export interface PaymentSummary {
  id: string
  amount: number
  currency: string
  payment_method: PaymentMethod
  transaction_id: string | null
  status: PaymentStatus
  review_status: ReviewStatus
  created_at: string
  user_name?: string
}

export interface PaymentFilter {
  user_id?: string
  status?: PaymentStatus
  review_status?: ReviewStatus
  payment_method?: PaymentMethod
  from_date?: string
  to_date?: string
}

export interface CreatePaymentData {
  order_id?: string
  user_id: string
  amount: number
  currency?: string
  payment_method: PaymentMethod
  transaction_id?: string
  phone_number?: string
  receipt_url?: string
  notes?: string
}

export interface UpdatePaymentData {
  status?: PaymentStatus
  review_status?: ReviewStatus
  verified_by?: string
  verified_at?: string
  notes?: string
}

export interface MpesaCallback {
  transaction_type: string
  transaction_id: string
  transaction_time: string
  transaction_amount: string
  business_short_code: string
  bill_ref_number: string
  invoice_number: string
  third_party_transid: string
  phone_number: string
  name: string
}

export interface PaymentStats {
  total: number
  pending: number
  verified: number
  failed: number
  refunded: number
  total_value: number
  pending_value: number
  verified_value: number
}