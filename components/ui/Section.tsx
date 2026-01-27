'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { staggerContainer, viewportSettings } from '@/lib/animations'

type SectionVariant = 'default' | 'dark' | 'cream'

interface SectionProps {
  variant?: SectionVariant
  size?: 'default' | 'small' | 'large'
  container?: 'wide' | 'narrow' | 'none'
  animate?: boolean
  className?: string
  children: React.ReactNode
}

const variantStyles: Record<SectionVariant, string> = {
  default: 'bg-off-white text-charcoal',
  dark: 'bg-charcoal text-off-white',
  cream: 'bg-line-grey/30 text-charcoal',
}

const sizeStyles = {
  small: 'section-sm',
  default: 'section',
  large: 'py-28 md:py-36 lg:py-44 px-6 md:px-12 lg:px-20',
}

const containerStyles = {
  wide: 'container-wide',
  narrow: 'container-narrow',
  none: '',
}

export function Section({
  variant = 'default',
  size = 'default',
  container = 'wide',
  animate = true,
  className,
  children,
}: SectionProps) {
  const sectionClassName = cn(variantStyles[variant], sizeStyles[size], className)

  if (animate) {
    return (
      <motion.section
        className={sectionClassName}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings}
      >
        <div className={containerStyles[container]}>{children}</div>
      </motion.section>
    )
  }

  return (
    <section className={sectionClassName}>
      <div className={containerStyles[container]}>{children}</div>
    </section>
  )
}

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: SectionHeaderProps) {
  return (
    <motion.header
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
      }}
      className={cn(
        'mb-12 md:mb-16',
        align === 'center' && 'text-center max-w-3xl mx-auto',
        className
      )}
    >
      {eyebrow && (
        <span className="block text-caption uppercase tracking-wider text-stone mb-4">
          {eyebrow}
        </span>
      )}
      <h2 className="text-h2 md:text-h1 font-serif text-balance">{title}</h2>
      {description && (
        <p className="mt-4 text-body-lg text-stone max-w-2xl">
          {description}
        </p>
      )}
    </motion.header>
  )
}
