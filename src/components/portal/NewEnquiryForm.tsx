'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function NewEnquiryForm() {
  const router = useRouter()
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError(null)
    try {
      const res = await fetch('/api/portal/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ subject, message }),
      })
      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Failed to send enquiry')
      }
      setSubject('')
      setMessage('')
      setSuccess(true)
      router.refresh()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send enquiry')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-[10px] uppercase tracking-[0.15em] text-[#1B4332]/50 mb-2">Subject</label>
        <input
          type="text"
          value={subject}
          onChange={(e) => { setSubject(e.target.value); setSuccess(false) }}
          required
          className="w-full border border-[#1B4332]/20 px-3 py-2 text-sm text-[#1B4332]"
          placeholder="e.g. Follow-up on Nairobi off-market deal"
        />
      </div>
      <div>
        <label className="block text-[10px] uppercase tracking-[0.15em] text-[#1B4332]/50 mb-2">Message</label>
        <textarea
          value={message}
          onChange={(e) => { setMessage(e.target.value); setSuccess(false) }}
          required
          rows={4}
          className="w-full border border-[#1B4332]/20 px-3 py-2 text-sm text-[#1B4332]"
          placeholder="Describe your question or request..."
        />
      </div>
      {error && <p className="text-xs text-red-600">{error}</p>}
      {success && <p className="text-xs text-green-700">Your enquiry has been sent to your advisor.</p>}
      <button
        type="submit"
        disabled={submitting}
        className="bg-[#1B4332] text-white px-8 py-3 text-xs uppercase tracking-[0.15em] hover:bg-[#2D5A47] transition-colors disabled:opacity-40"
      >
        {submitting ? 'Sending...' : 'Send Enquiry'}
      </button>
    </form>
  )
}
