'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { fadeUp, viewportSettings } from '@/lib/animations'

interface ProjectCardProps {
  title: string
  client: string
  category: string
  year: string
  image: string
  href: string
  description?: string
  hex?: string
  className?: string
}

export function ProjectCard({
  title,
  client,
  category,
  year,
  image,
  href,
  description,
  hex = '#7C3AED',
  className,
}: ProjectCardProps) {
  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
      className={cn('group', className)}
    >
      <Link href={href} className="block">
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-surface mb-5">
          <Image
            src={image}
            alt={`${client} - ${title}`}
            fill
            className="object-cover transition-all duration-700 ease-smooth-out group-hover:scale-[1.05]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Hover overlay - smooth gradient fade */}
          <div className="absolute inset-0 bg-gradient-to-t from-void/0 via-void/0 to-transparent transition-all duration-500 group-hover:from-void/70 group-hover:via-void/30">
            {description && (
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-white text-small leading-relaxed">
                  {description}
                </p>
              </div>
            )}
          </div>
          {/* Accent bar */}
          <div
            className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
            style={{ backgroundColor: hex }}
          />
        </div>
        <div className="space-y-1">
          <div className="flex items-center justify-between text-small">
            <span className="text-subtle">{category}</span>
            <span className="font-mono text-micro text-muted">{year}</span>
          </div>
          <h3 className="text-h4 font-serif text-white group-hover:text-subtle transition-colors duration-300">
            {client}
          </h3>
          <p className="text-body text-subtle">{title}</p>
        </div>
      </Link>
    </motion.article>
  )
}

interface ServiceCardProps {
  title: string
  description: string
  features?: string[]
  hex?: string
  icon?: React.ReactNode
  className?: string
}

export function ServiceCard({
  title,
  description,
  features,
  hex = '#7C3AED',
  icon,
  className,
}: ServiceCardProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
      className={cn(
        'p-8 md:p-10 rounded-2xl border border-white/[0.06] bg-surface/30',
        'transition-all duration-500 hover:border-white/[0.12] hover:bg-surface/50',
        className
      )}
    >
      {icon && (
        <div className="w-12 h-12 mb-6 text-subtle">
          {icon}
        </div>
      )}
      <div
        className="w-2 h-2 rounded-full mb-4"
        style={{ backgroundColor: hex }}
      />
      <h3 className="text-h3 font-serif text-white mb-4">{title}</h3>
      <p className="text-body text-subtle mb-6">{description}</p>
      {features && features.length > 0 && (
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="text-small text-subtle flex items-start gap-3">
              <span
                className="w-1 h-1 mt-2 rounded-full flex-shrink-0"
                style={{ backgroundColor: hex }}
              />
              {feature}
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  )
}

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  company: string
  className?: string
}

export function TestimonialCard({
  quote,
  author,
  role,
  company,
  className,
}: TestimonialCardProps) {
  return (
    <motion.blockquote
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
      className={cn('max-w-3xl mx-auto text-center', className)}
    >
      <p className="text-h2 md:text-h1 font-serif text-white leading-tight mb-8">
        &ldquo;{quote}&rdquo;
      </p>
      <footer>
        <cite className="not-italic">
          <span className="block text-body font-medium text-white">{author}</span>
          <span className="text-small text-subtle">
            {role}, {company}
          </span>
        </cite>
      </footer>
    </motion.blockquote>
  )
}
