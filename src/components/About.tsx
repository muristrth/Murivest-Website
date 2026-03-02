'use client';

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight, Quote, MapPin, 
  ArrowUpRight, Award, Shield, Landmark, 
  Users, Globe, Phone, Mail
} from 'lucide-react';

// --- Types & Interfaces ---
interface StatProps {
  value: string;
  label: string;
  suffix?: string;
}

interface ValueCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  delay: number;
}

// --- Mock Data ---
const STATS: StatProps[] = [
  { value: "45", suffix: "+", label: "Years of Stewardship" },
  { value: "$2.4", suffix: "B", label: "Assets Under Management" },
  { value: "12", suffix: "", label: "Global Markets" },
  { value: "100", suffix: "%", label: "Client Retention" },
];

const VALUES = [
  {
    icon: Landmark,
    title: "Intergenerational Stewardship",
    description: "We do not merely manage assets; we curate legacies designed to outlive market cycles and transcend generations."
  },
  {
    icon: Shield,
    title: "Discretion & Privacy",
    description: "Absolute confidentiality is the bedrock of our practice. Your affairs remain shielded by institutional-grade privacy protocols."
  },
  {
    icon: Award,
    title: "Uncompromising Quality",
    description: "Access to trophy assets is reserved for the few. We select only properties that meet the strictest criteria of rarity and location."
  }
];

// --- Components ---

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-[85vh] min-h-[600px] w-full overflow-hidden flex items-center justify-center pt-20">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-black/40 z-10" /> {/* Overlay */}
        <img 
          src="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2070&auto=format&fit=crop" 
          alt="Luxury Golf Course Estate" 
          className="w-full h-full object-cover scale-110"
        />
      </motion.div>

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-20 text-center px-4 max-w-4xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="block text-amber-400 text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase mb-6">
            Established MCMXCVIII
          </span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-8 leading-[0.9]">
            Cultivating <br/>
            <span className="italic text-stone-200">Timeless Wealth</span>
          </h1>
          <p className="text-stone-300 text-sm md:text-base font-light tracking-wide max-w-lg mx-auto leading-relaxed">
            For three decades, Murivest has been the silent architect behind East Africa's most significant private asset acquisitions.
          </p>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-white/60">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-amber-500/50 to-transparent" />
      </motion.div>
    </section>
  );
};

const ValueCard = ({ icon: Icon, title, description, delay }: ValueCardProps) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="group p-8 md:p-12 border border-stone-200 hover:border-emerald-900/20 hover:bg-stone-50 transition-all duration-500"
  >
    <div className="mb-8 text-emerald-900 group-hover:text-amber-600 transition-colors duration-500">
      <Icon size={32} strokeWidth={1} />
    </div>
    <h3 className="font-serif text-2xl text-emerald-950 mb-4 group-hover:translate-x-2 transition-transform duration-500">
      {title}
    </h3>
    <p className="text-stone-600 font-light leading-relaxed text-sm">
      {description}
    </p>
  </motion.div>
);

const StatBlock = ({ value, label, suffix }: StatProps) => (
  <div className="flex flex-col items-center text-center p-6">
    <div className="font-serif text-4xl md:text-5xl text-emerald-950 mb-2">
      {value}<span className="text-amber-600 text-2xl align-top ml-1">{suffix}</span>
    </div>
    <div className="text-[10px] uppercase tracking-[0.2em] text-stone-500 font-medium">
      {label}
    </div>
  </div>
);

const QuoteSection = () => (
  <section className="py-24 md:py-32 bg-emerald-950 text-stone-100 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-64 h-64 bg-amber-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
    
    <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
      <Quote className="w-12 h-12 text-amber-600/30 mx-auto mb-8" strokeWidth={1} />
      <h2 className="font-serif text-3xl md:text-5xl leading-tight mb-8">
        "True wealth is not measured in returns, but in the <span className="italic text-amber-500">permanence</span> of the legacy you leave behind."
      </h2>
      <div className="flex items-center justify-center gap-4">
        <div className="w-12 h-px bg-stone-600" />
        <span className="text-xs uppercase tracking-widest text-stone-400">The Murivest Philosophy</span>
        <div className="w-12 h-px bg-stone-600" />
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-stone-100 pt-20 pb-10 border-t border-stone-200">
    <div className="max-w-[1800px] mx-auto px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-6 h-6 border border-emerald-900 rounded-full flex items-center justify-center">
              <span className="font-serif text-emerald-900 text-xs">M</span>
            </div>
            <span className="font-serif text-lg tracking-widest uppercase text-emerald-950">
              Murivest
            </span>
          </div>
          <p className="text-stone-500 font-light text-sm max-w-sm leading-relaxed mb-8">
            A private investment office dedicated to the preservation and growth of significant family wealth through strategic real asset allocation.
          </p>
          <div className="flex gap-4">
            {['LinkedIn', 'Instagram', 'Twitter'].map(social => (
              <a key={social} href="#" className="text-[10px] uppercase tracking-widest text-stone-400 hover:text-emerald-900 transition-colors">
                {social}
              </a>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-950 mb-6">Nairobi Office</h4>
          <address className="not-italic text-stone-500 font-light text-sm leading-loose">
            14th Floor, The Lofts<br/>
            Riverside Drive, Westlands<br/>
            Nairobi, Kenya<br/>
            +254 20 123 4567
          </address>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-950 mb-6">London Office</h4>
          <address className="not-italic text-stone-500 font-light text-sm leading-loose">
            12 Berkeley Square<br/>
            Mayfair<br/>
            London W1J 6BS<br/>
            +44 20 7123 4567
          </address>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-stone-200 text-[10px] text-stone-400 uppercase tracking-widest">
        <p>&copy; 2024 Murivest Group. All rights reserved.</p>
        <div className="flex gap-8 mt-4 md:mt-0">
          <a href="#" className="hover:text-emerald-900">Privacy Policy</a>
          <a href="#" className="hover:text-emerald-900">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

// --- Main Page Component ---

export default function AboutPage() {
  return (
    <div className="bg-stone-50 min-h-screen selection:bg-amber-200 selection:text-emerald-950">
      <main>
        <Hero />

        {/* Intro Section */}
        <section className="py-24 md:py-32 px-6 md:px-12 max-w-[1800px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-amber-600 text-[10px] font-bold tracking-[0.3em] uppercase mb-4 block">
                The Heritage
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-emerald-950 mb-8 leading-tight">
                A Legacy Forged in <br/>
                <span className="italic">Quiet Confidence</span>
              </h2>
              <div className="space-y-6 text-stone-600 font-light leading-relaxed">
                <p>
                  Founded in the spirit of the great European family offices, Murivest was established to serve a singular purpose: to shield and amplify wealth through the ownership of irreplaceable land and architecture.
                </p>
                <p>
                  We reject the noise of speculation. Instead, we embrace the patient accumulation of assets that define skylines and anchor communities. Our partners are not merely clients; they are stewards of history, entrusting us with the physical manifestation of their success.
                </p>
              </div>
              
              <div className="mt-10 flex items-center gap-4 group cursor-pointer">
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-950 group-hover:text-amber-600 transition-colors">
                  Read Our History
                </span>
                <div className="w-8 h-8 rounded-full border border-emerald-900/20 flex items-center justify-center group-hover:bg-emerald-950 group-hover:text-white transition-all">
                  <ArrowUpRight size={14} />
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -top-4 -left-4 w-full h-full border border-amber-500/30 z-0" />
              <div className="relative z-10 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop" 
                  alt="Luxury Estate" 
                  className="w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Strip */}
        <section className="bg-white border-y border-stone-200">
          <div className="max-w-[1800px] mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 divide-x divide-stone-100">
            {STATS.map((stat, i) => (
              <StatBlock key={i} {...stat} />
            ))}
          </div>
        </section>

        {/* Values Grid */}
        <section className="py-24 md:py-32 px-6 md:px-12 max-w-[1800px] mx-auto bg-stone-50">
          <div className="text-center mb-20">
            <span className="text-amber-600 text-[10px] font-bold tracking-[0.3em] uppercase mb-4 block">
              Pillars of Practice
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-emerald-950">
              Guiding Principles
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-stone-200 border border-stone-200">
            {VALUES.map((value, i) => (
              <ValueCard key={i} {...value} delay={i * 0.2} />
            ))}
          </div>
        </section>

        <QuoteSection />

        {/* CTA Section */}
        <section className="py-32 px-6 text-center bg-stone-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-4xl md:text-6xl text-emerald-950 mb-8">
              Begin Your Legacy
            </h2>
            <p className="text-stone-600 font-light mb-12 leading-relaxed">
              Access to our portfolio is strictly by referral or private invitation. 
              If you wish to explore the Murivest standard of stewardship, we invite you to initiate a confidential conversation.
            </p>
            <button className="bg-emerald-950 text-white px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-amber-600 transition-colors duration-300">
              Request Private Consultation
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}