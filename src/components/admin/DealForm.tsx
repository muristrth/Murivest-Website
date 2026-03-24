'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { Select } from '@/components/ui/Select'
import { Alert } from '@/components/ui/Alert'

interface DealFormProps {
  initialData?: {
    id?: string
    title: string
    property_type: string
    location: string
    asking_price: number
    expected_yield: number
    description: string
    highlights: string
    documents: string
    status: string
    is_exclusive: boolean
  }
  onSubmit: (data: FormData) => Promise<void>
  loading?: boolean
}

interface FormData {
  title: string
  property_type: string
  location: string
  asking_price: number
  expected_yield: number
  description: string
  highlights: string
  documents: string
  status: string
  is_exclusive: boolean
}

export function DealForm({ initialData, onSubmit, loading }: DealFormProps) {
  const [formData, setFormData] = useState<FormData>({
    title: initialData?.title || '',
    property_type: initialData?.property_type || 'office',
    location: initialData?.location || '',
    asking_price: initialData?.asking_price || 0,
    expected_yield: initialData?.expected_yield || 0,
    description: initialData?.description || '',
    highlights: initialData?.highlights || '',
    documents: initialData?.documents || '',
    status: initialData?.status || 'available',
    is_exclusive: initialData?.is_exclusive ?? false
  })
  const [isLoading, setIsLoading] = useState(false)
  // Use external loading prop if provided, otherwise use internal state
  const isSubmitting = loading !== undefined ? loading : isLoading
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
    { value: 'available', label: 'Available' },
    { value: 'under-review', label: 'Under Review' },
    { value: 'reserved', label: 'Reserved' },
    { value: 'sold', label: 'Sold' },
    { value: 'withdrawn', label: 'Withdrawn' }
  ]

  const handleChange = (field: keyof FormData, value: string | number | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setSuccess(null)
    
    if (loading === undefined) {
      setIsLoading(true)
    }

    try {
      await onSubmit(formData)
      setSuccess(initialData ? 'Deal updated successfully' : 'Deal created successfully')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save deal')
    } finally {
      if (loading === undefined) {
        setIsLoading(false)
      }
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && <Alert variant="error">{error}</Alert>}
      {success && <Alert variant="success">{success}</Alert>}

      <Input
        label="Deal Title"
        value={formData.title}
        onChange={(e) => handleChange('title', e.target.value)}
        placeholder="Property or deal name"
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
          label="Asking Price (KES)"
          type="number"
          value={formData.asking_price}
          onChange={(e) => handleChange('asking_price', parseInt(e.target.value) || 0)}
          placeholder="500000000"
        />

        <Input
          label="Expected Yield (%)"
          type="number"
          step="0.1"
          value={formData.expected_yield}
          onChange={(e) => handleChange('expected_yield', parseFloat(e.target.value) || 0)}
          placeholder="8.5"
        />
      </div>

      <Textarea
        label="Description"
        value={formData.description}
        onChange={(e) => handleChange('description', e.target.value)}
        placeholder="Detailed property description"
        rows={4}
        required
      />

      <Textarea
        label="Investment Highlights"
        value={formData.highlights}
        onChange={(e) => handleChange('highlights', e.target.value)}
        placeholder="Key investment highlights (one per line)"
        rows={3}
      />

      <Textarea
        label="Document URLs"
        value={formData.documents}
        onChange={(e) => handleChange('documents', e.target.value)}
        placeholder="Document URLs (one per line)"
        rows={2}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Select
          label="Status"
          value={formData.status}
          onChange={(e) => handleChange('status', e.target.value)}
          options={statusOptions}
        />

        <div className="flex items-center gap-3 pt-6">
          <input
            type="checkbox"
            id="is_exclusive"
            checked={formData.is_exclusive}
            onChange={(e) => handleChange('is_exclusive', e.target.checked)}
            className="h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
          />
          <label htmlFor="is_exclusive" className="text-sm font-medium text-slate-700">
            Exclusive Deal
          </label>
        </div>
      </div>

      <div className="flex justify-end gap-3">
        <Button type="submit" isLoading={isSubmitting}>
          {initialData ? 'Update Deal' : 'Create Deal'}
        </Button>
      </div>
    </form>
  )
}