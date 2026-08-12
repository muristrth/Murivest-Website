import type { Metadata } from 'next'
import InstitutionalPage from '@/components/marketing/InstitutionalPage'
import { Building, FileSignature, Search, Scale } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Leasing & Tenant Representation | Murivest Advisory',
  description: 'Landlord and tenant representation for commercial leasing across office, retail, and industrial assets.',
}

export default function LeasingPage() {
  return (
    <InstitutionalPage
      eyebrow="Advisory — Leasing"
      title="Leasing & Tenant Representation"
      subtitle="Representing landlords in letting vacant space and occupiers in securing premises — with the market data and negotiating leverage to reach commercially sound terms."
      sections={[
        {
          eyebrow: 'Two-Sided Expertise',
          title: 'Landlord and occupier representation',
          body: [
            'On the landlord side, we manage marketing, prospective tenant qualification, and lease negotiation to minimise void periods while protecting rent and covenant quality.',
            'On the occupier side, we identify suitable premises against a defined brief and negotiate terms — rent-free periods, fit-out contributions, and break options — on the tenant\'s behalf.',
          ],
        },
        {
          eyebrow: 'Scope',
          title: 'Where our leasing advisory adds value',
          columns: 4,
          cards: [
            { icon: Building, title: 'Vacancy Marketing', description: 'Positioning and marketing vacant space to qualified occupiers.' },
            { icon: Search, title: 'Occupier Search', description: 'Sourcing premises against a defined space and location brief.' },
            { icon: FileSignature, title: 'Lease Negotiation', description: 'Negotiating rent, incentives, and lease terms for either side.' },
            { icon: Scale, title: 'Renewal Advisory', description: 'Advising on lease renewals, rent reviews, and break clause strategy.' },
          ],
        },
      ]}
      cta={{
        title: 'Letting space, or searching for premises?',
        body: 'Our leasing desk represents both landlords and occupiers across our covered markets.',
        primary: { label: 'Contact Advisory', href: '/contact' },
        secondary: { label: 'View Markets', href: '/markets' },
      }}
    />
  )
}
