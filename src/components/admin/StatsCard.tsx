'use client'

import React from 'react'
import { cn } from '@/lib/utils/cn'

interface StatsCardProps {
  title: string
  value: string | number
  change?: {
    value: number
    isPositive: boolean
  }
  icon?: React.ReactNode
  iconColor?: 'emerald' | 'blue' | 'amber' | 'red' | 'purple'
}

export function StatsCard({
  title,
  value,
  change,
  icon,
  iconColor = 'emerald'
}: StatsCardProps) {
  const iconColors = {
    emerald: 'bg-emerald-100 text-emerald-600',
    blue: 'bg-blue-100 text-blue-600',
    amber: 'bg-amber-100 text-amber-600',
    red: 'bg-red-100 text-red-600',
    purple: 'bg-purple-100 text-purple-600'
  }

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">{title}</p>
          <p className="text-2xl font-bold text-slate-900 mt-2">{value}</p>
          {change && (
            <div className="flex items-center gap-1 mt-2">
              <span
                className={cn(
                  'text-sm font-medium',
                  change.isPositive ? 'text-green-600' : 'text-red-600'
                )}
              >
                {change.isPositive ? '+' : ''}{change.value}%
              </span>
              <span className="text-sm text-slate-400">vs last month</span>
            </div>
          )}
        </div>
        {icon && (
          <div className={cn('p-3 rounded-lg', iconColors[iconColor])}>
            {icon}
          </div>
        )}
      </div>
    </div>
  )
}