import type { Metadata } from 'next'
import UKProperties from '../../components/UKProperties'

export const metadata: Metadata = {
  title: 'Europe Commercial Properties | UK, Germany, France | Murivest Realty',
  description: 'Premium European commercial property investments. UK, Germany, and France commercial real estate with institutional-grade returns for international investors.',
  keywords: 'Europe commercial properties, UK commercial property, German commercial real estate, Paris office buildings, European property investment',
  openGraph: {
    title: 'Europe Commercial Properties | Institutional Grade',
    description: 'Premium European commercial property investments with institutional-grade returns.',
    images: ['/kenya-night.png'],
  },
}

export default function EuropeCommercialPropertiesPage() {
  return <UKProperties />
}
