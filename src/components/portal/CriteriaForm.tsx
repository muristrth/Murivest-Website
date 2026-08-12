'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

const MARKETS = ['kenya', 'united-arab-emirates', 'united-kingdom', 'singapore']
const ASSET_TYPES = ['residential', 'commercial', 'industrial', 'hospitality', 'land', 'mixed-use']

export default function CriteriaForm() {
  const router = useRouter()
  const [markets, setMarkets] = useState<string[]>([])
  const [assetTypes, setAssetTypes] = useState<string[]>([])
  const [minYield, setMinYield] = useState('')
  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')
  const [notes, setNotes] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const toggle = (list: string[], setList: (v: string[]) => void, value: string) => {
    setList(list.includes(value) ? list.filter((v) => v !== value) : [...list, value])
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError(null)
    try {
      const res = await fetch('/api/portal/criteria', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          markets,
          assetTypes,
          minYield: minYield ? Number(minYield) : null,
          minPrice: minPrice ? Number(minPrice) : null,
          maxPrice: maxPrice ? Number(maxPrice) : null,
          notes,
        }),
      })
      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Failed to save criteria')
      }
      setMarkets([])
      setAssetTypes([])
      setMinYield('')
      setMinPrice('')
      setMaxPrice('')
      setNotes('')
      router.refresh()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save criteria')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <p className="text-[10px] uppercase tracking-[0.15em] text-[#1B4332]/50 mb-2">Target Markets</p>
        <div className="flex flex-wrap gap-2">
          {MARKETS.map((m) => (
            <button
              type="button"
              key={m}
              onClick={() => toggle(markets, setMarkets, m)}
              className={`px-3 py-1.5 text-xs uppercase tracking-wider border transition-colors ${
                markets.includes(m)
                  ? 'bg-[#1B4332] text-white border-[#1B4332]'
                  : 'border-[#1B4332]/20 text-[#1B4332]/70 hover:border-[#1B4332]/40'
              }`}
            >
              {m.replace(/-/g, ' ')}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="text-[10px] uppercase tracking-[0.15em] text-[#1B4332]/50 mb-2">Asset Types</p>
        <div className="flex flex-wrap gap-2">
          {ASSET_TYPES.map((a) => (
            <button
              type="button"
              key={a}
              onClick={() => toggle(assetTypes, setAssetTypes, a)}
              className={`px-3 py-1.5 text-xs uppercase tracking-wider border transition-colors ${
                assetTypes.includes(a)
                  ? 'bg-[#B8956B] text-[#1B4332] border-[#B8956B]'
                  : 'border-[#1B4332]/20 text-[#1B4332]/70 hover:border-[#1B4332]/40'
              }`}
            >
              {a.replace(/-/g, ' ')}
            </button>
          ))}
        </div>
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-[10px] uppercase tracking-[0.15em] text-[#1B4332]/50 mb-2">Min Yield (%)</label>
          <input
            type="number"
            value={minYield}
            onChange={(e) => setMinYield(e.target.value)}
            className="w-full border border-[#1B4332]/20 px-3 py-2 text-sm text-[#1B4332]"
          />
        </div>
        <div>
          <label className="block text-[10px] uppercase tracking-[0.15em] text-[#1B4332]/50 mb-2">Min Price (USD)</label>
          <input
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="w-full border border-[#1B4332]/20 px-3 py-2 text-sm text-[#1B4332]"
          />
        </div>
        <div>
          <label className="block text-[10px] uppercase tracking-[0.15em] text-[#1B4332]/50 mb-2">Max Price (USD)</label>
          <input
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="w-full border border-[#1B4332]/20 px-3 py-2 text-sm text-[#1B4332]"
          />
        </div>
      </div>

      <div>
        <label className="block text-[10px] uppercase tracking-[0.15em] text-[#1B4332]/50 mb-2">Additional Notes</label>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={3}
          className="w-full border border-[#1B4332]/20 px-3 py-2 text-sm text-[#1B4332]"
          placeholder="Any specific requirements for your advisor to consider..."
        />
      </div>

      {error && <p className="text-xs text-red-600">{error}</p>}

      <button
        type="submit"
        disabled={submitting || !markets.length || !assetTypes.length}
        className="bg-[#1B4332] text-white px-8 py-3 text-xs uppercase tracking-[0.15em] hover:bg-[#2D5A47] transition-colors disabled:opacity-40"
      >
        {submitting ? 'Saving...' : 'Save Criteria'}
      </button>
    </form>
  )
}
