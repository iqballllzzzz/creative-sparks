import { motion } from 'framer-motion';
import { Section, SectionHeader } from '@/components/section';
import { Separator } from '@/components/ui/separator';

const stats = [
  { value: '6+', label: 'Years building' },
  { value: '40+', label: 'Products shipped' },
  { value: '12', label: 'Countries reached' },
  { value: '∞', label: 'Curiosity' },
];

export function About() {
  return (
    <Section id='about' className='border-t border-border'>
      <SectionHeader index='01 — About' title='Engineer by craft, designer by instinct.' />

      <div className='grid grid-cols-1 gap-12 lg:grid-cols-2'>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className='space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg'
        >
          <p>
            I build software that sits at the intersection of engineering rigor and design sensibility.
            My work spans web applications, design systems, and developer tooling — always with an
            obsession for performance, accessibility, and the tiny interactions that make an interface feel alive.
          </p>
          <p>
            I care about code that reads like prose, systems that scale without drama, and interfaces that
            get out of the way. When I&rsquo;m not shipping, I&rsquo;m studying typography, motion design, and
            the craft behind great products.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className='grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border'>
            {stats.map((s) => (
              <div key={s.label} className='bg-card p-6 transition-colors hover:bg-accent/40'>
                <div className='text-3xl font-semibold tracking-tight sm:text-4xl'>{s.value}</div>
                <div className='mt-1.5 text-sm text-muted-foreground'>{s.label}</div>
              </div>
            ))}
          </div>
          <Separator className='my-6' />
          <div className='flex flex-wrap gap-2 text-sm'>
            {['Product Engineering', 'Design Systems', 'Motion', 'DX Tooling', 'Performance'].map((t) => (
              <span key={t} className='rounded-full border border-border px-3 py-1 text-muted-foreground'>
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
