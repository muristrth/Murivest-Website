'use client'

import { useState } from 'react'
import { Send, Bot, TrendingUp, Building, Globe, Shield } from 'lucide-react'

interface Message {
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

export default function AIIntelligencePage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Hello! I\'m Murivest Falcon, your AI-powered real estate intelligence platform. I have access to billions of global data points and can provide strategic insights on commercial real estate investments. How can I help you today?',
      timestamp: new Date()
    }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const sendMessage = async () => {
    if (!input.trim()) return

    const userMessage: Message = {
      role: 'user',
      content: input,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/ai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, userMessage].map(msg => ({
            role: msg.role,
            content: msg.content
          }))
        }),
      })

      const data = await response.json()

      const assistantMessage: Message = {
        role: 'assistant',
        content: data.reply,
        timestamp: new Date()
      }

      setMessages(prev => [...prev, assistantMessage])
    } catch (error) {
      console.error('Error:', error)
      const errorMessage: Message = {
        role: 'assistant',
        content: 'I apologize, but I\'m experiencing technical difficulties. Please try again or contact our team directly.',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  const quickPrompts = [
    "What are the current yield trends in Nairobi's CBD?",
    "Compare African vs European real estate returns",
    "Risk assessment for industrial investments in Kenya",
    "Market outlook for East African commercial real estate",
    "Portfolio diversification strategies for institutional investors"
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="luxury-navy-bg text-white luxury-section-spacing">
        <div className="luxury-container luxury-padding">
          <div className="max-w-4xl">
            <div className="flex items-center mb-6">
              <Bot className="h-8 w-8 luxury-gold-accent mr-3" />
              <span className="luxury-gold-accent font-luxury text-lg">AI-Powered Intelligence</span>
            </div>

            <h1 className="luxury-heading text-4xl md:text-6xl mb-6">
              Murivest Falcon
              <span className="block luxury-gold-accent font-medium">Real Estate Intelligence</span>
            </h1>
            <p className="luxury-body text-xl text-white/80 mb-8 leading-relaxed">
              Access billions of global data points, advanced analytics, and institutional-grade insights. Get strategic answers to complex real estate questions with speed and certainty.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center">
                <TrendingUp className="h-6 w-6 luxury-gold-accent mr-3" />
                <span className="luxury-body text-white/80">Market Intelligence</span>
              </div>
              <div className="flex items-center">
                <Building className="h-6 w-6 luxury-gold-accent mr-3" />
                <span className="luxury-body text-white/80">Portfolio Analysis</span>
              </div>
              <div className="flex items-center">
                <Shield className="h-6 w-6 luxury-gold-accent mr-3" />
                <span className="luxury-body text-white/80">Risk Assessment</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Chat Interface */}
      <section className="luxury-section-spacing bg-gray-50">
        <div className="luxury-container luxury-padding">
          <div className="max-w-4xl mx-auto">
            <div className="luxury-card mb-6">
              <div className="h-96 overflow-y-auto p-6 space-y-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                        message.role === 'user'
                          ? 'luxury-navy-bg text-white'
                          : 'bg-white border border-navy-200 text-navy-900'
                      }`}
                    >
                      <p className="luxury-body text-sm">{message.content}</p>
                      <p className="text-xs opacity-60 mt-1">
                        {message.timestamp.toLocaleTimeString()}
                      </p>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-white border border-navy-200 rounded-lg px-4 py-2">
                      <div className="flex items-center space-x-2">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-navy-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-navy-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-navy-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                        <span className="luxury-body text-sm text-navy-600">Analyzing...</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="border-t border-gold-400/20 p-4">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask about market trends, investment analysis, or portfolio strategy..."
                    className="flex-1 luxury-input"
                    disabled={isLoading}
                  />
                  <button
                    onClick={sendMessage}
                    disabled={isLoading || !input.trim()}
                    className="luxury-button-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Prompts */}
            <div>
              <h3 className="luxury-heading text-xl mb-4">Quick Analysis</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {quickPrompts.map((prompt, index) => (
                  <button
                    key={index}
                    onClick={() => setInput(prompt)}
                    className="text-left luxury-card hover:bg-navy-50 transition-colors"
                    disabled={isLoading}
                  >
                    <p className="luxury-body text-sm">{prompt}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="luxury-section-spacing luxury-navy-bg text-white">
        <div className="luxury-container luxury-padding">
          <div className="text-center luxury-margin-bottom">
            <h2 className="luxury-heading text-3xl mb-6">Advanced Capabilities</h2>
            <p className="luxury-body text-xl text-white/80 max-w-3xl mx-auto">
              Powered by institutional-grade analytics and global market data
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Globe className="h-12 w-12 luxury-gold-accent mx-auto mb-4" />
              <h3 className="luxury-heading text-lg mb-2">Global Coverage</h3>
              <p className="luxury-body text-white/80 text-sm">
                Real-time data from 50+ markets worldwide
              </p>
            </div>
            <div className="text-center">
              <TrendingUp className="h-12 w-12 luxury-gold-accent mx-auto mb-4" />
              <h3 className="luxury-heading text-lg mb-2">Predictive Analytics</h3>
              <p className="luxury-body text-white/80 text-sm">
                AI-driven market forecasting and trend analysis
              </p>
            </div>
            <div className="text-center">
              <Building className="h-12 w-12 luxury-gold-accent mx-auto mb-4" />
              <h3 className="luxury-heading text-lg mb-2">Portfolio Optimization</h3>
              <p className="luxury-body text-white/80 text-sm">
                Strategic asset allocation and risk management
              </p>
            </div>
            <div className="text-center">
              <Shield className="h-12 w-12 luxury-gold-accent mx-auto mb-4" />
              <h3 className="luxury-heading text-lg mb-2">Compliance & Security</h3>
              <p className="luxury-body text-white/80 text-sm">
                Enterprise-grade security and regulatory compliance
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}