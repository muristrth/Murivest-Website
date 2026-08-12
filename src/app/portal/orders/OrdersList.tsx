'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  FileText, 
  Download, 
  ChevronRight,
  Package,
  Truck,
  Eye,
  Printer,
  XCircle,
  CreditCard,
  Loader2,
  Check,
  AlertTriangle
} from 'lucide-react'
import PaymentModal from '@/components/PaymentModal'

// Sample orders with realistic institutional data
const sampleOrders = [
  {
    id: 'ORD-2026-001847',
    order_type: 'hard_copy',
    amount_kes: 19500,
    amount_usd: 150,
    status: 'delivered',
    contact_name: 'Dr. James Morrison',
    contact_email: 'james@morrisonfamilyoffice.com',
    organisation: 'Morrison Family Office',
    shipping_address: 'Westlands Business Park, 5th Floor, Wing A, Nairobi, Kenya',
    created_at: '2026-03-15T09:23:00Z',
    updated_at: '2026-03-18T14:30:00Z',
    brief_title: 'Westlands Grade A Office Development',
    delivery_method: 'Courier (G4S)',
    tracking_number: 'G4S-KEN-789456123',
    payment_method: 'M-Pesa',
    transaction_id: 'MPESA1234567890'
  },
  {
    id: 'ORD-2026-001856',
    order_type: 'digital',
    amount_kes: 0,
    amount_usd: 0,
    status: 'delivered',
    contact_name: 'Dr. James Morrison',
    contact_email: 'james@morrisonfamilyoffice.com',
    organisation: 'Morrison Family Office',
    shipping_address: null,
    created_at: '2026-03-16T11:45:00Z',
    updated_at: '2026-03-16T11:47:00Z',
    brief_title: 'Kilimani Mixed-Use Redevelopment',
    delivery_method: 'Secure Download',
    tracking_number: null,
    payment_method: 'N/A',
    transaction_id: null
  },
  {
    id: 'ORD-2026-001889',
    order_type: 'hard_copy',
    amount_kes: 19500,
    amount_usd: 150,
    status: 'processing',
    contact_name: 'Dr. James Morrison',
    contact_email: 'james@morrisonfamilyoffice.com',
    organisation: 'Morrison Family Office',
    shipping_address: 'Westlands Business Park, 5th Floor, Wing A, Nairobi, Kenya',
    created_at: '2026-03-20T16:30:00Z',
    updated_at: '2026-03-21T09:15:00Z',
    brief_title: 'Tatu City Logistics Hub',
    delivery_method: 'Courier (G4S)',
    tracking_number: null,
    payment_method: 'M-Pesa',
    transaction_id: 'MPESA0987654321'
  }
]

// Status badge configuration
const statusConfig = {
  pending: { color: 'amber', label: 'Pending Payment' },
  awaiting_payment: { color: 'amber', label: 'Awaiting Payment' },
  payment_confirmed: { color: 'blue', label: 'Payment Confirmed' },
  processing: { color: 'indigo', label: 'Preparing' },
  shipped: { color: 'purple', label: 'In Transit' },
  delivered: { color: 'green', label: 'Delivered' },
  cancelled: { color: 'red', label: 'Cancelled' }
}

interface Order {
  id: string
  order_type: string
  amount_kes: number
  amount_usd: number
  status: string
  contact_name: string
  contact_email: string
  organisation: string | null
  shipping_address: string | null
  created_at: string
  updated_at: string | null
  brief_title: string | null
  delivery_method: string | null
  tracking_number: string | null
  payment_method: string | null
  transaction_id: string | null
}

interface OrdersListProps {
  initialOrders: Order[]
}

export default function OrdersList({ initialOrders }: OrdersListProps) {
  const [orders, setOrders] = useState<Order[]>(initialOrders)
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null)
  const [showPaymentModal, setShowPaymentModal] = useState(false)
  const [showCancelModal, setShowCancelModal] = useState(false)
  const [cancelReason, setCancelReason] = useState('')
  const [cancelling, setCancelling] = useState(false)
  const [filter, setFilter] = useState('all')

  // Refresh orders after payment
  const handlePaymentSuccess = () => {
    // Update local state
    if (selectedOrder) {
      setOrders(prev => prev.map(o => 
        o.id === selectedOrder.id 
          ? { ...o, status: 'payment_confirmed' }
          : o
      ))
    }
    setShowPaymentModal(false)
    setSelectedOrder(null)
  }

  // Handle order cancellation
  const handleCancelOrder = async () => {
    if (!selectedOrder) return
    
    setCancelling(true)
    
    try {
      const res = await fetch('/api/investor-order-cancel', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          orderId: selectedOrder.id, 
          cancellationReason: cancelReason 
        }),
      })

      const json = await res.json()

      if (!res.ok) {
        alert(json.error || 'Failed to cancel order')
        setCancelling(false)
        return
      }

      // Update local state
      setOrders(prev => prev.map(o => 
        o.id === selectedOrder.id 
          ? { ...o, status: 'cancelled' }
          : o
      ))
      
      setShowCancelModal(false)
      setSelectedOrder(null)
      setCancelReason('')
    } catch {
      alert('Failed to cancel order. Please try again.')
    } finally {
      setCancelling(false)
    }
  }

  // Filter orders
  const filteredOrders = orders.filter(order => {
    if (filter === 'all') return true
    if (filter === 'in_progress') return ['pending', 'awaiting_payment', 'payment_confirmed', 'processing', 'shipped'].includes(order.status)
    if (filter === 'delivered') return order.status === 'delivered'
    if (filter === 'hard_copy') return order.order_type === 'hard_copy'
    if (filter === 'digital') return order.order_type === 'digital'
    return true
  })

  return (
    <>
      {/* Filter */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="font-serif text-2xl text-[#1B4332] mb-1">Order History</h2>
          <p className="text-xs text-[#2C3E35]/60">
            {filteredOrders.filter(o => o.status === 'delivered').length} delivered | {' '}
            {filteredOrders.filter(o => ['pending', 'awaiting_payment', 'payment_confirmed', 'processing', 'shipped'].includes(o.status)).length} in progress
          </p>
        </div>
        
        <div className="flex items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.15em] text-[#1B4332]/50">Filter:</span>
          <select 
            value={filter}
            onChange={e => setFilter(e.target.value)}
            className="bg-white border border-[#1B4332]/20 text-xs text-[#1B4332] px-3 py-2 focus:border-[#B8956B] focus:outline-none"
          >
            <option value="all">All Orders</option>
            <option value="in_progress">In Progress</option>
            <option value="delivered">Delivered</option>
            <option value="hard_copy">Hard Copy</option>
            <option value="digital">Digital</option>
          </select>
        </div>
      </div>

      {/* Orders List */}
      <div className="space-y-4">
        {filteredOrders.map((order) => {
          const status = statusConfig[order.status as keyof typeof statusConfig] || statusConfig.pending
          const isDigital = order.order_type === 'digital'
          const isDelivered = order.status === 'delivered'
          const isPending = ['pending', 'awaiting_payment'].includes(order.status)
          const isCancelled = order.status === 'cancelled'
          
          return (
            <div 
              key={order.id} 
              className={`group bg-white border border-[#1B4332]/10 hover:border-[#B8956B]/30 transition-all duration-300 ${isCancelled ? 'opacity-60' : ''}`}
            >
              {/* Order Header */}
              <div className="p-6 border-b border-[#1B4332]/5">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 flex items-center justify-center flex-shrink-0 ${
                      isDigital ? 'bg-[#1B4332]/5' : 'bg-[#B8956B]/10'
                    }`}>
                      {isDigital ? (
                        <FileText className="h-6 w-6 text-[#1B4332]" />
                      ) : (
                        <Package className="h-6 w-6 text-[#B8956B]" />
                      )}
                    </div>
                    
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-[10px] uppercase tracking-[0.15em] text-[#1B4332]/50">
                          {order.id}
                        </span>
                        <span className={`text-[10px] uppercase tracking-wider px-2 py-0.5 ${
                          status.color === 'green' ? 'bg-green-50 text-green-600' :
                          status.color === 'amber' ? 'bg-amber-50 text-amber-600' :
                          status.color === 'blue' ? 'bg-blue-50 text-blue-600' :
                          status.color === 'indigo' ? 'bg-indigo-50 text-indigo-600' :
                          status.color === 'purple' ? 'bg-purple-50 text-purple-600' :
                          'bg-red-50 text-red-600'
                        }`}>
                          {status.label}
                        </span>
                        <span className="text-[10px] uppercase tracking-wider text-[#1B4332]/40">
                          {isDigital ? 'Digital' : 'Hard Copy'}
                        </span>
                      </div>
                      
                      <h3 className="font-serif text-xl text-[#1B4332] group-hover:text-[#B8956B] transition-colors">
                        {order.brief_title || 'Investment Brief'}
                      </h3>
                      
                      <div className="flex flex-wrap items-center gap-4 mt-2 text-xs text-[#2C3E35]/60">
                        <span>Ordered: {new Date(order.created_at).toLocaleDateString('en-GB', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric'
                        })}</span>
                        {order.updated_at && order.updated_at !== order.created_at && (
                          <span>Updated: {new Date(order.updated_at).toLocaleDateString('en-GB', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric'
                          })}</span>
                        )}
                        {order.payment_method && (
                          <span>Payment: {order.payment_method}</span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="text-xs text-[#1B4332]/50 mb-1">Amount</div>
                      <div className="font-serif text-xl text-[#1B4332]">
                        {order.amount_kes > 0 ? `KES ${order.amount_kes.toLocaleString()}` : 'Free'}
                      </div>
                      {order.amount_usd > 0 && (
                        <div className="text-xs text-[#1B4332]/50">${order.amount_usd}</div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Order Details */}
              <div className="p-6 bg-[#FAF9F6]/50">
                <div className="grid md:grid-cols-3 gap-6 text-sm">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.15em] text-[#1B4332]/50 mb-2">Recipient</div>
                    <div className="font-medium text-[#1B4332]">{order.contact_name}</div>
                    <div className="text-[#2C3E35]/60">{order.organisation || 'Individual'}</div>
                    <div className="text-[#2C3E35]/60 text-xs mt-1">{order.contact_email}</div>
                  </div>

                  <div>
                    <div className="text-[10px] uppercase tracking-[0.15em] text-[#1B4332]/50 mb-2">Delivery</div>
                    <div className="font-medium text-[#1B4332]">{order.delivery_method || (isDigital ? 'Secure Download' : 'Courier')}</div>
                    {order.tracking_number && (
                      <div className="text-[#2C3E35]/60 text-xs mt-1">
                        Tracking: <span className="font-medium text-[#B8956B]">{order.tracking_number}</span>
                      </div>
                    )}
                    {!isDigital && order.shipping_address && (
                      <div className="text-[#2C3E35]/60 text-xs mt-1 line-clamp-2">
                        {order.shipping_address}
                      </div>
                    )}
                  </div>

                  <div>
                    <div className="text-[10px] uppercase tracking-[0.15em] text-[#1B4332]/50 mb-2">Payment</div>
                    <div className="font-medium text-[#1B4332]">{order.payment_method || 'N/A'}</div>
                    {order.transaction_id && (
                      <div className="text-[#2C3E35]/60 text-xs mt-1">
                        Transaction: {order.transaction_id}
                      </div>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 mt-6 pt-6 border-t border-[#1B4332]/10">
                  {/* Pay Now Button - Only for pending orders */}
                  {isPending && !isCancelled && (
                    <button 
                      onClick={() => {
                        setSelectedOrder(order)
                        setShowPaymentModal(true)
                      }}
                      className="inline-flex items-center gap-2 bg-[#B8956B] text-white px-4 py-2 text-[11px] uppercase tracking-[0.1em] hover:bg-[#9A7B5A] transition-colors"
                    >
                      <CreditCard className="h-4 w-4" />
                      Pay Now
                    </button>
                  )}
                  
                  {/* Cancel Button - Only for pending orders */}
                  {isPending && !isCancelled && (
                    <button 
                      onClick={() => {
                        setSelectedOrder(order)
                        setShowCancelModal(true)
                      }}
                      className="inline-flex items-center gap-2 border border-red-200 text-red-600 px-4 py-2 text-[11px] uppercase tracking-[0.1em] hover:bg-red-50 transition-colors"
                    >
                      <XCircle className="h-4 w-4" />
                      Cancel Order
                    </button>
                  )}
                  
                  {isDelivered && isDigital && (
                    <button className="inline-flex items-center gap-2 bg-[#1B4332] text-white px-4 py-2 text-[11px] uppercase tracking-[0.1em] hover:bg-[#2D5A47] transition-colors">
                      <Download className="h-4 w-4" />
                      Download Brief
                    </button>
                  )}
                  
                  {order.tracking_number && (
                    <a 
                      href={`https://tracking.g4s.co.ke/${order.tracking_number}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 border border-[#1B4332]/20 text-[#1B4332] px-4 py-2 text-[11px] uppercase tracking-[0.1em] hover:border-[#B8956B] hover:text-[#B8956B] transition-colors"
                    >
                      <Truck className="h-4 w-4" />
                      Track Shipment
                    </a>
                  )}
                  
                  <button className="inline-flex items-center gap-2 border border-[#1B4332]/20 text-[#1B4332] px-4 py-2 text-[11px] uppercase tracking-[0.1em] hover:border-[#B8956B] hover:text-[#B8956B] transition-colors">
                    <Printer className="h-4 w-4" />
                    Print Receipt
                  </button>
                  
                  <button className="inline-flex items-center gap-2 border border-[#1B4332]/20 text-[#1B4332] px-4 py-2 text-[11px] uppercase tracking-[0.1em] hover:border-[#B8956B] hover:text-[#B8956B] transition-colors">
                    <Eye className="h-4 w-4" />
                    View Details
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {filteredOrders.length === 0 && (
        <div className="bg-[#FAF9F6] border border-[#B8956B]/20 p-12 text-center">
          <Package className="h-12 w-12 text-[#B8956B]/30 mx-auto mb-4" />
          <h3 className="font-serif text-xl text-[#1B4332] mb-2">No Orders Found</h3>
          <p className="text-sm text-[#2C3E35]/60 max-w-md mx-auto mb-4">
            You haven't placed any investment brief orders yet. Browse our available briefs 
            to request detailed analysis on specific opportunities.
          </p>
          <Link 
            href="/portal/briefs"
            className="inline-block bg-[#1B4332] text-white px-6 py-3 text-xs uppercase tracking-[0.15em] hover:bg-[#2D5A47] transition-colors"
          >
            Browse Briefs
          </Link>
        </div>
      )}

      {/* Payment Modal */}
      {selectedOrder && (
        <PaymentModal
          isOpen={showPaymentModal}
          onClose={() => {
            setShowPaymentModal(false)
            setSelectedOrder(null)
          }}
          orderId={selectedOrder.id}
          orderAmount={selectedOrder.amount_kes}
          onSuccess={handlePaymentSuccess}
        />
      )}

      {/* Cancel Confirmation Modal */}
      {showCancelModal && selectedOrder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowCancelModal(false)}
          />
          
          <div className="relative bg-white w-full max-w-md mx-4 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-red-100 flex items-center justify-center">
                <AlertTriangle className="h-5 w-5 text-red-600" />
              </div>
              <div>
                <h3 className="font-serif text-lg text-[#1B4332]">Cancel Order</h3>
                <p className="text-xs text-[#1B4332]/60">Order #{selectedOrder.id.substring(0, 8)}</p>
              </div>
            </div>

            <p className="text-sm text-[#1B4332]/70 mb-4">
              Are you sure you want to cancel this order? This action cannot be undone.
            </p>

            <div className="mb-4">
              <label className="block text-xs uppercase tracking-wider text-[#1B4332]/70 mb-2">
                Reason (optional)
              </label>
              <textarea
                value={cancelReason}
                onChange={e => setCancelReason(e.target.value)}
                placeholder="Please let us know why you're cancelling..."
                rows={2}
                className="w-full px-3 py-2 border border-[#E5E2DC] text-sm focus:border-[#B8956B] focus:outline-none resize-none"
              />
            </div>

            <div className="flex gap-3">
              <button 
                onClick={() => setShowCancelModal(false)}
                className="flex-1 border border-[#1B4332]/20 text-[#1B4332] px-4 py-2 text-xs uppercase tracking-[0.1em] hover:bg-[#F8F7F4] transition-colors"
              >
                Keep Order
              </button>
              <button 
                onClick={handleCancelOrder}
                disabled={cancelling}
                className="flex-1 bg-red-600 text-white px-4 py-2 text-xs uppercase tracking-[0.1em] hover:bg-red-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {cancelling ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Cancelling...
                  </>
                ) : (
                  'Confirm Cancellation'
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
