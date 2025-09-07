import type { Metadata } from 'next'
import Dashboard from '../../components/Dashboard'
import ProtectedRoute from '../../components/ProtectedRoute'

export const metadata: Metadata = {
  title: 'Client Portal - Murivest Realty',
  description: 'Access your private client portal to manage your real estate investments, view portfolio performance, and handle account details with Murivest Realty Group.',
  keywords: 'client portal Kenya, real estate investment tracker, portfolio management Kenya, property client dashboard, Murivest client portal',
  robots: {
    index: false,
    follow: false,
  },
}

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  )
}