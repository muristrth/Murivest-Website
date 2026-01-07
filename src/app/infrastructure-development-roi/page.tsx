import type { Metadata } from 'next'
import InfrastructureDevelopmentRoi from '../../components/pages/InfrastructureDevelopmentRoi'

export const metadata: Metadata = {
  title: 'Infrastructure Development ROI - Kenya Infrastructure Investment Returns',
  description: 'Infrastructure development ROI analysis in Kenya. Investment returns from transportation, energy, and urban development projects.',
  keywords: 'infrastructure development ROI Kenya, infrastructure investment returns, Kenya development projects, infrastructure ROI analysis',
  openGraph: {
    title: 'Infrastructure Development ROI - Kenya Infrastructure Investment Returns',
    description: 'Infrastructure development ROI analysis in Kenya.',
    images: ['/image.png'],
  },
}

export default function InfrastructureDevelopmentRoiPage() {
  return <InfrastructureDevelopmentRoi />
}