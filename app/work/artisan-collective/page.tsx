'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { ButtonLink } from '@/components/ui/Button'
import { BrowserFrame } from '@/components/ui/BrowserFrame'
import { smoothOut, fadeUp, staggerContainer, viewportSettings } from '@/lib/animations'

const projectInfo = {
  title: 'Artisan Collective',
  tagline: 'Where craft meets community',
  category: 'E-commerce Experience',
  year: '2023',
  services: ['Brand Strategy', 'E-commerce Design', 'Photography Direction', 'Packaging System'],
  liveUrl: undefined,
  displayUrl: 'www.artisancollective.com.au',
  duration: '14 weeks',
  industry: 'Handcrafted Goods & Marketplace',
}

const challenges = [
  'Create a cohesive brand that celebrates diverse artisan styles without overshadowing them',
  'Build an e-commerce experience that feels personal, not transactional',
  'Develop a visual system flexible enough for ceramics, textiles, woodwork, and more',
  'Position as premium while remaining approachable and inclusive',
]

const solutions = [
  'Developed a warm, earthy palette inspired by raw materials and natural textures',
  'Created a storytelling-first approach where each maker\'s journey takes center stage',
  'Designed a modular grid system that adapts to showcase any craft beautifully',
  'Built immersive product pages with process videos and maker interviews',
]

const results = [
  { metric: '320%', description: 'Increase in average session time' },
  { metric: '85+', description: 'Artisan partners onboarded' },
  { metric: '4.8★', description: 'Average customer satisfaction' },
  { metric: '47%', description: 'Repeat purchase rate' },
]

const testimonial = {
  quote: "Studio Ash created something truly special — a digital space that honors the human hands behind every piece. Our makers finally have a platform that tells their stories as beautifully as they deserve.",
  author: 'Mira & Tom Ashworth',
  role: 'Founders, Artisan Collective',
}

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=1200&h=800&fit=crop',
    alt: 'Handcrafted ceramic pottery collection',
  },
  {
    src: 'https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?w=600&h=800&fit=crop',
    alt: 'Artisan at work in pottery studio',
  },
  {
    src: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=600&h=400&fit=crop',
    alt: 'Woven textile details',
  },
  {
    src: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=600&h=400&fit=crop',
    alt: 'Wooden crafted items',
  },
  {
    src: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=1200&h=600&fit=crop',
    alt: 'Curated artisan collection display',
  },
]

const craftCategories = [
  { name: 'Ceramics', count: 24 },
  { name: 'Textiles', count: 18 },
  { name: 'Woodwork', count: 15 },
  { name: 'Jewelry', count: 21 },
  { name: 'Leather', count: 12 },
]

const features = [
  {
    title: 'Maker Stories',
    description: 'Each artisan profile features their journey, philosophy, and creative process through intimate photography and video.',
  },
  {
    title: 'Craft Process',
    description: 'Product pages include behind-the-scenes content showing the skill and time invested in every piece.',
  },
  {
    title: 'Material Tracing',
    description: 'Customers can explore the origins and sustainability of materials used in their chosen pieces.',
  },
]

export default function ArtisanCollectivePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-12 lg:px-20 bg-[#F5F0EB]">
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
                className="block text-caption uppercase tracking-widest text-[#8B6F47] mb-4"
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
              className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=1200&h=900&fit=crop"
                alt="Artisan Collective hero image"
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
            className="block text-caption uppercase tracking-widest text-[#8B6F47] mb-4"
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
          fallbackImage="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=1200&h=750&fit=crop"
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
            Artisan Collective began as a passion project by two former gallery curators who wanted
            to connect Australia's finest craftspeople directly with appreciative buyers. They needed
            a digital platform that would honor the human element behind every handcrafted piece.
          </motion.p>
        </div>
      </Section>

      {/* Craft Categories */}
      <Section variant="cream" className="bg-[#F5F0EB]">
        <div className="text-center mb-12">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="block text-caption uppercase tracking-widest text-[#8B6F47] mb-4"
          >
            Curated Categories
          </motion.span>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="text-h2 font-serif text-charcoal"
          >
            Celebrating every craft
          </motion.h2>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="flex flex-wrap justify-center gap-4"
        >
          {craftCategories.map((category) => (
            <motion.div
              key={category.name}
              variants={fadeUp}
              className="px-8 py-4 bg-white rounded-full border border-[#D4C4B0] hover:border-[#8B6F47] transition-colors"
            >
              <span className="text-body text-charcoal">{category.name}</span>
              <span className="text-small text-stone ml-2">({category.count})</span>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Full-width Image Strip */}
      <section className="px-6 md:px-12 lg:px-20 py-12">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="grid grid-cols-4 gap-4"
        >
          {[
            'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=400&h=500&fit=crop',
            'https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?w=400&h=500&fit=crop',
            'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=400&h=500&fit=crop',
            'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=400&h=500&fit=crop',
          ].map((src, index) => (
            <div key={index} className="relative aspect-[4/5] overflow-hidden rounded-lg">
              <Image
                src={src}
                alt={`Artisan craft ${index + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </motion.div>
      </section>

      {/* Features Section */}
      <Section>
        <div className="text-center mb-16">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="block text-caption uppercase tracking-widest text-[#8B6F47] mb-4"
          >
            Key Features
          </motion.span>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="text-h2 font-serif text-charcoal"
          >
            Designed for connection
          </motion.h2>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {features.map((feature, index) => (
            <motion.div key={feature.title} variants={fadeUp} className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#F5F0EB] flex items-center justify-center">
                <span className="text-h3 font-serif text-[#8B6F47]">{String(index + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="text-h4 font-serif text-charcoal mb-4">{feature.title}</h3>
              <p className="text-body text-stone">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Challenge & Solution */}
      <Section variant="dark" className="bg-[#2C2416]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            <span className="block text-caption uppercase tracking-widest text-[#C9A87C] mb-4">The Challenge</span>
            <h2 className="text-h2 font-serif text-off-white mb-6">Unity in diversity</h2>
            <ul className="space-y-4">
              {challenges.map((challenge, index) => (
                <li key={index} className="flex items-start gap-3 text-body text-off-white/80">
                  <span className="w-1.5 h-1.5 mt-2 rounded-full bg-[#C9A87C] flex-shrink-0" />
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
            <span className="block text-caption uppercase tracking-widest text-[#C9A87C] mb-4">The Solution</span>
            <h2 className="text-h2 font-serif text-off-white mb-6">Stories that sell</h2>
            <ul className="space-y-4">
              {solutions.map((solution, index) => (
                <li key={index} className="flex items-start gap-3 text-body text-off-white/80">
                  <span className="w-1.5 h-1.5 mt-2 rounded-full bg-[#C9A87C] flex-shrink-0" />
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
          <motion.div variants={fadeUp} className="col-span-12 md:col-span-7">
            <div className="relative aspect-[16/10] overflow-hidden rounded-lg">
              <Image
                src={galleryImages[0].src}
                alt={galleryImages[0].alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>
          <motion.div variants={fadeUp} className="col-span-12 md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
              <Image
                src={galleryImages[1].src}
                alt={galleryImages[1].alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>
          <motion.div variants={fadeUp} className="col-span-6 md:col-span-4">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src={galleryImages[2].src}
                alt={galleryImages[2].alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>
          <motion.div variants={fadeUp} className="col-span-6 md:col-span-8">
            <div className="relative aspect-[2/1] overflow-hidden rounded-lg">
              <Image
                src={galleryImages[4].src}
                alt={galleryImages[4].alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>
        </motion.div>
      </Section>

      {/* Color Palette Section */}
      <Section variant="cream" className="bg-[#F5F0EB]">
        <div className="text-center mb-12">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="block text-caption uppercase tracking-widest text-[#8B6F47] mb-4"
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
            Rooted in raw materials
          </motion.h2>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="flex flex-wrap justify-center gap-6"
        >
          {['#2C2416', '#8B6F47', '#C9A87C', '#D4C4B0', '#F5F0EB'].map((color) => (
            <motion.div key={color} variants={fadeUp} className="text-center">
              <div
                className="w-24 h-24 rounded-lg mb-3 shadow-lg"
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
            className="block text-caption uppercase tracking-widest text-[#8B6F47] mb-4"
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
            Handcrafted success
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
              <span className="block text-display font-serif text-[#8B6F47] mb-2">
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
      <Section variant="cream" className="bg-[#F5F0EB]">
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
            Horizon Advisory
          </motion.h2>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            <ButtonLink href="/work/horizon-advisory" variant="primary">
              View Project
            </ButtonLink>
          </motion.div>
        </div>
      </Section>
    </>
  )
}
