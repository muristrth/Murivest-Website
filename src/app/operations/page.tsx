import type { Metadata } from 'next'
import OperationsDashboard from '../../components/dashboard/OperationsDashboard'
import ProtectedRoute from '../../components/ProtectedRoute'

export const metadata: Metadata = {
  title: 'Operations Manager Dashboard - Property Management',
  description: 'Operations dashboard for property management, maintenance tracking, and daily operational tasks.',
  keywords: 'operations dashboard, property management, maintenance tracking, Kenya property operations',
  robots: {
    index: false,
    follow: false,
  },
}

export default function OperationsPage() {
  return (
    <ProtectedRoute>
      <OperationsDashboard />
    </ProtectedRoute>
  )
}