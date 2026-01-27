'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/work', label: 'Work' },
  { href: '/services', label: 'Services' },
  { href: '/studio', label: 'Studio' },
]

export function Navigation() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled ? 'bg-off-white/95 backdrop-blur-sm' : 'bg-transparent',
          isScrolled ? 'py-4' : 'py-6'
        )}
      >
        <nav className="px-6 md:px-12 lg:px-20 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-h4 font-serif text-charcoal hover:text-stone transition-colors duration-300"
          >
            Studio Ash
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                isActive={pathname === link.href || pathname.startsWith(`${link.href}/`)}
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              href="/contact"
              className={cn(
                'px-5 py-2.5 text-small font-medium transition-colors duration-300',
                pathname === '/contact'
                  ? 'bg-charcoal text-off-white'
                  : 'border border-charcoal text-charcoal hover:bg-charcoal hover:text-off-white'
              )}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative w-8 h-8 flex items-center justify-center"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            <span className="sr-only">{isMobileMenuOpen ? 'Close menu' : 'Open menu'}</span>
            <div className="relative w-6 h-4">
              <span
                className={cn(
                  'absolute left-0 h-0.5 w-6 bg-charcoal transition-all duration-300',
                  isMobileMenuOpen ? 'top-1.5 rotate-45' : 'top-0'
                )}
              />
              <span
                className={cn(
                  'absolute left-0 top-1.5 h-0.5 w-6 bg-charcoal transition-opacity duration-300',
                  isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                )}
              />
              <span
                className={cn(
                  'absolute left-0 h-0.5 w-6 bg-charcoal transition-all duration-300',
                  isMobileMenuOpen ? 'top-1.5 -rotate-45' : 'top-3'
                )}
              />
            </div>
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-off-white md:hidden"
          >
            <nav className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      'text-h2 font-serif transition-colors duration-300',
                      pathname === link.href || pathname.startsWith(`${link.href}/`)
                        ? 'text-charcoal'
                        : 'text-stone hover:text-charcoal'
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.4 }}
              >
                <Link
                  href="/contact"
                  className="text-h2 font-serif text-stone hover:text-charcoal transition-colors duration-300"
                >
                  Contact
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

interface NavLinkProps {
  href: string
  isActive: boolean
  children: React.ReactNode
}

function NavLink({ href, isActive, children }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        'relative text-small font-medium transition-colors duration-300',
        isActive ? 'text-charcoal' : 'text-stone hover:text-charcoal'
      )}
    >
      {children}
      <span
        className={cn(
          'absolute -bottom-1 left-0 h-px bg-charcoal transition-all duration-300',
          isActive ? 'w-full' : 'w-0'
        )}
      />
    </Link>
  )
}
