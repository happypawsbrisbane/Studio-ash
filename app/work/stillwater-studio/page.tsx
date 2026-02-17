'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { ButtonLink } from '@/components/ui/Button'
import { BrowserFrame } from '@/components/ui/BrowserFrame'
import { smoothOut, fadeUp, staggerContainer, viewportSettings } from '@/lib/animations'

const projectInfo = {
  title: 'Stillwater Studio',
  tagline: 'Architecture that breathes',
  category: 'Brand Strategy & Website',
  year: '2023',
  services: ['Brand Strategy', 'Visual Identity', 'Website Design', 'Photography Direction'],
  liveUrl: undefined,
  displayUrl: 'www.stillwaterstudio.com.au',
  duration: '12 weeks',
  industry: 'Architecture & Interior Design',
}

const challenges = [
  'Position as a premium architectural practice without appearing inaccessible',
  'Showcase diverse project types while maintaining brand cohesion',
  'Create a digital experience that matches the quality of their built work',
  'Balance minimalism with warmth and approachability',
]

const solutions = [
  'Developed a refined identity system with carefully curated typography and spacing',
  'Created an editorial-style website with immersive project case studies',
  'Implemented a sophisticated green palette that evokes nature and sustainability',
  'Directed a photography style that captures the human element within spaces',
]

const results = [
  { metric: '425%', description: 'Website enquiry increase' },
  { metric: '3x', description: 'Average project value growth' },
  { metric: '18', description: 'International design awards' },
  { metric: '94%', description: 'Client referral rate' },
]

const testimonial = {
  quote: "HexStudio understood that our brand needed to feel like one of our buildings — considered, refined, and deeply connected to its environment. The result exceeded every expectation.",
  author: 'James & Olivia Ward',
  role: 'Principals, Stillwater Studio',
}

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&h=800&fit=crop',
    alt: 'Modern interior architecture',
  },
  {
    src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=900&fit=crop',
    alt: 'Minimalist staircase design',
  },
  {
    src: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&h=400&fit=crop',
    alt: 'Living space with natural light',
  },
  {
    src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop',
    alt: 'Exterior architectural view',
  },
  {
    src: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1200&h=600&fit=crop',
    alt: 'Kitchen interior design',
  },
]

const processSteps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'Deep dive into the studio\'s philosophy, aspirations, and competitive landscape.',
  },
  {
    number: '02',
    title: 'Strategy',
    description: 'Defining the brand positioning, voice, and visual direction.',
  },
  {
    number: '03',
    title: 'Design',
    description: 'Crafting the identity system, website architecture, and key touchpoints.',
  },
  {
    number: '04',
    title: 'Refinement',
    description: 'Iterating based on feedback and preparing for launch.',
  },
]

export default function StillwaterStudioPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-12 lg:px-20 bg-[#F5F7F6]">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: smoothOut }}
            className="mb-8"
          >
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-subtle hover:text-white transition-colors"
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
                className="block text-caption uppercase tracking-widest text-[#4A7C6F] mb-4"
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
                className="text-h3 font-serif text-subtle italic mb-8"
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
                  <span className="block text-caption uppercase tracking-wider text-subtle mb-1">Year</span>
                  <span className="text-body text-white">{projectInfo.year}</span>
                </div>
                <div>
                  <span className="block text-caption uppercase tracking-wider text-subtle mb-1">Duration</span>
                  <span className="text-body text-white">{projectInfo.duration}</span>
                </div>
                <div>
                  <span className="block text-caption uppercase tracking-wider text-subtle mb-1">Industry</span>
                  <span className="text-body text-white">{projectInfo.industry}</span>
                </div>
                <div>
                  <span className="block text-caption uppercase tracking-wider text-subtle mb-1">Services</span>
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
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&h=900&fit=crop"
                alt="Stillwater Studio hero image"
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
            className="block text-caption uppercase tracking-widest text-[#4A7C6F] mb-4"
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
          fallbackImage="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&h=750&fit=crop"
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
            Stillwater Studio is an award-winning architecture practice known for creating spaces
            that harmonize with their natural surroundings. They approached us to develop a brand
            identity and digital presence that would reflect the quiet sophistication of their work.
          </motion.p>
        </div>
      </Section>

      {/* Full-width Image */}
      <section className="px-6 md:px-12 lg:px-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="relative aspect-[21/9] overflow-hidden"
        >
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=2000&h=857&fit=crop"
            alt="Stillwater Studio project"
            fill
            className="object-cover"
          />
        </motion.div>
      </section>

      {/* Process Section */}
      <Section>
        <div className="text-center mb-16">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="block text-caption uppercase tracking-widest text-[#4A7C6F] mb-4"
          >
            Our Process
          </motion.span>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="text-h2 font-serif text-white"
          >
            A considered approach
          </motion.h2>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {processSteps.map((step) => (
            <motion.div key={step.number} variants={fadeUp} className="relative">
              <span className="block text-[5rem] font-serif text-[#4A7C6F]/10 leading-none mb-4">
                {step.number}
              </span>
              <h3 className="text-h4 font-serif text-white mb-2">{step.title}</h3>
              <p className="text-body text-subtle">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Challenge & Solution */}
      <Section variant="dark" className="bg-[#1C2321]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            <span className="block text-caption uppercase tracking-widest text-[#7BA99A] mb-4">The Challenge</span>
            <h2 className="text-h2 font-serif text-white mb-6">Elevating perception</h2>
            <ul className="space-y-4">
              {challenges.map((challenge, index) => (
                <li key={index} className="flex items-start gap-3 text-body text-white/80">
                  <span className="w-1.5 h-1.5 mt-2 rounded-full bg-[#7BA99A] flex-shrink-0" />
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
            <span className="block text-caption uppercase tracking-widest text-[#7BA99A] mb-4">The Solution</span>
            <h2 className="text-h2 font-serif text-white mb-6">Refined simplicity</h2>
            <ul className="space-y-4">
              {solutions.map((solution, index) => (
                <li key={index} className="flex items-start gap-3 text-body text-white/80">
                  <span className="w-1.5 h-1.5 mt-2 rounded-full bg-[#7BA99A] flex-shrink-0" />
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
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={galleryImages[0].src}
                alt={galleryImages[0].alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>
          <motion.div variants={fadeUp} className="col-span-12 md:col-span-4">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src={galleryImages[1].src}
                alt={galleryImages[1].alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>
          <motion.div variants={fadeUp} className="col-span-6 md:col-span-6">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={galleryImages[2].src}
                alt={galleryImages[2].alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>
          <motion.div variants={fadeUp} className="col-span-6 md:col-span-6">
            <div className="relative aspect-[4/3] overflow-hidden">
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
            className="block text-caption uppercase tracking-widest text-[#4A7C6F] mb-4"
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
            Grounded in nature
          </motion.h2>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="flex flex-wrap justify-center gap-6"
        >
          {['#1C2321', '#4A7C6F', '#7BA99A', '#B5D1C9', '#F5F7F6'].map((color) => (
            <motion.div key={color} variants={fadeUp} className="text-center">
              <div
                className="w-24 h-24 rounded-sm mb-3 shadow-lg"
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
            className="block text-caption uppercase tracking-widest text-[#4A7C6F] mb-4"
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
            Architectural impact
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
              <span className="block text-display font-serif text-[#4A7C6F] mb-2">
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
      <Section variant="elevated">
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
              <span className="text-small text-subtle">{testimonial.role}</span>
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
            Bloom Floristry
          </motion.h2>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            <ButtonLink href="/work/bloom-floristry" variant="primary">
              View Project
            </ButtonLink>
          </motion.div>
        </div>
      </Section>
    </>
  )
}
