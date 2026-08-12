import type { Metadata } from 'next'
import InstitutionalPage from '@/components/marketing/InstitutionalPage'
import { Lock, ShieldCheck, Users, KeyRound } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Off-Market Private Treaty | Murivest Advisory',
  description: 'Private treaty transactions sourced and negotiated away from the open market for qualified, verified counterparties.',
}

export default function OffMarketPage() {
  return (
    <InstitutionalPage
      eyebrow="Specialist — Off-Market"
      title="Off-Market Private Treaty Transactions"
      subtitle="Some of the most attractive opportunities never reach the open market. We source and negotiate private treaty transactions for qualified, verified counterparties."
      sections={[
        {
          eyebrow: 'Why Off-Market',
          title: 'Discretion, speed, and qualified counterparties',
          body: [
            'Vendors sometimes prefer a quiet, discreet process — to avoid signalling distress, protect tenant relationships, or move faster than a competitive marketing campaign allows.',
            'Access to our off-market deal flow is restricted to registered investors who have completed our KYC and verification process through the private portal.',
          ],
        },
        {
          eyebrow: 'How Access Works',
          title: 'Verification before access',
          columns: 3,
          cards: [
            { icon: KeyRound, title: 'Register', description: 'Create an account on the private investor portal.' },
            { icon: ShieldCheck, title: 'Verify', description: 'Complete KYC/AML verification to unlock off-market listings.' },
            { icon: Lock, title: 'Access', description: 'Review live off-market opportunities and submit enquiries directly.' },
          ],
        },
      ]}
      cta={{
        title: 'Ready to see what is not on the open market?',
        body: 'Register on the private investor portal to begin verification and unlock off-market listings.',
        primary: { label: 'Access the Portal', href: '/portal' },
        secondary: { label: 'Submit a Mandate', href: '/sell' },
      }}
    />
  )
}
