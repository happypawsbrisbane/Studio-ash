'use client'

import { useState, useRef, useCallback, useEffect } from 'react'
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
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&h=600&fit=crop',
    href: '/work/paws-and-peace',
    description: 'A complete brand transformation for Brisbane\'s premier pet care and wellness destination.',
    previewUrl: '/previews/paws-and-peace.html',
  },
  {
    client: 'Seva Wellness',
    title: 'Visual Identity System',
    category: 'Identity',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&h=600&fit=crop',
    href: '/work/seva-wellness',
    description: 'Crafting a serene, trustworthy brand for a holistic health and wellness practice.',
    previewUrl: '/previews/seva-wellness.html',
  },
  {
    client: 'Stillwater Studio',
    title: 'Brand Strategy & Website',
    category: 'Strategy',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop',
    href: '/work/stillwater-studio',
    description: 'Strategic positioning and digital presence for an architecture and interior design firm.',
    previewUrl: '/previews/stillwater-studio.html',
  },
  {
    client: 'Bloom Floristry',
    title: 'Complete Rebrand',
    category: 'Branding',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=800&h=600&fit=crop',
    href: '/work/bloom-floristry',
    description: 'A fresh, modern identity for an established Brisbane florist.',
    previewUrl: '/previews/bloom-floristry.html',
  },
  {
    client: 'Artisan Collective',
    title: 'E-commerce Experience',
    category: 'Digital',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop',
    href: '/work/artisan-collective',
    description: 'A curated online marketplace celebrating local makers and craftspeople.',
    previewUrl: '/previews/artisan-collective.html',
  },
  {
    client: 'Horizon Advisory',
    title: 'Brand Identity',
    category: 'Identity',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
    href: '/work/horizon-advisory',
    description: 'Professional identity for a boutique financial advisory firm.',
    previewUrl: '/previews/horizon-advisory.html',
  },
]

function ScaledPreview({ src }: { src: string }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(0.5)

  useEffect(() => {
    const updateScale = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth
        setScale(width / 1440)
      }
    }
    updateScale()
    window.addEventListener('resize', updateScale)
    return () => window.removeEventListener('resize', updateScale)
  }, [])

  const iframeHeight = 900
  const scaledHeight = iframeHeight * scale

  return (
    <div
      ref={containerRef}
      className="w-full overflow-hidden rounded-2xl"
      style={{ height: scaledHeight }}
    >
      <iframe
        src={src}
        title="Project preview"
        className="border-none pointer-events-none"
        style={{
          width: 1440,
          height: iframeHeight,
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
        }}
        scrolling="no"
        loading="lazy"
      />
    </div>
  )
}

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
            Brands we&rsquo;ve had the privilege to shape.
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

      {/* Expanded Preview Panel */}
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
                  {/* Header row */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                    <h2 className="text-h2 md:text-h1 font-serif text-charcoal">
                      {selectedProject.client}
                    </h2>
                    <div className="flex items-center gap-3">
                      <Link
                        href={selectedProject.href}
                        className="inline-flex items-center gap-2 bg-charcoal text-off-white px-6 py-3 text-small font-medium hover:bg-charcoal/90 transition-colors rounded-full"
                      >
                        View Case Study
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="p-2.5 hover:bg-line-grey rounded-full transition-colors"
                        aria-label="Close preview"
                      >
                        <svg className="w-5 h-5 text-stone" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Landing page preview card */}
                  <div className="bg-white rounded-3xl p-3 md:p-4 shadow-2xl">
                    <ScaledPreview src={selectedProject.previewUrl} />
                  </div>

                  {/* Description below */}
                  <p className="text-body text-stone mt-6 max-w-2xl">
                    {selectedProject.description}
                  </p>
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </div>

      {/* Projects Grid */}
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
                  relative rounded-xl overflow-hidden transition-all duration-300
                  ${selectedProject?.href === project.href
                    ? 'ring-2 ring-charcoal shadow-xl scale-[0.98]'
                    : 'shadow-md hover:shadow-xl'
                  }
                `}>
                  <div className="relative aspect-[4/3] overflow-hidden bg-line-grey">
                    <Image
                      src={project.image}
                      alt={`${project.client} - ${project.title}`}
                      fill
                      className="object-cover transition-transform duration-600 ease-smooth-out group-hover:scale-[1.03]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <h3 className="text-body font-medium text-charcoal group-hover:text-stone transition-colors">
                    {project.client}
                  </h3>
                  <span className="text-small text-stone">{project.category}</span>
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
