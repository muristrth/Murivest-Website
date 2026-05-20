'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Scale, Lock, Handshake, FileText, AlertCircle, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const partners = [
  { name: 'API Global', location: 'United Kingdom', established: '2004', href: '#' },
  { name: 'Baron & Cabot', location: 'United Kingdom', established: '2014', href: '#' },
  { name: 'Knight Frank', location: 'Kenya', established: '1896', href: '#' },
  { name: 'Pam Golding', location: 'Kenya', established: '1976', href: '#' },
];

const complianceItems = [
  {
    icon: FileText,
    title: 'Mandate Documentation Required',
    desc: 'All engagements governed by formal mandate agreements defining scope, liability, and execution terms prior to advisory commencement.',
  },
  {
    icon: Lock,
    title: 'KYC / AML Compliance',
    desc: 'Full identity and source-of-funds verification required for all capital partners prior to any advisory or transaction engagement.',
  },
  {
    icon: AlertCircle,
    title: 'No Collective Investment Schemes',
    desc: 'Murivest does not pool capital or operate regulated investment funds. Strictly advisory services on a mandate basis only.',
  },
];

const InstitutionalTrustSignals = () => {
  return (
    <section className="bg-[#1B3528] text-[#FAF9F6]">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-16 py-16 lg:py-24">

        {/* ── PLATFORM IDENTITY ──────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 pb-12 border-b border-[#8B7355]/20 mb-12"
        >
          <div className="flex items-start gap-5">
            <div className="w-12 h-12 rounded-full border border-[#8B7355]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
              <ShieldCheck className="h-5 w-5 text-[#8B7355]" strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-[12px] tracking-[0.35em] uppercase text-[#F8F7F4] font-medium mb-2">
                Independent Advisory Platform
              </p>
              <p className="text-[13px] text-[#A8A39D] font-light leading-relaxed">
                Mandate-based engagements · Institutional underwriting standards · Fiduciary alignment
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-8 lg:gap-12">
            <div className="flex items-center gap-3 text-[#A8A39D]">
              <Scale className="h-4 w-4 text-[#8B7355]" strokeWidth={1.5} />
              <span className="text-[10px] tracking-[0.25em] uppercase">Nairobi, Kenya</span>
            </div>
            <div className="flex items-center gap-3 text-[#A8A39D]">
              <Lock className="h-4 w-4 text-[#8B7355]" strokeWidth={1.5} />
              <span className="text-[10px] tracking-[0.25em] uppercase">KYC / AML Verified</span>
            </div>
            <Link
              href="/compliance"
              className="text-[10px] tracking-[0.25em] uppercase text-[#8B7355] hover:text-[#FAF9F6] transition-colors duration-300"
            >
              Compliance Framework →
            </Link>
          </div>
        </motion.div>

        {/* ── STRATEGIC PARTNERSHIPS ─────────── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="mb-14"
        >
          <div className="flex items-center gap-4 mb-8">
            <Handshake className="h-4 w-4 text-[#8B7355]" strokeWidth={1.5} />
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#8B7355] font-medium">
              Professional & Strategic Collaboration
            </span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + index * 0.06, duration: 0.6 }}
                className="border-l border-[#8B7355]/25 pl-5 group"
              >
                <div className="flex items-start justify-between">
                  <p className="text-[14px] text-[#F8F7F4] font-light tracking-wide mb-1">
                    {partner.name}
                  </p>
                  <ExternalLink className="h-3 w-3 text-[#8B7355] opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1" />
                </div>
                <p className="text-[10px] text-[#8B7355] tracking-[0.15em] uppercase">
                  {partner.location} · Est. {partner.established}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── BLACK STANDARD ─────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.18, duration: 0.7 }}
          className="mb-14 border-t border-[#8B7355]/15 pt-10"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-4 h-px bg-[#8B7355]" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#8B7355] font-medium">
              Strategic Access Layer
            </span>
          </div>

          <div className="border-l border-[#8B7355]/25 pl-6 space-y-4 max-w-3xl">
            <p className="text-[14px] text-[#F8F7F4] font-light leading-[1.8]">
              <span className="text-[#8B7355] font-medium">Black Standard</span> — Private lifestyle infrastructure
              partner providing UHNW mobility coordination, aviation access, concierge services,
              security orchestration, and global residence logistics through a discreet,
              invitation-based network.
            </p>
            <p className="text-[10px] text-[#A8A39D] tracking-[0.2em] uppercase">
              Non-public access layer · Discretion-first execution · Invitation-only coordination
            </p>
            <a
              href="https://www.black-standard.com/en/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase text-[#8B7355] hover:text-[#FAF9F6] transition-colors duration-300"
            >
              Visit Strategic Partner
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </motion.div>

        {/* ── DIVIDER ────────────────────────── */}
        <div className="h-px bg-[#8B7355]/15 mb-12" />

        {/* ── COMPLIANCE FRAMEWORK ───────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <p className="text-[10px] tracking-[0.4em] uppercase text-[#8B7355] font-medium mb-8 text-center">
            Regulatory Framework & Disclosures
          </p>

          <div className="grid md:grid-cols-3 gap-px bg-[#8B7355]/10 border border-[#8B7355]/15">
            {complianceItems.map((item, i) => (
              <div key={i} className="bg-[#1B3528] p-6 lg:p-8 flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#8B7355]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <item.icon className="h-4 w-4 text-[#8B7355]" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-[11px] text-[#FAF9F6] font-medium mb-2 tracking-wide">
                    {item.title}
                  </p>
                  <p className="text-[11px] text-[#A8A39D] leading-[1.7] font-light">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── FOOTER DISCLAIMER ──────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-12 pt-8 border-t border-[#8B7355]/15 text-center"
        >
          <p className="text-[10px] text-[#A8A39D] leading-[1.8] max-w-2xl mx-auto font-light">
            Murivest Realty Group Ltd is an independent commercial real estate advisory platform.
            All engagements are subject to formal mandate agreements, independent due diligence,
            and regulatory compliance frameworks applicable in Kenya and international jurisdictions.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default InstitutionalTrustSignals;