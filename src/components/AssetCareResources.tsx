'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Wrench, FileText, Users, ArrowRight } from 'lucide-react';

/**
 * Asset Care Resources - Golf Club Lounge Aesthetic
 * Professional property management services
 */
const AssetCareResources = () => {
  const resources = [
    {
      icon: Building2,
      title: "Property Management",
      description: "Comprehensive oversight of commercial assets, from tenant relations to facility maintenance, ensuring optimal performance."
    },
    {
      icon: Wrench,
      title: "Maintenance Coordination",
      description: "Proactive and reactive maintenance programs delivered through vetted contractor networks and quality assurance protocols."
    },
    {
      icon: FileText,
      title: "Compliance & Reporting",
      description: "Regulatory compliance management with detailed financial reporting and performance analytics for complete transparency."
    },
    {
      icon: Users,
      title: "Tenant Relations",
      description: "Professional tenant engagement and retention strategies that protect rental income and asset value."
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
              Asset Stewardship
            </p>
            <div className="w-8 h-[1px] bg-[#8B7355]" />
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-[1.1] mb-6 text-[#2C2C2C]">
            Professional <span className="italic text-[#8B7355] font-light">Care</span>
          </h2>
          
          <p className="text-[15px] leading-[1.8] text-[#5A5A5A] font-light max-w-2xl mx-auto">
            Comprehensive asset management services designed to preserve and enhance 
            the value of your commercial real estate portfolio.
          </p>
        </motion.div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 gap-px bg-[#E5E2DC] border border-[#E5E2DC]">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1] 
              }}
              className="group bg-[#F8F7F4] p-8 md:p-12 hover:bg-[#FAFAF8] transition-colors duration-500"
            >
              {/* Icon */}
              <div className="w-12 h-12 border border-[#E5E2DC] flex items-center justify-center mb-6 group-hover:border-[#8B7355] transition-colors duration-500">
                <resource.icon className="w-5 h-5 text-[#8B7355]" strokeWidth={1} />
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-serif mb-4 text-[#2C2C2C] group-hover:translate-x-2 transition-transform duration-500">
                {resource.title}
              </h3>

              {/* Description */}
              <p className="text-[14px] leading-[1.7] text-[#5A5A5A] font-light mb-6">
                {resource.description}
              </p>

              {/* Link */}
              <a 
                href="#"
                className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-[#8B7355] font-medium hover:text-[#2C2C2C] transition-colors duration-500"
              >
                <span>Learn More</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 text-center"
        >
          <a 
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 border border-[#8B7355] text-[12px] tracking-[0.2em] uppercase text-[#2C2C2C] font-medium hover:bg-[#8B7355] hover:text-[#F8F7F4] transition-all duration-500"
          >
            <span>Request Asset Review</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>

      {/* Hairline bottom border */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-[#E5E2DC]" />
    </section>
  );
};

export default AssetCareResources;