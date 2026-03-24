'use client';

import { useState } from 'react';
import { AdminHeader } from '@/components/admin/AdminHeader';
import { AdminSidebar } from '@/components/admin/AdminSidebar';
import { ResourceUploader } from '@/components/admin/ResourceUploader';
import { Alert } from '@/components/ui/Alert';

export default function ResourcesPage() {
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleUpload = async (file: File, data: any): Promise<string> => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('metadata', JSON.stringify(data));

    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        setMessage({ type: 'success', text: 'Resource uploaded successfully' });
        return 'Resource uploaded successfully';
      } else {
        throw new Error('Upload failed');
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to upload resource' });
      throw error;
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <AdminSidebar />
      <div className="ml-64">
        <AdminHeader title="Resource Management" />
        
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
            <h2 className="text-xl font-serif text-[#1B4332] mb-6">Upload Resources</h2>
            <ResourceUploader onUpload={handleUpload} />
          </div>
        </main>
      </div>
    </div>
  );
}