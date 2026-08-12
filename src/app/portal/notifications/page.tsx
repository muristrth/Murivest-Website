import NotificationsList from '@/components/portal/NotificationsList'

export default function PortalNotificationsPage() {
  return (
    <div className="space-y-10">
      <div className="pb-8 border-b border-[#1B4332]/10">
        <span className="text-[10px] uppercase tracking-[0.2em] text-[#B8956B]">Investor Portal</span>
        <h1 className="font-serif text-4xl lg:text-5xl text-[#1B4332] mt-2">Notifications</h1>
        <p className="text-sm text-[#2C3E35]/70 mt-2 max-w-2xl">
          Updates on your orders, verification status, off-market deals, and new publications.
        </p>
      </div>

      <NotificationsList />
    </div>
  )
}
