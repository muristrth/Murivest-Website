import type { Metadata } from 'next'
import UchumiHouseProposal from '../../../components/UchumiHouseProposal'

export const metadata: Metadata = {
  title: 'Uchumi House Asset Care Pilot - Free 30-Day Trial | Murivest Realty',
  description: 'Free 30-day trial of Asset Care IoT monitoring at Uchumi House, Nairobi CBD. Save Shs 200k/month on energy costs. No setup fees, professional installation.',
  keywords: 'Uchumi House pilot, Asset Care trial Nairobi, IoT building management Kenya, energy savings commercial property, smart building sensors CBD',
  openGraph: {
    title: 'Uchumi House Asset Care Pilot - Free 30-Day Trial | Murivest Realty',
    description: 'Join Uchumi House in Kenya\'s first commercial building IoT pilot. Save 12-15% on operational costs with AI-powered monitoring.',
    images: ['/image.png'],
  },
}

export default function UchumiHouseProposalPage() {
  return <UchumiHouseProposal />
}