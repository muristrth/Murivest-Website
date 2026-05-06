import type { Metadata } from 'next'
import About from '../../components/About'

export const metadata: Metadata = {
  title: 'About Murivest Realty Group - Independent Advisory Firm Kenya',
  description: 'Learn about Murivest Realty Group, an independent commercial real estate advisory firm based in Nairobi. Our discipline, underwriting standards, and mandate-based approach to East African commercial property markets.',
  keywords: 'Murivest Realty Group, independent real estate advisory Kenya, commercial property advisory Nairobi, institutional real estate standards, mandate-based advisory East Africa',
  openGraph: {
    title: 'About Murivest Realty Group - Independent Advisory Firm Kenya',
    description: 'Learn about Murivest Realty Group, an independent commercial real estate advisory firm based in Nairobi.',
    images: ['/image.png'],
  },
}

export default function AboutPage() {
  return <About />
}
