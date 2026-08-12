import type { Metadata } from 'next'
import InstitutionalPage from '@/components/marketing/InstitutionalPage'
import { PieChart, RefreshCw, ShieldCheck, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Asset Management | Murivest Advisory',
  description: 'Portfolio-level asset management advisory focused on income optimisation, capital planning, and risk mitigation.',
}

export default function AssetManagementPage() {
  return (
    <InstitutionalPage
      eyebrow="Management — Asset Management"
      title="Asset Management & Portfolio Optimisation"
      subtitle="We advise owners on the ongoing performance of held assets — income optimisation, capital expenditure planning, and disposal timing — across the holding period."
      sections={[
        {
          eyebrow: 'Mandate Scope',
          title: 'Advisory across the hold period',
          body: [
            'Asset management engagements typically run alongside a property management provider, with Murivest acting as the owner-side advisory layer responsible for strategy, budget review, and performance oversight.',
            'We report directly to the principal on income trajectory, tenant risk, capital works, and market positioning, recommending action at each decision point.',
          ],
        },
        {
          eyebrow: 'Core Functions',
          title: 'What an asset management mandate covers',
          columns: 4,
          cards: [
            { icon: PieChart, title: 'Income Optimisation', description: 'Reviewing rent roll composition, lease expiry profile, and re-letting strategy.' },
            { icon: RefreshCw, title: 'Capital Planning', description: 'Prioritising capital expenditure against income and value impact.' },
            { icon: ShieldCheck, title: 'Risk Oversight', description: 'Monitoring tenant covenant strength and insurance adequacy.' },
            { icon: TrendingUp, title: 'Exit Timing', description: 'Advising on hold-versus-sell decisions relative to market cycle.' },
          ],
        },
      ]}
      cta={{
        title: 'Looking for owner-side oversight of a held asset?',
        body: 'Engage our asset management desk to establish reporting cadence and a capital plan.',
        primary: { label: 'Contact Advisory', href: '/contact' },
        secondary: { label: 'Property Management', href: '/services/property-management' },
      }}
    />
  )
}
