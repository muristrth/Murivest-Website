import type { Metadata } from 'next'
import PropertyDetail from '../../../components/PropertyDetail'

export const metadata: Metadata = {
  title: 'Property Details - Premium Investment Opportunity Kenya',
  description: 'Detailed information about this exclusive commercial property investment opportunity in Kenya. View specifications, returns, location details, and investment terms.',
  keywords: 'property details Kenya, commercial property investment, real estate opportunity Kenya, property specifications Nairobi, investment returns Kenya',
  openGraph: {
    title: 'Property Details - Premium Investment Opportunity Kenya',
    description: 'Detailed information about this exclusive commercial property investment opportunity in Kenya.',
    images: ['/image.png'],
  },
}

export default function PropertyDetailPage() {
  return <PropertyDetail />
}