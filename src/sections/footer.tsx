import { Github, Linkedin, Twitter, ArrowUp } from 'lucide-react';

const socials = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
];

export function Footer() {
  return (
    <footer className='border-t border-border'>
      <div className='mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 sm:flex-row sm:px-6'>
        <div className='flex flex-col items-center gap-1 sm:items-start'>
          <span className='text-sm font-semibold tracking-tight'>Axon</span>
          <span className='text-xs text-muted-foreground'>
            © {new Date().getFullYear()} · Designed &amp; built with care.
          </span>
        </div>

        <div className='flex items-center gap-3'>
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className='grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground transition-all hover:-translate-y-0.5 hover:text-foreground'
            >
              <s.icon className='h-4 w-4' />
            </a>
          ))}
          <a
            href='#top'
            aria-label='Back to top'
            className='grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground transition-all hover:-translate-y-0.5 hover:text-foreground'
          >
            <ArrowUp className='h-4 w-4' />
          </a>
        </div>
      </div>
    </footer>
  );
}
