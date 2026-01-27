'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { BrowserFrame } from '@/components/ui/BrowserFrame'
import { ButtonLink } from '@/components/ui/Button'

// Bloom Floristry specific animations - romantic, flowing
const romanticFloat = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] }
  },
}

const petalDrift = {
  hidden: { opacity: 0, x: -30, rotate: -3 },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: { duration: 1.3, ease: [0.22, 1, 0.36, 1] }
  },
}

const staggerRomantic = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18, delayChildren: 0.12 },
  },
}

// Brand colors - Romantic Editorial Floral Palette
const colors = {
  blush: '#F5E6E0',
  burgundy: '#722F37',
  sage: '#9CAF88',
  gold: '#C5A572',
  cream: '#FDFBF9',
  deepRose: '#8B4854',
  ivory: '#FAF8F5',
}

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
  'Developed an elegant, romantic identity that honors the brand\'s heritage',
  'Created a rich, warm palette inspired by dried florals and golden hour light',
  'Designed custom botanical illustrations as signature brand elements',
  'Crafted luxury packaging that becomes part of the gift experience',
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
  role: 'Owner & Lead Florist',
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
    description: 'A pairing of elegant serif for headlines with a refined sans-serif for body text creates a balance of romance and readability.',
  },
  {
    title: 'Illustration',
    description: 'Custom botanical line drawings add an artisanal, hand-crafted feel that celebrates the natural beauty of each stem.',
  },
  {
    title: 'Photography',
    description: 'A warm, golden-hour aesthetic with soft focus and natural light that evokes emotion and timeless elegance.',
  },
]

export default function BloomFloristryPage() {
  return (
    <div style={{ backgroundColor: colors.cream }}>
      {/* Hero Section - Romantic, Editorial Layout */}
      <section className="min-h-screen relative overflow-hidden">
        {/* Soft gradient background */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${colors.blush} 0%, ${colors.cream} 40%, ${colors.ivory} 100%)`,
          }}
        />

        {/* Decorative botanical elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-20 right-10 w-[300px] h-[300px] rounded-full blur-3xl opacity-30"
            style={{ backgroundColor: colors.sage }}
          />
          <div
            className="absolute bottom-40 left-20 w-[200px] h-[200px] rounded-full blur-3xl opacity-20"
            style={{ backgroundColor: colors.deepRose }}
          />
        </div>

        <div className="container-wide px-6 md:px-12 lg:px-20 pt-32 pb-20 md:pt-40 md:pb-32 relative z-10">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <Link
              href="/work"
              className="inline-flex items-center gap-3 hover:gap-4 transition-all group"
              style={{ color: colors.burgundy }}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              <span className="text-sm italic tracking-wide">Return to Work</span>
            </Link>
          </motion.div>

          {/* Editorial two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left - Staggered text */}
            <div className="lg:col-span-5 lg:pr-8">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="block text-xs tracking-[0.25em] uppercase mb-8"
                style={{ color: colors.sage }}
              >
                {projectInfo.category}
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-5xl md:text-6xl lg:text-7xl font-serif mb-6 leading-[1.05]"
                style={{ color: colors.burgundy }}
              >
                <span className="block">Bloom</span>
                <span className="block italic font-light" style={{ color: colors.deepRose }}>Floristry</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-lg md:text-xl font-serif italic mb-12"
                style={{ color: colors.gold }}
              >
                "{projectInfo.tagline}"
              </motion.p>

              {/* Decorative divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="w-20 h-[1px] origin-left mb-8"
                style={{ backgroundColor: colors.gold }}
              />

              {/* Project details in elegant list */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="space-y-4"
              >
                {[
                  { label: 'Year', value: projectInfo.year },
                  { label: 'Duration', value: projectInfo.duration },
                  { label: 'Industry', value: projectInfo.industry },
                ].map((item) => (
                  <div key={item.label} className="flex items-baseline gap-4">
                    <span className="text-xs uppercase tracking-wider w-20" style={{ color: colors.sage }}>
                      {item.label}
                    </span>
                    <span className="text-sm" style={{ color: colors.burgundy }}>{item.value}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right - Overlapping images */}
            <div className="lg:col-span-7 relative">
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, delay: 0.3 }}
                className="relative"
              >
                {/* Main image */}
                <div
                  className="relative aspect-[3/4] rounded-tl-[100px] rounded-br-[100px] overflow-hidden"
                  style={{ boxShadow: `30px 30px 60px ${colors.burgundy}15` }}
                >
                  <Image
                    src="https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=800&h=1067&fit=crop"
                    alt="Bloom Floristry hero"
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Soft romantic overlay */}
                  <div
                    className="absolute inset-0"
                    style={{ background: `linear-gradient(to bottom, ${colors.burgundy}05, ${colors.burgundy}10)` }}
                  />
                </div>

                {/* Floating accent image */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.6 }}
                  className="absolute -bottom-8 -left-8 w-40 h-48 rounded-2xl overflow-hidden border-4 border-white shadow-xl hidden lg:block"
                >
                  <Image
                    src={galleryImages[1].src}
                    alt="Wedding bouquet accent"
                    fill
                    className="object-cover"
                  />
                </motion.div>

                {/* Gold accent element */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="absolute -top-4 -right-4 w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: colors.gold }}
                >
                  <span className="text-white text-2xl">✿</span>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview - Romantic editorial */}
      <section
        className="py-32 md:py-40 px-6 md:px-12 lg:px-20 relative"
        style={{ backgroundColor: colors.ivory }}
      >
        <div className="container-wide">
          <motion.div
            variants={romanticFloat}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="block text-8xl mb-6" style={{ color: colors.blush }}>"</span>
            <p
              className="text-2xl md:text-3xl font-serif leading-[1.7] italic"
              style={{ color: colors.burgundy }}
            >
              For 15 years, Bloom Floristry has been creating stunning arrangements for Brisbane's
              most memorable moments. When they came to us, they needed a brand refresh that would
              attract a new generation of clients while honoring their <em className="not-italic" style={{ color: colors.deepRose }}>established reputation</em>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Full-width Editorial Image */}
      <section className="relative">
        <motion.div
          variants={petalDrift}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative aspect-[21/9]"
        >
          <Image
            src="https://images.unsplash.com/photo-1469259943454-aa100abba749?w=2000&h=857&fit=crop"
            alt="Romantic floral tablescape"
            fill
            className="object-cover"
          />
          {/* Romantic gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to right, ${colors.burgundy}40, transparent 50%, ${colors.blush}30)`,
            }}
          />
        </motion.div>
      </section>

      {/* Live Website Preview */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20" style={{ backgroundColor: colors.blush }}>
        <div className="container-wide">
          <div className="text-center mb-16">
            <motion.span
              variants={romanticFloat}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="block text-xs tracking-[0.25em] uppercase mb-6"
              style={{ color: colors.sage }}
            >
              Live Website
            </motion.span>
            <motion.h2
              variants={romanticFloat}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-serif italic"
              style={{ color: colors.burgundy }}
            >
              Experience the design
            </motion.h2>
          </div>

          <motion.div
            variants={romanticFloat}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden"
            style={{ boxShadow: `0 40px 100px -40px ${colors.burgundy}30` }}
          >
            <BrowserFrame
              url={projectInfo.liveUrl}
              displayUrl={projectInfo.displayUrl}
              fallbackImage="https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=1200&h=750&fit=crop"
              title={projectInfo.title}
            />
          </motion.div>
        </div>
      </section>

      {/* Brand Elements - Three column editorial */}
      <section className="py-32 md:py-40 px-6 md:px-12 lg:px-20" style={{ backgroundColor: colors.cream }}>
        <div className="container-wide">
          <div className="text-center mb-20">
            <motion.span
              variants={romanticFloat}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="block text-xs tracking-[0.25em] uppercase mb-6"
              style={{ color: colors.sage }}
            >
              Brand Elements
            </motion.span>
            <motion.h2
              variants={romanticFloat}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-serif italic"
              style={{ color: colors.burgundy }}
            >
              The details that matter
            </motion.h2>
          </div>

          <motion.div
            variants={staggerRomantic}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            {brandElements.map((element, index) => (
              <motion.div
                key={element.title}
                variants={romanticFloat}
                className="text-center p-8 rounded-3xl"
                style={{ backgroundColor: colors.ivory }}
              >
                <span
                  className="block text-5xl font-serif italic mb-6"
                  style={{ color: colors.blush }}
                >
                  0{index + 1}
                </span>
                <h3
                  className="text-xl font-serif mb-4"
                  style={{ color: colors.burgundy }}
                >
                  {element.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: colors.deepRose }}>
                  {element.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Challenge & Solution - Romantic dark section */}
      <section style={{ backgroundColor: colors.burgundy }}>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Challenge */}
          <div className="py-24 md:py-32 px-6 md:px-12 lg:px-20 border-b lg:border-b-0 lg:border-r border-white/10">
            <motion.div
              variants={romanticFloat}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <span
                className="inline-block px-4 py-2 rounded-full text-xs tracking-[0.2em] uppercase mb-8"
                style={{ backgroundColor: `${colors.gold}20`, color: colors.gold }}
              >
                The Challenge
              </span>
              <h2 className="text-3xl md:text-4xl font-serif italic text-white mb-10">
                Honoring heritage
              </h2>
              <ul className="space-y-6">
                {challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-5">
                    <span
                      className="text-sm font-serif italic mt-0.5"
                      style={{ color: colors.gold }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="text-base text-white/80 leading-relaxed">{challenge}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Solution */}
          <div className="py-24 md:py-32 px-6 md:px-12 lg:px-20">
            <motion.div
              variants={romanticFloat}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <span
                className="inline-block px-4 py-2 rounded-full text-xs tracking-[0.2em] uppercase mb-8"
                style={{ backgroundColor: `${colors.sage}30`, color: colors.sage }}
              >
                The Solution
              </span>
              <h2 className="text-3xl md:text-4xl font-serif italic text-white mb-10">
                Timeless elegance
              </h2>
              <ul className="space-y-6">
                {solutions.map((solution, index) => (
                  <li key={index} className="flex items-start gap-5">
                    <span
                      className="text-sm font-serif italic mt-0.5"
                      style={{ color: colors.sage }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="text-base text-white/80 leading-relaxed">{solution}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery - Asymmetric romantic grid */}
      <section className="py-32 md:py-40 px-6 md:px-12 lg:px-20" style={{ backgroundColor: colors.ivory }}>
        <div className="container-wide">
          <motion.div
            variants={staggerRomantic}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-12 gap-4 md:gap-6"
          >
            {/* Large feature image */}
            <motion.div variants={petalDrift} className="col-span-12 md:col-span-7">
              <div
                className="relative aspect-[4/5] rounded-tl-[60px] rounded-br-[60px] overflow-hidden"
                style={{ boxShadow: `20px 20px 50px ${colors.burgundy}10` }}
              >
                <Image
                  src={galleryImages[0].src}
                  alt={galleryImages[0].alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-1000"
                />
              </div>
            </motion.div>

            {/* Stacked images */}
            <div className="col-span-12 md:col-span-5 space-y-4 md:space-y-6">
              <motion.div variants={petalDrift}>
                <div
                  className="relative aspect-[4/3] rounded-3xl overflow-hidden"
                  style={{ boxShadow: `20px 20px 50px ${colors.burgundy}10` }}
                >
                  <Image
                    src={galleryImages[2].src}
                    alt={galleryImages[2].alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-1000"
                  />
                </div>
              </motion.div>
              <motion.div variants={petalDrift}>
                <div
                  className="relative aspect-square rounded-3xl overflow-hidden"
                  style={{ boxShadow: `20px 20px 50px ${colors.burgundy}10` }}
                >
                  <Image
                    src={galleryImages[3].src}
                    alt={galleryImages[3].alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-1000"
                  />
                </div>
              </motion.div>
            </div>

            {/* Bottom wide image */}
            <motion.div variants={petalDrift} className="col-span-12">
              <div
                className="relative aspect-[21/9] rounded-3xl overflow-hidden"
                style={{ boxShadow: `20px 20px 50px ${colors.burgundy}10` }}
              >
                <Image
                  src={galleryImages[4].src}
                  alt={galleryImages[4].alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-1000"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Color Palette - Elegant display */}
      <section className="py-32 md:py-40 px-6 md:px-12 lg:px-20" style={{ backgroundColor: colors.blush }}>
        <div className="container-wide">
          <div className="text-center mb-20">
            <motion.span
              variants={romanticFloat}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="block text-xs tracking-[0.25em] uppercase mb-6"
              style={{ color: colors.sage }}
            >
              Visual Identity
            </motion.span>
            <motion.h2
              variants={romanticFloat}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-serif italic"
              style={{ color: colors.burgundy }}
            >
              A palette of warmth
            </motion.h2>
          </div>

          <motion.div
            variants={staggerRomantic}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-8 md:gap-12"
          >
            {[
              { color: colors.burgundy, name: 'Burgundy', hex: '#722F37' },
              { color: colors.deepRose, name: 'Deep Rose', hex: '#8B4854' },
              { color: colors.gold, name: 'Gold', hex: '#C5A572' },
              { color: colors.sage, name: 'Sage', hex: '#9CAF88' },
              { color: colors.blush, name: 'Blush', hex: '#F5E6E0' },
            ].map((item) => (
              <motion.div key={item.hex} variants={romanticFloat} className="text-center">
                <div
                  className="w-24 h-24 md:w-28 md:h-28 rounded-full mb-5 border-4 border-white"
                  style={{
                    backgroundColor: item.color,
                    boxShadow: `0 10px 30px -10px ${item.color}60`,
                  }}
                />
                <span className="block text-sm font-serif italic mb-1" style={{ color: colors.burgundy }}>
                  {item.name}
                </span>
                <span className="text-xs uppercase tracking-wider" style={{ color: colors.sage }}>
                  {item.hex}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Results - Elegant serif numbers */}
      <section className="py-32 md:py-40 px-6 md:px-12 lg:px-20" style={{ backgroundColor: colors.cream }}>
        <div className="container-wide">
          <div className="text-center mb-20">
            <motion.span
              variants={romanticFloat}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="block text-xs tracking-[0.25em] uppercase mb-6"
              style={{ color: colors.sage }}
            >
              The Results
            </motion.span>
            <motion.h2
              variants={romanticFloat}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-serif italic"
              style={{ color: colors.burgundy }}
            >
              Blooming success
            </motion.h2>
          </div>

          <motion.div
            variants={staggerRomantic}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {results.map((result) => (
              <motion.div
                key={result.description}
                variants={romanticFloat}
                className="text-center p-8 rounded-3xl"
                style={{ backgroundColor: colors.ivory }}
              >
                <span
                  className="block text-4xl md:text-5xl font-serif italic mb-4"
                  style={{ color: colors.gold }}
                >
                  {result.metric}
                </span>
                <span
                  className="text-xs uppercase tracking-wider"
                  style={{ color: colors.sage }}
                >
                  {result.description}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonial - Romantic quote */}
      <section
        className="py-32 md:py-40 px-6 md:px-12 lg:px-20 relative overflow-hidden"
        style={{ backgroundColor: colors.ivory }}
      >
        {/* Decorative elements */}
        <div
          className="absolute top-20 left-10 w-32 h-32 rounded-full opacity-30 blur-2xl"
          style={{ backgroundColor: colors.blush }}
        />
        <div
          className="absolute bottom-20 right-10 w-40 h-40 rounded-full opacity-20 blur-2xl"
          style={{ backgroundColor: colors.sage }}
        />

        <div className="container-wide relative z-10">
          <motion.blockquote
            variants={romanticFloat}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="block text-7xl font-serif mb-8" style={{ color: colors.blush }}>"</span>
            <p
              className="text-2xl md:text-3xl lg:text-4xl font-serif italic leading-[1.5] mb-12"
              style={{ color: colors.burgundy }}
            >
              {testimonial.quote}
            </p>
            <footer className="flex flex-col items-center gap-4">
              <div
                className="w-12 h-[1px]"
                style={{ backgroundColor: colors.gold }}
              />
              <cite className="not-italic">
                <span className="block text-base font-serif" style={{ color: colors.burgundy }}>
                  {testimonial.author}
                </span>
                <span className="text-sm italic" style={{ color: colors.sage }}>
                  {testimonial.role}
                </span>
              </cite>
            </footer>
          </motion.blockquote>
        </div>
      </section>

      {/* Next Project CTA */}
      <section className="py-32 md:py-40 px-6 md:px-12 lg:px-20" style={{ backgroundColor: colors.blush }}>
        <div className="container-wide">
          <div className="text-center">
            <motion.span
              variants={romanticFloat}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="block text-xs tracking-[0.25em] uppercase mb-6"
              style={{ color: colors.sage }}
            >
              Next Project
            </motion.span>
            <motion.h2
              variants={romanticFloat}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-5xl md:text-6xl lg:text-7xl font-serif italic mb-12"
              style={{ color: colors.burgundy }}
            >
              Paws & Peace
            </motion.h2>
            <motion.div
              variants={romanticFloat}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <ButtonLink
                href="/work/paws-and-peace"
                variant="primary"
                className="!rounded-full !px-12 !py-5 !text-sm !tracking-wider"
                style={{ backgroundColor: colors.burgundy }}
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
