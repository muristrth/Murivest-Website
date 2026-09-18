import { cn } from '@/lib/utils/cn';

interface SectionShellProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'cream' | 'charcoal';
}

export function SectionShell({ 
  children, 
  className, 
  id,
  background = 'cream' 
}: SectionShellProps) {
  const bgClasses = {
    white: 'bg-white',
    cream: 'bg-[#F8F7F4]',
    charcoal: 'bg-[#2C2C2C] text-white',
  };

  return (
    <section 
      id={id}
      className={cn(
        'py-20 md:py-32',
        bgClasses[background],
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
