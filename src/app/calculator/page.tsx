import type { Metadata } from 'next'
import InvestmentCalculator from '../../components/InvestmentCalculator'

export const metadata: Metadata = {
  title: 'Investment Calculator - Real Estate Returns Kenya | Murivest Realty Group',
  description: 'Calculate your potential returns from commercial real estate investments in Kenya. Interactive calculator for property investment planning with conservative projections and multiple scenarios.',
  keywords: 'investment calculator Kenya, real estate returns calculator, property investment calculator Kenya, commercial real estate ROI calculator, investment planning tool Kenya, property returns Kenya',
  openGraph: {
    title: 'Investment Calculator - Real Estate Returns Kenya | Murivest Realty Group',
    description: 'Calculate your potential returns from commercial real estate investments in Kenya.',
    images: ['/image.png'],
  },
}

export default function CalculatorPage() {
  return <InvestmentCalculator />
}