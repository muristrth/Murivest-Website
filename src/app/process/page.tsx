import type { Metadata } from 'next'
import InvestmentProcess from '../../components/sections/InvestmentProcess'

export const metadata: Metadata = {
  title: 'Investment Process - How We Preserve & Grow Wealth | Murivest Realty',
  description: 'Discover our time-tested investment methodology for commercial real estate in Kenya. From due diligence to portfolio management, learn how we protect and multiply generational wealth.',
  keywords: 'real estate investment process Kenya, property investment methodology, commercial real estate due diligence Kenya, investment strategy Kenya, wealth preservation Kenya, property investment steps',
  openGraph: {
    title: 'Investment Process - How We Preserve & Grow Wealth | Murivest Realty',
    description: 'Discover our time-tested investment methodology for commercial real estate in Kenya.',
    images: ['/image.png'],
  },
}

export default function ProcessPage() {
  return <InvestmentProcess />
}