"use client";

import React from 'react';
import Link from 'next/link';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Landmark, Scale, PieChart, ArrowUpRight, ShieldCheck } from 'lucide-react';

const TaxCard = ({ title, desc, icon: Icon, link, tag }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Creates the 3D tilt effect
  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  function handleMouse(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  }

  return (
    <motion.div
      style={{ perspective: 1000 }}
      onMouseMove={handleMouse}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      className="relative group"
    >
      <motion.div
        style={{ rotateX, rotateY }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="h-full bg-white border border-gray-100 p-8 rounded-[2rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] transition-shadow duration-500 relative overflow-hidden"
      >
        {/* Decorative Background Blur */}
        <div className="absolute -right-4 -top-4 w-24 h-24 bg-amber-500/5 rounded-full blur-2xl group-hover:bg-amber-500/10 transition-colors" />
        
        <div className="relative z-10 flex flex-col h-full">
          <div className="flex justify-between items-start mb-8">
            <div className="p-3 bg-gray-50 rounded-2xl group-hover:bg-amber-500 group-hover:text-white transition-all duration-300">
              <Icon className="h-6 w-6" />
            </div>
            <span className="text-[10px] font-black tracking-widest uppercase text-amber-600 bg-amber-50 py-1 px-3 rounded-full">
              {tag}
            </span>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-4 leading-snug">
            {title}
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
            {desc}
          </p>

          <Link href={link} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-900 hover:text-amber-600 transition-colors">
            Analyze Strategy <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
};

const TaxIntelligenceSection = () => {
  return (
    <section className="py-24 bg-gray-50/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-1 w-8 bg-amber-500" />
              <span className="text-xs font-bold tracking-widest uppercase text-gray-500">Regulatory Excellence</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-gray-900">
              Tax & Regulatory <span className="italic">Intelligence</span>
            </h2>
          </div>
          <p className="text-gray-600 max-w-sm text-sm leading-relaxed">
            Navigating KRA frameworks to protect and optimize the post-tax performance of your East African real estate portfolio.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <TaxCard 
            tag="Optimization"
            icon={Landmark}
            title="Capital Gains Strategy"
            desc="Advanced legal frameworks for minimizing CGT liabilities on prime land disposition and industrial asset sales."
            link="/tax-optimization-land"
          />
          <TaxCard 
            tag="Structuring"
            icon={Scale}
            title="Family Trust Vehicles"
            desc="Transitioning individual ownership into tax-efficient private family trusts for seamless multi-generational wealth transfer."
            link="/trust-structures"
          />
          <TaxCard 
            tag="Yield Analysis"
            icon={PieChart}
            title="Post-Tax Yield vs. T-Bills"
            desc="A quantitative comparison of commercial lease income versus traditional financial instruments in the current KRA regime."
            link="/income-comparison"
          />
        </div>

        {/* Floating Trust Badge */}
        <div className="mt-20 flex justify-center">
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-white border border-gray-100 rounded-full shadow-sm">
            <ShieldCheck className="h-5 w-5 text-green-600" />
            <span className="text-xs font-medium text-gray-700">
              KRA Compliant Frameworks • ISO 27001 Data Security • Fiduciary Duty
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaxIntelligenceSection;