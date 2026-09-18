'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Lock, Eye, EyeOff } from 'lucide-react';
import ScrollReveal from '../../(components)/shared/ScrollReveal';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [mode, setMode] = useState<'login' | 'magic'>('login');

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#F8F7F4]">
      <div className="w-full max-w-md px-6">
        <ScrollReveal>
          <div className="text-center mb-10">
            <div className="w-16 h-16 border border-[#8B7355]/30 flex items-center justify-center mx-auto mb-6">
              <Lock className="w-6 h-6 text-[#8B7355]" strokeWidth={1.5} />
            </div>
            <h1 className="font-serif text-2xl text-[#2C2C2C] mb-2">Investor Portal</h1>
            <p className="text-[12px] text-[#5A5A5A] font-light">
              {mode === 'login' ? 'Sign in with your credentials' : 'Request a magic link to sign in'}
            </p>
          </div>

          <div className="bg-white border border-[#E5E2DC] p-8">
            {mode === 'login' ? (
              <form className="space-y-5">
                <div>
                  <label className="block text-[10px] tracking-[0.2em] uppercase text-[#5A5A5A] mb-2">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-transparent border-b border-[#E5E2DC] text-[14px] text-[#2C2C2C] py-3 outline-none focus:border-[#8B7355] transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div className="relative">
                  <label className="block text-[10px] tracking-[0.2em] uppercase text-[#5A5A5A] mb-2">Password</label>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-transparent border-b border-[#E5E2DC] text-[14px] text-[#2C2C2C] py-3 outline-none focus:border-[#8B7355] transition-colors pr-10"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-0 top-8 text-[#5A5A5A] hover:text-[#5A5A5A]"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" strokeWidth={1.5} /> : <Eye className="w-4 h-4" strokeWidth={1.5} />}
                  </button>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#2C2C2C] text-white py-3.5 text-[11px] tracking-[0.2em] uppercase font-medium hover:bg-[#2D5A45] transition-colors"
                >
                  Sign In
                </button>
              </form>
            ) : (
              <form className="space-y-5">
                <div>
                  <label className="block text-[10px] tracking-[0.2em] uppercase text-[#5A5A5A] mb-2">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-transparent border-b border-[#E5E2DC] text-[14px] text-[#2C2C2C] py-3 outline-none focus:border-[#8B7355] transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#2C2C2C] text-white py-3.5 text-[11px] tracking-[0.2em] uppercase font-medium hover:bg-[#2D5A45] transition-colors"
                >
                  Send Magic Link
                </button>
              </form>
            )}

            <div className="mt-6 pt-6 border-t border-[#E5E2DC] text-center">
              <button
                onClick={() => setMode(mode === 'login' ? 'magic' : 'login')}
                className="text-[11px] tracking-wider text-[#8B7355] hover:text-[#2C2C2C] transition-colors"
              >
                {mode === 'login' ? 'Use Magic Link Instead' : 'Use Password Instead'}
              </button>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-[11px] text-[#5A5A5A]">
              Don&apos;t have access?{' '}
              <Link href="/singapore/contact" className="text-[#8B7355] hover:text-[#2C2C2C] transition-colors">
                Request Portal Access
              </Link>
            </p>
          </div>

          <div className="mt-4 text-center">
            <Link href="/singapore" className="text-[10px] tracking-wider text-[#5A5A5A] hover:text-[#2C2C2C] transition-colors">
              ← Back to Singapore
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </main>
  );
}
