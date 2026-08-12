import type { Metadata } from 'next'
import InstitutionalPage from '@/components/marketing/InstitutionalPage'
import { Target, Users, FileSignature, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Investment Sales | Murivest Advisory',
  description: 'Capital placement and disposal advisory for institutional-grade commercial real estate across East Africa and partner markets.',
}

export default function InvestmentSalesPage() {
  return (
    <InstitutionalPage
      eyebrow="Advisory — Investment Sales"
      title="Capital Placement for Institutional-Grade Real Estate"
      subtitle="We originate, position, and place commercial real estate mandates with qualified institutional and private capital, managing the transaction from origination through to completion."
      sections={[
        {
          eyebrow: 'How We Work',
          title: 'A mandate-based approach to disposals and placements',
          body: [
            'Every investment sale begins with a formal mandate. We work exclusively for the principal — vendor or capital source — and never act as a pooled investment vehicle or licensed fund manager.',
            'Our role is to originate qualified counterparties, structure the transaction terms, and manage the process through legal completion, drawing on in-house underwriting, valuation, and due diligence capability.',
          ],
        },
        {
          eyebrow: 'Scope',
          title: 'Where we add value',
          columns: 3,
          cards: [
            {
              icon: Target,
              title: 'Buy-Side Origination',
              description: 'Sourcing off-market and on-market opportunities aligned to a defined acquisition mandate.',
            },
            {
              icon: Users,
              title: 'Sell-Side Positioning',
              description: 'Structuring the disposal narrative, data room, and counterparty targeting for vendors.',
            },
            {
              icon: FileSignature,
              title: 'Transaction Structuring',
              description: 'Negotiating commercial terms and coordinating legal, tax, and title workstreams.',
            },
            {
              icon: TrendingUp,
              title: 'Post-Close Handover',
              description: 'Coordinating asset and property management handover once a transaction completes.',
            },
          ],
        },
      ]}
      cta={{
        title: 'Have a mandate to place or a disposal to structure?',
        body: 'Speak with our investment sales desk to discuss scope, timelines, and qualification requirements.',
        primary: { label: 'Submit a Mandate', href: '/sell' },
        secondary: { label: 'Contact Advisory', href: '/contact' },
      }}
    />
  )
}
