import type { Metadata } from 'next'
import PricingSection from '../../components/sections/PricingSection'

export const metadata: Metadata = {
  title: 'Pricing - Murivest Realty Group',
  description: 'Transparent pricing for CRE brokerage and AssetCare+ services. No hidden fees, clear costs for commercial real estate deals and smart building management.',
}

export default function PricingPage() {
  return <PricingSection />
}