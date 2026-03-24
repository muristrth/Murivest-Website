'use client'

import { InvestorStatus } from '@/lib/types/database'
import { Shield, Star, Crown, UserCheck } from 'lucide-react'

interface AccessBadgeProps {
  status: InvestorStatus
  showLabel?: boolean
  size?: 'sm' | 'md' | 'lg'
}

const statusConfig = {
  registered: {
    label: 'Registered',
    color: 'bg-gray-100 text-gray-600 border-gray-300',
    icon: UserCheck,
  },
  verified: {
    label: 'Verified',
    color: 'bg-blue-50 text-blue-600 border-blue-300',
    icon: Shield,
  },
  premium: {
    label: 'Premium',
    color: 'bg-amber-50 text-amber-600 border-amber-300',
    icon: Star,
  },
  admin: {
    label: 'Admin',
    color: 'bg-[#1B4332]/10 text-[#1B4332] border-[#1B4332]/30',
    icon: Crown,
  },
}

const sizeClasses = {
  sm: 'px-2 py-0.5 text-[10px]',
  md: 'px-3 py-1 text-xs',
  lg: 'px-4 py-1.5 text-sm',
}

export function AccessBadge({ status, showLabel = true, size = 'md' }: AccessBadgeProps) {
  const config = statusConfig[status] || statusConfig.registered
  const Icon = config.icon

  return (
    <span
      className={`inline-flex items-center gap-1.5 border rounded-full font-medium ${config.color} ${sizeClasses[size]}`}
    >
      <Icon className="h-3 w-3" />
      {showLabel && <span>{config.label}</span>}
    </span>
  )
}

interface AccessLevelBadgeProps {
  accessLevel: 'registered' | 'verified' | 'premium'
}

export function AccessLevelBadge({ accessLevel }: AccessLevelBadgeProps) {
  const labels = {
    registered: 'Registered Access',
    verified: 'Verified Access',
    premium: 'Premium Access',
  }

  const colors = {
    registered: 'bg-gray-100 text-gray-600',
    verified: 'bg-blue-50 text-blue-600',
    premium: 'bg-amber-50 text-amber-600',
  }

  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded text-[10px] uppercase tracking-wider font-medium ${colors[accessLevel]}`}>
      {labels[accessLevel]}
    </span>
  )
}