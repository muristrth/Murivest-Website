'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Building2, TrendingUp, Shield, Landmark } from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    title: "Nairobi CBD Grade-A Office Portfolio",
    category: "Commercial Office",
    challenge: "A European sovereign fund sought exposure to Nairobi's premium office market but required institutional-grade tenants and long-term lease structures.",
    solution: "Identified and acquired three Grade-A office buildings in the CBD with multi-national tenants (banks, telecoms, oil & gas). Negotiated 15-year lease terms with annual escalations.",
    outcome: "$32M transaction | 9.2% IRR | Triple-net leases | 100% occupancy",
    metrics: ["32M USD", "9.2% IRR", "15 Yr Leases", "100% Occupancy"],
    icon: Building2,
  },
  {
    id: 2,
    title: "Mombasa Road Industrial Logistics Hub",
    category: "Industrial & Logistics",
    challenge: "A global private equity firm needed exposure to East Africa's logistics sector, requiring cold chain capabilities and proximity to port infrastructure.",
    solution: "Acquired 45 acres along Mombasa Road, developed a 280,000 sqft logistics facility with cold chain infrastructure. Secured a Fortune 500 e-commerce tenant on a 10-year lease.",
    outcome: "$48M development | 18% development yield | Tier-1 tenant",
    metrics: ["48M USD", "18% Yield", "280K Sqft", "Fortune 500 Tenant"],
    icon: TrendingUp,
  },
  {
    id: 3,
    title: "Westlands Mixed-Use Development",
    category: "Mixed-Use",
    challenge: "A family office from the Middle East sought a trophy asset with diversification across retail, office, and residential uses in Nairobi's premier commercial node.",
    solution: "Structured an off-market acquisition of a 5-acre mixed-use development in Westlands. Asset included retail podium, Grade-A office tower, and luxury apartments.",
    outcome: "$55M acquisition | 12% cash-on-cash | Institutional tenants",
    metrics: ["55M USD", "12% CoC Return", "5 Acres", "Mixed-Use"],
    icon: Landmark,
  },
  {
    id: 4,
    title: "Regional Shopping Mall Portfolio",
    category: "Retail",
    challenge: "A listed REIT sought to expand its retail footprint with high-quality neighborhood shopping centers in underserved secondary cities.",
    solution: "Originated and acquired three shopping malls in Kisumu, Nakuru, and Eldoret. Implemented value-add strategy including rebranding and tenant mix optimization.",
    outcome: "$28M portfolio | 85% to 97% occupancy | 15% NOI growth",
    metrics: ["28M USD", "15% NOI Growth", "3 Malls", "Secondary Cities"],
    icon: Shield,
  },
];

const CaseStudies = () => {
  return (
    <section className="py-32 bg-slate-950 relative overflow-hidden">
      {/* Background ambiance */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-600/3 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/3 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Section header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-8 bg-amber-500" />
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-amber-500">
              Mandate Track Record
            </span>
            <div className="h-px w-8 bg-amber-500" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-serif italic text-white mb-6">
            Selected <span className="text-amber-200/80">Transaction Case Studies</span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-400 font-light">
            Demonstrating our ability to execute complex, high-value real estate mandates across East Africa.
          </p>
        </motion.div>

        {/* Case studies grid */}
        <div className="space-y-24">
          {caseStudies.map((study, i) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-start ${
                i % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
            >
              {/* Icon and category */}
              <div className={`lg:col-span-2 ${i % 2 === 1 ? 'lg:col-start-11' : ''}`}>
                <div className="w-16 h-16 border border-amber-500/30 flex items-center justify-center mb-6">
                  <study.icon className="text-amber-500" size={28} strokeWidth={1} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-amber-500">
                  {study.category}
                </span>
              </div>

              {/* Content */}
              <div className={`lg:col-span-8 ${i % 2 === 1 ? 'lg:col-start-3 lg:row-start-1' : ''}`}>
                <h3 className="text-2xl lg:text-3xl font-serif italic text-white mb-8">
                  {study.title}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                  <div className="p-6 bg-white/[0.02] border border-white/10">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-3">Challenge</p>
                    <p className="text-slate-400 font-light text-sm leading-relaxed">{study.challenge}</p>
                  </div>
                  <div className="p-6 bg-white/[0.02] border border-white/10">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-500 mb-3">Solution</p>
                    <p className="text-slate-400 font-light text-sm leading-relaxed">{study.solution}</p>
                  </div>
                  <div className="p-6 bg-amber-500/5 border border-amber-500/20">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-500 mb-3">Outcome</p>
                    <p className="text-slate-300 font-light text-sm leading-relaxed">{study.outcome}</p>
                  </div>
                </div>

                {/* Metrics */}
                <div className="flex flex-wrap gap-4">
                  {study.metrics.map((metric, j) => (
                    <span 
                      key={j}
                      className="px-4 py-2 bg-white/[0.02] border border-white/10 text-slate-300 text-xs font-medium"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <a 
            href="/representative-transactions" 
            className="inline-flex items-center gap-3 px-8 py-4 border border-amber-500/30 hover:border-amber-500 hover:bg-amber-500/10 transition-all group"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-500 group-hover:text-amber-400">
              View Complete Transaction History
            </span>
            <ArrowUpRight className="text-amber-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;
