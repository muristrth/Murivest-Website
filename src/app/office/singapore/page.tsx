import type { Metadata } from 'next'
import OfficePage from '@/components/marketing/OfficePage'

export const metadata: Metadata = {
  title: 'Singapore Office | Murivest Advisory',
  description: 'Murivest\u2019s Singapore desk provides Asia-Pacific institutional coverage for African and Gulf commercial real estate mandates.',
}

export default function SingaporeOfficePage() {
  return (
    <OfficePage
      city="Singapore"
      country="Singapore"
      tag="Offices — Singapore"
      heading="Asia Pacific"
      description="Our Singapore desk connects Asia-Pacific sovereign wealth funds and institutional allocators with African and Gulf commercial real estate opportunities."
      address="Raffles Place, Singapore"
      email="singapore@murivest.com"
      phone="+65 6000 0000"
      hours="Monday – Friday, 9:00 AM – 6:00 PM SGT"
      focus={[
        'Asia-Pacific sovereign wealth and institutional coverage',
        'Singapore commercial real estate advisory',
        'Structuring for APAC-to-Africa capital flows',
        'MAS-aligned advisory practices for regulated allocators',
      ]}
    />
  )
}
