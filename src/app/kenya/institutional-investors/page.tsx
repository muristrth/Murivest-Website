import type { Metadata } from 'next'
import InstitutionalGateway from '@/components/InstitutionalInvestors'

export const metadata: Metadata = {
  title: 'Institutional Real Estate Advisory & Capital Deployment | Murivest',
  description: 'Structured engagement models for institutional capital deployment in East African commercial real estate. Bespoke advisory for pension funds, SWFs, and family offices.',
  keywords: 'institutional real estate advisory Kenya, capital deployment framework Africa, commercial real estate mandate, real estate fiduciary Kenya, institutional property investment',
  robots: 'index, follow',
}

export default function InstitutionalInvestorsPage() {
  return <InstitutionalGateway />
}