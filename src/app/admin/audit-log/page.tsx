import { createAdminClient } from '@/lib/supabase/admin'
import { History } from 'lucide-react'

export const dynamic = 'force-dynamic'

export default async function AuditLogPage() {
  const supabase = createAdminClient()

  const { data: logs, error } = await supabase
    .from('audit_log')
    .select('*, actor:actor_id(full_name, email)')
    .order('created_at', { ascending: false })
    .limit(200)

  return (
    <div className="space-y-8">
      <div>
        <p className="text-[10px] tracking-[0.28em] uppercase text-[#B8956B] mb-2">Compliance</p>
        <h1 className="font-serif text-4xl text-[#1B4332]">Audit Log</h1>
        <p className="text-sm text-[#2C3E35]/70 mt-2">
          Append-only record of privileged actions across the platform (advisor assignments, mandate changes,
          payment approvals, and more).
        </p>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 p-4 text-sm text-red-700">
          Could not load audit log: {error.message}
        </div>
      )}

      {!error && (!logs || logs.length === 0) && (
        <div className="bg-white border border-[#1B4332]/10 p-12 text-center">
          <History className="h-10 w-10 text-[#1B4332]/20 mx-auto mb-4" />
          <p className="text-sm text-[#2C3E35]/60">No audit events recorded yet.</p>
        </div>
      )}

      {logs && logs.length > 0 && (
        <div className="bg-white border border-[#1B4332]/10 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#1B4332]/10 bg-[#FAF9F6]">
                <th className="text-left py-3 px-4 text-[10px] uppercase tracking-[0.15em] text-[#1B4332]/50 font-medium">Action</th>
                <th className="text-left py-3 px-4 text-[10px] uppercase tracking-[0.15em] text-[#1B4332]/50 font-medium">Entity</th>
                <th className="text-left py-3 px-4 text-[10px] uppercase tracking-[0.15em] text-[#1B4332]/50 font-medium">Actor</th>
                <th className="text-left py-3 px-4 text-[10px] uppercase tracking-[0.15em] text-[#1B4332]/50 font-medium">Details</th>
                <th className="text-left py-3 px-4 text-[10px] uppercase tracking-[0.15em] text-[#1B4332]/50 font-medium">Timestamp</th>
              </tr>
            </thead>
            <tbody>
              {logs.map((log: any) => (
                <tr key={log.id} className="border-b border-[#1B4332]/5 hover:bg-[#FAF9F6] transition-colors">
                  <td className="py-3 px-4">
                    <span className="inline-flex text-[10px] uppercase tracking-wider px-2 py-1 bg-[#1B4332]/5 text-[#1B4332]">
                      {log.action.replace(/[._]/g, ' ')}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-sm text-[#2C3E35]/80">{log.entity_type}</td>
                  <td className="py-3 px-4 text-sm text-[#2C3E35]/80">
                    {log.actor?.full_name || log.actor?.email || 'System'}
                  </td>
                  <td className="py-3 px-4 text-xs text-[#2C3E35]/60 max-w-xs truncate">
                    {JSON.stringify(log.metadata)}
                  </td>
                  <td className="py-3 px-4 text-sm text-[#2C3E35]/80">
                    {new Date(log.created_at).toLocaleString('en-GB', {
                      day: '2-digit',
                      month: 'short',
                      year: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
