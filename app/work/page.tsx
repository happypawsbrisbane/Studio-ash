'use client'

import { motion } from 'framer-motion'
import { Section, SectionHeader } from '@/components/ui/Section'
import { ProjectCard } from '@/components/ui/Card'
import { ContactCTA } from '@/components/ContactCTA'
import { fadeUp, smoothOut } from '@/lib/animations'

const projects = [
  {
    title: 'Brand Identity & Digital Experience',
    client: 'Paws & Peace',
    category: 'Branding',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&h=600&fit=crop',
    href: '/work/paws-and-peace',
    description: 'A complete brand transformation for Brisbane\'s premier pet care and wellness destination.',
  },
  {
    title: 'Visual Identity System',
    client: 'Seva Wellness',
    category: 'Identity',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&h=600&fit=crop',
    href: '/work/seva-wellness',
    description: 'Crafting a serene, trustworthy brand for a holistic health and wellness practice.',
  },
  {
    title: 'Brand Strategy & Website',
    client: 'Stillwater Studio',
    category: 'Strategy',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop',
    href: '/work/stillwater-studio',
    description: 'Strategic positioning and digital presence for an architecture and interior design firm.',
  },
  {
    title: 'Complete Rebrand',
    client: 'Bloom Floristry',
    category: 'Branding',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=800&h=600&fit=crop',
    href: '/work/bloom-floristry',
    description: 'A fresh, modern identity for an established Brisbane florist.',
  },
  {
    title: 'E-commerce Experience',
    client: 'Artisan Collective',
    category: 'Digital',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop',
    href: '/work/artisan-collective',
    description: 'A curated online marketplace celebrating local makers and craftspeople.',
  },
  {
    title: 'Brand Identity',
    client: 'Horizon Advisory',
    category: 'Identity',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
    href: '/work/horizon-advisory',
    description: 'Professional identity for a boutique financial advisory firm.',
  },
]

export default function WorkPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-12 lg:px-20">
        <div className="container-wide">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: smoothOut }}
            className="block text-caption uppercase tracking-widest text-stone mb-6"
          >
            Our Work
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: smoothOut }}
            className="text-h1 md:text-display font-serif text-charcoal max-w-4xl"
          >
            Brands we've had the privilege to shape.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: smoothOut }}
            className="mt-6 text-body-lg text-stone max-w-xl"
          >
            A selection of projects that showcase our approach to brand strategy,
            identity design, and digital experiences.
          </motion.p>
        </div>
      </section>

      {/* Projects Grid */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {projects.map((project) => (
            <ProjectCard key={project.href} {...project} />
          ))}
        </div>
      </Section>

      <ContactCTA />
    </>
  )
}
