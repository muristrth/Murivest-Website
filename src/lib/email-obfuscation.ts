// Email obfuscation utility to prevent spam harvesting
export function obfuscateEmail(email: string): string {
  const [local, domain] = email.split('@')
  const obfuscatedLocal = local.replace(/(.{2})(.*)(.{1})/, '$1***$3')
  return `${obfuscatedLocal}@${domain}`
}

export function createMailtoLink(email: string, subject?: string): string {
  const mailto = subject ? `mailto:${email}?subject=${encodeURIComponent(subject)}` : `mailto:${email}`
  return mailto
}

// Component for displaying obfuscated email
export function ObfuscatedEmail({ email, subject, className = '' }: {
  email: string
  subject?: string
  className?: string
}) {
  const displayEmail = obfuscateEmail(email)
  const mailtoLink = createMailtoLink(email, subject)

  return (
    <a
      href={mailtoLink}
      className={className}
      onClick={(e) => {
        // Optional: Add analytics tracking here
        e.currentTarget.href = mailtoLink
      }}
    >
      {displayEmail}
    </a>
  )
}