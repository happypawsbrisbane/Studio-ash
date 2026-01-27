'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { BrowserFrame } from '@/components/ui/BrowserFrame'
import { ButtonLink } from '@/components/ui/Button'

// Paws & Peace specific animations - softer, more organic
const softFloat = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
  },
}

const gentleFade = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1, ease: 'easeOut' }
  },
}

const staggerSoft = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
}

// Brand colors - Warm, Nurturing Pet Care Palette
const colors = {
  warmTaupe: '#A69080',
  softCream: '#F5F1EB',
  deepMoss: '#4A5240',
  terracotta: '#C4784A',
  darkTaupe: '#6B5D52',
  lightTaupe: '#D4C8BE',
}

const projectInfo = {
  title: 'Paws & Peace',
  tagline: 'Where pets find their happy place',
  category: 'Brand Identity & Digital Experience',
  year: '2024',
  services: ['Brand Strategy', 'Visual Identity', 'Website Design', 'Packaging'],
  duration: '8 weeks',
  industry: 'Pet Care & Wellness',
  liveUrl: undefined,
  displayUrl: 'www.pawsandpeace.com.au',
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
  },
  {
    src: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&h=800&fit=crop',
    alt: 'Two dogs playing together',
  },
  {
    src: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&h=400&fit=crop',
    alt: 'Brand stationery mockup',
  },
  {
    src: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=600&h=400&fit=crop',
    alt: 'Dalmatian portrait',
  },
  {
    src: 'https://images.unsplash.com/photo-1560807707-8cc77767d783?w=1200&h=600&fit=crop',
    alt: 'Pet spa interior design',
  },
]

export default function PawsAndPeacePage() {
  return (
    <div className="bg-[#F5F1EB]">
      {/* Hero Section - Organic, Flowing Layout */}
      <section
        className="min-h-screen relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${colors.softCream} 0%, #EDE6DC 50%, ${colors.lightTaupe}30 100%)`,
        }}
      >
        {/* Subtle organic shapes in background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full opacity-20"
            style={{ background: `radial-gradient(circle, ${colors.warmTaupe}40 0%, transparent 70%)` }}
          />
          <div
            className="absolute -bottom-1/3 -left-1/4 w-[600px] h-[600px] rounded-full opacity-15"
            style={{ background: `radial-gradient(circle, ${colors.terracotta}30 0%, transparent 70%)` }}
          />
        </div>

        <div className="container-wide px-6 md:px-12 lg:px-20 pt-32 pb-20 md:pt-40 md:pb-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <Link
              href="/work"
              className="inline-flex items-center gap-3 text-[#6B5D52] hover:text-[#4A5240] transition-colors group"
            >
              <span className="w-10 h-10 rounded-full bg-white/60 backdrop-blur-sm flex items-center justify-center group-hover:bg-white transition-colors shadow-sm">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </span>
              <span className="text-sm font-medium tracking-wide">Back to Work</span>
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-5 lg:pr-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <span
                  className="inline-block px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase mb-6"
                  style={{ backgroundColor: `${colors.terracotta}20`, color: colors.terracotta }}
                >
                  {projectInfo.category}
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-6xl lg:text-7xl font-serif mb-6 leading-[1.1]"
                style={{ color: colors.darkTaupe }}
              >
                {projectInfo.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-xl md:text-2xl font-serif italic mb-10"
                style={{ color: colors.warmTaupe }}
              >
                {projectInfo.tagline}
              </motion.p>

              {/* Organic info cards */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-wrap gap-3"
              >
                {[
                  { label: 'Year', value: projectInfo.year },
                  { label: 'Duration', value: projectInfo.duration },
                  { label: 'Industry', value: projectInfo.industry },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="px-5 py-3 rounded-2xl bg-white/70 backdrop-blur-sm shadow-sm"
                  >
                    <span className="block text-xs uppercase tracking-wider mb-1" style={{ color: colors.warmTaupe }}>
                      {item.label}
                    </span>
                    <span className="text-sm font-medium" style={{ color: colors.darkTaupe }}>
                      {item.value}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right - Hero Image with organic frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="lg:col-span-7 relative"
            >
              {/* Decorative frame */}
              <div
                className="absolute -inset-4 rounded-[2rem] opacity-30"
                style={{
                  background: `linear-gradient(135deg, ${colors.terracotta}40, ${colors.warmTaupe}40)`,
                  transform: 'rotate(2deg)',
                }}
              />
              <div className="relative rounded-[1.5rem] overflow-hidden shadow-2xl" style={{ boxShadow: `0 25px 60px -20px ${colors.warmTaupe}60` }}>
                <div className="aspect-[4/3] relative">
                  <Image
                    src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1200&h=900&fit=crop"
                    alt="Paws & Peace hero"
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Warm overlay */}
                  <div
                    className="absolute inset-0"
                    style={{ background: `linear-gradient(to top, ${colors.warmTaupe}20, transparent 50%)` }}
                  />
                </div>
              </div>
              {/* Floating paw accent */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full flex items-center justify-center shadow-lg"
                style={{ backgroundColor: colors.terracotta }}
              >
                <span className="text-3xl">🐾</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview - Warm Introduction */}
      <section
        className="py-24 md:py-32 px-6 md:px-12 lg:px-20 relative"
        style={{ backgroundColor: colors.softCream }}
      >
        {/* Paper texture overlay */}
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="container-wide relative z-10">
          <motion.div
            variants={softFloat}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="max-w-4xl mx-auto text-center"
          >
            <p
              className="text-2xl md:text-3xl lg:text-4xl font-serif leading-relaxed"
              style={{ color: colors.darkTaupe }}
            >
              Paws & Peace came to us with a dream: to create Brisbane's most beloved pet care destination.
              They needed a brand that would resonate with modern pet parents who see their furry friends
              as <span style={{ color: colors.terracotta }} className="italic">family members</span> deserving of the very best.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Live Website Preview */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20" style={{ backgroundColor: '#EDE6DC' }}>
        <div className="container-wide">
          <div className="text-center mb-16">
            <motion.span
              variants={softFloat}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="inline-block px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ backgroundColor: `${colors.deepMoss}15`, color: colors.deepMoss }}
            >
              Live Website
            </motion.span>
            <motion.h2
              variants={softFloat}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-serif"
              style={{ color: colors.darkTaupe }}
            >
              Experience the design
            </motion.h2>
          </div>

          <motion.div
            variants={softFloat}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-2xl"
            style={{ boxShadow: `0 30px 80px -30px ${colors.warmTaupe}50` }}
          >
            <BrowserFrame
              url={projectInfo.liveUrl}
              displayUrl={projectInfo.displayUrl}
              fallbackImage="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1200&h=750&fit=crop"
              title={projectInfo.title}
            />
          </motion.div>
        </div>
      </section>

      {/* Challenge & Solution - Split Cards */}
      <section
        className="py-24 md:py-32 px-6 md:px-12 lg:px-20"
        style={{ backgroundColor: colors.softCream }}
      >
        <div className="container-wide">
          <motion.div
            variants={staggerSoft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {/* Challenge Card */}
            <motion.div
              variants={softFloat}
              className="p-10 md:p-12 rounded-3xl relative overflow-hidden"
              style={{
                backgroundColor: 'white',
                boxShadow: `0 20px 60px -20px ${colors.warmTaupe}30`,
              }}
            >
              {/* Decorative corner */}
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-10"
                style={{ backgroundColor: colors.terracotta }}
              />

              <span
                className="inline-block px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase mb-6"
                style={{ backgroundColor: `${colors.warmTaupe}15`, color: colors.warmTaupe }}
              >
                The Challenge
              </span>
              <h2
                className="text-2xl md:text-3xl font-serif mb-8"
                style={{ color: colors.darkTaupe }}
              >
                Breaking through the noise
              </h2>
              <ul className="space-y-5">
                {challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span
                      className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-medium mt-0.5"
                      style={{ backgroundColor: colors.warmTaupe }}
                    >
                      {index + 1}
                    </span>
                    <span className="text-base leading-relaxed" style={{ color: colors.darkTaupe }}>
                      {challenge}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Solution Card */}
            <motion.div
              variants={softFloat}
              className="p-10 md:p-12 rounded-3xl relative overflow-hidden"
              style={{
                backgroundColor: colors.deepMoss,
                boxShadow: `0 20px 60px -20px ${colors.deepMoss}50`,
              }}
            >
              {/* Decorative corner */}
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-10"
                style={{ backgroundColor: 'white' }}
              />

              <span
                className="inline-block px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase mb-6"
                style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: 'white' }}
              >
                The Solution
              </span>
              <h2 className="text-2xl md:text-3xl font-serif text-white mb-8">
                A brand with heart
              </h2>
              <ul className="space-y-5">
                {solutions.map((solution, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span
                      className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-medium mt-0.5"
                      style={{ backgroundColor: colors.terracotta, color: 'white' }}
                    >
                      {index + 1}
                    </span>
                    <span className="text-base leading-relaxed text-white/90">
                      {solution}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Gallery - Organic Grid */}
      <section
        className="py-24 md:py-32 px-6 md:px-12 lg:px-20"
        style={{ backgroundColor: '#EDE6DC' }}
      >
        <div className="container-wide">
          <motion.div
            variants={staggerSoft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-12 gap-4 md:gap-6"
          >
            {/* Large image */}
            <motion.div variants={softFloat} className="col-span-12 md:col-span-8">
              <div className="relative aspect-[16/10] rounded-3xl overflow-hidden" style={{ boxShadow: `0 20px 50px -20px ${colors.warmTaupe}40` }}>
                <Image
                  src={galleryImages[0].src}
                  alt={galleryImages[0].alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-1000"
                />
              </div>
            </motion.div>

            {/* Tall image */}
            <motion.div variants={softFloat} className="col-span-12 md:col-span-4 md:row-span-2">
              <div className="relative h-full min-h-[300px] md:min-h-0 rounded-3xl overflow-hidden" style={{ boxShadow: `0 20px 50px -20px ${colors.warmTaupe}40` }}>
                <Image
                  src={galleryImages[1].src}
                  alt={galleryImages[1].alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-1000"
                />
              </div>
            </motion.div>

            {/* Two small images */}
            <motion.div variants={softFloat} className="col-span-6 md:col-span-4">
              <div className="relative aspect-square rounded-3xl overflow-hidden" style={{ boxShadow: `0 20px 50px -20px ${colors.warmTaupe}40` }}>
                <Image
                  src={galleryImages[2].src}
                  alt={galleryImages[2].alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-1000"
                />
              </div>
            </motion.div>

            <motion.div variants={softFloat} className="col-span-6 md:col-span-4">
              <div className="relative aspect-square rounded-3xl overflow-hidden" style={{ boxShadow: `0 20px 50px -20px ${colors.warmTaupe}40` }}>
                <Image
                  src={galleryImages[3].src}
                  alt={galleryImages[3].alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-1000"
                />
              </div>
            </motion.div>

            {/* Bottom wide image */}
            <motion.div variants={softFloat} className="col-span-12">
              <div className="relative aspect-[21/9] rounded-3xl overflow-hidden" style={{ boxShadow: `0 20px 50px -20px ${colors.warmTaupe}40` }}>
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

      {/* Color Palette - Warm Display */}
      <section
        className="py-24 md:py-32 px-6 md:px-12 lg:px-20 relative"
        style={{ backgroundColor: colors.darkTaupe }}
      >
        <div className="container-wide">
          <div className="text-center mb-16">
            <motion.span
              variants={softFloat}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="inline-block px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: colors.lightTaupe }}
            >
              Visual Identity
            </motion.span>
            <motion.h2
              variants={softFloat}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-serif text-white"
            >
              A warm, inviting palette
            </motion.h2>
          </div>

          <motion.div
            variants={staggerSoft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-8 md:gap-12"
          >
            {[
              { color: colors.deepMoss, name: 'Deep Moss', hex: '#4A5240' },
              { color: colors.darkTaupe, name: 'Dark Taupe', hex: '#6B5D52' },
              { color: colors.warmTaupe, name: 'Warm Taupe', hex: '#A69080' },
              { color: colors.terracotta, name: 'Terracotta', hex: '#C4784A' },
              { color: colors.softCream, name: 'Soft Cream', hex: '#F5F1EB' },
            ].map((item) => (
              <motion.div key={item.hex} variants={softFloat} className="text-center">
                <div
                  className="w-24 h-24 md:w-28 md:h-28 rounded-full mb-4 border-4 border-white/10"
                  style={{
                    backgroundColor: item.color,
                    boxShadow: `0 10px 30px -10px ${item.color}80`,
                  }}
                />
                <span className="block text-sm text-white/90 font-medium mb-1">{item.name}</span>
                <span className="text-xs text-white/50 uppercase tracking-wider">{item.hex}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Results - Warm Cards */}
      <section
        className="py-24 md:py-32 px-6 md:px-12 lg:px-20"
        style={{ backgroundColor: colors.softCream }}
      >
        <div className="container-wide">
          <div className="text-center mb-16">
            <motion.span
              variants={softFloat}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="inline-block px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ backgroundColor: `${colors.terracotta}15`, color: colors.terracotta }}
            >
              The Results
            </motion.span>
            <motion.h2
              variants={softFloat}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-serif"
              style={{ color: colors.darkTaupe }}
            >
              Impact that speaks volumes
            </motion.h2>
          </div>

          <motion.div
            variants={staggerSoft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {results.map((result) => (
              <motion.div
                key={result.description}
                variants={softFloat}
                className="p-8 rounded-3xl text-center bg-white"
                style={{ boxShadow: `0 15px 40px -15px ${colors.warmTaupe}30` }}
              >
                <span
                  className="block text-4xl md:text-5xl font-serif mb-3"
                  style={{ color: colors.terracotta }}
                >
                  {result.metric}
                </span>
                <span
                  className="text-sm uppercase tracking-wider"
                  style={{ color: colors.warmTaupe }}
                >
                  {result.description}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonial - Warm & Cozy */}
      <section
        className="py-24 md:py-32 px-6 md:px-12 lg:px-20 relative overflow-hidden"
        style={{ backgroundColor: '#EDE6DC' }}
      >
        {/* Decorative elements */}
        <div
          className="absolute top-20 left-10 w-40 h-40 rounded-full opacity-20"
          style={{ backgroundColor: colors.terracotta }}
        />
        <div
          className="absolute bottom-20 right-10 w-60 h-60 rounded-full opacity-10"
          style={{ backgroundColor: colors.deepMoss }}
        />

        <div className="container-wide relative z-10">
          <motion.blockquote
            variants={softFloat}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="mb-8">
              <span className="text-6xl" style={{ color: colors.terracotta }}>"</span>
            </div>
            <p
              className="text-2xl md:text-3xl lg:text-4xl font-serif leading-relaxed mb-10"
              style={{ color: colors.darkTaupe }}
            >
              {testimonial.quote}
            </p>
            <footer className="flex flex-col items-center gap-4">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center text-2xl"
                style={{ backgroundColor: colors.warmTaupe }}
              >
                🐾
              </div>
              <cite className="not-italic">
                <span className="block text-lg font-medium" style={{ color: colors.darkTaupe }}>
                  {testimonial.author}
                </span>
                <span className="text-sm" style={{ color: colors.warmTaupe }}>
                  {testimonial.role}
                </span>
              </cite>
            </footer>
          </motion.blockquote>
        </div>
      </section>

      {/* Next Project CTA */}
      <section
        className="py-24 md:py-32 px-6 md:px-12 lg:px-20"
        style={{ backgroundColor: colors.softCream }}
      >
        <div className="container-wide">
          <div className="text-center">
            <motion.span
              variants={softFloat}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="block text-sm uppercase tracking-widest mb-4"
              style={{ color: colors.warmTaupe }}
            >
              Next Project
            </motion.span>
            <motion.h2
              variants={softFloat}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif mb-10"
              style={{ color: colors.darkTaupe }}
            >
              Seva Wellness
            </motion.h2>
            <motion.div
              variants={softFloat}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <ButtonLink
                href="/work/seva-wellness"
                variant="primary"
                className="!rounded-full !px-10 !py-4"
                style={{ backgroundColor: colors.terracotta }}
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
