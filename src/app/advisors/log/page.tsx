'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { Stepper, SectionHeader, QuoteBanner, ErrorBanner } from '@/components/shared';
import { fetchTodayLog, saveDailyLog } from '@/lib/api';
import { CARDONE_QUOTES } from '@/types/indexs';
import type { DailyLog } from '@/types/indexs';
import styles from './log.module.css';

const CURRENT_EMPLOYEE_ID = process.env.NEXT_PUBLIC_DEFAULT_EMPLOYEE_ID || '';

type Block = 'morning' | 'midday' | 'afternoon' | 'evening' | 'outcomes';

const EMPTY: Omit<DailyLog,'id'|'employee_id'|'log_date'|'created_at'|'updated_at'> = {
  crm_reviews:0, lead_followups:0, investor_outreaches:0, whatsapp_replies:0,
  property_uploads:0, jiji_postings:0, linkedin_outreaches:0, seller_sourcing_calls:0,
  client_calls:0, property_inspections:0, negotiations:0, investor_followups:0,
  reports_submitted:0, crm_updates:0, next_day_planned:false,
  meetings_booked:0, exclusive_mandates:0, deals_closed:0, revenue_generated:0, notes:'',
};

const BLOCKS: { key:Block; label:string; icon:string }[] = [
  { key:'morning',   label:'Morning',   icon:'🌅' },
  { key:'midday',    label:'Midday',    icon:'☀️' },
  { key:'afternoon', label:'Afternoon', icon:'🕐' },
  { key:'evening',   label:'Evening',   icon:'🌙' },
  { key:'outcomes',  label:'Outcomes',  icon:'🎯' },
];

export default function DailyLogPage() {
  const [log, setLog]           = useState({ ...EMPTY });
  const [active, setActive]     = useState<Block>('morning');
  const [saving, setSaving]     = useState(false);
  const [saved, setSaved]       = useState(false);
  const [error, setError]       = useState<string|null>(null);
  const [quote]                 = useState(() => CARDONE_QUOTES[Math.floor(Math.random()*CARDONE_QUOTES.length)]);

  // Load today's existing log
  useEffect(() => {
    if (!CURRENT_EMPLOYEE_ID) return;
    fetchTodayLog(CURRENT_EMPLOYEE_ID)
      .then(existing => { if (existing) setLog(existing as typeof EMPTY); })
      .catch(() => {});
  }, []);

  const set = useCallback((field: keyof typeof EMPTY) => (v: number | boolean | string) => {
    setLog(prev => ({ ...prev, [field]: v }));
  }, []);

  const totalActivities =
    log.crm_reviews + log.lead_followups + log.investor_outreaches + log.whatsapp_replies +
    log.property_uploads + log.jiji_postings + log.linkedin_outreaches + log.seller_sourcing_calls +
    log.client_calls + log.property_inspections + log.negotiations + log.investor_followups;

  const handleSave = async () => {
    setError(null); setSaving(true);
    try {
      await saveDailyLog({ ...log, employee_id: CURRENT_EMPLOYEE_ID });
      setSaved(true);
      setTimeout(() => setSaved(false), 4000);
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : 'Failed to save log');
    } finally {
      setSaving(false);
    }
  };

  const today = new Date().toLocaleDateString('en-KE', { weekday:'long', day:'numeric', month:'long' });
  const blockIdx = BLOCKS.findIndex(b => b.key === active);

  const N = (field: keyof typeof EMPTY) => set(field) as (v: number) => void;
  const B = (field: keyof typeof EMPTY) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setLog(prev => ({ ...prev, [field]: e.target.checked }));

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div>
          <p className={styles.date}>{today}</p>
          <h1 className={styles.title}>Daily <span className={styles.accent}>Activity Log</span></h1>
          <p className={styles.sub}>Massive action is the cure-all.</p>
        </div>
        <div className={styles.counter}>
          <span className={styles.counterNum}>{totalActivities}</span>
          <span className={styles.counterLabel}>Activities Today</span>
        </div>
      </header>

      {error && <ErrorBanner message={error}/>}
      <QuoteBanner quote={quote}/>

      {/* Block tabs */}
      <div className={styles.blockNav}>
        {BLOCKS.map((b, i) => (
          <button key={b.key} onClick={() => setActive(b.key)}
            className={`${styles.blockBtn} ${active===b.key ? styles.blockBtnActive:''}`}>
            <span>{b.icon}</span><span className={styles.blockLabel}>{b.label}</span>
            {/* completion dot */}
            {(() => {
              const totals: Record<Block,number> = {
                morning:   log.crm_reviews+log.lead_followups+log.investor_outreaches+log.whatsapp_replies,
                midday:    log.property_uploads+log.jiji_postings+log.linkedin_outreaches+log.seller_sourcing_calls,
                afternoon: log.client_calls+log.property_inspections+log.negotiations+log.investor_followups,
                evening:   log.reports_submitted+log.crm_updates+(log.next_day_planned?1:0),
                outcomes:  log.meetings_booked+log.exclusive_mandates+log.deals_closed,
              };
              return totals[b.key] > 0 ? <span className={styles.blockDot}/> : null;
            })()}
          </button>
        ))}
      </div>

      <div className={styles.formCard}>
        {active==='morning' && (
          <>
            <SectionHeader title="Morning Block" sub="CRM · Leads · Investor Outreach · WhatsApp"/>
            <div className={styles.stepGrid}>
              <Stepper label="CRM Reviews"         value={log.crm_reviews}           onChange={N('crm_reviews')}/>
              <Stepper label="Lead Follow-Ups"     value={log.lead_followups}         onChange={N('lead_followups')}/>
              <Stepper label="Investor Outreaches" value={log.investor_outreaches}    onChange={N('investor_outreaches')}/>
              <Stepper label="WhatsApp Replies"    value={log.whatsapp_replies}       onChange={N('whatsapp_replies')}/>
            </div>
          </>
        )}

        {active==='midday' && (
          <>
            <SectionHeader title="Midday Block" sub="Listings · Jiji · LinkedIn · Sourcing"/>
            <div className={styles.stepGrid}>
              <Stepper label="Property Uploads"    value={log.property_uploads}       onChange={N('property_uploads')}/>
              <Stepper label="Jiji Postings"       value={log.jiji_postings}          onChange={N('jiji_postings')}/>
              <Stepper label="LinkedIn Outreaches" value={log.linkedin_outreaches}    onChange={N('linkedin_outreaches')}/>
              <Stepper label="Seller Sourcing"     value={log.seller_sourcing_calls}  onChange={N('seller_sourcing_calls')}/>
            </div>
          </>
        )}

        {active==='afternoon' && (
          <>
            <SectionHeader title="Afternoon Block" sub="Calls · Inspections · Negotiations"/>
            <div className={styles.stepGrid}>
              <Stepper label="Client Calls"         value={log.client_calls}          onChange={N('client_calls')}/>
              <Stepper label="Inspections"          value={log.property_inspections}  onChange={N('property_inspections')}/>
              <Stepper label="Negotiations"         value={log.negotiations}          onChange={N('negotiations')}/>
              <Stepper label="Investor Follow-Ups"  value={log.investor_followups}    onChange={N('investor_followups')}/>
            </div>
          </>
        )}

        {active==='evening' && (
          <>
            <SectionHeader title="Evening Block" sub="Reports · CRM · Plan Tomorrow"/>
            <div className={styles.stepGrid}>
              <Stepper label="Reports Submitted" value={log.reports_submitted} onChange={N('reports_submitted')}/>
              <Stepper label="CRM Updates"       value={log.crm_updates}       onChange={N('crm_updates')}/>
            </div>
            <label className={styles.checkRow}>
              <input type="checkbox" checked={log.next_day_planned} onChange={B('next_day_planned')} className={styles.check}/>
              <span className={styles.checkText}>Next day planned — calendar blocked, priorities set</span>
            </label>
          </>
        )}

        {active==='outcomes' && (
          <>
            <SectionHeader title="Today's Outcomes" sub="Wins · Revenue · Deals"/>
            <div className={styles.stepGrid}>
              <Stepper label="Meetings Booked"    value={log.meetings_booked}     onChange={N('meetings_booked')}/>
              <Stepper label="Exclusive Mandates" value={log.exclusive_mandates}  onChange={N('exclusive_mandates')}/>
              <Stepper label="Deals Closed"       value={log.deals_closed}        onChange={N('deals_closed')}/>
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Revenue Generated (KES)</label>
              <input type="number" min="0" value={log.revenue_generated||''}
                onChange={e => setLog(p => ({...p, revenue_generated: Number(e.target.value)}))}
                placeholder="0" className={styles.textInput}/>
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Notes / Wins / Blockers</label>
              <textarea rows={4} value={log.notes||''}
                onChange={e => setLog(p => ({...p, notes: e.target.value}))}
                placeholder="Biggest win today? Any blockers? Plan to remove them?"
                className={styles.textarea}/>
            </div>
          </>
        )}

        {/* Navigation */}
        <div className={styles.navRow}>
          {blockIdx > 0 && (
            <button onClick={() => setActive(BLOCKS[blockIdx-1].key)} className={styles.btnBack}>← Back</button>
          )}
          {blockIdx < BLOCKS.length-1 ? (
            <button onClick={() => setActive(BLOCKS[blockIdx+1].key)} className={styles.btnNext}>
              Next: {BLOCKS[blockIdx+1].label} →
            </button>
          ) : (
            <button onClick={handleSave} disabled={saving} className={styles.btnSave}>
              {saving ? 'Saving…' : saved ? '✓ Log Saved!' : 'Submit Daily Log'}
            </button>
          )}
        </div>
      </div>

      {/* Summary strip */}
      <div className={styles.summaryStrip}>
        {[
          ['CRM', log.crm_reviews], ['Leads', log.lead_followups], ['Inv. OB', log.investor_outreaches],
          ['WA', log.whatsapp_replies], ['Props', log.property_uploads], ['Jiji', log.jiji_postings],
          ['LI', log.linkedin_outreaches], ['Src', log.seller_sourcing_calls],
          ['Calls', log.client_calls], ['Insp.', log.property_inspections],
          ['Nego.', log.negotiations], ['Mtgs', log.meetings_booked],
        ].map(([label, val]) => (
          <div key={label as string} className={styles.summaryItem}>
            <span className={styles.summaryLabel}>{label}</span>
            <span className={styles.summaryVal} style={{ color: Number(val)>0?'#C9A84C':'rgba(255,255,255,0.25)' }}>
              {val}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}