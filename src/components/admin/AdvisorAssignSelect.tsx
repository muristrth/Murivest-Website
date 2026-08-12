'use client'

import { useState, useTransition } from 'react'

interface Advisor {
  id: string
  full_name: string | null
  email: string
}

export default function AdvisorAssignSelect({
  investorId,
  currentAdvisorId,
  advisors,
}: {
  investorId: string
  currentAdvisorId: string | null
  advisors: Advisor[]
}) {
  const [value, setValue] = useState(currentAdvisorId || '')
  const [isPending, startTransition] = useTransition()
  const [status, setStatus] = useState<'idle' | 'saved' | 'error'>('idle')

  function handleChange(next: string) {
    setValue(next)
    setStatus('idle')
    startTransition(async () => {
      const res = await fetch(`/api/admin/investors/${investorId}/assign-advisor`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ advisorId: next || null }),
      })
      setStatus(res.ok ? 'saved' : 'error')
    })
  }

  return (
    <div>
      <label className="block text-[10px] uppercase tracking-[0.15em] text-[#1B4332]/50 mb-2">
        Assigned Advisor
      </label>
      <select
        value={value}
        disabled={isPending}
        onChange={(e) => handleChange(e.target.value)}
        className="w-full border border-[#1B4332]/20 px-3 py-2 text-sm bg-white text-[#1B4332] focus:border-[#B8956B] focus:outline-none"
      >
        <option value="">Unassigned</option>
        {advisors.map((advisor) => (
          <option key={advisor.id} value={advisor.id}>
            {advisor.full_name || advisor.email}
          </option>
        ))}
      </select>
      {status === 'saved' && <p className="text-xs text-green-600 mt-1">Saved.</p>}
      {status === 'error' && <p className="text-xs text-red-600 mt-1">Could not save. Try again.</p>}
    </div>
  )
}
