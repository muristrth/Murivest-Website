import type { Metadata } from 'next'
import NairobiOfficeSpaceDemandStudy from '../../components/pages/NairobiOfficeSpaceDemandStudy'

export const metadata: Metadata = {
  title: 'Nairobi Office Space Demand Study - Office Market Analysis Kenya',
  description: 'Comprehensive study of Nairobi office space demand. Market analysis, occupancy rates, and future demand projections for commercial office space.',
  keywords: 'Nairobi office space demand, office market analysis Kenya, commercial office space Nairobi, office occupancy rates Kenya',
  openGraph: {
    title: 'Nairobi Office Space Demand Study - Office Market Analysis Kenya',
    description: 'Comprehensive study of Nairobi office space demand and market analysis.',
    images: ['/image.png'],
  },
}

export default function NairobiOfficeSpaceDemandStudyPage() {
  return <NairobiOfficeSpaceDemandStudy />
}