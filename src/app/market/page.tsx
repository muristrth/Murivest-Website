import type { Metadata } from 'next'
import MarketIntelligence from '../../components/MarketIntelligence'

export const metadata: Metadata = {
  title: 'Kenya Real Estate Market Intelligence - Investment Analysis | Murivest',
  description: 'Comprehensive analysis of Kenya\'s commercial real estate market. Expert insights on GDP growth, infrastructure development, and investment opportunities in East Africa\'s gateway economy.',
  keywords: 'Kenya real estate market analysis, commercial property market Kenya, real estate investment analysis Kenya, property market trends Nairobi, Kenya GDP real estate impact, East Africa property investment',
  openGraph: {
    title: 'Kenya Real Estate Market Intelligence - Investment Analysis | Murivest',
    description: 'Comprehensive analysis of Kenya\'s commercial real estate market.',
    images: ['/image.png'],
  },
}

export default function MarketPage() {
  return <MarketIntelligence />
}