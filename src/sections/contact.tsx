import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, MapPin, Check } from 'lucide-react';
import { Section, SectionHeader } from '@/components/section';
import { Button } from '@/components/ui/button';

export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', email: '', message: '' });
  };

  const field =
    'w-full rounded-xl border border-border bg-background/50 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-foreground/40 focus:ring-2 focus:ring-ring/20';

  return (
    <Section id='contact' className='border-t border-border'>
      <SectionHeader
        index='05 — Contact'
        title='Let’s build something good.'
        subtitle='Have a project, an idea, or just want to say hi? My inbox is always open.'
      />

      <div className='grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr]'>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className='space-y-4'
        >
          <a
            href='mailto:hello@axon.xyz'
            className='group flex items-center justify-between rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:shadow-lg'
          >
            <span className='flex items-center gap-3'>
              <span className='grid h-10 w-10 place-items-center rounded-xl border border-border'>
                <Mail className='h-4 w-4' />
              </span>
              <span>
                <span className='block text-sm font-medium'>Email</span>
                <span className='block text-sm text-muted-foreground'>hello@axon.xyz</span>
              </span>
            </span>
            <ArrowUpRight className='h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5' />
          </a>

          <div className='flex items-center justify-between rounded-2xl border border-border bg-card p-5'>
            <span className='flex items-center gap-3'>
              <span className='grid h-10 w-10 place-items-center rounded-xl border border-border'>
                <MapPin className='h-4 w-4' />
              </span>
              <span>
                <span className='block text-sm font-medium'>Location</span>
                <span className='block text-sm text-muted-foreground'>Remote · Worldwide</span>
              </span>
            </span>
          </div>

          <div className='rounded-2xl border border-dashed border-border p-5 text-sm text-muted-foreground'>
            Typical response time: <span className='font-medium text-foreground'>within 24 hours</span>. Currently taking on
            select freelance projects for 2025.
          </div>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className='space-y-4 rounded-2xl border border-border bg-card p-6 sm:p-7'
        >
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
            <div className='space-y-2'>
              <label htmlFor='name' className='text-xs font-medium text-muted-foreground'>
                Name
              </label>
              <input
                id='name'
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder='Jane Doe'
                className={field}
              />
            </div>
            <div className='space-y-2'>
              <label htmlFor='email' className='text-xs font-medium text-muted-foreground'>
                Email
              </label>
              <input
                id='email'
                type='email'
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder='jane@company.com'
                className={field}
              />
            </div>
          </div>
          <div className='space-y-2'>
            <label htmlFor='message' className='text-xs font-medium text-muted-foreground'>
              Message
            </label>
            <textarea
              id='message'
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder='Tell me about your project…'
              className={field + ' resize-none'}
            />
          </div>

          <Button type='submit' size='lg' className='w-full'>
            {sent ? (
              <>
                <Check className='h-4 w-4' /> Message sent
              </>
            ) : (
              <>
                Send message <ArrowUpRight className='h-4 w-4' />
              </>
            )}
          </Button>
        </motion.form>
      </div>
    </Section>
  );
}
