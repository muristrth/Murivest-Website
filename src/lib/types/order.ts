// Order types for brief orders
import type { OrderStatus } from './database'

export interface Order {
  id: string
  user_id: string
  brief_id: string | null
  order_type: 'brief_purchase' | 'brief_request' | 'publication_access'
  amount: number
  currency: string
  status: OrderStatus
  payment_method: string | null
  payment_reference: string | null
  notes: string | null
  fulfilled_by: string | null
  fulfilled_at: string | null
  created_at: string
  updated_at: string
  // Joined fields
  brief_title?: string
  user_name?: string
  user_email?: string
}

export interface OrderSummary {
  id: string
  order_type: 'brief_purchase' | 'brief_request' | 'publication_access'
  amount: number
  currency: string
  status: OrderStatus
  payment_method: string | null
  payment_reference: string | null
  created_at: string
  brief_title?: string
}

export interface OrderFilter {
  user_id?: string
  status?: OrderStatus
  order_type?: 'brief_purchase' | 'brief_request' | 'publication_access'
  from_date?: string
  to_date?: string
}

export interface CreateOrderData {
  user_id: string
  brief_id?: string
  order_type: 'brief_purchase' | 'brief_request' | 'publication_access'
  amount: number
  currency?: string
  notes?: string
  payment_method?: string
}

export interface UpdateOrderData {
  status?: OrderStatus
  fulfilled_by?: string
  fulfilled_at?: string
  notes?: string
}

export interface OrderStats {
  total: number
  pending: number
  awaiting_payment: number
  paid: number
  fulfilled: number
  cancelled: number
  refunded: number
  total_value: number
}