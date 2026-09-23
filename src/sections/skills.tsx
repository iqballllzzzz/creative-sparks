import { motion } from 'framer-motion';
import { Section, SectionHeader } from '@/components/section';
import { Code2, Palette, Server, Wrench, Sparkles, Smartphone } from 'lucide-react';

const groups = [
  {
    icon: Code2,
    title: 'Frontend',
    items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'GSAP'],
  },
  {
    icon: Server,
    title: 'Backend',
    items: ['Node.js', 'PostgreSQL', 'Prisma', 'REST & tRPC', 'Redis', 'Docker'],
  },
  {
    icon: Palette,
    title: 'Design',
    items: ['Figma', 'Design Systems', 'Prototyping', 'Typography', 'Motion Design'],
  },
  {
    icon: Wrench,
    title: 'Tooling',
    items: ['Vite', 'Git', 'Vitest', 'CI/CD', 'Vercel', 'Sentry'],
  },
  {
    icon: Smartphone,
    title: 'Mobile',
    items: ['React Native', 'Expo', 'PWA', 'Responsive Systems'],
  },
  {
    icon: Sparkles,
    title: 'Focus',
    items: ['Accessibility', 'Performance', 'DX', 'Interaction Design'],
  },
];

export function Skills() {
  return (
    <Section id='skills' className='border-t border-border'>
      <SectionHeader
        index='03 — Skills'
        title='A toolkit shaped by years of shipping.'
        subtitle='Technologies and disciplines I reach for when turning ideas into robust, delightful products.'
      />

      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
        {groups.map((g, i) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            className='group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-lg'
          >
            <div className='mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background text-foreground transition-colors group-hover:bg-foreground group-hover:text-background'>
              <g.icon className='h-5 w-5' />
            </div>
            <h3 className='text-base font-semibold tracking-tight'>{g.title}</h3>
            <ul className='mt-3 flex flex-wrap gap-1.5'>
              {g.items.map((it) => (
                <li
                  key={it}
                  className='rounded-md border border-border bg-background/50 px-2 py-0.5 font-mono text-[11px] text-muted-foreground'
                >
                  {it}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
