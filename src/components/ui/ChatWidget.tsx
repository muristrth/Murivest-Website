"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const widgetRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Close widget when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (widgetRef.current && !widgetRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  async function handleSubmit(e: any) {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMessage].map(msg => ({
            role: msg.role,
            content: msg.content
          }))
        }),
      });
      const data = await res.json();
      const assistantMessage: Message = { role: "assistant", content: data.reply };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error:", error);
      const errorMessage: Message = {
        role: "assistant",
        content: "I apologize, but I'm experiencing technical difficulties. Please try again later."
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div ref={widgetRef} className="fixed bottom-6 left-6 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#D4AF37] text-[#0A0A0A] rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:bg-[#c9a030] transition-all duration-300 hover:scale-110"
          aria-label="Open chat"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3.05 1.05 4.42L2 22l5.58-1.05C8.95 21.64 10.46 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm-1 15l-4-4 1.41-1.41L11 14.17l6.59-6.59L19 9l-8 8z"/>
          </svg>
        </button>
      )}

      {isOpen && (
        <div className="bg-[#0A0A0A] border border-[#D4AF37]/30 rounded-xl shadow-2xl w-80 h-96 flex flex-col">
          {/* Header */}
          <div className="bg-[#D4AF37] text-[#0A0A0A] p-4 rounded-t-xl flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-sm">Murivest Falcon</h3>
              <p className="text-xs opacity-90">AI-Powered Real Estate Intelligence</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[#0A0A0A] hover:bg-[#0A0A0A]/20 rounded-full p-1 transition-colors"
              aria-label="Close chat"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto bg-[#111]">
            {messages.length === 0 ? (
              <div className="text-center text-gray-500 text-sm">
                <p className="mb-2">👋 Hi! I'm Murivest Falcon</p>
                <p>Ask me about real estate insights, market trends, or investment opportunities.</p>
              </div>
            ) : (
              messages.map((msg, index) => (
                <div key={index} className={`mb-3 ${msg.role === "user" ? "text-right" : "text-left"}`}>
                  <div className={`inline-block max-w-[85%] p-2 rounded-lg text-xs ${
                    msg.role === "user"
                      ? "bg-[#D4AF37] text-[#0A0A0A] rounded-br-sm"
                      : "bg-[#1a1a1a] text-[#D4AF37] rounded-bl-sm border border-[#D4AF37]/20"
                  }`}>
                    <p className="whitespace-pre-wrap">{msg.content}</p>
                  </div>
                </div>
              ))
            )}
            {isLoading && (
              <div className="text-left mb-3">
                <div className="inline-block bg-[#1a1a1a] text-[#D4AF37] rounded-lg rounded-bl-sm border border-[#D4AF37]/20 p-2">
                  <div className="flex items-center space-x-1">
                    <div className="animate-pulse text-xs">Analyzing...</div>
                    <div className="flex space-x-1">
                      <div className="w-1 h-1 bg-[#D4AF37] rounded-full animate-bounce"></div>
                      <div className="w-1 h-1 bg-[#D4AF37] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-1 h-1 bg-[#D4AF37] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-4 border-t border-[#D4AF37]/20">
            <div className="flex gap-2">
              <input
                className="flex-1 bg-transparent border border-[#D4AF37]/50 rounded-lg px-3 py-2 text-gray-200 text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
                placeholder="Ask me anything..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="bg-[#D4AF37] text-[#0A0A0A] px-3 py-2 rounded-lg font-medium hover:bg-[#c9a030] transition-all disabled:opacity-50 disabled:cursor-not-allowed text-sm"
              >
                {isLoading ? "..." : "Send"}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}