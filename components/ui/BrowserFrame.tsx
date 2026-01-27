'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { fadeUp, viewportSettings } from '@/lib/animations'

interface BrowserFrameProps {
  url?: string
  displayUrl?: string
  fallbackImage?: string
  title: string
  className?: string
  aspectRatio?: 'desktop' | 'tablet' | 'mobile'
}

const aspectRatios = {
  desktop: 'pb-[62.5%]', // 16:10
  tablet: 'pb-[75%]',    // 4:3
  mobile: 'pb-[177.78%]', // 9:16
}

export function BrowserFrame({
  url,
  displayUrl,
  fallbackImage,
  title,
  className,
  aspectRatio = 'desktop',
}: BrowserFrameProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    if (!url) {
      setIsLoading(false)
      setHasError(true)
    }
  }, [url])

  const handleLoad = () => {
    setIsLoading(false)
  }

  const handleError = () => {
    setIsLoading(false)
    setHasError(true)
  }

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
      className={cn('w-full max-w-5xl mx-auto', className)}
    >
      <div className="browser-frame rounded-xl overflow-hidden shadow-2xl bg-[#F5F5F4]">
        {/* Browser Chrome */}
        <div className="browser-chrome flex items-center gap-3 px-4 py-3 border-b border-[#E7E5E4]">
          {/* Traffic Lights */}
          <div className="flex gap-2">
            <span className="w-3 h-3 rounded-full bg-[#EF4444]" />
            <span className="w-3 h-3 rounded-full bg-[#F59E0B]" />
            <span className="w-3 h-3 rounded-full bg-[#22C55E]" />
          </div>

          {/* URL Bar */}
          <div className="flex-1 bg-white rounded-md px-3 py-1.5 flex items-center gap-2">
            <svg className="w-4 h-4 text-stone/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
            </svg>
            <span className="text-sm text-stone/70 font-mono truncate">
              {displayUrl || url || 'Preview unavailable'}
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
            <button
              className="p-1.5 hover:bg-stone/10 rounded transition-colors"
              aria-label="Refresh"
            >
              <svg className="w-4 h-4 text-stone/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </button>
            {url && (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 hover:bg-stone/10 rounded transition-colors"
                aria-label="Open in new tab"
              >
                <svg className="w-4 h-4 text-stone/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
          </div>
        </div>

        {/* Browser Content */}
        <div className={cn('browser-content relative w-full bg-white', aspectRatios[aspectRatio])}>
          {/* Loading State */}
          {isLoading && url && (
            <div className="absolute inset-0 flex items-center justify-center bg-[#FAFAF9]">
              <div className="flex flex-col items-center gap-4">
                <div className="w-8 h-8 border-2 border-stone/20 border-t-gold rounded-full animate-spin" />
                <span className="text-sm text-stone">Loading preview...</span>
              </div>
            </div>
          )}

          {/* Error/Fallback State */}
          {(hasError || !url) && (
            <div className="absolute inset-0 flex items-center justify-center bg-[#FAFAF9]">
              {fallbackImage ? (
                <Image
                  src={fallbackImage}
                  alt={`${title} preview`}
                  fill
                  className="object-cover object-top"
                />
              ) : (
                <div className="flex flex-col items-center gap-4 p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-line-grey flex items-center justify-center">
                    <svg className="w-8 h-8 text-stone/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-body font-medium text-charcoal mb-1">Live preview coming soon</p>
                    <p className="text-small text-stone">This project showcase is currently in development</p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Iframe */}
          {url && !hasError && (
            <iframe
              ref={iframeRef}
              src={url}
              title={`${title} website preview`}
              className={cn(
                'absolute inset-0 w-full h-full border-none',
                isLoading && 'opacity-0'
              )}
              loading="lazy"
              onLoad={handleLoad}
              onError={handleError}
              sandbox="allow-scripts allow-same-origin allow-popups"
            />
          )}
        </div>
      </div>

      {/* Interaction Hint */}
      {url && !hasError && (
        <p className="text-center text-small text-stone mt-4">
          <span className="inline-flex items-center gap-1.5">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
            </svg>
            Scroll and interact with the live preview above
          </span>
        </p>
      )}
    </motion.div>
  )
}

interface DeviceMockupProps {
  url?: string
  fallbackImage?: string
  title: string
  device?: 'macbook' | 'imac' | 'iphone' | 'ipad'
  className?: string
}

export function DeviceMockup({
  url,
  fallbackImage,
  title,
  device = 'macbook',
  className,
}: DeviceMockupProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    if (!url) {
      setIsLoading(false)
      setHasError(true)
    }
  }, [url])

  const deviceStyles = {
    macbook: {
      wrapper: 'max-w-4xl',
      frame: 'rounded-t-xl bg-[#1C1C1E] p-2 pb-0',
      screen: 'rounded-lg overflow-hidden bg-white aspect-[16/10]',
      base: 'h-4 bg-gradient-to-b from-[#D1D5DB] to-[#9CA3AF] rounded-b-lg',
      notch: 'w-1/4 h-1 bg-[#374151] rounded-b mx-auto',
    },
    imac: {
      wrapper: 'max-w-5xl',
      frame: 'rounded-xl bg-[#1C1C1E] p-3',
      screen: 'rounded-lg overflow-hidden bg-white aspect-[16/9]',
      base: 'w-1/3 h-20 bg-gradient-to-b from-[#D1D5DB] to-[#9CA3AF] mx-auto rounded-b-lg mt-2',
      notch: '',
    },
    iphone: {
      wrapper: 'max-w-xs',
      frame: 'rounded-[2.5rem] bg-[#1C1C1E] p-2',
      screen: 'rounded-[2rem] overflow-hidden bg-white aspect-[9/19.5]',
      base: '',
      notch: 'absolute top-4 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-[#1C1C1E] rounded-full',
    },
    ipad: {
      wrapper: 'max-w-2xl',
      frame: 'rounded-2xl bg-[#1C1C1E] p-3',
      screen: 'rounded-xl overflow-hidden bg-white aspect-[4/3]',
      base: '',
      notch: '',
    },
  }

  const styles = deviceStyles[device]

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
      className={cn('w-full mx-auto', styles.wrapper, className)}
    >
      <div className={styles.frame}>
        {device === 'iphone' && <div className={styles.notch} />}

        <div className={cn('relative', styles.screen)}>
          {/* Loading State */}
          {isLoading && url && (
            <div className="absolute inset-0 flex items-center justify-center bg-[#FAFAF9]">
              <div className="w-6 h-6 border-2 border-stone/20 border-t-gold rounded-full animate-spin" />
            </div>
          )}

          {/* Error/Fallback State */}
          {(hasError || !url) && (
            <div className="absolute inset-0">
              {fallbackImage ? (
                <Image
                  src={fallbackImage}
                  alt={`${title} preview`}
                  fill
                  className="object-cover object-top"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-[#FAFAF9]">
                  <p className="text-small text-stone">Preview coming soon</p>
                </div>
              )}
            </div>
          )}

          {/* Iframe */}
          {url && !hasError && (
            <iframe
              src={url}
              title={`${title} preview on ${device}`}
              className={cn(
                'absolute inset-0 w-full h-full border-none',
                isLoading && 'opacity-0'
              )}
              loading="lazy"
              onLoad={() => setIsLoading(false)}
              onError={() => { setIsLoading(false); setHasError(true) }}
              sandbox="allow-scripts allow-same-origin"
            />
          )}
        </div>
      </div>

      {styles.base && <div className={styles.base}>{styles.notch && device === 'macbook' && <div className={styles.notch} />}</div>}
    </motion.div>
  )
}
