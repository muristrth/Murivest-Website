import type { Metadata } from 'next'
import Hero from '../components/sections/Hero'
import InvestorStats from '../components/sections/InvestorStats'
import ExclusiveOpportunities from '../components/sections/ExclusiveOpportunitiesNew'
import GlobalPresence from '../components/sections/GlobalPresence'
import InvestmentProcess from '../components/sections/InvestmentProcess'
import TrustIndicators from '../components/sections/TrustIndicators'
import NavigationHub from '../components/sections/NavigationHub'

export const metadata: Metadata = {
  title: 'Commercial Real Estate Investment Kenya - Murivest Realty Group',
  description: 'Premier commercial real estate investment firm in Nairobi, Kenya. Discover curated investment opportunities with 15%+ annual returns. Expert property management and wealth-building strategies for discerning investors.',
  keywords: 'commercial real estate Kenya, property investment Nairobi, real estate investment firm Kenya, commercial property Nairobi, investment properties Kenya, property management Kenya, real estate returns Kenya, Murivest Realty Group, passive income properties Kenya',
  openGraph: {
    title: 'Commercial Real Estate Investment Kenya - Murivest Realty Group',
    description: 'Premier commercial real estate investment firm in Nairobi, Kenya. Discover curated investment opportunities with 15%+ annual returns.',
    images: ['/kenya-night.png'],
  },
  alternates: {
    canonical: 'https://murivest.co.ke',
  },
  other: {
    'sitemap': 'https://murivest.co.ke/sitemap.xml',
  },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <InvestorStats />
      <ExclusiveOpportunities />
      <NavigationHub />
      <GlobalPresence />
      <InvestmentProcess />
      <TrustIndicators />
    </>
  )
}