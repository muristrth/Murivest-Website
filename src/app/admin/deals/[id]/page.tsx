'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { AdminHeader } from '@/components/admin/AdminHeader';
import { AdminSidebar } from '@/components/admin/AdminSidebar';
import { DealForm } from '@/components/admin/DealForm';
import { Button } from '@/components/ui/Button';
import { Alert } from '@/components/ui/Alert';
import { Loader } from '@/components/ui/Loader';

export default function EditDealPage() {
  const params = useParams();
  const router = useRouter();
  const [deal, setDeal] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  useEffect(() => {
    fetchDeal();
  }, [params.id]);

  const fetchDeal = async () => {
    try {
      const res = await fetch(`/api/deals/${params.id}`);
      const data = await res.json();
      setDeal(data.deal);
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to load deal' });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (formData: any) => {
    setSaving(true);
    try {
      const res = await fetch(`/api/deals/${params.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setMessage({ type: 'success', text: 'Deal updated successfully' });
      } else {
        throw new Error('Update failed');
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to update deal' });
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <Loader fullScreen />;

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <AdminSidebar />
      <div className="ml-64">
        <AdminHeader 
          title={deal?.title || 'Edit Deal'}
        />
        
        <main className="p-8 max-w-4xl">
          {message && (
            <Alert 
              variant={message.type} 
              className="mb-6"
              onClose={() => setMessage(null)}
            >
              {message.text}
            </Alert>
          )}

          <div className="bg-white rounded-lg border border-[#E8E6E1] p-8">
            <DealForm 
              initialData={deal}
              onSubmit={handleSubmit}
              loading={saving}
            />
          </div>
        </main>
      </div>
    </div>
  );
}