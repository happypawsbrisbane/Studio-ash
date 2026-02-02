'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { ButtonLink } from '@/components/ui/Button'
import { BrowserFrame } from '@/components/ui/BrowserFrame'
import { smoothOut, fadeUp, staggerContainer, viewportSettings } from '@/lib/animations'

const projectInfo = {
  title: 'Seva Wellness',
  tagline: 'Nurturing mind, body & spirit',
  category: 'Visual Identity System',
  year: '2024',
  services: ['Brand Strategy', 'Visual Identity', 'Print Design', 'Environmental Graphics'],
  duration: '10 weeks',
  industry: 'Health & Wellness',
  liveUrl: undefined,
  displayUrl: 'www.sevawellness.com.au',
}

const challenges = [
  'Create a sophisticated brand that appeals to health-conscious professionals',
  'Differentiate from generic "spa" aesthetics while maintaining warmth',
  'Build a flexible identity system for diverse service offerings',
  'Communicate both expertise and accessibility',
]

const solutions = [
  'Developed a refined purple palette symbolizing transformation and tranquility',
  'Crafted custom botanical illustrations that bring organic elegance',
  'Designed modular brand elements adaptable to any touchpoint',
  'Created a tone of voice that is knowledgeable yet nurturing',
]

const results = [
  { metric: '280%', description: 'Increase in new client bookings' },
  { metric: '67%', description: 'Higher average transaction value' },
  { metric: '45%', description: 'Growth in membership signups' },
  { metric: '5.0★', description: 'Google review rating' },
]

const testimonial = {
  quote: "Working with Studio Ash was a transformative experience. They didn't just create a logo — they captured the very essence of what Seva means to us and our community.",
  author: 'Dr. Maya Chen',
  role: 'Founder & Lead Practitioner, Seva Wellness',
}

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=1200&h=800&fit=crop',
    alt: 'Peaceful wellness space',
  },
  {
    src: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=800&fit=crop',
    alt: 'Spa treatment setup',
  },
  {
    src: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=600&h=400&fit=crop',
    alt: 'Natural wellness products',
  },
  {
    src: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=600&h=400&fit=crop',
    alt: 'Meditation space',
  },
  {
    src: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=1200&h=600&fit=crop',
    alt: 'Wellness retreat environment',
  },
]

export default function SevaWellnessPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-[#F8F5FC] to-white">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: smoothOut }}
            className="mb-8"
          >
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-stone hover:text-charcoal transition-colors"
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
                className="block text-caption uppercase tracking-widest text-[#9B7BB8] mb-4"
              >
                {projectInfo.category}
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: smoothOut }}
                className="text-h1 md:text-display font-serif text-charcoal mb-4"
              >
                {projectInfo.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: smoothOut }}
                className="text-h3 font-serif text-stone italic mb-8"
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
                  <span className="block text-caption uppercase tracking-wider text-stone mb-1">Year</span>
                  <span className="text-body text-charcoal">{projectInfo.year}</span>
                </div>
                <div>
                  <span className="block text-caption uppercase tracking-wider text-stone mb-1">Duration</span>
                  <span className="text-body text-charcoal">{projectInfo.duration}</span>
                </div>
                <div>
                  <span className="block text-caption uppercase tracking-wider text-stone mb-1">Industry</span>
                  <span className="text-body text-charcoal">{projectInfo.industry}</span>
                </div>
                <div>
                  <span className="block text-caption uppercase tracking-wider text-stone mb-1">Services</span>
                  <span className="text-body text-charcoal">{projectInfo.services.slice(0, 2).join(', ')}</span>
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
                src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=1200&h=900&fit=crop"
                alt="Seva Wellness hero image"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#9B7BB8]/20 to-transparent" />
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
            className="block text-caption uppercase tracking-widest text-[#9B7BB8] mb-4"
          >
            Live Website
          </motion.span>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="text-h2 font-serif text-charcoal"
          >
            Experience the design
          </motion.h2>
        </div>

        <BrowserFrame
          url={projectInfo.liveUrl}
          displayUrl={projectInfo.displayUrl}
          fallbackImage="https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=1200&h=750&fit=crop"
          title={projectInfo.title}
        />
      </Section>

      {/* Overview Section */}
      <Section variant="cream">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="text-h3 font-serif text-charcoal leading-relaxed"
          >
            Seva — meaning "selfless service" in Sanskrit — approached us to create a brand identity
            that would honor their holistic approach to wellness while positioning them as
            Brisbane's premier destination for mindful healing.
          </motion.p>
        </div>
      </Section>

      {/* Brand Philosophy */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="lg:col-span-1"
          >
            <span className="block text-caption uppercase tracking-widest text-[#9B7BB8] mb-4">Brand Philosophy</span>
            <h2 className="text-h2 font-serif text-charcoal">Rooted in purpose</h2>
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="lg:col-span-2"
          >
            <p className="text-body-lg text-stone mb-6">
              The Seva brand needed to embody the delicate balance between ancient wisdom and modern wellness.
              We drew inspiration from the lotus flower — a symbol of purity and enlightenment that rises
              from muddy waters to bloom in pristine beauty.
            </p>
            <p className="text-body-lg text-stone">
              Every element of the identity was crafted to evoke a sense of calm and transformation,
              from the flowing typography to the soft, ethereal color palette that shifts like
              the colors of dawn.
            </p>
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
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <motion.div variants={fadeUp} className="md:col-span-2">
            <div className="relative aspect-[21/9] rounded-xl overflow-hidden">
              <Image
                src={galleryImages[0].src}
                alt={galleryImages[0].alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>
          {galleryImages.slice(1, 5).map((image, index) => (
            <motion.div key={index} variants={fadeUp}>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Challenge & Solution */}
      <Section variant="dark" className="bg-[#2D2438]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            <span className="block text-caption uppercase tracking-widest text-[#C9A8E2] mb-4">The Challenge</span>
            <h2 className="text-h2 font-serif text-off-white mb-6">Beyond the ordinary</h2>
            <ul className="space-y-4">
              {challenges.map((challenge, index) => (
                <li key={index} className="flex items-start gap-3 text-body text-off-white/80">
                  <span className="w-1.5 h-1.5 mt-2 rounded-full bg-[#C9A8E2] flex-shrink-0" />
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
            <span className="block text-caption uppercase tracking-widest text-[#C9A8E2] mb-4">The Solution</span>
            <h2 className="text-h2 font-serif text-off-white mb-6">Elevated serenity</h2>
            <ul className="space-y-4">
              {solutions.map((solution, index) => (
                <li key={index} className="flex items-start gap-3 text-body text-off-white/80">
                  <span className="w-1.5 h-1.5 mt-2 rounded-full bg-[#C9A8E2] flex-shrink-0" />
                  {solution}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </Section>

      {/* Color Palette Section */}
      <Section>
        <div className="text-center mb-12">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="block text-caption uppercase tracking-widest text-[#9B7BB8] mb-4"
          >
            Visual Identity
          </motion.span>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="text-h2 font-serif text-charcoal"
          >
            Colors of transformation
          </motion.h2>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="flex flex-wrap justify-center gap-6"
        >
          {['#2D2438', '#9B7BB8', '#C9A8E2', '#E8DFF0', '#F8F5FC'].map((color) => (
            <motion.div key={color} variants={fadeUp} className="text-center">
              <div
                className="w-24 h-24 rounded-full mb-3 shadow-lg"
                style={{ backgroundColor: color }}
              />
              <span className="text-small text-stone uppercase tracking-wider">{color}</span>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Results Section */}
      <Section variant="cream">
        <div className="text-center mb-12">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="block text-caption uppercase tracking-widest text-[#9B7BB8] mb-4"
          >
            The Results
          </motion.span>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="text-h2 font-serif text-charcoal"
          >
            Measurable transformation
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
              <span className="block text-display font-serif text-[#9B7BB8] mb-2">
                {result.metric}
              </span>
              <span className="text-small text-stone uppercase tracking-wider">
                {result.description}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Testimonial Section */}
      <Section>
        <motion.blockquote
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-h2 md:text-h1 font-serif text-charcoal leading-tight mb-8">
            "{testimonial.quote}"
          </p>
          <footer>
            <cite className="not-italic">
              <span className="block text-body font-medium text-charcoal">{testimonial.author}</span>
              <span className="text-small text-stone">{testimonial.role}</span>
            </cite>
          </footer>
        </motion.blockquote>
      </Section>

      {/* Next Project CTA */}
      <Section variant="cream">
        <div className="text-center">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="block text-caption uppercase tracking-widest text-stone mb-4"
          >
            Next Project
          </motion.span>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="text-h1 font-serif text-charcoal mb-8"
          >
            Stillwater Studio
          </motion.h2>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            <ButtonLink href="/work/stillwater-studio" variant="primary">
              View Project
            </ButtonLink>
          </motion.div>
        </div>
      </Section>
    </>
  )
}
