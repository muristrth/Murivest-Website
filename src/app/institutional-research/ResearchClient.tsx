'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileText, 
  Download, 
  Lock, 
  BarChart3, 
  TrendingUp, 
  Globe, 
  ChevronRight,
  ShieldCheck,
  Search
} from 'lucide-react';

const reports = [
  {
    title: "The Nairobi Yield Report Q4 2025",
    date: "Dec 2025",
    type: "Quarterly Analysis",
    description: "Deep-dive analysis into cap rate compression across Westlands and Upper Hill commercial nodes.",
    tags: ["Office", "Retail", "Yield Analysis"],
    featured: true,
    file: "/Murivest Realty The Nairobi Yield Report Q4 2025.pdf"
  },
  {
    title: "East Africa Industrial & Logistics Outlook",
    date: "Nov 2025",
    type: "Sector Report",
    description: "Assessing the impact of the SGR expansion on Grade-A warehousing demand in Mombasa and Nairobi.",
    tags: ["Logistics", "Industrial", "Macro"],
    featured: false
  },
  {
    title: "Family Office Real Estate Allocation Study",
    date: "Oct 2025",
    type: "Strategic Insight",
    description: "Survey of 50+ regional family offices on their 2026 real estate diversification strategies.",
    tags: ["Private Wealth", "Strategy", "Asset Allocation"],
    featured: false
  }
];

export default function ResearchClient() {
  const [isGated, setIsGated] = useState(true);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call for lead capturing
    setTimeout(() => {
      setIsGated(false);
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white font-light selection:bg-amber-500/30">
      
      {/* Hero */}
      <section className="relative pt-40 pb-24 px-8 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-600/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="h-px w-8 bg-amber-500" />
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-amber-500">
              Institutional Intelligence
            </span>
          </motion.div>

          <h1 className="text-5xl lg:text-7xl font-serif italic mb-8 leading-tight">
            Research & <br />
            <span className="text-amber-200/90 font-serif">Market Insights</span>
          </h1>
          <p className="max-w-2xl text-slate-400 text-lg leading-relaxed font-light italic border-l border-amber-500/30 pl-8">
            Evidence-based analysis for capital allocators. We provide the data layer 
            required for institutional underwriting in the East African property markets.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-12 border-t border-white/10 relative">
        
        {/* Progressive Disclosure Overlay */}
        <AnimatePresence>
          {isGated && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-x-0 bottom-0 top-0 z-40 bg-slate-950/40 backdrop-blur-md flex items-center justify-center p-8"
            >
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="max-w-md w-full bg-slate-900 border border-white/10 p-10 shadow-2xl"
              >
                <div className="text-center mb-8">
                  <Lock className="mx-auto mb-4 text-amber-500" size={32} />
                  <h3 className="text-2xl font-serif italic mb-2">Access Gated Intelligence</h3>
                  <p className="text-slate-400 text-sm">
                    Our research is reserved for institutional partners and qualified investors. 
                    Please provide your professional credentials to unlock.
                  </p>
                </div>

                <form onSubmit={handleUnlock} className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-[9px] uppercase tracking-[0.2em] text-slate-500 font-bold">Professional Email</label>
                    <input 
                      required
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. name@institution.com"
                      className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm focus:border-amber-500 outline-none transition-colors"
                    />
                  </div>
                  <button 
                    disabled={isSubmitting}
                    className="w-full py-4 bg-amber-500 text-black text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-amber-400 transition-all duration-500 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? "Verifying..." : "Unlock Intelligence Hub"}
                  </button>
                </form>

                <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-3 text-slate-500">
                  <ShieldCheck size={16} />
                  <span className="text-[9px] uppercase tracking-widest leading-none">Compliant with Data Protection Standards</span>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className={`max-w-7xl mx-auto px-8 transition-all duration-1000 ${isGated ? 'blur-sm grayscale opacity-30 select-none' : 'blur-0 grayscale-0 opacity-100'}`}>
          
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Sidebar Stats */}
            <div className="lg:col-span-1 space-y-12">
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-amber-500 mb-6">Real-Time Yield Index</h4>
                <div className="space-y-4">
                  {[
                    { label: "Prime Office (Westlands)", value: "8.7%", trend: "+15bps" },
                    { label: "Grade-A Logistics", value: "9.2%", trend: "Stable" },
                    { label: "Retail (Mixed Use)", value: "10.1%", trend: "-10bps" },
                    { label: "Residential (Lavington)", value: "5.8%", trend: "+20bps" }
                  ].map((stat, i) => (
                    <div key={i} className="flex justify-between items-end border-b border-white/5 pb-2">
                      <span className="text-slate-400 text-sm">{stat.label}</span>
                      <div className="text-right">
                        <span className="text-white font-medium block">{stat.value}</span>
                        <span className="text-[9px] text-slate-500 uppercase">{stat.trend}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/[0.02] border border-white/10 p-8">
                <h4 className="text-sm font-serif italic mb-4">Macro Commentary</h4>
                <p className="text-slate-400 text-xs leading-relaxed mb-6 italic">
                  "The recent KES stabilization has triggered a re-entry of offshore REIT capital, 
                  specifically targeting sale-leaseback opportunities in the manufacturing sector."
                </p>
                <span className="text-[9px] uppercase tracking-widest text-amber-500 font-bold">— Murivest Research Desk</span>
              </div>
            </div>

            {/* Reports List */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-12">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-amber-500">Available Reports</h4>
                <div className="flex items-center gap-2 text-slate-500">
                  <Search size={14} />
                  <span className="text-[10px] uppercase tracking-widest">Filter Intelligence</span>
                </div>
              </div>

              <div className="space-y-6">
                {reports.map((report, i) => (
                  <motion.div 
                    key={i}
                    className={`group p-8 border transition-all duration-500 ${report.featured ? 'bg-amber-500/5 border-amber-500/20' : 'bg-white/[0.02] border-white/10 hover:border-white/30'}`}
                  >
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex gap-4 items-center">
                        <div className={`p-3 ${report.featured ? 'bg-amber-500 text-black' : 'bg-slate-900 text-amber-500'} border border-white/5`}>
                          <FileText size={20} />
                        </div>
                        <div>
                          <span className="text-[9px] uppercase tracking-widest text-slate-500 font-bold mb-1 block">{report.type}</span>
                          <h3 className="text-xl font-serif text-white group-hover:text-amber-200 transition-colors">{report.title}</h3>
                        </div>
                      </div>
                      <span className="text-[10px] text-slate-500 font-mono uppercase">{report.date}</span>
                    </div>

                    <p className="text-slate-400 text-sm mb-8 max-w-xl leading-relaxed">
                      {report.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex gap-2">
                        {report.tags.map(tag => (
                          <span key={tag} className="text-[9px] uppercase tracking-widest px-2 py-1 bg-white/5 text-slate-500">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      {report.file ? (
                        <a 
                          href={report.file}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-amber-500 hover:text-white transition-colors"
                        >
                          Download Report (PDF) <Download size={14} />
                        </a>
                      ) : (
                        <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-500 hover:text-white transition-colors">
                          Request Full Access <ChevronRight size={14} />
                        </button>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Trust Signoff */}
      <section className="py-24 border-t border-white/10 text-center">
        <div className="max-w-2xl mx-auto px-8">
          <Globe className="mx-auto mb-8 text-amber-500/20" size={48} />
          <h4 className="text-2xl font-serif italic mb-6">Data Stewardship</h4>
          <p className="text-slate-500 text-xs leading-relaxed">
            Murivest's research is compiled using proprietary transaction data and vetted secondary sources. 
            We maintain absolute independence in our market assessments, providing institutional clients 
            with unvarnished truth in an often opaque market.
          </p>
        </div>
      </section>

    </div>
  );
}
