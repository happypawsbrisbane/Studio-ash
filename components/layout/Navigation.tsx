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

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

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
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isScrolled
            ? 'glass-strong py-3'
            : 'bg-transparent py-5'
        )}
      >
        <nav className="px-6 md:px-12 lg:px-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="w-7 h-7 rounded-md bg-gradient-accent flex items-center justify-center text-white text-micro font-mono font-bold">
              H
            </span>
            <span className="text-h4 font-sans font-medium text-white tracking-tight">
              Hex<span className="text-subtle group-hover:text-violet transition-colors duration-300">Studio</span>
            </span>
          </Link>

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
                'px-5 py-2 text-small font-medium rounded-full transition-all duration-300',
                pathname === '/contact'
                  ? 'bg-violet text-white'
                  : 'border border-white/10 text-white/80 hover:border-violet/50 hover:text-white hover:bg-violet/10'
              )}
            >
              Contact
            </Link>
          </div>

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
                  'absolute left-0 h-px w-6 bg-white transition-all duration-300',
                  isMobileMenuOpen ? 'top-1.5 rotate-45' : 'top-0'
                )}
              />
              <span
                className={cn(
                  'absolute left-0 top-1.5 h-px w-6 bg-white transition-opacity duration-300',
                  isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                )}
              />
              <span
                className={cn(
                  'absolute left-0 h-px w-6 bg-white transition-all duration-300',
                  isMobileMenuOpen ? 'top-1.5 -rotate-45' : 'top-3'
                )}
              />
            </div>
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-void md:hidden"
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
                        ? 'text-white'
                        : 'text-subtle hover:text-white'
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
                  className="text-h2 font-serif text-subtle hover:text-white transition-colors duration-300"
                >
                  Contact
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="mt-8 font-mono text-micro text-muted tracking-widest uppercase"
              >
                #DESIGN #BUILD #BRAND
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
        isActive ? 'text-white' : 'text-subtle hover:text-white'
      )}
    >
      {children}
      <span
        className={cn(
          'absolute -bottom-1 left-0 h-px transition-all duration-300',
          isActive ? 'w-full bg-violet' : 'w-0 bg-violet'
        )}
      />
    </Link>
  )
}
