'use client'

import { createClient } from '@/lib/supabase/client'
import { useEffect, useState, useCallback } from 'react'

interface AdminStats {
  totalInvestors: number
  verifiedInvestors: number
  premiumInvestors: number
  pendingVerifications: number
  totalPublications: number
  activeBriefs: number
  offMarketDeals: number
  totalOrders: number
  pendingOrders: number
  totalPayments: number
  pendingPayments: number
  recentOrders: OrderSummary[]
  recentPayments: PaymentSummary[]
}

interface OrderSummary {
  id: string
  user_name: string
  order_type: string
  amount: number
  status: string
  created_at: string
}

interface PaymentSummary {
  id: string
  user_name: string
  amount: number
  payment_method: string
  status: string
  created_at: string
}

interface UseAdminStatsReturn {
  stats: AdminStats | null
  loading: boolean
  error: Error | null
  refresh: () => Promise<void>
}

export function useAdminStats(): UseAdminStatsReturn {
  const [stats, setStats] = useState<AdminStats | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)
  
  const supabase = createClient()
  
  const fetchStats = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)
      
      // Run all queries in parallel
      const [
        { count: totalInvestors },
        { count: verifiedInvestors },
        { count: premiumInvestors },
        { count: pendingVerifications },
        { count: totalPublications },
        { count: activeBriefs },
        { count: offMarketDeals },
        { count: totalOrders },
        { count: pendingOrders },
        { count: totalPayments },
        { count: pendingPayments },
        { data: recentOrders },
        { data: recentPayments }
      ] = await Promise.all([
        supabase.from('profiles').select('*', { count: 'exact', head: true }),
        supabase.from('profiles').select('*', { count: 'exact', head: true }).eq('investor_status', 'verified'),
        supabase.from('profiles').select('*', { count: 'exact', head: true }).eq('investor_status', 'premium'),
        supabase.from('verification_requests').select('*', { count: 'exact', head: true }).eq('status', 'pending'),
        supabase.from('publications').select('*', { count: 'exact', head: true }),
        supabase.from('asset_briefs').select('*', { count: 'exact', head: true }).eq('status', 'active'),
        supabase.from('off_market_deals').select('*', { count: 'exact', head: true }).eq('status', 'active'),
        supabase.from('brief_orders').select('*', { count: 'exact', head: true }),
        supabase.from('brief_orders').select('*', { count: 'exact', head: true }).in('status', ['pending', 'awaiting_payment']),
        supabase.from('payment_confirmations').select('*', { count: 'exact', head: true }),
        supabase.from('payment_confirmations').select('*', { count: 'exact', head: true }).in('status', ['pending', 'submitted']),
        supabase.from('brief_orders')
          .select('id, user_id, order_type, amount, status, created_at, profiles(full_name)')
          .order('created_at', { ascending: false })
          .limit(5),
        supabase.from('payment_confirmations')
          .select('id, user_id, amount, payment_method, status, created_at, profiles(full_name)')
          .order('created_at', { ascending: false })
          .limit(5)
      ])
      
      // Transform recent orders
      const transformedOrders: OrderSummary[] = (recentOrders || []).map((order: Record<string, unknown>) => ({
        id: order.id as string,
        user_name: (order.profiles as { full_name?: string })?.full_name || 'Unknown',
        order_type: order.order_type as string,
        amount: order.amount as number,
        status: order.status as string,
        created_at: order.created_at as string
      }))
      
      // Transform recent payments
      const transformedPayments: PaymentSummary[] = (recentPayments || []).map((payment: Record<string, unknown>) => ({
        id: payment.id as string,
        user_name: (payment.profiles as { full_name?: string })?.full_name || 'Unknown',
        amount: payment.amount as number,
        payment_method: payment.payment_method as string,
        status: payment.status as string,
        created_at: payment.created_at as string
      }))
      
      setStats({
        totalInvestors: totalInvestors || 0,
        verifiedInvestors: verifiedInvestors || 0,
        premiumInvestors: premiumInvestors || 0,
        pendingVerifications: pendingVerifications || 0,
        totalPublications: totalPublications || 0,
        activeBriefs: activeBriefs || 0,
        offMarketDeals: offMarketDeals || 0,
        totalOrders: totalOrders || 0,
        pendingOrders: pendingOrders || 0,
        totalPayments: totalPayments || 0,
        pendingPayments: pendingPayments || 0,
        recentOrders: transformedOrders,
        recentPayments: transformedPayments
      })
    } catch (err) {
      console.error('Error fetching admin stats:', err)
      setError(err as Error)
    } finally {
      setLoading(false)
    }
  }, [supabase])
  
  useEffect(() => {
    fetchStats()
  }, [fetchStats])
  
  return {
    stats,
    loading,
    error,
    refresh: fetchStats
  }
}