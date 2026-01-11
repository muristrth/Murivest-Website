import type { Metadata } from 'next'
import InvestmentCalculator from '../../components/InvestmentCalculator'

export const metadata: Metadata = {
  title: 'Commercial Property Calculators - Cap Rate, NOI, IRR, ROI | Murivest Realty Group',
  description: 'Professional suite of commercial real estate calculators including cap rate calculator, NOI calculator, IRR calculator, ROI calculator, mortgage calculator, and more. Essential tools for property investment analysis in Kenya.',
  keywords: 'commercial property calculator, cap rate calculator, NOI calculator, IRR calculator, ROI calculator, cash on cash return calculator, commercial mortgage calculator, property valuation calculator, real estate investment calculator Kenya, commercial real estate tools',
  openGraph: {
    title: 'Commercial Property Calculators - Cap Rate, NOI, IRR, ROI | Murivest Realty Group',
    description: 'Professional suite of commercial real estate calculators for investment analysis in Kenya.',
    images: ['/image.png'],
  },
}

export default function CalculatorPage() {
  return <InvestmentCalculator />
}
