'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, viewportSettings } from '@/lib/animations'

const footerLinks = {
  navigation: [
    { href: '/work', label: 'Work' },
    { href: '/services', label: 'Services' },
    { href: '/studio', label: 'Studio' },
    { href: '/contact', label: 'Contact' },
  ],
  social: [
    { href: 'https://instagram.com/hexstudio', label: 'Instagram' },
    { href: 'https://linkedin.com/company/hexstudio', label: 'LinkedIn' },
    { href: 'https://behance.net/hexstudio', label: 'Behance' },
  ],
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-surface border-t border-white/[0.04]">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings}
        className="section"
      >
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
            <motion.div variants={fadeUp} className="lg:col-span-2">
              <Link href="/" className="flex items-center gap-2 mb-6 group">
                <span className="w-7 h-7 rounded-md bg-gradient-accent flex items-center justify-center text-white text-micro font-mono font-bold">
                  H
                </span>
                <span className="text-h4 font-sans font-medium text-white tracking-tight">
                  Hex<span className="text-subtle group-hover:text-violet transition-colors duration-300">Studio</span>
                </span>
              </Link>
              <p className="text-body text-subtle max-w-md mb-4">
                Brand and design studio, Brisbane. We craft brands
                that command attention.
              </p>
              <p className="font-mono text-micro text-muted tracking-widest">
                #DESIGN #BUILD #BRAND
              </p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <h4 className="font-mono text-micro uppercase tracking-widest text-muted mb-6">
                Navigate
              </h4>
              <ul className="space-y-3">
                {footerLinks.navigation.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-body text-subtle hover:text-white transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeUp}>
              <h4 className="font-mono text-micro uppercase tracking-widest text-muted mb-6">
                Connect
              </h4>
              <address className="not-italic space-y-3">
                <p>
                  <a
                    href="mailto:hello@hexstudio.com.au"
                    className="text-body text-subtle hover:text-white transition-colors duration-300"
                  >
                    hello@hexstudio.com.au
                  </a>
                </p>
                <p>
                  <a
                    href="tel:+61412345678"
                    className="text-body text-subtle hover:text-white transition-colors duration-300"
                  >
                    +61 412 345 678
                  </a>
                </p>
                <p className="text-body text-subtle">
                  Brisbane, Australia
                </p>
              </address>
              <div className="flex gap-4 mt-6">
                {footerLinks.social.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-small text-muted hover:text-violet transition-colors duration-300"
                    aria-label={`Follow us on ${link.label}`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            className="pt-8 border-t border-white/[0.04] flex flex-col md:flex-row justify-between items-center gap-4"
          >
            <p className="text-small text-muted">
              &copy; {currentYear} HexStudio. All rights reserved.
            </p>
            <p className="font-mono text-micro text-muted/50">
              Brisbane, Australia
            </p>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  )
}
