'use client'

import { motion } from 'framer-motion'
import { Section, SectionHeader } from '@/components/ui/Section'
import { ButtonLink } from '@/components/ui/Button'
import { fadeUp } from '@/lib/animations'

const services = [
  {
    title: 'Brand Strategy',
    description: 'Defining your position in the market through research, positioning, and strategic frameworks that guide every decision.',
    items: ['Brand Positioning', 'Market Research', 'Brand Architecture', 'Naming & Messaging'],
  },
  {
    title: 'Identity Design',
    description: 'Creating visual systems that communicate your brand\'s essence across every touchpoint, from logo to complete identity.',
    items: ['Visual Identity', 'Logo Design', 'Typography Systems', 'Colour & Art Direction'],
  },
  {
    title: 'Digital Experience',
    description: 'Building digital products and websites that blend form and function, creating meaningful connections with your audience.',
    items: ['Web Design', 'UX/UI Design', 'Development', 'E-commerce'],
  },
]

export function ServicesOverview() {
  return (
    <Section variant="dark">
      <SectionHeader
        eyebrow="Services"
        title="From strategic foundation to creative execution."
        description="We deliver comprehensive brand solutions that transform how businesses present themselves to the world."
        dark
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-12">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            variants={fadeUp}
            className="border-t border-off-white/20 pt-8"
          >
            <span className="text-caption text-off-white/40 mb-4 block">
              0{index + 1}
            </span>
            <h3 className="text-h3 font-serif text-off-white mb-4">
              {service.title}
            </h3>
            <p className="text-body text-off-white/70 mb-6">
              {service.description}
            </p>
            <ul className="space-y-2">
              {service.items.map((item) => (
                <li
                  key={item}
                  className="text-small text-off-white/50 flex items-center gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-gold" />
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
          className="border-off-white text-off-white hover:bg-off-white hover:text-charcoal"
        >
          Explore Our Services
        </ButtonLink>
      </motion.div>
    </Section>
  )
}
