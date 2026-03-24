'use client'

import { Order, OrderStats } from '@/lib/types/order'
import { formatCurrency } from '@/lib/utils/formatCurrency'
import { formatDate } from '@/lib/utils/formatDate'
import { FileText, CreditCard, CheckCircle, Clock, XCircle, AlertCircle, Package } from 'lucide-react'
import { cn } from '@/lib/utils/cn'

interface OrderCardProps {
  order: Order
}

const statusConfig: Record<string, { label: string; color: string; icon: typeof Clock; bg: string }> = {
  pending: {
    label: 'Pending',
    color: 'text-amber-600',
    icon: Clock,
    bg: 'bg-amber-50 border-amber-200',
  },
  awaiting_payment: {
    label: 'Awaiting Payment',
    color: 'text-orange-600',
    icon: AlertCircle,
    bg: 'bg-orange-50 border-orange-200',
  },
  paid: {
    label: 'Paid',
    color: 'text-blue-600',
    icon: CreditCard,
    bg: 'bg-blue-50 border-blue-200',
  },
  fulfilled: {
    label: 'Fulfilled',
    color: 'text-green-600',
    icon: CheckCircle,
    bg: 'bg-green-50 border-green-200',
  },
  cancelled: {
    label: 'Cancelled',
    color: 'text-gray-600',
    icon: XCircle,
    bg: 'bg-gray-50 border-gray-200',
  },
  refunded: {
    label: 'Refunded',
    color: 'text-red-600',
    icon: XCircle,
    bg: 'bg-red-50 border-red-200',
  },
}

const orderTypeLabels: Record<string, string> = {
  brief_purchase: 'Brief Purchase',
  brief_request: 'Brief Request',
  publication_access: 'Publication Access',
}

export function OrderCard({ order }: OrderCardProps) {
  const config = statusConfig[order.status]
  const StatusIcon = config.icon

  return (
    <div className="bg-white border border-[#1B4332]/10 p-5 hover:border-[#B8956B]/30 transition-all">
      <div className="flex items-start justify-between gap-4">
        {/* Left side - Order info */}
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            {/* Order type icon */}
            <div className="w-10 h-10 bg-[#1B4332]/5 rounded-lg flex items-center justify-center">
              <FileText className="h-5 w-5 text-[#1B4332]" />
            </div>
            
            <div>
              <h4 className="font-medium text-[#1B4332]">
                {order.brief_title || orderTypeLabels[order.order_type]}
              </h4>
              <p className="text-xs text-[#2C3E35]/60">
                {order.order_type === 'brief_purchase' && 'Asset Brief Purchase'}
                {order.order_type === 'brief_request' && 'Brief Information Request'}
                {order.order_type === 'publication_access' && 'Research Publication Access'}
              </p>
            </div>
          </div>

          {/* Order details */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            <div>
              <p className="text-[10px] uppercase tracking-wider text-[#1B4332]/50 mb-1">Order ID</p>
              <p className="text-sm text-[#1B4332] font-mono">{order.id.slice(0, 8)}...</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-[#1B4332]/50 mb-1">Date</p>
              <p className="text-sm text-[#1B4332]">{formatDate(order.created_at)}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-[#1B4332]/50 mb-1">Amount</p>
              <p className="text-sm font-medium text-[#1B4332]">
                {formatCurrency(order.amount, order.currency)}
              </p>
            </div>
            {order.payment_method && (
              <div>
                <p className="text-[10px] uppercase tracking-wider text-[#1B4332]/50 mb-1">Payment</p>
                <p className="text-sm text-[#1B4332] capitalize">{order.payment_method}</p>
              </div>
            )}
          </div>

          {/* Payment reference if available */}
          {order.payment_reference && (
            <div className="mt-3 pt-3 border-t border-[#1B4332]/10">
              <p className="text-xs text-[#2C3E35]/60">
                Payment Reference: <span className="font-mono text-[#1B4332]">{order.payment_reference}</span>
              </p>
            </div>
          )}
        </div>

        {/* Right side - Status */}
        <div className="flex flex-col items-end gap-2">
          <div className={cn("flex items-center gap-2 px-3 py-1.5 rounded text-xs font-medium", config.bg, config.color)}>
            <StatusIcon className="h-4 w-4" />
            {config.label}
          </div>

          {order.status === 'fulfilled' && order.fulfilled_at && (
            <p className="text-[10px] text-[#1B4332]/50">
              Fulfilled {formatDate(order.fulfilled_at)}
            </p>
          )}
        </div>
      </div>

      {/* Action buttons */}
      {order.status === 'fulfilled' && (
        <div className="mt-4 pt-4 border-t border-[#1B4332]/10 flex gap-3">
          <button className="flex items-center gap-2 text-xs text-[#1B4332] hover:text-[#B8956B] transition-colors">
            <Package className="h-4 w-4" />
            Download Documents
          </button>
          <button className="flex items-center gap-2 text-xs text-[#1B4332] hover:text-[#B8956B] transition-colors">
            View Receipt
          </button>
        </div>
      )}
    </div>
  )
}

interface OrderCardSkeletonProps {
  count?: number
}

export function OrderCardSkeleton({ count = 3 }: OrderCardSkeletonProps) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="bg-white border border-[#1B4332]/10 p-5 animate-pulse">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#1B4332]/10 rounded-lg" />
                <div>
                  <div className="h-5 w-32 bg-[#1B4332]/10 rounded mb-2" />
                  <div className="h-3 w-24 bg-[#1B4332]/10 rounded" />
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="h-8 bg-[#1B4332]/10 rounded" />
                <div className="h-8 bg-[#1B4332]/10 rounded" />
                <div className="h-8 bg-[#1B4332]/10 rounded" />
                <div className="h-8 bg-[#1B4332]/10 rounded" />
              </div>
            </div>
            <div className="w-24 h-8 bg-[#1B4332]/10 rounded" />
          </div>
        </div>
      ))}
    </>
  )
}