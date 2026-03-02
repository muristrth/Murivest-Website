'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  title: string;
  organization: string;
}

interface TestimonialsProps {
  testimonials?: Testimonial[];
}

/**
 * Testimonials - Golf Club Lounge Aesthetic
 * Elegant testimonial carousel
 */
const Testimonials = ({ testimonials = [] }: TestimonialsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const defaultTestimonials: Testimonial[] = [
    {
      id: '1',
      quote: 'Murivest has been an exceptional partner in our East African real estate investments. Their deep market knowledge, professional approach, and commitment to transparency have consistently delivered results that exceed our expectations.',
      author: 'James Richardson',
      title: 'Chief Investment Officer',
      organization: 'Heritage Family Office'
    },
    {
      id: '2',
      quote: 'The team at Murivest understands the nuances of institutional investing in emerging markets. Their ability to source off-market opportunities and execute complex transactions is unmatched in the region.',
      author: 'Dr. Amara Okonkwo',
      title: 'Portfolio Manager',
      organization: 'African Development Capital'
    },
    {
      id: '3',
      quote: 'Working with Murivest has transformed our approach to African real estate. Their advisory services are sophisticated, their network is extensive, and their integrity is beyond question.',
      author: 'William Chen',
      title: 'Managing Director',
      organization: 'Pacific Rim Investments'
    }
  ];

  const displayTestimonials = testimonials.length > 0 ? testimonials : defaultTestimonials;

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % displayTestimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + displayTestimonials.length) % displayTestimonials.length);
  };

  return (
    <section className="relative bg-[#2C2C2C] text-[#F8F7F4] overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2C2C2C] via-[#3D3530] to-[#2C2C2C]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#8B7355]/10 blur-[150px] rounded-full" />
      
      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-32">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-[#C4B59D]" />
            <p className="text-[11px] tracking-[0.4em] uppercase text-[#C4B59D] font-medium">
              Partner Perspectives
            </p>
            <div className="w-8 h-[1px] bg-[#C4B59D]" />
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-[1.1] text-[#F8F7F4]">
            Words of <span className="italic text-[#C4B59D] font-light">Confidence</span>
          </h2>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Quote Icon */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-20">
            <Quote className="w-20 h-20 text-[#C4B59D]" strokeWidth={1} />
          </div>

          {/* Content */}
          <div className="relative min-h-[300px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-center px-4 md:px-16"
              >
                <blockquote className="text-xl md:text-2xl lg:text-3xl font-serif leading-[1.4] text-[#F8F7F4] mb-10">
                  "{displayTestimonials[currentIndex].quote}"
                </blockquote>
                
                <div>
                  <p className="text-lg font-medium text-[#F8F7F4] mb-1">
                    {displayTestimonials[currentIndex].author}
                  </p>
                  <p className="text-[12px] tracking-[0.15em] uppercase text-[#C4B59D]">
                    {displayTestimonials[currentIndex].title}, {displayTestimonials[currentIndex].organization}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 border border-[#C4B59D]/30 flex items-center justify-center hover:border-[#C4B59D] hover:bg-[#C4B59D]/10 transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-[#C4B59D]" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-3">
              {displayTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-[#C4B59D] w-6' 
                      : 'bg-[#C4B59D]/30 hover:bg-[#C4B59D]/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 border border-[#C4B59D]/30 flex items-center justify-center hover:border-[#C4B59D] hover:bg-[#C4B59D]/10 transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-[#C4B59D]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;