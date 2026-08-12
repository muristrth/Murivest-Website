import type { Metadata } from 'next'
import InstitutionalPage from '@/components/marketing/InstitutionalPage'
import { Leaf, Users2, ShieldCheck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'ESG Commitment | Murivest Advisory',
  description: 'Our approach to environmental, social, and governance considerations in advisory engagements.',
}

export default function EsgPage() {
  return (
    <InstitutionalPage
      eyebrow="About — Governance"
      title="ESG Commitment"
      subtitle="Environmental, social, and governance considerations shape how we advise on assets — from retrofit economics to the KYC discipline behind every mandate."
      sections={[
        {
          eyebrow: 'Our View',
          title: 'ESG as underwriting discipline, not marketing',
          body: [
            'We treat environmental performance as a value driver we underwrite, not a claim we make without evidence. Our sustainability advisory assesses regulatory exposure and retrofit economics on a case-by-case basis.',
            'On governance, our KYC/AML and mandate documentation standards apply to every engagement, regardless of size.',
          ],
        },
        {
          eyebrow: 'Pillars',
          title: 'How ESG shows up in our work',
          columns: 3,
          cards: [
            { icon: Leaf, title: 'Environmental', description: 'Energy performance and retrofit economics assessed within our due diligence process.', href: '/services/sustainability' },
            { icon: Users2, title: 'Social', description: 'Tenant relations and community impact considered in asset and development advisory.' },
            { icon: ShieldCheck, title: 'Governance', description: 'KYC/AML verification and formal mandate documentation on every engagement.', href: '/compliance' },
          ],
        },
      ]}
      cta={{
        title: 'Assessing the ESG profile of an asset?',
        body: 'Our sustainability advisory desk can evaluate regulatory exposure and retrofit economics.',
        primary: { label: 'Sustainability Advisory', href: '/services/sustainability' },
        secondary: { label: 'Contact Us', href: '/contact' },
      }}
    />
  )
}
