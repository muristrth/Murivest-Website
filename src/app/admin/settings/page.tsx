'use client';

import { useState } from 'react';
import { AdminHeader } from '@/components/admin/AdminHeader';
import { AdminSidebar } from '@/components/admin/AdminSidebar';
import { Button } from '@/components/ui/Button';
import { Alert } from '@/components/ui/Alert';

export default function SettingsPage() {
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [settings, setSettings] = useState({
    siteName: 'Murivest Investor Portal',
    contactEmail: 'info@murivest.co.ke',
    mpesaShortcode: '',
    bankAccountName: '',
    bankAccountNumber: '',
    bankName: '',
    requireVerification: true,
    autoApprovePayments: false,
  });

  const handleSave = async () => {
    setSaving(true);
    try {
      // API call to save settings
      await new Promise(resolve => setTimeout(resolve, 1000));
      setMessage({ type: 'success', text: 'Settings saved successfully' });
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to save settings' });
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <AdminSidebar />
      <div className="ml-64">
        <AdminHeader title="Settings" />
        
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

          <div className="bg-white rounded-lg border border-[#E8E6E1] p-8 space-y-8">
            {/* General Settings */}
            <section>
              <h2 className="text-lg font-serif text-[#1B4332] mb-4">General</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-[#8B8680] mb-1">Site Name</label>
                  <input
                    type="text"
                    value={settings.siteName}
                    onChange={(e) => setSettings({...settings, siteName: e.target.value})}
                    className="w-full px-4 py-2 border border-[#E8E6E1] rounded-lg focus:outline-none focus:border-[#1B4332]"
                  />
                </div>
                <div>
                  <label className="block text-sm text-[#8B8680] mb-1">Contact Email</label>
                  <input
                    type="email"
                    value={settings.contactEmail}
                    onChange={(e) => setSettings({...settings, contactEmail: e.target.value})}
                    className="w-full px-4 py-2 border border-[#E8E6E1] rounded-lg focus:outline-none focus:border-[#1B4332]"
                  />
                </div>
              </div>
            </section>

            {/* Payment Settings */}
            <section className="pt-6 border-t border-[#E8E6E1]">
              <h2 className="text-lg font-serif text-[#1B4332] mb-4">Payment Configuration</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-[#8B8680] mb-1">M-Pesa Shortcode</label>
                  <input
                    type="text"
                    value={settings.mpesaShortcode}
                    onChange={(e) => setSettings({...settings, mpesaShortcode: e.target.value})}
                    className="w-full px-4 py-2 border border-[#E8E6E1] rounded-lg focus:outline-none focus:border-[#1B4332]"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-[#8B8680] mb-1">Bank Name</label>
                    <input
                      type="text"
                      value={settings.bankName}
                      onChange={(e) => setSettings({...settings, bankName: e.target.value})}
                      className="w-full px-4 py-2 border border-[#E8E6E1] rounded-lg focus:outline-none focus:border-[#1B4332]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-[#8B8680] mb-1">Account Name</label>
                    <input
                      type="text"
                      value={settings.bankAccountName}
                      onChange={(e) => setSettings({...settings, bankAccountName: e.target.value})}
                      className="w-full px-4 py-2 border border-[#E8E6E1] rounded-lg focus:outline-none focus:border-[#1B4332]"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-[#8B8680] mb-1">Account Number</label>
                  <input
                    type="text"
                    value={settings.bankAccountNumber}
                    onChange={(e) => setSettings({...settings, bankAccountNumber: e.target.value})}
                    className="w-full px-4 py-2 border border-[#E8E6E1] rounded-lg focus:outline-none focus:border-[#1B4332]"
                  />
                </div>
              </div>
            </section>

            {/* Verification Settings */}
            <section className="pt-6 border-t border-[#E8E6E1]">
              <h2 className="text-lg font-serif text-[#1B4332] mb-4">Verification & Access</h2>
              <div className="space-y-4">
                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={settings.requireVerification}
                    onChange={(e) => setSettings({...settings, requireVerification: e.target.checked})}
                    className="w-4 h-4 text-[#1B4332] border-[#E8E6E1] rounded focus:ring-[#1B4332]"
                  />
                  <span className="text-[#2C2C2C]">Require verification for investor access</span>
                </label>
                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={settings.autoApprovePayments}
                    onChange={(e) => setSettings({...settings, autoApprovePayments: e.target.checked})}
                    className="w-4 h-4 text-[#1B4332] border-[#E8E6E1] rounded focus:ring-[#1B4332]"
                  />
                  <span className="text-[#2C2C2C]">Auto-approve M-Pesa payments</span>
                </label>
              </div>
            </section>

            <div className="pt-6 border-t border-[#E8E6E1]">
              <Button onClick={handleSave} isLoading={saving}>
                Save Settings
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}