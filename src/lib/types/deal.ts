// Deal types for off-market deals
import type { DealStage, PublicationAccess, PropertyType } from './database'

export interface Deal {
  id: string
  title: string
  slug: string
  summary: string | null
  description: string | null
  property_type: PropertyType
  location: string | null
  region: string | null
  asking_price: number | null
  min_investment: number | null
  expected_yield: number | null
  deal_stage: DealStage
  images: string[] | null
  documents: string[] | null
  virtual_tour_url: string | null
  status: 'active' | 'sold' | 'withdrawn' | 'archived'
  access_level: PublicationAccess
  featured: boolean
  published_at: string | null
  created_at: string
  updated_at: string
}

export interface DealSummary {
  id: string
  title: string
  slug: string
  summary: string | null
  property_type: PropertyType
  location: string | null
  region: string | null
  asking_price: number | null
  min_investment: number | null
  expected_yield: number | null
  deal_stage: DealStage
  cover_image: string | null
  status: 'active' | 'sold' | 'withdrawn' | 'archived'
  access_level: PublicationAccess
  featured: boolean
  published_at: string | null
}

export interface DealFilter {
  property_type?: PropertyType
  region?: string
  location?: string
  min_price?: number
  max_price?: number
  min_investment?: number
  deal_stage?: DealStage
  status?: 'active' | 'sold' | 'withdrawn' | 'archived'
  access_level?: PublicationAccess
  featured?: boolean
}

export interface DealInquiry {
  user_id: string
  deal_id: string
  message?: string
  investment_amount?: number
  preferred_contact_method?: 'email' | 'phone' | 'whatsapp'
  preferred_contact_time?: string
}

export interface DealInquiryWithDeal extends DealInquiry {
  deal: DealSummary
}

export type DealFormData = Partial<Omit<Deal, 'id' | 'created_at' | 'updated_at'>>