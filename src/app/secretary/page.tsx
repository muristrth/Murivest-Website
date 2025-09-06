import type { Metadata } from 'next'
import SecretaryDashboard from '../../components/dashboard/SecretaryDashboard'
import ProtectedRoute from '../../components/ProtectedRoute'

export const metadata: Metadata = {
  title: 'Secretary Dashboard - Property Management',
  description: 'Administrative dashboard for document management and tenant communication.',
  keywords: 'secretary dashboard, document management, tenant communication, Kenya property admin',
  robots: {
    index: false,
    follow: false,
  },
}

export default function SecretaryPage() {
  return (
    <ProtectedRoute>
      <SecretaryDashboard />
    </ProtectedRoute>
  )
}