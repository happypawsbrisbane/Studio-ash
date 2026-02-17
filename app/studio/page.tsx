'use client'

import { motion } from 'framer-motion'
import { Section, SectionHeader } from '@/components/ui/Section'
import { ContactCTA } from '@/components/ContactCTA'
import { fadeUp, smoothOut, staggerContainer, viewportSettings } from '@/lib/animations'

const values = [
  {
    title: 'Strategy First',
    hex: '#7C3AED',
    description: 'The logo is the last thing we design. First, we figure out what your brand needs to say and to whom.',
  },
  {
    title: 'Craft Obsessed',
    hex: '#6366F1',
    description: 'The spacing between letters. The exact weight of a border. The details most people never consciously notice\u2014but always feel.',
  },
  {
    title: 'True Partnership',
    hex: '#06B6D4',
    description: 'No account managers. No juniors. You work with me directly from kickoff to launch, every time.',
  },
]

const stats = [
  { number: '5+', label: 'Years' },
  { number: '50+', label: 'Brands' },
  { number: '100%', label: 'Satisfaction' },
]

const skills = {
  brand: ['Logo Design', 'Visual Identity', 'Brand Guidelines', 'Collateral Design'],
  web: ['Custom Websites', 'Squarespace', 'Responsive Design', 'UI/UX Design'],
}

export default function StudioPage() {
  return (
    <>
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 px-6 md:px-12 lg:px-20">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: smoothOut }}
                className="block font-mono text-micro uppercase tracking-[0.15em] text-muted mb-6"
              >
                About
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: smoothOut }}
                className="text-h1 md:text-display font-serif text-white"
              >
                Designer, creative, <em className="text-gradient not-italic">brand obsessive.</em>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: smoothOut }}
                className="mt-6 text-body-lg text-subtle"
              >
                I&apos;m Ash&mdash;a Brisbane-based designer who helps businesses
                close the gap between how good they are and how good they look.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: smoothOut }}
                className="mt-4 text-body-lg text-subtle"
              >
                <strong className="text-white">Great design isn&apos;t decoration</strong>
                &mdash; it&apos;s positioning you as the obvious choice.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: smoothOut }}
              className="relative aspect-[3/4] rounded-3xl overflow-hidden border border-white/[0.06] bg-surface"
            >
              {/* Abstract creative portrait - replace with real photo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-violet/20 via-indigo/10 to-cyan/20" />
                  <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-violet/20 blur-3xl" />
                  <div className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-cyan/15 blur-3xl" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-8">
                    <div className="w-24 h-24 rounded-full border-2 border-white/10 flex items-center justify-center">
                      <span className="text-h1 font-serif text-white/80">A</span>
                    </div>
                    <span className="text-small text-subtle text-center">
                      Your photo goes here.<br />
                      <span className="text-muted text-micro">Real &gt; Stock. Always.</span>
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Section size="small" variant="elevated">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="grid grid-cols-3 gap-8 text-center"
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={fadeUp}>
              <span className="block text-h1 md:text-display font-serif text-gradient mb-2">
                {stat.number}
              </span>
              <span className="font-mono text-micro text-muted uppercase tracking-widest">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            eyebrow="My Story"
            title="How I got here."
            align="center"
          />
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="space-y-6 text-body-lg text-subtle text-center"
          >
            <p>
              I spent four years at a Brisbane agency watching small businesses get handed
              the same Canva template with different colours. The work was fast, it was cheap,
              and it looked exactly like that.
            </p>
            <p>
              The turning point was a cafe owner who cried when she saw her &ldquo;rebrand&rdquo;&mdash;
              a generic coffee bean logo she&apos;d seen on three other shops. She deserved better.
              They all did.
            </p>
            <p>
              HexStudio started at my dining table in 2020 with one client and one belief:
              <strong className="text-white"> every business has a story worth designing properly.</strong>
              {' '}Five years and 50+ brands later, that belief hasn&apos;t changed.
            </p>
          </motion.div>
        </div>
      </Section>

      <Section variant="elevated">
        <SectionHeader
          eyebrow="Values"
          title="What guides every project."
          align="center"
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {values.map((value) => (
            <motion.div
              key={value.title}
              variants={fadeUp}
              className="p-8 rounded-2xl border border-white/[0.06] bg-surface/30 text-center"
            >
              <div
                className="w-3 h-3 rounded-full mx-auto mb-4"
                style={{ backgroundColor: value.hex }}
              />
              <h3 className="text-h3 font-serif text-white mb-4">
                {value.title}
              </h3>
              <p className="text-body text-subtle">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <SectionHeader
              eyebrow="Expertise"
              title="Tools & skills."
            />
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              className="grid grid-cols-2 gap-8"
            >
              <motion.div variants={fadeUp}>
                <h4 className="font-mono text-micro uppercase tracking-widest text-violet mb-4">
                  Brand Design
                </h4>
                <ul className="space-y-2">
                  {skills.brand.map((skill) => (
                    <li key={skill} className="text-body text-white flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-violet" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div variants={fadeUp}>
                <h4 className="font-mono text-micro uppercase tracking-widest text-cyan mb-4">
                  Web Design
                </h4>
                <ul className="space-y-2">
                  {skills.web.map((skill) => (
                    <li key={skill} className="text-body text-white flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-cyan" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="grid grid-cols-2 gap-4"
          >
            <div className="aspect-square rounded-2xl border border-white/[0.06] bg-surface/30 flex items-center justify-center">
              <svg className="w-12 h-12 text-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 19l7-7 3 3-7 7-3-3z"/>
                <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>
                <path d="M2 2l7.586 7.586"/>
                <circle cx="11" cy="11" r="2"/>
              </svg>
            </div>
            <div className="aspect-square rounded-2xl border border-white/[0.06] bg-surface/30 flex items-center justify-center translate-y-8">
              <svg className="w-12 h-12 text-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <line x1="3" y1="9" x2="21" y2="9"/>
                <line x1="9" y1="21" x2="9" y2="9"/>
              </svg>
            </div>
          </motion.div>
        </div>
      </Section>

      <ContactCTA />
    </>
  )
}
