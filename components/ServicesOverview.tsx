'use client'

import { motion } from 'framer-motion'
import { Section, SectionHeader } from '@/components/ui/Section'
import { ButtonLink } from '@/components/ui/Button'
import { fadeUp } from '@/lib/animations'

const services = [
  {
    title: 'Brand Strategy',
    hex: '#7C3AED',
    items: ['Positioning', 'Research', 'Architecture', 'Messaging'],
  },
  {
    title: 'Identity Design',
    hex: '#6366F1',
    items: ['Visual Identity', 'Logo Design', 'Typography', 'Colour Direction'],
  },
  {
    title: 'Digital Experience',
    hex: '#06B6D4',
    items: ['Web Design', 'UX/UI', 'Development', 'E-commerce'],
  },
]

export function ServicesOverview() {
  return (
    <Section variant="dark">
      <SectionHeader
        eyebrow="Services"
        title="Strategy to execution."
        dark
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            variants={fadeUp}
            className="group relative p-8 rounded-2xl border border-white/[0.06] bg-surface/50 hover:border-white/[0.12] transition-all duration-500"
          >
            <div
              className="w-2 h-2 rounded-full mb-6"
              style={{ backgroundColor: service.hex }}
            />
            <span className="block font-mono text-micro text-muted tracking-widest mb-3">
              0{index + 1}
            </span>
            <h3 className="text-h3 font-serif text-white mb-6">
              {service.title}
            </h3>
            <ul className="space-y-3">
              {service.items.map((item) => (
                <li
                  key={item}
                  className="text-small text-subtle flex items-center gap-3"
                >
                  <span
                    className="w-1 h-1 rounded-full flex-shrink-0"
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
