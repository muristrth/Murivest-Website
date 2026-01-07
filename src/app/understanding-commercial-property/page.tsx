import type { Metadata } from 'next'
import UnderstandingCommercialProperty from '../../../components/pages/UnderstandingCommercialProperty'

export const metadata: Metadata = {
  title: 'Understanding Commercial Property: Core Definitions and Classifications',
  description: 'Comprehensive guide to commercial property definitions, classifications, and key characteristics for institutional investors. Understand office, retail, industrial, and multifamily assets.',
  keywords: 'commercial property definitions, commercial real estate classifications, office retail industrial properties, institutional real estate investment, CRE fundamentals',
  openGraph: {
    title: 'Understanding Commercial Property: Core Definitions and Classifications',
    description: 'Comprehensive guide to commercial property definitions, classifications, and key characteristics for institutional investors.',
    images: ['/image.png'],
  },
}

export default function UnderstandingCommercialPropertyPage() {
  return <UnderstandingCommercialProperty />
}