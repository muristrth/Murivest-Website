import type { Metadata } from 'next'
import InstitutionalPage from '@/components/marketing/InstitutionalPage'
import { Calculator, ScrollText, Landmark, LineChart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Valuation & Appraisal Advisory | Murivest Advisory',
  description: 'Independent valuation and appraisal advisory for commercial real estate assets, portfolios, and lending purposes.',
}

export default function ValuationPage() {
  return (
    <InstitutionalPage
      eyebrow="Advisory — Valuation"
      title="Valuation & Appraisal Advisory"
      subtitle="Defensible, methodology-led valuation opinions for acquisition, disposal, financing, and portfolio reporting purposes."
      sections={[
        {
          eyebrow: 'Our Approach',
          title: 'Grounded in comparable evidence and cash flow fundamentals',
          body: [
            'We build valuation opinions using income capitalisation, discounted cash flow, and comparable transaction evidence drawn from our own deal flow and market monitoring — not desktop estimates.',
            'Every opinion is delivered with the underlying assumptions and evidence disclosed, so principals and their counsel can interrogate the basis of value.',
          ],
        },
        {
          eyebrow: 'Use Cases',
          title: 'Where our valuation advisory is engaged',
          columns: 4,
          cards: [
            { icon: Calculator, title: 'Acquisition Support', description: 'Independent basis-of-value checks ahead of an offer or bid.' },
            { icon: ScrollText, title: 'Disposal Positioning', description: 'Evidence-based asking price ranges for vendor mandates.' },
            { icon: Landmark, title: 'Lending & Security', description: 'Valuation opinions to support debt financing and security review.' },
            { icon: LineChart, title: 'Portfolio Reporting', description: 'Periodic re-valuation for portfolio and stakeholder reporting.' },
          ],
        },
      ]}
      cta={{
        title: 'Need an independent valuation opinion?',
        body: 'Our valuation desk works alongside underwriting and due diligence to deliver a defensible basis of value.',
        primary: { label: 'Request an Engagement', href: '/contact' },
        secondary: { label: 'View Underwriting', href: '/cre-underwriting' },
      }}
    />
  )
}
