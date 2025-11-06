"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function MurivestAIPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

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
    <div className="min-h-screen bg-[#0A0A0A] text-[#D4AF37] flex flex-col p-8 font-serif">
      <div className="max-w-4xl mx-auto flex-1 flex flex-col">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">Murivest Falcon</h1>
          <p className="text-lg text-gray-400 italic">
            "Where Capital Meets Clarity."
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Advanced AI-powered insights for commercial real estate intelligence
          </p>
        </div>

        <div className="flex-1 bg-[#111] border border-[#D4AF37]/30 rounded-xl p-6 mb-4 overflow-y-auto max-h-[60vh]">
          {messages.length === 0 ? (
            <div className="text-center text-gray-500">
              <p className="mb-4">Welcome to Murivest Falcon!</p>
              <p>Ask me about market trends, investment opportunities, portfolio analysis, or any real estate insights.</p>
            </div>
          ) : (
            messages.map((msg, index) => (
              <div key={index} className={`mb-4 ${msg.role === "user" ? "text-right" : "text-left"}`}>
                <div className={`inline-block max-w-[80%] p-3 rounded-lg ${
                  msg.role === "user"
                    ? "bg-[#D4AF37] text-[#0A0A0A] rounded-br-none"
                    : "bg-[#1a1a1a] text-[#D4AF37] rounded-bl-none border border-[#D4AF37]/20"
                }`}>
                  <p className="whitespace-pre-wrap">{msg.content}</p>
                </div>
              </div>
            ))
          )}
          {isLoading && (
            <div className="text-left mb-4">
              <div className="inline-block bg-[#1a1a1a] text-[#D4AF37] rounded-lg rounded-bl-none border border-[#D4AF37]/20 p-3">
                <div className="flex items-center space-x-2">
                  <div className="animate-pulse">Analyzing...</div>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-[#D4AF37] rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-[#D4AF37] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-[#D4AF37] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={handleSubmit} className="flex gap-3">
          <input
            className="flex-1 bg-transparent border border-[#D4AF37]/50 rounded-xl p-3 text-gray-200 focus:outline-none focus:border-[#D4AF37] transition-colors"
            placeholder="Ask about markets, investments, or real estate insights..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="bg-[#D4AF37] text-[#0A0A0A] px-6 py-3 rounded-xl font-semibold hover:bg-[#c9a030] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "Analyzing..." : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
}