import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export function Section({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={cn('relative mx-auto w-full max-w-6xl px-5 py-20 sm:px-6 sm:py-28', className)}>
      {children}
    </section>
  );
}

export function SectionHeader({
  index,
  title,
  subtitle,
  align = 'left',
}: {
  index?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn('mb-12 max-w-2xl', align === 'center' && 'mx-auto text-center')}
    >
      {index && (
        <div className='mb-3 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground'>
          <span className='h-px w-6 bg-border' />
          {index}
        </div>
      )}
      <h2 className='text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl text-balance'>
        {title}
      </h2>
      {subtitle && <p className='mt-4 text-base text-muted-foreground text-balance'>{subtitle}</p>}
    </motion.div>
  );
}
