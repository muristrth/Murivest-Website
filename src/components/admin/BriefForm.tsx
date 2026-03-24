'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { Select } from '@/components/ui/Select'
import { Alert } from '@/components/ui/Alert'

interface BriefFormProps {
  initialData?: {
    id?: string
    title: string
    property_type: string
    location: string
    budget_min: number
    budget_max: number
    description: string
    features: string
    status: string
  }
  onSubmit: (data: FormData) => Promise<void>
}

interface FormData {
  title: string
  property_type: string
  location: string
  budget_min: number
  budget_max: number
  description: string
  features: string
  status: string
}

export function BriefForm({ initialData, onSubmit }: BriefFormProps) {
  const [formData, setFormData] = useState<FormData>({
    title: initialData?.title || '',
    property_type: initialData?.property_type || 'office',
    location: initialData?.location || '',
    budget_min: initialData?.budget_min || 0,
    budget_max: initialData?.budget_max || 0,
    description: initialData?.description || '',
    features: initialData?.features || '',
    status: initialData?.status || 'active'
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  const propertyTypeOptions = [
    { value: 'office', label: 'Office' },
    { value: 'retail', label: 'Retail' },
    { value: 'industrial', label: 'Industrial' },
    { value: 'hospitality', label: 'Hospitality' },
    { value: 'mixed-use', label: 'Mixed Use' },
    { value: 'residential', label: 'Residential' }
  ]

  const statusOptions = [
    { value: 'active', label: 'Active' },
    { value: 'pending', label: 'Pending Review' },
    { value: 'matched', label: 'Matched' },
    { value: 'closed', label: 'Closed' }
  ]

  const handleChange = (field: keyof FormData, value: string | number) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setSuccess(null)
    setIsLoading(true)

    try {
      await onSubmit(formData)
      setSuccess(initialData ? 'Asset brief updated successfully' : 'Asset brief created successfully')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save asset brief')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && <Alert variant="error">{error}</Alert>}
      {success && <Alert variant="success">{success}</Alert>}

      <Input
        label="Title"
        value={formData.title}
        onChange={(e) => handleChange('title', e.target.value)}
        placeholder="Brief title"
        required
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Select
          label="Property Type"
          value={formData.property_type}
          onChange={(e) => handleChange('property_type', e.target.value)}
          options={propertyTypeOptions}
        />

        <Input
          label="Location"
          value={formData.location}
          onChange={(e) => handleChange('location', e.target.value)}
          placeholder="City or Region"
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          label="Minimum Budget (KES)"
          type="number"
          value={formData.budget_min}
          onChange={(e) => handleChange('budget_min', parseInt(e.target.value) || 0)}
          placeholder="50000000"
        />

        <Input
          label="Maximum Budget (KES)"
          type="number"
          value={formData.budget_max}
          onChange={(e) => handleChange('budget_max', parseInt(e.target.value) || 0)}
          placeholder="200000000"
        />
      </div>

      <Textarea
        label="Description"
        value={formData.description}
        onChange={(e) => handleChange('description', e.target.value)}
        placeholder="Detailed description of requirements"
        rows={4}
        required
      />

      <Textarea
        label="Key Features Required"
        value={formData.features}
        onChange={(e) => handleChange('features', e.target.value)}
        placeholder="List key features (one per line)"
        rows={3}
      />

      <Select
        label="Status"
        value={formData.status}
        onChange={(e) => handleChange('status', e.target.value)}
        options={statusOptions}
      />

      <div className="flex justify-end gap-3">
        <Button type="submit" isLoading={isLoading}>
          {initialData ? 'Update Brief' : 'Create Brief'}
        </Button>
      </div>
    </form>
  )
}