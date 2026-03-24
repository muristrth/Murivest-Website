// Publication types
import type { PublicationAccess, PublicationCategory } from './database'

export interface Publication {
  id: string
  title: string
  slug: string
  summary: string | null
  content: string | null
  category: PublicationCategory
  cover_image: string | null
  fliphtml_url: string | null
  file_url: string | null
  access_level: PublicationAccess
  author: string | null
  published_at: string | null
  created_at: string
  updated_at: string
}

export interface PublicationSummary {
  id: string
  title: string
  slug: string
  summary: string | null
  category: PublicationCategory
  cover_image: string | null
  access_level: PublicationAccess
  author: string | null
  published_at: string | null
}

export interface PublicationFilter {
  category?: PublicationCategory
  access_level?: PublicationAccess
  author?: string
  from_date?: string
  to_date?: string
}

export interface CreatePublicationData {
  title: string
  slug: string
  summary?: string
  content?: string
  category: PublicationCategory
  cover_image?: string
  fliphtml_url?: string
  file_url?: string
  access_level?: PublicationAccess
  author?: string
  published_at?: string
}

export interface UpdatePublicationData {
  title?: string
  slug?: string
  summary?: string
  content?: string
  category?: PublicationCategory
  cover_image?: string
  fliphtml_url?: string
  file_url?: string
  access_level?: PublicationAccess
  author?: string
  published_at?: string
}

export interface PublicationStats {
  total: number
  by_category: Record<PublicationCategory, number>
  by_access_level: Record<PublicationAccess, number>
}