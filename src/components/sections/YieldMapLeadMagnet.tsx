'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Download, Building, ShieldCheck, Lock, Phone, ArrowRight, CheckCircle2 } from 'lucide-react';

const YieldMapLeadMagnet = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    // Simulate API call for demo purposes
    setTimeout(() => setStatus('success'), 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sites = [
    { name: 'Westlands Office Tower', yield: '8.0%', type: 'Core Office' },
    { name: 'Karen Luxury Outlets', yield: '8.7%', type: 'Prime Retail' },
    { name: 'Athi River Complex', yield: '9.8%', type: 'Industrial' },
  ];

  return (
    <section className="relative py-24 bg-[#fafaf9] overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-900/5 -skew-x-12 translate-x-32" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Side: Copy & 3D Data Preview */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 border border-amber-200 rounded-full text-amber-700 text-[10px] font-bold tracking-widest uppercase mb-6">
              <Lock className="h-3 w-3" /> Encrypted Access
            </div>
            
            <h2 className="text-5xl font-serif font-medium text-slate-900 mb-6 leading-[1.1]">
              The 2025 <span className="text-amber-600 italic">Yield Atlas</span> 
              <br /> for Nairobi Prime
            </h2>
            
            <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-lg">
              Secure the definitive benchmark report on commercial cap rates, lease structures, and the top-performing assets in the current Kenyan market.
            </p>

            {/* 3D Stacked Preview */}
            <div className="space-y-4 relative">
              {sites.map((site, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 flex items-center justify-between group cursor-default"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-slate-50 rounded-lg group-hover:bg-amber-500 group-hover:text-white transition-colors">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">{site.name}</h4>
                      <p className="text-[10px] uppercase tracking-tighter text-slate-400 font-bold">{site.type}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-amber-600 font-mono font-bold text-lg">{site.yield}</span>
                  </div>
                </motion.div>
              ))}
              
              {/* Blur Overlay for "Locked Content" effect */}
              <div className="absolute -bottom-2 inset-x-0 h-24 bg-gradient-to-t from-[#fafaf9] via-[#fafaf9]/80 to-transparent flex items-end justify-center pb-2">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">+9 More Locations Inside</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side: The Secure Form Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-[2.5rem] p-1 shadow-2xl shadow-slate-200/50 border border-slate-100"
          >
            <div className="bg-[#0f172a] rounded-[2.2rem] p-8 md:p-12 text-white overflow-hidden relative">
              <AnimatePresence mode="wait">
                {status !== 'success' ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                  >
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold mb-2">Request Intelligence</h3>
                      <p className="text-slate-400 text-sm">Professional credentials required for full report.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Full Name</label>
                        <input
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-amber-500 transition-all outline-none"
                          placeholder="James Kamau"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Work Email</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-amber-500 transition-all outline-none"
                          placeholder="j.kamau@corporate.com"
                        />
                      </div>

                      <button
                        disabled={status === 'loading'}
                        className="w-full mt-4 bg-amber-600 hover:bg-amber-500 text-white px-4 py-2.5 rounded-lg font-bold text-xs tracking-widest uppercase transition-all flex items-center justify-center gap-3 disabled:opacity-50 active:scale-95"
                      >
                        {status === 'loading' ? 'Authenticating...' : (
                          <>Download Atlas <Download className="h-4 w-4" /></>
                        )}
                      </button>
                    </form>

                    <div className="mt-8 flex items-start gap-3 opacity-50 hover:opacity-100 transition-opacity">
                      <ShieldCheck className="h-4 w-4 text-amber-500 shrink-0" />
                      <p className="text-[10px] leading-relaxed text-slate-300">
                        Fiduciary data protection: No third-party sharing. Encrypted delivery.
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center"
                  >
                    <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="h-8 w-8 text-amber-500" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Access Granted</h3>
                    <p className="text-slate-400 text-sm mb-8">
                      The PDF has been dispatched to <br />
                      <span className="text-white font-medium">{formData.email}</span>
                    </p>
                    <button 
                      onClick={() => setStatus('idle')}
                      className="text-amber-500 text-[10px] font-bold tracking-[0.2em] uppercase hover:text-amber-400 transition-colors"
                    >
                      Restart Request
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default YieldMapLeadMagnet;