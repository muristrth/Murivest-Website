'use client';

import Link from 'next/link';
import { FileText, Download, Lock, ArrowLeft, Search } from 'lucide-react';
import { useState } from 'react';
import ScrollReveal from '../../(components)/shared/ScrollReveal';

const documents = [
  { id: 'doc-001', name: 'Singapore Q2 2026 Market Report', type: 'Market Report', format: 'PDF', size: '4.2 MB', date: '2026-06-15', gated: false },
  { id: 'doc-002', name: 'Marina Bay District Investment Guide', type: 'District Guide', format: 'PDF', size: '2.8 MB', date: '2026-06-10', gated: false },
  { id: 'doc-003', name: 'CBD Incentive Scheme 2.0 Briefing', type: 'Regulatory', format: 'PDF', size: '1.5 MB', date: '2026-06-05', gated: false },
  { id: 'doc-004', name: 'Asia Square Tower 1 — Investment Memorandum', type: 'Property OM', format: 'PDF', size: '8.7 MB', date: '2026-05-15', gated: true },
  { id: 'doc-005', name: 'Asia Square Tower 1 — Tenancy Schedule', type: 'Property OM', format: 'PDF', size: '2.1 MB', date: '2026-05-15', gated: true },
  { id: 'doc-006', name: 'One Raffles Place Tower 2 — Investment Memorandum', type: 'Property OM', format: 'PDF', size: '7.4 MB', date: '2026-05-20', gated: true },
  { id: 'doc-007', name: 'Guoco Tower — Building Specification', type: 'Property OM', format: 'PDF', size: '3.2 MB', date: '2026-05-10', gated: false },
  { id: 'doc-008', name: 'Singapore Strata Office Investment Guide', type: 'Sector Guide', format: 'PDF', size: '5.6 MB', date: '2026-05-20', gated: false },
  { id: 'doc-009', name: 'Family Office Real Estate Structures', type: 'Advisory', format: 'PDF', size: '1.8 MB', date: '2026-05-28', gated: true },
  { id: 'doc-010', name: 'S-REIT Market Analysis Q1 2026', type: 'Market Report', format: 'PDF', size: '3.9 MB', date: '2026-04-01', gated: false },
];

export default function DocumentsPage() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');

  const filtered = documents.filter((d) => {
    const matchesSearch = d.name.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === 'All' || d.type === filter;
    return matchesSearch && matchesFilter;
  });

  const types = ['All', ...Array.from(new Set(documents.map((d) => d.type)))];

  return (
    <main className="min-h-screen bg-[#F8F7F4]">
      {/* Top Navigation */}
      <header className="bg-white border-b border-[#E8E6E1] sticky top-0 z-30">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-serif text-lg text-[#1B4332]">Murivest</span>
            <span className="text-[#E8E6E1]">|</span>
            <span className="text-[11px] tracking-wider uppercase text-[#8B8680]">Document Vault</span>
          </div>
          <Link 
            href="/singapore/investor-portal/dashboard" 
            className="text-[10px] tracking-wider uppercase text-[#B8956B] hover:text-[#1B4332] transition-colors"
          >
            ← Back to Dashboard
          </Link>
        </div>
      </header>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-8">
        <ScrollReveal>
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Lock className="w-4 h-4 text-[#B8956B]" strokeWidth={1.5} />
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#B8956B] font-medium">Secure Access</span>
            </div>
            <h1 className="font-serif text-3xl text-[#2C2C2C] mb-2">Document Vault</h1>
            <p className="text-sm text-[#8B8680] font-light">
              All downloads are tracked and watermarked. Do not share these documents without written consent.
            </p>
          </div>
        </ScrollReveal>

        {/* Search & Filter */}
        <ScrollReveal>
          <div className="bg-white border border-[#E8E6E1] p-4 mb-6 flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8B8680]" strokeWidth={1.5} />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search documents..."
                className="w-full pl-10 pr-4 py-2.5 bg-[#FAF9F6] border border-[#E8E6E1] text-[13px] text-[#2C2C2C] outline-none focus:border-[#B8956B] transition-colors"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {types.map((type) => (
                <button
                  key={type}
                  onClick={() => setFilter(type)}
                  className={`text-[10px] tracking-wider uppercase px-3 py-2 border transition-colors ${
                    filter === type
                      ? 'bg-[#1B4332] text-white border-[#1B4332]'
                      : 'bg-white text-[#5A5A5A] border-[#E8E6E1] hover:border-[#B8956B]'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Document List */}
        <div className="bg-white border border-[#E8E6E1]">
          <div className="grid grid-cols-12 gap-4 px-6 py-3 border-b border-[#E8E6E1] bg-[#FAF9F6]">
            <span className="col-span-5 text-[9px] tracking-[0.2em] uppercase text-[#8B8680] font-medium">Document</span>
            <span className="col-span-2 text-[9px] tracking-[0.2em] uppercase text-[#8B8680] font-medium">Type</span>
            <span className="col-span-2 text-[9px] tracking-[0.2em] uppercase text-[#8B8680] font-medium">Date</span>
            <span className="col-span-1 text-[9px] tracking-[0.2em] uppercase text-[#8B8680] font-medium">Size</span>
            <span className="col-span-2 text-[9px] tracking-[0.2em] uppercase text-[#8B8680] font-medium text-right">Action</span>
          </div>
          {filtered.map((doc) => (
            <div key={doc.id} className="grid grid-cols-12 gap-4 px-6 py-4 border-b border-[#E8E6E1] last:border-0 hover:bg-[#FAF9F6] transition-colors items-center">
              <div className="col-span-5 flex items-center gap-3">
                <FileText className="w-4 h-4 text-[#8B8680] shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="text-[13px] text-[#2C2C2C]">{doc.name}</p>
                  {doc.gated && (
                    <span className="text-[9px] tracking-wider uppercase text-[#B8956B] bg-[#B8956B]/10 px-1.5 py-0.5">NDA Required</span>
                  )}
                </div>
              </div>
              <span className="col-span-2 text-[11px] text-[#5A5A5A]">{doc.type}</span>
              <span className="col-span-2 text-[11px] text-[#8B8680]">{doc.date}</span>
              <span className="col-span-1 text-[11px] text-[#8B8680] font-mono">{doc.size}</span>
              <div className="col-span-2 text-right">
                <button className="inline-flex items-center gap-1 text-[10px] tracking-wider uppercase text-[#B8956B] hover:text-[#1B4332] transition-colors border border-[#B8956B]/30 px-3 py-1.5 hover:border-[#1B4332]">
                  <Download className="w-3 h-3" strokeWidth={1.5} />
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
