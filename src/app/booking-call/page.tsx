// pages/booking-call/page.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Lock, Calendar, Globe, Video, ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';
import BookingCalendar from '@/components/BookingCalendar';

const SchedulePage = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-light selection:bg-amber-500/30 overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 px-6">
        <div className="absolute top-0 left-1/2 w-full max-w-[800px] h-[400px] bg-amber-600/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-6"
          >
            <Lock size={12} className="text-amber-500" />
            <span className="text-[9px] md:text-[10px] font-bold tracking-[0.5em] uppercase text-amber-500">
              Secure Consultation Portal
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif italic mb-6 leading-tight">
            Connect with the <span className="text-amber-200/90">Authority</span>
          </h1>
          <p className="max-w-2xl mx-auto text-slate-400 text-base md:text-lg font-light leading-relaxed px-4">
            Direct sessions are synchronized for <span className="text-white font-normal text-amber-100">Mondays</span> to provide 
            dedicated institutional oversight for every inquiry.
          </p>
        </div>
      </section>

      {/* 2. MAIN INTERFACE GRID */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-white/10 border border-white/10 shadow-2xl">
          
          {/* LEFT PANEL: INTEL & PROTOCOL */}
          <div className="lg:col-span-4 bg-[#080a0f] p-8 md:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/5">
            <div className="space-y-12">
              <div>
                <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-500 mb-8 md:mb-12">
                  Protocol & Logistics
                </h3>
                
                <div className="space-y-8 md:space-y-10">
                  <div className="group">
                    <p className="text-[9px] font-bold text-amber-500 uppercase tracking-widest mb-2 flex items-center gap-2">
                      <Calendar size={12} /> Scheduling Window
                    </p>
                    <p className="text-lg md:text-xl font-serif italic text-slate-200">Exclusively Mondays</p>
                  </div>

                  <div className="group">
                    <p className="text-[9px] font-bold text-amber-500 uppercase tracking-widest mb-2 flex items-center gap-2">
                      <Globe size={12} /> Primary Timezone
                    </p>
                    <p className="text-lg md:text-xl font-serif italic text-slate-200">East Africa Time (EAT)</p>
                  </div>

                  <div className="group">
                    <p className="text-[9px] font-bold text-amber-500 uppercase tracking-widest mb-2 flex items-center gap-2">
                      <Video size={12} /> Delivery Method
                    </p>
                    <p className="text-lg md:text-xl font-serif italic text-slate-200">Google Meet (Encrypted)</p>
                  </div>
                </div>
              </div>

              <div className="pt-10 border-t border-white/5">
                <div className="flex items-center gap-3 mb-6">
                  <ShieldCheck className="text-amber-500" size={20} strokeWidth={1.5} />
                  <span className="text-[9px] font-bold uppercase tracking-widest text-white">Client Assurance</span>
                </div>
                <ul className="space-y-3 text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-slate-500 font-medium">
                  <li className="flex items-center gap-3"><div className="w-1 h-1 bg-amber-500 rounded-full" /> Automated Link Dispatch</li>
                  <li className="flex items-center gap-3"><div className="w-1 h-1 bg-amber-500 rounded-full" /> Multi-Currency Advisory</li>
                  <li className="flex items-center gap-3"><div className="w-1 h-1 bg-amber-500 rounded-full" /> NDAs Available Upon Request</li>
                </ul>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL: INTERACTIVE CALENDAR */}
          <div className="lg:col-span-8 bg-[#0a0c12] min-h-[600px] lg:min-h-full">
            <BookingCalendar />
          </div>
          
        </div>

        {/* 3. SUB-INTERFACE FOOTER */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div className="flex items-center gap-2 text-slate-500 text-[9px] uppercase tracking-[0.2em]">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
            System Status: Verified Secure
          </div>
          <p className="text-slate-500 text-[10px] font-light tracking-wide uppercase">
            Institutional Support: <span className="text-amber-200/70 ml-1">concierge@murivest.co.ke</span>
          </p>
        </div>
      </main>
    </div>
  );
};

export default SchedulePage;