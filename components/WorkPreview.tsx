'use client'

import { motion } from 'framer-motion'
import { Section, SectionHeader } from '@/components/ui/Section'
import { ProjectCard } from '@/components/ui/Card'
import { ButtonLink } from '@/components/ui/Button'
import { fadeUp } from '@/lib/animations'

// Sample projects - these would come from Sanity CMS
const featuredProjects = [
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
]

export function WorkPreview() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Selected Work"
        title="Brands we've had the privilege to shape."
        description="A selection of recent projects that showcase our approach to brand strategy, identity design, and digital experiences."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-12">
        {featuredProjects.map((project, index) => (
          <ProjectCard
            key={project.href}
            {...project}
            className={index === 0 ? 'md:col-span-2 lg:col-span-1' : ''}
          />
        ))}
      </div>

      <motion.div variants={fadeUp} className="text-center">
        <ButtonLink href="/work" variant="secondary">
          View All Projects
        </ButtonLink>
      </motion.div>
    </Section>
  )
}
