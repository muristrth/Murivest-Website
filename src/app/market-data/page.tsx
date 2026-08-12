import type { Metadata } from 'next'
import InstitutionalPage from '@/components/marketing/InstitutionalPage'
import { Database, LineChart, Lock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Transaction Data & Pricing Analytics | Murivest Research',
  description: 'Pricing and transaction analytics drawn from our own deal flow and market monitoring activity.',
}

export default function MarketDataPage() {
  return (
    <InstitutionalPage
      eyebrow="Research — Transaction Data"
      title="Transaction Data & Pricing Analytics"
      subtitle="Pricing evidence and transaction analytics compiled from our own advisory deal flow and ongoing market monitoring."
      sections={[
        {
          eyebrow: 'Our Data Approach',
          title: 'Evidence from real transactions, not surveys',
          body: [
            'Where publicly available transaction registries and our own closed mandates provide reliable pricing evidence, we compile and maintain it internally to inform our valuation and underwriting work.',
            'Granular transaction-level data is not published openly — verified investors on the private portal receive access to relevant pricing context alongside live off-market opportunities.',
          ],
        },
        {
          eyebrow: 'Access',
          title: 'How pricing context is shared',
          columns: 3,
          cards: [
            { icon: Database, title: 'Internal Compilation', description: 'Deal-level evidence maintained across our covered markets.' },
            { icon: LineChart, title: 'Used in Underwriting', description: 'Feeds directly into our valuation and underwriting methodology.' },
            { icon: Lock, title: 'Portal Access', description: 'Relevant pricing context shared with verified investors on request.' },
          ],
        },
      ]}
      cta={{
        title: 'Need pricing context for an active mandate?',
        body: 'Verified investors on the private portal can request relevant transaction context for a live opportunity.',
        primary: { label: 'Access the Portal', href: '/portal' },
        secondary: { label: 'Underwriting', href: '/cre-underwriting' },
      }}
    />
  )
}
