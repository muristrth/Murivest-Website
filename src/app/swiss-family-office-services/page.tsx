import type { Metadata } from 'next'
import SwissFamilyOfficeServices from '../../components/pages/SwissFamilyOfficeServices'

export const metadata: Metadata = {
  title: 'Swiss Family Office Services - Kenya Real Estate for Swiss Wealth Management',
  description: 'Specialized services for Swiss family offices investing in Kenya real estate. Private banking and wealth management solutions.',
  keywords: 'Swiss family office Kenya, Swiss wealth management, Swiss private banking Kenya, family office real estate, Swiss investment Kenya',
  openGraph: {
    title: 'Swiss Family Office Services - Kenya Real Estate for Swiss Wealth Management',
    description: 'Specialized services for Swiss family offices investing in Kenya real estate.',
    images: ['/image.png'],
  },
}

export default function SwissFamilyOfficeServicesPage() {
  return <SwissFamilyOfficeServices />
}