'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { LeadWithActivity, EmailEvent, LeadActivity } from '@/app/types/lead';
import { STATUS_COLORS, STATUS_LABELS, getScoreLabel } from '@/app/lib/lead-scoring';

const ADMIN_TOKEN = typeof window !== 'undefined' ? process.env.NEXT_PUBLIC_ADMIN_TOKEN || '' : '';
const WA_BASE = 'https://wa.me/254729170156';

const SEQUENCE_STEPS = [
  { value: 'welcome', label: 'Welcome Email' },
  { value: 'mandate_brief', label: 'Mandate Brief (Day 2)' },
  { value: 'follow_up_1', label: 'Follow-Up 1 (Day 5)' },
  { value: 'follow_up_2', label: 'Follow-Up 2 (Day 10)' },
  { value: 'final_call', label: 'Final Call (Day 14)' },
  { value: 'newsletter', label: 'Newsletter' },
  { value: 'manual', label: 'Custom Email' },
];

export default function LeadDetailPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();

  const [lead, setLead] = useState<LeadWithActivity | null>(null);
  const [emailEvents, setEmailEvents] = useState<EmailEvent[]>([]);
  const [activities, setActivities] = useState<LeadActivity[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [sendingEmail, setSendingEmail] = useState(false);

  const [notes, setNotes] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [emailStep, setEmailStep] = useState('welcome');
  const [customSubject, setCustomSubject] = useState('');
  const [customBody, setCustomBody] = useState('');
  const [emailMsg, setEmailMsg] = useState('');

  useEffect(() => {
    async function fetchLead() {
      try {
        const res = await fetch(`/api/leads/${id}`, { headers: { 'x-admin-token': ADMIN_TOKEN } });
        const data = await res.json();
        setLead(data.lead);
        setEmailEvents(data.emailEvents || []);
        setActivities(data.activities || []);
        setNotes(data.lead?.internal_notes || '');
        setSelectedStatus(data.lead?.status || 'new');
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchLead();
  }, [id]);

  async function updateStatus() {
    setSaving(true);
    try {
      await fetch(`/api/leads/${id}/status`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-admin-token': ADMIN_TOKEN },
        body: JSON.stringify({ status: selectedStatus }),
      });
      setLead((prev) => prev ? { ...prev, status: selectedStatus as LeadWithActivity['status'] } : prev);
    } finally {
      setSaving(false);
    }
  }

  async function saveNotes() {
    setSaving(true);
    try {
      await fetch(`/api/leads/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json', 'x-admin-token': ADMIN_TOKEN },
        body: JSON.stringify({ internal_notes: notes }),
      });
    } finally {
      setSaving(false);
    }
  }

  async function sendEmail() {
    setSendingEmail(true);
    setEmailMsg('');
    try {
      const res = await fetch('/api/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-admin-token': ADMIN_TOKEN },
        body: JSON.stringify({ leadId: id, sequenceStep: emailStep, ...(emailStep === 'manual' && { customSubject, customBody }) }),
      });
      const data = await res.json();
      setEmailMsg(data.success ? `✓ ${data.message}` : `✗ ${data.error || 'Failed'}`);
      if (data.success) {
        const refreshRes = await fetch(`/api/leads/${id}`, { headers: { 'x-admin-token': ADMIN_TOKEN } });
        const refreshData = await refreshRes.json();
        setEmailEvents(refreshData.emailEvents || []);
        setActivities(refreshData.activities || []);
      }
    } finally {
      setSendingEmail(false);
    }
  }

  if (loading) return <div className="min-h-screen flex items-center justify-center bg-[#F5F4F0]"><p className="text-[#9A9A9A]">Loading lead…</p></div>;
  if (!lead) return <div className="min-h-screen flex items-center justify-center bg-[#F5F4F0]"><p className="text-[#9A9A9A]">Lead not found. <Link href="/admin" className="text-[#1B4332] underline">Back to dashboard</Link></p></div>;

  const { label: scoreLabel, color: scoreColor } = getScoreLabel(lead.lead_score);
  const phone = lead.phone?.replace(/\D/g, '');

  return (
    <div className="min-h-screen bg-[#F5F4F0]" style={{ fontFamily: "'Jost', 'Inter', system-ui, sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Jost:wght@300;400;500;600;700&display=swap');`}</style>

      <header className="bg-white border-b border-[#E8E6E1] px-8 py-5 flex items-center gap-4">
        <button onClick={() => router.back()} className="text-[#9A9A9A] hover:text-[#1B4332] transition-colors text-sm">← Back</button>
        <div className="flex-1">
          <h1 className="text-xl font-semibold text-[#1B4332]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{lead.first_name} {lead.last_name}</h1>
          <p className="text-[#9A9A9A] text-[12px]">{lead.job_title} · {lead.company_name} · {lead.city}, {lead.country}</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-white text-[11px] px-3 py-1.5 font-semibold tracking-wide" style={{ background: STATUS_COLORS[lead.status] }}>{STATUS_LABELS[lead.status]}</span>
          <span className="text-white text-[12px] px-3 py-1.5 font-bold" style={{ background: scoreColor }}>{lead.lead_score}/100 · {scoreLabel}</span>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-8 grid lg:grid-cols-3 gap-6">
        {/* Left column */}
        <div className="lg:col-span-2 space-y-6">
          <Card title="Contact Details">
            <div className="grid md:grid-cols-2 gap-y-4 gap-x-8 text-[14px]">
              <InfoRow label="Full Name" value={`${lead.first_name} ${lead.last_name}`} />
              <InfoRow label="Email" value={lead.email} link={`mailto:${lead.email}`} />
              <InfoRow label="Phone" value={lead.phone} link={`tel:${lead.phone}`} />
              <InfoRow label="WhatsApp" value="Open Chat" link={`${WA_BASE}`} />
              <InfoRow label="Location" value={`${lead.city}, ${lead.country}`} />
              <InfoRow label="Company" value={lead.company_name} />
              <InfoRow label="Title" value={lead.job_title} />
              <InfoRow label="Referral" value={lead.referral_source} />
            </div>
          </Card>

          <Card title="Investment Profile">
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { l: 'Deployable Capital', v: lead.deployable_capital },
                { l: 'Investment Timeline', v: lead.investment_timeline },
                { l: 'Investor Type', v: lead.investor_type },
              ].map((item) => (
                <div key={item.l} className="bg-[#F8F7F4] border border-[#E8E6E1] p-4">
                  <p className="text-[11px] tracking-widest uppercase text-[#9A9A9A] mb-1">{item.l}</p>
                  <p className="text-[#1B4332] font-semibold text-[14px]">{item.v}</p>
                </div>
              ))}
            </div>
            {lead.message && (
              <div className="mt-4 p-4 bg-[#FFF8F0] border-l-2 border-[#B8956B]">
                <p className="text-[11px] tracking-widest uppercase text-[#B8956B] mb-2">Message from Lead</p>
                <p className="text-[14px] text-[#4A4A4A] leading-relaxed">{lead.message}</p>
              </div>
            )}
          </Card>

          <Card title={`Email History (${emailEvents.length})`}>
            {emailEvents.length === 0 ? <p className="text-[#9A9A9A] text-[13px]">No emails sent yet.</p> : (
              <div className="space-y-3">
                {emailEvents.map((ev) => (
                  <div key={ev.id} className="flex items-start gap-4 p-3 border border-[#E8E6E1] bg-[#FAFAF8]">
                    <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${ev.status === 'sent' ? 'bg-[#27AE60]' : ev.status === 'failed' ? 'bg-[#C0392B]' : ev.status === 'opened' ? 'bg-[#3498DB]' : 'bg-[#9A9A9A]'}`} />
                    <div className="flex-1 min-w-0">
                      <p className="text-[13px] font-medium text-[#FFFFFF] truncate">{ev.subject}</p>
                      <p className="text-[11px] text-[#9A9A9A] mt-0.5">{ev.sequence_step} · {new Date(ev.created_at).toLocaleString('en-GB', { dateStyle: 'medium', timeStyle: 'short' })}</p>
                    </div>
                    <span className={`text-[10px] px-2 py-0.5 uppercase tracking-wide font-semibold ${ev.status === 'sent' ? 'bg-green-100 text-green-700' : ev.status === 'failed' ? 'bg-red-100 text-red-700' : ev.status === 'opened' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-600'}`}>{ev.status}</span>
                  </div>
                ))}
              </div>
            )}
          </Card>

          <Card title={`Activity Log (${activities.length})`}>
            {activities.length === 0 ? <p className="text-[#9A9A9A] text-[13px]">No activity yet.</p> : (
              <div className="relative">
                <div className="absolute left-[7px] top-0 bottom-0 w-px bg-[#E8E6E1]" />
                <div className="space-y-4">
                  {activities.map((act) => (
                    <div key={act.id} className="flex gap-4 relative">
                      <div className="w-3.5 h-3.5 rounded-full bg-[#B8956B] flex-shrink-0 mt-0.5 relative z-10" />
                      <div>
                        <p className="text-[13px] text-[#FFFFFF]">{act.description}</p>
                        <p className="text-[11px] text-[#9A9A9A] mt-0.5">{act.actor} · {new Date(act.created_at).toLocaleString('en-GB', { dateStyle: 'medium', timeStyle: 'short' })}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </Card>
        </div>

        {/* Right column — Actions */}
        <div className="space-y-6">
          <Card title="Quick Actions">
            <div className="space-y-3">
              <a href={`${WA_BASE}?text=Hi%20${encodeURIComponent(lead.first_name)}%2C%20this%20is%20Murivest%20Investment%20Desk.`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-3 bg-[#25D366] text-white text-[12px] tracking-widest uppercase font-semibold hover:opacity-90 transition-opacity">WhatsApp Lead</a>
              <a href={`mailto:${lead.email}`} className="flex items-center justify-center gap-2 w-full py-3 bg-[#1B4332] text-[#FAF9F6] text-[12px] tracking-widest uppercase font-semibold hover:bg-[#0D3326] transition-colors">Email Lead</a>
              <a href={`tel:${lead.phone}`} className="flex items-center justify-center gap-2 w-full py-3 border border-[#D4C4A8] text-[#1B4332] text-[12px] tracking-widest uppercase font-semibold hover:bg-[#F8F7F4] transition-colors">Call Lead</a>
            </div>
          </Card>

          <Card title="Update Status">
            <select value={selectedStatus} onChange={(e) => setSelectedStatus(e.target.value)} className="w-full h-10 px-3 border border-[#D4C4A8] text-[13px] focus:outline-none focus:border-[#1B4332] bg-white mb-3">
              {Object.entries(STATUS_LABELS).map(([v, l]) => <option key={v} value={v}>{l}</option>)}
            </select>
            <button onClick={updateStatus} disabled={saving || selectedStatus === lead.status} className="w-full py-2.5 bg-[#1B4332] text-[#FAF9F6] text-[12px] tracking-widest uppercase font-semibold hover:bg-[#0D3326] transition-colors disabled:opacity-50">{saving ? 'Saving…' : 'Update Status'}</button>
          </Card>

          <Card title="Send Email">
            <div className="space-y-3">
              <select value={emailStep} onChange={(e) => setEmailStep(e.target.value)} className="w-full h-10 px-3 border border-[#D4C4A8] text-[13px] focus:outline-none focus:border-[#1B4332] bg-white">
                {SEQUENCE_STEPS.map((s) => <option key={s.value} value={s.value}>{s.label}</option>)}
              </select>
              {emailStep === 'manual' && (
                <>
                  <input type="text" placeholder="Email subject" value={customSubject} onChange={(e) => setCustomSubject(e.target.value)} className="w-full h-10 px-3 border border-[#D4C4A8] text-[13px] focus:outline-none focus:border-[#1B4332]" />
                  <textarea placeholder="Email body (plain text)" value={customBody} onChange={(e) => setCustomBody(e.target.value)} rows={5} className="w-full px-3 py-2 border border-[#D4C4A8] text-[13px] focus:outline-none focus:border-[#1B4332] resize-none" />
                </>
              )}
              <button onClick={sendEmail} disabled={sendingEmail} className="w-full py-2.5 bg-[#B8956B] text-white text-[12px] tracking-widest uppercase font-semibold hover:bg-[#9A7A5A] transition-colors disabled:opacity-50">{sendingEmail ? 'Sending…' : 'Send Email'}</button>
              {emailMsg && <p className={`text-[12px] p-2 ${emailMsg.startsWith('✓') ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>{emailMsg}</p>}
            </div>
          </Card>

          <Card title="Internal Notes">
            <textarea value={notes} onChange={(e) => setNotes(e.target.value)} rows={6} placeholder="Add notes about this lead — qualification status, call summary, follow-up actions, deal notes…" className="w-full px-3 py-2 border border-[#D4C4A8] text-[13px] focus:outline-none focus:border-[#1B4332] resize-none mb-3" />
            <button onClick={saveNotes} disabled={saving} className="w-full py-2.5 border border-[#1B4332] text-[#1B4332] text-[12px] tracking-widest uppercase font-semibold hover:bg-[#1B4332] hover:text-white transition-colors disabled:opacity-50">{saving ? 'Saving…' : 'Save Notes'}</button>
          </Card>

          <Card title="Lead Metadata">
            <div className="space-y-2 text-[12px]">
              <MetaRow label="Lead ID" value={lead.id.slice(0, 8).toUpperCase()} />
              <MetaRow label="Score" value={`${lead.lead_score}/100 — ${getScoreLabel(lead.lead_score).label}`} />
              <MetaRow label="Source" value={lead.utm_source || lead.referral_source || 'Direct'} />
              <MetaRow label="Campaign" value={lead.utm_campaign || '—'} />
              <MetaRow label="Created" value={new Date(lead.created_at).toLocaleString('en-GB')} />
              <MetaRow label="Updated" value={lead.updated_at ? new Date(lead.updated_at).toLocaleString('en-GB') : '—'} />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

const Card = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="bg-white border border-[#E8E6E1]">
    <div className="px-6 py-4 border-b border-[#E8E6E1]"><h2 className="text-[#1B4332] font-semibold text-[15px]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{title}</h2></div>
    <div className="p-6">{children}</div>
  </div>
);

const InfoRow = ({ label, value, link }: { label: string; value: string; link?: string }) => (
  <div>
    <p className="text-[11px] tracking-widest uppercase text-[#9A9A9A] mb-0.5">{label}</p>
    {link ? <a href={link} target="_blank" rel="noopener noreferrer" className="text-[#1B4332] font-medium underline underline-offset-2">{value}</a> : <p className="text-[#FFFFFF] font-medium">{value}</p>}
  </div>
);

const MetaRow = ({ label, value }: { label: string; value: string }) => (
  <div className="flex justify-between">
    <span className="text-[#9A9A9A]">{label}</span>
    <span className="text-[#4A4A4A] font-medium text-right max-w-[160px] break-all">{value}</span>
  </div>
);