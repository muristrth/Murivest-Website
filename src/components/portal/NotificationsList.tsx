'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Bell, Check, ChevronRight } from 'lucide-react'

interface Notification {
  id: string
  type: string
  title: string
  message: string
  link?: string
  is_read: boolean
  created_at: string
}

export default function NotificationsList() {
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [loading, setLoading] = useState(true)
  const [markingAll, setMarkingAll] = useState(false)

  const fetchNotifications = async () => {
    try {
      const res = await fetch('/api/notifications')
      const data = await res.json()
      if (res.ok) setNotifications(data.notifications || [])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchNotifications()
  }, [])

  const markAllRead = async () => {
    setMarkingAll(true)
    try {
      await fetch('/api/notifications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ markAllRead: true }),
      })
      setNotifications((prev) => prev.map((n) => ({ ...n, is_read: true })))
    } finally {
      setMarkingAll(false)
    }
  }

  const unreadCount = notifications.filter((n) => !n.is_read).length

  if (loading) {
    return (
      <div className="bg-white border border-[#1B4332]/10 p-12 text-center">
        <p className="text-sm text-[#1B4332]/50 animate-pulse">Loading notifications...</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {unreadCount > 0 && (
        <div className="flex justify-end">
          <button
            onClick={markAllRead}
            disabled={markingAll}
            className="flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-[#B8956B] hover:text-[#1B4332] disabled:opacity-50"
          >
            <Check className="h-3.5 w-3.5" />
            Mark all as read
          </button>
        </div>
      )}

      {notifications.length === 0 ? (
        <div className="bg-white border border-[#1B4332]/10 p-12 text-center">
          <Bell className="h-10 w-10 text-[#1B4332]/20 mx-auto mb-4" />
          <p className="text-sm text-[#1B4332]/50">You have no notifications yet.</p>
        </div>
      ) : (
        <div className="bg-white border border-[#1B4332]/10 divide-y divide-[#1B4332]/5">
          {notifications.map((n) => (
            <div key={n.id} className={`p-5 flex items-start justify-between gap-4 ${!n.is_read ? 'bg-[#B8956B]/5' : ''}`}>
              <div className="flex items-start gap-3">
                {!n.is_read && <span className="w-2 h-2 bg-[#B8956B] rounded-full flex-shrink-0 mt-1.5" />}
                <div>
                  <p className="text-sm font-medium text-[#1B4332]">{n.title}</p>
                  <p className="text-xs text-[#1B4332]/60 mt-1">{n.message}</p>
                  <p className="text-[10px] text-[#1B4332]/40 mt-2">
                    {new Date(n.created_at).toLocaleString('en-GB', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
              {n.link && (
                <Link href={n.link} className="text-[10px] uppercase tracking-[0.15em] text-[#B8956B] hover:text-[#1B4332] flex items-center gap-1 whitespace-nowrap">
                  View <ChevronRight className="h-3 w-3" />
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
