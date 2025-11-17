import type { Metadata } from 'next'
import Hero from '../components/sections/Hero'
import YieldMapLeadMagnet from '../components/sections/YieldMapLeadMagnet'
import LiveDeals from '../components/sections/LiveDeals'
import SmartBuildingService from '../components/sections/SmartBuildingService'
import YieldReportSection from '../components/sections/YieldReportSection'
import InvestorStats from '../components/sections/InvestorStats'
import ExclusiveOpportunities from '../components/sections/ExclusiveOpportunitiesNew'
import ExecutiveTargetedSection from '../components/sections/ExecutiveTargetedSection'
import GlobalPresence from '../components/sections/GlobalPresence'
import InvestmentProcess from '../components/sections/InvestmentProcess'
import TrustIndicators from '../components/sections/TrustIndicators'
import NavigationHub from '../components/sections/NavigationHub'


export const metadata: Metadata = {
  title: 'Commercial Real Estate Kenya | Commercial Investment Properties Nairobi | Murivest Realty Group',
  description: 'Leading institutional real estate investment firm in Nairobi, Kenya. Grade A office towers, high-yield commercial properties, and African REIT opportunities. Expert investment advisory for UK and Kenyan executives, family offices, and institutional investors seeking capital preservation and legacy wealth building.',
  keywords: 'institutional real estate Kenya, commercial investment properties Nairobi, grade A office towers Nairobi CBD, how to invest in real estate through company in Kenya, high yield commercial properties Africa, private real estate investment firms Kenya, property investment opportunities Kenya 2025, institutional asset managers Nairobi, African commercial real estate funds, emerging markets real estate opportunities Africa, investing in Nairobi commercial assets from UK, real estate co-ownership Africa, best performing office markets Africa 2025, African REIT investment opportunities, discreet real estate investment advisory, family office investment opportunities Africa, legacy real estate investments, capital preservation real estate strategies, old money real estate investments, Africa private wealth real estate deal, commercial real estate Kenya, property investment Nairobi, real estate investment firm Kenya, commercial property Nairobi, investment properties Kenya, property management Kenya, real estate returns Kenya, Murivest Realty Group, passive income properties Kenya',
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
      <YieldMapLeadMagnet />
      <LiveDeals />
      <SmartBuildingService />
      <InvestorStats />
      <ExclusiveOpportunities />
      <ExecutiveTargetedSection />
      <YieldReportSection />
      <NavigationHub />
      <GlobalPresence />
      <InvestmentProcess />
      <TrustIndicators />
    </>
  )
}
