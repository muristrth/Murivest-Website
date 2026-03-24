'use client'

import { cn } from '@/lib/utils/cn'

interface RichTextProps {
  content: string
  className?: string
}

export function RichText({ content, className }: RichTextProps) {
  // Simple markdown-like rendering
  const renderContent = (text: string) => {
    // Split content into paragraphs
    const paragraphs = text.split('\n\n').filter(p => p.trim())
    
    return paragraphs.map((paragraph, index) => {
      // Check for headings
      if (paragraph.startsWith('### ')) {
        return (
          <h3 key={index} className="font-serif text-xl text-[#1B4332] mt-8 mb-4">
            {paragraph.replace('### ', '')}
          </h3>
        )
      }
      
      if (paragraph.startsWith('## ')) {
        return (
          <h2 key={index} className="font-serif text-2xl text-[#1B4332] mt-10 mb-4">
            {paragraph.replace('## ', '')}
          </h2>
        )
      }
      
      if (paragraph.startsWith('# ')) {
        return (
          <h1 key={index} className="font-serif text-3xl text-[#1B4332] mt-12 mb-6">
            {paragraph.replace('# ', '')}
          </h1>
        )
      }

      // Check for bullet lists
      if (paragraph.includes('\n- ') || paragraph.startsWith('- ')) {
        const items = paragraph.split('\n').filter(line => line.trim().startsWith('-'))
        return (
          <ul key={index} className="list-disc list-inside space-y-2 text-[#2C3E35]/80 mb-6">
            {items.map((item, i) => (
              <li key={i}>{item.replace('- ', '')}</li>
            ))}
          </ul>
        )
      }

      // Check for numbered lists
      if (paragraph.match(/^\d+\.\s/m)) {
        const items = paragraph.split('\n').filter(line => line.match(/^\d+\.\s/))
        return (
          <ol key={index} className="list-decimal list-inside space-y-2 text-[#2C3E35]/80 mb-6">
            {items.map((item, i) => (
              <li key={i}>{item.replace(/^\d+\.\s/, '')}</li>
            ))}
          </ol>
        )
      }

      // Handle inline formatting
      let processedParagraph = paragraph
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/`(.*?)`/g, '<code class="bg-[#1B4332]/10 px-1 py-0.5 rounded text-sm">$1</code>')
        .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-[#B8956B] hover:text-[#1B4332] underline">$1</a>')

      // Convert newlines within paragraph
      processedParagraph = processedParagraph.replace(/\n/g, '<br />')

      return (
        <p 
          key={index} 
          className="text-[#2C3E35]/80 leading-relaxed mb-6"
          dangerouslySetInnerHTML={{ __html: processedParagraph }}
        />
      )
    })
  }

  return (
    <div className={cn("rich-text-content", className)}>
      {renderContent(content)}
    </div>
  )
}

interface ContentBlockProps {
  children: React.ReactNode
  className?: string
}

export function ContentBlock({ children, className }: ContentBlockProps) {
  return (
    <div className={cn("prose prose-lg max-w-none", className)}>
      {children}
    </div>
  )
}

interface HtmlContentProps {
  html: string
  className?: string
}

export function HtmlContent({ html, className }: HtmlContentProps) {
  return (
    <div 
      className={cn(
        "prose prose-lg max-w-none",
        "[&_h1]:font-serif [&_h1]:text-3xl [&_h1]:text-[#1B4332] [&_h1]:mt-8 [&_h1]:mb-4",
        "[&_h2]:font-serif [&_h2]:text-2xl [&_h2]:text-[#1B4332] [&_h2]:mt-8 [&_h2]:mb-4",
        "[&_h3]:font-serif [&_h3]:text-xl [&_h3]:text-[#1B4332] [&_h3]:mt-6 [&_h3]:mb-3",
        "[&_p]:text-[#2C3E35]/80 [&_p]:leading-relaxed [&_p]:mb-4",
        "[&_ul]:list-disc [&_ul]:list-inside [&_ul]:space-y-2 [&_ul]:mb-6",
        "[&_ol]:list-decimal [&_ol]:list-inside [&_ol]:space-y-2 [&_ol]:mb-6",
        "[&_a]:text-[#B8956B] [&_a]:hover:text-[#1B4332] [&_a]:underline",
        "[&_blockquote]:border-l-4 [&_blockquote]:border-[#B8956B] [&_blockquote]:pl-4 [&_blockquote]:italic",
        "[&_code]:bg-[#1B4332]/10 [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm",
        className
      )}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}