import type { Metadata } from 'next'
import TypesOfCommercialRealEstate from '../../../components/pages/TypesOfCommercialRealEstate'

export const metadata: Metadata = {
  title: 'Types of Commercial Real Estate: Office, Retail, Industrial, and More',
  description: 'Detailed analysis of commercial real estate types including office, retail, industrial, multifamily, and specialized properties. Insights for institutional investors.',
  keywords: 'types of commercial real estate, office retail industrial properties, CRE asset classes, institutional real estate types',
  openGraph: {
    title: 'Types of Commercial Real Estate: Office, Retail, Industrial, and More',
    description: 'Detailed analysis of commercial real estate types including office, retail, industrial, multifamily, and specialized properties.',
    images: ['/image.png'],
  },
}

export default function TypesOfCommercialRealEstatePage() {
  return <TypesOfCommercialRealEstate />
}