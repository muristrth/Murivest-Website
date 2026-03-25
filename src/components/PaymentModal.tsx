'use client'

import { useState } from 'react'
import { 
  X, 
  Copy, 
  Check, 
  Loader2, 
  CreditCard,
  AlertCircle,
  CheckCircle2
} from 'lucide-react'

const PAYBILL = '303030'
const ACCOUNT = '2048650433'
const AMOUNT = 'KES 2,000'

interface PaymentModalProps {
  isOpen: boolean
  onClose: () => void
  orderId: string
  orderAmount: number
  onSuccess?: () => void
}

export default function PaymentModal({ 
  isOpen, 
  onClose, 
  orderId, 
  orderAmount,
  onSuccess 
}: PaymentModalProps) {
  const [step, setStep] = useState<'payment' | 'confirm' | 'success'>('payment')
  const [mpesaMsg, setMpesaMsg] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [copied, setCopied] = useState<string | null>(null)

  if (!isOpen) return null

  const copyToClipboard = async (text: string, key: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(key)
      setTimeout(() => setCopied(null), 2000)
    } catch { /* silent */ }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!mpesaMsg.trim()) return

    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/investor-order-payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ orderId, mpesaMessage: mpesaMsg }),
      })

      const json = await res.json()

      if (!res.ok) {
        setError(json.error || 'Payment submission failed.')
        setLoading(false)
        return
      }

      setStep('success')
      setLoading(false)
      
      // Call onSuccess callback if provided
      if (onSuccess) {
        onSuccess()
      }
    } catch {
      setError('Failed to submit payment. Please try again.')
      setLoading(false)
    }
  }

  const handleClose = () => {
    setStep('payment')
    setMpesaMsg('')
    setError('')
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-white w-full max-w-lg mx-4 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-[#E5E2DC]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#B8956B]/10 flex items-center justify-center">
              <CreditCard className="h-5 w-5 text-[#B8956B]" />
            </div>
            <div>
              <h3 className="font-serif text-lg text-[#1B4332]">Complete Payment</h3>
              <p className="text-xs text-[#1B4332]/60">Order #{orderId.substring(0, 8)}</p>
            </div>
          </div>
          <button 
            onClick={handleClose}
            className="p-2 hover:bg-[#F8F7F4] transition-colors"
          >
            <X className="h-5 w-5 text-[#1B4332]/50" />
          </button>
        </div>

        {/* Content */}
        {step === 'payment' && (
          <div className="p-4 space-y-4">
            {/* Payment Instructions */}
            <div className="p-4 bg-[#1B4332] text-white">
              <h4 className="font-serif text-base mb-3">M-Pesa Payment</h4>
              <div className="space-y-2 text-xs">
                {[
                  { label: 'Paybill', value: PAYBILL, key: 'paybill' },
                  { label: 'Account', value: ACCOUNT, key: 'account' },
                  { label: 'Amount', value: AMOUNT, key: 'amount' },
                ].map(d => (
                  <div key={d.key} className="flex items-center justify-between py-1.5 border-b border-white/20">
                    <span className="text-white/70">{d.label}</span>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{d.value}</span>
                      <button 
                        onClick={() => copyToClipboard(d.value, d.key)}
                        className="p-1 hover:bg-white/10"
                      >
                        {copied === d.key ? (
                          <Check className="h-3 w-3" />
                        ) : (
                          <Copy className="h-3 w-3" />
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-3 pt-3 border-t border-white/20 text-white/60 text-xs">
                <strong>Steps:</strong><br/>
                1. M-Pesa → Lipa na M-Pesa → Paybill<br/>
                2. Business No: {PAYBILL} | Account: {ACCOUNT}<br/>
                3. Enter KES 2,000 → Confirm with PIN
              </div>
            </div>

            {/* Confirmation Form */}
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#1B4332]/70 mb-2">
                  Payment Confirmation *
                </label>
                <textarea
                  value={mpesaMsg}
                  onChange={e => { setMpesaMsg(e.target.value); setError(''); }}
                  placeholder="Paste your M-Pesa confirmation SMS here..."
                  rows={3}
                  className="w-full px-3 py-2 border border-[#E5E2DC] text-sm focus:border-[#B8956B] focus:outline-none resize-none"
                  required
                />
                <p className="text-[10px] text-[#1B4332]/50 mt-1">
                  Example: SGH7K9L2MN Confirmed. KES2,000.00 paid to Absa Bank...
                </p>
              </div>

              {error && (
                <div className="p-3 bg-red-50 border-l-2 border-red-500 text-xs text-red-600 flex items-center gap-2">
                  <AlertCircle className="h-4 w-4 flex-shrink-0" />
                  {error}
                </div>
              )}

              <button 
                type="submit"
                disabled={!mpesaMsg.trim() || loading}
                className="w-full bg-[#B8956B] text-white px-4 py-3 text-xs uppercase tracking-[0.15em] hover:bg-[#9A7B5A] transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  'Submit Payment Confirmation'
                )}
              </button>
            </form>
          </div>
        )}

        {/* Success Step */}
        {step === 'success' && (
          <div className="p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-green-100 flex items-center justify-center">
              <CheckCircle2 className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="font-serif text-xl text-[#1B4332] mb-2">Payment Submitted!</h3>
            <p className="text-sm text-[#1B4332]/70 mb-4">
              Your payment confirmation has been submitted and is awaiting verification. 
              You will receive a notification once approved.
            </p>
            <p className="text-xs text-[#1B4332]/50 mb-6">
              Order #{orderId.substring(0, 8)} • KES {orderAmount.toLocaleString()}
            </p>
            <button 
              onClick={handleClose}
              className="bg-[#1B4332] text-white px-6 py-3 text-xs uppercase tracking-[0.15em] hover:bg-[#2D5A47] transition-colors"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
