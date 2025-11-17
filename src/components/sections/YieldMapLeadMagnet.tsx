'use client';

import React, { useState } from 'react';
import { MapPin, Download, Users, Building } from 'lucide-react';

const YieldMapLeadMagnet = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    companyPin: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send to your API
    console.log('Lead magnet signup:', formData);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Sample sites data by asset class
  const sites = [
    { name: 'Westlands Office Tower', tenant: 'Tech Startup Hub', yield: '8.0%', type: 'Office' },
    { name: 'CBD Business Centre', tenant: 'Law Firm', yield: '8.2%', type: 'Office' },
    { name: 'Koinange Street Plaza', tenant: 'Accounting Firm', yield: '8.1%', type: 'Office' },
    { name: 'Westlands Shopping Mall', tenant: 'Fashion Retailer', yield: '8.5%', type: 'Retail' },
    { name: 'Karen Luxury Outlets', tenant: 'Designer Brands', yield: '8.7%', type: 'Retail' },
    { name: 'Luthuli Avenue Shops', tenant: 'Quick Service Restaurants', yield: '8.3%', type: 'Retail' },
    { name: 'Industrial Area Warehouse', tenant: 'Manufacturing Co.', yield: '9.5%', type: 'Industrial' },
    { name: 'Mombasa Road Depot', tenant: 'Logistics Kenya', yield: '9.2%', type: 'Industrial' },
    { name: 'Athi River Complex', tenant: 'Cold Storage', yield: '9.8%', type: 'Industrial' },
    { name: 'Kilimani Mixed-Use', tenant: 'Residential + Retail', yield: '8.2%', type: 'Mixed-use' },
    { name: 'Parklands Development', tenant: 'Office + Shops', yield: '8.0%', type: 'Mixed-use' },
    { name: 'South C Estate', tenant: 'Commercial + Residential', yield: '8.4%', type: 'Mixed-use' }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-amber-100 rounded-full text-amber-800 text-sm font-medium mb-8">
            <Building className="h-4 w-4 mr-2" />
            Exclusive Investment Intelligence
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-8">
            2025 Nairobi CRE
            <span className="block font-extralight italic text-slate-600">
              Yield Atlas
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
            Comprehensive 6-page atlas covering Office (8%), Retail (8.5%), Industrial (9.5%), and Mixed-use (8.2%) properties. Each page includes maps, 3 real addresses, tenant snapshots, and cap rates. Perfect for CFOs and investment directors.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map Section */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-6 bg-slate-900 text-white">
              <h3 className="text-xl font-medium mb-4">Nairobi Industrial Properties Map</h3>
              <div className="aspect-video bg-slate-800 rounded-lg flex items-center justify-center">
                {/* Placeholder for Google Maps */}
                <div className="text-center text-slate-400">
                  <MapPin className="h-12 w-12 mx-auto mb-4" />
                  <p>Interactive Google Maps Integration</p>
                  <p className="text-sm">12 Sites • Real-time Data</p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h4 className="text-lg font-medium text-slate-900 mb-4">Featured Properties by Asset Class</h4>
              <div className="space-y-3">
                {sites.slice(0, 6).map((site, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 text-amber-600 mr-3" />
                      <div>
                        <div className="font-medium text-slate-900">{site.name}</div>
                        <div className="text-sm text-slate-600">{site.tenant} • {site.type}</div>
                      </div>
                    </div>
                    <div className="text-amber-600 font-medium">{site.yield}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            {!isSubmitted ? (
              <>
                <div className="text-center mb-8">
                  <Users className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-light text-slate-900 mb-4">
                    Get Your Free Yield Map
                  </h3>
                  <p className="text-slate-600">
                    Join 50+ CFOs who receive our weekly industrial CRE insights. No spam, just actionable intelligence.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="John Smith"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Business Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Company PIN (KRA)
                    </label>
                    <input
                      type="text"
                      name="companyPin"
                      required
                      value={formData.companyPin}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="P05123456789"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white py-4 px-6 rounded-lg font-medium flex items-center justify-center transition-colors"
                  >
                    <Download className="h-5 w-5 mr-2" />
                    Download Yield Atlas (PDF)
                  </button>
                </form>

                <p className="text-xs text-slate-500 text-center mt-4">
                  Your information is secure and will never be shared. Unsubscribe anytime.
                </p>
              </>
            ) : (
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Download className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-light text-slate-900 mb-4">
                  Thank You!
                </h3>
                <p className="text-slate-600 mb-6">
                  Your download link has been sent to {formData.email}. Check your inbox for the complete 2025 Nairobi CRE Yield Atlas.
                </p>
                <p className="text-sm text-slate-500">
                  You'll also receive our weekly CFO briefing starting next Monday.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default YieldMapLeadMagnet;