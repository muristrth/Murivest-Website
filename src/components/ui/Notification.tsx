import React, { useEffect } from 'react';
import { CheckCircle, XCircle, X } from 'lucide-react';

interface NotificationProps {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
}

export const Notification = ({ message, type, onClose }: NotificationProps) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 8000); // Extended to 8 seconds for better UX
    return () => clearTimeout(timer);
  }, [onClose]);

  const styles = {
    success: "bg-emerald-950/90 border-emerald-700/50 text-emerald-100",
    error: "bg-red-950/90 border-red-700/50 text-red-100"
  };

  const icons = {
    success: <CheckCircle className="w-6 h-6 text-emerald-400" />,
    error: <XCircle className="w-6 h-6 text-red-400" />
  };

  const progressBar = {
    success: "bg-emerald-400",
    error: "bg-red-400"
  };

  return (
    <div className={`fixed bottom-5 right-5 z-50 min-w-[320px] max-w-md border rounded-xl shadow-2xl backdrop-blur-sm animate-in slide-in-from-right-full ${styles[type]}`}>
      {/* Progress Bar Timer */}
      <div className={`absolute top-0 left-0 h-1 ${progressBar[type]} rounded-t-xl animate-pulse`} 
           style={{ animation: 'shrink 8s linear forwards' }}></div>
      
      <div className="flex items-start p-5 gap-4">
        <div className="flex-shrink-0">
          {icons[type]}
        </div>
        <div className="flex-1 text-sm font-medium pr-2">
          {message}
        </div>
        <button 
          onClick={onClose}
          className="text-slate-400 hover:text-slate-200 focus:outline-none transition-colors flex-shrink-0"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
      
      <style jsx>{`
        @keyframes shrink {
          from { width: 100%; }
          to { width: 0%; }
        }
      `}</style>
    </div>
  );
};