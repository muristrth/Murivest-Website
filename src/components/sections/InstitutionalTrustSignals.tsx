'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Scale, Lock, Handshake, FileText, AlertCircle } from 'lucide-react';

const InstitutionalTrustSignals = () => {
  const partners = [
    { name: 'API Global', location: 'UK', established: '2004' },
    { name: 'Baron & Cabot', location: 'UK', established: '2014' },
    { name: 'Knight Frank', location: 'Kenya', established: '1896' },
    { name: 'Pam Golding', location: 'Kenya', established: '1976' },
  ];

  return (
    <section className="bg-[#2a4a2e] text-[#FAF9F6]">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16 py-16 lg:py-20">
        
        {/* Main Trust Bar */}
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
                Independent Advisory
              </p>
              <p className="text-[13px] text-[#A8A39D] font-light leading-relaxed">
                Mandate-based engagements • Institutional standards • Fiduciary alignment
              </p>
            </div>
          </motion.div>

          {/* Right: Location */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="flex flex-wrap items-center gap-8 lg:gap-12"
          >
            <div className="flex items-center gap-3 text-[#A8A39D]">
              <Scale className="h-4 w-4 text-[#8B7355]" strokeWidth={1.5} />
              <span className="text-[11px] tracking-[0.2em] uppercase">Nairobi, Kenya</span>
            </div>
            
            <div className="flex items-center gap-3 text-[#A8A39D]">
              <Lock className="h-4 w-4 text-[#8B7355]" strokeWidth={1.5} />
              <span className="text-[11px] tracking-[0.2em] uppercase">KYC/AML Verified</span>
            </div>
          </motion.div>
        </div>

        {/* Strategic Alliances */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-6">
            <Handshake className="h-4 w-4 text-[#8B7355]" strokeWidth={1.5} />
            <span className="text-[11px] tracking-[0.25em] uppercase text-[#8B7355] font-medium">
              Professional Collaboration
            </span>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (index * 0.05), duration: 0.5 }}
                className="border-l border-[#8B7355]/30 pl-4"
              >
                <p className="text-[14px] text-[#F8F7F4] font-light tracking-wide mb-1">
                  {partner.name}
                </p>
                <p className="text-[10px] text-[#8B7355] tracking-[0.15em] uppercase">
                  {partner.location} · Est. {partner.established}
                </p>
              </motion.div>
            ))}
          </div>
          
          <p className="text-[10px] text-[#8B7355] tracking-[0.15em] mt-4 italic">
            Details available upon request for qualified partners
          </p>
        </motion.div>

        {/* Divider */}
        <div className="h-[1px] bg-[#8B7355]/20 mb-8" />

        {/* Compliance Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="space-y-6"
        >
          <div className="text-center">
            <h4 className="text-[12px] tracking-[0.4em] uppercase text-[#8B7355] font-medium mb-6">
              Regulatory Framework &amp; Disclosures
            </h4>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-[#8B7355]/20 flex items-center justify-center flex-shrink-0">
                <FileText className="h-5 w-5 text-[#8B7355]" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-[11px] text-[#FAF9F6] font-medium mb-1">Mandate Documentation Required</p>
                <p className="text-[10px] text-[#A8A39D] leading-relaxed">
                  Formal agreements executed prior to any transaction engagement. Scope of work clearly defined.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-[#8B7355]/20 flex items-center justify-center flex-shrink-0">
                <Lock className="h-5 w-5 text-[#8B7355]" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-[11px] text-[#FAF9F6] font-medium mb-1">KYC/AML Compliance</p>
                <p className="text-[10px] text-[#A8A39D] leading-relaxed">
                  Full verification required for all capital partner introductions and mandate participants.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-[#8B7355]/20 flex items-center justify-center flex-shrink-0">
                <AlertCircle className="h-5 w-5 text-[#8B7355]" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-[11px] text-[#FAF9F6] font-medium mb-1">No Collective Schemes</p>
                <p className="text-[10px] text-[#A8A39D] leading-relaxed">
                  We do not pool capital or operate collective investment vehicles. Advisory services only.
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-[#8B7355]/20 flex items-center justify-center flex-shrink-0">
              <Scale className="h-5 w-5 text-[#8B7355]" strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-[11px] text-[#FAF9F6] font-medium mb-1">Licensed Activities Only</p>
              <p className="text-[10px] text-[#A8A39D] leading-relaxed">
                Murivest Realty Group does not offer regulated financial products or unlicensed investment advice. 
                All services provided within our licensed commercial real estate advisory scope.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Footer Disclaimer */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 pt-8 border-t border-[#8B7355]/20 text-center"
        >
          <p className="text-[10px] text-[#A8A39D] leading-relaxed max-w-2xl mx-auto">
            Murivest Realty Group Ltd is an independent real estate advisory firm. We do not act as a licensed investment advisor and do not offer regulated financial products. All opportunities are subject to independent verification, legal due diligence, and formal mandate documentation.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default InstitutionalTrustSignals;