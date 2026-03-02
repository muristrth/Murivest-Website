'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, MapPin, DollarSign, TrendingUp, ArrowRight, CheckCircle, Send } from 'lucide-react';

/**
 * Sell Property - Golf Club Lounge Aesthetic
 * Elegant property listing submission form
 */
const SellProperty = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    ownerName: '',
    email: '',
    phone: '',
    propertyName: '',
    location: '',
    propertyType: '',
    size: '',
    askingPrice: '',
    description: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-[#F8F7F4] text-[#2C2C2C]">
      
      {/* Hero Section */}
      <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 px-6 md:px-12 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#8B7355]/5 blur-[120px] rounded-full" />
        
        <div className="max-w-[1400px] mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-8 h-[1px] bg-[#8B7355]" />
            <span className="text-[11px] tracking-[0.4em] uppercase text-[#8B7355] font-medium">
              Property Disposition
            </span>
          </motion.div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.1] mb-8">
            List Your <span className="italic text-[#8B7355] font-light">Property</span>
          </h1>
          
          <div className="grid lg:grid-cols-2 gap-12 items-end mt-12">
            <p className="text-[15px] leading-[1.8] text-[#5A5A5A] font-light border-l border-[#8B7355]/30 pl-6">
              Murivest works with property owners to achieve optimal outcomes through our network 
              of institutional buyers and investors. Submit your property details for confidential review.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="/contact" 
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#2C2C2C] text-[#F8F7F4] text-[11px] tracking-[0.25em] uppercase font-medium hover:bg-[#8B7355] transition-colors duration-500"
              >
                Contact Advisory Team
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Sell With Us */}
      <section className="py-16 md:py-24 border-t border-[#E5E2DC]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-16"
          >
            <p className="text-[11px] tracking-[0.4em] uppercase text-[#8B7355] font-medium mb-4">
              Our Approach
            </p>
            <h2 className="text-3xl md:text-4xl font-serif">
              Why Sell With <span className="italic text-[#8B7355] font-light">Murivest</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Building2,
                title: 'Institutional Network',
                desc: 'Access to qualified buyers including family offices, pension funds, and REITs'
              },
              {
                icon: DollarSign,
                title: 'Optimal Pricing',
                desc: 'Data-driven valuation and pricing strategy to maximize sale proceeds'
              },
              {
                icon: TrendingUp,
                title: 'Market Intelligence',
                desc: 'Deep understanding of buyer motivations and market timing'
              },
              {
                icon: CheckCircle,
                title: 'Confidential Process',
                desc: 'Discreet marketing to protect your position and tenant relationships'
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group p-8 bg-white border border-[#E5E2DC] hover:border-[#8B7355] transition-colors duration-500 text-center"
              >
                <item.icon className="w-8 h-8 text-[#8B7355] mx-auto mb-6 group-hover:scale-110 transition-transform duration-500" strokeWidth={1} />
                <h4 className="text-lg font-serif mb-4 text-[#2C2C2C]">{item.title}</h4>
                <p className="text-[13px] leading-[1.7] text-[#5A5A5A] font-light">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Property Submission Form */}
      <section className="py-16 md:py-24 bg-[#FAFAF8] border-t border-[#E5E2DC]">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-serif mb-4">
              Submit Your <span className="italic text-[#8B7355] font-light">Property</span>
            </h2>
            <p className="text-[14px] leading-[1.7] text-[#5A5A5A] font-light">
              Complete the form below for confidential review by our advisory team.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white border border-[#E5E2DC] p-8 md:p-12"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <CheckCircle className="w-16 h-16 text-[#8B7355] mx-auto mb-6" strokeWidth={1} />
                <h3 className="text-2xl font-serif mb-4 text-[#2C2C2C]">Submission Received</h3>
                <p className="text-[15px] leading-[1.8] text-[#5A5A5A] font-light">
                  Thank you for submitting your property details. Our advisory team will review 
                  your submission and contact you within 48 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Owner Information */}
                <div>
                  <h3 className="text-lg font-serif mb-6 text-[#8B7355]">Owner Information</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[11px] tracking-[0.2em] uppercase text-[#5A5A5A] mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="ownerName"
                        required
                        value={formData.ownerName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-transparent border-b border-[#E5E2DC] text-[#2C2C2C] font-light focus:border-[#8B7355] focus:outline-none transition-colors duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] tracking-[0.2em] uppercase text-[#5A5A5A] mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-transparent border-b border-[#E5E2DC] text-[#2C2C2C] font-light focus:border-[#8B7355] focus:outline-none transition-colors duration-300"
                      />
                    </div>
                  </div>
                  <div className="mt-6">
                    <label className="block text-[11px] tracking-[0.2em] uppercase text-[#5A5A5A] mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-transparent border-b border-[#E5E2DC] text-[#2C2C2C] font-light focus:border-[#8B7355] focus:outline-none transition-colors duration-300"
                    />
                  </div>
                </div>

                {/* Property Information */}
                <div className="pt-8 border-t border-[#E5E2DC]">
                  <h3 className="text-lg font-serif mb-6 text-[#8B7355]">Property Information</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[11px] tracking-[0.2em] uppercase text-[#5A5A5A] mb-2">
                        Property Name
                      </label>
                      <input
                        type="text"
                        name="propertyName"
                        value={formData.propertyName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-transparent border-b border-[#E5E2DC] text-[#2C2C2C] font-light focus:border-[#8B7355] focus:outline-none transition-colors duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] tracking-[0.2em] uppercase text-[#5A5A5A] mb-2">
                        Location *
                      </label>
                      <input
                        type="text"
                        name="location"
                        required
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-transparent border-b border-[#E5E2DC] text-[#2C2C2C] font-light focus:border-[#8B7355] focus:outline-none transition-colors duration-300"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-6 mt-6">
                    <div>
                      <label className="block text-[11px] tracking-[0.2em] uppercase text-[#5A5A5A] mb-2">
                        Property Type *
                      </label>
                      <select
                        name="propertyType"
                        required
                        value={formData.propertyType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-transparent border-b border-[#E5E2DC] text-[#2C2C2C] font-light focus:border-[#8B7355] focus:outline-none transition-colors duration-300"
                      >
                        <option value="">Select Type</option>
                        <option value="office">Office</option>
                        <option value="retail">Retail</option>
                        <option value="industrial">Industrial</option>
                        <option value="hospitality">Hospitality</option>
                        <option value="mixed-use">Mixed Use</option>
                        <option value="land">Land</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[11px] tracking-[0.2em] uppercase text-[#5A5A5A] mb-2">
                        Size (sq ft)
                      </label>
                      <input
                        type="text"
                        name="size"
                        value={formData.size}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-transparent border-b border-[#E5E2DC] text-[#2C2C2C] font-light focus:border-[#8B7355] focus:outline-none transition-colors duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] tracking-[0.2em] uppercase text-[#5A5A5A] mb-2">
                        Asking Price (USD)
                      </label>
                      <input
                        type="text"
                        name="askingPrice"
                        value={formData.askingPrice}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-transparent border-b border-[#E5E2DC] text-[#2C2C2C] font-light focus:border-[#8B7355] focus:outline-none transition-colors duration-300"
                      />
                    </div>
                  </div>
                  <div className="mt-6">
                    <label className="block text-[11px] tracking-[0.2em] uppercase text-[#5A5A5A] mb-2">
                      Property Description
                    </label>
                    <textarea
                      name="description"
                      rows={4}
                      value={formData.description}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-transparent border-b border-[#E5E2DC] text-[#2C2C2C] font-light focus:border-[#8B7355] focus:outline-none transition-colors duration-300 resize-none"
                      placeholder="Please describe the property, including key features, tenant information, and any other relevant details..."
                    />
                  </div>
                </div>

                {/* Submit */}
                <div className="pt-8 border-t border-[#E5E2DC]">
                  <button
                    type="submit"
                    className="w-full md:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 bg-[#2C2C2C] text-[#F8F7F4] text-[12px] tracking-[0.2em] uppercase font-medium hover:bg-[#8B7355] transition-colors duration-500"
                  >
                    <span>Submit Property</span>
                    <Send className="w-4 h-4" />
                  </button>
                  <p className="text-[11px] text-[#5A5A5A] mt-4">
                    * Required fields. All submissions are held in strict confidence.
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SellProperty;