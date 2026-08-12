import type { Metadata } from 'next'
import InstitutionalPage from '@/components/marketing/InstitutionalPage'
import { Landmark, ShieldCheck, Target, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Murivest | Independent Real Estate Advisory',
  description: 'Murivest Realty Group is an independent commercial real estate advisory firm based in Nairobi, structuring mandate-based engagements across East Africa and partner markets.',
}

export default function AboutPage() {
  return (
    <InstitutionalPage
      eyebrow="About — Our Story"
      title="An Independent Advisory Firm, Built on Mandates"
      subtitle="Murivest Realty Group is an independent commercial real estate advisory firm based in Nairobi. We originate and structure mandate-based engagements for institutional and private capital in East African and partner commercial property markets."
      sections={[
        {
          eyebrow: 'Philosophy',
          title: 'Advisory, not investment management',
          body: [
            'We do not act as a licensed investment advisor and do not offer regulated financial products or collective investment schemes. We do not pool capital from multiple investors.',
            'Every engagement is mandate-based, subject to formal documentation, comprehensive KYC/AML verification, and a clearly defined scope. This structure keeps our incentives aligned to the mandate, not to assets under management.',
          ],
        },
        {
          eyebrow: 'What We Do',
          title: 'Where Murivest operates',
          columns: 4,
          cards: [
            { icon: Target, title: 'Origination', description: 'Sourcing acquisition and disposal mandates for qualified principals.' },
            { icon: ShieldCheck, title: 'Diligence', description: 'Institutional-grade underwriting and due diligence discipline.' },
            { icon: Landmark, title: 'Structuring', description: 'Transaction structuring across advisory, management, and specialist services.' },
            { icon: Users, title: 'Relationships', description: 'Long-term advisory relationships with vendors, occupiers, and capital.' },
          ],
        },
        {
          eyebrow: 'Governance',
          title: 'Compliance is a first-class function, not an afterthought',
          body: [
            'Every mandate passes through our compliance framework before engagement begins. We maintain formal KYC/AML processes and document scope explicitly to protect both the principal and the firm.',
          ],
        },
      ]}
      cta={{
        title: 'Want to know more about how we work?',
        body: 'Speak with our advisory team, or explore our leadership and compliance framework.',
        primary: { label: 'Contact Us', href: '/contact' },
        secondary: { label: 'Leadership', href: '/leadership' },
      }}
    />
  )
}
