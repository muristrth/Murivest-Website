'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { Alert } from '@/components/ui/Alert'
import { formatCurrency } from '@/lib/utils/formatCurrency'

interface PaymentReviewFormProps {
  payment: {
    id: string
    user_id: string
    amount: number
    currency: string
    status: string
    mpesa_receipt?: string
    phone_number?: string
    created_at: string
    orders?: {
      id: string
      brief_id: string
      brief_title: string
    }[]
  }
  onApprove: (paymentId: string, notes?: string) => Promise<void>
  onReject: (paymentId: string, reason: string) => Promise<void>
}

export function PaymentReviewForm({
  payment,
  onApprove,
  onReject
}: PaymentReviewFormProps) {
  const [notes, setNotes] = useState('')
  const [rejectReason, setRejectReason] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [showReject, setShowReject] = useState(false)
  const [success, setSuccess] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleApprove = async () => {
    setError(null)
    setSuccess(null)
    setIsLoading(true)

    try {
      await onApprove(payment.id, notes)
      setSuccess('Payment approved successfully')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to approve payment')
    } finally {
      setIsLoading(false)
    }
  }

  const handleReject = async () => {
    if (!rejectReason.trim()) {
      setError('Please provide a reason for rejection')
      return
    }

    setError(null)
    setSuccess(null)
    setIsLoading(true)

    try {
      await onReject(payment.id, rejectReason)
      setSuccess('Payment rejected')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to reject payment')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      {error && <Alert variant="error">{error}</Alert>}
      {success && <Alert variant="success">{success}</Alert>}

      <div className="bg-slate-50 rounded-lg p-4 space-y-3">
        <div className="flex justify-between">
          <span className="text-slate-500">Amount</span>
          <span className="font-semibold text-slate-900">
            {formatCurrency(payment.amount, payment.currency)}
          </span>
        </div>
        {payment.mpesa_receipt && (
          <div className="flex justify-between">
            <span className="text-slate-500">M-Pesa Receipt</span>
            <span className="font-medium text-slate-900">{payment.mpesa_receipt}</span>
          </div>
        )}
        {payment.phone_number && (
          <div className="flex justify-between">
            <span className="text-slate-500">Phone</span>
            <span className="font-medium text-slate-900">{payment.phone_number}</span>
          </div>
        )}
        <div className="flex justify-between">
          <span className="text-slate-500">Date</span>
          <span className="font-medium text-slate-900">
            {new Date(payment.created_at).toLocaleString()}
          </span>
        </div>
        {payment.orders && payment.orders.length > 0 && (
          <div className="pt-2 border-t border-slate-200">
            <span className="text-slate-500 block mb-2">Orders</span>
            {payment.orders.map((order) => (
              <div key={order.id} className="text-sm text-slate-700">
                • {order.brief_title}
              </div>
            ))}
          </div>
        )}
      </div>

      <Textarea
        label="Notes (Optional)"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Add any notes about this payment"
        rows={3}
      />

      {showReject ? (
        <div className="space-y-4">
          <Textarea
            label="Rejection Reason"
            value={rejectReason}
            onChange={(e) => setRejectReason(e.target.value)}
            placeholder="Why is this payment being rejected?"
            rows={2}
            required
          />
          <div className="flex gap-3">
            <Button
              variant="danger"
              onClick={handleReject}
              isLoading={isLoading}
            >
              Confirm Rejection
            </Button>
            <Button
              variant="ghost"
              onClick={() => {
                setShowReject(false)
                setRejectReason('')
              }}
            >
              Cancel
            </Button>
          </div>
        </div>
      ) : (
        <div className="flex gap-3">
          <Button onClick={handleApprove} isLoading={isLoading}>
            Approve Payment
          </Button>
          <Button variant="danger" onClick={() => setShowReject(true)}>
            Reject Payment
          </Button>
        </div>
      )}
    </div>
  )
}