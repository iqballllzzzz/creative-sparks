import { motion } from 'framer-motion';
import { Section, SectionHeader } from '@/components/section';
import { Badge } from '@/components/ui/badge';

const items = [
  {
    period: '2023 — Present',
    role: 'Senior Full-Stack Engineer',
    company: 'Independent / Freelance',
    desc: 'Partnering with startups and teams to design and ship web products end-to-end — architecture, interfaces, and everything between.',
    tags: ['React', 'Node', 'Design Systems'],
  },
  {
    period: '2021 — 2023',
    role: 'Product Engineer',
    company: 'Northwind Labs',
    desc: 'Led frontend architecture for a B2B platform serving 200k+ users. Built the design system and cut load times by 60%.',
    tags: ['Next.js', 'TypeScript', 'GraphQL'],
  },
  {
    period: '2019 — 2021',
    role: 'Frontend Developer',
    company: 'Studio Mono',
    desc: 'Crafted award-winning marketing sites and interactive experiences for global brands, focusing on motion and accessibility.',
    tags: ['GSAP', 'Tailwind', 'A11y'],
  },
  {
    period: '2018 — 2019',
    role: 'Junior Developer',
    company: 'Pixel Makers',
    desc: 'Started my journey building responsive interfaces and learning the craft of clean, maintainable code.',
    tags: ['JavaScript', 'SCSS'],
  },
];

export function Experience() {
  return (
    <Section id='experience' className='border-t border-border'>
      <SectionHeader index='04 — Experience' title='A short history of building.' />

      <div className='relative'>
        <div aria-hidden className='absolute left-[7px] top-2 bottom-2 w-px bg-border sm:left-[9px]' />
        <div className='space-y-10'>
          {items.map((it, i) => (
            <motion.div
              key={it.role}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className='relative pl-8 sm:pl-12'
            >
              <span className='absolute left-0 top-1.5 grid h-4 w-4 place-items-center rounded-full border border-border bg-background sm:h-5 sm:w-5'>
                <span className='h-1.5 w-1.5 rounded-full bg-foreground' />
              </span>

              <div className='flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between'>
                <div>
                  <h3 className='text-lg font-semibold tracking-tight'>{it.role}</h3>
                  <p className='text-sm text-muted-foreground'>{it.company}</p>
                </div>
                <span className='font-mono text-xs text-muted-foreground'>{it.period}</span>
              </div>
              <p className='mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground'>{it.desc}</p>
              <div className='mt-3 flex flex-wrap gap-1.5'>
                {it.tags.map((t) => (
                  <Badge key={t} variant='outline' className='text-[10.5px] font-normal'>
                    {t}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
