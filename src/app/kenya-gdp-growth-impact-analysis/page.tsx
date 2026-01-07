import type { Metadata } from 'next'
import KenyaGdpGrowthImpactAnalysis from '../../components/pages/KenyaGdpGrowthImpactAnalysis'

export const metadata: Metadata = {
  title: 'Kenya GDP Growth Impact Analysis - Economic Impact on Real Estate Investment',
  description: 'Analysis of Kenya GDP growth impact on commercial real estate investment. Economic indicators and property market correlation.',
  keywords: 'Kenya GDP growth analysis, economic impact real estate, Kenya economic indicators, GDP property correlation, Kenya investment analysis',
  openGraph: {
    title: 'Kenya GDP Growth Impact Analysis - Economic Impact on Real Estate Investment',
    description: 'Analysis of Kenya GDP growth impact on commercial real estate investment.',
    images: ['/image.png'],
  },
}

export default function KenyaGdpGrowthImpactAnalysisPage() {
  return <KenyaGdpGrowthImpactAnalysis />
}