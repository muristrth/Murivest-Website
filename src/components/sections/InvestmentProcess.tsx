'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, Search, FileText, TrendingUp, Shield, Handshake } from 'lucide-react';

const InvestmentProcess = () => {
  const steps = [
    {
      icon: UserCheck,
      title: "Qualification & Discovery",
      description: "Private consultation to understand your investment objectives and verify accreditation.",
      timeline: "Day 1-3"
    },
    {
      icon: Search,
      title: "Opportunity Curation",
      description: "Our team presents carefully selected opportunities aligned with your portfolio strategy.",
      timeline: "Day 4-7"
    },
    {
      icon: FileText,
      title: "Due Diligence Review",
      description: "Comprehensive analysis including legal, financial, and market assessments.",
      timeline: "Day 8-14"
    },
    {
      icon: Shield,
      title: "Secure Investment",
      description: "Protected transaction processing with full legal documentation and compliance.",
      timeline: "Day 15-21"
    },
    {
      icon: TrendingUp,
      title: "Portfolio Management",
      description: "Ongoing asset management with quarterly reporting and strategic optimization.",
      timeline: "Ongoing"
    },
    {
      icon: Handshake,
      title: "Exit Strategy",
      description: "Planned liquidity events designed to maximize returns at optimal market timing.",
      timeline: "3-7 Years"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-stone-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-6">
            A Refined Investment
            <span className="block font-extralight italic text-slate-600">
              Experience
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
            Our time-tested process ensures every investment decision is made with 
            the utmost care, precision, and attention to your financial objectives.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Connection line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-8 h-px bg-slate-300 z-0" />
              )}
              
              <div className="relative bg-white rounded-3xl p-8 shadow-lg border border-slate-200/50 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-slate-900 rounded-2xl mr-4">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">
                      {step.timeline}
                    </div>
                    <div className="text-lg text-slate-400 font-light">
                      Step {index + 1}
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-light text-slate-900 mb-4">
                  {step.title}
                </h3>

                <p className="text-slate-600 font-light leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-3xl p-12 shadow-xl border border-slate-200/50 max-w-4xl mx-auto">
            <h3 className="text-2xl font-light text-slate-900 mb-6">
              Ready to Begin Your Investment Journey?
            </h3>
            <p className="text-slate-600 mb-8 font-light leading-relaxed">
              Our investment committee is currently reviewing applications for Q1 2025 opportunities. 
              Qualified investors are invited to schedule a confidential consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-medium hover:bg-slate-800 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Consultation
              </motion.button>
              <motion.button
                className="px-8 py-4 border border-slate-300 text-slate-700 rounded-2xl font-medium hover:bg-slate-50 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Investment Guide
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InvestmentProcess;