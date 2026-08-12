'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface Person {
  id: string
  full_name: string | null
  email: string
}

export default function NewMandateForm({ investors, advisors }: { investors: Person[]; advisors: Person[] }) {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    const formData = new FormData(e.currentTarget)
    const payload = {
      title: formData.get('title'),
      investorId: formData.get('investorId'),
      advisorId: formData.get('advisorId') || null,
      market: formData.get('market'),
      status: formData.get('status'),
      targetAssetTypes: String(formData.get('targetAssetTypes') || '')
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean),
      minTicketSize: formData.get('minTicketSize') ? Number(formData.get('minTicketSize')) : null,
      maxTicketSize: formData.get('maxTicketSize') ? Number(formData.get('maxTicketSize')) : null,
      notes: formData.get('notes'),
    }

    try {
      const res = await fetch('/api/admin/mandates', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || 'Failed to create mandate.')
      }

      router.push('/admin/mandates')
      router.refresh()
    } catch (err: any) {
      setError(err.message || 'Something went wrong.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputClasses =
    'w-full border border-[#1B4332]/20 px-3 py-2.5 text-sm bg-white text-[#1B4332] focus:border-[#B8956B] focus:outline-none'
  const labelClasses = 'block text-[10px] uppercase tracking-[0.15em] text-[#1B4332]/50 mb-2'

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-[#1B4332]/10 p-8 max-w-3xl space-y-6">
      {error && <div className="bg-red-50 text-red-700 p-4 text-sm border border-red-200">{error}</div>}

      <div>
        <label className={labelClasses} htmlFor="title">Title *</label>
        <input id="title" name="title" required className={inputClasses} placeholder="e.g. Nairobi office acquisition mandate" />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className={labelClasses} htmlFor="investorId">Investor *</label>
          <select id="investorId" name="investorId" required className={inputClasses}>
            <option value="">Select investor</option>
            {investors.map((investor) => (
              <option key={investor.id} value={investor.id}>
                {investor.full_name || investor.email}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClasses} htmlFor="advisorId">Advisor</label>
          <select id="advisorId" name="advisorId" className={inputClasses}>
            <option value="">Unassigned</option>
            {advisors.map((advisor) => (
              <option key={advisor.id} value={advisor.id}>
                {advisor.full_name || advisor.email}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div>
          <label className={labelClasses} htmlFor="market">Market</label>
          <select id="market" name="market" className={inputClasses} defaultValue="kenya">
            <option value="kenya">Kenya</option>
            <option value="united-arab-emirates">United Arab Emirates</option>
            <option value="united-kingdom">United Kingdom</option>
            <option value="singapore">Singapore</option>
          </select>
        </div>
        <div>
          <label className={labelClasses} htmlFor="status">Status</label>
          <select id="status" name="status" className={inputClasses} defaultValue="draft">
            <option value="draft">Draft</option>
            <option value="active">Active</option>
            <option value="paused">Paused</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>
        <div>
          <label className={labelClasses} htmlFor="targetAssetTypes">Target Asset Types</label>
          <input id="targetAssetTypes" name="targetAssetTypes" className={inputClasses} placeholder="office, retail" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className={labelClasses} htmlFor="minTicketSize">Min Ticket Size</label>
          <input id="minTicketSize" name="minTicketSize" type="number" className={inputClasses} />
        </div>
        <div>
          <label className={labelClasses} htmlFor="maxTicketSize">Max Ticket Size</label>
          <input id="maxTicketSize" name="maxTicketSize" type="number" className={inputClasses} />
        </div>
      </div>

      <div>
        <label className={labelClasses} htmlFor="notes">Notes</label>
        <textarea id="notes" name="notes" rows={4} className={inputClasses} />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center gap-2 bg-[#1B4332] text-white px-6 py-3 text-xs uppercase tracking-[0.15em] hover:bg-[#2D5A47] transition-colors disabled:opacity-60"
      >
        {isSubmitting ? 'Creating…' : 'Create Mandate'}
      </button>
    </form>
  )
}
