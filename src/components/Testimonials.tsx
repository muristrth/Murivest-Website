'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "Murivest's institutional approach to commercial property investment exceeded our expectations. Their due diligence process was exhaustive, and the returns have been consistent.",
    author: "Managing Director",
    company: "European Family Office",
    location: "Zurich, Switzerland",
    investment: "$12M+",
    type: "Commercial Portfolio",
  },
  {
    id: 2,
    quote: "The team's deep understanding of East Africa's regulatory landscape helped us navigate complex cross-border transactions seamlessly. A true partner in every sense.",
    author: "Chief Investment Officer",
    company: "Sovereign Wealth Fund",
    location: "Middle East",
    investment: "$45M+",
    type: "Mixed-Use Development",
  },
  {
    id: 3,
    quote: "We were particularly impressed by the off-market opportunities Murivest identified. These were assets we never saw on the open market, and they've performed exceptionally.",
    author: "Partner",
    company: "Global Private Equity Firm",
    location: "London, UK",
    investment: "$28M+",
    type: "Industrial & Logistics",
  },
  {
    id: 4,
    quote: "Their asset care and property management division maintains our investments to institutional standards. The reporting is transparent, comprehensive, and timely.",
    author: "Director",
    company: "Asian Investment Holding",
    location: "Singapore",
    investment: "$18M+",
    type: "Retail & Office",
  },
  {
    id: 5,
    quote: "Murivest's expertise in Kenya's REIT market helped us structure our entry strategically. Their local networks and market intelligence are unmatched.",
    author: "Portfolio Manager",
    company: "US Institutional Investor",
    location: "New York, USA",
    investment: "$35M+",
    type: "REIT Investments",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      if (newDirection === -1) {
        return prev === 0 ? testimonials.length - 1 : prev - 1;
      }
      return prev === testimonials.length - 1 ? 0 : prev + 1;
    });
  };

  // Auto-advance every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => paginate(1), 8000);
    return () => clearInterval(timer);
  }, []);

  const current = testimonials[currentIndex];

  return (
    <section className="py-32 bg-slate-950 relative overflow-hidden">
      {/* Background ambiance */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-950 pointer-events-none" />
      
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
              Client Endorsements
            </span>
            <div className="h-px w-8 bg-amber-500" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-serif italic text-white mb-6">
            Trusted by <span className="text-amber-200/80">Institutional Investors</span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-400 font-light">
            Feedback from sovereign funds, family offices, and global private equity firms who have partnered with Murivest.
          </p>
        </motion.div>

        {/* Testimonial Slider */}
        <div className="relative max-w-5xl mx-auto">
          {/* Navigation arrows */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-16 z-20 p-4 border border-white/10 hover:border-amber-500/50 hover:bg-amber-500/10 transition-all group"
          >
            <ChevronLeft className="text-white group-hover:text-amber-500" size={24} />
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-16 z-20 p-4 border border-white/10 hover:border-amber-500/50 hover:bg-amber-500/10 transition-all group"
          >
            <ChevronRight className="text-white group-hover:text-amber-500" size={24} />
          </button>

          {/* Testimonial Card */}
          <div className="overflow-hidden relative min-h-[400px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
              >
                {/* Quote icon */}
                <div className="lg:col-span-2 hidden lg:block">
                  <div className="w-20 h-20 border border-amber-500/30 flex items-center justify-center">
                    <Quote className="text-amber-500" size={40} strokeWidth={1} />
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-10">
                  <div className="bg-white/[0.02] border border-white/10 p-12 relative">
                    {/* Quote mark */}
                    <Quote className="absolute top-8 left-8 text-amber-500/20" size={48} strokeWidth={1} />
                    
                    <blockquote className="relative z-10 mb-10">
                      <p className="text-xl lg:text-2xl text-slate-300 font-light leading-relaxed italic">
                        "{current.quote}"
                      </p>
                    </blockquote>

                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                      <div>
                        <p className="text-white font-semibold text-lg">{current.author}</p>
                        <p className="text-amber-500 text-sm uppercase tracking-widest">{current.company}</p>
                        <p className="text-slate-500 text-sm">{current.location}</p>
                      </div>
                      <div className="text-right lg:text-left">
                        <p className="text-3xl font-serif italic text-amber-200">{current.investment}</p>
                        <p className="text-slate-500 text-xs uppercase tracking-widest">{current.type}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > currentIndex ? 1 : -1);
                  setCurrentIndex(i);
                }}
                className={`w-2 h-2 transition-all ${
                  i === currentIndex ? 'bg-amber-500 w-8' : 'bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Trust metrics */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20 pt-20 border-t border-white/10"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: "$150M+", label: "Total Transaction Value" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "45+", label: "Countries Represented" },
              { value: "100%", label: "Fiduciary Compliance" },
            ].map((stat, i) => (
              <div key={i} className="p-6">
                <p className="text-3xl lg:text-4xl font-serif italic text-amber-200 mb-2">{stat.value}</p>
                <p className="text-slate-500 text-xs uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
