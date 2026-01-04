import type { Metadata } from 'next'
import InstitutionsClient from './InstitutionsClient'

export const metadata: Metadata = {
  title: 'How We Work With Institutions | Murivest Realty Group',
  description: 'Structured engagement models for institutional capital deployment in East African commercial real estate. Retainer advisory, success fees, and dedicated mandates for $10M–$100M+ transactions.',
  keywords: [
    'Institutional Real Estate Advisory Process',
    'Capital Deployment Framework Kenya',
    'Real Estate Mandate Structure',
    'Institutional Engagement Models',
    'Commercial Real Estate Origination',
    'East Africa Investment Process',
    'Real Estate Advisory Fees',
    'Institutional Due Diligence Process'
  ].join(', '),
}

export default function HowWeWorkWithInstitutionsPage() {
  return <InstitutionsClient />
}
