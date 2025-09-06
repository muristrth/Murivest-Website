import type { Metadata } from 'next'
import Dashboard from '../../components/Dashboard'
import ProtectedRoute from '../../components/ProtectedRoute'

export const metadata: Metadata = {
  title: 'Investor Dashboard - My Murivest Portfolio',
  description: 'Access your private investor dashboard to view your real estate portfolio, investment performance, and account details with Murivest Realty Group.',
  keywords: 'investor dashboard Kenya, real estate portfolio tracker, investment performance Kenya, property investment dashboard, Murivest investor portal',
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