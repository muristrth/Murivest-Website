'use client';

import Link from 'next/link';
import { 
  LayoutDashboard, Building2, FileText, Bell, Settings, 
  TrendingUp, Eye, Download, ArrowRight 
} from 'lucide-react';
import ScrollReveal from '../../(components)/shared/ScrollReveal';
import { SAMPLE_PROPERTIES } from '../../(components)/data/singapore-market-data';

const navItems = [
  { icon: <LayoutDashboard className="w-4 h-4" strokeWidth={1.5} />, label: 'Dashboard', href: '/singapore/investor-portal/dashboard', active: true },
  { icon: <Building2 className="w-4 h-4" strokeWidth={1.5} />, label: 'Deal Room', href: '/singapore/investor-portal/deals', active: false },
  { icon: <FileText className="w-4 h-4" strokeWidth={1.5} />, label: 'Documents', href: '/singapore/investor-portal/documents', active: false },
  { icon: <Bell className="w-4 h-4" strokeWidth={1.5} />, label: 'Notifications', href: '#', active: false },
  { icon: <Settings className="w-4 h-4" strokeWidth={1.5} />, label: 'Settings', href: '#', active: false },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#F8F7F4]">
      {/* Top Navigation */}
      <header className="bg-white border-b border-[#E8E6E1] sticky top-0 z-30">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-serif text-lg text-[#1B4332]">Murivest</span>
            <span className="text-[#E8E6E1]">|</span>
            <span className="text-[11px] tracking-wider uppercase text-[#8B8680]">Investor Portal</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[11px] text-[#8B8680]">Welcome, <span className="text-[#1B4332]">Investor</span></span>
            <Link href="/singapore" className="text-[10px] tracking-wider uppercase text-[#B8956B] hover:text-[#1B4332] transition-colors">
              Exit Portal
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-64 shrink-0">
            <nav className="space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 text-[12px] tracking-wider uppercase transition-colors ${
                    item.active
                      ? 'bg-[#1B4332] text-white'
                      : 'text-[#5A5A5A] hover:bg-white hover:border-[#E8E6E1]'
                  }`}
                >
                  {item.icon}
                  {item.label}
                </Link>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <div className="flex-1 space-y-8">
            {/* Header */}
            <ScrollReveal>
              <div className="bg-white border border-[#E8E6E1] p-8">
                <h1 className="font-serif text-2xl text-[#2C2C2C] mb-2">Portfolio Snapshot</h1>
                <p className="text-[12px] text-[#8B8680] font-light">
                  Overview of your Singapore real estate holdings and active opportunities.
                </p>
              </div>
            </ScrollReveal>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { label: 'Portfolio Value', value: 'S$0', change: '—', icon: <TrendingUp className="w-5 h-5" strokeWidth={1.2} /> },
                { label: 'Active Deals', value: '0', change: 'Under Review', icon: <Building2 className="w-5 h-5" strokeWidth={1.2} /> },
                { label: 'Documents Accessed', value: '0', change: 'This Month', icon: <FileText className="w-5 h-5" strokeWidth={1.2} /> },
              ].map((stat) => (
                <ScrollReveal key={stat.label}>
                  <div className="bg-white border border-[#E8E6E1] p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[9px] tracking-[0.2em] uppercase text-[#8B8680]">{stat.label}</span>
                      <div className="text-[#B8956B]">{stat.icon}</div>
                    </div>
                    <p className="font-mono text-2xl text-[#1B4332] mb-1">{stat.value}</p>
                    <p className="text-[10px] text-[#8B8680]">{stat.change}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Recent Deals */}
            <ScrollReveal>
              <div className="bg-white border border-[#E8E6E1]">
                <div className="p-6 border-b border-[#E8E6E1] flex items-center justify-between">
                  <h2 className="text-[11px] tracking-[0.2em] uppercase text-[#5A5A5A] font-medium">Recent Opportunities</h2>
                  <Link href="/singapore/investor-portal/deals" className="text-[10px] tracking-wider uppercase text-[#B8956B] hover:text-[#1B4332] transition-colors">
                    View All
                  </Link>
                </div>
                <div className="divide-y divide-[#E8E6E1]">
                  {SAMPLE_PROPERTIES.slice(0, 3).map((property) => (
                    <div key={property.id} className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-[#FAF9F6] transition-colors">
                      <div className="flex-1">
                        <h3 className="font-serif text-base text-[#2C2C2C] mb-1">{property.title}</h3>
                        <p className="text-[11px] text-[#8B8680]">{property.address}</p>
                      </div>
                      <div className="flex items-center gap-6">
                        <div className="text-right">
                          <p className="text-[9px] tracking-wider uppercase text-[#8B8680]">Price</p>
                          <p className="font-mono text-sm text-[#1B4332]">{property.price}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-[9px] tracking-wider uppercase text-[#8B8680]">Yield</p>
                          <p className="font-mono text-sm text-[#B8956B]">{property.yield}%</p>
                        </div>
                        <Link
                          href={`/singapore/properties/${property.slug}`}
                          className="flex items-center gap-1 text-[10px] tracking-wider uppercase text-[#B8956B] hover:text-[#1B4332] transition-colors"
                        >
                          <Eye className="w-3.5 h-3.5" strokeWidth={1.5} />
                          View
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Document Access */}
            <ScrollReveal>
              <div className="bg-white border border-[#E8E6E1]">
                <div className="p-6 border-b border-[#E8E6E1] flex items-center justify-between">
                  <h2 className="text-[11px] tracking-[0.2em] uppercase text-[#5A5A5A] font-medium">Available Documents</h2>
                  <Link href="/singapore/investor-portal/documents" className="text-[10px] tracking-wider uppercase text-[#B8956B] hover:text-[#1B4332] transition-colors">
                    View All
                  </Link>
                </div>
                <div className="divide-y divide-[#E8E6E1]">
                  {[
                    { name: 'Singapore Q2 2026 Market Report', type: 'PDF', size: '4.2 MB' },
                    { name: 'Marina Bay District Investment Guide', type: 'PDF', size: '2.8 MB' },
                    { name: 'CBD Incentive Scheme 2.0 Briefing', type: 'PDF', size: '1.5 MB' },
                  ].map((doc) => (
                    <div key={doc.name} className="p-6 flex items-center justify-between hover:bg-[#FAF9F6] transition-colors">
                      <div className="flex items-center gap-3">
                        <FileText className="w-4 h-4 text-[#8B8680]" strokeWidth={1.5} />
                        <div>
                          <p className="text-sm text-[#2C2C2C]">{doc.name}</p>
                          <p className="text-[10px] text-[#8B8680]">{doc.type} • {doc.size}</p>
                        </div>
                      </div>
                      <button className="flex items-center gap-1 text-[10px] tracking-wider uppercase text-[#B8956B] hover:text-[#1B4332] transition-colors">
                        <Download className="w-3.5 h-3.5" strokeWidth={1.5} />
                        Download
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </main>
  );
}
