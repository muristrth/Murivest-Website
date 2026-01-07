import type { Metadata } from 'next'
import CanadianRrspKenyaInvestments from '../../components/pages/CanadianRrspKenyaInvestments'

export const metadata: Metadata = {
  title: 'Canadian RRSP Kenya Investments - RRSP Real Estate Investment in Nairobi',
  description: 'Canadian RRSP investment opportunities in Kenya real estate. Diversify RRSP portfolios with East African commercial property.',
  keywords: 'Canadian RRSP Kenya, RRSP real estate investment, Canadian pension Kenya, RRSP diversification, Canada pension fund Kenya',
  openGraph: {
    title: 'Canadian RRSP Kenya Investments - RRSP Real Estate Investment in Nairobi',
    description: 'Canadian RRSP investment opportunities in Kenya real estate.',
    images: ['/image.png'],
  },
}

export default function CanadianRrspKenyaInvestmentsPage() {
  return <CanadianRrspKenyaInvestments />
}