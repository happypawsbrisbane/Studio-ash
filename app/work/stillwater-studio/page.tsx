'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { BrowserFrame } from '@/components/ui/BrowserFrame'
import { ButtonLink } from '@/components/ui/Button'

// Stillwater Studio specific animations - precise, architectural
const architecturalReveal = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.215, 0.61, 0.355, 1] }
  },
}

const lineReveal = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 1.2, ease: [0.215, 0.61, 0.355, 1] }
  },
}

const staggerPrecise = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

// Brand colors - Minimal Architectural Palette
const colors = {
  black: '#000000',
  white: '#FFFFFF',
  grey: '#808080',
  lightGrey: '#E5E5E5',
  warmAccent: '#F5F5DC',
  offWhite: '#FAFAFA',
}

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
  'Implemented a monochromatic palette that lets the architecture speak',
  'Directed a photography style that captures the human element within spaces',
]

const results = [
  { metric: '425%', description: 'Website enquiry increase' },
  { metric: '3x', description: 'Average project value growth' },
  { metric: '18', description: 'International design awards' },
  { metric: '94%', description: 'Client referral rate' },
]

const testimonial = {
  quote: "Studio Ash understood that our brand needed to feel like one of our buildings — considered, refined, and deeply connected to its environment.",
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
  { number: '01', title: 'Discovery', description: "Deep dive into the studio's philosophy and competitive landscape." },
  { number: '02', title: 'Strategy', description: 'Defining brand positioning, voice, and visual direction.' },
  { number: '03', title: 'Design', description: 'Crafting the identity system and key touchpoints.' },
  { number: '04', title: 'Refinement', description: 'Iterating based on feedback and preparing for launch.' },
]

export default function StillwaterStudioPage() {
  return (
    <div className="bg-white">
      {/* Hero Section - Dramatic, Grid-based */}
      <section className="min-h-screen relative bg-black text-white">
        {/* Grid overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: `linear-gradient(${colors.white} 1px, transparent 1px), linear-gradient(90deg, ${colors.white} 1px, transparent 1px)`,
            backgroundSize: '100px 100px',
          }} />
        </div>

        <div className="container-wide px-6 md:px-12 lg:px-20 pt-32 pb-20 md:pt-40 md:pb-32 relative z-10">
          {/* Back link - minimal */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <Link
              href="/work"
              className="inline-flex items-center gap-4 text-white/60 hover:text-white transition-colors group"
            >
              <span className="w-12 h-[1px] bg-current group-hover:w-16 transition-all" />
              <span className="text-xs uppercase tracking-[0.3em]">Back</span>
            </Link>
          </motion.div>

          <div className="grid grid-cols-12 gap-4 md:gap-8">
            {/* Left - Typography */}
            <div className="col-span-12 lg:col-span-6 flex flex-col justify-end">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xs uppercase tracking-[0.3em] text-white/40 mb-6"
              >
                {projectInfo.category}
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="text-5xl md:text-7xl lg:text-8xl font-light tracking-[-0.02em] mb-8 leading-[0.95]"
              >
                {projectInfo.title.split(' ').map((word, i) => (
                  <span key={i} className="block">{word}</span>
                ))}
              </motion.h1>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.2, delay: 0.5 }}
                className="w-24 h-[1px] bg-white/30 origin-left mb-8"
              />

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg md:text-xl text-white/60 font-light tracking-wide max-w-md"
              >
                {projectInfo.tagline}
              </motion.p>
            </div>

            {/* Right - Image with architectural frame */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="col-span-12 lg:col-span-6 mt-12 lg:mt-0"
            >
              <div className="relative">
                {/* Architectural frame lines */}
                <div className="absolute -top-4 -left-4 w-20 h-20 border-t border-l border-white/20" />
                <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b border-r border-white/20" />

                <div className="aspect-[4/5] relative">
                  <Image
                    src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=1000&fit=crop"
                    alt="Stillwater Studio hero"
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Project info - horizontal strip */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-20 pt-8 border-t border-white/10"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: 'Year', value: projectInfo.year },
                { label: 'Duration', value: projectInfo.duration },
                { label: 'Industry', value: projectInfo.industry },
                { label: 'Services', value: projectInfo.services.slice(0, 2).join(' / ') },
              ].map((item) => (
                <div key={item.label}>
                  <span className="block text-xs uppercase tracking-[0.2em] text-white/30 mb-2">
                    {item.label}
                  </span>
                  <span className="text-sm text-white/80">{item.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview - Dramatic whitespace */}
      <section className="py-40 md:py-56 px-6 md:px-12 lg:px-20 bg-white">
        <div className="container-wide">
          <motion.div
            variants={architecturalReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="max-w-4xl"
          >
            <p className="text-3xl md:text-4xl lg:text-5xl font-light leading-[1.3] tracking-tight text-black">
              Stillwater Studio is an award-winning architecture practice known for creating spaces
              that <em className="font-serif italic">harmonize</em> with their natural surroundings.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Full-width Image - No rounded corners */}
      <section className="relative">
        <motion.div
          variants={architecturalReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="aspect-[21/9] relative"
        >
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=2000&h=857&fit=crop"
            alt="Stillwater Studio project"
            fill
            className="object-cover grayscale"
          />
        </motion.div>
      </section>

      {/* Live Website Preview */}
      <section className="py-32 md:py-40 px-6 md:px-12 lg:px-20 bg-[#FAFAFA]">
        <div className="container-wide">
          <div className="mb-20">
            <motion.span
              variants={architecturalReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="block text-xs uppercase tracking-[0.3em] text-black/40 mb-4"
            >
              Live Website
            </motion.span>
            <motion.h2
              variants={architecturalReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-light tracking-tight text-black"
            >
              Experience the design
            </motion.h2>
          </div>

          <motion.div
            variants={architecturalReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="border border-black/10"
          >
            <BrowserFrame
              url={projectInfo.liveUrl}
              displayUrl={projectInfo.displayUrl}
              fallbackImage="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&h=750&fit=crop"
              title={projectInfo.title}
            />
          </motion.div>
        </div>
      </section>

      {/* Process Section - Grid layout */}
      <section className="py-32 md:py-40 px-6 md:px-12 lg:px-20 bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-4 mb-12 lg:mb-0">
              <motion.span
                variants={architecturalReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="block text-xs uppercase tracking-[0.3em] text-black/40 mb-4"
              >
                Our Process
              </motion.span>
              <motion.h2
                variants={architecturalReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-light tracking-tight text-black"
              >
                A considered<br />approach
              </motion.h2>
            </div>

            <motion.div
              variants={staggerPrecise}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="col-span-12 lg:col-span-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-l border-black/10">
                {processSteps.map((step) => (
                  <motion.div
                    key={step.number}
                    variants={architecturalReveal}
                    className="p-8 md:p-12 border-b border-r border-black/10"
                  >
                    <span className="block text-6xl font-light text-black/10 mb-6">{step.number}</span>
                    <h3 className="text-lg font-medium text-black mb-3">{step.title}</h3>
                    <p className="text-sm text-black/60 leading-relaxed">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenge & Solution - Stark contrast */}
      <section className="bg-black text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Challenge */}
          <div className="py-24 md:py-32 px-6 md:px-12 lg:px-20 border-b lg:border-b-0 lg:border-r border-white/10">
            <motion.div
              variants={architecturalReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <span className="block text-xs uppercase tracking-[0.3em] text-white/40 mb-8">
                The Challenge
              </span>
              <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-12">
                Elevating perception
              </h2>
              <ul className="space-y-6">
                {challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-6">
                    <span className="text-xs text-white/30 mt-1">0{index + 1}</span>
                    <span className="text-base text-white/70 leading-relaxed">{challenge}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Solution */}
          <div className="py-24 md:py-32 px-6 md:px-12 lg:px-20">
            <motion.div
              variants={architecturalReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <span className="block text-xs uppercase tracking-[0.3em] text-white/40 mb-8">
                The Solution
              </span>
              <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-12">
                Refined simplicity
              </h2>
              <ul className="space-y-6">
                {solutions.map((solution, index) => (
                  <li key={index} className="flex items-start gap-6">
                    <span className="text-xs text-white/30 mt-1">0{index + 1}</span>
                    <span className="text-base text-white/70 leading-relaxed">{solution}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery - Precise grid */}
      <section className="py-32 md:py-40 px-6 md:px-12 lg:px-20 bg-white">
        <div className="container-wide">
          <motion.div
            variants={staggerPrecise}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-12 gap-2"
          >
            <motion.div variants={architecturalReveal} className="col-span-12 md:col-span-8">
              <div className="aspect-[16/10] relative">
                <Image
                  src={galleryImages[0].src}
                  alt={galleryImages[0].alt}
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </motion.div>
            <motion.div variants={architecturalReveal} className="col-span-12 md:col-span-4">
              <div className="aspect-[4/5] md:h-full relative">
                <Image
                  src={galleryImages[1].src}
                  alt={galleryImages[1].alt}
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </motion.div>
            <motion.div variants={architecturalReveal} className="col-span-6">
              <div className="aspect-[4/3] relative">
                <Image
                  src={galleryImages[2].src}
                  alt={galleryImages[2].alt}
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </motion.div>
            <motion.div variants={architecturalReveal} className="col-span-6">
              <div className="aspect-[4/3] relative">
                <Image
                  src={galleryImages[3].src}
                  alt={galleryImages[3].alt}
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Color Palette - Minimal display */}
      <section className="py-32 md:py-40 px-6 md:px-12 lg:px-20 bg-[#FAFAFA]">
        <div className="container-wide">
          <div className="grid grid-cols-12 gap-8 items-end">
            <div className="col-span-12 lg:col-span-4 mb-12 lg:mb-0">
              <motion.span
                variants={architecturalReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="block text-xs uppercase tracking-[0.3em] text-black/40 mb-4"
              >
                Visual Identity
              </motion.span>
              <motion.h2
                variants={architecturalReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-light tracking-tight text-black"
              >
                Monochromatic<br />precision
              </motion.h2>
            </div>

            <motion.div
              variants={staggerPrecise}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="col-span-12 lg:col-span-8"
            >
              <div className="flex gap-2">
                {[
                  { color: '#000000', name: 'Black' },
                  { color: '#808080', name: 'Grey' },
                  { color: '#E5E5E5', name: 'Light Grey' },
                  { color: '#FFFFFF', name: 'White' },
                  { color: '#F5F5DC', name: 'Warm Accent' },
                ].map((item, index) => (
                  <motion.div
                    key={item.color}
                    variants={architecturalReveal}
                    className="flex-1"
                  >
                    <div
                      className="aspect-[3/4] mb-4 border border-black/5"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="block text-xs text-black/40 uppercase tracking-wider">{item.name}</span>
                    <span className="block text-xs text-black/20 mt-1">{item.color}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results - Bold numbers */}
      <section className="py-32 md:py-40 px-6 md:px-12 lg:px-20 bg-white border-t border-black/10">
        <div className="container-wide">
          <div className="mb-20">
            <motion.span
              variants={architecturalReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="block text-xs uppercase tracking-[0.3em] text-black/40 mb-4"
            >
              The Results
            </motion.span>
            <motion.h2
              variants={architecturalReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-light tracking-tight text-black"
            >
              Architectural impact
            </motion.h2>
          </div>

          <motion.div
            variants={staggerPrecise}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4"
          >
            {results.map((result) => (
              <motion.div
                key={result.description}
                variants={architecturalReveal}
                className="border-l border-black/10 pl-6"
              >
                <span className="block text-5xl md:text-6xl font-light text-black mb-4">
                  {result.metric}
                </span>
                <span className="text-xs uppercase tracking-wider text-black/40">
                  {result.description}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonial - Clean, centered */}
      <section className="py-40 md:py-56 px-6 md:px-12 lg:px-20 bg-[#FAFAFA]">
        <div className="container-wide">
          <motion.blockquote
            variants={architecturalReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <p className="text-2xl md:text-3xl lg:text-4xl font-light leading-[1.4] tracking-tight text-black mb-12">
              "{testimonial.quote}"
            </p>
            <footer className="flex items-center gap-6">
              <div className="w-16 h-[1px] bg-black/20" />
              <cite className="not-italic">
                <span className="block text-sm font-medium text-black">{testimonial.author}</span>
                <span className="text-xs text-black/40">{testimonial.role}</span>
              </cite>
            </footer>
          </motion.blockquote>
        </div>
      </section>

      {/* Next Project CTA */}
      <section className="py-32 md:py-40 px-6 md:px-12 lg:px-20 bg-white border-t border-black/10">
        <div className="container-wide">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between">
            <div>
              <motion.span
                variants={architecturalReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="block text-xs uppercase tracking-[0.3em] text-black/40 mb-4"
              >
                Next Project
              </motion.span>
              <motion.h2
                variants={architecturalReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-black"
              >
                Bloom Floristry
              </motion.h2>
            </div>
            <motion.div
              variants={architecturalReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-8 lg:mt-0"
            >
              <ButtonLink
                href="/work/bloom-floristry"
                variant="primary"
                className="!bg-black !text-white !px-12 !py-5 !text-xs !tracking-[0.2em] !uppercase hover:!bg-black/80"
              >
                View Project
              </ButtonLink>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
