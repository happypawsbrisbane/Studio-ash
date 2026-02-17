'use client'

import { motion } from 'framer-motion'
import { Section, SectionHeader } from '@/components/ui/Section'
import { ButtonLink } from '@/components/ui/Button'
import { fadeUp } from '@/lib/animations'

const services = [
  {
    title: 'Brand Strategy',
    hex: '#7C3AED',
    description: 'We find what makes you different\u2014then build a strategic foundation around it.',
    items: ['Positioning & Messaging', 'Competitor Research', 'Brand Architecture', 'Naming'],
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="20" cy="20" r="16" />
        <path d="M20 8v24M12 14l8-6 8 6M12 26l8 6 8-6" />
      </svg>
    ),
  },
  {
    title: 'Identity Design',
    hex: '#6366F1',
    description: 'Your visual system, built to work everywhere\u2014from a favicon to a billboard.',
    items: ['Logo & Brandmark', 'Colour & Typography', 'Brand Guidelines', 'Art Direction'],
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="6" y="6" width="28" height="28" rx="4" />
        <circle cx="16" cy="16" r="4" />
        <path d="M34 28l-10-10-18 16" />
      </svg>
    ),
  },
  {
    title: 'Digital Experience',
    hex: '#06B6D4',
    description: 'Websites that feel like your brand\u2014not a theme with your logo dropped in.',
    items: ['Custom Web Design', 'UX/UI', 'Squarespace & Dev', 'E-commerce'],
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="8" width="32" height="24" rx="3" />
        <path d="M4 14h32" />
        <circle cx="8" cy="11" r="1" fill="currentColor" />
        <circle cx="12" cy="11" r="1" fill="currentColor" />
        <circle cx="16" cy="11" r="1" fill="currentColor" />
      </svg>
    ),
  },
]

export function ServicesOverview() {
  return (
    <Section variant="dark">
      <SectionHeader
        eyebrow="What We Do"
        title="Strategy to execution."
        dark
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-10">
        {services.map((service) => (
          <motion.div
            key={service.title}
            variants={fadeUp}
            className="group relative p-8 rounded-2xl border border-white/[0.06] bg-surface/50 hover:border-white/[0.12] transition-all duration-500"
          >
            <div className="mb-6 text-muted group-hover:text-white/60 transition-colors duration-500" style={{ color: service.hex }}>
              {service.icon}
            </div>
            <h3 className="text-h3 font-serif text-white mb-3">
              {service.title}
            </h3>
            <p className="text-body text-subtle mb-6">
              {service.description}
            </p>
            <ul className="space-y-2.5">
              {service.items.map((item) => (
                <li
                  key={item}
                  className="text-small text-subtle/80 flex items-center gap-3"
                >
                  <span
                    className="w-1 h-1 rounded-full flex-shrink-0 opacity-60"
                    style={{ backgroundColor: service.hex }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.div variants={fadeUp} className="text-center">
        <ButtonLink
          href="/services"
          variant="secondary"
          className="border-white/10 text-white/80 hover:border-violet/50 hover:bg-violet/10 hover:text-white"
        >
          All Services
        </ButtonLink>
      </motion.div>
    </Section>
  )
}
