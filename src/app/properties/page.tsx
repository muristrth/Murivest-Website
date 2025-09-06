import type { Metadata } from 'next'
import Properties from '../../components/Properties'

export const metadata: Metadata = {
  title: 'Premium Investment Properties Kenya - Commercial Real Estate Portfolio',
  description: 'Explore our exclusive portfolio of premium commercial properties in Kenya. Grade A office buildings, luxury hotels, retail centers, and industrial developments with guaranteed returns.',
  keywords: 'investment properties Kenya, commercial properties Nairobi, office buildings Kenya, hotel investments Kenya, retail properties Kenya, industrial properties Kenya, property portfolio Kenya, real estate investments Nairobi',
  openGraph: {
    title: 'Premium Investment Properties Kenya - Commercial Real Estate Portfolio',
    description: 'Explore our exclusive portfolio of premium commercial properties in Kenya.',
    images: ['/image.png'],
  },
}

export default function PropertiesPage() {
  return <Properties />
}