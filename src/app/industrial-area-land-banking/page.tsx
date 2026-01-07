import type { Metadata } from 'next'
import IndustrialAreaLandBanking from '../../components/pages/IndustrialAreaLandBanking'

export const metadata: Metadata = {
  title: 'Industrial Area Land Banking - Strategic Real Estate Investment Nairobi',
  description: 'Strategic land banking opportunities in Nairobi\'s industrial areas. Long-term investment in logistics, manufacturing, and industrial real estate development.',
  keywords: 'industrial area land banking, Nairobi industrial real estate, land banking Kenya, logistics property investment, manufacturing land Nairobi, industrial development Kenya',
  openGraph: {
    title: 'Industrial Area Land Banking - Strategic Real Estate Investment Nairobi',
    description: 'Strategic land banking opportunities in Nairobi\'s industrial areas for long-term investment.',
    images: ['/image.png'],
  },
}

export default function IndustrialAreaLandBankingPage() {
  return <IndustrialAreaLandBanking />
}