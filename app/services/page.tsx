'use client'

import { motion } from 'framer-motion'
import { Section, SectionHeader } from '@/components/ui/Section'
import { ServiceCard } from '@/components/ui/Card'
import { ContactCTA } from '@/components/ContactCTA'
import { fadeUp, smoothOut, staggerContainer, viewportSettings } from '@/lib/animations'

const services = [
  {
    title: 'Brand Strategy',
    description: 'We uncover what makes you unique and translate that into a strategic foundation that guides every decision.',
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
    description: 'We create distinctive visual systems that communicate your brand\'s essence across every touchpoint.',
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
    description: 'We build digital products and websites that blend form and function, creating meaningful connections.',
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
    description: 'We extend your brand across all touchpoints with cohesive, beautifully crafted materials.',
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
    description: 'We immerse ourselves in your world—your business, your audience, your ambitions. Through workshops, interviews, and research, we uncover the insights that will shape your brand.',
  },
  {
    number: '02',
    title: 'Strategy',
    description: 'With insights in hand, we craft your brand\'s strategic foundation. We define your positioning, articulate your story, and create the framework that guides all creative decisions.',
  },
  {
    number: '03',
    title: 'Creation',
    description: 'Strategy becomes reality. We design, iterate, and refine until every element of your brand works in harmony—from your visual identity to your digital presence.',
  },
  {
    number: '04',
    title: 'Launch',
    description: 'We prepare your brand for the world with comprehensive guidelines, asset libraries, and launch support. Your team is equipped to maintain brand consistency as you grow.',
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-12 lg:px-20">
        <div className="container-wide">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: smoothOut }}
            className="block text-caption uppercase tracking-widest text-stone mb-6"
          >
            Services
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: smoothOut }}
            className="text-h1 md:text-display font-serif text-charcoal max-w-4xl"
          >
            From strategic foundation to creative execution.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: smoothOut }}
            className="mt-6 text-body-lg text-stone max-w-xl"
          >
            We deliver comprehensive brand solutions that transform how businesses
            present themselves to the world.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </Section>

      {/* Process Section */}
      <Section variant="cream">
        <SectionHeader
          eyebrow="Our Process"
          title="A proven approach to brand building."
          description="Every project follows our four-phase methodology, ensuring strategic rigour and creative excellence at every step."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {process.map((step) => (
            <motion.div
              key={step.number}
              variants={fadeUp}
              className="relative"
            >
              <span className="text-display font-serif text-gold/30 block mb-4">
                {step.number}
              </span>
              <h3 className="text-h3 font-serif text-charcoal mb-3">
                {step.title}
              </h3>
              <p className="text-body text-stone">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Investment Section */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            <span className="block text-caption uppercase tracking-widest text-stone mb-6">
              Investment
            </span>
            <h2 className="text-h2 md:text-h1 font-serif text-charcoal mb-6">
              Tailored to your needs.
            </h2>
            <p className="text-body-lg text-stone mb-8">
              Every project is unique, and we tailor our approach to match your specific
              requirements. Our engagements typically start from:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div className="p-6 border border-line-grey">
                <h4 className="text-h4 font-serif text-charcoal mb-2">Brand Identity</h4>
                <p className="text-body-lg text-gold mb-2">From $15,000</p>
                <p className="text-small text-stone">Logo, visual identity system, and brand guidelines.</p>
              </div>
              <div className="p-6 border border-line-grey">
                <h4 className="text-h4 font-serif text-charcoal mb-2">Website Design</h4>
                <p className="text-body-lg text-gold mb-2">From $20,000</p>
                <p className="text-small text-stone">Custom website design and development.</p>
              </div>
              <div className="p-6 border border-line-grey">
                <h4 className="text-h4 font-serif text-charcoal mb-2">Full Package</h4>
                <p className="text-body-lg text-gold mb-2">From $35,000</p>
                <p className="text-small text-stone">Complete brand strategy, identity, and digital presence.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      <ContactCTA />
    </>
  )
}
