import type { Metadata } from 'next'
import InstitutionalPage from '@/components/marketing/InstitutionalPage'
import { ShieldCheck, FileCheck, UserCheck, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Compliance | Murivest Advisory',
  description: 'Our regulatory compliance framework — KYC/AML process, mandate documentation, and disclosure standards.',
}

export default function CompliancePage() {
  return (
    <InstitutionalPage
      eyebrow="About — Governance"
      title="Regulatory Compliance Framework"
      subtitle="Murivest Realty Group is an independent real estate advisory firm. We are not a licensed investment advisor and do not offer regulated financial products or collective investment schemes. We do not pool capital from multiple investors."
      sections={[
        {
          eyebrow: 'Our Standard',
          title: 'Every mandate is documented, verified, and scoped',
          body: [
            'All advisory engagements are mandate-based, subject to formal documentation, comprehensive KYC/AML verification, and explicit scope definition before work begins.',
            'No investment decisions should be made based on information contained in our materials without independent verification, professional legal counsel, and comprehensive due diligence.',
          ],
        },
        {
          eyebrow: 'Process',
          title: 'How our compliance process works',
          columns: 4,
          cards: [
            { icon: UserCheck, title: 'KYC/AML Verification', description: 'Identity and source-of-funds verification prior to any mandate engagement.' },
            { icon: FileCheck, title: 'Formal Documentation', description: 'Every engagement is governed by a written mandate letter with defined scope.' },
            { icon: ShieldCheck, title: 'No Pooled Capital', description: 'We never commingle client funds or act as a collective investment scheme.' },
            { icon: AlertTriangle, title: 'Risk Disclosure', description: 'All investments carry inherent risk, including potential capital loss.' },
          ],
        },
      ]}
      cta={{
        title: 'Questions about our compliance process?',
        body: 'Our advisory team can walk you through KYC requirements before any engagement begins.',
        primary: { label: 'Contact Advisory', href: '/contact' },
        secondary: { label: 'About Murivest', href: '/about' },
      }}
    />
  )
}
