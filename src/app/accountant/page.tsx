import type { Metadata } from 'next'
import AccountantDashboard from '../../components/dashboard/AccountantDashboard'
import ProtectedRoute from '../../components/ProtectedRoute'

export const metadata: Metadata = {
  title: 'Accountant Dashboard - Property Management',
  description: 'Financial dashboard for rent tracking, payments, and financial reporting.',
  keywords: 'accountant dashboard, rent tracking, financial reporting, Kenya property finance',
  robots: {
    index: false,
    follow: false,
  },
}

export default function AccountantPage() {
  return (
    <ProtectedRoute>
      <AccountantDashboard />
    </ProtectedRoute>
  )
}