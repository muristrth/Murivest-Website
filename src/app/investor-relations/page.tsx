import type { Metadata } from 'next'
import InstitutionalPage from '@/components/marketing/InstitutionalPage'
import { KeyRound, ShieldCheck, MessageSquare } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Investor Relations | Murivest Advisory',
  description: 'Information for capital partners and registered investors engaging with Murivest mandates.',
}

export default function InvestorRelationsPage() {
  return (
    <InstitutionalPage
      eyebrow="About — Governance"
      title="Investor Relations"
      subtitle="For capital partners and registered investors engaging with active or prospective Murivest mandates."
      sections={[
        {
          eyebrow: 'Engagement Model',
          title: 'A relationship, not a fund subscription',
          body: [
            'Murivest does not operate a pooled fund. Capital partners engage with us on a per-mandate basis, with terms, scope, and reporting defined in a written mandate letter.',
            'Registered investors on our private portal receive access to off-market opportunities and relevant transaction context, subject to KYC/AML verification.',
          ],
        },
        {
          eyebrow: 'For Capital Partners',
          title: 'How to engage',
          columns: 3,
          cards: [
            { icon: KeyRound, title: 'Register on the Portal', description: 'Create an account and complete verification to access live mandates.', href: '/portal' },
            { icon: ShieldCheck, title: 'KYC/AML Verification', description: 'Standard identity and source-of-funds verification prior to engagement.', href: '/compliance' },
            { icon: MessageSquare, title: 'Speak with Advisory', description: 'Discuss mandate scope and reporting expectations directly.', href: '/contact' },
          ],
        },
      ]}
      cta={{
        title: 'Interested in placing or reviewing capital?',
        body: 'Register on the private portal, or speak directly with our investment desk.',
        primary: { label: 'Access the Portal', href: '/portal' },
        secondary: { label: 'Contact Advisory', href: '/contact' },
      }}
    />
  )
}
