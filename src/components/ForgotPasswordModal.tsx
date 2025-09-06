'use client';

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail } from "lucide-react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from ".././firebase/config";

interface ForgotPasswordProps {
  isOpen: boolean;
  onClose: () => void;
}

const ForgotPasswordModal: React.FC<ForgotPasswordProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setMessage("");
    setLoading(true);

    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Password reset email sent. Check your inbox.");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <motion.div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 p-6"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
            >
              <X className="h-6 w-6" />
            </button>

            <h2 className="text-xl font-luxury font-bold text-navy-950 mb-4">
              Reset Password
            </h2>
            <p className="text-gray-600 text-sm mb-6">
              Enter your registered email and we’ll send you a secure reset link.
            </p>

            {error && (
              <div className="bg-red-50 text-red-700 border border-red-200 p-3 rounded mb-4">
                {error}
              </div>
            )}
            {message && (
              <div className="bg-green-50 text-green-700 border border-green-200 p-3 rounded mb-4">
                {message}
              </div>
            )}

            <form onSubmit={handleReset} className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gold-600 hover:bg-gold-700 disabled:bg-gray-400 text-white py-3 rounded-lg font-semibold text-lg transition-all"
              >
                {loading ? "Sending..." : "Send Reset Link"}
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ForgotPasswordModal;
