'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

const ROLES = [
  { value: 'investor', label: 'Investor' },
  { value: 'advisor', label: 'Advisor' },
  { value: 'admin', label: 'Admin' },
  { value: 'super_admin', label: 'Super Admin' },
] as const

export default function RoleSelect({
  userId,
  currentRole,
}: {
  userId: string
  currentRole: string
}) {
  const router = useRouter()
  const [role, setRole] = useState(currentRole || 'investor')
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = async (newRole: string) => {
    setRole(newRole)
    setSaving(true)
    setError(null)
    try {
      const res = await fetch(`/api/admin/users/${userId}/role`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ role: newRole }),
      })
      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Failed to update role')
      }
      router.refresh()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update role')
      setRole(currentRole)
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="space-y-2">
      <select
        value={role}
        disabled={saving}
        onChange={(e) => handleChange(e.target.value)}
        className="w-full border border-[#1B4332]/20 bg-white px-3 py-2 text-sm text-[#1B4332] disabled:opacity-50"
      >
        {ROLES.map((r) => (
          <option key={r.value} value={r.value}>
            {r.label}
          </option>
        ))}
      </select>
      {error && <p className="text-xs text-red-600">{error}</p>}
      <p className="text-[11px] text-[#1B4332]/50">
        Changing to Admin or Super Admin also grants dashboard access.
      </p>
    </div>
  )
}
