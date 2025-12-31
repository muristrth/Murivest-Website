import type { Metadata } from 'next'
import Hero from '../components/sections/Hero'
import LegacyPlanningSection from '../components/sections/LegacyPlanningSection'
import TaxIntelligenceSection from '../components/sections/TaxIntelligenceSection'
import IndustrialLandBankingSection from '../components/sections/IndustrialLandBankingSection'
import YieldMapLeadMagnet from '../components/sections/YieldMapLeadMagnet'
import SmartBuildingService from '../components/sections/SmartBuildingService'
import YieldReportSection from '../components/sections/YieldReportSection'
import ExclusiveOpportunities from '../components/sections/ExclusiveOpportunitiesNew'
import ExecutiveTargetedSection from '../components/sections/ExecutiveTargetedSection'
import GlobalPresence from '../components/sections/GlobalPresence'
import InvestmentProcess from '../components/sections/InvestmentProcess'
import TrustIndicators from '../components/sections/TrustIndicators'

export const metadata: Metadata = {
  // 1. STRATEGIC TITLE (Max 60 chars recommended for SEO)
  title: 'Murivest Realty Group Ltd | Institutional Real Estate Investment Authority',
  
  // 2. AUTHORITATIVE DESCRIPTION
  description: 'The premier fiduciary gateway to East African commercial assets. Specialized in Grade A office towers, institutional-grade retail, and high-yield hospitality for global family offices and sovereign funds. Architecting generational wealth through rigorous due diligence and legacy asset management.',
  
  // 3. TARGETED KEYWORDS (Curated for High-Net-Worth intent)
  keywords: [
    'Institutional Capital Allocation Kenya',
    'Grade A Commercial Real Estate Nairobi',
    'Nairobi Financial District Trophy Assets',
    'Fiduciary Real Estate Advisory East Africa',
    'Off-market Commercial Properties Kenya',
    'Family Office Real Estate Strategies Africa',
    'Institutional Asset Management Nairobi',
    'Kenya Real Estate Investment for UK Investors',
    'Capital Preservation Real Estate Africa',
    'African REIT Advisory',
    'Murivest Realty Group',
    'Generational Wealth Real Estate Kenya',
    'Nairobi Prime Office Market 2025'
  ].join(', '),

  // 4. OPEN GRAPH (Social Sharing)
  openGraph: {
    title: 'Murivest Realty Group: East Africa’s Investment Authority',
    description: 'Exclusive access to institutional-grade commercial real estate in Kenya’s most coveted financial districts.',
    url: 'https://murivest.co.ke',
    siteName: 'Murivest Realty Group Ltd',
    images: [
      {
        url: '/og-institutional-hero.png', // Recommend a high-contrast architectural shot of Nairobi Financial District
        width: 1200,
        height: 630,
        alt: 'Murivest Realty Group Ltd - Nairobi Financial District Assets',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },

  // 5. TWITTER CARD
  twitter: {
    card: 'summary_large_image',
    title: 'Murivest Realty Group | Institutional Real Estate',
    description: 'Securing trophy assets and architecting legacy wealth in the East African commercial sector.',
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
      <Hero />
      <LegacyPlanningSection />
      <TaxIntelligenceSection />
      <IndustrialLandBankingSection />
      <YieldMapLeadMagnet />
      <SmartBuildingService />
      <ExclusiveOpportunities />
      <ExecutiveTargetedSection />
      <YieldReportSection />
      <GlobalPresence />
      <TrustIndicators />
    </>
  )
}
