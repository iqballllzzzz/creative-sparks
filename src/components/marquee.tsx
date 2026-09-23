const words = ['React', 'TypeScript', 'Node.js', 'Framer Motion', 'GSAP', 'Tailwind', 'Design Systems', 'Accessibility', 'Performance', 'DX'];

export function Marquee() {
  const row = [...words, ...words];
  return (
    <div className='relative overflow-hidden border-t border-border py-10'>
      <div className='mask-fade-b pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-background via-transparent to-background' />
      <div className='flex w-max animate-marquee items-center gap-10 whitespace-nowrap'>
        {row.map((w, i) => (
          <span key={i} className='flex items-center gap-10 text-2xl font-medium tracking-tight text-muted-foreground sm:text-4xl'>
            {w}
            <span className='h-1.5 w-1.5 rounded-full bg-border' />
          </span>
        ))}
      </div>
    </div>
  );
}
