'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { ButtonLink } from '@/components/ui/Button'
import { BrowserFrame } from '@/components/ui/BrowserFrame'
import { smoothOut, fadeUp, staggerContainer, viewportSettings } from '@/lib/animations'

const projectInfo = {
  title: 'Bloom Floristry',
  tagline: 'Where nature tells your story',
  category: 'Complete Rebrand',
  year: '2023',
  services: ['Brand Strategy', 'Visual Identity', 'Packaging Design', 'Website Design'],
  liveUrl: undefined,
  displayUrl: 'www.bloomfloristry.com.au',
  duration: '10 weeks',
  industry: 'Floral Design & Events',
}

const challenges = [
  'Refresh an established 15-year-old brand without losing loyal customers',
  'Appeal to high-end wedding and event clientele',
  'Stand out in a saturated market of "pretty" floral brands',
  'Create packaging that enhances the unboxing experience',
]

const solutions = [
  'Crafted a refined cream-and-charcoal identity with generous whitespace',
  'Commissioned custom botanical line drawings as signature brand motifs',
  'Paired an elegant serif wordmark with restrained, minimal layout principles',
  'Designed packaging and collateral that lets the flowers remain the hero',
]

const results = [
  { metric: '200%', description: 'Increase in wedding enquiries' },
  { metric: '156%', description: 'Growth in average order value' },
  { metric: '40%', description: 'Increase in corporate accounts' },
  { metric: '12K', description: 'Instagram followers gained' },
]

const testimonial = {
  quote: "Studio Ash breathed new life into our brand while respecting everything we'd built over 15 years. Our customers constantly comment on our beautiful new look — it finally matches the quality of our flowers.",
  author: 'Emma Richardson',
  role: 'Owner & Lead Florist, Bloom Floristry',
}

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=1200&h=800&fit=crop',
    alt: 'Elegant floral arrangement',
  },
  {
    src: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=600&h=800&fit=crop',
    alt: 'Wedding bouquet',
  },
  {
    src: 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=600&h=400&fit=crop',
    alt: 'Floral studio workspace',
  },
  {
    src: 'https://images.unsplash.com/photo-1518882605630-8fb7f65e915f?w=600&h=400&fit=crop',
    alt: 'Dried flower arrangement',
  },
  {
    src: 'https://images.unsplash.com/photo-1469259943454-aa100abba749?w=1200&h=600&fit=crop',
    alt: 'Romantic table setting with flowers',
  },
]

const brandElements = [
  {
    title: 'Typography',
    description: 'A clean serif for headlines paired with a minimal sans-serif for body copy — elegant and understated, never loud.',
  },
  {
    title: 'Line Illustration',
    description: 'Delicate botanical line drawings add an artisanal, hand-crafted signature without competing with real florals.',
  },
  {
    title: 'Photography',
    description: 'Natural light, muted tones, and generous negative space. The flowers are always the hero — the brand steps back.',
  },
]

// Minimal, warm palette inspired by the Blom design direction
const accent = '#3D3D3D'     // charcoal — muted accent
const accentSoft = '#8B7D6B' // warm taupe
const heroBg = '#F5F0EB'     // warm cream
const palette = ['#2B2B2B', '#8B7D6B', '#C4B9AB', '#E8E2DA', '#F5F0EB']

export default function BloomFloristryPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-12 lg:px-20" style={{ backgroundColor: heroBg }}>
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
                className="block text-caption uppercase tracking-widest mb-4"
                style={{ color: accentSoft }}
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
                src="https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=1200&h=900&fit=crop"
                alt="Bloom Floristry hero image"
                fill
                className="object-cover"
                priority
              />
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
            className="block text-caption uppercase tracking-widest mb-4"
            style={{ color: accentSoft }}
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
          fallbackImage="https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=1200&h=750&fit=crop"
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
            For 15 years, Bloom Floristry has been creating stunning arrangements for Brisbane&rsquo;s
            most memorable moments. When they came to us, they needed a brand refresh that would
            attract a new generation of clients while honoring their established reputation.
          </motion.p>
        </div>
      </Section>

      {/* Large Image */}
      <section className="px-6 md:px-12 lg:px-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="relative aspect-[21/9] rounded-xl overflow-hidden"
        >
          <Image
            src="https://images.unsplash.com/photo-1469259943454-aa100abba749?w=2000&h=857&fit=crop"
            alt="Romantic floral tablescape"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent" />
        </motion.div>
      </section>

      {/* Brand Elements */}
      <Section>
        <div className="text-center mb-16">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="block text-caption uppercase tracking-widest mb-4"
            style={{ color: accentSoft }}
          >
            Brand Elements
          </motion.span>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="text-h2 font-serif text-charcoal"
          >
            The details that matter
          </motion.h2>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {brandElements.map((element) => (
            <motion.div key={element.title} variants={fadeUp} className="text-center">
              <h3 className="text-h4 font-serif text-charcoal mb-4">{element.title}</h3>
              <div className="w-12 h-px mx-auto mb-4" style={{ backgroundColor: accentSoft }} />
              <p className="text-body text-stone">{element.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Challenge & Solution */}
      <Section variant="dark" className="bg-[#2B2B2B]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            <span className="block text-caption uppercase tracking-widest text-off-white/40 mb-4">The Challenge</span>
            <h2 className="text-h2 font-serif text-off-white mb-6">Honoring heritage</h2>
            <ul className="space-y-4">
              {challenges.map((challenge, index) => (
                <li key={index} className="flex items-start gap-3 text-body text-off-white/80">
                  <span className="w-1.5 h-1.5 mt-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#C4B9AB' }} />
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
            <span className="block text-caption uppercase tracking-widest text-off-white/40 mb-4">The Solution</span>
            <h2 className="text-h2 font-serif text-off-white mb-6">Quiet elegance</h2>
            <ul className="space-y-4">
              {solutions.map((solution, index) => (
                <li key={index} className="flex items-start gap-3 text-body text-off-white/80">
                  <span className="w-1.5 h-1.5 mt-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#C4B9AB' }} />
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
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          <motion.div variants={fadeUp} className="col-span-2 row-span-2">
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={galleryImages[0].src}
                alt={galleryImages[0].alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>
          <motion.div variants={fadeUp} className="col-span-2">
            <div className="relative aspect-[2/1] rounded-xl overflow-hidden">
              <Image
                src={galleryImages[2].src}
                alt={galleryImages[2].alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>
          <motion.div variants={fadeUp}>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={galleryImages[3].src}
                alt={galleryImages[3].alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>
          <motion.div variants={fadeUp}>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={galleryImages[1].src}
                alt={galleryImages[1].alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>
        </motion.div>
      </Section>

      {/* Color Palette Section */}
      <Section variant="cream">
        <div className="text-center mb-12">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="block text-caption uppercase tracking-widest mb-4"
            style={{ color: accentSoft }}
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
            A palette of quiet warmth
          </motion.h2>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="flex flex-wrap justify-center gap-6"
        >
          {palette.map((color) => (
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
      <Section>
        <div className="text-center mb-12">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="block text-caption uppercase tracking-widest mb-4"
            style={{ color: accentSoft }}
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
            Blooming success
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
              <span className="block text-display font-serif mb-2" style={{ color: accent }}>
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
      <Section variant="cream">
        <motion.blockquote
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-h2 md:text-h1 font-serif text-charcoal leading-tight mb-8">
            &ldquo;{testimonial.quote}&rdquo;
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
      <Section>
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
            Artisan Collective
          </motion.h2>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            <ButtonLink href="/work/artisan-collective" variant="primary">
              View Project
            </ButtonLink>
          </motion.div>
        </div>
      </Section>
    </>
  )
}
