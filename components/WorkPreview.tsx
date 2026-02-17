'use client'

import { motion } from 'framer-motion'
import { Section, SectionHeader } from '@/components/ui/Section'
import { ProjectCard } from '@/components/ui/Card'
import { ButtonLink } from '@/components/ui/Button'
import { fadeUp } from '@/lib/animations'

const featuredProjects = [
  {
    title: 'Brand Identity & Digital Experience',
    client: 'Paws & Peace',
    category: 'Branding',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&h=600&fit=crop',
    href: '/work/paws-and-peace',
    description: 'Complete brand transformation for a premier pet care destination.',
    hex: '#7C3AED',
  },
  {
    title: 'Visual Identity System',
    client: 'Seva Wellness',
    category: 'Identity',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&h=600&fit=crop',
    href: '/work/seva-wellness',
    description: 'Serene, trustworthy brand for holistic health.',
    hex: '#06B6D4',
  },
  {
    title: 'Brand Strategy & Website',
    client: 'Stillwater Studio',
    category: 'Strategy',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop',
    href: '/work/stillwater-studio',
    description: 'Strategic positioning for architecture & interiors.',
    hex: '#6366F1',
  },
]

export function WorkPreview() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Selected Work"
        title="Recent projects."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
        {featuredProjects.map((project) => (
          <ProjectCard
            key={project.href}
            {...project}
          />
        ))}
      </div>

      <motion.div variants={fadeUp} className="text-center">
        <ButtonLink href="/work" variant="secondary">
          All Projects
        </ButtonLink>
      </motion.div>
    </Section>
  )
}
