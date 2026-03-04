'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, CheckCircle, Lock, FileCheck, TrendingUp } from 'lucide-react';

interface TrustBadge {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface TrustBadgesProps {
  badges?: TrustBadge[];
}

/**
 * Trust Badges - Golf Club Lounge Aesthetic
 * Credibility indicators for UHNWI
 */
const TrustBadges = ({ badges = [] }: TrustBadgesProps) => {
  const defaultBadges: TrustBadge[] = [
    {
      icon: Shield,
      title: 'Fiduciary Standard',
      description: 'Legally bound to act in your best interest'
    },
    {
      icon: Award,
      title: 'FIABCI Member',
      description: 'International Real Estate Federation membership'
    },
    {
      icon: CheckCircle,
      title: 'CMA Registered',
      description: 'Capital Markets Authority compliance'
    },
    {
      icon: Lock,
      title: 'Data Protection',
      description: 'GDPR and local privacy law compliant'
    },
    {
      icon: FileCheck,
      title: 'Audited Financials',
      description: 'Big Four annual audit certification'
    },
    {
      icon: TrendingUp,
      title: 'Track Record',
      description: '$18M+ in closed transactions since 2020'
    }
  ];

  const displayBadges = badges.length > 0 ? badges : defaultBadges;

  return (
    <section className="relative bg-[#FAFAF8] text-[#2C2C2C] overflow-hidden">
      {/* Hairline top border */}
      <div className="absolute top-0 left-0 w-full h-px bg-[#E5E2DC]" />
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-24">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-[#8B7355]" />
            <p className="text-[11px] tracking-[0.4em] uppercase text-[#8B7355] font-medium">
              Our Credentials
            </p>
            <div className="w-8 h-[1px] bg-[#8B7355]" />
          </div>
          
          <h2 className="text-2xl md:text-3xl font-serif text-[#2C2C2C]">
            Standards of <span className="italic text-[#8B7355] font-light">Excellence</span>
          </h2>
        </motion.div>

        {/* Badges Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {displayBadges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.05,
                ease: [0.16, 1, 0.3, 1] 
              }}
              className="group text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 border border-[#E5E2DC] flex items-center justify-center group-hover:border-[#8B7355] transition-colors duration-500">
                <badge.icon 
                  className="w-6 h-6 text-[#8B7355] group-hover:scale-110 transition-transform duration-500" 
                  strokeWidth={1} 
                />
              </div>
              <h3 className="text-[13px] font-medium text-[#2C2C2C] mb-1">
                {badge.title}
              </h3>
              <p className="text-[11px] text-[#5A5A5A] font-light">
                {badge.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Hairline bottom border */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-[#E5E2DC]" />
    </section>
  );
};

export default TrustBadges;