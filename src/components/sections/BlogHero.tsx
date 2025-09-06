'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, User, TrendingUp, Globe, Shield } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  featured?: boolean;
}

const BlogHero = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "The Discerning Investor's Guide to East African Real Estate",
      excerpt: "Discover why sophisticated investors are quietly building generational wealth through Kenya's premium property markets. Our exclusive analysis reveals the untold opportunities.",
      author: "Victoria Ashworth",
      date: "December 15, 2024",
      readTime: "8 min read",
      category: "Market Intelligence",
      image: "https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: true
    },
    {
      id: 2,
      title: "Private Wealth Preservation Through Strategic Property Investment",
      excerpt: "How ultra-high-net-worth individuals are diversifying their portfolios with carefully curated African real estate assets.",
      author: "James Pemberton",
      date: "December 12, 2024",
      readTime: "12 min read",
      category: "Wealth Strategy",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 3,
      title: "Exclusive: Inside Kenya's Most Coveted Investment Districts",
      excerpt: "A privileged look at the prime locations where international investors are securing their financial legacy.",
      author: "Catherine Blackwood",
      date: "December 10, 2024",
      readTime: "6 min read",
      category: "Location Analysis",
      image: "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-50 to-stone-100 overflow-hidden">
      {/* Elegant background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Hero Header */}
        <motion.div
<<<<<<< HEAD
          {...({ className: "text-center max-w-4xl mx-auto mb-16" } as any)}
=======
          className="text-center max-w-4xl mx-auto mb-16"
>>>>>>> f535e2ffd5593d42bbb99bda6f01022063b79202
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
<<<<<<< HEAD
            {...({ className: "inline-flex items-center px-4 py-2 bg-slate-900/5 rounded-full text-slate-700 text-sm font-medium mb-6" } as any)}
=======
            className="inline-flex items-center px-4 py-2 bg-slate-900/5 rounded-full text-slate-700 text-sm font-medium mb-6"
>>>>>>> f535e2ffd5593d42bbb99bda6f01022063b79202
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Globe className="h-4 w-4 mr-2" />
            Exclusive Investment Intelligence
          </motion.div>

          <motion.h1
<<<<<<< HEAD
            {...({ className: "text-5xl md:text-6xl lg:text-7xl font-light text-slate-900 mb-6 tracking-tight" } as any)}
=======
            className="text-5xl md:text-6xl lg:text-7xl font-light text-slate-900 mb-6 tracking-tight"
>>>>>>> f535e2ffd5593d42bbb99bda6f01022063b79202
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Investment
            <span className="block font-extralight italic text-slate-600">
              Insights
            </span>
          </motion.h1>

          <motion.p
<<<<<<< HEAD
            {...({ className: "text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto font-light" } as any)}
=======
            className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto font-light"
>>>>>>> f535e2ffd5593d42bbb99bda6f01022063b79202
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Privileged access to market intelligence, investment strategies, and exclusive opportunities 
            reserved for discerning international investors seeking extraordinary returns.
          </motion.p>

          {/* Trust indicators */}
          <motion.div
<<<<<<< HEAD
            {...({ className: "flex items-center justify-center space-x-8 mt-8 text-slate-500" } as any)}
=======
            className="flex items-center justify-center space-x-8 mt-8 text-slate-500"
>>>>>>> f535e2ffd5593d42bbb99bda6f01022063b79202
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="flex items-center">
              <Shield className="h-5 w-5 mr-2" />
              <span className="text-sm font-medium">Verified Insights</span>
            </div>
            <div className="flex items-center">
              <TrendingUp className="h-5 w-5 mr-2" />
              <span className="text-sm font-medium">Market Leaders</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Featured Blog Post */}
        <motion.div
<<<<<<< HEAD
          {...({ className: "mb-16" } as any)}
=======
          className="mb-16"
>>>>>>> f535e2ffd5593d42bbb99bda6f01022063b79202
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {blogPosts.filter(post => post.featured).map((post) => (
            <div key={post.id} className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200/50">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-80 lg:h-full">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-slate-900/90 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-12 flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="text-slate-500 text-sm font-medium uppercase tracking-wider">
                      {post.category}
                    </span>
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-light text-slate-900 mb-6 leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-slate-600 text-lg leading-relaxed mb-8 font-light">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-slate-500">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-2" />
                        <span className="text-sm font-medium">{post.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span className="text-sm">{post.date}</span>
                      </div>
                      <span className="text-sm">{post.readTime}</span>
                    </div>
                    <motion.button
<<<<<<< HEAD
                      {...({ className: "inline-flex items-center text-slate-900 font-medium hover:text-slate-600 transition-colors" } as any)}
=======
                      className="inline-flex items-center text-slate-900 font-medium hover:text-slate-600 transition-colors"
>>>>>>> f535e2ffd5593d42bbb99bda6f01022063b79202
                      whileHover={{ x: 5 }}
                    >
                      Read Article
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Additional Blog Cards */}
        <motion.div
<<<<<<< HEAD
          {...({ className: "grid md:grid-cols-2 gap-8" } as any)}
=======
          className="grid md:grid-cols-2 gap-8"
>>>>>>> f535e2ffd5593d42bbb99bda6f01022063b79202
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {blogPosts.filter(post => !post.featured).map((post, index) => (
            <motion.div
              key={post.id}
<<<<<<< HEAD
              {...({ className: "bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200/50 hover:shadow-xl transition-all duration-300" } as any)}
=======
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200/50 hover:shadow-xl transition-all duration-300"
>>>>>>> f535e2ffd5593d42bbb99bda6f01022063b79202
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="relative h-48">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 text-slate-700 px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-light text-slate-900 mb-3 leading-tight">
                  {post.title}
                </h3>
                <p className="text-slate-600 mb-6 font-light leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 text-slate-500 text-sm">
                    <span className="font-medium">{post.author}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <motion.button
<<<<<<< HEAD
                    {...({ className: "text-slate-900 hover:text-slate-600 transition-colors" } as any)}
=======
                    className="text-slate-900 hover:text-slate-600 transition-colors"
>>>>>>> f535e2ffd5593d42bbb99bda6f01022063b79202
                    whileHover={{ x: 3 }}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BlogHero;