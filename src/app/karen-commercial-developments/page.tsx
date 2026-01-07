import type { Metadata } from 'next'
import KarenCommercialDevelopments from '../../components/pages/KarenCommercialDevelopments'

export const metadata: Metadata = {
  title: 'Karen Commercial Developments - Luxury Real Estate Investment Nairobi',
  description: 'Premium commercial developments in Karen, Nairobi. Luxury office spaces, retail centers, and mixed-use properties in Nairobi\'s upscale district.',
  keywords: 'Karen commercial developments, luxury real estate Nairobi, Karen property investment, upscale commercial Nairobi, premium office spaces Kenya, Karen retail investment',
  openGraph: {
    title: 'Karen Commercial Developments - Luxury Real Estate Investment Nairobi',
    description: 'Premium commercial developments in Karen, Nairobi\'s upscale district.',
    images: ['/image.png'],
  },
}

export default function KarenCommercialDevelopmentsPage() {
  return <KarenCommercialDevelopments />
}