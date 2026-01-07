'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Building, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const KilimaniMixedUseProjects = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-light selection:bg-amber-500/30">
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
              Kilimani Mixed-Use Projects
            </span>
          </motion.div>
          <h1 className="text-5xl lg:text-7xl font-serif italic mb-8 leading-tight">
            Kilimani Mixed-Use <br />
            <span className="text-amber-200/90 font-serif">Developments</span>
          </h1>
          <p className="max-w-2xl text-slate-400 text-lg leading-relaxed font-light italic border-l border-amber-500/30 pl-8">
            "Kilimani's contemporary mixed-use developments combine modern office spaces, retail, and residential components in Nairobi's evolving urban landscape."
          </p>
        </div>
      </section>

      <section className="border-t border-white/10">
        <Link href="/contact" className="group flex flex-col items-center py-32 hover:bg-white/[0.02] transition-colors">
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-amber-500 mb-8">Mixed-Use Investment</span>
          <h2 className="text-5xl lg:text-7xl font-serif italic text-center mb-12">
            Modern Urban <br />Development Opportunities
          </h2>
          <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] border-b border-amber-500 pb-2 group-hover:gap-8 transition-all duration-500">
            Request Kilimani Development Brief <ArrowUpRight size={16} />
          </div>
        </Link>
      </section>
    </div>
  );
};

export default KilimaniMixedUseProjects;