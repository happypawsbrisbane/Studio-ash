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
        <div className="relative aspect-[4/3] overflow-hidden bg-line-grey mb-6">
          <Image
            src={image}
            alt={`${client} - ${title}`}
            fill
            className="object-cover transition-transform duration-600 ease-smooth-out group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-charcoal/0 transition-colors duration-300 group-hover:bg-charcoal/40">
            {description && (
              <div className="absolute inset-0 flex items-center justify-center p-8 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-off-white text-body text-center line-clamp-3">
                  {description}
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="space-y-1">
          <div className="flex items-center justify-between text-small text-stone">
            <span>{category}</span>
            <span>{year}</span>
          </div>
          <h3 className="text-h4 font-serif text-charcoal group-hover:text-stone transition-colors duration-300">
            {client}
          </h3>
          <p className="text-body text-stone">{title}</p>
        </div>
      </Link>
    </motion.article>
  )
}

interface ServiceCardProps {
  title: string
  description: string
  features?: string[]
  icon?: React.ReactNode
  className?: string
}

export function ServiceCard({
  title,
  description,
  features,
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
        'p-8 md:p-10 border border-line-grey',
        'transition-colors duration-300 hover:border-stone',
        className
      )}
    >
      {icon && (
        <div className="w-12 h-12 mb-6 text-stone">
          {icon}
        </div>
      )}
      <h3 className="text-h3 font-serif text-charcoal mb-4">{title}</h3>
      <p className="text-body text-stone mb-6">{description}</p>
      {features && features.length > 0 && (
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="text-small text-stone flex items-start gap-3">
              <span className="w-1.5 h-1.5 mt-2 rounded-full bg-gold flex-shrink-0" />
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
      <p className="text-h2 md:text-h1 font-serif text-charcoal leading-tight mb-8">
        "{quote}"
      </p>
      <footer>
        <cite className="not-italic">
          <span className="block text-body font-medium text-charcoal">{author}</span>
          <span className="text-small text-stone">
            {role}, {company}
          </span>
        </cite>
      </footer>
    </motion.blockquote>
  )
}
