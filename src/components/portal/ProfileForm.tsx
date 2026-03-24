'use client'

import { useState } from 'react'
import { Profile } from '@/lib/types/database'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { cn } from '@/lib/utils/cn'
import { Save, Loader2, User, Building, Phone, Wallet } from 'lucide-react'

interface ProfileFormProps {
  profile: Profile
  onSuccess?: () => void
}

const aumRanges = [
  'Under $1M',
  '$1M - $5M',
  '$5M - $10M',
  '$10M - $25M',
  '$25M - $50M',
  '$50M - $100M',
  '$100M - $250M',
  '$250M+',
]

const investmentFocusAreas = [
  'Direct Real Estate',
  'REITs',
  'Real Estate Funds',
  'Commercial Properties',
  'Residential Properties',
  'Mixed-Use Development',
  'Hospitality',
  'Industrial/Logistics',
  'Land Banking',
  'Development Projects',
]

export function ProfileForm({ profile, onSuccess }: ProfileFormProps) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const [formData, setFormData] = useState({
    full_name: profile.full_name || '',
    title: profile.title || '',
    organisation: profile.organisation || '',
    phone: profile.phone || '',
    aum: profile.aum || '',
    investment_focus: profile.investment_focus || '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setSuccess(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setSuccess(false)

    try {
      const response = await fetch('/api/users', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: profile.id,
          ...formData,
        }),
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || 'Failed to update profile')
      }

      setSuccess(true)
      onSuccess?.()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Success message */}
      {success && (
        <div className="bg-green-50 border border-green-200 p-4 rounded-lg text-green-700 text-sm">
          Profile updated successfully!
        </div>
      )}

      {/* Error message */}
      {error && (
        <div className="bg-red-50 border border-red-200 p-4 rounded-lg text-red-700 text-sm">
          {error}
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        {/* Full Name */}
        <div className="md:col-span-2">
          <label htmlFor="full_name" className="block text-sm font-medium text-[#1B4332] mb-2">
            Full Name *
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#1B4332]/40" />
            <Input
              id="full_name"
              name="full_name"
              type="text"
              value={formData.full_name}
              onChange={handleChange}
              required
              className="pl-10"
              placeholder="Enter your full name"
            />
          </div>
        </div>

        {/* Title */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-[#1B4332] mb-2">
            Title
          </label>
          <Input
            id="title"
            name="title"
            type="text"
            value={formData.title}
            onChange={handleChange}
            placeholder="e.g., CEO, Managing Partner, Family Office Director"
          />
        </div>

        {/* Organisation */}
        <div>
          <label htmlFor="organisation" className="block text-sm font-medium text-[#1B4332] mb-2">
            Organisation
          </label>
          <div className="relative">
            <Building className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#1B4332]/40" />
            <Input
              id="organisation"
              name="organisation"
              type="text"
              value={formData.organisation}
              onChange={handleChange}
              className="pl-10"
              placeholder="Company or family office name"
            />
          </div>
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-[#1B4332] mb-2">
            Phone Number
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#1B4332]/40" />
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className="pl-10"
              placeholder="+254 700 000 000"
            />
          </div>
        </div>

        {/* AUM Range */}
        <div>
          <label htmlFor="aum" className="block text-sm font-medium text-[#1B4332] mb-2">
            Assets Under Management
          </label>
          <div className="relative">
            <Wallet className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#1B4332]/40" />
            <select
              id="aum"
              name="aum"
              value={formData.aum}
              onChange={handleChange}
              className={cn(
                "w-full pl-10 pr-4 py-2.5 border border-[#1B4332]/20 rounded-lg",
                "bg-white text-[#1B4332] focus:outline-none focus:ring-2 focus:ring-[#B8956B]/50",
                "focus:border-[#B8956B] transition-all"
              )}
            >
              <option value="">Select AUM range</option>
              {aumRanges.map((range) => (
                <option key={range} value={range}>
                  {range}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Investment Focus */}
        <div className="md:col-span-2">
          <label htmlFor="investment_focus" className="block text-sm font-medium text-[#1B4332] mb-2">
            Investment Focus Areas
          </label>
          <select
            id="investment_focus"
            name="investment_focus"
            value={formData.investment_focus}
            onChange={handleChange}
            className={cn(
              "w-full px-4 py-2.5 border border-[#1B4332]/20 rounded-lg",
              "bg-white text-[#1B4332] focus:outline-none focus:ring-2 focus:ring-[#B8956B]/50",
              "focus:border-[#B8956B] transition-all"
            )}
          >
            <option value="">Select primary focus</option>
            {investmentFocusAreas.map((area) => (
              <option key={area} value={area}>
                {area}
              </option>
            ))}
          </select>
          <p className="text-xs text-[#1B4332]/60 mt-1">
            Select the primary area of real estate investment focus
          </p>
        </div>
      </div>

      {/* Submit Button */}
      <div className="pt-4 border-t border-[#1B4332]/10">
        <Button
          type="submit"
          disabled={loading}
          className="flex items-center gap-2"
        >
          {loading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Saving...
            </>
          ) : (
            <>
              <Save className="h-4 w-4" />
              Save Changes
            </>
          )}
        </Button>
      </div>
    </form>
  )
}

interface InvestorStatusFormProps {
  currentStatus: string
  verifiedAt?: string
}

export function InvestorStatusDisplay({ currentStatus, verifiedAt }: InvestorStatusFormProps) {
  const statusLabels: Record<string, { label: string; color: string; bg: string }> = {
    registered: { label: 'Registered', color: 'text-gray-600', bg: 'bg-gray-50' },
    verified: { label: 'Verified Investor', color: 'text-blue-600', bg: 'bg-blue-50' },
    premium: { label: 'Premium Member', color: 'text-amber-600', bg: 'bg-amber-50' },
    admin: { label: 'Administrator', color: 'text-[#1B4332]', bg: 'bg-[#1B4332]/10' },
  }

  const config = statusLabels[currentStatus] || statusLabels.registered

  return (
    <div className={cn("p-4 rounded-lg border", config.bg, "border-current/20")}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-wider text-[#1B4332]/60 mb-1">Investor Status</p>
          <p className={cn("font-medium", config.color)}>{config.label}</p>
        </div>
        {verifiedAt && (
          <div className="text-right">
            <p className="text-xs text-[#1B4332]/60">Verified</p>
            <p className="text-sm text-[#1B4332]">{new Date(verifiedAt).toLocaleDateString()}</p>
          </div>
        )}
      </div>
    </div>
  )
}