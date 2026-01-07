import type { Metadata } from 'next'
import CommercialRealEstateNairobi from '../../components/pages/CommercialRealEstateNairobi'

export const metadata: Metadata = {
  title: 'Commercial Real Estate Nairobi - Prime Investment Opportunities Kenya',
  description: 'Discover premium commercial real estate investment opportunities in Nairobi, Kenya. Office buildings, retail spaces, and industrial properties with institutional-grade returns.',
  keywords: 'commercial real estate Nairobi, office investment Kenya, retail property Nairobi, industrial real estate Kenya, commercial property investment, Nairobi real estate market',
  openGraph: {
    title: 'Commercial Real Estate Nairobi - Prime Investment Opportunities Kenya',
    description: 'Discover premium commercial real estate investment opportunities in Nairobi, Kenya.',
    images: ['/image.png'],
  },
}

export default function CommercialRealEstateNairobiPage() {
  return <CommercialRealEstateNairobi />
}