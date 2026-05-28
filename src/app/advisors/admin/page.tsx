'use client';
import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { StatCard, ProgressBar, SectionHeader, PerformanceBadge, ErrorBanner, Skeleton, EmptyState } from '@/components/shared';
import { fetchEmployees, fetchTeamMetrics, fetchLeaderboard } from '@/lib/api';
import type { Employee, TeamMetrics, WeeklyPerformance } from '@/types/indexs';
import styles from './admin.module.css';

type Tab = 'overview' | 'team' | 'targets' | 'reports';

export default function AdminDashboard() {
  const [tab, setTab]             = useState<Tab>('overview');
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [metrics, setMetrics]     = useState<TeamMetrics|null>(null);
  const [leaderboard, setLeaderboard] = useState<WeeklyPerformance[]>([]);
  const [loading, setLoading]     = useState(true);
  const [error, setError]         = useState<string|null>(null);

  const load = useCallback(async () => {
    setLoading(true); setError(null);
    try {
      const [emps, met, lb] = await Promise.all([fetchEmployees(), fetchTeamMetrics(), fetchLeaderboard()]);
      setEmployees(emps); setMetrics(met); setLeaderboard(lb);
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : 'Failed to load admin data');
    } finally { setLoading(false); }
  }, []);

  useEffect(() => { load(); }, [load]);

  const loggedToday  = metrics?.active_today ?? 0;
  const avgScore     = leaderboard.length ? Math.round(leaderboard.reduce((a,b)=>a+b.performance_score,0)/leaderboard.length) : 0;
  const initials     = (name: string) => name.split(' ').map(n=>n[0]).join('').slice(0,2).toUpperCase();
  const findLB       = (id: string) => leaderboard.find(l=>l.employee_id===id);

  const TEAM_TARGETS = {
    weekly_properties:  (employees.length||1) * 15,
    weekly_outreaches:  (employees.length||1) * 50,
    weekly_meetings:    (employees.length||1) * 4,
    monthly_mandates:   employees.length||1,
    monthly_revenue:    (employees.length||1) * 500000,
  };

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div>
          <div className={styles.adminBadge}>ADMIN CONSOLE</div>
          <h1 className={styles.title}>Team <span className={styles.accent}>Command Center</span></h1>
          <p className={styles.sub}>Murivest Realty Group · Full Team Intelligence</p>
        </div>
        <div className={styles.headerRight}>
          <div className={styles.liveBadge}>
            <span className={styles.liveDot}/>
            <span>{loggedToday}/{employees.length} Active Today</span>
          </div>
          <Link href="/advisors/admin/employees/new" className={styles.btnPrimary}>+ Add Associate</Link>
        </div>
      </header>

      {error && <ErrorBanner message={error}/>}

      {/* Tabs */}
      <div className={styles.tabs}>
        {(['overview','team','targets','reports'] as Tab[]).map(t=>(
          <button key={t} onClick={()=>setTab(t)} className={`${styles.tab} ${tab===t?styles.tabActive:''}`}>
            {t.charAt(0).toUpperCase()+t.slice(1)}
          </button>
        ))}
      </div>

      {/* ── OVERVIEW ── */}
      {tab==='overview' && (
        <>
          <div className={styles.metricsGrid}>
            {loading
              ? Array.from({length:6}).map((_,i)=><Skeleton key={i} height={96}/>)
              : <>
                  <StatCard label="Total Associates"     value={employees.length}                        sub={`${loggedToday} active today`}                    icon="👥"/>
                  <StatCard label="Avg Performance"      value={`${avgScore}/100`}                       sub="Team average this week"                  accent/>
                  <StatCard label="Properties This Week" value={metrics?.properties_this_week??0}        sub={`Target: ${TEAM_TARGETS.weekly_properties}`}/>
                  <StatCard label="Investor Outreaches"  value={metrics?.investor_outreaches_this_week??0} sub={`Target: ${TEAM_TARGETS.weekly_outreaches}`} accent/>
                  <StatCard label="Meetings Booked"      value={metrics?.meetings_this_week??0}          sub={`Target: ${TEAM_TARGETS.weekly_meetings}`}/>
                  <StatCard label="Revenue This Month"   value={`KES ${((metrics?.revenue_this_month??0)/1e6).toFixed(1)}M`} sub="Team total" accent/>
                </>
            }
          </div>

          <section className={styles.section}>
            <SectionHeader title="Team KPI Progress" sub="This Week vs Targets"/>
            <div className={styles.card}>
              {loading
                ? Array.from({length:5}).map((_,i)=><Skeleton key={i} height={34}/>)
                : <>
                    <ProgressBar value={metrics?.properties_this_week??0}           target={TEAM_TARGETS.weekly_properties}  label="Property Uploads"/>
                    <ProgressBar value={metrics?.investor_outreaches_this_week??0}   target={TEAM_TARGETS.weekly_outreaches}  label="Investor Outreaches"/>
                    <ProgressBar value={metrics?.meetings_this_week??0}              target={TEAM_TARGETS.weekly_meetings}    label="Meetings Booked"/>
                    <ProgressBar value={metrics?.mandates_this_month??0}             target={TEAM_TARGETS.monthly_mandates}   label="Exclusive Mandates (Monthly)"/>
                    <ProgressBar value={metrics?.revenue_this_month??0}              target={TEAM_TARGETS.monthly_revenue}    label="Revenue KES (Monthly)"/>
                  </>
              }
            </div>
          </section>

          <section className={styles.section}>
            <SectionHeader title="Associate Status" sub="Today"/>
            {loading ? (
              <div className={styles.statusGrid}>{Array.from({length:6}).map((_,i)=><Skeleton key={i} height={160}/>)}</div>
            ) : employees.length===0 ? (
              <EmptyState message="No associates yet. Add your first team member." icon="👥"/>
            ) : (
              <div className={styles.statusGrid}>
                {employees.map(emp=>{
                  const lb = findLB(emp.id);
                  const score = lb?.performance_score??0;
                  return (
                    <div key={emp.id} className={styles.statusCard}>
                      <div className={styles.statusHeader}>
                        <div className={styles.statusAvatar}>{initials(emp.name)}</div>
                        <div style={{flex:1}}>
                          <div className={styles.statusName}>{emp.name}</div>
                          <div className={styles.statusRole}>{emp.role.replace('_',' ')}</div>
                        </div>
                        <div className={`${styles.statusDot} ${lb ? styles.dotActive : styles.dotInactive}`}/>
                      </div>
                      <div className={styles.statusScore}>{score}<span>/100</span></div>
                      <PerformanceBadge score={score}/>
                      <div className={styles.statusMeta}>
                        {lb ? `${lb.days_logged}/5 days logged` : 'No log this week'}
                      </div>
                      <Link href={`/advisors/admin/employee/${emp.id}`} className={styles.viewBtn}>View Profile →</Link>
                    </div>
                  );
                })}
              </div>
            )}
          </section>
        </>
      )}

      {/* ── TEAM ── */}
      {tab==='team' && (
        <section className={styles.section}>
          <SectionHeader title="All Associates" sub="Click a row to view individual profile"/>
          {loading ? (
            <div style={{display:'flex',flexDirection:'column',gap:8}}>{Array.from({length:6}).map((_,i)=><Skeleton key={i} height={52}/>)}</div>
          ) : employees.length===0 ? (
            <EmptyState message="No associates yet." icon="👥"/>
          ) : (
            <div className={styles.tableWrap}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Associate</th><th>Dept</th><th>Score</th>
                    <th>Props</th><th>Outreaches</th><th>Meetings</th>
                    <th>Mandates</th><th>Revenue</th><th>Days</th><th></th>
                  </tr>
                </thead>
                <tbody>
                  {employees.map(emp=>{
                    const lb = findLB(emp.id);
                    const score = lb?.performance_score??0;
                    return (
                      <tr key={emp.id} className={styles.tableRow}>
                        <td>
                          <div className={styles.nameCell}>
                            <div className={styles.avatar}>{initials(emp.name)}</div>
                            <div>
                              <div className={styles.nameText}>{emp.name}</div>
                              <div className={styles.roleText}>{emp.role.replace('_',' ')}</div>
                            </div>
                          </div>
                        </td>
                        <td><span className={styles.deptBadge}>{emp.department}</span></td>
                        <td><span style={{fontFamily:'monospace',fontWeight:800,color:'#C9A84C'}}>{score}</span></td>
                        <td className={styles.numCell}>{lb?.property_uploads??'—'}</td>
                        <td className={styles.numCell}>{lb?.investor_outreaches??'—'}</td>
                        <td className={styles.numCell}>{lb?.meetings_booked??'—'}</td>
                        <td className={styles.numCell} style={{color:(lb?.exclusive_mandates??0)>0?'#10B981':'rgba(255,255,255,0.25)'}}>
                          {lb?.exclusive_mandates??'—'}
                        </td>
                        <td className={styles.numCell} style={{fontSize:11}}>KES {(lb?.revenue_generated??0).toLocaleString()}</td>
                        <td className={styles.numCell}>{lb?.days_logged??0}/5</td>
                        <td>
                          <Link href={`/advisors/admin/employee/${emp.id}`} className={styles.tableLink}>View →</Link>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </section>
      )}

      {/* ── TARGETS ── */}
      {tab==='targets' && (
        <section className={styles.section}>
          <SectionHeader title="Weekly Target Overview" sub="Per associate — click to edit"/>
          {loading ? (
            <div className={styles.targetGrid}>{Array.from({length:6}).map((_,i)=><Skeleton key={i} height={180}/>)}</div>
          ) : (
            <div className={styles.targetGrid}>
              {employees.map(emp=>{
                const lb = findLB(emp.id);
                const score = lb?.performance_score??0;
                return (
                  <div key={emp.id} className={styles.targetCard}>
                    <div className={styles.targetHeader}>
                      <div className={styles.avatar}>{initials(emp.name)}</div>
                      <div>
                        <div className={styles.nameText}>{emp.name}</div>
                        <PerformanceBadge score={score}/>
                      </div>
                    </div>
                    <div className={styles.targetKPIs}>
                      {[
                        ['Properties', lb?.property_uploads??0, 15],
                        ['Outreaches', lb?.investor_outreaches??0, 50],
                        ['Meetings',   lb?.meetings_booked??0, 4],
                        ['Follow-Ups', lb?.total_followups??0, 30],
                      ].map(([label,val,target])=>(
                        <div key={label as string} className={styles.targetKPI}>
                          <span>{label}</span>
                          <span className={styles.kpiVal}>{val}<span className={styles.kpiMax}>/{target}</span></span>
                        </div>
                      ))}
                    </div>
                    <Link href={`/advisors/admin/employee/${emp.id}`} className={styles.editTargetBtn}>Edit Targets →</Link>
                  </div>
                );
              })}
            </div>
          )}
        </section>
      )}

      {/* ── REPORTS ── */}
      {tab==='reports' && (
        <>
          <section className={styles.section}>
            <SectionHeader title="Export Reports" sub="Download team data"/>
            <div className={styles.reportsGrid}>
              {[
                { icon:'📊', title:'Weekly Activity Report',   desc:'Full breakdown of all associate activities for this week' },
                { icon:'📈', title:'Monthly KPI Summary',      desc:'KPI performance vs targets for all associates this month' },
                { icon:'🏆', title:'Leaderboard Export',       desc:'Current leaderboard rankings as CSV' },
                { icon:'💰', title:'Revenue Report',           desc:'Revenue generated by associate and deal type' },
                { icon:'🔄', title:'Pipeline Report',          desc:'Active leads, deals and mandates in pipeline' },
                { icon:'📅', title:'Attendance Report',        desc:'Daily log submission rates and consistency scores' },
              ].map(r=>(
                <div key={r.title} className={styles.reportCard}>
                  <div className={styles.reportIcon}>{r.icon}</div>
                  <div className={styles.reportTitle}>{r.title}</div>
                  <div className={styles.reportDesc}>{r.desc}</div>
                  <button className={styles.reportBtn}>Download CSV</button>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.section}>
            <SectionHeader title="Performance Trend" sub="Team average score by week"/>
            <div className={styles.trendCard}>
              {loading ? (
                <Skeleton height={160}/>
              ) : leaderboard.length===0 ? (
                <EmptyState message="No data to display yet." icon="📈"/>
              ) : (
                <div className={styles.trendBars}>
                  {leaderboard.slice(0,8).map((e,i)=>(
                    <div key={i} className={styles.trendBar}>
                      <div className={styles.trendFill} style={{ height:`${e.performance_score}%`, background:e.performance_score>=80?'#C9A84C':'rgba(201,168,76,0.35)' }}/>
                      <span className={styles.trendScore}>{e.performance_score}</span>
                      <span className={styles.trendName}>{e.name.split(' ')[0]}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        </>
      )}
    </div>
  );
}