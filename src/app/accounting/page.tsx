import type { Metadata } from 'next'
import AccountingDashboard from '../../components/dashboard/AccountingDashboard'
import ProtectedRoute from '../../components/ProtectedRoute'

export const metadata: Metadata = {
  title: 'Accounting Dashboard - Murivest Realty',
  description: 'Comprehensive accounting and financial management system for commercial real estate operations.',
  keywords: 'accounting dashboard, financial management, real estate accounting, Kenya property finance',
  robots: {
    index: false,
    follow: false,
  },
}

export default function AccountingPage() {
  return (
    <ProtectedRoute>
      <AccountingDashboard />
    </ProtectedRoute>
  )
}