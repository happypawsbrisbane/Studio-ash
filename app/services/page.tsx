'use client'

import { motion } from 'framer-motion'
import { Section, SectionHeader } from '@/components/ui/Section'
import { ServiceCard } from '@/components/ui/Card'
import { ContactCTA } from '@/components/ContactCTA'
import { fadeUp, smoothOut, staggerContainer, viewportSettings } from '@/lib/animations'

const services = [
  {
    title: 'Brand Strategy',
    hex: '#7C3AED',
    description: 'Uncover what makes you unique. Translate that into strategy.',
    features: [
      'Brand Discovery & Research',
      'Competitive Analysis',
      'Brand Positioning',
      'Brand Architecture',
      'Naming & Verbal Identity',
      'Messaging Framework',
    ],
  },
  {
    title: 'Visual Identity',
    hex: '#6366F1',
    description: 'Distinctive visual systems across every touchpoint.',
    features: [
      'Logo & Brandmark Design',
      'Visual Identity System',
      'Typography Selection',
      'Colour Palette Development',
      'Art Direction',
      'Brand Guidelines',
    ],
  },
  {
    title: 'Digital Experience',
    hex: '#06B6D4',
    description: 'Digital products that blend form and function.',
    features: [
      'Website Design',
      'UX/UI Design',
      'Responsive Development',
      'E-commerce Solutions',
      'Content Strategy',
      'SEO Optimisation',
    ],
  },
  {
    title: 'Brand Collateral',
    hex: '#F43F5E',
    description: 'Extend your brand across all touchpoints.',
    features: [
      'Business Stationery',
      'Marketing Materials',
      'Social Media Templates',
      'Presentation Decks',
      'Packaging Design',
      'Environmental Graphics',
    ],
  },
]

const process = [
  {
    number: '01',
    title: 'Discovery',
    hex: '#7C3AED',
    description: 'Immerse in your world. Workshops, interviews, research. Uncover insights that shape your brand.',
  },
  {
    number: '02',
    title: 'Strategy',
    hex: '#6366F1',
    description: 'Define positioning, articulate your story, create the framework for all creative decisions.',
  },
  {
    number: '03',
    title: 'Creation',
    hex: '#06B6D4',
    description: 'Design, iterate, and refine until every element works in harmony.',
  },
  {
    number: '04',
    title: 'Launch',
    hex: '#10B981',
    description: 'Comprehensive guidelines, asset libraries, and launch support.',
  },
]

export default function ServicesPage() {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-12 lg:px-20">
        <div className="container-wide">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: smoothOut }}
            className="block font-mono text-micro uppercase tracking-[0.15em] text-muted mb-6"
          >
            Services
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: smoothOut }}
            className="text-h1 md:text-display font-serif text-white max-w-4xl"
          >
            Strategy to execution.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: smoothOut }}
            className="mt-6 text-body-lg text-subtle max-w-xl"
          >
            Comprehensive brand solutions that transform how businesses present themselves.
          </motion.p>
        </div>
      </section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </Section>

      <Section variant="elevated">
        <SectionHeader
          eyebrow="Process"
          title="Four phases. One standard."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {process.map((step) => (
            <motion.div
              key={step.number}
              variants={fadeUp}
              className="relative p-6 rounded-2xl border border-white/[0.06] bg-surface/30"
            >
              <div
                className="w-2 h-2 rounded-full mb-4"
                style={{ backgroundColor: step.hex }}
              />
              <span className="block font-mono text-micro text-muted tracking-widest mb-3">
                {step.number}
              </span>
              <h3 className="text-h3 font-serif text-white mb-3">
                {step.title}
              </h3>
              <p className="text-body text-subtle">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            <span className="block font-mono text-micro uppercase tracking-[0.15em] text-muted mb-6">
              Investment
            </span>
            <h2 className="text-h2 md:text-h1 font-serif text-white mb-6">
              Tailored to your needs.
            </h2>
            <p className="text-body-lg text-subtle mb-8">
              Every project is unique. Our engagements typically start from:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="p-6 rounded-2xl border border-white/[0.06] bg-surface/30">
                <h4 className="text-h4 font-serif text-white mb-2">Brand Identity</h4>
                <p className="text-body-lg text-violet mb-2">From $15,000</p>
                <p className="text-small text-subtle">Logo, visual identity, brand guidelines.</p>
              </div>
              <div className="p-6 rounded-2xl border border-white/[0.06] bg-surface/30">
                <h4 className="text-h4 font-serif text-white mb-2">Website Design</h4>
                <p className="text-body-lg text-indigo mb-2">From $20,000</p>
                <p className="text-small text-subtle">Custom design and development.</p>
              </div>
              <div className="p-6 rounded-2xl border border-white/[0.06] bg-surface/30">
                <h4 className="text-h4 font-serif text-white mb-2">Full Package</h4>
                <p className="text-body-lg text-cyan mb-2">From $35,000</p>
                <p className="text-small text-subtle">Strategy, identity, digital presence.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      <ContactCTA />
    </>
  )
}
