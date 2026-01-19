import React, { useEffect } from 'react';
import { CheckCircle, XCircle, X } from 'lucide-react';

interface NotificationProps {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
}

export const Notification = ({ message, type, onClose }: NotificationProps) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 6000); // Auto-close after 6 seconds
    return () => clearTimeout(timer);
  }, [onClose]);

  const styles = {
    success: "bg-emerald-50 border-emerald-200 text-emerald-800",
    error: "bg-rose-50 border-rose-200 text-rose-800"
  };

  const icons = {
    success: <CheckCircle className="w-5 h-5 text-emerald-500" />,
    error: <XCircle className="w-5 h-5 text-rose-500" />
  };

  return (
    <div className={`fixed bottom-5 right-5 z-50 flex items-center p-4 min-w-[320px] max-w-md border rounded-lg shadow-lg transition-all animate-in slide-in-from-right-full ${styles[type]}`}>
      <div className="flex-shrink-0 mr-3">
        {icons[type]}
      </div>
      <div className="flex-1 text-sm font-medium">
        {message}
      </div>
      <button 
        onClick={onClose}
        className="ml-4 text-slate-400 hover:text-slate-600 focus:outline-none"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};