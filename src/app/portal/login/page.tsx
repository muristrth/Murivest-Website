'use client';

import { useState, useEffect, useCallback } from 'react';
import { createBrowserClient } from '@supabase/ssr';
import { useRouter } from 'next/navigation';

type Mode = 'signin' | 'register' | 'forgot';

const T = {
  black: '#000000',
  white: '#FFFFFF',
  gray: '#595959',
  lightGray: '#E5E5E5',
  serif: "'Times New Roman', 'Times', 'Georgia', serif",
  sans: "'Helvetica Neue', 'Arial', sans-serif",
};

export default function InvestorPortalLoginPage() {
  const router = useRouter();
  const [mode, setMode] = useState<Mode>('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [fullName, setFullName] = useState('');
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState<{ type: 'error' | 'success'; message: string } | null>(null);
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
  );

  const switchMode = useCallback((m: Mode) => {
    setMode(m);
    setAlert(null);
    setValidationErrors({});
    setPassword('');
    setConfirm('');
  }, []);

  const validateEmail = (e: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

  async function handleSignIn(e: React.FormEvent) {
    e.preventDefault();
    setAlert(null);
    setValidationErrors({});
    const errors: Record<string, string> = {};
    if (!email) errors.email = 'Email address is required';
    else if (!validateEmail(email)) errors.email = 'Please enter a valid email address';
    if (!password) errors.password = 'Password is required';
    if (Object.keys(errors).length) { setValidationErrors(errors); return; }
    setLoading(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) setAlert({ type: 'error', message: error.message });
      else { router.push('/portal'); router.refresh(); }
    } finally { setLoading(false); }
  }

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    setAlert(null);
    setValidationErrors({});
    const errors: Record<string, string> = {};
    if (!fullName.trim()) errors.fullName = 'Full name is required';
    if (!email) errors.email = 'Email address is required';
    else if (!validateEmail(email)) errors.email = 'Please enter a valid email address';
    if (!password) errors.password = 'Password is required';
    else if (password.length < 8) errors.password = 'Password must be at least 8 characters';
    if (password !== confirm) errors.confirm = 'Passwords do not match';
    if (Object.keys(errors).length) { setValidationErrors(errors); return; }
    setLoading(true);
    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: { data: { full_name: fullName }, emailRedirectTo: `${window.location.origin}/portal` },
      });
      if (error) { setAlert({ type: 'error', message: error.message }); return; }
      const { data: userData } = await supabase.auth.getUser();
      const user = userData.user;
      if (user) {
        await supabase.from('profiles').upsert({ id: user.id, full_name: fullName, investor_status: 'registered' });
      }
      setAlert({ type: 'success', message: 'Account created successfully. Please check your email to verify your account before signing in.' });
      setPassword(''); setConfirm(''); setFullName(''); setEmail('');
    } finally { setLoading(false); }
  }

  async function handleForgot(e: React.FormEvent) {
    e.preventDefault();
    setAlert(null);
    setValidationErrors({});
    if (!email || !validateEmail(email)) { setValidationErrors({ email: 'Please enter a valid email address' }); return; }
    setLoading(true);
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, { redirectTo: `${window.location.origin}/portal/reset-password` });
      if (error) setAlert({ type: 'error', message: error.message });
      else setAlert({ type: 'success', message: 'If an account exists with this email, you will receive password reset instructions shortly.' });
    } finally { setLoading(false); }
  }

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '10px 12px', border: `1px solid ${T.lightGray}`,
    fontFamily: T.sans, fontSize: '14px', color: T.black, background: T.white, outline: 'none', borderRadius: 0,
  };
  const labelStyle: React.CSSProperties = {
    display: 'block', fontFamily: T.sans, fontSize: '11px', fontWeight: 600,
    color: T.gray, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '6px',
  };

  return (
    <>
      <style jsx global>{`
        body { margin: 0; font-family: ${T.sans}; background: ${T.white}; color: ${T.black}; }
        * { box-sizing: border-box; }
        input:focus { outline: 1px solid ${T.black}; }
      `}</style>
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 20px', background: T.white }}>
        <div style={{ width: '100%', maxWidth: '440px' }}>
          <div style={{ textAlign: 'center', marginBottom: '32px', borderBottom: `1px solid ${T.lightGray}`, paddingBottom: '24px' }}>
            <div style={{ fontFamily: T.serif, fontSize: '32px', fontWeight: 700, letterSpacing: '0.5px' }}>Murivest</div>
            <div style={{ fontFamily: T.sans, fontSize: '11px', color: T.gray, letterSpacing: '2px', textTransform: 'uppercase', marginTop: '4px' }}>Private Wealth Advisory</div>
          </div>

          <div style={{ display: 'flex', borderBottom: `1px solid ${T.lightGray}`, marginBottom: '24px' }}>
            {(['signin', 'register'] as const).map((m) => (
              <button key={m} onClick={() => switchMode(m)} style={{
                flex: 1, padding: '12px', background: 'transparent', border: 'none',
                borderBottom: mode === m ? `2px solid ${T.black}` : '2px solid transparent',
                fontFamily: T.sans, fontSize: '12px', fontWeight: mode === m ? 600 : 400,
                textTransform: 'uppercase', letterSpacing: '1px', color: mode === m ? T.black : T.gray, cursor: 'pointer',
              }}>
                {m === 'signin' ? 'Sign In' : 'Register'}
              </button>
            ))}
            {mode === 'forgot' && (
              <button style={{ flex: 1, padding: '12px', background: 'transparent', border: 'none', borderBottom: `2px solid ${T.black}`, fontFamily: T.sans, fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', color: T.black }}>Reset</button>
            )}
          </div>

          {alert && (
            <div style={{ padding: '12px 16px', border: `1px solid ${alert.type === 'error' ? T.black : T.gray}`, marginBottom: '20px', fontFamily: T.sans, fontSize: '13px' }}>
              {alert.message}
            </div>
          )}

          {mode === 'signin' && (
            <form onSubmit={handleSignIn}>
              <div style={{ marginBottom: '16px' }}>
                <label style={labelStyle}>Email Address</label>
                <input style={inputStyle} type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" />
                {validationErrors.email && <div style={{ color: T.black, fontSize: '12px', marginTop: '4px' }}>{validationErrors.email}</div>}
              </div>
              <div style={{ marginBottom: '24px' }}>
                <label style={labelStyle}>Password</label>
                <input style={inputStyle} type="password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" />
                {validationErrors.password && <div style={{ color: T.black, fontSize: '12px', marginTop: '4px' }}>{validationErrors.password}</div>}
              </div>
              <button type="submit" disabled={loading} style={{ width: '100%', padding: '14px', background: T.black, color: T.white, border: 'none', fontFamily: T.sans, fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1.5px', cursor: loading ? 'not-allowed' : 'pointer' }}>
                {loading ? 'Processing' : 'Sign In'}
              </button>
              <div style={{ textAlign: 'center', marginTop: '16px', fontFamily: T.sans, fontSize: '13px', color: T.gray }}>
                No account? <button type="button" onClick={() => switchMode('register')} style={{ background: 'none', border: 'none', color: T.black, fontWeight: 600, cursor: 'pointer', textDecoration: 'underline' }}>Register</button>
              </div>
              <div style={{ textAlign: 'center', marginTop: '8px' }}>
                <button type="button" onClick={() => switchMode('forgot')} style={{ background: 'none', border: 'none', color: T.gray, fontSize: '12px', cursor: 'pointer', textDecoration: 'underline' }}>Forgot password</button>
              </div>
            </form>
          )}

          {mode === 'register' && (
            <form onSubmit={handleRegister}>
              <div style={{ marginBottom: '16px' }}>
                <label style={labelStyle}>Full Name</label>
                <input style={inputStyle} type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} autoComplete="name" />
                {validationErrors.fullName && <div style={{ color: T.black, fontSize: '12px', marginTop: '4px' }}>{validationErrors.fullName}</div>}
              </div>
              <div style={{ marginBottom: '16px' }}>
                <label style={labelStyle}>Email Address</label>
                <input style={inputStyle} type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" />
                {validationErrors.email && <div style={{ color: T.black, fontSize: '12px', marginTop: '4px' }}>{validationErrors.email}</div>}
              </div>
              <div style={{ marginBottom: '16px' }}>
                <label style={labelStyle}>Password</label>
                <input style={inputStyle} type="password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="new-password" />
                {validationErrors.password && <div style={{ color: T.black, fontSize: '12px', marginTop: '4px' }}>{validationErrors.password}</div>}
              </div>
              <div style={{ marginBottom: '24px' }}>
                <label style={labelStyle}>Confirm Password</label>
                <input style={inputStyle} type="password" value={confirm} onChange={(e) => setConfirm(e.target.value)} autoComplete="new-password" />
                {validationErrors.confirm && <div style={{ color: T.black, fontSize: '12px', marginTop: '4px' }}>{validationErrors.confirm}</div>}
              </div>
              <button type="submit" disabled={loading} style={{ width: '100%', padding: '14px', background: T.black, color: T.white, border: 'none', fontFamily: T.sans, fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1.5px', cursor: loading ? 'not-allowed' : 'pointer' }}>
                {loading ? 'Processing' : 'Register'}
              </button>
              <div style={{ textAlign: 'center', marginTop: '16px', fontFamily: T.sans, fontSize: '13px', color: T.gray }}>
                Already registered? <button type="button" onClick={() => switchMode('signin')} style={{ background: 'none', border: 'none', color: T.black, fontWeight: 600, cursor: 'pointer', textDecoration: 'underline' }}>Sign In</button>
              </div>
            </form>
          )}

          {mode === 'forgot' && (
            <form onSubmit={handleForgot}>
              <div style={{ marginBottom: '24px' }}>
                <label style={labelStyle}>Email Address</label>
                <input style={inputStyle} type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" />
                {validationErrors.email && <div style={{ color: T.black, fontSize: '12px', marginTop: '4px' }}>{validationErrors.email}</div>}
              </div>
              <button type="submit" disabled={loading} style={{ width: '100%', padding: '14px', background: T.black, color: T.white, border: 'none', fontFamily: T.sans, fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1.5px', cursor: loading ? 'not-allowed' : 'pointer' }}>
                {loading ? 'Processing' : 'Send Reset Link'}
              </button>
              <div style={{ textAlign: 'center', marginTop: '16px' }}>
                <button type="button" onClick={() => switchMode('signin')} style={{ background: 'none', border: 'none', color: T.gray, fontSize: '12px', cursor: 'pointer', textDecoration: 'underline' }}>Back to Sign In</button>
              </div>
            </form>
          )}

          <div style={{ marginTop: '32px', paddingTop: '16px', borderTop: `1px solid ${T.lightGray}`, textAlign: 'center', fontFamily: T.sans, fontSize: '11px', color: T.gray }}>
            Secure connection. All rights reserved.
          </div>
        </div>
      </div>
    </>
  );
}
