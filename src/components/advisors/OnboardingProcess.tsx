'use client';

import Link from 'next/link';
import { useState } from 'react';

const steps = [
  { title: 'Confirm your Murivest profile', detail: 'Review your role, market, and assigned workspace.' },
  { title: 'Open Murivest Studio', detail: 'Create or update property records in the shared Sanity workspace.' },
  { title: 'Complete your first property', detail: 'Your first published property activity is reflected in your weekly KPI.' },
];

export default function OnboardingProcess() {
  const [completed, setCompleted] = useState<number[]>([]);

  const toggle = (index: number) => {
    setCompleted((current) => current.includes(index) ? current.filter((item) => item !== index) : [...current, index]);
  };

  return (
    <section style={{ marginBottom: 28, border: '1px solid rgba(201,168,76,.25)', background: 'linear-gradient(135deg, rgba(201,168,76,.12), rgba(255,255,255,.03))', borderRadius: 16, padding: 24 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap', alignItems: 'flex-start' }}>
        <div>
          <div style={{ color: '#C9A84C', fontSize: 11, letterSpacing: '.18em', textTransform: 'uppercase', fontWeight: 700 }}>Welcome to Murivest</div>
          <h2 style={{ color: '#fff', fontSize: 25, margin: '8px 0 6px' }}>Your onboarding process</h2>
          <p style={{ color: 'rgba(255,255,255,.58)', margin: 0, maxWidth: 560, lineHeight: 1.6 }}>Start in Studio, keep your property records current, and let the workspace track your weekly activity and wallet earnings.</p>
        </div>
        <Link href="/studio" style={{ background: '#C9A84C', color: '#111', borderRadius: 8, padding: '12px 16px', textDecoration: 'none', fontSize: 12, fontWeight: 800, letterSpacing: '.04em' }}>Open Sanity Studio</Link>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: 10, marginTop: 22 }}>
        {steps.map((step, index) => {
          const isDone = completed.includes(index);
          return <button key={step.title} type="button" onClick={() => toggle(index)} style={{ textAlign: 'left', border: `1px solid ${isDone ? 'rgba(16,185,129,.45)' : 'rgba(255,255,255,.12)'}`, background: isDone ? 'rgba(16,185,129,.09)' : 'rgba(0,0,0,.14)', borderRadius: 10, padding: 15, color: '#fff', cursor: 'pointer' }}>
            <div style={{ color: isDone ? '#34D399' : '#C9A84C', fontSize: 11, fontWeight: 800 }}>{isDone ? 'COMPLETE' : `0${index + 1}`}</div>
            <div style={{ marginTop: 8, fontWeight: 700, fontSize: 13 }}>{step.title}</div>
            <div style={{ color: 'rgba(255,255,255,.48)', fontSize: 11, lineHeight: 1.5, marginTop: 6 }}>{step.detail}</div>
          </button>;
        })}
      </div>
    </section>
  );
}
