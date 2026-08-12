'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function CriteriaActiveToggle({ id, isActive }: { id: string; isActive: boolean }) {
  const router = useRouter()
  const [saving, setSaving] = useState(false)

  const handleToggle = async () => {
    setSaving(true)
    try {
      await fetch('/api/portal/criteria', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, isActive: !isActive }),
      })
      router.refresh()
    } finally {
      setSaving(false)
    }
  }

  return (
    <button
      onClick={handleToggle}
      disabled={saving}
      className={`text-[10px] uppercase tracking-[0.15em] px-3 py-1.5 border transition-colors disabled:opacity-50 ${
        isActive
          ? 'border-green-600/30 text-green-700 bg-green-50 hover:bg-green-100'
          : 'border-[#1B4332]/20 text-[#1B4332]/50 hover:border-[#1B4332]/40'
      }`}
    >
      {isActive ? 'Active' : 'Paused'}
    </button>
  )
}
