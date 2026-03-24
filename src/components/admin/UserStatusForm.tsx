'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Select } from '@/components/ui/Select'
import { Input } from '@/components/ui/Input'
import { Alert } from '@/components/ui/Alert'

interface UserStatusFormProps {
  userId: string
  currentStatus: string
  onSubmit: (status: string, reason?: string) => Promise<void>
}

export function UserStatusForm({ userId, currentStatus, onSubmit }: UserStatusFormProps) {
  const [status, setStatus] = useState(currentStatus)
  const [reason, setReason] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  const statusOptions = [
    { value: 'registered', label: 'Registered' },
    { value: 'verified', label: 'Verified' },
    { value: 'premium', label: 'Premium' },
    { value: 'suspended', label: 'Suspended' }
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setSuccess(null)
    setIsLoading(true)

    try {
      await onSubmit(status, reason)
      setSuccess('User status updated successfully')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update status')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && <Alert variant="error">{error}</Alert>}
      {success && <Alert variant="success">{success}</Alert>}

      <Select
        label="Investor Status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        options={statusOptions}
      />

      {status === 'suspended' && (
        <Input
          label="Suspension Reason"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          placeholder="Enter reason for suspension"
        />
      )}

      <div className="flex justify-end gap-3">
        <Button type="submit" isLoading={isLoading}>
          Update Status
        </Button>
      </div>
    </form>
  )
}