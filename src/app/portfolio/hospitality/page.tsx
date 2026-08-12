import type { Metadata } from 'next'
import InstitutionalPage from '@/components/marketing/InstitutionalPage'
import { Hotel, Palmtree, ConciergeBell } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Hospitality Portfolio | Murivest Advisory',
  description: 'Hotel and resort investment mandates across our covered markets.',
}

export default function HospitalityPortfolioPage() {
  return (
    <InstitutionalPage
      eyebrow="Portfolio — By Asset Class"
      title="Hospitality: Hotels & Resorts"
      subtitle="Hotel and resort investment mandates, from branded operator agreements to independent leisure assets."
      sections={[
        {
          eyebrow: 'Coverage',
          title: 'The hospitality asset classes we advise on',
          columns: 3,
          cards: [
            { icon: Hotel, title: 'Branded Hotels', description: 'Assets under international operator management agreements.' },
            { icon: Palmtree, title: 'Resorts & Leisure', description: 'Coastal and destination leisure assets.' },
            { icon: ConciergeBell, title: 'Serviced Apartments', description: 'Extended-stay and serviced residential formats.' },
          ],
        },
        {
          eyebrow: 'Where to Look',
          title: 'Browse hospitality listings by market',
          body: [
            'Active hospitality mandates are organised by market. Select a country to view current listings.',
          ],
        },
      ]}
      cta={{
        title: 'Explore hospitality listings by market',
        body: 'Current mandates are organised by country — start with the market you are interested in.',
        primary: { label: 'Browse Markets', href: '/markets' },
        secondary: { label: 'Development Advisory', href: '/services/development' },
      }}
    />
  )
}
