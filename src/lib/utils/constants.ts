/**
 * Application constants
 */

// Site configuration
export const SITE_CONFIG = {
  name: 'Murivest',
  tagline: 'Premium Real Estate Investment',
  description: 'Exclusive investment opportunities in commercial real estate across East Africa and key global markets.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://murivest.co.ke',
  supportEmail: 'investors@ murivest.co.ke',
  adminEmail: 'admin@ murivest.co.ke'
}

// Investor status hierarchy
export const INVESTOR_STATUS = {
  REGISTERED: 'registered',
  VERIFIED: 'verified',
  PREMIUM: 'premium',
  ADMIN: 'admin'
} as const

export const INVESTOR_STATUS_LABELS = {
  [INVESTOR_STATUS.REGISTERED]: 'Registered',
  [INVESTOR_STATUS.VERIFIED]: 'Verified',
  [INVESTOR_STATUS.PREMIUM]: 'Premium',
  [INVESTOR_STATUS.ADMIN]: 'Administrator'
}

export const INVESTOR_STATUS_COLORS = {
  [INVESTOR_STATUS.REGISTERED]: 'gray',
  [INVESTOR_STATUS.VERIFIED]: 'blue',
  [INVESTOR_STATUS.PREMIUM]: 'amber',
  [INVESTOR_STATUS.ADMIN]: 'purple'
}

// Access levels
export const ACCESS_LEVELS = {
  REGISTERED: 'registered',
  VERIFIED: 'verified',
  PREMIUM: 'premium'
} as const

export const ACCESS_LEVEL_HIERARCHY: Record<string, number> = {
  [ACCESS_LEVELS.REGISTERED]: 1,
  [ACCESS_LEVELS.VERIFIED]: 2,
  [ACCESS_LEVELS.PREMIUM]: 3
}

// Publication categories
export const PUBLICATION_CATEGORIES = {
  MARKET_REPORT: 'market_report',
  INVESTMENT_ANALYSIS: 'investment_analysis',
  QUARTERLY_UPDATE: 'quarterly_update',
  RESEARCH_BRIEF: 'research_brief',
  WHITE_PAPER: 'white_paper'
} as const

export const PUBLICATION_CATEGORY_LABELS = {
  [PUBLICATION_CATEGORIES.MARKET_REPORT]: 'Market Report',
  [PUBLICATION_CATEGORIES.INVESTMENT_ANALYSIS]: 'Investment Analysis',
  [PUBLICATION_CATEGORIES.QUARTERLY_UPDATE]: 'Quarterly Update',
  [PUBLICATION_CATEGORIES.RESEARCH_BRIEF]: 'Research Brief',
  [PUBLICATION_CATEGORIES.WHITE_PAPER]: 'White Paper'
}

// Property types
export const PROPERTY_TYPES = {
  OFFICE: 'office',
  RETAIL: 'retail',
  INDUSTRIAL: 'industrial',
  HOSPITALITY: 'hospitality',
  MIXED_USE: 'mixed_use',
  LAND: 'land'
} as const

export const PROPERTY_TYPE_LABELS = {
  [PROPERTY_TYPES.OFFICE]: 'Office',
  [PROPERTY_TYPES.RETAIL]: 'Retail',
  [PROPERTY_TYPES.INDUSTRIAL]: 'Industrial',
  [PROPERTY_TYPES.HOSPITALITY]: 'Hospitality',
  [PROPERTY_TYPES.MIXED_USE]: 'Mixed Use',
  [PROPERTY_TYPES.LAND]: 'Land'
}

// Order statuses
export const ORDER_STATUS = {
  PENDING: 'pending',
  AWAITING_PAYMENT: 'awaiting_payment',
  PAID: 'paid',
  FULFILLED: 'fulfilled',
  CANCELLED: 'cancelled',
  REFUNDED: 'refunded'
} as const

export const ORDER_STATUS_LABELS = {
  [ORDER_STATUS.PENDING]: 'Pending',
  [ORDER_STATUS.AWAITING_PAYMENT]: 'Awaiting Payment',
  [ORDER_STATUS.PAID]: 'Paid',
  [ORDER_STATUS.FULFILLED]: 'Fulfilled',
  [ORDER_STATUS.CANCELLED]: 'Cancelled',
  [ORDER_STATUS.REFUNDED]: 'Refunded'
}

export const ORDER_STATUS_COLORS = {
  [ORDER_STATUS.PENDING]: 'yellow',
  [ORDER_STATUS.AWAITING_PAYMENT]: 'orange',
  [ORDER_STATUS.PAID]: 'blue',
  [ORDER_STATUS.FULFILLED]: 'green',
  [ORDER_STATUS.CANCELLED]: 'red',
  [ORDER_STATUS.REFUNDED]: 'gray'
}

// Payment statuses
export const PAYMENT_STATUS = {
  PENDING: 'pending',
  VERIFIED: 'verified',
  FAILED: 'failed',
  REFUNDED: 'refunded'
} as const

export const PAYMENT_METHODS = {
  MPESA: 'mpesa',
  BANK_TRANSFER: 'bank_transfer',
  CARD: 'card',
  CRYPTO: 'crypto'
} as const

// Deal stages
export const DEAL_STAGES = {
  DUE_DILIGENCE: 'due_diligence',
  UNDER_CONTRACT: 'under_contract',
  CLOSING: 'closing'
} as const

export const DEAL_STAGE_LABELS = {
  [DEAL_STAGES.DUE_DILIGENCE]: 'Due Diligence',
  [DEAL_STAGES.UNDER_CONTRACT]: 'Under Contract',
  [DEAL_STAGES.CLOSING]: 'Closing'
}

// Resource categories
export const RESOURCE_CATEGORIES = {
  BROCHURE: 'brochure',
  FINANCIAL_MODEL: 'financial_model',
  LEGAL_DOCUMENT: 'legal_document',
  PRESENTATION: 'presentation',
  REPORT: 'report',
  TEMPLATE: 'template'
} as const

// Pagination
export const DEFAULT_PAGE_SIZE = 12
export const MAX_PAGE_SIZE = 100

// File upload limits
export const MAX_FILE_SIZE = 10 * 1024 * 1024 // 10MB
export const ALLOWED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/webp']
export const ALLOWED_DOCUMENT_TYPES = ['application/pdf']

// Routes
export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  CONTACT: '/contact',
  INVESTOR_PORTAL: '/investor-portal',
  ADMIN: '/admin',
  ADMIN_DASHBOARD: '/admin/dashboard',
  ADMIN_INVESTORS: '/admin/investors',
  ADMIN_VERIFICATIONS: '/admin/verifications',
  ADMIN_PUBLICATIONS: '/admin/publications',
  ADMIN_BRIEFS: '/admin/briefs',
  ADMIN_DEALS: '/admin/deals',
  ADMIN_ORDERS: '/admin/orders',
  ADMIN_PAYMENTS: '/admin/payments'
}

// Error messages
export const ERROR_MESSAGES = {
  UNAUTHORIZED: 'You are not authorized to perform this action',
  NOT_FOUND: 'The requested resource was not found',
  SERVER_ERROR: 'An unexpected error occurred. Please try again.',
  INVALID_CREDENTIALS: 'Invalid email or password',
  EMAIL_EXISTS: 'An account with this email already exists',
  VERIFICATION_REQUIRED: 'Please verify your account to access this feature',
  PREMIUM_REQUIRED: 'Premium membership required to access this feature'
}

// Success messages
export const SUCCESS_MESSAGES = {
  PROFILE_UPDATED: 'Profile updated successfully',
  ORDER_PLACED: 'Order placed successfully',
  PAYMENT_SUBMITTED: 'Payment submitted for review',
  VERIFICATION_SUBMITTED: 'Verification request submitted'
}