import type { Metadata } from 'next'
import AssetCareResources from '../../components/AssetCareResources'

export const metadata: Metadata = {
  title: 'Asset Care Resources - AI-Powered Building Management | Murivest Realty',
  description: 'Discover Asset Care: AI-powered building management with IoT sensors for energy, water, security & HVAC monitoring. Save 12-15% on operations costs. Free 30-day trial.',
  keywords: 'Asset Care, IoT building management, energy monitoring Kenya, smart building sensors, commercial property management Nairobi, HVAC optimization, water leak detection, security monitoring',
  openGraph: {
    title: 'Asset Care Resources - AI-Powered Building Management | Murivest Realty',
    description: 'AI-powered building management with IoT sensors. Save 12-15% on operations costs. Free 30-day trial for commercial buildings in Kenya.',
    images: ['/image.png'],
  },
}

export default function AssetCareResourcesPage() {
  return <AssetCareResources />
}