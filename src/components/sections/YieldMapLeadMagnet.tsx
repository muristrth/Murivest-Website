'use client';

import React, { useState } from 'react';
import { MapPin, Download, Building, ShieldCheck, Lock, Phone } from 'lucide-react';

const YieldMapLeadMagnet = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/send-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Data optimized for display
  const sites = [
    { name: 'Westlands Office Tower', tenant: 'Tech Startup Hub', yield: '8.0%', type: 'Office' },
    { name: 'Karen Luxury Outlets', tenant: 'Designer Brands', yield: '8.7%', type: 'Retail' },
    { name: 'Athi River Complex', tenant: 'Cold Storage', yield: '9.8%', type: 'Industrial' },
    { name: 'Kilimani Mixed-Use', tenant: 'Residential + Retail', yield: '8.2%', type: 'Mixed-use' }
  ];

  return (
    <section className="py-24 bg-slate-50 font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Header / Value Proposition */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-amber-100 rounded-full text-amber-900 text-sm font-semibold mb-8 border border-amber-200">
            <ShieldCheck className="h-4 w-4 mr-2" />
            Private Client Intelligence
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            2025 Nairobi Prime Real Estate
            <span className="block text-amber-700 italic mt-2">
              Investment Yield Report
            </span>
          </h2>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
            An executive summary of yield performance across Office, Retail, and Industrial sectors. 
            Curated specifically for senior investors seeking wealth preservation and consistent returns.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: The Preview (Trust Builders) */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200">
            <div className="p-6 bg-slate-900 text-white">
              <h3 className="text-xl font-semibold mb-2">Report Preview</h3>
              <p className="text-slate-400 text-sm">Real data from Q1 2025</p>
            </div>
            
            <div className="p-6">
              <div className="space-y-4">
                {sites.map((site, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <div className="flex items-center">
                      <div className="bg-white p-2 rounded-full shadow-sm mr-4">
                        <MapPin className="h-5 w-5 text-amber-600" />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 text-lg">{site.name}</div>
                        <div className="text-sm text-slate-600">{site.type}</div>
                      </div>
                    </div>
                    <div className="text-amber-700 font-bold text-lg bg-amber-50 px-3 py-1 rounded-lg border border-amber-100">
                      {site.yield}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 text-blue-900 text-sm rounded-lg border border-blue-100 flex items-start">
                <Building className="h-5 w-5 mr-3 flex-shrink-0 mt-0.5" />
                <p>
                  The full 6-page report includes detailed cap rates, tenant snapshots, and lease duration analysis for 12 prime locations.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: The Secure Form */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8 lg:p-10">
            {status !== 'success' ? (
              <>
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    Request Your Copy
                  </h3>
                  <p className="text-slate-600 text-lg">
                    Please provide your details below. The PDF report will be sent immediately to your email inbox.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-base font-semibold text-slate-800 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-4 text-lg border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-slate-50"
                      placeholder="e.g. James Kamau"
                    />
                  </div>

                  <div>
                    <label className="block text-base font-semibold text-slate-800 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-4 text-lg border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-slate-50"
                      placeholder="e.g. james@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-base font-semibold text-slate-800 mb-2">
                      Phone Number <span className="text-slate-400 font-normal text-sm">(Optional)</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Phone className="h-5 w-5 text-slate-400" />
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-4 text-lg border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-slate-50"
                        placeholder="0729 170 156"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white py-5 px-6 rounded-lg font-semibold text-lg flex items-center justify-center transition-all shadow-md hover:shadow-lg disabled:opacity-70"
                  >
                    {status === 'loading' ? (
                      'Processing Request...'
                    ) : (
                      <>
                        <Download className="h-6 w-6 mr-3" />
                        Send Me The Report
                      </>
                    )}
                  </button>
                </form>

                {/* Privacy Assurance Block */}
                <div className="mt-8 pt-6 border-t border-slate-100">
                  <div className="flex items-start gap-3">
                    <Lock className="h-5 w-5 text-slate-400 flex-shrink-0 mt-1" />
                    <p className="text-sm text-slate-500 leading-relaxed">
                      <strong>Our Zero-Spam Promise:</strong> Your contact details are strictly confidential. 
                      We do not share data with third parties. You will only receive the requested report and occasional market insights.
                    </p>
                  </div>
                </div>

                {status === 'error' && (
                  <p className="mt-4 text-red-600 text-center font-medium">
                    There was an error sending the request. Please try again.
                  </p>
                )}
              </>
            ) : (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
                  <ShieldCheck className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">
                  Request Confirmed
                </h3>
                <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                  We have sent the <strong>2025 Yield Atlas</strong> to <span className="font-semibold text-slate-900">{formData.email}</span>.
                  <br /><br />
                  Please check your inbox (and promotions folder) in the next 2 minutes.
                </p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="text-amber-700 font-medium hover:underline"
                >
                  Send to another email address
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default YieldMapLeadMagnet;