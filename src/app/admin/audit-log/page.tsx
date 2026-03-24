'use client';

import { useState, useEffect } from 'react';
import { AdminHeader } from '@/components/admin/AdminHeader';
import { AdminSidebar } from '@/components/admin/AdminSidebar';
import { DataTable } from '@/components/admin/DataTable';
import { Badge } from '@/components/ui/Badge';
import { Loader } from '@/components/ui/Loader';

interface AuditLog {
  id: string;
  action: string;
  entity_type: string;
  entity_id: string;
  user_name: string;
  details: Record<string, any>;
  created_at: string;
}

export default function AuditLogPage() {
  const [logs, setLogs] = useState<AuditLog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLogs();
  }, []);

  const fetchLogs = async () => {
    try {
      // Simulated API call
      await new Promise(resolve => setTimeout(resolve, 500));
      setLogs([
        {
          id: '1',
          action: 'user_verified',
          entity_type: 'user',
          entity_id: 'user_123',
          user_name: 'Admin User',
          details: { previous_status: 'pending' },
          created_at: new Date().toISOString(),
        },
        {
          id: '2',
          action: 'payment_approved',
          entity_type: 'payment',
          entity_id: 'pay_456',
          user_name: 'Admin User',
          details: { amount: 5000 },
          created_at: new Date().toISOString(),
        },
      ]);
    } catch (error) {
      console.error('Failed to fetch audit logs:', error);
    } finally {
      setLoading(false);
    }
  };

  const columns = [
    { 
      key: 'action', 
      header: 'Action', 
      width: '25%',
      render: (row: AuditLog) => (
        <Badge variant="info" className="capitalize">
          {row.action.replace('_', ' ')}
        </Badge>
      )
    },
    { key: 'entity_type', header: 'Entity Type', width: '15%' },
    { key: 'user_name', header: 'Performed By', width: '20%' },
    { 
      key: 'details', 
      header: 'Details', 
      width: '25%',
      render: (row: AuditLog) => (
        <span className="text-sm text-[#8B8680]">
          {JSON.stringify(row.details).slice(0, 50)}...
        </span>
      )
    },
    { 
      key: 'created_at', 
      header: 'Timestamp', 
      width: '15%',
      render: (row: AuditLog) => new Date(row.created_at).toLocaleString()
    },
  ];

  if (loading) return <Loader fullScreen />;

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <AdminSidebar />
      <div className="ml-64">
        <AdminHeader title="Audit Log" />
        
        <main className="p-8">
          <div className="flex gap-4 mb-6">
            <input 
              type="text" 
              placeholder="Search logs..." 
              className="px-4 py-2 border border-[#E8E6E1] rounded-lg bg-white text-[#2C2C2C] w-80"
            />
            <select className="px-4 py-2 border border-[#E8E6E1] rounded-lg bg-white text-[#2C2C2C]">
              <option value="">All Actions</option>
              <option value="user_verified">User Verified</option>
              <option value="payment_approved">Payment Approved</option>
              <option value="order_fulfilled">Order Fulfilled</option>
            </select>
            <input 
              type="date" 
              className="px-4 py-2 border border-[#E8E6E1] rounded-lg bg-white text-[#2C2C2C]"
            />
          </div>

          <DataTable
            columns={columns}
            data={logs}
            keyExtractor={(row: AuditLog) => row.id}
          />
        </main>
      </div>
    </div>
  );
}