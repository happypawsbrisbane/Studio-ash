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
    { href: 'https://instagram.com/studioash', label: 'Instagram' },
    { href: 'https://linkedin.com/company/studioash', label: 'LinkedIn' },
    { href: 'https://behance.net/studioash', label: 'Behance' },
  ],
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-charcoal text-off-white">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings}
        className="section"
      >
        <div className="container-wide">
          {/* Main footer content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
            {/* Brand column */}
            <motion.div variants={fadeUp} className="lg:col-span-2">
              <Link href="/" className="text-h3 font-serif inline-block mb-4">
                Studio Ash
              </Link>
              <p className="text-body text-off-white/70 max-w-md mb-6">
                A premium creative and brand studio based in Brisbane, Australia.
                We craft extraordinary brands for extraordinary people.
              </p>
              <p className="text-small text-off-white/50">
                Currently accepting new projects for Q2 2026
              </p>
            </motion.div>

            {/* Navigation column */}
            <motion.div variants={fadeUp}>
              <h4 className="text-small font-medium uppercase tracking-wider mb-4 text-off-white/50">
                Navigation
              </h4>
              <ul className="space-y-3">
                {footerLinks.navigation.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-body text-off-white/70 hover:text-off-white transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact column */}
            <motion.div variants={fadeUp}>
              <h4 className="text-small font-medium uppercase tracking-wider mb-4 text-off-white/50">
                Get in touch
              </h4>
              <address className="not-italic space-y-3">
                <p>
                  <a
                    href="mailto:hello@studioash.com.au"
                    className="text-body text-off-white/70 hover:text-off-white transition-colors duration-300"
                  >
                    hello@studioash.com.au
                  </a>
                </p>
                <p>
                  <a
                    href="tel:+61412345678"
                    className="text-body text-off-white/70 hover:text-off-white transition-colors duration-300"
                  >
                    +61 412 345 678
                  </a>
                </p>
                <p className="text-body text-off-white/70">
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
                    className="text-small text-off-white/50 hover:text-off-white transition-colors duration-300"
                    aria-label={`Follow us on ${link.label}`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom bar */}
          <motion.div
            variants={fadeUp}
            className="pt-8 border-t border-off-white/10 flex flex-col md:flex-row justify-between items-center gap-4"
          >
            <p className="text-small text-off-white/50">
              © {currentYear} Studio Ash. All rights reserved.
            </p>
            <p className="text-small text-off-white/30">
              Brisbane, Australia
            </p>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  )
}
