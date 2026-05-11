// app/admin/divestment/page.tsx

import AdminDivestmentDashboard from '@/components/AdminDivestmentDashboard';

export const metadata = {
  title: 'Institutional Divestments | Admin',
  description: 'Murivest Realty Institutional Divestment Pipeline',
};

export default async function DivestmentPage() {
  return <AdminDivestmentDashboard />;
}