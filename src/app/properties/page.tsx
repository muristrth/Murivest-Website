import type { Metadata } from 'next'
import Properties from '../../components/Properties'

export const config = { amp: true }

export const metadata: Metadata = {
  title: 'Global Investment Properties - Commercial Real Estate Portfolio',
  description: 'Explore our exclusive portfolio of premium commercial properties across Africa, Asia-Pacific, Europe, and the Americas. Grade A office buildings, luxury hotels, retail centers, and industrial developments with guaranteed returns.',
  keywords: 'investment properties global, commercial properties Africa, office buildings international, hotel investments worldwide, retail properties global, industrial properties international, property portfolio global, real estate investments worldwide',
  openGraph: {
    title: 'Global Investment Properties - Commercial Real Estate Portfolio',
    description: 'Explore our exclusive portfolio of premium commercial properties worldwide.',
    images: ['/image.png'],
  },
}

export default function PropertiesPage() {
  return <Properties />
}
