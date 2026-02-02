'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Section, SectionHeader } from '@/components/ui/Section'
import { ContactCTA } from '@/components/ContactCTA'
import { fadeUp, smoothOut, staggerContainer, viewportSettings } from '@/lib/animations'

const values = [
  {
    title: 'Strategy First',
    description: 'Every visual decision is rooted in strategic thinking. We understand your market, your audience, and your ambitions before we design.',
  },
  {
    title: 'Craft Obsessed',
    description: 'Details matter. We sweat the small stuff because excellence lives in the margins. Every pixel, every word, every interaction is considered.',
  },
  {
    title: 'Partnership Approach',
    description: 'The best work emerges from true collaboration. We embed ourselves in your vision, becoming an extension of your team.',
  },
]

const stats = [
  { number: '5+', label: 'Years of Experience' },
  { number: '50+', label: 'Brands Created' },
  { number: '100%', label: 'Client Satisfaction' },
  { number: '∞', label: 'Cups of Coffee' },
]

const skills = {
  brand: ['Logo Design', 'Visual Identity', 'Brand Guidelines', 'Collateral Design'],
  web: ['Custom Websites', 'Squarespace', 'Responsive Design', 'UI/UX Design'],
}

export default function StudioPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-12 lg:px-20">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: smoothOut }}
                className="block text-caption uppercase tracking-widest text-stone mb-6"
              >
                About Me
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: smoothOut }}
                className="text-h1 md:text-display font-serif text-charcoal"
              >
                I'm Ash — designer, creative, <em className="text-gold">brand obsessive</em>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: smoothOut }}
                className="mt-6 text-body-lg text-stone"
              >
                I'm a Brisbane-based designer with a mission to help businesses look as good
                as they actually are. No more blending in with forgettable visuals.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: smoothOut }}
                className="mt-4 text-body-lg text-stone"
              >
                <strong className="text-charcoal">I believe great design isn't just about looking pretty</strong>
                — it's about positioning you as the premium choice and attracting clients
                who value quality over price.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: smoothOut }}
              className="relative aspect-[3/4] bg-line-grey rounded-t-[200px] rounded-b-[20px] overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop"
                alt="Ash, designer at Studio Ash"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <Section size="small" variant="cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={fadeUp}>
              <span className="block text-display font-serif text-gold mb-2">
                {stat.number}
              </span>
              <span className="text-small text-stone uppercase tracking-wider">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Story Section */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            eyebrow="My Story"
            title="How I got here."
            align="center"
          />
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="space-y-6 text-body-lg text-stone text-center"
          >
            <p>
              Design wasn't always the plan. I started out studying something completely
              different, but kept finding myself drawn to the creative side of everything
              I touched. Eventually, I stopped fighting it and leaned all the way in.
            </p>
            <p>
              I spent years working in agencies, learning the craft, and getting frustrated
              watching businesses get handed cookie-cutter solutions that did nothing to set
              them apart. Templates with different colors. Stock photos with different faces.
              The same story, told the same way.
            </p>
            <p>
              That frustration became my purpose. I started Studio Ash to do things differently
              — to create brands that actually mean something, that tell unique stories, and
              that position businesses as the premium choice in their market.
            </p>
            <p>
              Today, I work with businesses who are ready to stop blending in. Whether it's a
              complete brand overhaul or a website that finally matches your vision, every
              project gets my full attention and creative energy.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Values Section */}
      <Section variant="cream">
        <SectionHeader
          eyebrow="What I Believe"
          title="Values that guide everything."
          align="center"
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {values.map((value) => (
            <motion.div
              key={value.title}
              variants={fadeUp}
              className="p-8 bg-off-white text-center"
            >
              <h3 className="text-h3 font-serif text-charcoal mb-4">
                {value.title}
              </h3>
              <p className="text-body text-stone">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Skills Section */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <SectionHeader
              eyebrow="What I Do"
              title="Tools & expertise."
            />
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              className="text-body-lg text-stone mb-8"
            >
              From initial concept to final delivery, I handle every aspect of your
              brand and web design project with care and precision.
            </motion.p>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              className="grid grid-cols-2 gap-8"
            >
              <motion.div variants={fadeUp}>
                <h4 className="text-caption uppercase tracking-wider text-gold mb-4">
                  Brand Design
                </h4>
                <ul className="space-y-2">
                  {skills.brand.map((skill) => (
                    <li key={skill} className="text-body text-charcoal flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-gold" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div variants={fadeUp}>
                <h4 className="text-caption uppercase tracking-wider text-gold mb-4">
                  Web Design
                </h4>
                <ul className="space-y-2">
                  {skills.web.map((skill) => (
                    <li key={skill} className="text-body text-charcoal flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-gold" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="grid grid-cols-2 gap-4"
          >
            <div className="aspect-square bg-line-grey/50 rounded-lg flex items-center justify-center">
              <svg className="w-12 h-12 text-stone/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 19l7-7 3 3-7 7-3-3z"/>
                <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>
                <path d="M2 2l7.586 7.586"/>
                <circle cx="11" cy="11" r="2"/>
              </svg>
            </div>
            <div className="aspect-square bg-line-grey/50 rounded-lg flex items-center justify-center translate-y-8">
              <svg className="w-12 h-12 text-stone/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <line x1="3" y1="9" x2="21" y2="9"/>
                <line x1="9" y1="21" x2="9" y2="9"/>
              </svg>
            </div>
          </motion.div>
        </div>
      </Section>

      <ContactCTA />
    </>
  )
}
