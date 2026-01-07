import type { Metadata } from 'next'
import WestlandsPropertyInvestment from '../../components/pages/WestlandsPropertyInvestment'

export const metadata: Metadata = {
  title: 'Westlands Property Investment - Prime Nairobi Real Estate Opportunities',
  description: 'Invest in Westlands, Nairobi\'s premier commercial district. Premium office spaces, retail properties, and mixed-use developments with exceptional returns.',
  keywords: 'Westlands property investment, Nairobi commercial real estate, Westlands office space, retail investment Nairobi, mixed-use property Kenya, prime real estate Nairobi',
  openGraph: {
    title: 'Westlands Property Investment - Prime Nairobi Real Estate Opportunities',
    description: 'Invest in Westlands, Nairobi\'s premier commercial district with exceptional returns.',
    images: ['/image.png'],
  },
}

export default function WestlandsPropertyInvestmentPage() {
  return <WestlandsPropertyInvestment />
}