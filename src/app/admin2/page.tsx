'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { Lead, LeadStats } from '@/app/types/lead';
import { STATUS_COLORS, STATUS_LABELS, getScoreLabel } from '@/app/lib/lead-scoring';

const ADMIN_TOKEN = typeof window !== 'undefined' ? process.env.NEXT_PUBLIC_ADMIN_TOKEN || '' : '';

export default function AdminDashboard() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [stats, setStats] = useState<LeadStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [sortBy, setSortBy] = useState('created_at');
  const [sortDir, setSortDir] = useState('desc');
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        page: String(page),
        limit: '25',
        sort: sortBy,
        dir: sortDir,
        ...(statusFilter && { status: statusFilter }),
        ...(search && { search }),
      });
      const res = await fetch(`/api/leads?${params}`, {
        headers: { 'x-admin-token': ADMIN_TOKEN },
      });
      const data = await res.json();
      setLeads(data.leads || []);
      setStats(data.stats);
      setTotal(data.total || 0);
    } catch (err) {
      console.error('Failed to fetch leads:', err);
    } finally {
      setLoading(false);
    }
  }, [page, sortBy, sortDir, statusFilter, search]);

  useEffect(() => { fetchData(); }, [fetchData]);

  const totalPages = Math.ceil(total / 25);
  const scoreCounts = {
    hot: leads.filter(l => l.lead_score >= 75).length,
    warm: leads.filter(l => l.lead_score >= 55 && l.lead_score < 75).length,
    nurture: leads.filter(l => l.lead_score >= 35 && l.lead_score < 55).length,
    cold: leads.filter(l => l.lead_score < 35).length,
  };

  return (
    <div className="min-h-screen bg-[#F5F4F0]" style={{ fontFamily: "'Jost', 'Inter', system-ui, sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Jost:wght@300;400;500;600;700&display=swap');`}</style>

      <header className="bg-white border-b border-[#E8E6E1] px-8 py-5 flex items-center justify-between sticky top-0 z-10">
        <div>
          <h1 className="text-xl font-semibold text-[#1B4332]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Investment CRM</h1>
          <p className="text-[#9A9A9A] text-[12px] mt-0.5">{stats?.total_leads || 0} total leads · {stats?.leads_this_month || 0} this month</p>
        </div>
        <button onClick={fetchData} className="px-4 py-2 bg-[#1B4332] text-[#FAF9F6] text-[12px] tracking-widest uppercase hover:bg-[#0D3326] transition-colors">Refresh</button>
      </header>

      <div className="max-w-7xl mx-auto p-8">
        {/* Stats cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-8">
          {[
            { label: 'Total', value: stats?.total_leads ?? '—', color: '#1B4332' },
            { label: 'This Month', value: stats?.leads_this_month ?? '—', color: '#B8956B' },
            { label: 'Qualified', value: stats?.qualified ?? '—', color: '#9B59B6' },
            { label: 'NDA Sent', value: stats?.nda_sent ?? '—', color: '#1ABC9C' },
            { label: 'Data Room', value: stats?.data_room ?? '—', color: '#27AE60' },
            { label: 'LOI', value: stats?.loi ?? '—', color: '#F39C12' },
            { label: 'Closed', value: stats?.closed ?? '—', color: '#1B4332' },
            { label: 'Avg Score', value: stats ? `${stats.avg_lead_score}/100` : '—', color: '#3498DB' },
          ].map(s => (
            <div key={s.label} className="bg-white border border-[#E8E6E1] p-4">
              <p className="text-[10px] tracking-widest uppercase text-[#9A9A9A] mb-1">{s.label}</p>
              <p className="text-2xl font-light" style={{ color: s.color, fontFamily: "'Cormorant Garamond', serif" }}>{s.value}</p>
            </div>
          ))}
        </div>

        {/* Score distribution */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Hot (75+)', color: '#C0392B', count: scoreCounts.hot },
            { label: 'Warm (55–74)', color: '#E67E22', count: scoreCounts.warm },
            { label: 'Nurture (35–54)', color: '#B8956B', count: scoreCounts.nurture },
            { label: 'Cold (<35)', color: '#9A9A9A', count: scoreCounts.cold },
          ].map(b => (
            <div key={b.label} className="bg-white border border-[#E8E6E1] p-4 text-center">
              <div className="w-10 h-10 mx-auto mb-2 flex items-center justify-center text-white font-bold text-sm" style={{ background: b.color }}>{b.count}</div>
              <p className="text-[11px] text-[#6B6B6B]">{b.label}</p>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="bg-white border border-[#E8E6E1] p-4 flex flex-wrap gap-4 items-center mb-6">
          <input type="text" placeholder="Search name, email, company…" value={search} onChange={(e) => { setSearch(e.target.value); setPage(1); }} className="flex-1 min-w-[200px] h-10 px-4 border border-[#D4C4A8] text-[13px] focus:outline-none focus:border-[#1B4332]" />
          <select value={statusFilter} onChange={(e) => { setStatusFilter(e.target.value); setPage(1); }} className="h-10 px-3 border border-[#D4C4A8] text-[13px] focus:outline-none focus:border-[#1B4332] bg-white">
            <option value="">All Statuses</option>
            {Object.entries(STATUS_LABELS).map(([v, l]) => <option key={v} value={v}>{l}</option>)}
          </select>
          <select value={`${sortBy}:${sortDir}`} onChange={(e) => { const [s, d] = e.target.value.split(':'); setSortBy(s); setSortDir(d); }} className="h-10 px-3 border border-[#D4C4A8] text-[13px] focus:outline-none focus:border-[#1B4332] bg-white">
            <option value="created_at:desc">Newest First</option>
            <option value="created_at:asc">Oldest First</option>
            <option value="lead_score:desc">Highest Score</option>
            <option value="lead_score:asc">Lowest Score</option>
          </select>
          <p className="text-[12px] text-[#9A9A9A]">{total} leads</p>
        </div>

        {/* Table */}
        <div className="bg-white border border-[#E8E6E1]">
          <div className="overflow-x-auto">
            <table className="w-full text-[13px]">
              <thead>
                <tr className="bg-[#F8F7F4] text-[#9A9A9A] text-[11px] tracking-widest uppercase border-b border-[#E8E6E1]">
                  <th className="px-6 py-3 text-left">Lead</th>
                  <th className="px-4 py-3 text-left">Location</th>
                  <th className="px-4 py-3 text-left">Type</th>
                  <th className="px-4 py-3 text-left">Capital</th>
                  <th className="px-4 py-3 text-left">Score</th>
                  <th className="px-4 py-3 text-left">Status</th>
                  <th className="px-4 py-3 text-left">Date</th>
                  <th className="px-4 py-3 text-left"></th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr><td colSpan={8} className="py-16 text-center text-[#9A9A9A]">Loading leads…</td></tr>
                ) : leads.length === 0 ? (
                  <tr><td colSpan={8} className="py-16 text-center text-[#9A9A9A]">No leads found.</td></tr>
                ) : leads.map((lead) => {
                  const { label, color } = getScoreLabel(lead.lead_score);
                  return (
                    <tr key={lead.id} className="border-b border-[#F0EEE8] hover:bg-[#FAF9F6] transition-colors">
                      <td className="px-6 py-4">
                        <p className="font-semibold text-[#1A1A1A]">{lead.first_name} {lead.last_name}</p>
                        <p className="text-[#9A9A9A] text-[11px]">{lead.email}</p>
                        <p className="text-[#B0B0B0] text-[11px]">{lead.company_name}</p>
                      </td>
                      <td className="px-4 py-4 text-[#6B6B6B]">{lead.city}, {lead.country}</td>
                      <td className="px-4 py-4 text-[#6B6B6B]">{lead.investor_type}</td>
                      <td className="px-4 py-4"><span className="text-[12px] bg-[#F8F7F4] border border-[#E8E6E1] px-2 py-0.5 text-[#4A4A4A]">{lead.deployable_capital}</span></td>
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold" style={{ color }}>{lead.lead_score}</span>
                          <span className="text-[10px] px-2 py-0.5 rounded-full text-white" style={{ background: color }}>{label}</span>
                        </div>
                      </td>
                      <td className="px-4 py-4"><span className="text-[11px] px-2 py-1 text-white tracking-wide" style={{ background: STATUS_COLORS[lead.status] }}>{STATUS_LABELS[lead.status]}</span></td>
                      <td className="px-4 py-4 text-[#9A9A9A] text-[12px]">{new Date(lead.created_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: '2-digit' })}</td>
                      <td className="px-4 py-4">
                        <Link href={`/admin2/leads/${lead.id}`} className="text-[#1B4332] text-[12px] border border-[#1B4332] px-3 py-1.5 hover:bg-[#1B4332] hover:text-white transition-colors whitespace-nowrap">View →</Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          {totalPages > 1 && (
            <div className="px-6 py-4 border-t border-[#E8E6E1] flex items-center justify-between">
              <p className="text-[12px] text-[#9A9A9A]">Page {page} of {totalPages}</p>
              <div className="flex gap-2">
                <button onClick={() => setPage(Math.max(1, page - 1))} disabled={page === 1} className="px-3 py-1.5 border border-[#D4C4A8] text-[12px] disabled:opacity-40 hover:bg-[#F8F7F4] transition-colors">← Prev</button>
                <button onClick={() => setPage(Math.min(totalPages, page + 1))} disabled={page === totalPages} className="px-3 py-1.5 border border-[#D4C4A8] text-[12px] disabled:opacity-40 hover:bg-[#F8F7F4] transition-colors">Next →</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}