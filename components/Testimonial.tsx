'use client'

import { motion } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { fadeUp, viewportSettings } from '@/lib/animations'

const testimonials = [
  {
    quote: "Ash didn\u2019t just give us a new logo\u2014she gave us a brand that finally matches the quality of what we do. Enquiries went up 40% in the first month.",
    author: 'Sarah Chen',
    role: 'Founder',
    company: 'Paws & Peace',
  },
  {
    quote: "We\u2019d been through two agencies before HexStudio. The difference? Ash actually listened. She understood our market before she designed a single thing.",
    author: 'Emma Richardson',
    role: 'Owner',
    company: 'Bloom Floristry',
  },
  {
    quote: "Our old brand looked like every other financial advisor. Now people remember us. That\u2019s worth more than any ad campaign.",
    author: 'James Whitfield',
    role: 'Director',
    company: 'Horizon Advisory',
  },
]

export function Testimonials() {
  return (
    <Section variant="elevated">
      <div className="max-w-4xl mx-auto">
        <motion.span
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="block font-mono text-micro uppercase tracking-[0.15em] text-muted mb-8 text-center"
        >
          What Clients Say
        </motion.span>

        <motion.blockquote
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="text-center mb-16"
        >
          <p className="text-h2 md:text-h1 font-serif text-white leading-tight mb-8">
            &ldquo;{testimonials[0].quote}&rdquo;
          </p>
          <footer>
            <cite className="not-italic">
              <span className="block text-body font-medium text-white">{testimonials[0].author}</span>
              <span className="text-small text-subtle">
                {testimonials[0].role}, {testimonials[0].company}
              </span>
            </cite>
          </footer>
        </motion.blockquote>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {testimonials.slice(1).map((t) => (
            <div
              key={t.author}
              className="p-6 rounded-2xl border border-white/[0.06] bg-surface/30"
            >
              <p className="text-body text-subtle mb-4 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <span className="block text-small font-medium text-white">{t.author}</span>
                <span className="text-micro text-muted">
                  {t.role}, {t.company}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </Section>
  )
}
