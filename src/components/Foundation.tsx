'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Globe, Users, ArrowRight } from 'lucide-react';

/**
 * Foundation Section - Golf Club Lounge Aesthetic
 * Corporate social responsibility and philanthropy
 */
const Foundation = () => {
  const initiatives = [
    {
      icon: Heart,
      title: 'Education Access',
      description: 'Supporting scholarships and educational infrastructure in underserved communities across East Africa.',
      stat: '2,500+',
      statLabel: 'Students Supported'
    },
    {
      icon: Globe,
      title: 'Sustainable Development',
      description: 'Environmental stewardship through green building practices and carbon-neutral development initiatives.',
      stat: '45%',
      statLabel: 'Carbon Reduction'
    },
    {
      icon: Users,
      title: 'Community Investment',
      description: 'Direct investment in local communities through job creation and skills development programs.',
      stat: '1,200+',
      statLabel: 'Jobs Created'
    }
  ];

  return (
    <section className="relative bg-[#F8F7F4] text-[#2C2C2C] overflow-hidden">
      {/* Hairline top border */}
      <div className="absolute top-0 left-0 w-full h-px bg-[#E5E2DC]" />
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-32">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 md:mb-24"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-[#8B7355]" />
            <p className="text-[11px] tracking-[0.4em] uppercase text-[#8B7355] font-medium">
              Social Impact
            </p>
            <div className="w-8 h-[1px] bg-[#8B7355]" />
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-[1.1] mb-6 text-[#2C2C2C]">
            The Murivest <span className="italic text-[#8B7355] font-light">Foundation</span>
          </h2>
          
          <p className="text-[15px] leading-[1.8] text-[#5A5A5A] font-light max-w-2xl mx-auto">
            Beyond investment returns, we are committed to creating lasting positive impact 
            in the communities where we operate.
          </p>
        </motion.div>

        {/* Initiatives Grid */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-6 mb-16">
          {initiatives.map((initiative, index) => (
            <motion.div
              key={initiative.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1] 
              }}
              className="group p-8 md:p-10 bg-white border border-[#E5E2DC] hover:border-[#8B7355] transition-colors duration-500"
            >
              {/* Icon */}
              <div className="w-14 h-14 border border-[#E5E2DC] flex items-center justify-center mb-6 group-hover:border-[#8B7355] transition-colors duration-500">
                <initiative.icon className="w-6 h-6 text-[#8B7355]" strokeWidth={1} />
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-serif mb-4 text-[#2C2C2C]">
                {initiative.title}
              </h3>

              {/* Description */}
              <p className="text-[14px] leading-[1.7] text-[#5A5A5A] font-light mb-8">
                {initiative.description}
              </p>

              {/* Stat */}
              <div className="pt-6 border-t border-[#E5E2DC]">
                <p className="text-3xl font-serif text-[#8B7355] mb-1">{initiative.stat}</p>
                <p className="text-[11px] tracking-[0.15em] uppercase text-[#5A5A5A]">{initiative.statLabel}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#2C2C2C] text-[#F8F7F4] p-8 md:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#8B7355]/10 blur-[100px] rounded-full" />
          
          <div className="relative z-10">
            <p className="text-xl md:text-2xl lg:text-3xl font-serif leading-[1.4] mb-8 max-w-3xl mx-auto">
              "True wealth is measured not only in financial returns, but in the positive 
              <span className="italic text-[#C4B59D] font-light"> legacy </span> 
              we leave for future generations."
            </p>
            <p className="text-[12px] tracking-[0.2em] uppercase text-[#C4B59D]">
              — The Murivest Philosophy
            </p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 text-center"
        >
          <a 
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 border border-[#8B7355] text-[12px] tracking-[0.2em] uppercase text-[#2C2C2C] font-medium hover:bg-[#8B7355] hover:text-[#F8F7F4] transition-all duration-500"
          >
            <span>Learn More About Our Impact</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>

      {/* Hairline bottom border */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-[#E5E2DC]" />
    </section>
  );
};

export default Foundation;