'use client'

import { useState, useRef, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ContactCTA } from '@/components/ContactCTA'
import { smoothOut, fadeUp, staggerContainer, viewportSettings } from '@/lib/animations'

const projects = [
  {
    client: 'Paws & Peace',
    title: 'Brand Identity & Digital Experience',
    category: 'Branding',
    year: '2024',
    hex: '#7C3AED',
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&h=600&fit=crop',
    previewImage: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1200&h=750&fit=crop',
    href: '/work/paws-and-peace',
    displayUrl: 'www.pawsandpeace.com.au',
    description: 'Complete brand transformation for a premier pet care destination.',
  },
  {
    client: 'Seva Wellness',
    title: 'Visual Identity System',
    category: 'Identity',
    year: '2024',
    hex: '#06B6D4',
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&h=600&fit=crop',
    previewImage: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=1200&h=750&fit=crop',
    href: '/work/seva-wellness',
    displayUrl: 'www.sevawellness.com.au',
    description: 'Serene, trustworthy brand for holistic health.',
  },
  {
    client: 'Stillwater Studio',
    title: 'Brand Strategy & Website',
    category: 'Strategy',
    year: '2023',
    hex: '#6366F1',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop',
    previewImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&h=750&fit=crop',
    href: '/work/stillwater-studio',
    displayUrl: 'www.stillwaterstudio.com.au',
    description: 'Strategic positioning for architecture & interiors.',
  },
  {
    client: 'Bloom Floristry',
    title: 'Complete Rebrand',
    category: 'Branding',
    year: '2023',
    hex: '#F43F5E',
    image: 'https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=800&h=600&fit=crop',
    previewImage: 'https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=1200&h=750&fit=crop',
    href: '/work/bloom-floristry',
    displayUrl: 'www.bloomfloristry.com.au',
    description: 'Fresh, modern identity for an established florist.',
  },
  {
    client: 'Artisan Collective',
    title: 'E-commerce Experience',
    category: 'Digital',
    year: '2023',
    hex: '#10B981',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop',
    previewImage: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=1200&h=750&fit=crop',
    href: '/work/artisan-collective',
    displayUrl: 'www.artisancollective.com.au',
    description: 'Curated online marketplace for local makers.',
  },
  {
    client: 'Horizon Advisory',
    title: 'Brand Identity',
    category: 'Identity',
    year: '2023',
    hex: '#F59E0B',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
    previewImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=750&fit=crop',
    href: '/work/horizon-advisory',
    displayUrl: 'www.horizonadvisory.com.au',
    description: 'Professional identity for boutique financial advisory.',
  },
]

export default function WorkPage() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)
  const previewRef = useRef<HTMLDivElement>(null)

  const handleSelect = useCallback((project: typeof projects[0]) => {
    if (selectedProject?.href === project.href) {
      setSelectedProject(null)
      return
    }
    setSelectedProject(project)
    setTimeout(() => {
      previewRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 100)
  }, [selectedProject])

  return (
    <>
      <section className="pt-32 pb-10 md:pt-40 md:pb-16 px-6 md:px-12 lg:px-20">
        <div className="container-wide">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: smoothOut }}
            className="block font-mono text-micro uppercase tracking-[0.15em] text-muted mb-6"
          >
            Our Work
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: smoothOut }}
            className="text-h1 md:text-display font-serif text-white max-w-4xl"
          >
            Brands we&apos;ve shaped.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: smoothOut }}
            className="mt-6 text-body-lg text-subtle max-w-xl"
          >
            Each project starts with a problem and ends with a brand that works harder.
          </motion.p>
        </div>
      </section>

      <div ref={previewRef} className="scroll-mt-24">
        <AnimatePresence mode="wait">
          {selectedProject && (
            <motion.section
              key={selectedProject.href}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: smoothOut }}
              className="overflow-hidden"
            >
              <div className="px-6 md:px-12 lg:px-20 pb-12">
                <div className="container-wide">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                    <div>
                      <h2 className="text-h2 md:text-h1 font-serif text-white">
                        {selectedProject.client}
                      </h2>
                      <p className="text-body text-subtle mt-1">{selectedProject.title}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <Link
                        href={selectedProject.href}
                        className="inline-flex items-center gap-2 bg-violet text-white px-6 py-3 text-small font-medium hover:bg-violet/90 transition-colors rounded-full"
                      >
                        View Case Study
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="p-2 hover:bg-white/5 rounded-full transition-colors"
                        aria-label="Close preview"
                      >
                        <svg className="w-5 h-5 text-subtle" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="rounded-2xl overflow-hidden border border-white/[0.06] bg-surface">
                    <div className="flex items-center gap-3 px-4 py-3 border-b border-white/[0.06]">
                      <div className="flex gap-2">
                        <span className="w-3 h-3 rounded-full bg-rose/60" />
                        <span className="w-3 h-3 rounded-full bg-amber/60" />
                        <span className="w-3 h-3 rounded-full bg-emerald/60" />
                      </div>
                      <div className="flex-1 bg-elevated rounded-lg px-3 py-1.5 flex items-center gap-2">
                        <svg className="w-4 h-4 text-muted flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                        </svg>
                        <span className="text-sm text-muted font-mono truncate">
                          {selectedProject.displayUrl}
                        </span>
                      </div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                      className="relative w-full bg-void"
                      style={{ paddingBottom: '62.5%' }}
                    >
                      <Image
                        src={selectedProject.previewImage}
                        alt={`${selectedProject.client} website preview`}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 1440px) 100vw, 1440px"
                        priority
                      />
                    </motion.div>
                  </div>

                  <p className="text-body text-subtle mt-6 max-w-2xl">
                    {selectedProject.description}
                  </p>
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </div>

      <section className="px-6 md:px-12 lg:px-20 pb-20 md:pb-28 lg:pb-36">
        <div className="container-wide">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {projects.map((project) => (
              <motion.article
                key={project.href}
                variants={fadeUp}
                className="group cursor-pointer"
                onClick={() => handleSelect(project)}
              >
                <div className={`
                  relative rounded-xl overflow-hidden transition-all duration-500
                  ${selectedProject?.href === project.href
                    ? 'ring-2 ring-violet glow-violet'
                    : 'border border-white/[0.06] hover:border-white/[0.12]'
                  }
                `}>
                  <div className="relative aspect-[4/3] overflow-hidden bg-surface">
                    <Image
                      src={project.image}
                      alt={`${project.client} - ${project.title}`}
                      fill
                      className="object-cover transition-all duration-700 ease-smooth-out group-hover:scale-[1.05]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-void/0 to-transparent transition-all duration-500 group-hover:from-void/50" />
                    <div
                      className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                      style={{ backgroundColor: project.hex }}
                    />
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <h3 className="text-body font-medium text-white group-hover:text-subtle transition-colors">
                    {project.client}
                  </h3>
                  <span className="font-mono text-micro text-muted">{project.category}</span>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
