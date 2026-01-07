import type { Metadata } from 'next'
import UkPensionFundOpportunities from '../../components/pages/UkPensionFundOpportunities'

export const metadata: Metadata = {
  title: 'UK Pension Fund Opportunities - Kenya Real Estate Investment for British Pensions',
  description: 'UK pension fund investment opportunities in Kenya real estate. Diversify pension portfolios with East African commercial property.',
  keywords: 'UK pension fund Kenya, British pension investment, pension diversification Kenya, UK pension real estate, Kenya property pension funds',
  openGraph: {
    title: 'UK Pension Fund Opportunities - Kenya Real Estate Investment for British Pensions',
    description: 'UK pension fund investment opportunities in Kenya real estate.',
    images: ['/image.png'],
  },
}

export default function UkPensionFundOpportunitiesPage() {
  return <UkPensionFundOpportunities />
}