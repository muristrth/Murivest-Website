import type { Metadata } from 'next'
import PricingSection from '../../components/sections/PricingSection'

export const metadata: Metadata = {
  title: 'Pricing - Murivest Realty Group',
  description: 'Transparent pricing for CRE brokerage and AssetCare+ services. No hidden fees, clear costs for commercial real estate deals and smart building management.',
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif font-light text-white mb-4">
            Transparent Pricing
          </h1>
          <p className="text-gray-400 font-serif text-lg">
            No surprises, no hidden fees. Clear costs for premium services.
          </p>
        </div>
        <PricingSection />
      </div>
    </div>
  )
}