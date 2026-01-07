import type { Metadata } from 'next'
import EuropeanInvestorTaxGuide from '../../components/pages/EuropeanInvestorTaxGuide'

export const metadata: Metadata = {
  title: 'European Investor Tax Guide - Kenya Real Estate Tax Benefits for EU Investors',
  description: 'Comprehensive tax guide for European investors in Kenya real estate. Understand tax treaties, withholding taxes, and investment incentives.',
  keywords: 'European investor tax guide Kenya, EU tax benefits Kenya, real estate tax Kenya, investment incentives Kenya, tax treaties Kenya',
  openGraph: {
    title: 'European Investor Tax Guide - Kenya Real Estate Tax Benefits for EU Investors',
    description: 'Comprehensive tax guide for European investors in Kenya real estate.',
    images: ['/image.png'],
  },
}

export default function EuropeanInvestorTaxGuidePage() {
  return <EuropeanInvestorTaxGuide />
}