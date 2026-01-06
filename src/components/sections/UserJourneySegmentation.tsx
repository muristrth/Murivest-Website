'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  UserCheck, 
  Key, 
  HelpCircle,
  ArrowRight 
} from 'lucide-react';
import Link from 'next/link';

const segments = [
  {
    title: "Institutional Investors",
    desc: "Bespoke mandates for pension funds, SWFs, and global capital allocators seeking structured CRE exposure.",
    cta: "Institutional Gateway",
    href: "/institutional-investors",
    icon: Building2,
    color: "bg-amber-500"
  },
  {
    title: "HNWI & Family Offices",
    desc: "Discreet advisory and off-market deal origination for private wealth and family-led investment vehicles.",
    cta: "Private Advisory",
    href: "/wealth-management",
    icon: UserCheck,
    color: "bg-slate-700"
  },
  {
    title: "Property Owners",
    desc: "Strategic divestment and sale-leaseback solutions for corporate and private real estate owners.",
    cta: "List Asset",
    href: "/sell",
    icon: Key,
    color: "bg-slate-800"
  },
  {
    title: "General Inquiries",
    desc: "Connect with our Nairobi office for general partnership or service-related discussions.",
    cta: "Contact Desk",
    href: "/contact",
    icon: HelpCircle,
    color: "bg-slate-900"
  }
];

const UserJourneySegmentation = () => {
  return (
    <section className="py-24 bg-slate-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <p className="text-[10px] tracking-[0.4em] uppercase text-amber-500 font-bold mb-4">Select Engagement Path</p>
          <h2 className="text-3xl md:text-4xl font-serif italic text-white">How Can We Assist You?</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {segments.map((segment, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-white/[0.02] border border-white/10 p-8 hover:bg-white/[0.04] transition-all duration-500 flex flex-col h-full"
            >
              <div className="mb-6">
                <segment.icon className="text-amber-500" size={24} strokeWidth={1.5} />
              </div>
              
              <h3 className="text-xl font-serif text-white mb-4 group-hover:text-amber-200 transition-colors">
                {segment.title}
              </h3>
              
              <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                {segment.desc}
              </p>

              <Link 
                href={segment.href}
                className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-amber-500 border-b border-amber-500/20 pb-2 hover:border-amber-500 transition-all duration-300"
              >
                {segment.cta} <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserJourneySegmentation;
