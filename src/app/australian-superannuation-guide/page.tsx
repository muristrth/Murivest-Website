import type { Metadata } from 'next'
import AustralianSuperannuationGuide from '../../components/pages/AustralianSuperannuationGuide'

export const metadata: Metadata = {
  title: 'Australian Superannuation Guide - Super Fund Investment in Kenya Real Estate',
  description: 'Australian superannuation fund investment opportunities in Kenya real estate. Diversify super portfolios with Nairobi commercial property.',
  keywords: 'Australian superannuation Kenya, super fund investment Kenya, Australian pension Kenya, super diversification, Australia super real estate',
  openGraph: {
    title: 'Australian Superannuation Guide - Super Fund Investment in Kenya Real Estate',
    description: 'Australian superannuation fund investment opportunities in Kenya real estate.',
    images: ['/image.png'],
  },
}

export default function AustralianSuperannuationGuidePage() {
  return <AustralianSuperannuationGuide />
}