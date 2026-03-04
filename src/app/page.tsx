import type { Metadata } from 'next'
import Hero from '../components/sections/Hero'
import TaxIntelligenceSection from '../components/sections/TaxIntelligenceSection'
import CoreInvestmentStrategies from '../components/sections/CoreInvestmentStrategies'
import ResearchPreview from '../components/sections/ResearchPreview'
import InstitutionalTrustSignals from '../components/sections/InstitutionalTrustSignals'
import InstitutionalEngagementModel from '../components/sections/InstitutionalEngagementModel'
import ESGFrameworkSection from '../components/sections/ESGFrameworkSection'
import CEOInstitutionalProfile from '@/components/CEOInstitutionalProfile'

export const metadata: Metadata = {
  // 1. STRATEGIC TITLE (Max 60 chars recommended for SEO)
  title: 'Murivest Realty Group | Institutional Real Estate Advisory Kenya',

  // 2. AUTHORITATIVE DESCRIPTION
  description: 'Murivest Realty Group is an independent commercial real estate advisory firm based in Nairobi. We originate and advise on institutional-grade mandates across East African commercial property markets. Engagements by mandate only.',

  // 3. TARGETED KEYWORDS (Curated for High-Net-Worth intent)
  keywords: [
    'Commercial Properties in Nairobi CBD',
    'Commercial Real Estate Investment Nairobi',
    'East Africa Property Origination',
    'Family Office Real Estate Kenya',
    'Institutional Capital Deployment Africa',
    'Off-Market Commercial Assets Kenya',
    'Real Estate Investment Advisory Nairobi',
    'Kenya Commercial Property Investment',
    'Institutional Real Estate Mandate',
    'Murivest Realty Group',
    'East African Real Estate Advisory',
    'Commercial Real Estate Kenya 2025'
  ].join(', '),

  // 4. OPEN GRAPH (Social Sharing)
  openGraph: {
    title: 'Murivest Realty Group | Institutional Real Estate Advisory',
    description: 'Murivest Realty Group is an independent commercial real estate advisory firm based in Nairobi. We originate and advise on institutional-grade mandates across East African commercial property markets. Engagements by mandate only.',
    url: 'https://murivest.co.ke',
    siteName: 'Murivest Realty Group Ltd',
    images: [
      {
        url: '/og-institutional-hero.png',
        width: 1200,
        height: 630,
        alt: 'Murivest Realty Group Ltd - Institutional Real Estate Advisory',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },

  // 5. TWITTER CARD
  twitter: {
    card: 'summary_large_image',
    title: 'Murivest Realty Group | Institutional Real Estate Advisory',
    description: 'Murivest Realty Group is an independent commercial real estate advisory firm based in Nairobi. We originate and advise on institutional-grade mandates across East African commercial property markets. Engagements by mandate only.',
    images: ['/og-institutional-hero.png'],
  },

  // 6. CANONICAL & ROBOTS
  alternates: {
    canonical: 'https://murivest.co.ke',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function HomePage() {
  return (
    <>
      {/* <IntroVideoModal/> */}
      <Hero />
      <InstitutionalEngagementModel />
      <CoreInvestmentStrategies />
      <TaxIntelligenceSection />
      <ResearchPreview />
      <ESGFrameworkSection />
      <CEOInstitutionalProfile />
      <InstitutionalTrustSignals />
    </>
  )
}
