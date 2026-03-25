'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { 
  Bell, 
  X, 
  Check, 
  Clock, 
  FileText, 
  BookOpen, 
  Briefcase, 
  CreditCard,
  Package,
  Lock,
  ChevronRight,
  ExternalLink
} from 'lucide-react'

type NotificationType = 
  | 'order_created'
  | 'order_fulfilled'
  | 'payment_received'
  | 'payment_confirmed'
  | 'payment_declined'
  | 'new_publication'
  | 'new_brief'
  | 'new_off_market'
  | 'profile_updated'
  | 'verification_complete'

interface Notification {
  id: string
  user_id: string
  type: NotificationType
  title: string
  message: string
  link?: string
  is_read: boolean
  created_at: string
}

const notificationIcons: Record<NotificationType, React.ReactNode> = {
  order_created: <Package className="h-4 w-4" />,
  order_fulfilled: <Check className="h-4 w-4" />,
  payment_received: <CreditCard className="h-4 w-4" />,
  payment_confirmed: <Check className="h-4 w-4" />,
  payment_declined: <X className="h-4 w-4" />,
  new_publication: <BookOpen className="h-4 w-4" />,
  new_brief: <FileText className="h-4 w-4" />,
  new_off_market: <Briefcase className="h-4 w-4" />,
  profile_updated: <Lock className="h-4 w-4" />,
  verification_complete: <Check className="h-4 w-4" />,
}

const notificationColors: Record<NotificationType, string> = {
  order_created: 'bg-[#B8956B]/10 text-[#B8956B]',
  order_fulfilled: 'bg-green-500/10 text-green-600',
  payment_received: 'bg-amber-500/10 text-amber-600',
  payment_confirmed: 'bg-green-500/10 text-green-600',
  payment_declined: 'bg-red-500/10 text-red-600',
  new_publication: 'bg-blue-500/10 text-blue-600',
  new_brief: 'bg-[#B8956B]/10 text-[#B8956B]',
  new_off_market: 'bg-purple-500/10 text-purple-600',
  profile_updated: 'bg-gray-500/10 text-gray-600',
  verification_complete: 'bg-green-500/10 text-green-600',
}

export default function NotificationBell() {
  const [isOpen, setIsOpen] = useState(false)
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [unreadCount, setUnreadCount] = useState(0)
  const [loading, setLoading] = useState(true)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Fetch notifications
  const fetchNotifications = async () => {
    try {
      const res = await fetch('/api/notifications')
      const data = await res.json()
      if (res.ok) {
        setNotifications(data.notifications || [])
        setUnreadCount(data.unreadCount || 0)
      }
    } catch (error) {
      console.error('Failed to fetch notifications:', error)
    } finally {
      setLoading(false)
    }
  }

  // Mark notifications as read
  const markAsRead = async (notificationIds?: string[]) => {
    try {
      await fetch('/api/notifications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          notificationIds, 
          markAllRead: !notificationIds 
        }),
      })
      
      // Update local state
      if (notificationIds) {
        setNotifications(prev => 
          prev.map(n => notificationIds.includes(n.id) ? { ...n, is_read: true } : n)
        )
        setUnreadCount(prev => Math.max(0, prev - notificationIds.length))
      } else {
        setNotifications(prev => prev.map(n => ({ ...n, is_read: true })))
        setUnreadCount(0)
      }
    } catch (error) {
      console.error('Failed to mark as read:', error)
    }
  }

  // Initial fetch and polling
  useEffect(() => {
    fetchNotifications()
    
    // Poll for new notifications every 30 seconds
    const interval = setInterval(fetchNotifications, 30000)
    return () => clearInterval(interval)
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleBellClick = () => {
    setIsOpen(!isOpen)
    if (!isOpen && unreadCount > 0) {
      markAsRead()
    }
  }

  const formatTime = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diff = now.getTime() - date.getTime()
    const minutes = Math.floor(diff / 60000)
    const hours = Math.floor(diff / 3600000)
    const days = Math.floor(diff / 86400000)

    if (minutes < 1) return 'Just now'
    if (minutes < 60) return `${minutes}m ago`
    if (hours < 24) return `${hours}h ago`
    if (days < 7) return `${days}d ago`
    return date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short' })
  }

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Bell Button - Desktop */}
      <button 
        onClick={handleBellClick}
        className="relative hidden lg:flex p-2 text-[#FAF9F6]/60 hover:text-[#B8956B] transition-colors"
      >
        <Bell className="h-4 w-4" />
        {unreadCount > 0 && (
          <span className="absolute top-1 right-1 w-4 h-4 bg-[#B8956B] text-[#1B4332] text-[9px] font-bold rounded-full flex items-center justify-center">
            {unreadCount > 9 ? '9+' : unreadCount}
          </span>
        )}
      </button>

      {/* Bell Button - Mobile */}
      <button 
        onClick={handleBellClick}
        className="relative lg:hidden p-2 text-[#B8956B]"
      >
        <Bell className="h-5 w-5" />
        {unreadCount > 0 && (
          <span className="absolute top-1 right-1 w-3 h-3 bg-[#B8956B] rounded-full" />
        )}
      </button>

      {/* Notification Dropdown */}
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-80 lg:w-96 bg-white border border-[#E5E2DC] rounded-xl shadow-2xl overflow-hidden z-[100]">
          {/* Header */}
          <div className="bg-[#1B4332] px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bell className="h-4 w-4 text-[#B8956B]" />
              <span className="text-sm font-medium text-white">Notifications</span>
              {unreadCount > 0 && (
                <span className="px-2 py-0.5 bg-[#B8956B] text-[#1B4332] text-[10px] font-bold rounded-full">
                  {unreadCount}
                </span>
              )}
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white/60 hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Notification List */}
          <div className="max-h-[400px] overflow-y-auto">
            {loading ? (
              <div className="p-8 text-center text-[#4A4A4A]">
                <div className="animate-pulse">Loading notifications...</div>
              </div>
            ) : notifications.length === 0 ? (
              <div className="p-8 text-center text-[#4A4A4A]">
                <Bell className="h-8 w-8 mx-auto mb-2 opacity-30" />
                <p className="text-sm">No notifications yet</p>
              </div>
            ) : (
              <div className="divide-y divide-[#E5E2DC]">
                {notifications.slice(0, 10).map((notification) => (
                  <div 
                    key={notification.id}
                    className={`p-3 hover:bg-[#F8F7F4] transition-colors ${
                      !notification.is_read ? 'bg-[#B8956B]/5' : ''
                    }`}
                  >
                    <div className="flex gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        notificationColors[notification.type] || 'bg-gray-100 text-gray-600'
                      }`}>
                        {notificationIcons[notification.type] || <Bell className="h-4 w-4" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <p className="text-sm font-medium text-[#2C2C2C] truncate">
                            {notification.title}
                          </p>
                          {!notification.is_read && (
                            <span className="w-2 h-2 bg-[#B8956B] rounded-full flex-shrink-0 mt-1.5" />
                          )}
                        </div>
                        <p className="text-xs text-[#4A4A4A] line-clamp-2 mt-0.5">
                          {notification.message}
                        </p>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-[10px] text-[#8B7355] flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {formatTime(notification.created_at)}
                          </span>
                          {notification.link && (
                            <Link 
                              href={notification.link}
                              onClick={() => setIsOpen(false)}
                              className="text-[10px] text-[#B8956B] hover:text-[#8B7355] flex items-center gap-1"
                            >
                              View <ChevronRight className="h-3 w-3" />
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {notifications.length > 0 && (
            <div className="bg-[#F8F7F4] px-4 py-3 border-t border-[#E5E2DC]">
              <Link 
                href="/investor-portal/notifications"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 text-xs text-[#B8956B] hover:text-[#8B7355] transition-colors"
              >
                View All Notifications <ExternalLink className="h-3 w-3" />
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
