'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { BrowserFrame } from '@/components/ui/BrowserFrame'
import { ButtonLink } from '@/components/ui/Button'

// Artisan Collective specific animations - crafted, textured
const craftedReveal = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
  },
}

const handmadeSlide = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }
  },
}

const staggerCraft = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.08 },
  },
}

// Brand colors - Handcrafted Marketplace Palette
const colors = {
  brown: '#6B4423',
  terracotta: '#C45C3C',
  cream: '#F2E8DC',
  charcoal: '#333333',
  warmWhite: '#FAF7F2',
  clay: '#A67B5B',
  espresso: '#3D2914',
}

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
    <div style={{ backgroundColor: colors.cream }}>
      {/* Hero Section - Layered, Textured */}
      <section className="min-h-screen relative overflow-hidden">
        {/* Paper texture background */}
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: colors.cream,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            opacity: 0.4,
          }}
        />

        {/* Decorative stamp-like elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-40 right-20 w-32 h-32 rounded-full border-4 border-dashed opacity-10 rotate-12"
            style={{ borderColor: colors.terracotta }}
          />
          <div
            className="absolute bottom-40 left-20 w-24 h-24 rounded-full border-4 border-dashed opacity-10 -rotate-6"
            style={{ borderColor: colors.brown }}
          />
        </div>

        <div className="container-wide px-6 md:px-12 lg:px-20 pt-32 pb-20 md:pt-40 md:pb-32 relative z-10">
          {/* Back link with handcrafted feel */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <Link
              href="/work"
              className="inline-flex items-center gap-3 group"
              style={{ color: colors.brown }}
            >
              <span
                className="w-10 h-10 rounded-lg flex items-center justify-center border-2 group-hover:bg-white/50 transition-colors"
                style={{ borderColor: colors.brown }}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </span>
              <span className="text-sm font-bold uppercase tracking-wider">Back to Work</span>
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Bold typography */}
            <div>
              {/* Category stamp */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -3 }}
                animate={{ opacity: 1, scale: 1, rotate: -3 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-block mb-8"
              >
                <span
                  className="inline-block px-5 py-2 text-xs font-black uppercase tracking-widest border-2 border-dashed"
                  style={{ borderColor: colors.terracotta, color: colors.terracotta }}
                >
                  {projectInfo.category}
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-[0.9] tracking-tight mb-6"
                style={{ color: colors.espresso }}
              >
                <span className="block">Artisan</span>
                <span className="block" style={{ color: colors.terracotta }}>Collective</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-xl md:text-2xl mb-10"
                style={{ color: colors.clay }}
              >
                {projectInfo.tagline}
              </motion.p>

              {/* Handcrafted info cards */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="grid grid-cols-2 gap-4"
              >
                {[
                  { label: 'Year', value: projectInfo.year },
                  { label: 'Duration', value: projectInfo.duration },
                  { label: 'Industry', value: 'Handcrafted Goods' },
                  { label: 'Location', value: 'Australia-wide' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="p-4 rounded-lg border-2"
                    style={{ borderColor: `${colors.brown}20`, backgroundColor: `${colors.warmWhite}` }}
                  >
                    <span
                      className="block text-xs font-bold uppercase tracking-wider mb-1"
                      style={{ color: colors.clay }}
                    >
                      {item.label}
                    </span>
                    <span className="text-sm font-medium" style={{ color: colors.espresso }}>
                      {item.value}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right - Layered image composition */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="relative"
              >
                {/* Background card */}
                <div
                  className="absolute -top-4 -left-4 -right-4 -bottom-4 rounded-2xl"
                  style={{ backgroundColor: colors.brown, opacity: 0.1 }}
                />

                {/* Main image */}
                <div
                  className="relative aspect-[4/5] rounded-2xl overflow-hidden border-4"
                  style={{
                    borderColor: colors.warmWhite,
                    boxShadow: `8px 8px 0 ${colors.terracotta}30`,
                  }}
                >
                  <Image
                    src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&h=1000&fit=crop"
                    alt="Artisan Collective hero"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full flex flex-col items-center justify-center text-white rotate-6"
                  style={{ backgroundColor: colors.terracotta }}
                >
                  <span className="text-2xl font-black">85+</span>
                  <span className="text-[10px] uppercase tracking-wider">Makers</span>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview - Textured paper feel */}
      <section
        className="py-24 md:py-32 px-6 md:px-12 lg:px-20 relative"
        style={{ backgroundColor: colors.warmWhite }}
      >
        <div className="container-wide">
          <motion.div
            variants={craftedReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="max-w-4xl mx-auto"
          >
            <div
              className="p-10 md:p-16 rounded-2xl border-2 border-dashed relative"
              style={{ borderColor: `${colors.brown}30`, backgroundColor: colors.cream }}
            >
              {/* Corner stamps */}
              <div
                className="absolute top-4 left-4 w-8 h-8 rounded border-2"
                style={{ borderColor: colors.terracotta, opacity: 0.3 }}
              />
              <div
                className="absolute bottom-4 right-4 w-8 h-8 rounded border-2"
                style={{ borderColor: colors.terracotta, opacity: 0.3 }}
              />

              <p
                className="text-xl md:text-2xl lg:text-3xl leading-relaxed text-center"
                style={{ color: colors.espresso }}
              >
                Artisan Collective began as a passion project by two former gallery curators who wanted
                to connect Australia's finest craftspeople directly with appreciative buyers. They needed
                a digital platform that would honor the <strong style={{ color: colors.terracotta }}>human element</strong> behind
                every handcrafted piece.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Craft Categories - Badge style */}
      <section className="py-20 px-6 md:px-12 lg:px-20" style={{ backgroundColor: colors.cream }}>
        <div className="container-wide">
          <div className="text-center mb-12">
            <motion.span
              variants={craftedReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="inline-block px-4 py-2 text-xs font-black uppercase tracking-widest mb-6 border-2 border-dashed rotate-1"
              style={{ borderColor: colors.brown, color: colors.brown }}
            >
              Curated Categories
            </motion.span>
            <motion.h2
              variants={craftedReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-black uppercase"
              style={{ color: colors.espresso }}
            >
              Celebrating every craft
            </motion.h2>
          </div>

          <motion.div
            variants={staggerCraft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {craftCategories.map((category, index) => (
              <motion.div
                key={category.name}
                variants={craftedReveal}
                className="group cursor-pointer"
                style={{ transform: `rotate(${index % 2 === 0 ? '-1' : '1'}deg)` }}
              >
                <div
                  className="px-6 py-4 rounded-xl border-3 transition-all group-hover:scale-105"
                  style={{
                    borderColor: colors.brown,
                    backgroundColor: colors.warmWhite,
                    borderWidth: '3px',
                    boxShadow: `4px 4px 0 ${colors.brown}`,
                  }}
                >
                  <span className="text-lg font-bold" style={{ color: colors.espresso }}>
                    {category.name}
                  </span>
                  <span
                    className="ml-2 text-sm font-black px-2 py-0.5 rounded"
                    style={{ backgroundColor: colors.terracotta, color: 'white' }}
                  >
                    {category.count}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Live Website Preview */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20" style={{ backgroundColor: colors.warmWhite }}>
        <div className="container-wide">
          <div className="text-center mb-16">
            <motion.span
              variants={craftedReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="inline-block px-4 py-2 text-xs font-black uppercase tracking-widest mb-6 border-2 border-dashed -rotate-1"
              style={{ borderColor: colors.terracotta, color: colors.terracotta }}
            >
              Live Website
            </motion.span>
            <motion.h2
              variants={craftedReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-black uppercase"
              style={{ color: colors.espresso }}
            >
              Experience the design
            </motion.h2>
          </div>

          <motion.div
            variants={craftedReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden border-4"
            style={{
              borderColor: colors.brown,
              boxShadow: `8px 8px 0 ${colors.brown}40`,
            }}
          >
            <BrowserFrame
              url={projectInfo.liveUrl}
              displayUrl={projectInfo.displayUrl}
              fallbackImage="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=1200&h=750&fit=crop"
              title={projectInfo.title}
            />
          </motion.div>
        </div>
      </section>

      {/* Features Section - Handcrafted cards */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20" style={{ backgroundColor: colors.cream }}>
        <div className="container-wide">
          <div className="text-center mb-16">
            <motion.span
              variants={craftedReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="inline-block px-4 py-2 text-xs font-black uppercase tracking-widest mb-6 border-2 border-dashed"
              style={{ borderColor: colors.brown, color: colors.brown }}
            >
              Key Features
            </motion.span>
            <motion.h2
              variants={craftedReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-black uppercase"
              style={{ color: colors.espresso }}
            >
              Designed for connection
            </motion.h2>
          </div>

          <motion.div
            variants={staggerCraft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={handmadeSlide}
                className="p-8 rounded-2xl border-3 relative"
                style={{
                  backgroundColor: colors.warmWhite,
                  borderColor: colors.brown,
                  borderWidth: '3px',
                  boxShadow: `6px 6px 0 ${colors.terracotta}30`,
                  transform: `rotate(${index % 2 === 0 ? '-1' : '1'}deg)`,
                }}
              >
                <span
                  className="absolute -top-4 -left-2 px-3 py-1 text-xs font-black uppercase rounded"
                  style={{ backgroundColor: colors.terracotta, color: 'white' }}
                >
                  0{index + 1}
                </span>
                <h3
                  className="text-xl font-black uppercase mb-4 mt-2"
                  style={{ color: colors.espresso }}
                >
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: colors.clay }}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Challenge & Solution - Layered */}
      <section style={{ backgroundColor: colors.espresso }}>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Challenge */}
          <div
            className="py-20 md:py-28 px-6 md:px-12 lg:px-16 border-b lg:border-b-0 lg:border-r"
            style={{ borderColor: `${colors.brown}50` }}
          >
            <motion.div
              variants={craftedReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <span
                className="inline-block px-4 py-2 text-xs font-black uppercase tracking-widest mb-8 border-2 border-dashed"
                style={{ borderColor: colors.terracotta, color: colors.terracotta }}
              >
                The Challenge
              </span>
              <h2 className="text-3xl md:text-4xl font-black uppercase mb-10 text-white">
                Unity in diversity
              </h2>
              <ul className="space-y-5">
                {challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span
                      className="w-8 h-8 rounded flex-shrink-0 flex items-center justify-center text-sm font-black"
                      style={{ backgroundColor: colors.terracotta, color: 'white' }}
                    >
                      {index + 1}
                    </span>
                    <span className="text-base leading-relaxed" style={{ color: colors.cream }}>
                      {challenge}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Solution */}
          <div className="py-20 md:py-28 px-6 md:px-12 lg:px-16">
            <motion.div
              variants={craftedReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <span
                className="inline-block px-4 py-2 text-xs font-black uppercase tracking-widest mb-8 border-2 border-dashed"
                style={{ borderColor: colors.clay, color: colors.clay }}
              >
                The Solution
              </span>
              <h2 className="text-3xl md:text-4xl font-black uppercase mb-10 text-white">
                Stories that sell
              </h2>
              <ul className="space-y-5">
                {solutions.map((solution, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span
                      className="w-8 h-8 rounded flex-shrink-0 flex items-center justify-center text-sm font-black"
                      style={{ backgroundColor: colors.clay, color: 'white' }}
                    >
                      {index + 1}
                    </span>
                    <span className="text-base leading-relaxed" style={{ color: colors.cream }}>
                      {solution}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery - Scrapbook style */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20" style={{ backgroundColor: colors.cream }}>
        <div className="container-wide">
          <motion.div
            variants={staggerCraft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-12 gap-6"
          >
            {/* Large image with tape effect */}
            <motion.div variants={craftedReveal} className="col-span-12 md:col-span-7 relative">
              <div
                className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 rounded-sm opacity-50"
                style={{ backgroundColor: colors.clay }}
              />
              <div
                className="relative aspect-[4/3] rounded-lg overflow-hidden border-4 rotate-1"
                style={{ borderColor: colors.warmWhite, boxShadow: `6px 6px 20px ${colors.brown}20` }}
              >
                <Image
                  src={galleryImages[0].src}
                  alt={galleryImages[0].alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>

            {/* Portrait image */}
            <motion.div variants={craftedReveal} className="col-span-12 md:col-span-5 relative">
              <div
                className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 rounded-sm opacity-50"
                style={{ backgroundColor: colors.terracotta }}
              />
              <div
                className="relative aspect-[3/4] rounded-lg overflow-hidden border-4 -rotate-1"
                style={{ borderColor: colors.warmWhite, boxShadow: `6px 6px 20px ${colors.brown}20` }}
              >
                <Image
                  src={galleryImages[1].src}
                  alt={galleryImages[1].alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>

            {/* Small images */}
            <motion.div variants={craftedReveal} className="col-span-6 md:col-span-4">
              <div
                className="relative aspect-square rounded-lg overflow-hidden border-4 rotate-2"
                style={{ borderColor: colors.warmWhite, boxShadow: `6px 6px 20px ${colors.brown}20` }}
              >
                <Image
                  src={galleryImages[2].src}
                  alt={galleryImages[2].alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>

            <motion.div variants={craftedReveal} className="col-span-6 md:col-span-4">
              <div
                className="relative aspect-square rounded-lg overflow-hidden border-4 -rotate-1"
                style={{ borderColor: colors.warmWhite, boxShadow: `6px 6px 20px ${colors.brown}20` }}
              >
                <Image
                  src={galleryImages[3].src}
                  alt={galleryImages[3].alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>

            <motion.div variants={craftedReveal} className="col-span-12 md:col-span-4">
              <div
                className="relative aspect-[4/3] md:aspect-square rounded-lg overflow-hidden border-4 rotate-1"
                style={{ borderColor: colors.warmWhite, boxShadow: `6px 6px 20px ${colors.brown}20` }}
              >
                <Image
                  src={galleryImages[4].src}
                  alt={galleryImages[4].alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Color Palette - Material swatches */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20" style={{ backgroundColor: colors.warmWhite }}>
        <div className="container-wide">
          <div className="text-center mb-16">
            <motion.span
              variants={craftedReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="inline-block px-4 py-2 text-xs font-black uppercase tracking-widest mb-6 border-2 border-dashed"
              style={{ borderColor: colors.brown, color: colors.brown }}
            >
              Visual Identity
            </motion.span>
            <motion.h2
              variants={craftedReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-black uppercase"
              style={{ color: colors.espresso }}
            >
              Rooted in raw materials
            </motion.h2>
          </div>

          <motion.div
            variants={staggerCraft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6"
          >
            {[
              { color: colors.espresso, name: 'Espresso', hex: '#3D2914' },
              { color: colors.brown, name: 'Warm Brown', hex: '#6B4423' },
              { color: colors.terracotta, name: 'Terracotta', hex: '#C45C3C' },
              { color: colors.clay, name: 'Clay', hex: '#A67B5B' },
              { color: colors.cream, name: 'Natural Cream', hex: '#F2E8DC' },
            ].map((item, index) => (
              <motion.div
                key={item.hex}
                variants={craftedReveal}
                className="text-center"
                style={{ transform: `rotate(${index % 2 === 0 ? '-2' : '2'}deg)` }}
              >
                <div
                  className="w-24 h-32 rounded-lg mb-4 border-4"
                  style={{
                    backgroundColor: item.color,
                    borderColor: colors.warmWhite,
                    boxShadow: `4px 4px 0 ${colors.brown}30`,
                  }}
                />
                <span className="block text-sm font-bold" style={{ color: colors.espresso }}>
                  {item.name}
                </span>
                <span className="block text-xs uppercase tracking-wider mt-1" style={{ color: colors.clay }}>
                  {item.hex}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Results - Bold numbers */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20" style={{ backgroundColor: colors.cream }}>
        <div className="container-wide">
          <div className="text-center mb-16">
            <motion.span
              variants={craftedReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="inline-block px-4 py-2 text-xs font-black uppercase tracking-widest mb-6 border-2 border-dashed"
              style={{ borderColor: colors.terracotta, color: colors.terracotta }}
            >
              The Results
            </motion.span>
            <motion.h2
              variants={craftedReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-black uppercase"
              style={{ color: colors.espresso }}
            >
              Handcrafted success
            </motion.h2>
          </div>

          <motion.div
            variants={staggerCraft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {results.map((result, index) => (
              <motion.div
                key={result.description}
                variants={craftedReveal}
                className="p-6 rounded-xl border-3 text-center"
                style={{
                  backgroundColor: colors.warmWhite,
                  borderColor: colors.brown,
                  borderWidth: '3px',
                  boxShadow: `4px 4px 0 ${colors.brown}`,
                  transform: `rotate(${index % 2 === 0 ? '-1' : '1'}deg)`,
                }}
              >
                <span
                  className="block text-4xl md:text-5xl font-black mb-2"
                  style={{ color: colors.terracotta }}
                >
                  {result.metric}
                </span>
                <span
                  className="text-xs font-bold uppercase tracking-wider"
                  style={{ color: colors.clay }}
                >
                  {result.description}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20" style={{ backgroundColor: colors.warmWhite }}>
        <div className="container-wide">
          <motion.blockquote
            variants={craftedReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div
              className="p-10 md:p-16 rounded-2xl border-3 relative"
              style={{
                backgroundColor: colors.cream,
                borderColor: colors.brown,
                borderWidth: '3px',
                boxShadow: `8px 8px 0 ${colors.brown}30`,
              }}
            >
              <span
                className="absolute -top-6 left-10 text-8xl font-black leading-none"
                style={{ color: colors.terracotta }}
              >
                "
              </span>
              <p
                className="text-xl md:text-2xl lg:text-3xl leading-relaxed mb-10 pt-4"
                style={{ color: colors.espresso }}
              >
                {testimonial.quote}
              </p>
              <footer className="flex items-center gap-4">
                <div
                  className="w-12 h-1 rounded"
                  style={{ backgroundColor: colors.terracotta }}
                />
                <cite className="not-italic">
                  <span className="block text-base font-bold" style={{ color: colors.espresso }}>
                    {testimonial.author}
                  </span>
                  <span className="text-sm" style={{ color: colors.clay }}>
                    {testimonial.role}
                  </span>
                </cite>
              </footer>
            </div>
          </motion.blockquote>
        </div>
      </section>

      {/* Next Project CTA */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20" style={{ backgroundColor: colors.cream }}>
        <div className="container-wide">
          <div className="text-center">
            <motion.span
              variants={craftedReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="block text-xs font-black uppercase tracking-widest mb-6"
              style={{ color: colors.clay }}
            >
              Next Project
            </motion.span>
            <motion.h2
              variants={craftedReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-black uppercase mb-12"
              style={{ color: colors.espresso }}
            >
              Horizon Advisory
            </motion.h2>
            <motion.div
              variants={craftedReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <ButtonLink
                href="/work/horizon-advisory"
                variant="primary"
                className="!px-10 !py-5 !text-sm !font-black !uppercase !tracking-wider !rounded-lg"
                style={{
                  backgroundColor: colors.terracotta,
                  boxShadow: `4px 4px 0 ${colors.brown}`,
                }}
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
