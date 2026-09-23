import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Section, SectionHeader } from '@/components/section';
import { Badge } from '@/components/ui/badge';
import { useRef, type MouseEvent } from 'react';

const projects = [
  {
    title: 'Lumen Analytics',
    desc: 'A real-time product analytics platform with sub-second dashboards and a fully themable chart engine.',
    tags: ['React', 'tRPC', 'Postgres', 'D3'],
    year: '2024',
    accent: 'from-sky-500/20',
  },
  {
    title: 'Atlas Design System',
    desc: 'A headless component library adopted across 8 products, with tokens, a11y primitives and motion guidelines.',
    tags: ['TypeScript', 'Radix', 'Tailwind', 'Storybook'],
    year: '2024',
    accent: 'from-violet-500/20',
  },
  {
    title: 'Nimbus Studio',
    desc: 'A collaborative canvas editor for teams — multiplayer cursors, offline-first sync, and buttery interactions.',
    tags: ['Next.js', 'CRDT', 'WebSocket', 'Motion'],
    year: '2023',
    accent: 'from-emerald-500/20',
  },
  {
    title: 'Orbit CLI',
    desc: 'A developer tooling suite that scaffolds, lints and ships modern apps in a single delightful command.',
    tags: ['Node.js', 'Commander', 'Vitest'],
    year: '2023',
    accent: 'from-amber-500/20',
  },
];

function ProjectCard({ p, i }: { p: (typeof projects)[number]; i: number }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 150, damping: 18 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), { stiffness: 150, damping: 18 });

  const onMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href='#'
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1000 }}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className='group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-2xl sm:p-7'
    >
      <div
        aria-hidden
        className={`pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br ${p.accent} to-transparent opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100`}
      />
      <div className='relative'>
        <div className='flex items-start justify-between gap-4'>
          <span className='font-mono text-xs text-muted-foreground'>{p.year}</span>
          <span className='grid h-8 w-8 place-items-center rounded-full border border-border text-muted-foreground transition-all group-hover:rotate-45 group-hover:border-foreground group-hover:text-foreground'>
            <ArrowUpRight className='h-4 w-4' />
          </span>
        </div>
        <h3 className='mt-6 text-xl font-semibold tracking-tight sm:text-2xl'>{p.title}</h3>
        <p className='mt-2.5 text-sm leading-relaxed text-muted-foreground'>{p.desc}</p>
      </div>
      <div className='relative mt-7 flex flex-wrap gap-1.5'>
        {p.tags.map((t) => (
          <Badge key={t} variant='muted' className='font-mono text-[10.5px]'>
            {t}
          </Badge>
        ))}
      </div>
    </motion.a>
  );
}

export function Projects() {
  return (
    <Section id='work' className='border-t border-border'>
      <SectionHeader
        index='02 — Selected Work'
        title='Projects I’m proud of.'
        subtitle='A selection of products and systems built end-to-end — from architecture to pixel.'
      />

      <div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
        {projects.map((p, i) => (
          <ProjectCard key={p.title} p={p} i={i} />
        ))}
      </div>
    </Section>
  );
}
