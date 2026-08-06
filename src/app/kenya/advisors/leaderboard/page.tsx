'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { PerformanceBadge, SectionHeader, QuoteBanner, ErrorBanner, Skeleton, EmptyState } from '@/components/shared';
import { fetchLeaderboard } from '@/lib/api';
import { CARDONE_QUOTES } from '@/types/indexs';
import type { WeeklyPerformance } from '@/types/indexs';
import styles from './leaderboard.module.css';

type SortKey = 'performance_score'|'property_uploads'|'investor_outreaches'|'meetings_booked'|'revenue_generated';

export default function LeaderboardPage() {
  const [data, setData]   = useState<WeeklyPerformance[]>([]);
  const [sortBy, setSortBy] = useState<SortKey>('performance_score');
  const [loading, setLoading] = useState(true);
  const [error, setError]   = useState<string|null>(null);
  const [quote]             = useState(() => CARDONE_QUOTES[Math.floor(Math.random()*CARDONE_QUOTES.length)]);

  const load = useCallback(async () => {
    setLoading(true); setError(null);
    try { setData(await fetchLeaderboard()); }
    catch (e: unknown) { setError(e instanceof Error ? e.message : 'Failed to load leaderboard'); }
    finally { setLoading(false); }
  }, []);

  useEffect(() => { load(); }, [load]);

  const sorted = [...data].sort((a,b) => (b[sortBy] as number)-(a[sortBy] as number));
  const maxRev = sorted.length ? Math.max(...sorted.map(e=>e.revenue_generated),1) : 1;

  const initials = (name: string) => name.split(' ').map(n=>n[0]).join('').slice(0,2).toUpperCase();
  const medal    = (i: number)    => i===0?'🥇':i===1?'🥈':i===2?'🥉':`#${i+1}`;

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>Weekly <span className={styles.accent}>Leaderboard</span></h1>
          <p className={styles.sub}>Be obsessed or be average. — Grant Cardone</p>
        </div>
        <div className={styles.weekBadge}>
          <span className={styles.weekLabel}>Current Week</span>
          <span className={styles.weekDate}>
            {new Date().toLocaleDateString('en-KE',{day:'numeric',month:'short',year:'numeric'})}
          </span>
        </div>
      </header>

      {error && <ErrorBanner message={error}/>}
      <QuoteBanner quote={quote}/>

      {/* Sort bar */}
      <div className={styles.sortBar}>
        <span className={styles.sortLabel}>Sort:</span>
        {([
          ['performance_score','Score'],
          ['property_uploads','Properties'],
          ['investor_outreaches','Outreaches'],
          ['meetings_booked','Meetings'],
          ['revenue_generated','Revenue'],
        ] as [SortKey,string][]).map(([k,l]) => (
          <button key={k} onClick={()=>setSortBy(k)}
            className={`${styles.sortBtn} ${sortBy===k?styles.sortBtnActive:''}`}>{l}</button>
        ))}
      </div>

      {/* Podium */}
      {!loading && sorted.length >= 1 && (
        <div className={styles.podium}>
          {sorted.slice(0,3).map((e,i)=>(
            <div key={e.employee_id} className={`${styles.podCard} ${i===0?styles.podFirst:''}`}>
              <div className={styles.podMedal}>{medal(i)}</div>
              <div className={styles.podAvatar}>{initials(e.name)}</div>
              <div className={styles.podName}>{e.name}</div>
              <div className={styles.podRole}>{e.role}</div>
              <div className={styles.podScore}>{e.performance_score}<span>/100</span></div>
              <PerformanceBadge score={e.performance_score}/>
              <div className={styles.podStats}>
                <span>{e.meetings_booked} Meetings</span>
                <span>{e.exclusive_mandates} Mandates</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Table */}
      <section className={styles.section}>
        <SectionHeader title="Full Rankings" sub="This Week's Activity"/>
        {loading ? (
          <div style={{display:'flex',flexDirection:'column',gap:8}}>
            {Array.from({length:5}).map((_,i)=><Skeleton key={i} height={54}/>)}
          </div>
        ) : sorted.length === 0 ? (
          <EmptyState message="No activity logged this week yet." icon="📊"/>
        ) : (
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>#</th><th>Associate</th><th>Score</th><th>Properties</th>
                  <th>Outreaches</th><th>Meetings</th><th>Mandates</th><th>Revenue</th><th>Status</th>
                </tr>
              </thead>
              <tbody>
                {sorted.map((e,i)=>(
                  <tr key={e.employee_id} className={styles.tableRow}>
                    <td className={styles.rankCell}>{medal(i)}</td>
                    <td>
                      <div className={styles.nameCell}>
                        <div className={styles.avatar}>{initials(e.name)}</div>
                        <div>
                          <div className={styles.nameText}>{e.name}</div>
                          <div className={styles.roleText}>{e.role}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div style={{display:'flex',alignItems:'center',gap:7}}>
                        <div style={{width:60,height:4,background:'rgba(255,255,255,0.07)',borderRadius:2,overflow:'hidden'}}>
                          <div style={{width:`${e.performance_score}%`,height:'100%',background:e.performance_score>=90?'#10B981':e.performance_score>=70?'#C9A84C':'#F59E0B',borderRadius:2}}/>
                        </div>
                        <span style={{fontFamily:'monospace',fontSize:13,fontWeight:700,color:'#fff'}}>{e.performance_score}</span>
                      </div>
                    </td>
                    <td className={styles.numCell}>{e.property_uploads}</td>
                    <td className={styles.numCell}>{e.investor_outreaches}</td>
                    <td className={styles.numCell}>{e.meetings_booked}</td>
                    <td className={styles.numCell} style={{color:e.exclusive_mandates>0?'#10B981':'rgba(255,255,255,0.25)'}}>{e.exclusive_mandates}</td>
                    <td>
                      <div style={{display:'flex',alignItems:'center',gap:6}}>
                        <div style={{width:`${(e.revenue_generated/maxRev)*60}px`,height:4,background:'rgba(201,168,76,0.6)',borderRadius:2,minWidth:2}}/>
                        <span style={{fontSize:11,fontFamily:'monospace',color:'rgba(255,255,255,0.6)'}}>
                          {(e.revenue_generated/1000).toFixed(0)}K
                        </span>
                      </div>
                    </td>
                    <td><PerformanceBadge score={e.performance_score}/></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {/* Team totals */}
      {!loading && sorted.length > 0 && (
        <div className={styles.teamTotals}>
          {[
            ['Team Outreaches', sorted.reduce((a,b)=>a+b.investor_outreaches,0)],
            ['Total Meetings',  sorted.reduce((a,b)=>a+b.meetings_booked,0)],
            ['Total Mandates',  sorted.reduce((a,b)=>a+b.exclusive_mandates,0)],
            ['Top Score',       `${sorted[0]?.performance_score}/100`],
          ].map(([label,val])=>(
            <div key={label as string} className={styles.totalItem}>
              <span className={styles.totalNum}>{val}</span>
              <span className={styles.totalLabel}>{label}</span>
            </div>
          ))}
          <div className={styles.totalQuote}>
            <p className={styles.tqText}>"The 10X Rule: set targets 10 times higher and take 10 times the action."</p>
            <p className={styles.tqAttrib}>— Grant Cardone</p>
          </div>
        </div>
      )}
    </div>
  );
}