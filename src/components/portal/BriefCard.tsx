'use client'

import Link from 'next/link'
import { Brief } from '@/lib/types/brief'
import { MapPin, TrendingUp, DollarSign, Building, Lock, Star } from 'lucide-react'
import { formatCurrency } from '@/lib/utils/formatCurrency'
import { cn } from '@/lib/utils/cn'

interface BriefCardProps {
  brief: Brief
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

export function BriefCard({ brief, userAccessLevel = 'registered' }: BriefCardProps) {
  const canAccess = 
    brief.access_level === 'registered' ||
    (brief.access_level === 'verified' && ['verified', 'premium'].includes(userAccessLevel)) ||
    (brief.access_level === 'premium' && userAccessLevel === 'premium')

  const coverImage = brief.images?.[0] || '/placeholder-property.webp'

  return (
    <div className={cn(
      "group bg-white border border-[#1B4332]/10 overflow-hidden transition-all duration-300 hover:border-[#B8956B]/30",
      !canAccess && "opacity-75"
    )}>
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={coverImage}
          alt={brief.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Featured badge */}
        {brief.featured && (
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
                {brief.access_level} Access Required
              </span>
            </div>
          </div>
        )}

        {/* Status badge */}
        <div className="absolute top-3 right-3">
          {brief.status === 'active' && (
            <span className="bg-green-500 text-white px-2 py-0.5 text-[10px] uppercase tracking-wider">
              Active
            </span>
          )}
          {brief.status === 'sold' && (
            <span className="bg-red-500 text-white px-2 py-0.5 text-[10px] uppercase tracking-wider">
              Sold
            </span>
          )}
          {brief.status === 'withdrawn' && (
            <span className="bg-gray-500 text-white px-2 py-0.5 text-[10px] uppercase tracking-wider">
              Withdrawn
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Property type */}
        <div className="flex items-center gap-2 mb-3">
          <Building className="h-4 w-4 text-[#B8956B]" />
          <span className="text-[10px] uppercase tracking-wider text-[#1B4332]/60">
            {propertyTypeLabels[brief.property_type] || brief.property_type}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-serif text-xl text-[#1B4332] mb-2 line-clamp-2 group-hover:text-[#B8956B] transition-colors">
          {brief.title}
        </h3>

        {/* Location */}
        {brief.location && (
          <div className="flex items-center gap-1 text-sm text-[#2C3E35]/70 mb-4">
            <MapPin className="h-4 w-4 text-[#B8956B]/50" />
            {brief.location}
          </div>
        )}

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#1B4332]/10">
          {brief.asking_price && (
            <div>
              <div className="flex items-center gap-1 text-[#B8956B] mb-1">
                <DollarSign className="h-3 w-3" />
                <span className="text-[10px] uppercase tracking-wider">Price</span>
              </div>
              <div className="font-medium text-[#1B4332]">
                {formatCurrency(brief.asking_price)}
              </div>
            </div>
          )}
          {brief.yield_estimate && (
            <div>
              <div className="flex items-center gap-1 text-[#B8956B] mb-1">
                <TrendingUp className="h-3 w-3" />
                <span className="text-[10px] uppercase tracking-wider">Yield</span>
              </div>
              <div className="font-medium text-[#1B4332]">
                {brief.yield_estimate}%
              </div>
            </div>
          )}
          {brief.cap_rate && (
            <div>
              <div className="text-[#B8956B] mb-1">
                <span className="text-[10px] uppercase tracking-wider">Cap Rate</span>
              </div>
              <div className="font-medium text-[#1B4332]">
                {brief.cap_rate}%
              </div>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="mt-4">
          {canAccess ? (
            <Link
              href={`/portal/briefs/${brief.slug}`}
              className="block w-full text-center bg-[#1B4332] text-white py-2.5 text-xs uppercase tracking-[0.1em] hover:bg-[#2D5A47] transition-colors"
            >
              View Brief
            </Link>
          ) : (
            <Link
              href={`/portal?upgrade=${brief.access_level}`}
              className="block w-full text-center border border-[#1B4332] text-[#1B4332] py-2.5 text-xs uppercase tracking-[0.1em] hover:bg-[#1B4332] hover:text-white transition-all"
            >
              Upgrade Access
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

interface BriefCardSkeletonProps {
  count?: number
}

export function BriefCardSkeleton({ count = 3 }: BriefCardSkeletonProps) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="bg-white border border-[#1B4332]/10 overflow-hidden animate-pulse">
          <div className="h-48 bg-[#1B4332]/10" />
          <div className="p-5">
            <div className="h-4 w-24 bg-[#1B4332]/10 rounded mb-3" />
            <div className="h-6 w-full bg-[#1B4332]/10 rounded mb-2" />
            <div className="h-4 w-32 bg-[#1B4332]/10 rounded mb-4" />
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