'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { Select } from '@/components/ui/Select'
import { Alert } from '@/components/ui/Alert'

interface PublicationFormProps {
  initialData?: {
    id?: string
    title: string
    slug: string
    summary: string
    content: string
    category: string
    image_url?: string
    is_published: boolean
  }
  onSubmit: (data: FormData) => Promise<void>
}

interface FormData {
  title: string
  slug: string
  summary: string
  content: string
  category: string
  image_url?: string
  is_published: boolean
}

export function PublicationForm({ initialData, onSubmit }: PublicationFormProps) {
  const [formData, setFormData] = useState<FormData>({
    title: initialData?.title || '',
    slug: initialData?.slug || '',
    summary: initialData?.summary || '',
    content: initialData?.content || '',
    category: initialData?.category || 'market-insight',
    image_url: initialData?.image_url || '',
    is_published: initialData?.is_published ?? false
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  const categoryOptions = [
    { value: 'market-insight', label: 'Market Insight' },
    { value: 'research', label: 'Research' },
    { value: 'case-study', label: 'Case Study' },
    { value: 'news', label: 'News' }
  ]

  const handleChange = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => {
      const newData = { ...prev, [field]: value }
      
      // Auto-generate slug from title if slug is empty
      if (field === 'title' && !initialData?.slug) {
        newData.slug = value
          .toString()
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/(^-|-$)/g, '')
      }
      
      return newData
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setSuccess(null)
    setIsLoading(true)

    try {
      await onSubmit(formData)
      setSuccess(initialData ? 'Publication updated successfully' : 'Publication created successfully')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save publication')
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
        placeholder="Enter publication title"
        required
      />

      <Input
        label="Slug"
        value={formData.slug}
        onChange={(e) => handleChange('slug', e.target.value)}
        placeholder="auto-generated-from-title"
      />

      <Textarea
        label="Summary"
        value={formData.summary}
        onChange={(e) => handleChange('summary', e.target.value)}
        placeholder="Brief summary of the publication"
        rows={3}
        required
      />

      <Textarea
        label="Content"
        value={formData.content}
        onChange={(e) => handleChange('content', e.target.value)}
        placeholder="Full publication content (supports markdown)"
        rows={10}
        required
      />

      <Select
        label="Category"
        value={formData.category}
        onChange={(e) => handleChange('category', e.target.value)}
        options={categoryOptions}
      />

      <Input
        label="Image URL"
        value={formData.image_url || ''}
        onChange={(e) => handleChange('image_url', e.target.value)}
        placeholder="https://example.com/image.webp"
      />

      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          id="is_published"
          checked={formData.is_published}
          onChange={(e) => handleChange('is_published', e.target.checked)}
          className="h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
        />
        <label htmlFor="is_published" className="text-sm font-medium text-slate-700">
          Publish immediately
        </label>
      </div>

      <div className="flex justify-end gap-3">
        <Button type="submit" isLoading={isLoading}>
          {initialData ? 'Update Publication' : 'Create Publication'}
        </Button>
      </div>
    </form>
  )
}