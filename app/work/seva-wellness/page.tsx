'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { BrowserFrame } from '@/components/ui/BrowserFrame'
import { ButtonLink } from '@/components/ui/Button'

// Seva Wellness specific animations - ethereal, flowing
const etherealFloat = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
  },
}

const breatheFade = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.4, ease: 'easeOut' }
  },
}

const staggerCalm = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2, delayChildren: 0.15 },
  },
}

// Brand colors - Serene, Spiritual Wellness Palette
const colors = {
  sageGreen: '#A8B5A3',
  softSand: '#E8DFD0',
  deepTeal: '#2B4A4A',
  roseGold: '#C4A484',
  cream: '#FAF8F5',
  mist: '#D4DDD2',
  darkTeal: '#1D3333',
}

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
  'Developed a refined palette symbolizing transformation and tranquility',
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
    <div className="bg-[#FAF8F5]">
      {/* Hero Section - Ethereal, Centered Layout */}
      <section
        className="min-h-screen relative overflow-hidden flex items-center"
        style={{
          background: `linear-gradient(180deg, ${colors.cream} 0%, ${colors.mist}40 50%, ${colors.softSand}30 100%)`,
        }}
      >
        {/* Ethereal gradient orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full blur-3xl opacity-40"
            style={{ background: `radial-gradient(circle, ${colors.sageGreen}50 0%, transparent 70%)` }}
          />
          <div
            className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl opacity-30"
            style={{ background: `radial-gradient(circle, ${colors.roseGold}40 0%, transparent 70%)` }}
          />
        </div>

        <div className="container-wide px-6 md:px-12 lg:px-20 pt-32 pb-20 md:pt-40 md:pb-32 relative z-10 w-full">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute top-32 left-6 md:left-12 lg:left-20"
          >
            <Link
              href="/work"
              className="inline-flex items-center gap-3 text-[#2B4A4A]/70 hover:text-[#2B4A4A] transition-colors group"
            >
              <span className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center group-hover:bg-white transition-all shadow-lg shadow-black/5">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </span>
              <span className="text-sm tracking-wide">Back to Work</span>
            </Link>
          </motion.div>

          {/* Centered content */}
          <div className="text-center max-w-4xl mx-auto pt-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <span
                className="inline-block px-6 py-2 rounded-full text-xs tracking-[0.2em] uppercase mb-8 border"
                style={{ borderColor: `${colors.sageGreen}50`, color: colors.deepTeal }}
              >
                {projectInfo.category}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="text-5xl md:text-7xl lg:text-8xl font-serif mb-6 leading-[1.05] tracking-tight"
              style={{ color: colors.deepTeal }}
            >
              {projectInfo.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-xl md:text-2xl font-serif italic mb-12"
              style={{ color: colors.sageGreen }}
            >
              {projectInfo.tagline}
            </motion.p>

            {/* Floating info pills */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex flex-wrap justify-center gap-4"
            >
              {[
                { label: 'Year', value: projectInfo.year },
                { label: 'Duration', value: projectInfo.duration },
                { label: 'Industry', value: projectInfo.industry },
              ].map((item) => (
                <div
                  key={item.label}
                  className="px-6 py-3 rounded-full bg-white/80 backdrop-blur-md shadow-lg shadow-black/5"
                >
                  <span className="text-xs uppercase tracking-wider mr-2" style={{ color: colors.sageGreen }}>
                    {item.label}:
                  </span>
                  <span className="text-sm" style={{ color: colors.deepTeal }}>
                    {item.value}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Hero Image - Floating card */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="mt-20 max-w-5xl mx-auto"
          >
            <div
              className="relative rounded-3xl overflow-hidden shadow-2xl"
              style={{ boxShadow: `0 40px 100px -30px ${colors.deepTeal}30` }}
            >
              <div className="aspect-[16/9] relative">
                <Image
                  src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=1200&h=675&fit=crop"
                  alt="Seva Wellness hero"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Soft gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{ background: `linear-gradient(to top, ${colors.deepTeal}15, transparent 40%)` }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview - Breathable, Centered */}
      <section
        className="py-32 md:py-40 px-6 md:px-12 lg:px-20"
        style={{ backgroundColor: colors.cream }}
      >
        <div className="container-wide">
          <motion.div
            variants={etherealFloat}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="max-w-3xl mx-auto text-center"
          >
            <p
              className="text-2xl md:text-3xl lg:text-4xl font-serif leading-[1.6] tracking-tight"
              style={{ color: colors.deepTeal }}
            >
              Seva — meaning <em className="not-italic" style={{ color: colors.roseGold }}>"selfless service"</em> in Sanskrit —
              approached us to create a brand identity that would honor their holistic approach to wellness
              while positioning them as Brisbane's premier destination for <em className="not-italic" style={{ color: colors.sageGreen }}>mindful healing</em>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Live Website Preview */}
      <section
        className="py-24 md:py-32 px-6 md:px-12 lg:px-20"
        style={{ backgroundColor: colors.softSand }}
      >
        <div className="container-wide">
          <div className="text-center mb-20">
            <motion.span
              variants={etherealFloat}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="inline-block px-6 py-2 rounded-full text-xs tracking-[0.2em] uppercase mb-6 border"
              style={{ borderColor: `${colors.deepTeal}20`, color: colors.deepTeal }}
            >
              Live Website
            </motion.span>
            <motion.h2
              variants={etherealFloat}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-serif tracking-tight"
              style={{ color: colors.deepTeal }}
            >
              Experience the design
            </motion.h2>
          </div>

          <motion.div
            variants={breatheFade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden"
            style={{ boxShadow: `0 40px 100px -30px ${colors.deepTeal}25` }}
          >
            <BrowserFrame
              url={projectInfo.liveUrl}
              displayUrl={projectInfo.displayUrl}
              fallbackImage="https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=1200&h=750&fit=crop"
              title={projectInfo.title}
            />
          </motion.div>
        </div>
      </section>

      {/* Brand Philosophy */}
      <section
        className="py-32 md:py-40 px-6 md:px-12 lg:px-20"
        style={{ backgroundColor: colors.cream }}
      >
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <motion.div
              variants={etherealFloat}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-5"
            >
              <span
                className="inline-block px-5 py-2 rounded-full text-xs tracking-[0.2em] uppercase mb-8 border"
                style={{ borderColor: `${colors.sageGreen}40`, color: colors.sageGreen }}
              >
                Brand Philosophy
              </span>
              <h2
                className="text-4xl md:text-5xl font-serif mb-6 tracking-tight"
                style={{ color: colors.deepTeal }}
              >
                Rooted in purpose
              </h2>
            </motion.div>

            <motion.div
              variants={etherealFloat}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <p
                className="text-lg md:text-xl leading-relaxed mb-8"
                style={{ color: colors.deepTeal, opacity: 0.8 }}
              >
                The Seva brand needed to embody the delicate balance between ancient wisdom and modern wellness.
                We drew inspiration from the lotus flower — a symbol of purity and enlightenment that rises
                from muddy waters to bloom in pristine beauty.
              </p>
              <p
                className="text-lg md:text-xl leading-relaxed"
                style={{ color: colors.deepTeal, opacity: 0.8 }}
              >
                Every element of the identity was crafted to evoke a sense of calm and transformation,
                from the flowing typography to the soft, ethereal color palette that shifts like
                the colors of dawn.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery - Zen Grid */}
      <section
        className="py-24 md:py-32 px-6 md:px-12 lg:px-20"
        style={{ backgroundColor: colors.mist }}
      >
        <div className="container-wide">
          <motion.div
            variants={staggerCalm}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Top row - single wide image */}
            <motion.div variants={etherealFloat}>
              <div
                className="relative aspect-[21/9] rounded-3xl overflow-hidden"
                style={{ boxShadow: `0 30px 80px -30px ${colors.deepTeal}20` }}
              >
                <Image
                  src={galleryImages[0].src}
                  alt={galleryImages[0].alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-1000"
                />
              </div>
            </motion.div>

            {/* Middle row - two equal images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div variants={etherealFloat}>
                <div
                  className="relative aspect-[4/5] rounded-3xl overflow-hidden"
                  style={{ boxShadow: `0 30px 80px -30px ${colors.deepTeal}20` }}
                >
                  <Image
                    src={galleryImages[1].src}
                    alt={galleryImages[1].alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-1000"
                  />
                </div>
              </motion.div>
              <motion.div variants={etherealFloat}>
                <div
                  className="relative aspect-[4/5] rounded-3xl overflow-hidden"
                  style={{ boxShadow: `0 30px 80px -30px ${colors.deepTeal}20` }}
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

            {/* Bottom row - three images */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <motion.div variants={etherealFloat} className="col-span-2 md:col-span-2">
                <div
                  className="relative aspect-[16/9] rounded-3xl overflow-hidden"
                  style={{ boxShadow: `0 30px 80px -30px ${colors.deepTeal}20` }}
                >
                  <Image
                    src={galleryImages[4].src}
                    alt={galleryImages[4].alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-1000"
                  />
                </div>
              </motion.div>
              <motion.div variants={etherealFloat} className="col-span-2 md:col-span-1">
                <div
                  className="relative aspect-square md:aspect-[9/16] rounded-3xl overflow-hidden"
                  style={{ boxShadow: `0 30px 80px -30px ${colors.deepTeal}20` }}
                >
                  <Image
                    src={galleryImages[2].src}
                    alt={galleryImages[2].alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-1000"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenge & Solution - Calm Cards */}
      <section
        className="py-32 md:py-40 px-6 md:px-12 lg:px-20"
        style={{ backgroundColor: colors.deepTeal }}
      >
        <div className="container-wide">
          <motion.div
            variants={staggerCalm}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
          >
            {/* Challenge */}
            <motion.div
              variants={etherealFloat}
              className="p-10 md:p-14 rounded-3xl"
              style={{ backgroundColor: `${colors.cream}08` }}
            >
              <span
                className="inline-block px-5 py-2 rounded-full text-xs tracking-[0.2em] uppercase mb-8"
                style={{ backgroundColor: `${colors.roseGold}20`, color: colors.roseGold }}
              >
                The Challenge
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-white mb-10 tracking-tight">
                Beyond the ordinary
              </h2>
              <ul className="space-y-6">
                {challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span
                      className="w-2 h-2 mt-2.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: colors.roseGold }}
                    />
                    <span className="text-lg text-white/80 leading-relaxed">{challenge}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Solution */}
            <motion.div
              variants={etherealFloat}
              className="p-10 md:p-14 rounded-3xl"
              style={{ backgroundColor: `${colors.cream}08` }}
            >
              <span
                className="inline-block px-5 py-2 rounded-full text-xs tracking-[0.2em] uppercase mb-8"
                style={{ backgroundColor: `${colors.sageGreen}20`, color: colors.sageGreen }}
              >
                The Solution
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-white mb-10 tracking-tight">
                Elevated serenity
              </h2>
              <ul className="space-y-6">
                {solutions.map((solution, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span
                      className="w-2 h-2 mt-2.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: colors.sageGreen }}
                    />
                    <span className="text-lg text-white/80 leading-relaxed">{solution}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Color Palette - Serene Display */}
      <section
        className="py-32 md:py-40 px-6 md:px-12 lg:px-20"
        style={{ backgroundColor: colors.cream }}
      >
        <div className="container-wide">
          <div className="text-center mb-20">
            <motion.span
              variants={etherealFloat}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="inline-block px-6 py-2 rounded-full text-xs tracking-[0.2em] uppercase mb-6 border"
              style={{ borderColor: `${colors.sageGreen}40`, color: colors.sageGreen }}
            >
              Visual Identity
            </motion.span>
            <motion.h2
              variants={etherealFloat}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-serif tracking-tight"
              style={{ color: colors.deepTeal }}
            >
              Colors of transformation
            </motion.h2>
          </div>

          <motion.div
            variants={staggerCalm}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-10 md:gap-16"
          >
            {[
              { color: colors.deepTeal, name: 'Deep Teal', hex: '#2B4A4A' },
              { color: colors.sageGreen, name: 'Sage Green', hex: '#A8B5A3' },
              { color: colors.roseGold, name: 'Rose Gold', hex: '#C4A484' },
              { color: colors.softSand, name: 'Soft Sand', hex: '#E8DFD0' },
              { color: colors.cream, name: 'Cream', hex: '#FAF8F5' },
            ].map((item) => (
              <motion.div key={item.hex} variants={etherealFloat} className="text-center">
                <div
                  className="w-28 h-28 md:w-32 md:h-32 rounded-full mb-5 border-4"
                  style={{
                    backgroundColor: item.color,
                    borderColor: item.hex === '#FAF8F5' ? `${colors.sageGreen}30` : 'transparent',
                    boxShadow: `0 15px 40px -15px ${item.color}60`,
                  }}
                />
                <span className="block text-sm font-medium mb-1" style={{ color: colors.deepTeal }}>
                  {item.name}
                </span>
                <span className="text-xs uppercase tracking-wider" style={{ color: colors.sageGreen }}>
                  {item.hex}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Results - Floating Cards */}
      <section
        className="py-32 md:py-40 px-6 md:px-12 lg:px-20"
        style={{ backgroundColor: colors.softSand }}
      >
        <div className="container-wide">
          <div className="text-center mb-20">
            <motion.span
              variants={etherealFloat}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="inline-block px-6 py-2 rounded-full text-xs tracking-[0.2em] uppercase mb-6 border"
              style={{ borderColor: `${colors.deepTeal}20`, color: colors.deepTeal }}
            >
              The Results
            </motion.span>
            <motion.h2
              variants={etherealFloat}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-serif tracking-tight"
              style={{ color: colors.deepTeal }}
            >
              Measurable transformation
            </motion.h2>
          </div>

          <motion.div
            variants={staggerCalm}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {results.map((result) => (
              <motion.div
                key={result.description}
                variants={etherealFloat}
                className="p-8 md:p-10 rounded-3xl text-center bg-white"
                style={{ boxShadow: `0 20px 60px -20px ${colors.deepTeal}15` }}
              >
                <span
                  className="block text-4xl md:text-5xl font-serif mb-4"
                  style={{ color: colors.roseGold }}
                >
                  {result.metric}
                </span>
                <span
                  className="text-xs uppercase tracking-wider leading-relaxed"
                  style={{ color: colors.sageGreen }}
                >
                  {result.description}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonial - Serene Quote */}
      <section
        className="py-32 md:py-40 px-6 md:px-12 lg:px-20 relative overflow-hidden"
        style={{ backgroundColor: colors.cream }}
      >
        {/* Subtle gradient orb */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl opacity-20 pointer-events-none"
          style={{ background: `radial-gradient(circle, ${colors.sageGreen} 0%, transparent 70%)` }}
        />

        <div className="container-wide relative z-10">
          <motion.blockquote
            variants={breatheFade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="mb-10">
              <svg
                className="w-16 h-16 mx-auto"
                viewBox="0 0 24 24"
                fill="none"
                style={{ color: colors.roseGold }}
              >
                <path
                  d="M11 7H7.5C6.12 7 5 8.12 5 9.5S6.12 12 7.5 12c.86 0 1.62-.43 2.07-1.09L11 7zm8 0h-3.5c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5c.86 0 1.62-.43 2.07-1.09L19 7z"
                  fill="currentColor"
                  opacity="0.3"
                />
              </svg>
            </div>
            <p
              className="text-2xl md:text-4xl lg:text-5xl font-serif leading-[1.4] tracking-tight mb-12"
              style={{ color: colors.deepTeal }}
            >
              {testimonial.quote}
            </p>
            <footer className="flex flex-col items-center gap-4">
              <div
                className="w-1 h-12 rounded-full"
                style={{ backgroundColor: colors.roseGold }}
              />
              <cite className="not-italic">
                <span className="block text-lg font-medium" style={{ color: colors.deepTeal }}>
                  {testimonial.author}
                </span>
                <span className="text-sm" style={{ color: colors.sageGreen }}>
                  {testimonial.role}
                </span>
              </cite>
            </footer>
          </motion.blockquote>
        </div>
      </section>

      {/* Next Project CTA */}
      <section
        className="py-32 md:py-40 px-6 md:px-12 lg:px-20"
        style={{ backgroundColor: colors.softSand }}
      >
        <div className="container-wide">
          <div className="text-center">
            <motion.span
              variants={etherealFloat}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="block text-xs tracking-[0.2em] uppercase mb-6"
              style={{ color: colors.sageGreen }}
            >
              Next Project
            </motion.span>
            <motion.h2
              variants={etherealFloat}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-4xl md:text-6xl lg:text-7xl font-serif mb-12 tracking-tight"
              style={{ color: colors.deepTeal }}
            >
              Stillwater Studio
            </motion.h2>
            <motion.div
              variants={etherealFloat}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <ButtonLink
                href="/work/stillwater-studio"
                variant="primary"
                className="!rounded-full !px-12 !py-5 !text-sm !tracking-wider"
                style={{ backgroundColor: colors.deepTeal }}
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
