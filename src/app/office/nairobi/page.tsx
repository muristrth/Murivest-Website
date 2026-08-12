import type { Metadata } from 'next'
import OfficePage from '@/components/marketing/OfficePage'

export const metadata: Metadata = {
  title: 'Nairobi Headquarters | Murivest Advisory',
  description: 'Murivest\u2019s Nairobi headquarters serves institutional capital across East Africa.',
}

export default function NairobiOfficePage() {
  return (
    <OfficePage
      city="Nairobi"
      country="Kenya"
      tag="Offices — Nairobi"
      heading="Nairobi Headquarters"
      description="Our founding office and the seat of Murivest's East African advisory practice."
      address="Westlands Business District, Nairobi, Kenya"
      email="capital@murivest.co.ke"
      phone="+254 700 000 000"
      hours="Monday – Friday, 8:00 AM – 6:00 PM EAT"
      focus={[
        'Commercial real estate advisory across Kenya, Tanzania, and Uganda',
        'Institutional investment sales and off-market mandates',
        'Asset management for regional office, retail, and logistics portfolios',
        'Coordination hub for Murivest\u2019s Dubai, London, and Singapore desks',
      ]}
    />
  )
}
