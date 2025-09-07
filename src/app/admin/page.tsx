import type { Metadata } from 'next'
import ProtectedRoute from '../../components/ProtectedRoute'
import BusinessManagementDashboard from '../../components/dashboard/BusinessManagementDashboard';

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
      <BusinessManagementDashboard />
    </ProtectedRoute>
  );
}
