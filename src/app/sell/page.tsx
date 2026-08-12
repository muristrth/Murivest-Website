import type { Metadata } from 'next'
import SellProperty from '@/components/SellProperty'

export const metadata: Metadata = {
  title: 'Submit an Investment Mandate | Murivest Advisory',
  description: 'Connect your commercial property with our institutional investor network across East Africa, the Gulf, Europe, and Asia.',
}

export default function SellPage() {
  return <SellProperty />
}
