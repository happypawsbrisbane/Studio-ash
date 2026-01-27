import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://studioash.com.au'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Studio Ash — Premium Brand Studio, Brisbane',
    template: '%s | Studio Ash — Premium Brand Studio, Brisbane',
  },
  description: 'Studio Ash is a premium creative and brand studio based in Brisbane, Australia. We craft extraordinary brands for extraordinary people through strategy, design, and digital experiences.',
  keywords: ['brand studio', 'creative agency', 'branding', 'Brisbane', 'design', 'digital experience'],
  authors: [{ name: 'Studio Ash' }],
  creator: 'Studio Ash',
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: siteUrl,
    siteName: 'Studio Ash',
    title: 'Studio Ash — Premium Brand Studio, Brisbane',
    description: 'We craft extraordinary brands for extraordinary people through strategy, design, and digital experiences.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Studio Ash - Premium Brand Studio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Studio Ash — Premium Brand Studio, Brisbane',
    description: 'We craft extraordinary brands for extraordinary people.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FAFAF9',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col bg-off-white text-charcoal antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navigation />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
