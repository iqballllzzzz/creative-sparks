import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDown, ArrowUpRight, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28, filter: 'blur(6px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const socials = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
];

export function Hero() {
  const rootRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax title drift on scroll
      if (titleRef.current) {
        gsap.to(titleRef.current, {
          yPercent: 18,
          opacity: 0.15,
          ease: 'none',
          scrollTrigger: {
            trigger: rootRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
      }
      // 3D tilt-in card pinned effect
      if (cardRef.current) {
        gsap.fromTo(
          cardRef.current,
          { y: 60, rotateX: 12, opacity: 0 },
          {
            y: 0,
            rotateX: 0,
            opacity: 1,
            duration: 1.1,
            ease: 'power3.out',
            delay: 0.5,
          }
        );
      }
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} id='top' className='relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16'>
      {/* gradient orb background */}
      <div aria-hidden className='pointer-events-none absolute inset-0 -z-10 overflow-hidden'>
        <div className='absolute left-1/2 top-[-10%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-foreground/[0.06] blur-[120px] dark:bg-foreground/[0.10]' />
        <div className='absolute bottom-[-20%] right-[-10%] h-[420px] w-[420px] rounded-full bg-foreground/[0.04] blur-[100px] dark:bg-foreground/[0.07]' />
        <div className='grain absolute inset-0 opacity-[0.035] dark:opacity-[0.05]' />
      </div>

      <div className='mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 px-5 sm:px-6 lg:grid-cols-[1.15fr_0.85fr]'>
        <motion.div variants={container} initial='hidden' animate='show'>
          <motion.div variants={item} className='mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1 text-xs text-muted-foreground backdrop-blur'>
            <span className='relative flex h-2 w-2'>
              <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75' />
              <span className='relative inline-flex h-2 w-2 rounded-full bg-emerald-500' />
            </span>
            Available for new projects
          </motion.div>

          <h1 ref={titleRef} className='text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl'>
            <motion.span variants={item} className='block'>
              Building
            </motion.span>
            <motion.span variants={item} className='block text-muted-foreground'>
              digital products
            </motion.span>
            <motion.span variants={item} className='block'>
              that feel right.
            </motion.span>
          </h1>

          <motion.p variants={item} className='mt-7 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg'>
            I&rsquo;m <span className='font-medium text-foreground'>Axon</span> — a full-stack engineer &amp; interface designer focused on clean
            architecture, thoughtful motion, and the small details that make software genuinely pleasant to use.
          </motion.p>

          <motion.div variants={item} className='mt-9 flex flex-wrap items-center gap-3'>
            <Button asChild size='lg'>
              <a href='#work'>
                View selected work <ArrowUpRight className='h-4 w-4' />
              </a>
            </Button>
            <Button asChild size='lg' variant='outline'>
              <a href='#contact'>Get in touch</a>
            </Button>
          </motion.div>

          <motion.div variants={item} className='mt-10 flex items-center gap-3'>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className='grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground transition-all hover:-translate-y-0.5 hover:text-foreground hover:shadow-sm'
              >
                <s.icon className='h-4 w-4' />
              </a>
            ))}
            <span className='ml-2 hidden text-xs text-muted-foreground sm:inline'>Based remotely · Worldwide</span>
          </motion.div>
        </motion.div>

        {/* Right: code / profile card */}
        <div ref={cardRef} className='relative opacity-0 [perspective:1200px]'>
          <div className='relative overflow-hidden rounded-2xl border border-border bg-card/70 shadow-xl backdrop-blur-xl'>
            <div className='flex items-center gap-2 border-b border-border px-4 py-3'>
              <span className='h-2.5 w-2.5 rounded-full bg-red-400/80' />
              <span className='h-2.5 w-2.5 rounded-full bg-amber-400/80' />
              <span className='h-2.5 w-2.5 rounded-full bg-emerald-400/80' />
              <span className='ml-2 font-mono text-xs text-muted-foreground'>axon.config.ts</span>
            </div>
            <pre className='overflow-x-auto p-5 font-mono text-[12.5px] leading-relaxed text-muted-foreground'>
              <code>
{`export const engineer = {
  role: `}<span className='text-foreground'>&quot;Full-Stack Engineer&quot;</span>{`,
  stack: [`}<span className='text-foreground'>&quot;React&quot;</span>{`, `}<span className='text-foreground'>&quot;TypeScript&quot;</span>{`, `}<span className='text-foreground'>&quot;Node&quot;</span>{`],
  design: `}<span className='text-foreground'>&quot;minimal · modern&quot;</span>{`,
  focus: `}<span className='text-foreground'>&quot;details that matter&quot;</span>{`,
  coffee: Infinity,
} as const;`}
              </code>
            </pre>
            <div className='flex items-center justify-between border-t border-border px-4 py-3 text-xs text-muted-foreground'>
              <span className='font-mono'>✓ 0 errors, 0 warnings</span>
              <span className='font-mono'>main</span>
            </div>
          </div>
          <div aria-hidden className='absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-br from-foreground/[0.05] to-transparent blur-2xl' />
        </div>
      </div>

      <motion.a
        href='#about'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className='absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground sm:flex'
        aria-label='Scroll down'
      >
        <span className='text-[10px] uppercase tracking-[0.3em]'>Scroll</span>
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
          <ArrowDown className='h-4 w-4' />
        </motion.span>
      </motion.a>
    </div>
  );
}
