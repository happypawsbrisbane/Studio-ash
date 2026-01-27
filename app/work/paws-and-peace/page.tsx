'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { smoothOut, fadeUp, staggerContainer, viewportSettings } from '@/lib/animations'

const projectInfo = {
  title: 'Paws & Peace',
  tagline: 'Where pets find their happy place',
  category: 'Brand Identity & Digital Experience',
  year: '2024',
  services: ['Brand Strategy', 'Visual Identity', 'Website Design', 'Packaging'],
  duration: '8 weeks',
  industry: 'Pet Care & Wellness',
}

const challenges = [
  'Stand out in a crowded pet care market dominated by clinical, corporate brands',
  'Appeal to premium pet owners who treat their pets as family members',
  'Create a cohesive brand that works across physical locations and digital touchpoints',
  'Balance professionalism with warmth and approachability',
]

const solutions = [
  'Developed a warm, earthy color palette that evokes comfort and natural care',
  'Created a custom wordmark with subtle paw-inspired letterforms',
  'Designed an illustration system featuring gentle, hand-drawn pet portraits',
  'Built a website experience that mirrors the calm, welcoming atmosphere of their facilities',
]

const results = [
  { metric: '340%', description: 'Increase in website bookings' },
  { metric: '89%', description: 'Brand recall in target market' },
  { metric: '4.9★', description: 'Average customer rating' },
  { metric: '12K+', description: 'Social media followers gained' },
]

const testimonial = {
  quote: "Studio Ash transformed our vision into something beyond what we imagined. Our brand now truly reflects the love and care we put into every pet that walks through our doors.",
  author: 'Sarah Mitchell',
  role: 'Founder, Paws & Peace',
}

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1200&h=800&fit=crop',
    alt: 'Happy golden retriever in natural setting',
    span: 'col-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&h=800&fit=crop',
    alt: 'Two dogs playing together',
    span: 'col-span-1 row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&h=400&fit=crop',
    alt: 'Brand stationery mockup',
    span: 'col-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=600&h=400&fit=crop',
    alt: 'Dalmatian portrait',
    span: 'col-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1560807707-8cc77767d783?w=1200&h=600&fit=crop',
    alt: 'Pet spa interior design',
    span: 'col-span-2',
  },
]

export default function PawsAndPeacePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-12 lg:px-20 bg-[#FDF8F3]">
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
                className="block text-caption uppercase tracking-widest text-[#C9A87C] mb-4"
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
                src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1200&h=900&fit=crop"
                alt="Paws & Peace hero image"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="text-h3 font-serif text-charcoal leading-relaxed"
          >
            Paws & Peace came to us with a dream: to create Brisbane's most beloved pet care destination.
            They needed a brand that would resonate with modern pet parents who see their furry friends
            as family members deserving of the very best.
          </motion.p>
        </div>
      </Section>

      {/* Challenge & Solution */}
      <Section variant="cream">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            <span className="block text-caption uppercase tracking-widest text-[#C9A87C] mb-4">The Challenge</span>
            <h2 className="text-h2 font-serif text-charcoal mb-6">Breaking through the noise</h2>
            <ul className="space-y-4">
              {challenges.map((challenge, index) => (
                <li key={index} className="flex items-start gap-3 text-body text-stone">
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
            <h2 className="text-h2 font-serif text-charcoal mb-6">A brand with heart</h2>
            <ul className="space-y-4">
              {solutions.map((solution, index) => (
                <li key={index} className="flex items-start gap-3 text-body text-stone">
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
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className={`relative overflow-hidden rounded-xl ${image.span}`}
            >
              <div className="relative aspect-[4/3]">
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

      {/* Color Palette Section */}
      <Section variant="charcoal">
        <div className="text-center mb-12">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="block text-caption uppercase tracking-widest text-[#C9A87C] mb-4"
          >
            Visual Identity
          </motion.span>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="text-h2 font-serif text-off-white"
          >
            A warm, inviting palette
          </motion.h2>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="flex flex-wrap justify-center gap-6"
        >
          {['#2C2416', '#C9A87C', '#E8DDD1', '#FDF8F3', '#8B7355'].map((color, index) => (
            <motion.div key={color} variants={fadeUp} className="text-center">
              <div
                className="w-24 h-24 rounded-full mb-3 border-4 border-off-white/10"
                style={{ backgroundColor: color }}
              />
              <span className="text-small text-off-white/70 uppercase tracking-wider">{color}</span>
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
            className="block text-caption uppercase tracking-widest text-[#C9A87C] mb-4"
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
            Impact that speaks volumes
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
              <span className="block text-display font-serif text-[#C9A87C] mb-2">
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
            Seva Wellness
          </motion.h2>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            <Button href="/work/seva-wellness" variant="primary">
              View Project
            </Button>
          </motion.div>
        </div>
      </Section>
    </>
  )
}
