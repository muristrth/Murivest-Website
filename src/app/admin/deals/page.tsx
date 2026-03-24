'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Plus } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { AdminHeader } from '@/components/admin/AdminHeader';
import { AdminSidebar } from '@/components/admin/AdminSidebar';
import { ResourceUploader } from '@/components/admin/ResourceUploader';
import { Alert } from '@/components/ui/Alert';
import { Button } from '@/components/ui/Button';
import { Loader } from '@/components/ui/Loader';
import { DataTable } from '@/components/admin/DataTable';

interface Deal {
  id: string;
  title: string;
  property_type: string;
  status: 'active' | 'under_offer' | 'sold' | 'withdrawn';
  price: number;
  location: string;
  created_at: string;
  views_count: number;
}

export default function DealsPage() {
  const router = useRouter();
  const [deals, setDeals] = useState<Deal[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDeals();
  }, []);

  const fetchDeals = async () => {
    try {
      const res = await fetch('/api/deals');
      const data = await res.json();
      setDeals(data.deals || []);
    } catch (error) {
      console.error('Failed to fetch deals:', error);
    } finally {
      setLoading(false);
    }
  };

  const columns = [
    { key: 'title', header: 'Title', width: '35%' },
    { key: 'property_type', header: 'Type', width: '15%' },
    { 
      key: 'status', 
      header: 'Status', 
      width: '15%',
      render: (row: Deal) => (
        <Badge variant={
          row.status === 'active' ? 'success' : 
          row.status === 'under_offer' ? 'warning' :
          row.status === 'sold' ? 'default' : 'info'
        }>
          {row.status.replace('_', ' ')}
        </Badge>
      )
    },
    { 
      key: 'price', 
      header: 'Price', 
      width: '15%',
      render: (row: Deal) => `$${(row.price / 1000000).toFixed(1)}M`
    },
    { key: 'location', header: 'Location', width: '15%' },
    { 
      key: 'views_count', 
      header: 'Views', 
      width: '5%',
      render: (row: Deal) => row.views_count.toLocaleString()
    },
  ];

  if (loading) return <Loader fullScreen />;

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <AdminSidebar />
      <div className="ml-64">
        <AdminHeader title="Exclusive Deals" />
        
        <main className="p-8">
          <div className="flex justify-between items-center mb-6">
            <div className="flex gap-4">
              <input 
                type="text" 
                placeholder="Search deals..." 
                className="px-4 py-2 border border-[#E8E6E1] rounded-lg bg-white text-[#2C2C2C] w-80"
              />
              <select className="px-4 py-2 border border-[#E8E6E1] rounded-lg bg-white text-[#2C2C2C]">
                <option value="">All Statuses</option>
                <option value="active">Active</option>
                <option value="under_offer">Under Offer</option>
                <option value="sold">Sold</option>
                <option value="withdrawn">Withdrawn</option>
              </select>
            </div>
            <Button onClick={() => router.push('/admin/deals/new')}>
              <Plus className="w-4 h-4 mr-2" />
              New Deal
            </Button>
          </div>

        <DataTable 
          columns={columns}
          data={deals}
          keyExtractor={(deal: Deal) => deal.id}
          onRowClick={(deal) => router.push(`/admin/deals/${deal.id}`)}
        />
        </main>
      </div>
    </div>
  );
}