'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { ButtonLink } from '@/components/ui/Button'
import { BrowserFrame } from '@/components/ui/BrowserFrame'
import { smoothOut, fadeUp, staggerContainer, viewportSettings } from '@/lib/animations'

const projectInfo = {
  title: 'Horizon Advisory',
  tagline: 'Clarity in complexity',
  category: 'Brand Identity',
  year: '2023',
  services: ['Brand Strategy', 'Visual Identity', 'Website Design', 'Presentation System'],
  liveUrl: undefined,
  displayUrl: 'www.horizonadvisory.com.au',
  duration: '8 weeks',
  industry: 'Financial Advisory',
}

const challenges = [
  'Differentiate from traditional corporate financial branding',
  'Build trust while appearing modern and forward-thinking',
  'Communicate complex services in an accessible way',
  'Appeal to next-generation high-net-worth clients',
]

const solutions = [
  'Created a refined visual language that balances tradition with innovation',
  'Developed a sophisticated navy and gold palette conveying stability and premium service',
  'Designed clear information hierarchy with elegant data visualization',
  'Built a website experience that educates while establishing credibility',
]

const results = [
  { metric: '180%', description: 'Website lead generation increase' },
  { metric: '$2.4M', description: 'New assets under management' },
  { metric: '92%', description: 'Client retention rate' },
  { metric: '35%', description: 'Younger demographic growth' },
]

const testimonial = {
  quote: "HexStudio helped us break free from the stuffy financial advisor stereotype. Our new brand attracts exactly the kind of forward-thinking clients we want to work with, while still conveying the expertise and trust that matters in our industry.",
  author: 'David Chen',
  role: 'Managing Partner, Horizon Advisory',
}

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop',
    alt: 'Modern office interior',
  },
  {
    src: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=800&fit=crop',
    alt: 'Professional business portrait',
  },
  {
    src: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&h=400&fit=crop',
    alt: 'Business meeting setting',
  },
  {
    src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    alt: 'Data analytics dashboard',
  },
  {
    src: 'https://images.unsplash.com/photo-1553484771-371a605b060b?w=1200&h=600&fit=crop',
    alt: 'Collaborative workspace',
  },
]

const services = [
  { title: 'Wealth Planning', description: 'Comprehensive strategies for long-term financial growth' },
  { title: 'Investment Management', description: 'Portfolio optimization and risk management' },
  { title: 'Estate Planning', description: 'Protecting and transferring wealth across generations' },
  { title: 'Tax Strategy', description: 'Minimizing liability while maximizing returns' },
]

const brandPrinciples = [
  {
    title: 'Trust',
    description: 'Every design choice reinforces reliability and expertise.',
  },
  {
    title: 'Clarity',
    description: 'Complex information presented with elegant simplicity.',
  },
  {
    title: 'Progress',
    description: 'Forward-looking aesthetics that appeal to modern clients.',
  },
]

export default function HorizonAdvisoryPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-12 lg:px-20 bg-gradient-to-br from-[#0A1628] to-[#1A2744]">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: smoothOut }}
            className="mb-8"
          >
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Back to Work
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: smoothOut }}
                className="block text-caption uppercase tracking-widest text-[#C9A227] mb-4"
              >
                {projectInfo.category}
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: smoothOut }}
                className="text-h1 md:text-display font-serif text-white mb-4"
              >
                {projectInfo.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: smoothOut }}
                className="text-h3 font-serif text-white/60 italic mb-8"
              >
                {projectInfo.tagline}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: smoothOut }}
                className="grid grid-cols-2 gap-6"
              >
                <div>
                  <span className="block text-caption uppercase tracking-wider text-white/40 mb-1">Year</span>
                  <span className="text-body text-white">{projectInfo.year}</span>
                </div>
                <div>
                  <span className="block text-caption uppercase tracking-wider text-white/40 mb-1">Duration</span>
                  <span className="text-body text-white">{projectInfo.duration}</span>
                </div>
                <div>
                  <span className="block text-caption uppercase tracking-wider text-white/40 mb-1">Industry</span>
                  <span className="text-body text-white">{projectInfo.industry}</span>
                </div>
                <div>
                  <span className="block text-caption uppercase tracking-wider text-white/40 mb-1">Services</span>
                  <span className="text-body text-white">{projectInfo.services.slice(0, 2).join(', ')}</span>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: smoothOut }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=900&fit=crop"
                alt="Horizon Advisory hero image"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/40 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Live Website Preview */}
      <Section>
        <div className="text-center mb-12">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="block text-caption uppercase tracking-widest text-[#C9A227] mb-4"
          >
            Live Website
          </motion.span>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="text-h2 font-serif text-white"
          >
            Experience the design
          </motion.h2>
        </div>

        <BrowserFrame
          url={projectInfo.liveUrl}
          displayUrl={projectInfo.displayUrl}
          fallbackImage="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=750&fit=crop"
          title={projectInfo.title}
        />
      </Section>

      {/* Overview Section */}
      <Section variant="elevated">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="text-h3 font-serif text-white leading-relaxed"
          >
            Horizon Advisory is a boutique financial planning firm with a refreshing approach to
            wealth management. They wanted a brand that would attract a new generation of clients
            while honoring the trust and expertise that defines exceptional financial advice.
          </motion.p>
        </div>
      </Section>

      {/* Brand Principles */}
      <Section>
        <div className="text-center mb-16">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="block text-caption uppercase tracking-widest text-[#1A2744] mb-4"
          >
            Brand Principles
          </motion.span>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="text-h2 font-serif text-white"
          >
            Foundation for growth
          </motion.h2>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {brandPrinciples.map((principle, index) => (
            <motion.div
              key={principle.title}
              variants={fadeUp}
              className="p-8 bg-white border-l-4 border-[#C9A227]"
            >
              <span className="text-caption uppercase tracking-wider text-[#C9A227] mb-2 block">
                0{index + 1}
              </span>
              <h3 className="text-h4 font-serif text-white mb-3">{principle.title}</h3>
              <p className="text-body text-subtle">{principle.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Services Grid */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.span
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              className="block text-caption uppercase tracking-widest text-[#1A2744] mb-4"
            >
              Service Design
            </motion.span>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              className="text-h2 font-serif text-white mb-6"
            >
              Clarity in every offering
            </motion.h2>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              className="text-body-lg text-subtle mb-8"
            >
              We developed a clear visual system to communicate Horizon's service offerings,
              making complex financial concepts accessible without sacrificing sophistication.
            </motion.p>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              className="space-y-4"
            >
              {services.map((service) => (
                <motion.div
                  key={service.title}
                  variants={fadeUp}
                  className="p-4 border border-white/[0.06] hover:border-[#C9A227] transition-colors"
                >
                  <h4 className="text-body font-medium text-white mb-1">{service.title}</h4>
                  <p className="text-small text-subtle">{service.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="relative aspect-square"
          >
            <Image
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=800&fit=crop"
              alt="Financial data visualization"
              fill
              className="object-cover rounded-sm"
            />
          </motion.div>
        </div>
      </Section>

      {/* Challenge & Solution */}
      <Section variant="dark" className="bg-[#0A1628]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            <span className="block text-caption uppercase tracking-widest text-[#C9A227] mb-4">The Challenge</span>
            <h2 className="text-h2 font-serif text-white mb-6">Beyond the boardroom</h2>
            <ul className="space-y-4">
              {challenges.map((challenge, index) => (
                <li key={index} className="flex items-start gap-3 text-body text-white/80">
                  <span className="w-1.5 h-1.5 mt-2 rounded-full bg-[#C9A227] flex-shrink-0" />
                  {challenge}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            <span className="block text-caption uppercase tracking-widest text-[#C9A227] mb-4">The Solution</span>
            <h2 className="text-h2 font-serif text-white mb-6">Modern authority</h2>
            <ul className="space-y-4">
              {solutions.map((solution, index) => (
                <li key={index} className="flex items-start gap-3 text-body text-white/80">
                  <span className="w-1.5 h-1.5 mt-2 rounded-full bg-[#C9A227] flex-shrink-0" />
                  {solution}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </Section>

      {/* Gallery Section */}
      <Section>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="grid grid-cols-12 gap-4"
        >
          <motion.div variants={fadeUp} className="col-span-12 md:col-span-8">
            <div className="relative aspect-[16/9] overflow-hidden rounded-sm">
              <Image
                src={galleryImages[4].src}
                alt={galleryImages[4].alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>
          <motion.div variants={fadeUp} className="col-span-6 md:col-span-4 row-span-2">
            <div className="relative h-full min-h-[300px] overflow-hidden rounded-sm">
              <Image
                src={galleryImages[1].src}
                alt={galleryImages[1].alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>
          <motion.div variants={fadeUp} className="col-span-6 md:col-span-4">
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
              <Image
                src={galleryImages[2].src}
                alt={galleryImages[2].alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>
          <motion.div variants={fadeUp} className="col-span-6 md:col-span-4">
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
              <Image
                src={galleryImages[3].src}
                alt={galleryImages[3].alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>
        </motion.div>
      </Section>

      {/* Color Palette Section */}
      <Section variant="elevated">
        <div className="text-center mb-12">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="block text-caption uppercase tracking-widest text-[#1A2744] mb-4"
          >
            Visual Identity
          </motion.span>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="text-h2 font-serif text-white"
          >
            Commanding presence
          </motion.h2>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="flex flex-wrap justify-center gap-6"
        >
          {['#0A1628', '#1A2744', '#C9A227', '#E8E4DC', '#FFFFFF'].map((color) => (
            <motion.div key={color} variants={fadeUp} className="text-center">
              <div
                className="w-24 h-24 rounded-sm mb-3 shadow-lg border border-white/[0.06]"
                style={{ backgroundColor: color }}
              />
              <span className="text-small text-subtle uppercase tracking-wider">{color}</span>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Results Section */}
      <Section>
        <div className="text-center mb-12">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="block text-caption uppercase tracking-widest text-[#1A2744] mb-4"
          >
            The Results
          </motion.span>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="text-h2 font-serif text-white"
          >
            Measured success
          </motion.h2>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {results.map((result) => (
            <motion.div key={result.description} variants={fadeUp} className="text-center">
              <span className="block text-display font-serif text-[#1A2744] mb-2">
                {result.metric}
              </span>
              <span className="text-small text-subtle uppercase tracking-wider">
                {result.description}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Testimonial Section */}
      <Section variant="dark" className="bg-[#0A1628]">
        <motion.blockquote
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-h2 md:text-h1 font-serif text-white leading-tight mb-8">
            "{testimonial.quote}"
          </p>
          <footer>
            <cite className="not-italic">
              <span className="block text-body font-medium text-white">{testimonial.author}</span>
              <span className="text-small text-white/60">{testimonial.role}</span>
            </cite>
          </footer>
        </motion.blockquote>
      </Section>

      {/* Next Project CTA */}
      <Section>
        <div className="text-center">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="block text-caption uppercase tracking-widest text-subtle mb-4"
          >
            Next Project
          </motion.span>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="text-h1 font-serif text-white mb-8"
          >
            Paws & Peace
          </motion.h2>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            <ButtonLink href="/work/paws-and-peace" variant="primary">
              View Project
            </ButtonLink>
          </motion.div>
        </div>
      </Section>
    </>
  )
}
