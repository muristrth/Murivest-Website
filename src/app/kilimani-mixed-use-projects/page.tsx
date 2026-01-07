import type { Metadata } from 'next'
import KilimaniMixedUseProjects from '../../components/pages/KilimaniMixedUseProjects'

export const metadata: Metadata = {
  title: 'Kilimani Mixed-Use Projects - Modern Real Estate Development Nairobi',
  description: 'Contemporary mixed-use developments in Kilimani, Nairobi. Integrated commercial and residential projects combining office, retail, and living spaces.',
  keywords: 'Kilimani mixed-use projects, Nairobi mixed-use development, commercial residential Nairobi, Kilimani property investment, modern real estate Kenya, integrated development Nairobi',
  openGraph: {
    title: 'Kilimani Mixed-Use Projects - Modern Real Estate Development Nairobi',
    description: 'Contemporary mixed-use developments in Kilimani combining commercial and residential spaces.',
    images: ['/image.png'],
  },
}

export default function KilimaniMixedUseProjectsPage() {
  return <KilimaniMixedUseProjects />
}