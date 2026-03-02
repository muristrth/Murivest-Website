'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Globe, Scale, Lock } from 'lucide-react';

const InstitutionalTrustSignals = () => {
  return (
    <section className="bg-[#2C2C2C] text-[#F8F7F4]">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16 py-16 lg:py-20">
        
        {/* Main Trust Bar - Like Club Credentials */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 mb-12">
          
          {/* Left: Primary Credential */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-start gap-5"
          >
            <div className="w-12 h-12 rounded-full border border-[#8B7355]/30 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="h-5 w-5 text-[#8B7355]" strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-[12px] tracking-[0.3em] uppercase text-[#F8F7F4] font-medium mb-2">
                Fiduciary Standards
              </p>
              <p className="text-[13px] text-[#A8A39D] font-light leading-relaxed">
                Confidential Mandates • IC-Safe Process • Stewardship
              </p>
            </div>
          </motion.div>

          {/* Right: Location & Compliance */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="flex flex-wrap items-center gap-8 lg:gap-12"
          >
            <div className="flex items-center gap-3 text-[#A8A39D]">
              <Globe className="h-4 w-4 text-[#8B7355]" strokeWidth={1.5} />
              <span className="text-[11px] tracking-[0.2em] uppercase">Nairobi • London • Dubai</span>
            </div>
            
            <div className="flex items-center gap-3 text-[#A8A39D]">
              <Scale className="h-4 w-4 text-[#8B7355]" strokeWidth={1.5} />
              <span className="text-[11px] tracking-[0.2em] uppercase">CMA • RICS • KRA</span>
            </div>
            
            <div className="flex items-center gap-3 text-[#A8A39D]">
              <Lock className="h-4 w-4 text-[#8B7355]" strokeWidth={1.5} />
              <span className="text-[11px] tracking-[0.2em] uppercase">Bank-Grade Confidentiality</span>
            </div>
          </motion.div>
        </div>

        {/* Divider - Subtle */}
        <div className="h-[1px] bg-[#8B7355]/20 mb-8" />

        {/* Disclaimer - Like Club Bylaws */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center"
        >
          <p className="text-[10px] text-[#5A5A5A] uppercase tracking-[0.25em] leading-relaxed max-w-4xl mx-auto">
            Murivest Realty Group is an independent advisory firm. We do not offer unlicensed financial products 
            or pool capital from the general public. All engagements are by mandate only and subject to rigorous 
            KYC/AML verification.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default InstitutionalTrustSignals;