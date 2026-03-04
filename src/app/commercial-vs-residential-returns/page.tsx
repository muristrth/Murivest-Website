import type { Metadata } from 'next'
import CommercialVsResidentialReturns from '../../../components/pages/CommercialVsResidentialReturns'

export const metadata: Metadata = {
  title: 'Why Commercial Real Estate Outperforms Residential Investments',
  description: 'Analysis of why commercial real estate delivers high returns compared to residential properties, with data on yields, risks, and institutional strategies.',
  keywords: 'commercial vs residential returns, CRE outperforms residential, real estate investment comparison, institutional property returns',
  openGraph: {
    title: 'Why Commercial Real Estate Outperforms Residential Investments',
    description: 'Analysis of why commercial real estate delivers high returns compared to residential properties.',
    images: ['/image.png'],
  },
}

export default function CommercialVsResidentialReturnsPage() {
  return <CommercialVsResidentialReturns />
}