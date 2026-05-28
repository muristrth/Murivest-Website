'use client';
import React from 'react';
import type { PerformanceTier } from '@/types/indexs';

// ── KPI Ring ──────────────────────────────────────────────────────────────────
interface KPIRingProps {
  value: number;
  target: number;
  label: string;
  color?: string;
  size?: number;
}
export function KPIRing({ value, target, label, color = '#C9A84C', size = 80 }: KPIRingProps) {
  const pct = target > 0 ? Math.min(100, Math.round((value / target) * 100)) : 0;
  const r = (size - 10) / 2;
  const circ = 2 * Math.PI * r;
  const dash = (pct / 100) * circ;
  const strokeColor = pct >= 100 ? '#10B981' : color;
  return (
    <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:4 }}>
      <div style={{ position:'relative', width:size, height:size }}>
        <svg width={size} height={size} style={{ transform:'rotate(-90deg)' }}>
          <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="rgba(201,168,76,0.12)" strokeWidth={6}/>
          <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={strokeColor} strokeWidth={6}
            strokeDasharray={`${dash} ${circ}`} strokeLinecap="round"
            style={{ transition:'stroke-dasharray 0.7s ease' }}/>
        </svg>
        <div style={{ position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center' }}>
          <span style={{ fontSize: size<70?10:12, fontWeight:700, color:strokeColor, fontFamily:'monospace' }}>
            {pct}%
          </span>
        </div>
      </div>
      <span style={{ fontSize:10, color:'rgba(255,255,255,0.45)', textTransform:'uppercase', letterSpacing:'0.08em', textAlign:'center', maxWidth:size }}>
        {label}
      </span>
      <span style={{ fontSize:11, color:'rgba(255,255,255,0.6)', fontFamily:'monospace' }}>
        {value}<span style={{ color:'rgba(255,255,255,0.25)' }}>/{target}</span>
      </span>
    </div>
  );
}

// ── Stat Card ─────────────────────────────────────────────────────────────────
export function StatCard({ label, value, sub, accent, icon }: {
  label: string; value: string|number; sub?: string; accent?: boolean; icon?: React.ReactNode;
}) {
  return (
    <div style={{
      background: accent ? 'linear-gradient(135deg,#1B4332 0%,#2D6A4F 100%)' : 'rgba(255,255,255,0.04)',
      border: `1px solid ${accent ? '#C9A84C' : 'rgba(255,255,255,0.08)'}`,
      borderRadius:12, padding:'20px 22px', display:'flex', flexDirection:'column', gap:6, position:'relative', overflow:'hidden',
    }}>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start' }}>
        <span style={{ fontSize:10, textTransform:'uppercase', letterSpacing:'0.12em', color:'rgba(255,255,255,0.4)' }}>{label}</span>
        {icon && <span style={{ fontSize:16, opacity:0.6 }}>{icon}</span>}
      </div>
      <span style={{ fontSize:26, fontWeight:800, color: accent ? '#C9A84C' : '#fff', lineHeight:1, fontFamily:"'Cormorant Garamond',serif" }}>
        {value}
      </span>
      {sub && <span style={{ fontSize:11, color:'rgba(255,255,255,0.35)' }}>{sub}</span>}
    </div>
  );
}

// ── Performance Badge ─────────────────────────────────────────────────────────
export function PerformanceBadge({ score }: { score: number }) {
  const cfg =
    score >= 90 ? { label:'DOMINATING', bg:'#10B981', fg:'#fff' } :
    score >= 70 ? { label:'ADVANCING',  bg:'#3B82F6', fg:'#fff' } :
    score >= 50 ? { label:'GRINDING',   bg:'#C9A84C', fg:'#000' } :
                  { label:'NEEDS ACTION', bg:'#EF4444', fg:'#fff' };
  return (
    <span style={{ padding:'3px 9px', borderRadius:100, fontSize:9, fontWeight:800, letterSpacing:'0.1em', background:cfg.bg, color:cfg.fg, whiteSpace:'nowrap' }}>
      {cfg.label}
    </span>
  );
}

// ── Progress Bar ──────────────────────────────────────────────────────────────
export function ProgressBar({ value, target, label }: { value: number; target: number; label: string }) {
  const pct = target > 0 ? Math.min(100, Math.round((value / target) * 100)) : 0;
  const color = pct >= 100 ? '#10B981' : pct >= 70 ? '#C9A84C' : pct >= 40 ? '#F59E0B' : '#EF4444';
  return (
    <div style={{ marginBottom:14 }}>
      <div style={{ display:'flex', justifyContent:'space-between', marginBottom:5 }}>
        <span style={{ fontSize:11, color:'rgba(255,255,255,0.55)', textTransform:'uppercase', letterSpacing:'0.08em' }}>{label}</span>
        <span style={{ fontSize:11, fontFamily:'monospace', color }}>
          {value}<span style={{ color:'rgba(255,255,255,0.25)' }}>/{target}</span>
        </span>
      </div>
      <div style={{ background:'rgba(255,255,255,0.07)', borderRadius:4, height:5, overflow:'hidden' }}>
        <div style={{ width:`${pct}%`, height:'100%', borderRadius:4, background:color, transition:'width 0.5s ease' }}/>
      </div>
    </div>
  );
}

// ── Section Header ─────────────────────────────────────────────────────────────
export function SectionHeader({ title, sub }: { title: string; sub?: string }) {
  return (
    <div style={{ marginBottom:20 }}>
      <div style={{ width:28, height:2, background:'#C9A84C', marginBottom:10 }}/>
      <h2 style={{ fontSize:18, fontWeight:700, color:'#fff', margin:0, fontFamily:"'Cormorant Garamond',serif", letterSpacing:'-0.01em' }}>
        {title}
      </h2>
      {sub && <p style={{ margin:'3px 0 0', fontSize:10, color:'rgba(255,255,255,0.4)', letterSpacing:'0.1em', textTransform:'uppercase' }}>{sub}</p>}
    </div>
  );
}

// ── Stepper ────────────────────────────────────────────────────────────────────
export function Stepper({ label, value, onChange, max=999 }: { label:string; value:number; onChange:(v:number)=>void; max?:number }) {
  return (
    <div style={{ display:'flex', flexDirection:'column', gap:6, background:'rgba(255,255,255,0.04)', borderRadius:8, border:'1px solid rgba(255,255,255,0.08)', padding:'10px 12px' }}>
      <span style={{ fontSize:9, textTransform:'uppercase', letterSpacing:'0.1em', color:'rgba(255,255,255,0.4)' }}>{label}</span>
      <div style={{ display:'flex', alignItems:'center', gap:8 }}>
        <button onClick={() => onChange(Math.max(0, value-1))}
          style={{ width:28, height:28, borderRadius:5, border:'1px solid rgba(255,255,255,0.12)', background:'rgba(255,255,255,0.05)', color:'#fff', fontSize:16, cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', lineHeight:1 }}>
          −
        </button>
        <span style={{ minWidth:32, textAlign:'center', fontSize:20, fontWeight:800, color:'#C9A84C', fontFamily:'monospace' }}>
          {value}
        </span>
        <button onClick={() => onChange(Math.min(max, value+1))}
          style={{ width:28, height:28, borderRadius:5, border:'1px solid rgba(201,168,76,0.3)', background:'rgba(201,168,76,0.1)', color:'#C9A84C', fontSize:16, cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', lineHeight:1 }}>
          +
        </button>
      </div>
    </div>
  );
}

// ── Quote Banner ──────────────────────────────────────────────────────────────
export function QuoteBanner({ quote }: { quote: string }) {
  return (
    <div style={{ background:'rgba(27,67,50,0.4)', border:'1px solid rgba(201,168,76,0.15)', borderLeft:'3px solid #C9A84C', borderRadius:8, padding:'12px 16px', marginBottom:24 }}>
      <p style={{ margin:0, fontSize:13, color:'rgba(255,255,255,0.75)', fontStyle:'italic', lineHeight:1.55, fontFamily:"'Cormorant Garamond',serif" }}>
        "{quote}"
      </p>
      <p style={{ margin:'5px 0 0', fontSize:9, color:'#C9A84C', letterSpacing:'0.1em', textTransform:'uppercase' }}>— Grant Cardone</p>
    </div>
  );
}

// ── Loading Skeleton ──────────────────────────────────────────────────────────
export function Skeleton({ height = 40, borderRadius = 8 }: { height?: number; borderRadius?: number }) {
  return (
    <div style={{
      height, borderRadius, background:'linear-gradient(90deg, rgba(255,255,255,0.05) 25%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0.05) 75%)',
      backgroundSize:'200% 100%', animation:'shimmer 1.5s infinite',
    }}/>
  );
}

// ── Error Banner ──────────────────────────────────────────────────────────────
export function ErrorBanner({ message }: { message: string }) {
  return (
    <div style={{ background:'rgba(239,68,68,0.1)', border:'1px solid rgba(239,68,68,0.3)', borderRadius:8, padding:'12px 16px', color:'#FCA5A5', fontSize:13, marginBottom:20 }}>
      ⚠ {message}
    </div>
  );
}

// ── Empty State ───────────────────────────────────────────────────────────────
export function EmptyState({ message, icon = '📭' }: { message: string; icon?: string }) {
  return (
    <div style={{ textAlign:'center', padding:'48px 24px', color:'rgba(255,255,255,0.3)' }}>
      <div style={{ fontSize:32, marginBottom:12 }}>{icon}</div>
      <p style={{ fontSize:13, margin:0 }}>{message}</p>
    </div>
  );
}