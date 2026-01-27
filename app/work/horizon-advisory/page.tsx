'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { ButtonLink } from '@/components/ui/Button'
import { BrowserFrame } from '@/components/ui/BrowserFrame'

// Horizon Advisory - Professional Financial Services Aesthetic
// Deep navy, gold accents, structured grids, authoritative serif
// Sharp corners, thin borders, precision and trust

const colors = {
  deepNavy: '#0A1628',
  navy: '#0F2744',
  midNavy: '#1A3A5C',
  gold: '#C9A227',
  lightGold: '#D4B84A',
  paleGold: '#F5ECD4',
  white: '#FFFFFF',
  offWhite: '#F8F9FA',
  steel: '#4A5568',
  silver: '#94A3B8',
}

// Precision animations
const precisionEase = [0.22, 0.03, 0.26, 1]

const slideIn = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: precisionEase }
  }
}

const slideUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: precisionEase }
  }
}

const scaleReveal = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: precisionEase }
  }
}

const staggerPrecise = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    }
  }
}

const lineExpand = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 1, ease: precisionEase }
  }
}

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
  { metric: '180%', description: 'Lead generation increase' },
  { metric: '$2.4M', description: 'New AUM' },
  { metric: '92%', description: 'Client retention' },
  { metric: '35%', description: 'Demographic growth' },
]

const testimonial = {
  quote: "Studio Ash helped us break free from the stuffy financial advisor stereotype. Our new brand attracts exactly the kind of forward-thinking clients we want to work with.",
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
  { title: 'Wealth Planning', stat: '01' },
  { title: 'Investment Management', stat: '02' },
  { title: 'Estate Planning', stat: '03' },
  { title: 'Tax Strategy', stat: '04' },
]

const brandPillars = [
  { title: 'Trust', value: '100%', subtitle: 'Client confidence' },
  { title: 'Clarity', value: '∞', subtitle: 'Transparent communication' },
  { title: 'Growth', value: '+', subtitle: 'Forward momentum' },
]

export default function HorizonAdvisoryPage() {
  return (
    <div style={{ backgroundColor: colors.white }}>
      {/* Hero Section - Structured Authority */}
      <section
        className="min-h-screen relative overflow-hidden"
        style={{ backgroundColor: colors.deepNavy }}
      >
        {/* Geometric grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke={colors.gold} strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Diagonal gold accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: precisionEase }}
          className="absolute top-0 right-0 w-1/3 h-[1px] origin-right"
          style={{ backgroundColor: colors.gold }}
        />

        <div className="container-wide relative z-10 px-6 md:px-12 lg:px-20 pt-32 pb-20">
          {/* Back navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <Link
              href="/work"
              className="inline-flex items-center gap-3 text-sm tracking-widest uppercase transition-colors"
              style={{ color: colors.silver }}
            >
              <span
                className="w-8 h-[1px]"
                style={{ backgroundColor: colors.gold }}
              />
              Back to Work
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Left column - Text content */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <motion.div
                variants={staggerPrecise}
                initial="hidden"
                animate="visible"
              >
                <motion.div
                  variants={slideIn}
                  className="flex items-center gap-4 mb-8"
                >
                  <span
                    className="text-xs tracking-[0.3em] uppercase"
                    style={{ color: colors.gold }}
                  >
                    {projectInfo.category}
                  </span>
                  <span
                    className="w-12 h-[1px]"
                    style={{ backgroundColor: colors.gold }}
                  />
                  <span
                    className="text-xs tracking-widest"
                    style={{ color: colors.silver }}
                  >
                    {projectInfo.year}
                  </span>
                </motion.div>

                <motion.h1
                  variants={slideUp}
                  className="text-5xl md:text-6xl lg:text-7xl font-serif tracking-tight leading-[0.9] mb-6"
                  style={{ color: colors.white }}
                >
                  {projectInfo.title}
                </motion.h1>

                <motion.div
                  variants={lineExpand}
                  className="w-20 h-[2px] mb-6 origin-left"
                  style={{ backgroundColor: colors.gold }}
                />

                <motion.p
                  variants={slideUp}
                  className="text-xl font-serif italic mb-12"
                  style={{ color: colors.silver }}
                >
                  {projectInfo.tagline}
                </motion.p>

                {/* Project meta - structured grid */}
                <motion.div
                  variants={slideUp}
                  className="grid grid-cols-2 gap-x-8 gap-y-6 pt-8"
                  style={{ borderTop: `1px solid ${colors.midNavy}` }}
                >
                  {[
                    { label: 'Industry', value: projectInfo.industry },
                    { label: 'Duration', value: projectInfo.duration },
                    { label: 'Scope', value: projectInfo.services[0] },
                    { label: 'Focus', value: projectInfo.services[1] },
                  ].map((item) => (
                    <div key={item.label}>
                      <span
                        className="block text-[10px] tracking-[0.2em] uppercase mb-1"
                        style={{ color: colors.steel }}
                      >
                        {item.label}
                      </span>
                      <span
                        className="text-sm"
                        style={{ color: colors.white }}
                      >
                        {item.value}
                      </span>
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            </div>

            {/* Right column - Hero image with structured frame */}
            <motion.div
              variants={scaleReveal}
              initial="hidden"
              animate="visible"
              className="lg:col-span-7 relative"
            >
              {/* Frame decoration */}
              <div
                className="absolute -top-4 -left-4 w-32 h-32 border-t border-l"
                style={{ borderColor: colors.gold }}
              />
              <div
                className="absolute -bottom-4 -right-4 w-32 h-32 border-b border-r"
                style={{ borderColor: colors.gold }}
              />

              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=900&fit=crop"
                  alt="Horizon Advisory brand showcase"
                  fill
                  className="object-cover"
                  priority
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(135deg, ${colors.deepNavy}40 0%, transparent 60%)`
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Live Website Preview */}
      <Section>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12"
        >
          <div className="flex items-center gap-6 mb-6">
            <motion.div
              variants={lineExpand}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="w-16 h-[1px] origin-left"
              style={{ backgroundColor: colors.gold }}
            />
            <span
              className="text-xs tracking-[0.3em] uppercase"
              style={{ color: colors.deepNavy }}
            >
              Live Website
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-serif"
            style={{ color: colors.deepNavy }}
          >
            Digital Presence
          </h2>
        </motion.div>

        <BrowserFrame
          url={projectInfo.liveUrl}
          displayUrl={projectInfo.displayUrl}
          fallbackImage="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=750&fit=crop"
          title={projectInfo.title}
        />
      </Section>

      {/* Overview - Clean typography */}
      <section className="py-24 px-6 md:px-12 lg:px-20">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <motion.div
              variants={slideUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="text-center"
            >
              <div
                className="w-[1px] h-16 mx-auto mb-8"
                style={{ backgroundColor: colors.gold }}
              />
              <p
                className="text-2xl md:text-3xl font-serif leading-relaxed"
                style={{ color: colors.deepNavy }}
              >
                Horizon Advisory is a boutique financial planning firm with a refreshing approach to
                wealth management. They wanted a brand that would attract a new generation of clients
                while honoring the trust and expertise that defines exceptional financial advice.
              </p>
              <div
                className="w-[1px] h-16 mx-auto mt-8"
                style={{ backgroundColor: colors.gold }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brand Pillars - Metric Style */}
      <section
        className="py-24 px-6 md:px-12 lg:px-20"
        style={{ backgroundColor: colors.offWhite }}
      >
        <div className="container-wide">
          <motion.div
            variants={staggerPrecise}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-0"
          >
            {brandPillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                variants={slideUp}
                className="p-12 text-center relative"
                style={{
                  borderRight: index < 2 ? `1px solid ${colors.silver}30` : 'none',
                }}
              >
                <span
                  className="text-6xl md:text-7xl font-serif block mb-4"
                  style={{ color: colors.gold }}
                >
                  {pillar.value}
                </span>
                <h3
                  className="text-lg tracking-widest uppercase mb-2"
                  style={{ color: colors.deepNavy }}
                >
                  {pillar.title}
                </h3>
                <span
                  className="text-sm"
                  style={{ color: colors.steel }}
                >
                  {pillar.subtitle}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Grid - Structured List */}
      <section className="py-24 px-6 md:px-12 lg:px-20">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <motion.div
                variants={slideIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <span
                    className="text-xs tracking-[0.3em] uppercase"
                    style={{ color: colors.gold }}
                  >
                    Services
                  </span>
                  <div
                    className="flex-1 h-[1px]"
                    style={{ backgroundColor: colors.silver + '30' }}
                  />
                </div>
                <h2
                  className="text-4xl md:text-5xl font-serif mb-6"
                  style={{ color: colors.deepNavy }}
                >
                  Comprehensive
                  <br />
                  Advisory
                </h2>
                <p
                  className="text-lg leading-relaxed"
                  style={{ color: colors.steel }}
                >
                  We developed a clear visual system to communicate Horizon's service offerings,
                  making complex financial concepts accessible without sacrificing sophistication.
                </p>
              </motion.div>
            </div>

            <motion.div
              variants={staggerPrecise}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-0"
            >
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  variants={slideUp}
                  className="flex items-center gap-8 py-6 group cursor-default"
                  style={{ borderBottom: `1px solid ${colors.silver}30` }}
                >
                  <span
                    className="text-xs tracking-widest w-8"
                    style={{ color: colors.gold }}
                  >
                    {service.stat}
                  </span>
                  <h4
                    className="text-xl font-serif flex-1 group-hover:translate-x-2 transition-transform duration-300"
                    style={{ color: colors.deepNavy }}
                  >
                    {service.title}
                  </h4>
                  <svg
                    className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke={colors.gold}
                    strokeWidth={1.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenge & Solution - Split Navy Section */}
      <section
        className="py-24 px-6 md:px-12 lg:px-20 relative"
        style={{ backgroundColor: colors.deepNavy }}
      >
        {/* Vertical divider */}
        <div
          className="absolute top-0 bottom-0 left-1/2 w-[1px] hidden lg:block"
          style={{ backgroundColor: colors.midNavy }}
        />

        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Challenge */}
            <motion.div
              variants={slideIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="lg:pr-12"
            >
              <div className="flex items-center gap-4 mb-8">
                <span
                  className="text-xs tracking-[0.3em] uppercase"
                  style={{ color: colors.gold }}
                >
                  Challenge
                </span>
                <div
                  className="flex-1 h-[1px]"
                  style={{ backgroundColor: colors.midNavy }}
                />
              </div>
              <h2
                className="text-3xl md:text-4xl font-serif mb-8"
                style={{ color: colors.white }}
              >
                Breaking the Mold
              </h2>
              <ul className="space-y-4">
                {challenges.map((challenge, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-4 text-base"
                    style={{ color: colors.silver }}
                  >
                    <span
                      className="w-6 h-[1px] mt-3 flex-shrink-0"
                      style={{ backgroundColor: colors.gold }}
                    />
                    {challenge}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Solution */}
            <motion.div
              variants={slideIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="lg:pl-12"
            >
              <div className="flex items-center gap-4 mb-8">
                <span
                  className="text-xs tracking-[0.3em] uppercase"
                  style={{ color: colors.gold }}
                >
                  Solution
                </span>
                <div
                  className="flex-1 h-[1px]"
                  style={{ backgroundColor: colors.midNavy }}
                />
              </div>
              <h2
                className="text-3xl md:text-4xl font-serif mb-8"
                style={{ color: colors.white }}
              >
                Modern Authority
              </h2>
              <ul className="space-y-4">
                {solutions.map((solution, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-4 text-base"
                    style={{ color: colors.silver }}
                  >
                    <span
                      className="w-6 h-[1px] mt-3 flex-shrink-0"
                      style={{ backgroundColor: colors.gold }}
                    />
                    {solution}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery - Clean Grid */}
      <section className="py-24 px-6 md:px-12 lg:px-20">
        <div className="container-wide">
          <motion.div
            variants={staggerPrecise}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-12 gap-4"
          >
            {/* Large image */}
            <motion.div
              variants={scaleReveal}
              className="col-span-12 lg:col-span-8"
            >
              <div className="relative aspect-[16/10] overflow-hidden group">
                <Image
                  src={galleryImages[0].src}
                  alt={galleryImages[0].alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute bottom-0 left-0 right-0 p-6"
                  style={{
                    background: `linear-gradient(to top, ${colors.deepNavy}90, transparent)`
                  }}
                >
                  <span
                    className="text-xs tracking-[0.2em] uppercase"
                    style={{ color: colors.gold }}
                  >
                    Brand Environment
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Tall image */}
            <motion.div
              variants={scaleReveal}
              className="col-span-6 lg:col-span-4 row-span-2"
            >
              <div className="relative h-full min-h-[400px] overflow-hidden group">
                <Image
                  src={galleryImages[1].src}
                  alt={galleryImages[1].alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </motion.div>

            {/* Two smaller images */}
            <motion.div
              variants={scaleReveal}
              className="col-span-6 lg:col-span-4"
            >
              <div className="relative aspect-[4/3] overflow-hidden group">
                <Image
                  src={galleryImages[2].src}
                  alt={galleryImages[2].alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </motion.div>

            <motion.div
              variants={scaleReveal}
              className="col-span-12 lg:col-span-4"
            >
              <div className="relative aspect-[4/3] overflow-hidden group">
                <Image
                  src={galleryImages[3].src}
                  alt={galleryImages[3].alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Color Palette - Structured Swatches */}
      <section
        className="py-24 px-6 md:px-12 lg:px-20"
        style={{ backgroundColor: colors.offWhite }}
      >
        <div className="container-wide">
          <motion.div
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <span
              className="text-xs tracking-[0.3em] uppercase block mb-4"
              style={{ color: colors.gold }}
            >
              Visual System
            </span>
            <h2
              className="text-4xl md:text-5xl font-serif"
              style={{ color: colors.deepNavy }}
            >
              Brand Colors
            </h2>
          </motion.div>

          <motion.div
            variants={staggerPrecise}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-wrap justify-center gap-8"
          >
            {[
              { color: colors.deepNavy, name: 'Deep Navy', hex: '#0A1628' },
              { color: colors.navy, name: 'Navy', hex: '#0F2744' },
              { color: colors.gold, name: 'Gold', hex: '#C9A227' },
              { color: colors.paleGold, name: 'Pale Gold', hex: '#F5ECD4' },
              { color: colors.white, name: 'White', hex: '#FFFFFF' },
            ].map((swatch) => (
              <motion.div
                key={swatch.hex}
                variants={slideUp}
                className="text-center group"
              >
                <div
                  className="w-20 h-20 mb-4 transition-transform duration-300 group-hover:-translate-y-1"
                  style={{
                    backgroundColor: swatch.color,
                    boxShadow: `0 4px 20px ${swatch.color}30`,
                    border: swatch.hex === '#FFFFFF' ? `1px solid ${colors.silver}30` : 'none'
                  }}
                />
                <span
                  className="block text-xs tracking-wider uppercase mb-1"
                  style={{ color: colors.deepNavy }}
                >
                  {swatch.name}
                </span>
                <span
                  className="text-xs"
                  style={{ color: colors.steel }}
                >
                  {swatch.hex}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Results - Big Numbers */}
      <section className="py-24 px-6 md:px-12 lg:px-20">
        <div className="container-wide">
          <motion.div
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <span
              className="text-xs tracking-[0.3em] uppercase block mb-4"
              style={{ color: colors.gold }}
            >
              Impact
            </span>
            <h2
              className="text-4xl md:text-5xl font-serif"
              style={{ color: colors.deepNavy }}
            >
              Measured Results
            </h2>
          </motion.div>

          <motion.div
            variants={staggerPrecise}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {results.map((result) => (
              <motion.div
                key={result.description}
                variants={slideUp}
                className="text-center py-8 relative group"
              >
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-[1px]"
                  style={{ backgroundColor: colors.gold }}
                />
                <span
                  className="text-4xl md:text-5xl font-serif block mb-3"
                  style={{ color: colors.deepNavy }}
                >
                  {result.metric}
                </span>
                <span
                  className="text-xs tracking-wider uppercase"
                  style={{ color: colors.steel }}
                >
                  {result.description}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonial - Centered Authority */}
      <section
        className="py-32 px-6 md:px-12 lg:px-20 relative"
        style={{ backgroundColor: colors.deepNavy }}
      >
        {/* Corner accents */}
        <div
          className="absolute top-12 left-12 w-16 h-16 border-t border-l"
          style={{ borderColor: colors.gold + '40' }}
        />
        <div
          className="absolute bottom-12 right-12 w-16 h-16 border-b border-r"
          style={{ borderColor: colors.gold + '40' }}
        />

        <div className="container-wide max-w-4xl mx-auto relative z-10">
          <motion.blockquote
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center"
          >
            <svg
              className="w-12 h-12 mx-auto mb-8 opacity-40"
              fill={colors.gold}
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
            </svg>
            <p
              className="text-2xl md:text-3xl lg:text-4xl font-serif leading-relaxed mb-10"
              style={{ color: colors.white }}
            >
              "{testimonial.quote}"
            </p>
            <footer>
              <div
                className="w-12 h-[1px] mx-auto mb-6"
                style={{ backgroundColor: colors.gold }}
              />
              <cite className="not-italic">
                <span
                  className="block text-base mb-1"
                  style={{ color: colors.white }}
                >
                  {testimonial.author}
                </span>
                <span
                  className="text-sm"
                  style={{ color: colors.silver }}
                >
                  {testimonial.role}
                </span>
              </cite>
            </footer>
          </motion.blockquote>
        </div>
      </section>

      {/* Next Project CTA */}
      <section className="py-24 px-6 md:px-12 lg:px-20">
        <div className="container-wide">
          <motion.div
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center"
          >
            <span
              className="text-xs tracking-[0.3em] uppercase block mb-4"
              style={{ color: colors.steel }}
            >
              Next Project
            </span>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-serif mb-8"
              style={{ color: colors.deepNavy }}
            >
              Paws & Peace
            </h2>
            <ButtonLink href="/work/paws-and-peace" variant="primary">
              View Project
            </ButtonLink>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
