const fs = require('fs');
const content = `'use client'

import { useState, useMemo } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { Shield, Eye, EyeOff, ArrowRight, AlertCircle } from 'lucide-react'

export default function AdminLoginPage() {
  const router = useRouter()
  const supabase = useMemo(() => createClient(), [])

  const [form, setForm] = useState({
    email: '',
    password: '',
  })
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const { data, error: signInError } = await supabase.auth.signInWithPassword({
        email: form.email,
        password: form.password,
      })

      if (signInError) {
        setError(signInError.message)
        return
      }

      if (data.user) {
        router.push('/admin')
        router.refresh()
      }
    } catch (err) {
      setError('An unexpected error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1B4332] p-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shield className="h-12 w-12 text-[#B8956B]" />
            <div>
              <h1 className="font-serif text-3xl text-white">Murivest</h1>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#B8956B]/80">Admin Console</p>
            </div>
          </div>
        </div>

        <div className="bg-[#FAF9F6] rounded-lg shadow-2xl overflow-hidden">
          <div className="p-8 md:p-10">
            <h2 className="text-xl font-serif text-[#1B4332] mb-2">Administrator Access</h2>
            <p className="text-sm text-[#1B4332]/60 mb-6">Sign in to access the admin console</p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-[10px] uppercase tracking-[0.15em] text-[#1B4332]/60 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full bg-white border border-[#1B4332]/20 text-[#1B4332] px-4 py-3 text-sm focus:border-[#B8956B] focus:outline-none transition-colors"
                   placeholder="admin@murivest.co.ke"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-[0.15em] text-[#1B4332]/60 mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    className="w-full bg-white border border-[#1B4332]/20 text-[#1B4332] px-4 py-3 pr-12 text-sm focus:border-[#B8956B] focus:outline-none transition-colors"
                    placeholder="••••••••••••"
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#1B4332]/40 hover:text-[#B8956B] transition-colors"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {error && (
                <div className="flex items-center gap-2 bg-red-50 border-l-4 border-red-500 p-4 text-red-700 text-sm">
                  <AlertCircle className="h-4 w-4 flex-shrink-0" />
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#1B4332] text-[#FAF9F6] py-4 text-sm uppercase tracking-[0.15em] font-medium hover:bg-[#2D5A47] transition-all duration-300 flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span>Signing in...</span>
                ) : (
                  <>
                    Access Console
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="px-8 py-4 bg-[#1B4332]/5 border-t border-[#1B4332]/10">
            <p className="text-xs text-center text-[#1B4332]/50">
              Restricted access. Unauthorized access is prohibited.
            </p>
          </div>
        </div>

        <div className="text-center mt-6">
          <a href="/" className="text-sm text-[#B8956B]/70 hover:text-[#B8956B] transition-colors">
            ← Return to Murivest
          </a>
        </div>
      </div>
    </div>
  )
}
`;
fs.writeFileSync('src/app/admin/login/page.tsx', content);
console.log('File written successfully');