'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Clock, Send, CheckCircle, 
  AlertCircle, Loader2, Calendar, X, Globe, 
  ShieldCheck, ArrowUpRight, Lock 
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    investmentRange: '',
    propertyType: '',
    message: ''
  });
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);

  // Form logic remains the same as your provided code...
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error('Failed to send message');
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', investmentRange: '', propertyType: '', message: '' });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNewsletterSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    try {
      // Simulate API call for newsletter subscription
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: newsletterEmail }),
      });
      if (!response.ok) throw new Error('Failed to subscribe');
      setNewsletterSubmitted(true);
      setNewsletterEmail('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred.');
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white font-light selection:bg-amber-500/30">
      
      {/* 1. ARCHITECTURAL HERO HEADER */}
      <section className="relative pt-40 pb-20 px-8">
        <div className="absolute top-0 left-1/2 w-[800px] h-[400px] bg-amber-600/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <Lock size={14} className="text-amber-500" />
            <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-amber-500">Secure Consultation Portal</span>
          </motion.div>
          <h1 className="text-5xl lg:text-7xl font-serif italic mb-6">Connect with the <span className="text-amber-200/90">Authority</span></h1>
          <p className="max-w-2xl mx-auto text-slate-400 text-lg font-light leading-relaxed">
            Inquire about off-market opportunities or schedule a private portfolio review with our institutional advisory team.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-8 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-white/10 border border-white/10">
          
          {/* 2. INSTITUTIONAL INTEL PANEL (Left) */}
          <div className="lg:col-span-5 bg-[#080a0f] p-12 lg:p-16 flex flex-col justify-between">
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-500 mb-12">Global Headquarters</h3>
              
              <div className="space-y-12">
                <div className="group cursor-pointer">
                  <p className="text-[10px] font-bold text-amber-500 uppercase tracking-widest mb-2 flex items-center gap-2">
                    <MapPin size={12} /> Office Location
                  </p>
                  <p className="text-xl font-serif italic group-hover:text-amber-200 transition-colors leading-relaxed">
                    Westlands Business District<br />Nairobi, Kenya
                  </p>
                </div>

                <div className="group cursor-pointer">
                  <p className="text-[10px] font-bold text-amber-500 uppercase tracking-widest mb-2 flex items-center gap-2">
                    <Mail size={12} /> Direct Correspondence
                  </p>
                  <p className="text-xl font-serif italic group-hover:text-amber-200 transition-colors">investments@murivest.com</p>
                  <p className="text-slate-500 text-sm mt-1">Typical response: Under 2 hours</p>
                </div>

                <div className="group cursor-pointer">
                  <p className="text-[10px] font-bold text-amber-500 uppercase tracking-widest mb-2 flex items-center gap-2">
                    <Phone size={12} /> Secure Line
                  </p>
                  <p className="text-xl font-serif italic group-hover:text-amber-200 transition-colors">+254 115 277 610</p>
                </div>
              </div>
            </div>

            <div className="mt-20 pt-12 border-t border-white/5">
              <div className="flex items-center gap-4 mb-6">
                <ShieldCheck className="text-amber-500" size={24} strokeWidth={1} />
                <span className="text-[10px] font-bold uppercase tracking-widest text-white">Client Assurance</span>
              </div>
              <ul className="space-y-4 text-xs uppercase tracking-[0.2em] text-slate-500">
                <li className="flex items-center gap-3"><div className="w-1 h-1 bg-amber-500 rounded-full" /> NDAs Available Upon Request</li>
                <li className="flex items-center gap-3"><div className="w-1 h-1 bg-amber-500 rounded-full" /> Encrypted Communication</li>
                <li className="flex items-center gap-3"><div className="w-1 h-1 bg-amber-500 rounded-full" /> Multi-Jurisdictional Support</li>
              </ul>
            </div>
          </div>

          {/* 3. PRIVATE BRIEFING FORM (Right) */}
          <div className="lg:col-span-7 bg-[#05070a] p-12 lg:p-16">
            {isSubmitted ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full flex flex-col items-center justify-center text-center py-20">
                <CheckCircle className="h-16 w-16 text-amber-500 mb-8" strokeWidth={1} />
                <h2 className="text-4xl font-serif italic mb-4">Briefing Requested</h2>
                <p className="text-slate-400 mb-10 max-w-sm">Our advisory team has received your transmission and will respond within the next two hours.</p>
                <button onClick={() => setIsSubmitted(false)} className="text-[10px] font-bold uppercase tracking-[0.4em] text-amber-500 border-b border-amber-500 pb-1">Initiate New Inquiry</button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="relative group">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 group-focus-within:text-amber-500 transition-colors">Principal Name</label>
                    <input name="name" required value={formData.name} onChange={handleChange} className="w-full bg-transparent border-b border-white/10 py-4 text-sm focus:outline-none focus:border-amber-500 transition-colors placeholder:text-slate-800" placeholder="FULL LEGAL NAME" />
                  </div>
                  <div className="relative group">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 group-focus-within:text-amber-500 transition-colors">Professional Email</label>
                    <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full bg-transparent border-b border-white/10 py-4 text-sm focus:outline-none focus:border-amber-500 transition-colors placeholder:text-slate-800" placeholder="CORP@INVEST.COM" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="relative group">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 group-focus-within:text-amber-500 transition-colors">Capital Allocation</label>
                    <select name="investmentRange" value={formData.investmentRange} onChange={handleChange} className="w-full bg-transparent border-b border-white/10 py-4 text-sm focus:outline-none focus:border-amber-500 transition-colors appearance-none cursor-pointer">
                      <option value="" className="bg-[#05070a]">$ SELECT RANGE</option>
                      <option value="1-3M" className="bg-[#05070a]">$ 1M — 3M</option>
                      <option value="3-10M" className="bg-[#05070a]">$ 3M — 10M</option>
                      <option value="10-50M" className="bg-[#05070a]">$ 10M — 50M</option>
                      <option value="50M+" className="bg-[#05070a]">$ 50M+</option>
                    </select>
                  </div>
                  <div className="relative group">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 group-focus-within:text-amber-500 transition-colors">Asset Class</label>
                    <select name="propertyType" value={formData.propertyType} onChange={handleChange} className="w-full bg-transparent border-b border-white/10 py-4 text-sm focus:outline-none focus:border-amber-500 transition-colors appearance-none cursor-pointer">
                      <option value="" className="bg-[#05070a]">SELECT CATEGORY</option>
                      <option value="commercial" className="bg-[#05070a]">COMMERCIAL</option>
                      <option value="hospitality" className="bg-[#05070a]">HOSPITALITY</option>
                      <option value="industrial" className="bg-[#05070a]">INDUSTRIAL & LOGISTICS</option>
                    </select>
                  </div>
                </div>

                <div className="relative group">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 group-focus-within:text-amber-500 transition-colors">Briefing Requirements</label>
                  <textarea name="message" rows={3} value={formData.message} onChange={handleChange} className="w-full bg-transparent border-b border-white/10 py-4 text-sm focus:outline-none focus:border-amber-500 transition-colors resize-none placeholder:text-slate-800" placeholder="SPECIFY INVESTMENT OBJECTIVES..." />
                </div>

                <button type="submit" disabled={isSubmitting} className="group relative w-full bg-amber-600 hover:bg-amber-500 text-black py-6 text-[10px] font-bold uppercase tracking-[0.5em] transition-all overflow-hidden">
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    {isSubmitting ? <Loader2 className="animate-spin" size={16} /> : <>Initiate Briefing <ArrowUpRight size={14} /></>}
                  </span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* 4. PRIVATE CALENDAR CTA */}
        <section className="mt-32 relative group cursor-pointer" onClick={() => setShowCalendar(true)}>
          <div className="absolute -inset-px bg-gradient-to-r from-amber-500/50 to-transparent opacity-20" />
          <div className="relative border border-white/10 p-12 lg:p-20 flex flex-col lg:flex-row items-center justify-between gap-12 bg-white/[0.01] hover:bg-white/[0.03] transition-colors">
            <div className="text-center lg:text-left">
              <div className="flex items-center gap-3 text-amber-500 mb-6 justify-center lg:justify-start">
                <Calendar size={20} strokeWidth={1} />
                <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Direct Advisory</span>
              </div>
              <h2 className="text-3xl lg:text-5xl font-serif italic mb-4 leading-tight">Book a Private <br />Video Consultation</h2>
              <p className="text-slate-500 uppercase tracking-widest text-[10px] font-bold">Encrypted End-to-End • 30 Minute Strategic Overview</p>
            </div>
            <div className="h-20 w-20 border border-amber-500/30 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-amber-500 transition-all duration-500">
               <ArrowUpRight className="text-amber-500 group-hover:text-black transition-colors" size={32} />
            </div>
          </div>
        </section>

        {/* 5. MINIMAL NEWSLETTER SECTION */}
        <section className="mt-32 max-w-xl mx-auto text-center">
          <Globe className="mx-auto text-slate-800 mb-8" size={32} strokeWidth={1} />
          <h3 className="text-xl font-serif italic mb-8">Intelligence Reports</h3>
          <form onSubmit={handleNewsletterSubmit} className="flex gap-4 border-b border-white/10 pb-2">
            <input type="email" value={newsletterEmail} onChange={(e) => setNewsletterEmail(e.target.value)} placeholder="ENTER EMAIL FOR QUARTERLY ANALYSIS" className="flex-1 bg-transparent text-[10px] font-bold tracking-widest uppercase focus:outline-none" required />
            <button type="submit" className="text-amber-500 text-[10px] font-bold uppercase tracking-widest hover:text-white transition-colors">Subscribe</button>
          </form>
          <p className="text-[9px] text-slate-700 uppercase tracking-widest mt-6">Proprietary data. Discerning insights. Zero spam.</p>
        </section>
      </main>

      {/* 6. MODAL SYSTEM (REFINED) */}
      <AnimatePresence>
        {showCalendar && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-[#05070a]/95 backdrop-blur-xl z-[100] flex items-center justify-center p-8">
            <div className="max-w-2xl w-full relative">
              <button onClick={() => setShowCalendar(false)} className="absolute -top-16 right-0 text-slate-500 hover:text-white transition-colors flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest">
                Close <X size={16} />
              </button>
              <div className="text-center space-y-12">
                <div className="space-y-4">
                   <h2 className="text-4xl font-serif italic">Schedule Strategic Call</h2>
                   <div className="h-px w-24 bg-amber-500 mx-auto" />
                </div>
                <div className="grid grid-cols-1 gap-4">
                  <a href="tel:+254115277610" className="group block border border-white/10 p-8 hover:bg-white/[0.03] transition-all">
                    <p className="text-amber-500 text-[10px] font-bold uppercase tracking-[0.3em] mb-2">Priority Line</p>
                    <p className="text-2xl font-serif italic">+254 115 277 610</p>
                  </a>
                  <a href="mailto:info@murivest.com" className="group block border border-white/10 p-8 hover:bg-white/[0.03] transition-all">
                    <p className="text-amber-500 text-[10px] font-bold uppercase tracking-[0.3em] mb-2">Email Advisor</p>
                    <p className="text-2xl font-serif italic">advisory@murivest.com</p>
                  </a>
                </div>
                <p className="text-slate-600 text-[10px] uppercase tracking-widest font-bold">Standard response: 08:00 - 18:00 EAT</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Contact;