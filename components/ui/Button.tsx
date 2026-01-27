'use client'

import { forwardRef } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ButtonSize = 'default' | 'sm' | 'lg'

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-charcoal text-off-white hover:bg-charcoal/90',
  secondary: 'bg-transparent border border-charcoal text-charcoal hover:bg-charcoal hover:text-off-white',
  ghost: 'bg-transparent text-charcoal hover:bg-charcoal/5',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-small',
  default: 'px-6 py-3 text-body',
  lg: 'px-8 py-4 text-body-lg',
}

const baseStyles = cn(
  'relative inline-flex items-center justify-center font-sans font-medium',
  'transition-colors duration-300 ease-smooth-out',
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze focus-visible:ring-offset-2',
  'disabled:pointer-events-none disabled:opacity-50'
)

interface ButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  isLoading?: boolean
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
  className?: string
  children: React.ReactNode
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    variant = 'primary',
    size = 'default',
    isLoading = false,
    disabled = false,
    type = 'button',
    onClick,
    className,
    children,
  }, ref) => {
    return (
      <motion.button
        ref={ref}
        type={type}
        className={cn(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        disabled={disabled || isLoading}
        onClick={onClick}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
      >
        {isLoading ? (
          <>
            <span className="opacity-0">{children}</span>
            <span className="absolute inset-0 flex items-center justify-center">
              <svg
                className="animate-spin h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
            </span>
          </>
        ) : (
          children
        )}
      </motion.button>
    )
  }
)

Button.displayName = 'Button'

interface ButtonLinkProps {
  href: string
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  children: React.ReactNode
  external?: boolean
  style?: React.CSSProperties
}

export type { ButtonLinkProps }

export function ButtonLink({
  href,
  variant = 'primary',
  size = 'default',
  className,
  children,
  external = false,
  style,
}: ButtonLinkProps) {
  const linkClassName = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className
  )

  if (external) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClassName}
        style={style}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <Link href={href} className={linkClassName} style={style}>
      {children}
    </Link>
  )
}
