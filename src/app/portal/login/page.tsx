'use client';

// portal/login/page.tsx
// Three modes: 'signin' | 'register' | 'forgot'
// All Supabase auth flows handled client-side via @supabase/ssr createBrowserClient.

import { useState, useEffect, useCallback } from 'react';
import { createBrowserClient } from '@supabase/ssr';
import { useRouter } from 'next/navigation';

/* ─── Design Tokens ─────────────────────────────────────────────── */
const T = {
  // Old Money / Golf Club Lounge Palette
  forest:    '#1B4332',    // Primary authority
  forestLight:'#2D5A45',   // Hover states
  brass:     '#B8956B',    // Accent luxury
  brassLight:'#C9A77D',    // Hover brass
  cream:     '#F8F7F4',    // Warm background
  creamDark: '#F0EFE9',    // Subtle contrast
  charcoal:  '#2C2C2C',    // Primary text
  charcoalMuted: '#5C5C5C', // Secondary text
  warmGray:  '#8B8680',    // Tertiary text
  border:    '#E5E3DE',    // Subtle borders
  error:     '#9B2C2C',    // Muted error (not harsh red)
  errorBg:   '#FDF2F2',
  success:   '#22543D',    // Forest success
  white:     '#FFFFFF',
  
  // Typography
  serif:     "'Times New Roman', 'Georgia', serif",
  sans:      "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
  
  // Spacing (8-point grid)
  space: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    '2xl': '48px',
    '3xl': '64px',
  },
  
  // Transitions
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
};

type Mode = 'signin' | 'register' | 'forgot';

/* ─── Custom Hooks ──────────────────────────────────────────────── */
function useKeyPress(targetKey: string, callback: () => void) {
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === targetKey) callback();
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [targetKey, callback]);
}

/* ─── Components ────────────────────────────────────────────────── */

function Logo() {
  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      gap: T.space.md,
      marginBottom: T.space.xl 
    }}>
      <div style={{
        width: '48px',
        height: '48px',
        border: `2px solid ${T.brass}`,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: T.forest,
      }}>
        <span style={{
          color: T.brass,
          fontFamily: T.serif,
          fontSize: '20px',
          fontWeight: 600,
          letterSpacing: '2px',
        }}>M</span>
      </div>
      <div>
        <div style={{
          fontFamily: T.serif,
          fontSize: '24px',
          fontWeight: 400,
          color: T.charcoal,
          letterSpacing: '0.5px',
          lineHeight: 1.2,
        }}>
          Murivest
        </div>
        <div style={{
          fontFamily: T.sans,
          fontSize: '11px',
          color: T.warmGray,
          letterSpacing: '2px',
          textTransform: 'uppercase',
          marginTop: '2px',
        }}>
          Private Wealth
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  required = true,
  autoComplete,
  icon,
  helperText,
  error,
}: {
  label: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  required?: boolean;
  autoComplete?: string;
  icon?: React.ReactNode;
  helperText?: string;
  error?: string;
}) {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';
  const inputType = isPassword ? (showPassword ? 'text' : 'password') : type;

  return (
    <div style={{ marginBottom: T.space.lg }}>
      <label style={{
        display: 'block',
        fontFamily: T.sans,
        fontSize: '12px',
        fontWeight: 500,
        color: T.charcoalMuted,
        textTransform: 'uppercase',
        letterSpacing: '1.5px',
        marginBottom: T.space.sm,
      }}>
        {label}
        {required && <span style={{ color: T.brass, marginLeft: '4px' }}>*</span>}
      </label>
      
      <div style={{ position: 'relative' }}>
        {icon && (
          <div style={{
            position: 'absolute',
            left: T.space.md,
            top: '50%',
            transform: 'translateY(-50%)',
            color: isFocused ? T.forest : T.warmGray,
            transition: T.transition,
            zIndex: 2,
          }}>
            {icon}
          </div>
        )}
        
        <input
          type={inputType}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          autoComplete={autoComplete}
          style={{
            width: '100%',
            padding: `${T.space.md} ${isPassword ? '48px' : T.space.md} ${T.space.md} ${icon ? '48px' : T.space.md}`,
            border: `1px solid ${error ? T.error : isFocused ? T.forest : T.border}`,
            borderRadius: '2px',
            fontFamily: T.sans,
            fontSize: '15px',
            color: T.charcoal,
            background: T.white,
            outline: 'none',
            transition: T.transition,
            boxShadow: error 
              ? `0 0 0 3px rgba(155, 44, 44, 0.08)` 
              : isFocused 
                ? `0 0 0 3px rgba(27, 67, 50, 0.08)` 
                : 'none',
          }}
        />
        
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            style={{
              position: 'absolute',
              right: T.space.md,
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: T.warmGray,
              fontSize: '12px',
              fontFamily: T.sans,
              letterSpacing: '0.5px',
              padding: '4px',
            }}
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        )}
      </div>
      
      {helperText && !error && (
        <div style={{
          marginTop: T.space.xs,
          fontFamily: T.sans,
          fontSize: '12px',
          color: T.warmGray,
          fontStyle: 'italic',
        }}>
          {helperText}
        </div>
      )}
      
      {error && (
        <div style={{
          marginTop: T.space.xs,
          fontFamily: T.sans,
          fontSize: '12px',
          color: T.error,
          display: 'flex',
          alignItems: 'center',
          gap: T.space.xs,
        }}>
          <span>•</span> {error}
        </div>
      )}
    </div>
  );
}

function Alert({ type, message, onDismiss }: { 
  type: 'error' | 'success'; 
  message: string;
  onDismiss?: () => void;
}) {
  useEffect(() => {
    if (type === 'success' && onDismiss) {
      const timer = setTimeout(onDismiss, 5000);
      return () => clearTimeout(timer);
    }
  }, [type, onDismiss]);

  const isError = type === 'error';
  
  return (
    <div style={{
      padding: `${T.space.md} ${T.space.lg}`,
      background: isError ? T.errorBg : '#F0FDF4',
      borderLeft: `3px solid ${isError ? T.error : T.success}`,
      marginBottom: T.space.lg,
      display: 'flex',
      alignItems: 'flex-start',
      gap: T.space.md,
      animation: 'slideIn 0.3s ease-out',
    }}>
      <span style={{ 
        fontSize: '16px',
        color: isError ? T.error : T.success,
      }}>
        {isError ? '⚠' : '✓'}
      </span>
      <div style={{ flex: 1 }}>
        <div style={{
          fontFamily: T.sans,
          fontSize: '14px',
          color: isError ? T.error : T.success,
          fontWeight: 500,
          lineHeight: 1.5,
        }}>
          {message}
        </div>
      </div>
      {onDismiss && (
        <button
          onClick={onDismiss}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: isError ? T.error : T.success,
            fontSize: '18px',
            lineHeight: 1,
            padding: '0',
          }}
        >
          ×
        </button>
      )}
    </div>
  );
}

function Button({ 
  label, 
  loading, 
  type = 'submit', 
  variant = 'primary',
  onClick,
  fullWidth = true,
}: {
  label: string;
  loading?: boolean;
  type?: 'submit' | 'button';
  variant?: 'primary' | 'secondary' | 'text';
  onClick?: () => void;
  fullWidth?: boolean;
}) {
  const isPrimary = variant === 'primary';
  const isText = variant === 'text';
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={loading}
      style={{
        width: fullWidth ? '100%' : 'auto',
        padding: isText ? '8px 0' : '16px 32px',
        background: isPrimary ? T.forest : isText ? 'transparent' : 'transparent',
        color: isPrimary ? T.white : isText ? T.forest : T.forest,
        border: isPrimary ? 'none' : isText ? 'none' : `1px solid ${T.forest}`,
        borderRadius: '2px',
        fontFamily: T.sans,
        fontSize: '13px',
        fontWeight: 500,
        letterSpacing: '1.5px',
        textTransform: 'uppercase',
        cursor: loading ? 'not-allowed' : 'pointer',
        opacity: loading ? 0.7 : 1,
        transition: T.transition,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: T.space.sm,
        position: 'relative',
        overflow: 'hidden',
      }}
      onMouseEnter={(e) => {
        if (!loading && isPrimary) {
          e.currentTarget.style.background = T.forestLight;
          e.currentTarget.style.transform = 'translateY(-1px)';
        }
      }}
      onMouseLeave={(e) => {
        if (isPrimary) {
          e.currentTarget.style.background = T.forest;
          e.currentTarget.style.transform = 'translateY(0)';
        }
      }}
    >
      {loading && (
        <span style={{
          display: 'inline-block',
          width: '16px',
          height: '16px',
          border: `2px solid ${isPrimary ? 'rgba(255,255,255,0.3)' : 'rgba(27,67,50,0.3)'}`,
          borderTopColor: isPrimary ? T.white : T.forest,
          borderRadius: '50%',
          animation: 'spin 0.8s linear infinite',
        }} />
      )}
      {label}
    </button>
  );
}

function Tab({ 
  label, 
  active, 
  onClick 
}: { 
  label: string; 
  active: boolean; 
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        flex: 1,
        padding: `${T.space.md} ${T.space.sm}`,
        background: 'transparent',
        border: 'none',
        borderBottom: `2px solid ${active ? T.forest : 'transparent'}`,
        fontFamily: T.sans,
        fontSize: '12px',
        fontWeight: active ? 600 : 400,
        letterSpacing: '1.5px',
        textTransform: 'uppercase',
        color: active ? T.forest : T.warmGray,
        cursor: 'pointer',
        transition: T.transition,
        position: 'relative',
      }}
      onMouseEnter={(e) => {
        if (!active) e.currentTarget.style.color = T.charcoalMuted;
      }}
      onMouseLeave={(e) => {
        if (!active) e.currentTarget.style.color = T.warmGray;
      }}
    >
      {label}
    </button>
  );
}

function PasswordStrength({ password }: { password: string }) {
  const checks = [
    { label: 'At least 8 characters', pass: password.length >= 8 },
    { label: 'One uppercase letter', pass: /[A-Z]/.test(password) },
    { label: 'One number', pass: /\d/.test(password) },
    { label: 'One special character', pass: /[^A-Za-z0-9]/.test(password) },
  ];
  
  const score = checks.filter(c => c.pass).length;
  const strengthLabels = ['Weak', 'Fair', 'Good', 'Strong'];
  const strengthColors = [T.error, '#D69E2E', '#B8956B', T.forest];
  
  if (password.length === 0) return null;

  return (
    <div style={{
      marginTop: T.space.md,
      padding: T.space.md,
      background: T.cream,
      borderRadius: '2px',
    }}>
      <div style={{
        display: 'flex',
        gap: '4px',
        marginBottom: T.space.md,
      }}>
        {[1, 2, 3, 4].map((level) => (
          <div
            key={level}
            style={{
              flex: 1,
              height: '4px',
              background: score >= level ? strengthColors[score - 1] : T.border,
              borderRadius: '2px',
              transition: T.transition,
            }}
          />
        ))}
      </div>
      
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: T.space.sm,
      }}>
        <span style={{
          fontFamily: T.sans,
          fontSize: '12px',
          color: T.charcoalMuted,
          fontWeight: 500,
        }}>
          Password strength
        </span>
        <span style={{
          fontFamily: T.sans,
          fontSize: '12px',
          color: strengthColors[score - 1] || T.warmGray,
          fontWeight: 600,
        }}>
          {strengthLabels[score - 1] || 'Too short'}
        </span>
      </div>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: `${T.space.xs} ${T.space.md}`,
      }}>
        {checks.map((check) => (
          <div
            key={check.label}
            style={{
              fontFamily: T.sans,
              fontSize: '11px',
              color: check.pass ? T.forest : T.warmGray,
              display: 'flex',
              alignItems: 'center',
              gap: T.space.xs,
            }}
          >
            <span style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              background: check.pass ? T.forest : 'transparent',
              border: `1px solid ${check.pass ? T.forest : T.warmGray}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '8px',
              color: T.white,
            }}>
              {check.pass && '✓'}
            </span>
            {check.label}
          </div>
        ))}
      </div>
    </div>
  );
}

function Divider() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: T.space.md,
      margin: `${T.space.lg} 0`,
      color: T.warmGray,
      fontFamily: T.sans,
      fontSize: '11px',
      letterSpacing: '1px',
      textTransform: 'uppercase',
    }}>
      <div style={{ flex: 1, height: '1px', background: T.border }} />
      <span>Or</span>
      <div style={{ flex: 1, height: '1px', background: T.border }} />
    </div>
  );
}

/* ─── Main Page Component ───────────────────────────────────────── */
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

  // Keyboard shortcuts
  useKeyPress('Escape', () => {
    if (alert) setAlert(null);
  });

  const switchMode = useCallback((m: Mode) => {
    setMode(m);
    setAlert(null);
    setValidationErrors({});
    setPassword('');
    setConfirm('');
  }, []);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  /* ── Sign In ───────────────────────────────────────────────────── */
  async function handleSignIn(e: React.FormEvent) {
    e.preventDefault();
    setAlert(null);
    setValidationErrors({});
    
    const errors: Record<string, string> = {};
    if (!email) errors.email = 'Email address is required';
    else if (!validateEmail(email)) errors.email = 'Please enter a valid email address';
    if (!password) errors.password = 'Password is required';
    
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }
    
    setLoading(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        setAlert({ type: 'error', message: error.message });
      } else {
        router.push('/portal');
        router.refresh();
      }
    } finally {
      setLoading(false);
    }
  }

  /* ── Register ──────────────────────────────────────────────────── */
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
    
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { full_name: fullName },
          emailRedirectTo: `${window.location.origin}/portal`,
        },
      });
      if (error) {
        setAlert({ type: 'error', message: error.message });
      } else {
        setAlert({
          type: 'success',
          message: 'Account created successfully. Please check your email to verify your account before signing in.',
        });
        setPassword('');
        setConfirm('');
        setFullName('');
        setEmail('');
      }
    } finally {
      setLoading(false);
    }
  }

  /* ── Forgot password ───────────────────────────────────────────── */
  async function handleForgot(e: React.FormEvent) {
    e.preventDefault();
    setAlert(null);
    setValidationErrors({});
    
    if (!email || !validateEmail(email)) {
      setValidationErrors({ email: 'Please enter a valid email address' });
      return;
    }
    
    setLoading(true);
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/portal/reset-password`,
      });
      if (error) {
        setAlert({ type: 'error', message: error.message });
      } else {
        setAlert({
          type: 'success',
          message: 'If an account exists with this email, you will receive password reset instructions shortly.',
        });
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');
        
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        * {
          box-sizing: border-box;
        }
        
        body {
          margin: 0;
          font-family: ${T.sans};
          background: ${T.cream};
          color: ${T.charcoal};
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        input::placeholder {
          color: ${T.warmGray};
          opacity: 0.6;
        }
        
        input:focus {
          outline: none;
        }
      `}</style>

      <div style={{
        minHeight: '100vh',
        display: 'flex',
        background: T.cream,
        position: 'relative',
      }}>
        {/* Left Panel - Brand/Visual (Hidden on mobile) */}
        <div style={{
          flex: '1',
          background: T.forest,
          display: 'none',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: T.space['2xl'],
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Decorative elements */}
          <div style={{
            position: 'absolute',
            top: '-20%',
            right: '-20%',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: `radial-gradient(circle, ${T.brass}15 0%, transparent 70%)`,
          }} />
          <div style={{
            position: 'absolute',
            bottom: '-10%',
            left: '-10%',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: `radial-gradient(circle, ${T.brass}10 0%, transparent 70%)`,
          }} />
          
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{
              fontFamily: T.serif,
              fontSize: '48px',
              color: T.white,
              fontWeight: 400,
              letterSpacing: '-0.5px',
              lineHeight: 1.1,
              marginBottom: T.space.lg,
            }}>
              Murivest
            </div>
            <div style={{
              width: '60px',
              height: '2px',
              background: T.brass,
              marginBottom: T.space.lg,
            }} />
            <p style={{
              fontFamily: T.sans,
              fontSize: '16px',
              color: 'rgba(255,255,255,0.8)',
              lineHeight: 1.6,
              maxWidth: '400px',
              fontWeight: 300,
            }}>
              Private wealth advisory for discerning investors. 
              Secure access to exclusive opportunities and portfolio insights.
            </p>
          </div>
          
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{
              fontFamily: T.sans,
              fontSize: '12px',
              color: 'rgba(255,255,255,0.5)',
              letterSpacing: '1px',
              textTransform: 'uppercase',
            }}>
              © 2026 Murivest. All rights reserved.
            </div>
          </div>
        </div>

        {/* Right Panel - Form */}
        <div style={{
          flex: '1',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: `${T.space.xl} ${T.space.md}`,
          position: 'relative',
        }}>
          <div style={{
            width: '100%',
            maxWidth: '420px',
            animation: 'fadeIn 0.6s ease-out',
          }}>
            <Logo />
            
            <div style={{
              background: T.white,
              border: `1px solid ${T.border}`,
              borderRadius: '4px',
              padding: `${T.space['2xl']} ${T.space.xl}`,
              boxShadow: '0 4px 24px rgba(0,0,0,0.04)',
            }}>
              {/* Tab Navigation */}
              <div style={{
                display: 'flex',
                marginBottom: T.space.xl,
                borderBottom: `1px solid ${T.border}`,
              }}>
                <Tab 
                  label="Sign In" 
                  active={mode === 'signin'} 
                  onClick={() => switchMode('signin')} 
                />
                <Tab 
                  label="Register" 
                  active={mode === 'register'} 
                  onClick={() => switchMode('register')} 
                />
                {mode === 'forgot' && (
                  <Tab 
                    label="Reset" 
                    active={mode === 'forgot'} 
                    onClick={() => {}} 
                  />
                )}
              </div>

              {/* Alert */}
              {alert && (
                <Alert 
                  type={alert.type} 
                  message={alert.message} 
                  onDismiss={() => setAlert(null)}
                />
              )}

              {/* Sign In Form */}
              {mode === 'signin' && (
                <form onSubmit={handleSignIn} style={{ animation: 'fadeIn 0.3s ease-out' }}>
                  <Field
                    label="Email Address"
                    type="email"
                    value={email}
                    onChange={setEmail}
                    placeholder="name@company.com"
                    autoComplete="email"
                    error={validationErrors.email}
                    icon={<span style={{ fontSize: '16px' }}>✉</span>}
                  />
                  
                  <div style={{ position: 'relative' }}>
                    <Field
                      label="Password"
                      type="password"
                      value={password}
                      onChange={setPassword}
                      placeholder="Enter your password"
                      autoComplete="current-password"
                      error={validationErrors.password}
                      icon={<span style={{ fontSize: '16px' }}>🔒</span>}
                    />
                    <button
                      type="button"
                      onClick={() => switchMode('forgot')}
                      style={{
                        position: 'absolute',
                        right: 0,
                        top: 0,
                        background: 'none',
                        border: 'none',
                        fontFamily: T.sans,
                        fontSize: '11px',
                        color: T.forest,
                        cursor: 'pointer',
                        letterSpacing: '0.5px',
                        padding: '0',
                      }}
                    >
                      Forgot?
                    </button>
                  </div>

                  <div style={{ marginTop: T.space.xl }}>
                    <Button label="Sign In" loading={loading} />
                  </div>

                  <Divider />

                  <div style={{
                    textAlign: 'center',
                    fontFamily: T.sans,
                    fontSize: '13px',
                    color: T.charcoalMuted,
                  }}>
                    Don't have an account?{' '}
                    <button
                      type="button"
                      onClick={() => switchMode('register')}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: T.forest,
                        fontWeight: 600,
                        cursor: 'pointer',
                        fontFamily: T.sans,
                        fontSize: '13px',
                        padding: 0,
                      }}
                    >
                      Request Access
                    </button>
                  </div>
                </form>
              )}

              {/* Register Form */}
              {mode === 'register' && (
                <form onSubmit={handleRegister} style={{ animation: 'fadeIn 0.3s ease-out' }}>
                  <Field
                    label="Full Name"
                    type="text"
                    value={fullName}
                    onChange={setFullName}
                    placeholder="Johnathan P. Harrington"
                    autoComplete="name"
                    error={validationErrors.fullName}
                    icon={<span style={{ fontSize: '16px' }}>👤</span>}
                  />
                  
                  <Field
                    label="Email Address"
                    type="email"
                    value={email}
                    onChange={setEmail}
                    placeholder="name@company.com"
                    autoComplete="email"
                    error={validationErrors.email}
                    icon={<span style={{ fontSize: '16px' }}>✉</span>}
                  />
                  
                  <Field
                    label="Password"
                    type="password"
                    value={password}
                    onChange={setPassword}
                    placeholder="Create a secure password"
                    autoComplete="new-password"
                    error={validationErrors.password}
                    icon={<span style={{ fontSize: '16px' }}>🔒</span>}
                  />
                  
                  <PasswordStrength password={password} />
                  
                  <div style={{ marginTop: T.space.lg }}>
                    <Field
                      label="Confirm Password"
                      type="password"
                      value={confirm}
                      onChange={setConfirm}
                      placeholder="Confirm your password"
                      autoComplete="new-password"
                      error={validationErrors.confirm}
                      icon={<span style={{ fontSize: '16px' }}>🔒</span>}
                    />
                  </div>

                  <div style={{
                    margin: `${T.space.lg} 0`,
                    padding: T.space.md,
                    background: T.cream,
                    borderRadius: '2px',
                    fontFamily: T.sans,
                    fontSize: '12px',
                    color: T.charcoalMuted,
                    lineHeight: 1.5,
                  }}>
                    <span style={{ color: T.brass, fontWeight: 600 }}>Note:</span> Access is subject to administrator approval. 
                    By registering, you agree to our Terms of Service and Privacy Policy.
                  </div>

                  <Button label="Request Access" loading={loading} />

                  <div style={{
                    textAlign: 'center',
                    marginTop: T.space.lg,
                    fontFamily: T.sans,
                    fontSize: '13px',
                    color: T.charcoalMuted,
                  }}>
                    Already have access?{' '}
                    <button
                      type="button"
                      onClick={() => switchMode('signin')}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: T.forest,
                        fontWeight: 600,
                        cursor: 'pointer',
                        fontFamily: T.sans,
                        fontSize: '13px',
                        padding: 0,
                      }}
                    >
                      Sign In
                    </button>
                  </div>
                </form>
              )}

              {/* Forgot Password Form */}
              {mode === 'forgot' && (
                <form onSubmit={handleForgot} style={{ animation: 'fadeIn 0.3s ease-out' }}>
                  <div style={{
                    marginBottom: T.space.lg,
                    padding: T.space.md,
                    background: T.cream,
                    borderRadius: '2px',
                    fontFamily: T.sans,
                    fontSize: '14px',
                    color: T.charcoalMuted,
                    lineHeight: 1.6,
                  }}>
                    Enter your registered email address and we'll send you a secure link to reset your password.
                  </div>

                  <Field
                    label="Email Address"
                    type="email"
                    value={email}
                    onChange={setEmail}
                    placeholder="name@company.com"
                    autoComplete="email"
                    error={validationErrors.email}
                    icon={<span style={{ fontSize: '16px' }}>✉</span>}
                  />

                  <div style={{ marginTop: T.space.xl }}>
                    <Button label="Send Reset Link" loading={loading} />
                  </div>

                  <div style={{
                    textAlign: 'center',
                    marginTop: T.space.lg,
                  }}>
                    <button
                      type="button"
                      onClick={() => switchMode('signin')}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: T.warmGray,
                        fontSize: '13px',
                        cursor: 'pointer',
                        fontFamily: T.sans,
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: T.space.xs,
                      }}
                    >
                      <span>←</span> Back to Sign In
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Footer */}
            <div style={{
              marginTop: T.space.xl,
              textAlign: 'center',
              fontFamily: T.sans,
              fontSize: '11px',
              color: T.warmGray,
              letterSpacing: '0.5px',
            }}>
              <span style={{ marginRight: T.space.md }}>Secure Connection</span>
              <span>•</span>
              <span style={{ marginLeft: T.space.md }}>SSL Encrypted</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
