import type { Metadata } from 'next'
import OfficePage from '@/components/marketing/OfficePage'

export const metadata: Metadata = {
  title: 'London Office | Murivest Advisory',
  description: 'Murivest\u2019s London desk provides European institutional coverage for African commercial real estate mandates.',
}

export default function LondonOfficePage() {
  return (
    <OfficePage
      city="London"
      country="United Kingdom"
      tag="Offices — London"
      heading="European Coverage"
      description="Our London desk serves European pension funds, family offices, and asset managers seeking direct exposure to East African and UK commercial real estate."
      address="Mayfair, London, United Kingdom"
      email="london@murivest.com"
      phone="+44 20 0000 0000"
      hours="Monday – Friday, 9:00 AM – 5:30 PM GMT"
      focus={[
        'European institutional and pension capital coverage',
        'UK commercial real estate investment sales',
        'Cross-border capital structuring for African mandates',
        'FCA-aligned advisory practices for regulated allocators',
      ]}
    />
  )
}
