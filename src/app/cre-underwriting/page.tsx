
import type { Metadata } from 'next'
import CreUnderwriting from '@/components/CreUnderwriting'

export const metadata: Metadata = {
  title: 'Commercial Real Estate Underwriting Murivest Realty Group - Premier Real Estate Investment Consultations',
  description: 'Get instant underwriting analysis and generate a Kenya-law Letter of Intent for commercial real estate acquisitions with Murivest Realty Group.',
  keywords: 'commercial real estate underwriting Kenya, Kenya-law Letter of Intent, Murivest Realty Group, real estate investment Kenya, property acquisition Kenya, commercial property analysis Kenya',
  openGraph: {
    title: 'Commercial Real Estate Underwriting - Murivest Realty Group',
    description: 'Get instant underwriting analysis and generate a Kenya-law Letter of Intent for commercial real estate acquisitions with Murivest Realty Group.',
    images: ['/image.webp'],
  },
}

export default function CreUnderwritingPage() {
  return <CreUnderwriting />
}

