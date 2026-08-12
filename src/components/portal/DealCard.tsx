'use client'

import Link from 'next/link'
import { Deal } from '@/lib/types/deal'
import { MapPin, TrendingUp, DollarSign, Building, Lock, Star, MapPinned, Clock } from 'lucide-react'
import { formatCurrency } from '@/lib/utils/formatCurrency'
import { cn } from '@/lib/utils/cn'

interface DealCardProps {
  deal: Deal
  userAccessLevel?: 'registered' | 'verified' | 'premium'
}

const propertyTypeLabels: Record<string, string> = {
  office: 'Office',
  retail: 'Retail',
  industrial: 'Industrial',
  hospitality: 'Hospitality',
  mixed_use: 'Mixed Use',
  land: 'Land',
}

const dealStageLabels: Record<string, { label: string; color: string }> = {
  due_diligence: { label: 'Due Diligence', color: 'bg-amber-50 text-amber-700' },
  under_contract: { label: 'Under Contract', color: 'bg-blue-50 text-blue-700' },
  closing: { label: 'Closing', color: 'bg-green-50 text-green-700' },
}

export function DealCard({ deal, userAccessLevel = 'registered' }: DealCardProps) {
  const canAccess = 
    deal.access_level === 'registered' ||
    (deal.access_level === 'verified' && ['verified', 'premium'].includes(userAccessLevel)) ||
    (deal.access_level === 'premium' && userAccessLevel === 'premium')

  const coverImage = deal.images?.[0] || '/placeholder-property.webp'
  const stageConfig = dealStageLabels[deal.deal_stage]

  return (
    <div className={cn(
      "group bg-white border border-[#1B4332]/10 overflow-hidden transition-all duration-300 hover:border-[#B8956B]/30",
      !canAccess && "opacity-75"
    )}>
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={coverImage}
          alt={deal.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Featured badge */}
        {deal.featured && (
          <div className="absolute top-3 left-3 bg-[#B8956B] text-white px-2 py-1 text-[10px] uppercase tracking-wider flex items-center gap-1">
            <Star className="h-3 w-3" />
            Featured
          </div>
        )}

        {/* Lock overlay for restricted content */}
        {!canAccess && (
          <div className="absolute inset-0 bg-[#1B4332]/60 flex items-center justify-center">
            <div className="flex items-center gap-2 text-white">
              <Lock className="h-5 w-5" />
              <span className="text-sm uppercase tracking-wider">
                {deal.access_level} Access Required
              </span>
            </div>
          </div>
        )}

        {/* Deal stage badge */}
        <div className="absolute top-3 right-3">
          {deal.status === 'active' && stageConfig && (
            <span className={cn("px-2 py-0.5 text-[10px] uppercase tracking-wider", stageConfig.color)}>
              {stageConfig.label}
            </span>
          )}
        </div>

        {/* Off-market indicator */}
        <div className="absolute bottom-3 left-3 bg-[#1B4332] text-white px-2 py-1 text-[10px] uppercase tracking-wider flex items-center gap-1">
          <MapPinned className="h-3 w-3" />
          Off-Market
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Property type and region */}
        <div className="flex items-center gap-2 mb-3">
          <Building className="h-4 w-4 text-[#B8956B]" />
          <span className="text-[10px] uppercase tracking-wider text-[#1B4332]/60">
            {propertyTypeLabels[deal.property_type] || deal.property_type}
          </span>
          {deal.region && (
            <>
              <span className="text-[#1B4332]/30">•</span>
              <span className="text-[10px] uppercase tracking-wider text-[#1B4332]/60">
                {deal.region}
              </span>
            </>
          )}
        </div>

        {/* Title */}
        <h3 className="font-serif text-xl text-[#1B4332] mb-2 line-clamp-2 group-hover:text-[#B8956B] transition-colors">
          {deal.title}
        </h3>

        {/* Location */}
        {deal.location && (
          <div className="flex items-center gap-1 text-sm text-[#2C3E35]/70 mb-4">
            <MapPin className="h-4 w-4 text-[#B8956B]/50" />
            {deal.location}
          </div>
        )}

        {/* Summary */}
        {deal.summary && (
          <p className="text-sm text-[#2C3E35]/70 line-clamp-2 mb-4">
            {deal.summary}
          </p>
        )}

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#1B4332]/10">
          {deal.asking_price && (
            <div>
              <div className="flex items-center gap-1 text-[#B8956B] mb-1">
                <DollarSign className="h-3 w-3" />
                <span className="text-[10px] uppercase tracking-wider">Asking</span>
              </div>
              <div className="font-medium text-[#1B4332]">
                {formatCurrency(deal.asking_price)}
              </div>
            </div>
          )}
          {deal.min_investment && (
            <div>
              <div className="flex items-center gap-1 text-[#B8956B] mb-1">
                <DollarSign className="h-3 w-3" />
                <span className="text-[10px] uppercase tracking-wider">Min</span>
              </div>
              <div className="font-medium text-[#1B4332]">
                {formatCurrency(deal.min_investment)}
              </div>
            </div>
          )}
          {deal.expected_yield && (
            <div>
              <div className="flex items-center gap-1 text-[#B8956B] mb-1">
                <TrendingUp className="h-3 w-3" />
                <span className="text-[10px] uppercase tracking-wider">Yield</span>
              </div>
              <div className="font-medium text-[#1B4332]">
                {deal.expected_yield}%
              </div>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="mt-4 flex gap-2">
          {canAccess ? (
            <Link
              href={`/portal/off-market/${deal.slug}`}
              className="flex-1 block text-center bg-[#1B4332] text-white py-2.5 text-xs uppercase tracking-[0.1em] hover:bg-[#2D5A47] transition-colors"
            >
              View Details
            </Link>
          ) : (
            <Link
              href={`/portal?upgrade=${deal.access_level}`}
              className="flex-1 block text-center border border-[#1B4332] text-[#1B4332] py-2.5 text-xs uppercase tracking-[0.1em] hover:bg-[#1B4332] hover:text-white transition-all"
            >
              Upgrade Access
            </Link>
          )}
          
          {canAccess && deal.virtual_tour_url && (
            <a
              href={deal.virtual_tour_url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 border border-[#1B4332] text-[#1B4332] text-xs uppercase tracking-[0.1em] hover:bg-[#1B4332] hover:text-white transition-all flex items-center gap-1"
            >
              <Clock className="h-3 w-3" />
              Tour
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

interface DealCardSkeletonProps {
  count?: number
}

export function DealCardSkeleton({ count = 3 }: DealCardSkeletonProps) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="bg-white border border-[#1B4332]/10 overflow-hidden animate-pulse">
          <div className="h-56 bg-[#1B4332]/10" />
          <div className="p-5">
            <div className="h-4 w-24 bg-[#1B4332]/10 rounded mb-3" />
            <div className="h-6 w-full bg-[#1B4332]/10 rounded mb-2" />
            <div className="h-4 w-32 bg-[#1B4332]/10 rounded mb-4" />
            <div className="h-4 w-full bg-[#1B4332]/10 rounded mb-4" />
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#1B4332]/10">
              <div className="h-8 bg-[#1B4332]/10 rounded" />
              <div className="h-8 bg-[#1B4332]/10 rounded" />
              <div className="h-8 bg-[#1B4332]/10 rounded" />
            </div>
          </div>
        </div>
      ))}
    </>
  )
}