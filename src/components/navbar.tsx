import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className='fixed inset-x-0 top-0 z-50'
    >
      <div className='mx-auto max-w-6xl px-4 pt-4 sm:px-6'>
        <nav
          className={cn(
            'flex items-center justify-between rounded-full border px-4 py-2.5 transition-all duration-300',
            scrolled
              ? 'border-border bg-background/70 backdrop-blur-xl shadow-sm'
              : 'border-transparent bg-transparent'
          )}
        >
          <a href='#top' className='flex items-center gap-2 pl-1'>
            <div className='grid h-7 w-7 place-items-center rounded-lg bg-foreground text-background'>
              <span className='text-xs font-bold'>A</span>
            </div>
            <span className='text-sm font-semibold tracking-tight'>Axon</span>
          </a>

          <div className='hidden items-center gap-1 md:flex'>
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className='rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground'
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className='flex items-center gap-2'>
            <ThemeToggle />
            <Button asChild size='sm' className='hidden md:inline-flex'>
              <a href='#contact'>
                Let&rsquo;s talk <ArrowUpRight className='h-3.5 w-3.5' />
              </a>
            </Button>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label='Toggle menu'
              className='grid h-9 w-9 place-items-center rounded-full border border-border bg-card/60 backdrop-blur md:hidden'
            >
              {open ? <X className='h-4 w-4' /> : <Menu className='h-4 w-4' />}
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 top-0 z-40 bg-background/95 backdrop-blur-xl md:hidden'
          >
            <div className='flex flex-col gap-2 px-6 pt-28'>
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i }}
                  className='border-b border-border py-4 text-2xl font-medium tracking-tight'
                >
                  {l.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
