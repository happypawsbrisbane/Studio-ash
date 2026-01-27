'use client'

import { motion } from 'framer-motion'
import { ButtonLink } from '@/components/ui/Button'
import { smoothOut } from '@/lib/animations'

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-20">
      <div className="text-center max-w-xl">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: smoothOut }}
          className="block text-display font-serif text-line-grey mb-4"
        >
          404
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: smoothOut }}
          className="text-h1 font-serif text-charcoal mb-4"
        >
          Page not found
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: smoothOut }}
          className="text-body-lg text-stone mb-8"
        >
          The page you're looking for doesn't exist or has been moved.
          Let's get you back on track.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: smoothOut }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <ButtonLink href="/">Return Home</ButtonLink>
          <ButtonLink href="/contact" variant="secondary">
            Contact Us
          </ButtonLink>
        </motion.div>
      </div>
    </section>
  )
}
