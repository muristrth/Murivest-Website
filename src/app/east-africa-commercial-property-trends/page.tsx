import type { Metadata } from 'next'
import EastAfricaCommercialPropertyTrends from '../../components/pages/EastAfricaCommercialPropertyTrends'

export const metadata: Metadata = {
  title: 'East Africa Commercial Property Trends - Regional Real Estate Market Analysis',
  description: 'East Africa commercial property trends and market analysis. Regional investment opportunities across Kenya, Tanzania, and Uganda.',
  keywords: 'East Africa property trends, regional real estate analysis, East Africa commercial property, regional investment Kenya Tanzania Uganda',
  openGraph: {
    title: 'East Africa Commercial Property Trends - Regional Real Estate Market Analysis',
    description: 'East Africa commercial property trends and market analysis.',
    images: ['/image.png'],
  },
}

export default function EastAfricaCommercialPropertyTrendsPage() {
  return <EastAfricaCommercialPropertyTrends />
}