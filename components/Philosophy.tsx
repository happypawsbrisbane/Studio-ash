'use client'

import { motion } from 'framer-motion'
import { Section, SectionHeader } from '@/components/ui/Section'
import { fadeUp } from '@/lib/animations'

const values = [
  {
    number: '01',
    hex: '#7C3AED',
    title: 'Strategy First',
    description: 'We don\u2019t open Figma until we understand your market, your customers, and where you\u2019re going. The visual work is the last 30%.',
  },
  {
    number: '02',
    hex: '#6366F1',
    title: 'Craft Obsessed',
    description: 'The difference between good and great lives in the details most people never notice\u2014until they\u2019re missing. We sweat those details.',
  },
  {
    number: '03',
    hex: '#06B6D4',
    title: 'True Partnership',
    description: 'You won\u2019t get a junior account manager. You get me\u2014start to finish. One designer, one relationship, zero handoffs.',
  },
]

export function Philosophy() {
  return (
    <Section variant="elevated">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <motion.div variants={fadeUp}>
          <SectionHeader
            eyebrow="Philosophy"
            title="More than a logo."
          />
          <p className="text-body-lg text-subtle">
            Most businesses don&apos;t need a rebrand because their logo is ugly.
            They need one because what they look like no longer matches what they&apos;ve become.
            We close that gap.
          </p>
        </motion.div>

        <motion.div variants={fadeUp} className="space-y-6">
          {values.map((value) => (
            <div key={value.number} className="group flex gap-5">
              <div className="flex-shrink-0 flex flex-col items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full transition-all duration-300 group-hover:scale-125"
                  style={{ backgroundColor: value.hex }}
                />
                <div className="w-px h-full bg-border" />
              </div>
              <div className="pb-6">
                <span className="font-mono text-micro text-muted tracking-widest block mb-2">
                  {value.number}
                </span>
                <h3 className="text-h4 font-serif text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-body text-subtle">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </Section>
  )
}
