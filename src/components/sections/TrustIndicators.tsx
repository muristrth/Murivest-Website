'use client';

import { motion } from 'framer-motion';
import { Shield, Award, Users, Globe, CheckCircle, Star, Handshake } from 'lucide-react';

const TrustIndicators = () => {
  const certifications = [
    {
      title: "KRA Registered",
      description: "Fully compliant investment advisor"
    },
    {
      title: "ISO 27001 Certified",
      description: "Information security management"
    },
    {
      title: "RICS Accredited",
      description: "Royal Institution of Chartered Surveyors"
    },
    {
      title: "CMA Licensed",
      description: "Capital Markets Authority approved"
    }
  ];

  const partnerships = [
    {
      name: "Pam Golding Properties Kenya",
      type: "Strategic Partner"
    },
    {
      name: "Knight Frank International",
      type: "Property Investments"
    },
    {
      name: "Vineyard Properties",
      type: "Local Real Estate"
    },
    {
      name: "Michael Mungai",
      type: "Legal Counsel"
    }
  ];

  const testimonialHighlights = [
    {
      quote: "Murivest's attention to detail and market insight has been exceptional.",
      author: "Lord Pemberton",
      title: "Private Investor, London"
    },
    {
      quote: "The most professional real estate investment experience I've encountered in Africa.",
      author: "Dr. Sarah Chen",
      title: "Family Office, Singapore"
    },
    {
      quote: "Their exclusive opportunities have consistently outperformed our expectations.",
      author: "Marcus Rothschild",
      title: "Investment Committee, Zurich"
    }
  ];

  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            Trusted by the World's
            <span className="block font-extralight italic text-slate-300">
              Financial Elite
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
            Our reputation is built on unwavering integrity, regulatory compliance, 
            and partnerships with the world's most respected financial institutions.
          </p>
        </motion.div>

        {/* Certifications */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-light text-white text-center mb-12">
            Regulatory Compliance & Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="bg-slate-800 rounded-2xl p-6 text-center hover:bg-slate-750 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-slate-700 rounded-xl mb-4">
                  <Shield className="h-6 w-6 text-slate-300" />
                </div>
                <h4 className="text-white font-medium mb-2">{cert.title}</h4>
                <p className="text-slate-400 text-sm font-light">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Strategic Partnerships */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-light text-white text-center mb-12">
            Strategic Partnerships
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerships.map((partner, index) => (
              <motion.div
                key={index}
                className="bg-slate-800 rounded-2xl p-6 text-center hover:bg-slate-750 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-slate-700 rounded-xl mb-4">
                  <Handshake className="h-6 w-6 text-slate-300" />
                </div>
                <h4 className="text-white font-medium mb-2">{partner.name}</h4>
                <p className="text-slate-400 text-sm font-light">{partner.type}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Client Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-light text-white text-center mb-12">
            What Our Clients Say
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonialHighlights.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-slate-800 rounded-2xl p-8 hover:bg-slate-750 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <blockquote className="text-slate-300 font-light leading-relaxed mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <div className="text-white font-medium">{testimonial.author}</div>
                  <div className="text-slate-400 text-sm">{testimonial.title}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-3xl p-12 border border-slate-600">
            <h3 className="text-3xl font-light text-white mb-6">
              Join the World's Most Exclusive Investment Community
            </h3>
            <p className="text-slate-300 mb-8 font-light leading-relaxed max-w-2xl mx-auto">
              Applications for our Q1 2025 investment opportunities are now being reviewed. 
              Membership is by invitation only and subject to qualification requirements.
            </p>
            <motion.button
              className="inline-flex items-center px-10 py-5 bg-white text-slate-900 rounded-2xl font-medium hover:bg-slate-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Apply for Membership
              <CheckCircle className="h-5 w-5 ml-2" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustIndicators;