// Brief types for asset briefs
import type { BriefAccess, PropertyType } from './database'

export interface Brief {
  id: string
  title: string
  slug: string
  summary: string | null
  content: string | null
  property_type: PropertyType
  location: string | null
  asking_price: number | null
  yield_estimate: number | null
  cap_rate: number | null
  images: string[] | null
  documents: string[] | null
  status: 'active' | 'sold' | 'withdrawn'
  access_level: BriefAccess
  featured: boolean
  published_at: string | null
  created_at: string
  updated_at: string
}

export interface BriefSummary {
  id: string
  title: string
  slug: string
  summary: string | null
  property_type: PropertyType
  location: string | null
  asking_price: number | null
  yield_estimate: number | null
  cap_rate: number | null
  cover_image: string | null
  status: 'active' | 'sold' | 'withdrawn'
  access_level: BriefAccess
  featured: boolean
  published_at: string | null
}

export interface BriefFilter {
  property_type?: PropertyType
  location?: string
  min_price?: number
  max_price?: number
  access_level?: BriefAccess
  status?: 'active' | 'sold' | 'withdrawn'
  featured?: boolean
}

export interface BriefRequest {
  user_id: string
  brief_id: string
  message?: string
  preferred_contact_method?: 'email' | 'phone' | 'whatsapp'
  preferred_contact_time?: string
}

export interface BriefRequestWithBrief extends BriefRequest {
  brief: BriefSummary
}

export type BriefFormData = Partial<Omit<Brief, 'id' | 'created_at' | 'updated_at'>>