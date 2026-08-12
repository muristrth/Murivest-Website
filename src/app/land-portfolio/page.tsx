import type { Metadata } from 'next'
import InstitutionalPage from '@/components/marketing/InstitutionalPage'
import { Map, TreeDeciduous, Landmark, FileSearch } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Land Banking & Development Sites | Murivest Advisory',
  description: 'Strategic land acquisition, banking, and development-site sourcing advisory across our covered markets.',
}

export default function LandPortfolioPage() {
  return (
    <InstitutionalPage
      eyebrow="Specialist — Land Banking"
      title="Strategic Land Acquisition & Banking"
      subtitle="Sourcing, title verification, and holding-strategy advisory for land positioned for future development, banking, or repositioning."
      sections={[
        {
          eyebrow: 'Why Land',
          title: 'Land as a distinct asset discipline',
          body: [
            'Land carries a different risk and diligence profile to income-producing real estate — title chain, zoning trajectory, and infrastructure access drive value more than current cash flow.',
            'We source parcels against a defined acquisition brief, verify title and encumbrances, and advise on a holding or development strategy suited to the principal\'s time horizon.',
          ],
        },
        {
          eyebrow: 'Scope',
          title: 'What a land mandate covers',
          columns: 4,
          cards: [
            { icon: Map, title: 'Site Sourcing', description: 'Identifying parcels aligned to location, size, and use-case criteria.' },
            { icon: FileSearch, title: 'Title Verification', description: 'Chain-of-title, encumbrance, and boundary verification prior to offer.' },
            { icon: Landmark, title: 'Zoning & Access', description: 'Assessing zoning trajectory and infrastructure access as value drivers.' },
            { icon: TreeDeciduous, title: 'Holding Strategy', description: 'Advising on bank, develop, or dispose strategies over time.' },
          ],
        },
      ]}
      cta={{
        title: 'Looking to acquire or dispose of land?',
        body: 'Our land banking desk works alongside development advisory to structure the right holding strategy.',
        primary: { label: 'Contact Advisory', href: '/contact' },
        secondary: { label: 'Development Advisory', href: '/services/development' },
      }}
    />
  )
}
