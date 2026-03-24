'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';

interface Leader {
  id: string;
  name: string;
  title: string;
  bio: string;
  image: string;
  linkedin?: string;
  email?: string;
}

interface ExecutiveLeadershipProps {
  leaders?: Leader[];
}

/**
 * Executive Leadership - Golf Club Lounge Aesthetic
 * Leadership team with understated elegance
 */
const ExecutiveLeadership = ({ leaders = [] }: ExecutiveLeadershipProps) => {
  const defaultLeaders: Leader[] = [
    {
      id: '1',
      name: 'Mark Muriithi',
      title: 'Chief Executive Officer & Founder',
      bio: 'Mark Muriithi founded Murivest Realty Group in 2025 with a mandate to build Kenya\'s first institutionally-structured commercial real estate advisory practice oriented toward international capital. He brings a background spanning technology, commercial distribution, and real estate sales — disciplines that inform Murivest\'s integrated approach to deal origination, asset positioning, and investor relations. His early career included commercial roles at Vineyard Properties Ltd, where he developed hands-on experience in property transactions and client acquisition across the Kenyan market. He subsequently held senior commercial positions in distribution and marketing, building the capital markets literacy and cross-sector network that underpins Murivest\'s advisory model.',
      image: '/ceo.png',
      linkedin: 'https://www.linkedin.com/in/mark-muriithi-343365215/',
      email: 'mark.muriithi@murivest.co.ke'
    },
  ];

  const displayLeaders = leaders.length > 0 ? leaders : defaultLeaders;

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
              Leadership
            </p>
            <div className="w-8 h-[1px] bg-[#8B7355]" />
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-[1.1] mb-6 text-[#2C2C2C]">
            The <span className="italic text-[#8B7355] font-light">Principals</span>
          </h2>
          
          <p className="text-[15px] leading-[1.8] text-[#5A5A5A] font-light max-w-2xl mx-auto">
          The founders and senior advisors behind Murivest's commercial real estate mandates in East Africa.
          </p>
        </motion.div>

        {/* Leaders Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6">
          {displayLeaders.map((leader, index) => (
            <motion.article
              key={leader.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1] 
              }}
              className="group"
            >
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden bg-[#E5E2DC] mb-6">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C2C2C]/60 via-transparent to-transparent" />
                
                {/* Social links */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {leader.linkedin && (
                    <a 
                      href={leader.linkedin}
                      className="w-10 h-10 bg-[#F8F7F4]/90 flex items-center justify-center hover:bg-[#8B7355] hover:text-white transition-colors duration-300"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                  {leader.email && (
                    <a 
                      href={`mailto:${leader.email}`}
                      className="w-10 h-10 bg-[#F8F7F4]/90 flex items-center justify-center hover:bg-[#8B7355] hover:text-white transition-colors duration-300"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl md:text-2xl font-serif mb-1 text-[#2C2C2C] group-hover:text-[#8B7355] transition-colors duration-500">
                  {leader.name}
                </h3>
                <p className="text-[11px] tracking-[0.2em] uppercase text-[#8B7355] font-medium mb-4">
                  {leader.title}
                </p>
                <p className="text-[14px] leading-[1.7] text-[#5A5A5A] font-light">
                  {leader.bio}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Hairline bottom border */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-[#E5E2DC]" />
    </section>
  );
};

export default ExecutiveLeadership;