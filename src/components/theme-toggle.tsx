import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from './theme-provider';
import { cn } from '@/lib/utils';

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggle } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={cn(
        'relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card/60 backdrop-blur transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
        className
      )}
    >
      <AnimatePresence mode='wait' initial={false}>
        {isDark ? (
          <motion.span
            key='moon'
            initial={{ y: -14, opacity: 0, rotate: -90 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: 14, opacity: 0, rotate: 90 }}
            transition={{ duration: 0.2 }}
            className='absolute'
          >
            <Moon className='h-4 w-4' />
          </motion.span>
        ) : (
          <motion.span
            key='sun'
            initial={{ y: -14, opacity: 0, rotate: 90 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: 14, opacity: 0, rotate: -90 }}
            transition={{ duration: 0.2 }}
            className='absolute'
          >
            <Sun className='h-4 w-4' />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
