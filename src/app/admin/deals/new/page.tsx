'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { AdminHeader } from '@/components/admin/AdminHeader';
import { AdminSidebar } from '@/components/admin/AdminSidebar';
import { Alert } from '@/components/ui/Alert';
import { DealForm } from '@/components/admin/DealForm';


export default function NewDealPage() {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSubmit = async (data: any) => {
    setSaving(true);
    try {
      const res = await fetch('/api/deals', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setMessage({ type: 'success', text: 'Deal created successfully' });
        setTimeout(() => router.push('/admin/deals'), 1500);
      } else {
        throw new Error('Failed to create deal');
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to create deal' });
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <AdminSidebar />
      <div className="ml-64">
        <AdminHeader 
          title="New Exclusive Deal"
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
            <DealForm onSubmit={handleSubmit} loading={saving} />
          </div>
        </main>
      </div>
    </div>
  );
}