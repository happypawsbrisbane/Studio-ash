'use client'

import { motion } from 'framer-motion'
import { ButtonLink } from '@/components/ui/Button'
import { smoothOut } from '@/lib/animations'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-20 pt-24">
      {/* Background subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-off-white via-off-white to-line-grey/20 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Eyebrow */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: smoothOut }}
          className="inline-block text-caption uppercase tracking-widest text-stone mb-6"
        >
          Premium Brand Studio • Brisbane
        </motion.span>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: smoothOut }}
          className="text-h1 md:text-display font-serif text-charcoal text-balance mb-8"
        >
          Extraordinary brands for extraordinary people.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: smoothOut }}
          className="text-body-lg md:text-h4 font-sans text-stone max-w-2xl mx-auto mb-12"
        >
          We craft brands that command attention, foster connection,
          and drive meaningful growth for visionary businesses.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: smoothOut }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <ButtonLink href="/work" size="lg">
            View Our Work
          </ButtonLink>
          <ButtonLink href="/contact" variant="secondary" size="lg">
            Start a Project
          </ButtonLink>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border border-stone/30 rounded-full flex items-start justify-center pt-2"
        >
          <div className="w-1 h-2 bg-stone/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
