/**
 * Murivest Country SEO Configuration
 * Single source of truth for per-region metadata, hreflang, and Open Graph.
 *
 * Usage:
 *   import { countrySEO } from '@/lib/seo/countries'
 *   const { title, domain, description } = countrySEO.ke
 */

export type CountryCode = 'global' | 'ke' | 'sg' | 'uae' | 'uk' | 'us'

export interface CountrySEOConfig {
  title: string
  description: string
  domain: string
  locale: string
  ogImage: string
  canonical: string
  keywords: string[]
  region: string
  cities: string
  schemaRegion: string
  telephone: string
}

export const countrySEO: Record<CountryCode, CountrySEOConfig> = {
  global: {
    title:
      'Commercial Real Estate Advisory Kenya | Office, Industrial & Investment | Murivest - Est. 2025',
    description:
      'Murivest Realty Group is a Nairobi-based commercial real estate advisory founded in 2025 by Mark Muriithi. Mandate-based advisory for office, industrial, and investment across Kenya and East Africa.',
    domain: 'https://murivest.com',
    canonical: 'https://murivest.com',
    locale: 'en_KE',
    ogImage: 'https://murivest.com/og-global.webp',
    region: 'East Africa',
    cities: 'Nairobi · Kigali · Kampala · Dar es Salaam',
    schemaRegion: 'KE',
    telephone: '+254-115-277-610',
    keywords: [
      'commercial real estate advisory Kenya',
      'Nairobi commercial property',
      'office space Nairobi',
      'industrial property Kenya',
      'investment advisory Kenya',
      'East Africa real estate',
      'Murivest Realty Group',
      'Mark Muriithi',
      'commercial property underwriting',
      'exit strategy advisory',
    ],
  },

  ke: {
    title:
      'Murivest Realty Group | Institutional Real Estate Advisory Kenya',
    description:
      'Murivest Realty Group is an independent commercial real estate advisory firm based in Nairobi. We originate and advise on institutional-grade mandates across East African commercial property markets. Engagements by mandate only.',
    domain: 'https://murivest.com',
    canonical: 'https://murivest.com',
    locale: 'en_KE',
    ogImage: 'https://murivest.com/kenya-night.webp',
    region: 'East Africa',
    cities: 'Nairobi · Mombasa · Kampala · Kigali',
    schemaRegion: 'KE',
    telephone: '+254-115-277-610',
    keywords: [
      'commercial real estate advisory Kenya',
      'Nairobi commercial property',
      'institutional real estate Kenya',
      'commercial property investment Kenya',
      'Murivest Realty Group',
      'Kenya real estate 2026',
      'office space Nairobi',
      'warehouse Kenya',
      'capital markets advisory Kenya',
      'real estate consulting Nairobi',
    ],
  },

  sg: {
    title:
      'Murivest | Institutional Real Estate Advisory Singapore',
    description:
      'Murivest advises institutional investors, family offices, and cross-border capital on Singapore and Asia Pacific commercial real estate. REIT structuring, industrial, and office mandates. Engagements by mandate only.',
    domain: 'https://murivest.sg',
    canonical: 'https://murivest.sg',
    locale: 'en_SG',
    ogImage: 'https://murivest.sg/og-singapore.webp',
    region: 'Asia Pacific',
    cities: 'Singapore · Hong Kong · Tokyo · Sydney',
    schemaRegion: 'SG',
    telephone: '+65-0115-277-610 ',
    keywords: [
      'commercial real estate advisory Singapore',
      'Singapore institutional real estate',
      'family office real estate Singapore',
      'cross-border real estate investment Asia Pacific',
      'Singapore REIT advisory',
      'industrial real estate Singapore',
      'Murivest Singapore',
      'Asia Pacific capital markets',
    ],
  },

  uae: {
    title:
      'Murivest | Institutional Real Estate Advisory UAE',
    description:
      'Murivest advises sovereign-aligned developers, institutional investors, and capital allocators on UAE and GCC commercial real estate. DIFC, luxury assets, development advisory. Engagements by mandate only.',
    domain: 'https://murivest.ae',
    canonical: 'https://murivest.ae',
    locale: 'en_AE',
    ogImage: 'https://murivest.ae/og-uae.webp',
    region: 'Middle East & GCC',
    cities: 'Dubai · Abu Dhabi · Riyadh · Doha',
    schemaRegion: 'AE',
    telephone: '+971-00-115-277-610 ',
    keywords: [
      'commercial real estate advisory UAE',
      'Dubai institutional real estate',
      'DIFC real estate advisory',
      'GCC capital formation real estate',
      'luxury development advisory UAE',
      'Abu Dhabi commercial property',
      'Murivest UAE',
      'Middle East real estate investment',
    ],
  },

  uk: {
    title:
      'Murivest | Institutional Real Estate Advisory UK',
    description:
      'Murivest advises institutional capital on UK and European commercial real estate. City of London office, logistics, and fund-grade mandates. Engagements by mandate only.',
    domain: 'https://murivest.co.uk',
    canonical: 'https://murivest.co.uk',
    locale: 'en_GB',
    ogImage: 'https://murivest.co.uk/og-uk.webp',
    region: 'Europe',
    cities: 'London · Paris · Berlin · Amsterdam',
    schemaRegion: 'GB',
    telephone: '+44-7864-855742 ',
    keywords: [
      'commercial real estate advisory UK',
      'City of London real estate investment',
      'institutional real estate UK',
      'UK logistics property advisory',
      'European real estate capital markets',
      'Murivest UK',
      'London commercial property 2026',
    ],
  },

  us: {
    title:
      'Murivest | Institutional Real Estate Advisory United States',
    description:
      'Murivest advises institutional investors on US commercial real estate across office, industrial, logistics, and capital markets mandates. Engagements by mandate only.',
    domain: 'https://murivest.com/us',
    canonical: 'https://murivest.com/us',
    locale: 'en_US',
    ogImage: 'https://murivest.com/og-us.webp',
    region: 'North America',
    cities: 'New York · Miami · Los Angeles · Chicago',
    schemaRegion: 'US',
    telephone: '+1-000-115-277-610 ',
    keywords: [
      'commercial real estate advisory United States',
      'institutional real estate US',
      'US capital markets real estate',
      'Murivest United States',
      'New York commercial property advisory',
      'industrial logistics real estate USA',
    ],
  },
}

/**
 * Build hreflang alternates for a given page path.
 * Include in any page's metadata.alternates.languages.
 */
export function buildHreflang(path = '') {
  return {
    'en-KE': `${countrySEO.ke.domain}${path}`,
    'en-SG': `${countrySEO.sg.domain}${path}`,
    'en-AE': `${countrySEO.uae.domain}${path}`,
    'en-GB': `${countrySEO.uk.domain}${path}`,
    'en-US': `${countrySEO.us.domain}${path}`,
    'x-default': `${countrySEO.global.domain}${path}`,
  }
}