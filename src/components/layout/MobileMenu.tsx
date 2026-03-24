import Link from 'next/link';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const mobileLinks = [
  { href: '/properties', label: 'Properties' },
  { href: '/land', label: 'Land' },
  { href: '/research', label: 'Research' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/portal', label: 'Investor Portal', highlight: true },
];

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden absolute top-20 left-0 right-0 bg-[#FAF9F6] border-b border-[#E8E6E1] shadow-lg">
      <nav className="px-4 py-6 space-y-4">
        {mobileLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            className={`block py-2 text-lg ${
              link.highlight 
                ? 'text-[#1B4332] font-medium' 
                : 'text-[#2C2C2C]'
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}