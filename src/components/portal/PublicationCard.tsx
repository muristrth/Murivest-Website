'use client'

import React from 'react'
import Link from 'next/link'
import { formatDate } from '@/lib/utils/formatDate'

interface PublicationCardProps {
  publication: {
    id: string
    title: string
    slug: string
    summary: string
    category: string
    image_url?: string
    published_at?: string
  }
}

export function PublicationCard({ publication }: PublicationCardProps) {
  const categoryColors: Record<string, string> = {
    'market-insight': 'bg-emerald-100 text-emerald-700',
    'research': 'bg-blue-100 text-blue-700',
    'case-study': 'bg-purple-100 text-purple-700',
    'news': 'bg-amber-100 text-amber-700'
  }

  const categoryLabels: Record<string, string> = {
    'market-insight': 'Market Insight',
    'research': 'Research',
    'case-study': 'Case Study',
    'news': 'News'
  }

  return (
    <Link
      href={`/portal/publications/${publication.slug}`}
      className="group block bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-emerald-300 hover:shadow-lg transition-all duration-300"
    >
      {publication.image_url && (
        <div className="aspect-video overflow-hidden">
          <img
            src={publication.image_url}
            alt={publication.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <div className="p-5">
        <div className="flex items-center gap-2 mb-3">
          <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${categoryColors[publication.category] || 'bg-slate-100 text-slate-600'}`}>
            {categoryLabels[publication.category] || publication.category}
          </span>
          {publication.published_at && (
            <span className="text-xs text-slate-400">
              {formatDate(publication.published_at)}
            </span>
          )}
        </div>
        <h3 className="text-lg font-semibold text-slate-900 group-hover:text-emerald-700 mb-2 line-clamp-2">
          {publication.title}
        </h3>
        <p className="text-sm text-slate-500 line-clamp-2">
          {publication.summary}
        </p>
      </div>
    </Link>
  )
}