// Database type definitions for Supabase tables

export type InvestorStatus = 'registered' | 'verified' | 'premium' | 'admin'
export type PublicationCategory = 'market_report' | 'investment_analysis' | 'quarterly_update' | 'research_brief' | 'white_paper'
export type PublicationAccess = 'registered' | 'verified' | 'premium'
export type BriefAccess = 'registered' | 'verified' | 'premium'
export type PropertyType = 'office' | 'retail' | 'industrial' | 'hospitality' | 'mixed_use' | 'land'
export type DealStage = 'due_diligence' | 'under_contract' | 'closing'
export type OrderStatus = 'pending' | 'awaiting_payment' | 'paid' | 'fulfilled' | 'cancelled' | 'refunded'
export type PaymentMethod = 'mpesa' | 'bank_transfer' | 'card' | 'crypto'
export type PaymentStatus = 'pending' | 'verified' | 'failed' | 'refunded'
export type ReviewStatus = 'submitted' | 'approved' | 'rejected'
export type VerificationStatus = 'pending' | 'approved' | 'rejected'
export type VerificationType = 'verification' | 'premium' | 'kyc'

export interface Profile {
  id: string
  email: string
  full_name: string | null
  title: string | null
  organisation: string | null
  phone: string | null
  aum: string | null
  investment_focus: string | null
  investor_status: InvestorStatus
  portfolio_value?: number
  verified_at?: string
  verified_by?: string
  created_at: string
  updated_at: string
}

export interface ProfileAllocation {
  id: string
  profile_id: string
  direct_real_estate: number
  indirect_real_estate: number
  equities: number
  fixed_income: number
  alternatives: number
  created_at: string
  updated_at: string
}

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

export interface AssetBrief {
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

export interface OffMarketDeal {
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

export interface BriefOrder {
  id: string
  user_id: string
  brief_id: string | null
  order_type: 'brief_purchase' | 'brief_request' | 'publication_access'
  amount: number
  currency: string
  status: OrderStatus
  payment_method: string | null
  payment_reference: string | null
  notes: string | null
  fulfilled_by: string | null
  fulfilled_at: string | null
  created_at: string
  updated_at: string
}

export interface PaymentConfirmation {
  id: string
  order_id: string | null
  user_id: string
  amount: number
  currency: string
  payment_method: PaymentMethod
  transaction_id: string | null
  phone_number: string | null
  status: PaymentStatus
  review_status: ReviewStatus
  receipt_url: string | null
  notes: string | null
  verified_by: string | null
  verified_at: string | null
  created_at: string
  updated_at: string
}

export interface VerificationRequest {
  id: string
  user_id: string
  request_type: VerificationType
  status: VerificationStatus
  documents: Record<string, unknown> | null
  notes: string | null
  reviewed_by: string | null
  reviewed_at: string | null
  created_at: string
  updated_at: string
}

export interface Resource {
  id: string
  title: string
  description: string | null
  category: 'brochure' | 'financial_model' | 'legal_document' | 'presentation' | 'report' | 'template'
  file_url: string
  file_type: string | null
  file_size: number | null
  access_level: PublicationAccess
  uploaded_by: string | null
  created_at: string
}

export interface AuditLog {
  id: string
  user_id: string | null
  action: string
  entity_type: string
  entity_id: string | null
  old_values: Record<string, unknown> | null
  new_values: Record<string, unknown> | null
  ip_address: string | null
  user_agent: string | null
  created_at: string
}

export interface MarketSnapshot {
  id: string
  region: string
  metric: string
  value: string
  trend: 'up' | 'down' | 'stable' | null
  source: string | null
  as_of_date: string | null
  created_at: string
}

export interface NewsletterSubscription {
  id: string
  email: string
  status: 'active' | 'unsubscribed' | 'bounced'
  subscribed_at: string
  unsubscribed_at: string | null
}

export interface ContactInquiry {
  id: string
  name: string
  email: string
  phone: string | null
  organisation: string | null
  subject: string | null
  message: string
  status: 'new' | 'contacted' | 'qualified' | 'closed'
  assigned_to: string | null
  created_at: string
  updated_at: string
}

// Database row types for inserts/updates
export type ProfileInsert = Omit<Profile, 'id' | 'created_at' | 'updated_at'>
export type PublicationInsert = Omit<Publication, 'id' | 'created_at' | 'updated_at'>
export type AssetBriefInsert = Omit<AssetBrief, 'id' | 'created_at' | 'updated_at'>
export type OffMarketDealInsert = Omit<OffMarketDeal, 'id' | 'created_at' | 'updated_at'>
export type BriefOrderInsert = Omit<BriefOrder, 'id' | 'created_at' | 'updated_at'>
export type PaymentConfirmationInsert = Omit<PaymentConfirmation, 'id' | 'created_at' | 'updated_at'>
export type VerificationRequestInsert = Omit<VerificationRequest, 'id' | 'created_at' | 'updated_at'>
export type ResourceInsert = Omit<Resource, 'id' | 'created_at'>;