import type { Metadata } from 'next'
import SovereignCreditRatingUpdates from '../../components/pages/SovereignCreditRatingUpdates'

export const metadata: Metadata = {
  title: 'Sovereign Credit Rating Updates - Kenya Credit Rating Analysis',
  description: 'Kenya sovereign credit rating updates and analysis. Impact of credit ratings on real estate investment and economic stability.',
  keywords: 'Kenya sovereign credit rating, credit rating updates Kenya, sovereign risk analysis, Kenya economic stability',
  openGraph: {
    title: 'Sovereign Credit Rating Updates - Kenya Credit Rating Analysis',
    description: 'Kenya sovereign credit rating updates and analysis.',
    images: ['/image.png'],
  },
}

export default function SovereignCreditRatingUpdatesPage() {
  return <SovereignCreditRatingUpdates />
}