import type { Metadata } from 'next'
import InstitutionalPage from '@/components/marketing/InstitutionalPage'
import { Building, Home, Users2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Residential Portfolio | Murivest Advisory',
  description: 'Multifamily and residential investment mandates across our covered markets.',
}

export default function ResidentialPortfolioPage() {
  return (
    <InstitutionalPage
      eyebrow="Portfolio — By Asset Class"
      title="Residential: Multifamily Investment"
      subtitle="Income-producing multifamily assets and residential development sites for institutional and private capital."
      sections={[
        {
          eyebrow: 'Coverage',
          title: 'The residential asset classes we advise on',
          columns: 3,
          cards: [
            { icon: Building, title: 'Multifamily', description: 'Stabilised income-producing apartment assets.' },
            { icon: Home, title: 'Build-to-Rent', description: 'Purpose-built rental schemes for institutional ownership.' },
            { icon: Users2, title: 'Co-Living & Student', description: 'Alternative residential formats with distinct demand drivers.' },
          ],
        },
        {
          eyebrow: 'Where to Look',
          title: 'Browse residential listings by market',
          body: [
            'Active residential mandates are organised by market. Select a country to view current listings.',
          ],
        },
      ]}
      cta={{
        title: 'Explore residential listings by market',
        body: 'Current mandates are organised by country — start with the market you are interested in.',
        primary: { label: 'Browse Markets', href: '/markets' },
        secondary: { label: 'Asset Management', href: '/services/asset-management' },
      }}
    />
  )
}
