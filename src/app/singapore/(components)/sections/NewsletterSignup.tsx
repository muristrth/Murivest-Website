'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Check } from 'lucide-react';
import ScrollReveal from '../shared/ScrollReveal';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      setSubmitted(true);
    }
  };

  return (
    <section className="py-20 md:py-32 bg-[#1B4332] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
        backgroundSize: '40px 40px',
      }} />
      
      <div className="relative z-10 max-w-[800px] mx-auto px-6 md:px-12 text-center">
        <ScrollReveal>
          {/* Ornamental rule */}
          <div className="flex items-center gap-4 mb-8 justify-center">
            <div className="flex-1 h-px max-w-[80px] bg-[#B8956B]/30" />
            <span className="text-[9px] tracking-[0.3em] uppercase text-[#B8956B]" style={{ fontFamily: 'Georgia, serif' }}>
              Murivest Intelligence
            </span>
            <div className="flex-1 h-px max-w-[80px] bg-[#B8956B]/30" />
          </div>

          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4 leading-tight">
            The Private Briefing
          </h2>
          <p className="text-sm text-white/60 font-light mb-2 max-w-lg mx-auto leading-relaxed">
            Singapore market intelligence, off-market deal flow, and regulatory updates — 
            delivered monthly to qualified investors only.
          </p>
          <p className="text-[11px] text-white/40 italic mb-10">
            We email when it matters. Never fluff. Unsubscribe at any time.
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-center gap-3 border border-[#B8956B]/40 px-6 py-4 max-w-md mx-auto"
            >
              <Check className="w-4 h-4 text-[#B8956B]" strokeWidth={1.5} />
              <p className="text-[13px] text-[#C9A87C]" style={{ fontFamily: 'Georgia, serif' }}>
                You&apos;re on the list. We&apos;ll be in touch.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                required
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3.5 text-[13px] outline-none placeholder:text-stone-500 bg-white/5 border border-[#B8956B]/30 text-[#F5F0E4] focus:border-[#B8956B] transition-colors"
                style={{ fontFamily: 'Georgia, serif' }}
              />
              <button
                type="submit"
                className="px-8 py-3.5 text-[11px] font-semibold tracking-[0.18em] uppercase bg-[#B8956B] text-white hover:bg-[#C9A87C] transition-colors"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                Subscribe
              </button>
            </form>
          )}

          <div className="flex items-center justify-center gap-2 mt-6">
            <Shield className="w-3 h-3 text-[#B8956B]/50" strokeWidth={1.5} />
            <p className="text-[10px] text-white/40 tracking-wider">
              Your information is protected under Singapore PDPA
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
