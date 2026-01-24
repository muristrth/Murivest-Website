'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, User, Calendar, Clock, 
  Share2, Mail, Bookmark, ThumbsUp 
} from 'lucide-react';
import { PortableText } from '@portabletext/react';

// Matches the Institutional Intelligence Interface
interface Blog {
  title: string;
  excerpt: string;
  author: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  content: any; // Sanity PortableText
  tags?: string[];
}

export default function BlogClientView({ post }: { post: Blog }) {
  if (!post) {
    return (
      <div className="min-h-screen bg-[#05070a] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-serif italic text-white mb-4">Briefing Not Found</h2>
          <Link href="/blog" className="text-amber-500 uppercase tracking-widest text-[10px] font-bold">
            ← Return to Archive
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#05070a] text-white font-light selection:bg-amber-500/30">
      
      {/* 1. INSTITUTIONAL NAVIGATION */}
      <nav className="fixed top-0 w-full z-50 px-8 py-6 bg-gradient-to-b from-[#05070a] to-transparent backdrop-blur-sm">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link href="/blog" className="group flex items-center gap-4">
            <div className="p-2 border border-white/10 group-hover:border-amber-500/50 transition-all">
              <ArrowLeft size={14} className="text-slate-400 group-hover:text-amber-500" />
            </div>
            <span className="text-[9px] font-bold tracking-[0.4em] uppercase text-slate-500 group-hover:text-white">
              Research Archive
            </span>
          </Link>
          
          <div className="flex items-center gap-2">
            <button className="p-3 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <Share2 size={16} className="text-slate-300" />
            </button>
            <button className="p-3 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <Bookmark size={16} className="text-slate-300" />
            </button>
          </div>
        </div>
      </nav>

      <article className="max-w-3xl mx-auto px-8 pt-48 pb-32">
        
        {/* 2. INTEL HEADER */}
        <header className="mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-6 bg-amber-500" />
              <span className="text-amber-500 text-[10px] font-bold uppercase tracking-[0.4em]">
                Classification: {post.category}
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-serif italic mb-10 leading-[1.1] text-amber-50">
              {post.title}
            </h1>

            <div className="flex flex-wrap gap-8 text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500 border-y border-white/5 py-8 mt-12">
              <span className="flex items-center gap-2">
                <User size={12} className="text-amber-500"/> Lead: {post.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar size={12} className="text-amber-500"/> {post.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock size={12} className="text-amber-500"/> {post.readTime}
              </span>
              <button className="flex items-center gap-2 hover:text-amber-500 transition-colors ml-auto">
                <ThumbsUp size={12} /> Like
              </button>
            </div>
          </motion.div>
        </header>

        {/* 3. FEATURED ASSET IMAGE */}
        <div className="mb-20 relative border border-white/10 group overflow-hidden">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full aspect-video object-cover opacity-80 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#05070a] via-transparent opacity-40" />
        </div>

        {/* 4. DYNAMIC CONTENT (RICH TEXT) */}
        <div className="prose prose-invert prose-amber max-w-none 
          prose-p:text-slate-300 prose-p:leading-[2] prose-p:text-lg prose-p:font-light
          prose-headings:font-serif prose-headings:italic prose-headings:text-amber-50 prose-headings:font-normal
          prose-strong:text-amber-500 prose-strong:font-bold
          prose-blockquote:border-amber-500 prose-blockquote:bg-white/[0.02] prose-blockquote:py-2 prose-blockquote:px-8 prose-blockquote:italic">
          
          <PortableText value={post.content} />
        </div>

        {/* 5. TAGS CLASSIFICATION */}
        {post.tags && post.tags.length > 0 && (
          <div className="mt-20 pt-12 border-t border-white/5">
            <h3 className="text-[10px] uppercase tracking-[0.3em] text-slate-500 mb-6">Subject Indices</h3>
            <div className="flex flex-wrap gap-3">
              {post.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 border border-white/10 text-[9px] uppercase tracking-widest text-slate-400 hover:border-amber-500/50 hover:text-amber-500 transition-all cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* 6. AUTHOR SIGN-OFF */}
        <footer className="mt-32 pt-16 border-t border-white/10">
          <div className="flex items-center gap-8 p-12 bg-white/[0.01] border border-white/5 hover:bg-white/[0.03] transition-colors">
            <div className="w-20 h-20 shrink-0 border border-amber-500/20 p-1 rounded-full">
               <img 
                src="https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=200" 
                className="w-full h-full object-cover rounded-full grayscale" 
                alt={post.author}
              />
            </div>
            <div>
              <h4 className="text-xl font-serif italic text-amber-500 mb-2">{post.author}</h4>
              <p className="text-[10px] text-slate-500 leading-relaxed uppercase tracking-[0.2em]">
                Principal Market Analyst • Private Market Research Division
                <br />
                <span className="text-slate-700 italic">Specializing in Nairobi Commercial Inflows</span>
              </p>
            </div>
          </div>
        </footer>
      </article>

      {/* 7. RESEARCH SUBSCRIPTION FOOTER */}
      <section className="bg-white/[0.02] border-t border-white/10 py-24 px-8 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-amber-600/5 blur-[120px] rounded-full" />
        
        <div className="relative z-10 max-w-2xl mx-auto">
          <Mail className="mx-auto text-amber-500 mb-8 opacity-50" size={32} />
          <h3 className="text-3xl font-serif italic mb-4">The Weekly Briefing</h3>
          <p className="text-slate-500 text-[10px] uppercase tracking-[0.4em] mb-12">Private Market Intelligence Delivered</p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <input 
              className="flex-1 bg-transparent border-b border-white/20 py-4 text-[10px] uppercase tracking-widest focus:outline-none focus:border-amber-500 transition-colors text-white placeholder:text-slate-700" 
              placeholder="PROFESSIONAL EMAIL ADDRESS" 
            />
            <button className="bg-amber-600 hover:bg-amber-500 text-black px-10 py-4 text-[10px] font-bold uppercase tracking-[0.3em] transition-all">
              Join Archive
            </button>
          </div>
        </div>
      </section>

      <div className="py-12 text-center border-t border-white/5">
        <p className="text-[9px] text-slate-800 uppercase tracking-widest italic">
          Institutional Mandate: This research is confidential and provided for qualified investors only.
        </p>
      </div>
    </div>
  );
}