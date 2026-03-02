'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

/**
 * Contact Section - Golf Club Lounge Aesthetic
 * Elegant contact form for UHNWI
 */
const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="relative bg-[#F8F7F4] text-[#2C2C2C] overflow-hidden">
      {/* Hairline top border */}
      <div className="absolute top-0 left-0 w-full h-px bg-[#E5E2DC]" />
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-32">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left: Info */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            {/* Label */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-[1px] bg-[#8B7355]" />
              <p className="text-[11px] tracking-[0.4em] uppercase text-[#8B7355] font-medium">
                Get in Touch
              </p>
            </div>

            {/* Headline */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-[1.1] mb-8 text-[#2C2C2C]">
              Begin Your<br />
              <span className="italic text-[#8B7355] font-light">Consultation</span>
            </h2>

            {/* Divider */}
            <div className="w-16 h-[1px] bg-[#E5E2DC] mb-8" />

            {/* Description */}
            <p className="text-[15px] leading-[1.8] text-[#5A5A5A] font-light mb-12">
              We welcome inquiries from qualified investors and institutional allocators. 
              All communications are handled with the strictest confidentiality.
            </p>

            {/* Contact Details */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-[#8B7355] mt-0.5" strokeWidth={1} />
                <div>
                  <p className="text-[12px] tracking-[0.15em] uppercase text-[#5A5A5A] mb-2">Nairobi Office</p>
                  <p className="text-[14px] text-[#2C2C2C] font-light leading-relaxed">
                    14th Floor, The Lofts<br />
                    Riverside Drive, Westlands<br />
                    Nairobi, Kenya
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-[#8B7355] mt-0.5" strokeWidth={1} />
                <div>
                  <p className="text-[12px] tracking-[0.15em] uppercase text-[#5A5A5A] mb-2">London Office</p>
                  <p className="text-[14px] text-[#2C2C2C] font-light leading-relaxed">
                    12 Berkeley Square<br />
                    Mayfair, London W1J 6BS<br />
                    United Kingdom
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-[#8B7355] mt-0.5" strokeWidth={1} />
                <div>
                  <p className="text-[12px] tracking-[0.15em] uppercase text-[#5A5A5A] mb-2">Telephone</p>
                  <p className="text-[14px] text-[#2C2C2C] font-light">
                    +254 729 170 156 (Nairobi)<br />
                    +44 20 7123 4567 (London)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-[#8B7355] mt-0.5" strokeWidth={1} />
                <div>
                  <p className="text-[12px] tracking-[0.15em] uppercase text-[#5A5A5A] mb-2">Email</p>
                  <p className="text-[14px] text-[#2C2C2C] font-light">
                    advisory@murivest.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-[#8B7355] mt-0.5" strokeWidth={1} />
                <div>
                  <p className="text-[12px] tracking-[0.15em] uppercase text-[#5A5A5A] mb-2">Office Hours</p>
                  <p className="text-[14px] text-[#2C2C2C] font-light">
                    Monday – Friday: 08:00 – 18:00 EAT<br />
                    Saturday: By appointment only
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="border border-[#E5E2DC] bg-white p-6 md:p-10">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <CheckCircle className="w-16 h-16 text-[#8B7355] mx-auto mb-6" strokeWidth={1} />
                  <h3 className="text-2xl font-serif mb-4 text-[#2C2C2C]">Thank You</h3>
                  <p className="text-[15px] leading-[1.8] text-[#5A5A5A] font-light">
                    Your inquiry has been received. A senior advisor will contact you within 48 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[11px] tracking-[0.2em] uppercase text-[#5A5A5A] mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-transparent border-b border-[#E5E2DC] text-[#2C2C2C] font-light focus:border-[#8B7355] focus:outline-none transition-colors duration-300"
                        placeholder="Your name"
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
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[11px] tracking-[0.2em] uppercase text-[#5A5A5A] mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-transparent border-b border-[#E5E2DC] text-[#2C2C2C] font-light focus:border-[#8B7355] focus:outline-none transition-colors duration-300"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] tracking-[0.2em] uppercase text-[#5A5A5A] mb-2">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-transparent border-b border-[#E5E2DC] text-[#2C2C2C] font-light focus:border-[#8B7355] focus:outline-none transition-colors duration-300"
                        placeholder="Company name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] tracking-[0.2em] uppercase text-[#5A5A5A] mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-transparent border-b border-[#E5E2DC] text-[#2C2C2C] font-light focus:border-[#8B7355] focus:outline-none transition-colors duration-300 resize-none"
                      placeholder="Please describe your inquiry..."
                    />
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full md:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 bg-[#2C2C2C] text-[#F8F7F4] text-[12px] tracking-[0.2em] uppercase font-medium hover:bg-[#8B7355] transition-colors duration-500"
                    >
                      <span>Send Inquiry</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </div>

                  <p className="text-[11px] text-[#5A5A5A] italic">
                    * Required fields. All information is held in strict confidence.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Hairline bottom border */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-[#E5E2DC]" />
    </section>
  );
};

export default Contact;