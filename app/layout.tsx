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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://hexstudio.com.au'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'HexStudio — Brand & Design Studio, Brisbane',
    template: '%s | HexStudio',
  },
  description: 'HexStudio is a premium brand and design studio in Brisbane. We craft brands that command attention through strategy, design, and digital experiences.',
  keywords: ['brand studio', 'creative agency', 'branding', 'Brisbane', 'design', 'digital experience', 'hex studio'],
  authors: [{ name: 'HexStudio' }],
  creator: 'HexStudio',
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: siteUrl,
    siteName: 'HexStudio',
    title: 'HexStudio — Brand & Design Studio, Brisbane',
    description: 'We craft brands that command attention through strategy, design, and digital experiences.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'HexStudio - Brand & Design Studio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HexStudio — Brand & Design Studio, Brisbane',
    description: 'We craft brands that command attention.',
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
  themeColor: '#06060A',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col bg-void text-white antialiased">
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
