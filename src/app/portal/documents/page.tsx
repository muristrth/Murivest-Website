import { createClient } from '@/lib/supabase/server'
import { FolderLock, FileText, Shield } from 'lucide-react'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

export default async function PortalDocumentsPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="bg-white border border-[#B8956B]/20 p-12 max-w-md text-center">
          <Shield className="h-12 w-12 text-[#B8956B] mx-auto mb-4" />
          <h1 className="font-serif text-3xl text-[#1B4332] mb-3">Authentication Required</h1>
          <Link href="/portal?mode=login" className="inline-block bg-[#1B4332] text-white px-8 py-3 text-xs uppercase tracking-[0.15em] hover:bg-[#2D5A47] transition-colors">
            Sign In to Portal
          </Link>
        </div>
      </div>
    )
  }

  const { data: access } = await supabase
    .from('document_access')
    .select('id, granted_at, viewed_at, document:document_id(id, title, description, file_url, file_type, created_at)')
    .eq('user_id', user.id)
    .order('granted_at', { ascending: false })

  return (
    <div className="space-y-10">
      <div className="pb-8 border-b border-[#1B4332]/10">
        <span className="text-[10px] uppercase tracking-[0.2em] text-[#B8956B]">Investor Portal</span>
        <h1 className="font-serif text-4xl lg:text-5xl text-[#1B4332] mt-2">Document Room</h1>
        <p className="text-sm text-[#2C3E35]/70 mt-2 max-w-2xl">
          Briefs, NDAs, and reports your advisor has shared directly with you.
        </p>
      </div>

      {!access || access.length === 0 ? (
        <div className="bg-white border border-[#1B4332]/10 p-12 text-center">
          <FolderLock className="h-10 w-10 text-[#1B4332]/20 mx-auto mb-4" />
          <p className="text-sm text-[#2C3E35]/60">
            No documents have been shared with you yet. Your advisor will grant access here as deals progress.
          </p>
        </div>
      ) : (
        <div className="bg-white border border-[#1B4332]/10 divide-y divide-[#1B4332]/5">
          {access.map((row: any) => (
            <div key={row.id} className="p-5 flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#B8956B]/10 flex items-center justify-center flex-shrink-0">
                  <FileText className="h-5 w-5 text-[#B8956B]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-[#1B4332]">{row.document?.title}</p>
                  {row.document?.description && (
                    <p className="text-xs text-[#1B4332]/50 mt-0.5">{row.document.description}</p>
                  )}
                  <p className="text-[10px] text-[#1B4332]/40 mt-1">
                    Shared {new Date(row.granted_at).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
                  </p>
                </div>
              </div>
              {row.document?.file_url && (
                <a
                  href={row.document.file_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] uppercase tracking-[0.15em] text-[#B8956B] hover:text-[#1B4332] whitespace-nowrap"
                >
                  View Document
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
