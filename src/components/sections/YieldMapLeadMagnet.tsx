'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Download, Lock, ShieldCheck, CheckCircle2, ChevronRight } from 'lucide-react';

const YieldMapLeadMagnet = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => setStatus('success'), 1500);
  };

  const benchmarks = [
    { name: 'Westlands Commercial', yield: '8.2%', delta: '+0.4%' },
    { name: 'Industrial Logistics', yield: '9.6%', delta: '+1.1%' },
    { name: 'Retail / Mixed Use', yield: '8.8%', delta: '-0.2%' },
  ];

  return (
    <section className="relative py-32 bg-white overflow-hidden border-t border-slate-100">
      {/* Structural accent: A thin vertical line that guides the eye down */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-24 bg-gradient-to-b from-slate-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-8 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          
          {/* Left: The Intelligence Preview */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="pt-12"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="h-[1px] w-8 bg-amber-600" />
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-slate-400">Restricted Data</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif text-slate-950 mb-8 leading-[1.15]">
              The 2025 <span className="italic">Yield Atlas</span> <br />
              for Private Capital.
            </h2>
            
            <p className="text-slate-500 text-lg font-light leading-relaxed mb-12 max-w-lg">
              A comprehensive audit of Nairobi’s prime asset performance. Access proprietary data on capitalization rates, occupancy forecasting, and tax-adjusted IRR benchmarks.
            </p>

            {/* Locked Data Ledger */}
            <div className="border border-slate-100 bg-slate-50/30 p-1 divide-y divide-slate-100 relative">
              {benchmarks.map((item, i) => (
                <div key={i} className="flex justify-between items-center p-6 bg-white/50 backdrop-blur-sm">
                  <div className="flex items-center gap-4">
                    <MapPin size={14} className="text-amber-600/50" />
                    <span className="text-[11px] tracking-[0.1em] uppercase font-medium text-slate-700">{item.name}</span>
                  </div>
                  <div className="flex items-baseline gap-4">
                    <span className="text-slate-300 text-[10px] font-mono">{item.delta}</span>
                    <span className="text-xl font-serif text-slate-900">{item.yield}</span>
                  </div>
                </div>
              ))}
              
              {/* The "Gated" Blur Overlay */}
              <div className="absolute inset-0 top-[60%] bg-gradient-to-t from-white via-white/90 to-transparent flex flex-col items-center justify-end pb-8">
                <div className="flex items-center gap-2 mb-2 text-slate-400">
                  <Lock size={12} strokeWidth={1.5} />
                  <span className="text-[9px] font-bold tracking-[0.3em] uppercase">Confidential Analysis Hidden</span>
                </div>
                <div className="h-[1px] w-12 bg-slate-200" />
              </div>
            </div>
          </motion.div>

          {/* Right: The Request Portal */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:mt-12"
          >
            <div className="bg-slate-950 p-12 lg:p-16 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.2)] relative overflow-hidden">
              {/* Subtle background motif */}
              <div className="absolute top-0 right-0 p-8 opacity-10">
                 <ShieldCheck size={120} strokeWidth={0.5} className="text-white" />
              </div>

              <AnimatePresence mode="wait">
                {status !== 'success' ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                  >
                    <div className="relative z-10 mb-10">
                      <h3 className="text-white text-2xl font-serif mb-3">Request Briefing</h3>
                      <p className="text-slate-500 text-xs font-light tracking-wide">
                        Please provide professional credentials to receive the encrypted 2025 Atlas.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                      <div className="space-y-2">
                        <label className="text-[9px] font-bold uppercase tracking-[0.3em] text-slate-500">Full Name</label>
                        <input
                          type="text"
                          required
                          className="w-full bg-transparent border-b border-slate-800 py-3 text-white focus:border-amber-500 outline-none transition-all font-light"
                          placeholder="Hon. James Kamau"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-[9px] font-bold uppercase tracking-[0.3em] text-slate-500">Professional Email</label>
                        <input
                          type="email"
                          required
                          className="w-full bg-transparent border-b border-slate-800 py-3 text-white focus:border-amber-500 outline-none transition-all font-light"
                          placeholder="principal@familyoffice.com"
                        />
                      </div>

                      <button
                        disabled={status === 'loading'}
                        className="w-full group relative flex items-center justify-between bg-amber-600 hover:bg-amber-500 text-slate-950 px-8 py-5 mt-10 transition-all active:scale-[0.98]"
                      >
                        <span className="text-[11px] font-bold tracking-[0.3em] uppercase">
                          {status === 'loading' ? 'Verifying...' : 'Request Intelligence'}
                        </span>
                        <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </form>

                    <div className="mt-10 pt-10 border-t border-white/5 flex items-center gap-4">
                      <div className="p-2 rounded-full border border-white/10">
                        <ShieldCheck size={14} className="text-amber-500" />
                      </div>
                      <p className="text-[10px] text-slate-500 font-light leading-relaxed">
                        Data security compliant. Delivery via encrypted PDF link to authorized personnel only.
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="py-16 text-center relative z-10"
                  >
                    <div className="w-20 h-20 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-amber-500/20">
                      <CheckCircle2 size={32} className="text-amber-500" strokeWidth={1} />
                    </div>
                    <h3 className="text-white text-3xl font-serif mb-4">Request Received</h3>
                    <p className="text-slate-400 text-sm font-light leading-relaxed mb-12">
                      Our fiduciary team is verifying your credentials. <br /> 
                      The 2025 Atlas will be dispatched shortly.
                    </p>
                    <button 
                      onClick={() => setStatus('idle')}
                      className="text-amber-500 text-[9px] font-bold tracking-[0.4em] uppercase border-b border-amber-500/20 pb-1"
                    >
                      Return to Briefing
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