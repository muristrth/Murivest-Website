'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Shield, Crown, Globe, Award, Building } from 'lucide-react';

const Hero = () => {
  // Old money inspired images - classic architecture, luxury estates
  const images = [
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&h=1080&fit=crop', // Luxury modern building
    'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&h=1080&fit=crop', // Corporate building
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop'  // City skyline
  ];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handleWhatsAppContact = (message: string) => {
    const phoneNumber = "254115277610";
    const encodedMessage = encodeURIComponent(
      `Greetings from a prospective investor. ${message}`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Sophisticated overlay with subtle pattern */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="absolute inset-0 opacity-5 z-15" style={{
        backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,255,255,.02) 2px, rgba(255,255,255,.02) 4px)`
      }}></div>

      {/* Premium background transitions */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 transition-all duration-2000 ease-in-out"
        style={{
          backgroundImage: `url("${images[currentImage]}")`,
        }}
      ></div>

      {/* Elegant floating elements */}
      <div className="absolute inset-0 overflow-hidden z-20">
        <motion.div
          className="absolute top-32 left-16 w-2 h-2 bg-amber-400 rounded-full opacity-30"
          animate={{ y: [0, -30, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-64 right-32 w-3 h-3 bg-amber-300 rounded-full opacity-25"
          animate={{ y: [0, 40, 0], opacity: [0.25, 0.5, 0.25] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-48 left-32 w-1.5 h-1.5 bg-amber-500 rounded-full opacity-40"
          animate={{ y: [0, -25, 0], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 7, repeat: Infinity }}
        />
      </div>

      {/* Main corporate content */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-8 lg:py-16 z-30">
        <div className="max-w-5xl">
          {/* Prestigious header */}
          <motion.div
            className="flex items-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Building className="h-7 w-7 text-amber-500 mr-3" />
            <span className="text-amber-500 font-serif text-sm tracking-widest uppercase">
              Established Investment House • Since 2025
            </span>
          </motion.div>

          {/* Power headline with social proof */}
          <motion.h1
            className="text-3xl md:text-5xl font-serif font-light mb-6 leading-tight tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Generational Wealth Through
            <span className="text-amber-400 block font-medium">East African Real Estate</span>
          </motion.h1>

          {/* Authority subheadline */}
          <motion.p
            className="text-lg md:text-xl mb-5 text-gray-200 leading-relaxed font-serif font-light max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Join discerning international investors who have already secured <span className="text-amber-400 font-medium">$50M+</span> in premium Kenyan commercial properties.
          </motion.p>

          {/* Urgency and scarcity */}
          <motion.p
            className="text-base mb-8 text-amber-200 font-serif italic"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Exclusive opportunity: Only 12 prime properties remain in our Q4 portfolio.
          </motion.p>

          {/* CTA buttons with hierarchy */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link href="/properties">
              <motion.button
                className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 font-serif font-medium text-base transition-all duration-300 flex items-center justify-center group shadow-2xl hover:shadow-amber-500/25 border border-amber-500"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Exclusive Portfolio
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
            
            <motion.button
              className="border-2 border-amber-400 hover:bg-amber-400 hover:text-slate-900 text-amber-400 px-6 py-3 font-serif font-medium text-base transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleWhatsAppContact("I am an international investor interested in your exclusive portfolio. Please arrange a private consultation.")}
            >
              Private Consultation
            </motion.button>
          </motion.div>

          {/* Social proof metrics - more corporate */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.div
              className="flex items-center bg-white/5 backdrop-blur-md border border-white/10 rounded-none p-4 hover:bg-white/10 transition-all duration-300"
              whileHover={{ y: -2 }}
            >
              <TrendingUp className="h-6 w-6 text-amber-400 mr-3" />
              <div>
                <div className="text-2xl font-serif font-light text-amber-400">22%</div>
                <div className="text-gray-300 font-serif text-xs uppercase tracking-wide">Average IRR</div>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center bg-white/5 backdrop-blur-md border border-white/10 rounded-none p-4 hover:bg-white/10 transition-all duration-300"
              whileHover={{ y: -2 }}
            >
              <Globe className="h-6 w-6 text-amber-400 mr-3" />
              <div>
                <div className="text-2xl font-serif font-light text-amber-400">4+</div>
                <div className="text-gray-300 font-serif text-xs uppercase tracking-wide">Countries</div>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center bg-white/5 backdrop-blur-md border border-white/10 rounded-none p-4 hover:bg-white/10 transition-all duration-300"
              whileHover={{ y: -2 }}
            >
              <Shield className="h-6 w-6 text-amber-400 mr-3" />
              <div>
                <div className="text-2xl font-serif font-light text-amber-400">$50M+</div>
                <div className="text-gray-300 font-serif text-xs uppercase tracking-wide">Assets Under Management</div>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center bg-white/5 backdrop-blur-md border border-white/10 rounded-none p-4 hover:bg-white/10 transition-all duration-300"
              whileHover={{ y: -2 }}
            >
              <Award className="h-6 w-6 text-amber-400 mr-3" />
              <div>
                <div className="text-2xl font-serif font-light text-amber-400">100%</div>
                <div className="text-gray-300 font-serif text-xs uppercase tracking-wide">Investor Retention</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            className="mt-16 pt-8 border-t border-white/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <p className="text-gray-400 font-serif text-sm uppercase tracking-widest mb-4">
              Trusted By International Investors From
            </p>
            <div className="flex flex-wrap gap-8 text-gray-500 font-serif text-sm">
              <span>United Kingdom</span>
              <span>•</span>
              <span>United States</span>
              <span>•</span>
              <span>Dubai</span>
              <span>•</span>
              <span>Singapore</span>
              <span>•</span>
              <span>China</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
