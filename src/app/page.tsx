import type { Metadata } from 'next'
import Hero from '../components/sections/Hero'
import TaxIntelligenceSection from '../components/sections/TaxIntelligenceSection'
import CoreInvestmentStrategies from '../components/sections/CoreInvestmentStrategies'
import ResearchPreview from '../components/sections/ResearchPreview'
import InstitutionalTrustSignals from '../components/sections/InstitutionalTrustSignals'
import InstitutionalEngagementModel from '../components/sections/InstitutionalEngagementModel'
import ESGFrameworkSection from '../components/sections/ESGFrameworkSection'
import CEOInstitutionalProfile from '@/components/CEOInstitutionalProfile'
import UserJourneySegmentation from '@/components/sections/UserJourneySegmentation'

export const metadata: Metadata = {
  // 1. STRATEGIC TITLE (Max 60 chars recommended for SEO)
  title: 'Murivest Realty Group | Institutional Real Estate Advisory Kenya',

  // 2. AUTHORITATIVE DESCRIPTION
  description: 'Murivest Realty Group is an independent commercial real estate advisory firm based in Nairobi. We originate and advise on institutional-grade mandates across East African commercial property markets. Engagements by mandate only.',

  // 3. TARGETED KEYWORDS (Curated for High-Net-Worth intent)
  keywords: [
    'Warehouse',
    'Office',
    'Commercial',
    'Capital Markets',
    'Real Estate',
    'Murivest',
    'investment',
    'reits',
    'investments',
    'Murivest Realty Group',
    'office space',
    'reits investments',
    'data warehouse',
    'kenya real estate',
    'commercial property',
    'commercial real estate',
    'private investment',
    'private equity real estate',
    'real estate consulting',
    'capital markets advisory',
    'commercial advisory',
    'commcercial Capital Markets',
    'murivest properties',
    'murivest advisory',
    'murivest off market',
    'off market properties',
    'investments',
    'Commercial Real Estate Kenya 2026'
  ].join(', '),

  // 4. OPEN GRAPH (Social Sharing)
  openGraph: {
    title: 'Murivest Realty Group | Commercial Real Estate Advisory',
    description: 'Murivest Realty Group is an independent commercial real estate advisory firm based in Nairobi. We originate and advise on institutional-grade mandates across East African commercial property markets. Engagements by mandate only.',
    url: 'https://murivest.co.ke',
    siteName: 'Murivest Realty Group Ltd',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Murivest Realty Group Ltd - Commercial Real Estate Advisory',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },

  // 5. TWITTER CARD
  twitter: {
    card: 'summary_large_image',
    title: 'Murivest Realty Group | Commercial Real Estate Advisory',
    description: 'Murivest Realty Group is an independent commercial real estate advisory firm based in Nairobi. We originate and advise on institutional-grade mandates across East African commercial property markets. Engagements by mandate only.',
    images: ['/logo.png'],
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
      <UserJourneySegmentation />
      <ESGFrameworkSection />
      <CEOInstitutionalProfile />
      <InstitutionalTrustSignals />
    </>
  )
}
