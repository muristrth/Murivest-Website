import type { Metadata } from 'next'
import OfficePage from '@/components/marketing/OfficePage'

export const metadata: Metadata = {
  title: 'Dubai Office | Murivest Advisory',
  description: 'Murivest\u2019s Dubai desk connects Gulf institutional capital with East African and Gulf commercial real estate.',
}

export default function DubaiOfficePage() {
  return (
    <OfficePage
      city="Dubai"
      country="United Arab Emirates"
      tag="Offices — Dubai"
      heading="Middle East Hub"
      description="Our Dubai desk connects Gulf institutional and family office capital with vetted opportunities across the UAE and East Africa."
      address="DIFC, Dubai, United Arab Emirates"
      email="dubai@murivest.com"
      phone="+971 4 000 0000"
      hours="Sunday – Thursday, 9:00 AM – 6:00 PM GST"
      focus={[
        'Gulf sovereign wealth and family office coverage',
        'Cross-border structuring between UAE and East African mandates',
        'UAE commercial and hospitality investment sales',
        'DIFC-regulated advisory for regional institutional allocators',
      ]}
    />
  )
}
