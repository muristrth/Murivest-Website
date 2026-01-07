import type { Metadata } from 'next'
import KenyaREITInvestmentGuide from '../../components/pages/KenyaREITInvestmentGuide'

export const metadata: Metadata = {
  title: 'Kenya REIT Investment Guide - Real Estate Investment Trusts Kenya',
  description: 'Comprehensive guide to investing in Kenya REITs. Learn about REIT regulations, tax benefits, and institutional-grade real estate investment opportunities in Kenya.',
  keywords: 'Kenya REIT investment, real estate investment trusts Kenya, REIT regulations Kenya, property investment Kenya, tax benefits REIT Kenya, institutional real estate Kenya',
  openGraph: {
    title: 'Kenya REIT Investment Guide - Real Estate Investment Trusts Kenya',
    description: 'Comprehensive guide to investing in Kenya REITs and institutional real estate opportunities.',
    images: ['/image.png'],
  },
}

export default function KenyaREITInvestmentGuidePage() {
  return <KenyaREITInvestmentGuide />
}