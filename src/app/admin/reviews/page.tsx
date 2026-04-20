'use client';

import { useEffect, useState } from 'react';
import { Check, X, ExternalLink, Clock } from 'lucide-react';

interface Claim {
  id: string;
  name: string;
  email: string;
  amazon_profile: string;
  status: string;
  review_url: string;
  claimed_at: string;
}

export default function AdminReviews() {
  const [claims, setClaims] = useState<Claim[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [adminKey, setAdminKey] = useState('');

  useEffect(() => {
    // Auto-load if admin key is already in localStorage
    const savedKey = localStorage.getItem('admin_key');
    if (savedKey) {
      setAdminKey(savedKey);
      fetchClaims(savedKey);
    } else {
      setLoading(false);
    }
  }, []);

  const fetchClaims = async (key?: string) => {
    const keyToUse = key || adminKey;
    if (!keyToUse) {
      setError('Admin key required');
      setLoading(false);
      return;
    }

    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/claims-list', {
        headers: { 'x-admin-key': keyToUse }
      });

      if (!res.ok) {
        if (res.status === 401) {
          setError('Invalid admin key');
        } else {
          setError('Failed to load claims');
        }
        setClaims([]);
      } else {
        const data = await res.json();
        setClaims(data);
      }
    } catch (err) {
      setError('Connection error');
      setClaims([]);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadClick = () => {
    localStorage.setItem('admin_key', adminKey);
    fetchClaims();
  };

  const handleAction = async (claimId: string, action: 'approve' | 'reject') => {
    if (!adminKey) return;
    const res = await fetch('/api/verify-review', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ claimId, action, adminKey })
    });

    if (res.ok) {
      fetchClaims(adminKey);
    }
  };

  // Show error if any
  if (error) {
    return (
      <div className="min-h-screen bg-[#FAF9F6] p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-serif text-3xl text-[#1B4332] mb-8">Book Claim Verification</h1>
          <div className="p-4 bg-red-50 border border-red-200 rounded-sm text-red-700 mb-6">
            {error}
          </div>
          <AdminKeyInput adminKey={adminKey} setAdminKey={setAdminKey} onLoad={handleLoadClick} />
          {claims.length === 0 && <div className="text-center py-12 text-gray-500">No claims found</div>}
        </div>
      </div>
    );
  }

  // Show initial state (before first load attempt)
  if (!adminKey && claims.length === 0 && !loading) {
    return (
      <div className="min-h-screen bg-[#FAF9F6] p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-serif text-3xl text-[#1B4332] mb-8">Book Claim Verification</h1>
          <AdminKeyInput adminKey={adminKey} setAdminKey={setAdminKey} onLoad={handleLoadClick} />
          <div className="text-center py-12 text-gray-500">
            Enter admin key to load claims
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF9F6] p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="font-serif text-3xl text-[#1B4332] mb-8">Book Claim Verification</h1>
        
        <AdminKeyInput adminKey={adminKey} setAdminKey={setAdminKey} onLoad={handleLoadClick} />

        {loading ? (
          <div className="text-center py-12">Loading...</div>
        ) : claims.length === 0 ? (
          <div className="text-center py-12 text-gray-500">No claims found</div>
        ) : (
          <div className="space-y-4">
            {claims.map(claim => (
              <div key={claim.id} className="bg-white p-6 border border-[#1B4332]/10 rounded-sm flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`w-2 h-2 rounded-full ${
                      claim.status === 'pending' ? 'bg-yellow-500' :
                      claim.status === 'review_submitted' ? 'bg-blue-500' :
                      claim.status === 'verified' ? 'bg-green-500' : 'bg-red-500'
                    }`} />
                    <h3 className="font-semibold text-[#1B4332]">{claim.name}</h3>
                    <span className="text-xs text-gray-500 uppercase">{claim.status}</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">{claim.email}</p>
                  <p className="text-sm text-[#B8956B] mb-2">Amazon: {claim.amazon_profile}</p>
                  {claim.review_url && (
                    <a href={claim.review_url} target="_blank" className="text-xs text-blue-600 flex items-center gap-1">
                      <ExternalLink className="w-3 h-3" /> Review URL
                    </a>
                  )}
                </div>
                
                <div className="flex gap-2">
                  <a 
                    href={`https://amazon.com/gp/profile/${claim.amazon_profile}`}
                    target="_blank"
                    className="p-2 text-gray-400 hover:text-[#1B4332] transition-colors"
                    title="View Amazon Profile"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  {claim.status === 'review_submitted' && (
                    <>
                       <button 
                         onClick={() => handleAction(claim.id, 'approve')}
                         className="p-2 text-green-600 hover:bg-green-50 rounded-sm transition-colors"
                         title="Approve & Send Book"
                       >
                         <Check className="w-5 h-5" />
                       </button>
                       <button 
                         onClick={() => handleAction(claim.id, 'reject')}
                         className="p-2 text-red-600 hover:bg-red-50 rounded-sm transition-colors"
                         title="Reject"
                       >
                         <X className="w-5 h-5" />
                       </button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function AdminKeyInput({ adminKey, setAdminKey, onLoad }: { adminKey: string; setAdminKey: (v: string) => void; onLoad: () => void }) {
  return (
    <div className="mb-6 flex gap-4">
      <input 
        type="password" 
        placeholder="Admin Key" 
        value={adminKey}
        onChange={e => setAdminKey(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && onLoad()}
        className="px-4 py-2 border border-[#1B4332]/20 rounded-sm"
      />
      <button onClick={onLoad} className="px-6 py-2 bg-[#1B4332] text-white rounded-sm">
        Load Claims
      </button>
    </div>
  );
}