'use client';

import { Search, Filter, TrendingUp, ArrowRight, Clock, Mail, User } from 'lucide-react';
import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface Blog {
  _id: string;
  title: string;
  excerpt: string;
  slug: string;
  author: string;
  category: string;
  publishedAt: string;
  readTime: string;
  image: string;
}

interface BlogListProps {
  posts: Blog[];
}

export default function BlogList({ posts }: BlogListProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  const categories = useMemo(() => {
    const cats = new Set(posts.map(post => post.category).filter(Boolean));
    return ['ALL', ...Array.from(cats)];
  }, [posts]);

  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'ALL' || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [posts, searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-[#05070a] text-white font-light selection:bg-amber-500/30">
      {/* 1. INTEL HEADER */}
      <section className="relative pt-48 pb-32 px-8 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,#1a1510,transparent)] opacity-40" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="h-px w-8 bg-amber-500" />
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-amber-500">
              Intelligence & Analysis
            </span>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <h1 className="text-6xl lg:text-8xl font-serif italic mb-8 leading-tight">
                Property <br />
                <span className="text-amber-200/90 font-serif">Insights</span>
              </h1>
              <p className="max-w-2xl text-slate-400 text-lg leading-relaxed font-light">
                Expert commentary, structured market data, and institutional-grade analysis on 
                Nairobi's commercial landscape and global capital flows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. RESEARCH TOOLBAR (Filters & Search) */}
      <div className="sticky top-0 z-50 bg-[#05070a]/80 backdrop-blur-xl border-y border-white/5 py-6">
        <div className="max-w-7xl mx-auto px-8 flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <div className="relative w-full lg:max-w-md group">
            <Search className="absolute left-0 top-1/2 -translate-y-1/2 text-slate-600 group-focus-within:text-amber-500 transition-colors" size={16} />
            <input 
              type="text" 
              placeholder="SEARCH RESEARCH ARCHIVE..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-8 pr-4 py-2 bg-transparent border-none text-[10px] font-bold tracking-[0.2em] focus:ring-0 placeholder:text-slate-700 uppercase"
            />
          </div>
          
          <div className="w-full lg:w-auto flex items-center gap-4 overflow-x-auto no-scrollbar pb-2 lg:pb-0">
            <Filter size={14} className="text-amber-500 shrink-0" />
            <div className="flex gap-6 whitespace-nowrap">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`text-[10px] font-bold uppercase tracking-[0.3em] transition-all relative py-1 ${
                    selectedCategory === category ? 'text-white' : 'text-slate-600 hover:text-slate-400'
                  }`}
                >
                  {category}
                  {selectedCategory === category && (
                    <motion.div layoutId="catUnderline" className="absolute -bottom-1 left-0 w-full h-px bg-amber-500" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-8 py-20">
        
        {/* 3. FEATURED BRIEFING */}
        {filteredPosts.length > 0 && searchTerm === '' && selectedCategory === 'ALL' && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="mb-32 group cursor-pointer"
          >
            <Link href={`/blog/${filteredPosts[0].slug}`} className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-7 relative overflow-hidden aspect-video lg:aspect-auto lg:h-[500px] border border-white/10">
                <img
                  src={filteredPosts[0].image}
                  alt={filteredPosts[0].title}
                  className="w-full h-full object-cover grayscale opacity-40 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05070a] via-transparent to-transparent" />
                <div className="absolute bottom-10 left-10">
                  <div className="flex items-center gap-3 text-amber-500 mb-4">
                    <TrendingUp size={16} />
                    <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Essential Reading</span>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-5">
                <h2 className="text-4xl lg:text-5xl font-serif italic mb-8 leading-tight">
                  {filteredPosts[0].title}
                </h2>
                <p className="text-slate-400 text-lg mb-10 font-light leading-relaxed">
                  {filteredPosts[0].excerpt}
                </p>
                <div className="flex items-center gap-8 text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-10">
                  <span className="flex items-center gap-2"><User size={12} className="text-amber-500"/> {filteredPosts[0].author}</span>
                  <span className="flex items-center gap-2"><Clock size={12}/> {filteredPosts[0].readTime}</span>
                </div>
                <div className="inline-flex items-center gap-4 text-amber-500 text-[10px] font-bold uppercase tracking-[0.4em] group-hover:gap-6 transition-all">
                  Access Full Briefing <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        {/* 4. RESEARCH GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10 mb-32">
          {(searchTerm !== '' || selectedCategory !== 'ALL' ? filteredPosts : filteredPosts.slice(1)).map((post) => (
            <div key={post._id} className="bg-[#05070a] group hover:bg-white/[0.02] transition-colors p-10 flex flex-col h-full">
              <div className="aspect-video overflow-hidden mb-8 border border-white/5">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" 
                />
              </div>
              <span className="text-[9px] font-bold text-amber-500 uppercase tracking-[0.3em] mb-4">{post.category}</span>
              <h3 className="text-2xl font-serif italic mb-6 leading-snug group-hover:text-amber-200 transition-colors">{post.title}</h3>
              <p className="text-slate-500 text-sm font-light leading-relaxed mb-8 flex-1 line-clamp-3">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between pt-8 border-t border-white/5">
                <span className="text-[9px] text-slate-600 uppercase tracking-widest">
                  {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </span>
                <Link href={`/blog/${post.slug}`} className="text-amber-500">
                   <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* 5. NEWSLETTER / BRIEFING SUBSCRIPTION */}
        <section className="relative p-12 lg:p-24 border border-white/10 overflow-hidden text-center bg-white/[0.01]">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-600/5 blur-[80px] rounded-full" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <Mail className="mx-auto text-amber-500 mb-8" size={32} />
            <h3 className="text-3xl font-serif italic mb-4">The Weekly Briefing</h3>
            <p className="text-slate-500 text-sm uppercase tracking-[0.3em] mb-12">Private Market Intelligence Delivered</p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="PROFESSIONAL EMAIL ADDRESS"
                className="flex-1 bg-transparent border-b border-white/20 px-4 py-4 text-[10px] font-bold tracking-widest text-white focus:outline-none focus:border-amber-500 transition-colors uppercase"
              />
              <button className="bg-amber-600 hover:bg-amber-500 text-black px-10 py-5 text-[10px] font-bold uppercase tracking-[0.4em] transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
