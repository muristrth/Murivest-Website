'use client';
import React, { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import { KPIRing, StatCard, ProgressBar, SectionHeader, QuoteBanner, PerformanceBadge, ErrorBanner, Skeleton } from '@/components/shared';
import { fetchWeeklyKPIs, fetchTeamMetrics } from '@/lib/api';
import { CARDONE_QUOTES, WEEKLY_KPI_DEFAULTS, getPerformanceTier } from '@/types/indexs';
import type { WeeklyPerformance, TeamMetrics } from '@/types/indexs';
import styles from './dashboard.module.css';

// NOTE: Replace 'EMPLOYEE_ID_FROM_SESSION' with your auth session employee id.
// When you integrate Supabase Auth, pull the id from the session:
// const { data: { session } } = await supabase.auth.getSession();
const CURRENT_EMPLOYEE_ID = process.env.NEXT_PUBLIC_DEFAULT_EMPLOYEE_ID || '';

export default function TeamDashboard() {
  const [quote]                 = useState(() => CARDONE_QUOTES[Math.floor(Math.random() * CARDONE_QUOTES.length)]);
  const [weekly, setWeekly]     = useState<WeeklyPerformance | null>(null);
  const [metrics, setMetrics]   = useState<TeamMetrics | null>(null);
  const [loading, setLoading]   = useState(true);
  const [error, setError]       = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true); setError(null);
    try {
      const [w, m] = await Promise.all([
        fetchWeeklyKPIs(CURRENT_EMPLOYEE_ID),
        fetchTeamMetrics(),
      ]);
      setWeekly(w);
      setMetrics(m);
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : 'Failed to load dashboard');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { load(); }, [load]);

  const today = new Date().toLocaleDateString('en-KE', { weekday:'long', day:'numeric', month:'long', year:'numeric' });
  const score = weekly?.performance_score ?? 0;
  const tier  = getPerformanceTier(score);

  const kpis = [
    { label:'Properties', value:weekly?.property_uploads ?? 0,       target:WEEKLY_KPI_DEFAULTS.property_uploads_target },
    { label:'Investor OB',value:weekly?.investor_outreaches ?? 0,     target:WEEKLY_KPI_DEFAULTS.investor_outreaches_target },
    { label:'Follow-Ups', value:weekly?.total_followups ?? 0,         target:WEEKLY_KPI_DEFAULTS.followups_target },
    { label:'LinkedIn',   value:weekly?.linkedin_outreaches ?? 0,     target:WEEKLY_KPI_DEFAULTS.linkedin_outreaches_target },
    { label:'Sourcing',   value:weekly?.sourcing_calls ?? 0,          target:WEEKLY_KPI_DEFAULTS.sourcing_calls_target },
    { label:'Meetings',   value:weekly?.meetings_booked ?? 0,         target:WEEKLY_KPI_DEFAULTS.meetings_booked_target },
  ];

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div>
          <div className={styles.dateRow}>
            <div className={styles.dateDot}/><span className={styles.dateText}>{today}</span>
          </div>
          <h1 className={styles.title}>Your <span className={styles.accent}>Performance Hub</span></h1>
          <div style={{ display:'flex', alignItems:'center', gap:10, marginTop:8, flexWrap:'wrap' }}>
            {!loading && <PerformanceBadge score={score}/>}
            <span style={{ fontSize:11, color:'rgba(255,255,255,0.35)' }}>Week Score: {score}/100</span>
          </div>
        </div>
        <div className={styles.headerActions}>
          <Link href="/kenya/advisors/log"         className={styles.btnPrimary}>+ Log Today</Link>
          <Link href="/kenya/advisors/leaderboard" className={styles.btnSecondary}>Leaderboard</Link>
        </div>
      </header>

      {error && <ErrorBanner message={error}/>}
      <QuoteBanner quote={quote}/>

      {/* Weekly KPI Rings */}
      <section className={styles.section}>
        <SectionHeader title="Weekly KPI Progress" sub={`${weekly?.days_logged ?? 0} of 5 days logged`}/>
        <div className={styles.ringsGrid}>
          {loading
            ? Array.from({length:6}).map((_,i) => <Skeleton key={i} height={130}/>)
            : kpis.map(k => (
                <div key={k.label} className={styles.ringCard}>
                  <KPIRing value={k.value} target={k.target} label={k.label} size={88}/>
                </div>
              ))
          }
        </div>
      </section>

      <div className={styles.twoCol}>
        {/* Progress Bars */}
        <section className={styles.section}>
          <SectionHeader title="Activity Breakdown" sub="This Week"/>
          <div className={styles.card}>
            {loading
              ? Array.from({length:6}).map((_,i) => <Skeleton key={i} height={36}/>)
              : kpis.map(k => (
                  <ProgressBar key={k.label} value={k.value} target={k.target} label={k.label}/>
                ))
            }
          </div>
        </section>

        {/* Results */}
        <section className={styles.section}>
          <SectionHeader title="Results" sub="Outcomes This Week"/>
          <div className={styles.card}>
            {loading ? (
              Array.from({length:4}).map((_,i) => <Skeleton key={i} height={36}/>)
            ) : (
              <>
                {[
                  ['Meetings Booked',    weekly?.meetings_booked    ?? 0, undefined],
                  ['Exclusive Mandates', weekly?.exclusive_mandates ?? 0, (weekly?.exclusive_mandates ?? 0) > 0 ? '#10B981' : undefined],
                  ['Deals Closed',       weekly?.deals_closed       ?? 0, undefined],
                  ['Revenue (KES)',      `${(weekly?.revenue_generated ?? 0).toLocaleString()}`, '#C9A84C'],
                ].map(([label, val, color]) => (
                  <div key={label as string} className={styles.resultRow}>
                    <span className={styles.resultLabel}>{label}</span>
                    <span className={styles.resultValue} style={{ color: (color as string) || '#C9A84C' }}>{val}</span>
                  </div>
                ))}
                <div className={styles.divider}/>
                <div className={styles.scoreDisplay}>
                  <div className={styles.scoreCircle}>
                    <span className={styles.scoreNum}>{score}</span>
                    <span className={styles.scoreDenom}>/100</span>
                  </div>
                  <div>
                    <div style={{ fontSize:13, fontWeight:700, color:'#fff', marginBottom:5 }}>Performance Score</div>
                    <PerformanceBadge score={score}/>
                    <div style={{ fontSize:11, color:'rgba(255,255,255,0.35)', marginTop:6 }}>
                      {tier==='DOMINATING' ? '🔥 Exceptional. Keep the pressure.' :
                       tier==='ADVANCING'  ? '📈 Good progress. Push harder.' :
                       tier==='GRINDING'   ? '⚡ Halfway. Accelerate now.' :
                       '🚨 10X your activity. Now.'}
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </section>
      </div>

      {/* Team Pulse */}
      <section className={styles.section}>
        <SectionHeader title="Team Pulse" sub="Company-Wide Metrics"/>
        <div className={styles.metricsGrid}>
          {loading
            ? Array.from({length:6}).map((_,i) => <Skeleton key={i} height={100}/>)
            : <>
                <StatCard label="Total Associates"     value={metrics?.total_employees??'—'}   sub={`${metrics?.active_today??0} active today`}                   icon="👥"/>
                <StatCard label="Properties This Week" value={metrics?.properties_this_week??'—'}      sub="Team total"          accent/>
                <StatCard label="Investor Outreaches"  value={metrics?.investor_outreaches_this_week??'—'} sub="Team total this week"/>
                <StatCard label="Meetings Booked"      value={metrics?.meetings_this_week??'—'}    sub="Team total this week" accent/>
                <StatCard label="Mandates This Month"  value={metrics?.mandates_this_month??'—'}   sub="Exclusive mandates"/>
                <StatCard label="Revenue This Month"   value={`KES ${((metrics?.revenue_this_month??0)/1e6).toFixed(1)}M`} sub="Team total" accent/>
              </>
          }
        </div>
        {!loading && metrics?.top_performer && (
          <div className={styles.topBanner}>
            <span className={styles.tpLabel}>🏆 Top Performer This Week</span>
            <span className={styles.tpName}>{metrics.top_performer.name}</span>
            <PerformanceBadge score={metrics.top_performer.performance_score}/>
          </div>
        )}
      </section>

      {/* Workflow */}
      <section className={styles.section}>
        <SectionHeader title="Daily Workflow" sub="10X Standard Operating Procedure"/>
        <div className={styles.workflowGrid}>
          {[
            { time:'Morning',   icon:'🌅', items:['CRM Review','Lead Follow-Ups','Investor Outreach','WhatsApp Replies'] },
            { time:'Midday',    icon:'☀️', items:['Property Uploads','Jiji Postings','LinkedIn Outreach','Seller Sourcing'] },
            { time:'Afternoon', icon:'🕐', items:['Client Calls','Property Inspections','Negotiations','Investor Follow-Ups'] },
            { time:'Evening',   icon:'🌙', items:['Reporting','CRM Updates','Next-Day Planning'] },
          ].map(b => (
            <div key={b.time} className={styles.workflowCard}>
              <div className={styles.workflowHeader}>
                <span style={{ fontSize:18 }}>{b.icon}</span>
                <span className={styles.workflowTime}>{b.time}</span>
              </div>
              <ul className={styles.workflowList}>
                {b.items.map(item => (
                  <li key={item} className={styles.workflowItem}>
                    <span className={styles.wfDot}/>{item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}