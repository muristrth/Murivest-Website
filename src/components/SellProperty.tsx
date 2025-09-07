'use client';

import { useState, useEffect, FC, FormEvent, ChangeEvent } from 'react';
import { motion } from 'framer-motion';
import { Crown, Users, Globe, Building2, Shield, ArrowRight, CheckCircle, Star, MapPin, Phone, Mail, Calendar, DollarSign, Target, Zap, Eye, Heart, Clock, Trophy, ChevronDown, Upload, User, Calculator } from 'lucide-react';
// Firebase removed - using database API instead

// Define the shape of the form data
interface FormData {
  propertyType: string;
  location: string;
  price: string;
  name: string;
  email: string;
  phone: string;
  description: string;
}

// Define the shape of the form errors
interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  propertyType?: string;
}

// Define the component using FC (Functional Component) for better typing
const SellProperty: FC = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | 'validation-error' | null>(null);
  const [errors, setErrors] = useState<FormErrors>({});
  const [formData, setFormData] = useState<FormData>({
    propertyType: '',
    location: '',
    price: '',
    name: '',
    email: '',
    phone: '',
    description: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const propertyCategories = [
    {
      id: 1,
      name: 'Grade A Office Buildings',
      icon: Building2,
      description: 'Premium office towers and corporate headquarters',
      avgPrice: '$5M - $50M',
      avgYield: '8-12%',
      demandLevel: 'Very High',
      features: ['International tenants', 'Modern amenities', 'Prime locations', 'High visibility'],
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    },
    {
      id: 2,
      name: 'Luxury Hotels & Hospitality',
      icon: Crown,
      description: 'Five-star hotels and premium hospitality assets',
      avgPrice: '$10M - $100M',
      avgYield: '12-18%',
      demandLevel: 'Exceptional',
      features: ['International brands', 'Conference facilities', 'Tourism locations', 'Multiple revenue streams'],
      image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&auto=format&fit=crop&w=2132&q=80'
    },
    {
      id: 3,
      name: 'Shopping Centers & Retail',
      icon: Target,
      description: 'Regional malls and premium retail destinations',
      avgPrice: '$3M - $30M',
      avgYield: '10-15%',
      demandLevel: 'High',
      features: ['Anchor tenants', 'High foot traffic', 'Mixed-use potential', 'Growing consumer market'],
      image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    },
    {
      id: 4,
      name: 'Industrial & Logistics',
      icon: Zap,
      description: 'Warehouses, distribution centers, and manufacturing',
      avgPrice: '$2M - $25M',
      avgYield: '12-20%',
      demandLevel: 'Very High',
      features: ['E-commerce growth', 'Strategic locations', 'Long-term leases', 'Infrastructure access'],
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    },
    {
      id: 5,
      name: 'Mixed-Use Developments',
      icon: Globe,
      description: 'Integrated commercial, residential, and retail spaces',
      avgPrice: '$15M - $150M',
      avgYield: '10-16%',
      demandLevel: 'Exceptional',
      features: ['Diversified income', 'Urban regeneration', 'Live-work-play concept', 'Future-focused design'],
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    },
    {
      id: 6,
      name: 'Healthcare & Medical',
      icon: Heart,
      description: 'Private hospitals, medical centers, and clinics',
      avgPrice: '$5M - $40M',
      avgYield: '11-17%',
      demandLevel: 'High',
      features: ['Growing healthcare demand', 'Stable tenants', 'Essential services', 'Medical tourism'],
      image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80'
    }
  ];

  const whyChooseUs = [
    {
      icon: Globe,
      title: 'Global Investor Network',
      description: 'Access to over 1,000 qualified international investors actively seeking premium African assets.',
      stats: '45 countries represented'
    },
    {
      icon: DollarSign,
      title: 'Premium Valuations',
      description: 'Our sophisticated marketing achieves 8-15% higher sale prices than traditional agents.',
      stats: 'Average 12% price premium'
    },
    {
      icon: Clock,
      title: 'Accelerated Sales Process',
      description: 'Streamlined process with average sales completion in 90-120 days vs. 180+ industry standard.',
      stats: '60% faster sales'
    },
    {
      icon: Shield,
      title: 'Institutional Standards',
      description: 'RICS-regulated with full legal compliance, due diligence, and transaction security.',
      stats: '99.8% completion rate'
    }
  ];

  const validateForm = (): boolean => {
    let newErrors: FormErrors = {};
    if (!formData.name) newErrors.name = 'Name is required.';
    if (!formData.email) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid.';
    }
    if (!formData.phone) newErrors.phone = 'Phone number is required.';
    if (!formData.propertyType) newErrors.propertyType = 'Property type is required.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear the error for the field being edited
    setErrors({
      ...errors,
      [name]: undefined
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    if (!validateForm()) {
      setSubmitStatus('validation-error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Submit to API
      const response = await fetch('/api/property-inquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          status: 'new',
          source: 'sell-property-page'
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit inquiry');
      }

      // Success
      setSubmitStatus('success');
      setFormData({
        propertyType: '',
        location: '',
        price: '',
        name: '',
        email: '',
        phone: '',
        description: ''
      });

    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 to-slate-800/90"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <motion.div
            className="grid lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <div className="flex items-center mb-6">
                <Crown className="h-12 w-12 text-amber-400 mr-4" />
                <span className="text-amber-400 text-sm uppercase tracking-wider font-medium">Exclusive Property Sales</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-serif font-light text-white mb-6 tracking-tight">
                Sell Your Property to
                <br />
                <span className="font-medium text-amber-400">Global Investors</span>
              </h1>
              <p className="text-xl text-slate-200 mb-8 font-light leading-relaxed">
                Connect your premium commercial property with our exclusive network of international investors.
                <span className="text-amber-400 font-medium"> Achieve maximum value with minimum effort.</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button className="bg-amber-600 hover:bg-amber-500 text-white px-8 py-4 text-lg font-medium transition-all duration-300">
                  GET FREE VALUATION
                </button>
                <button className="border border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg font-medium transition-all duration-300">
                  SCHEDULE CONSULTATION
                </button>
              </div>
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-serif font-light text-amber-400 mb-1">$2.5B+</div>
                  <div className="text-slate-300 text-xs uppercase tracking-wider">Sales Volume</div>
                </div>
                <div>
                  <div className="text-2xl font-serif font-light text-amber-400 mb-1">850+</div>
                  <div className="text-slate-300 text-xs uppercase tracking-wider">Properties Sold</div>
                </div>
                <div>
                  <div className="text-2xl font-serif font-light text-amber-400 mb-1">12%</div>
                  <div className="text-slate-300 text-xs uppercase tracking-wider">Price Premium</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Section */}
          <motion.div
            className="lg:col-span-1 mt-12 lg:mt-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-slate-800/80 p-8 md:p-10 rounded-xl shadow-2xl backdrop-blur-sm border border-white/10">
              <h2 className="text-3xl font-serif font-light text-white mb-6 text-center">
                Request a Free Valuation
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Full Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-white/20 border rounded-lg text-white placeholder-white/70 focus:ring-2 focus:ring-amber-500 focus:border-transparent ${errors.name ? 'border-red-500' : 'border-white/30'}`}
                  />
                  {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-white/20 border rounded-lg text-white placeholder-white/70 focus:ring-2 focus:ring-amber-500 focus:border-transparent ${errors.email ? 'border-red-500' : 'border-white/30'}`}
                  />
                  {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-white/20 border rounded-lg text-white placeholder-white/70 focus:ring-2 focus:ring-amber-500 focus:border-transparent ${errors.phone ? 'border-red-500' : 'border-white/30'}`}
                  />
                  {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
                </div>
                <div>
                  <select
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-white/20 border rounded-lg text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent ${errors.propertyType ? 'border-red-500' : 'border-white/30'}`}
                  >
                    <option value="" className="text-slate-900">Select Property Type</option>
                    <option value="office" className="text-slate-900">Office Building</option>
                    <option value="hotel" className="text-slate-900">Hotel & Hospitality</option>
                    <option value="retail" className="text-slate-900">Retail & Shopping</option>
                    <option value="industrial" className="text-slate-900">Industrial & Logistics</option>
                    <option value="mixed" className="text-slate-900">Mixed-Use Development</option>
                    <option value="healthcare" className="text-slate-900">Healthcare & Medical</option>
                  </select>
                  {errors.propertyType && <p className="text-red-400 text-sm mt-1">{errors.propertyType}</p>}
                </div>
                <div>
                  <input
                    type="text"
                    name="location"
                    placeholder="Property Location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="price"
                    placeholder="Expected Price (Optional)"
                    value={formData.price}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <textarea
                    name="description"
                    placeholder="Property description (e.g. size, tenants, key features)"
                    value={formData.description}
                    onChange={handleInputChange as (e: ChangeEvent<HTMLTextAreaElement>) => void}
                    rows={3}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-amber-600 hover:bg-amber-500 text-white py-4 font-medium transition-all duration-300 flex items-center justify-center group disabled:bg-amber-800 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'SUBMITTING...' : 'GET FREE VALUATION'}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                {submitStatus === 'success' && (
                  <p className="text-emerald-400 text-center mt-4 flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    Thank you! Your inquiry has been submitted.
                  </p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-red-400 text-center mt-4">
                    Something went wrong. Please try again later.
                  </p>
                )}
                {submitStatus === 'validation-error' && (
                  <p className="text-red-400 text-center mt-4">
                    Please fix the errors in the form.
                  </p>
                )}
              </form>
              <p className="text-white/70 text-sm text-center mt-4">
                Confidential consultation • No obligation • 24-hour response
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-serif font-light text-slate-900 mb-6">
              Why Property Owners
              <br />
              <span className="font-medium">Choose Our Services</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
              We don't just sell properties—we create exclusive opportunities for sophisticated international investors while maximizing returns for our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-200 transition-colors duration-300">
                  <item.icon className="h-10 w-10 text-amber-600" />
                </div>
                <h3 className="text-xl font-serif font-medium text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 font-light leading-relaxed mb-3">
                  {item.description}
                </p>
                <div className="text-amber-600 font-medium text-sm">
                  {item.stats}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Property Categories Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-serif font-light text-slate-900 mb-6">
              Commercial Property
              <br />
              <span className="font-medium">Categories We Excel In</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
              Our expertise spans all premium commercial asset classes. Each category benefits from targeted marketing to specialized international investor networks.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {propertyCategories.map((category, index) => (
              <motion.div
                key={category.id}
                className="group bg-white border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-500"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center mb-2">
                      <category.icon className="h-6 w-6 text-amber-400 mr-2" />
                      <span className="text-sm font-medium">{category.demandLevel} Demand</span>
                    </div>
                    <div className="text-lg font-serif font-medium">{category.avgPrice}</div>
                  </div>

                  <div className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 text-sm font-medium">
                    {category.avgYield} Yield
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-serif font-medium text-slate-900 mb-3">{category.name}</h3>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                    {category.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {category.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-slate-600">
                        <CheckCircle className="w-4 h-4 text-emerald-600 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <button className="w-full border border-slate-300 hover:bg-slate-900 hover:text-white py-3 font-medium transition-all duration-300 group">
                    LEARN MORE
                    <ArrowRight className="inline ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-serif font-light text-slate-900 mb-6">
              Our Exclusive
              <br />
              <span className="font-medium">Sales Process</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
              A sophisticated, streamlined approach designed for high-value transactions and discerning international investors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Property Assessment',
                description: 'Comprehensive valuation by certified RICS professionals with market analysis and investment potential report.',
                icon: Calculator
              },
              {
                step: '02',
                title: 'Strategic Marketing',
                description: 'Targeted exposure to our global investor network through exclusive channels and private presentations.',
                icon: Target
              },
              {
                step: '03',
                title: 'Investor Matching',
                description: 'Qualification and matching with pre-vetted international investors seeking your specific asset class.',
                icon: Users
              },
              {
                step: '04',
                title: 'Transaction Management',
                description: 'Full legal and financial coordination from offer acceptance through successful completion.',
                icon: Shield
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-white border-2 border-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <process.icon className="h-8 w-8 text-amber-600" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {process.step}
                  </div>
                </div>

                <h3 className="text-xl font-serif font-medium text-slate-900 mb-3">{process.title}</h3>
                <p className="text-slate-600 font-light leading-relaxed">
                  {process.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-serif font-light text-slate-900 mb-6">
              Recent Sales
              <br />
              <span className="font-medium">Success Stories</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
              Exceptional results for our clients through strategic positioning and access to global capital.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
                title: 'CBD Office Tower',
                location: 'Nairobi Central',
                salePrice: '$45.2M',
                premium: '+15% above asking',
                buyer: 'European Pension Fund',
                timeframe: '75 days'
              },
              {
                image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
                title: 'Luxury Resort Hotel',
                location: 'Mombasa Coast',
                salePrice: '$28.7M',
                premium: '+12% above asking',
                buyer: 'Middle Eastern REIT',
                timeframe: '90 days'
              },
              {
                image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
                title: 'Regional Shopping Mall',
                location: 'Kisumu',
                salePrice: '$18.5M',
                premium: '+8% above asking',
                buyer: 'South African Fund',
                timeframe: '105 days'
              }
            ].map((story, index) => (
              <motion.div
                key={index}
                className="bg-slate-50 overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-emerald-600 text-white px-3 py-1 text-sm font-medium">
                    SOLD
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-serif font-medium text-slate-900 mb-2">{story.title}</h3>
                  <div className="flex items-center text-slate-600 mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{story.location}</span>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Sale Price:</span>
                      <span className="font-medium text-slate-900">{story.salePrice}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Premium:</span>
                      <span className="font-medium text-emerald-600">{story.premium}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Buyer:</span>
                      <span className="font-medium text-slate-900">{story.buyer}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Timeframe:</span>
                      <span className="font-medium text-amber-600">{story.timeframe}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Crown className="h-16 w-16 text-amber-400 mx-auto mb-6" />
            <h2 className="text-4xl lg:text-5xl font-serif font-light mb-6">
              Ready to Maximize
              <br />
              <span className="font-medium text-amber-400">Your Property Value?</span>
            </h2>
            <p className="text-xl text-slate-200 mb-8 font-light max-w-2xl mx-auto">
              Join the exclusive circle of property owners who have achieved exceptional results through our international investor network.
              <span className="text-amber-400 font-medium"> Your success is our legacy.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button className="bg-amber-600 hover:bg-amber-500 text-white px-10 py-4 text-lg font-medium transition-all duration-300">
                GET FREE VALUATION
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-slate-900 px-10 py-4 text-lg font-medium transition-all duration-300">
                SPEAK TO AN EXPERT
              </button>
            </div>

            <div className="text-slate-400 text-sm">
              Confidential consultation • No commitment required • 24-hour expert response
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SellProperty;