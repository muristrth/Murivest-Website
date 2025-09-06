import type { Metadata } from 'next'
import AdminDashboard from '../../components/dashboard/AdminDashboard'
import ProtectedRoute from '../../components/ProtectedRoute'

export const metadata: Metadata = {
  title: 'Admin Dashboard - Property Management',
  description: 'System administration dashboard for user management and system oversight.',
  keywords: 'admin dashboard, user management, system administration, Kenya property admin',
  robots: {
    index: false,
    follow: false,
  },
}

export default function AdminPage() {
  return (
    <ProtectedRoute>
      <AdminDashboard />
    </ProtectedRoute>
  )
}