import type { Metadata } from 'next'
import UKProperties from '../../components/UKProperties'

export const metadata: Metadata = {
  title: 'UK Commercial Properties | London Office Buildings | Murivest Realty',
  description: 'Premium UK commercial property investments. London office buildings, regional retail centers, and hospitality assets with institutional-grade returns for international investors.',
  keywords: 'UK commercial properties, London office buildings, UK property investment, British real estate, London commercial property, UK retail investment',
  openGraph: {
    title: 'UK Commercial Properties | London Office Buildings',
    description: 'Premium UK commercial property investments with institutional-grade returns.',
    images: ['/kenya-night.png'],
  },
}

export default function UKPropertiesPage() {
  return <UKProperties />
}