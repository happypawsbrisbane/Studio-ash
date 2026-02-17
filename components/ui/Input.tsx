'use client'

import { forwardRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
  hint?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, hint, className, id, type = 'text', ...props }, ref) => {
    const inputId = id || label.toLowerCase().replace(/\s+/g, '-')
    const [isFocused, setIsFocused] = useState(false)

    return (
      <div className="space-y-2">
        <label
          htmlFor={inputId}
          className={cn(
            'block text-small font-medium transition-colors duration-200',
            isFocused ? 'text-white' : 'text-subtle',
            error && 'text-rose'
          )}
        >
          {label}
        </label>
        <input
          ref={ref}
          id={inputId}
          type={type}
          className={cn(
            'block w-full px-4 py-3 bg-surface/50',
            'border border-white/[0.08] rounded-xl',
            'text-body text-white placeholder:text-muted',
            'transition-all duration-300 ease-smooth-out',
            'focus:outline-none focus:border-violet/50 focus:ring-0 focus:bg-surface',
            'disabled:bg-surface/30 disabled:cursor-not-allowed',
            error && 'border-rose/50 focus:border-rose/50',
            className
          )}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined}
          {...props}
        />
        {error && (
          <p id={`${inputId}-error`} className="text-small text-rose" role="alert">
            {error}
          </p>
        )}
        {hint && !error && (
          <p id={`${inputId}-hint`} className="text-small text-muted">
            {hint}
          </p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  error?: string
  hint?: string
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, error, hint, className, id, ...props }, ref) => {
    const inputId = id || label.toLowerCase().replace(/\s+/g, '-')
    const [isFocused, setIsFocused] = useState(false)

    return (
      <div className="space-y-2">
        <label
          htmlFor={inputId}
          className={cn(
            'block text-small font-medium transition-colors duration-200',
            isFocused ? 'text-white' : 'text-subtle',
            error && 'text-rose'
          )}
        >
          {label}
        </label>
        <textarea
          ref={ref}
          id={inputId}
          className={cn(
            'block w-full px-4 py-3 bg-surface/50',
            'border border-white/[0.08] rounded-xl',
            'text-body text-white placeholder:text-muted',
            'transition-all duration-300 ease-smooth-out',
            'focus:outline-none focus:border-violet/50 focus:ring-0 focus:bg-surface',
            'disabled:bg-surface/30 disabled:cursor-not-allowed',
            'resize-none min-h-[160px]',
            error && 'border-rose/50 focus:border-rose/50',
            className
          )}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined}
          {...props}
        />
        {error && (
          <p id={`${inputId}-error`} className="text-small text-rose" role="alert">
            {error}
          </p>
        )}
        {hint && !error && (
          <p id={`${inputId}-hint`} className="text-small text-muted">
            {hint}
          </p>
        )}
      </div>
    )
  }
)

TextArea.displayName = 'TextArea'

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string
  error?: string
  options: { value: string; label: string }[]
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, options, className, id, ...props }, ref) => {
    const inputId = id || label.toLowerCase().replace(/\s+/g, '-')
    const [isFocused, setIsFocused] = useState(false)

    return (
      <div className="space-y-2">
        <label
          htmlFor={inputId}
          className={cn(
            'block text-small font-medium transition-colors duration-200',
            isFocused ? 'text-white' : 'text-subtle',
            error && 'text-rose'
          )}
        >
          {label}
        </label>
        <select
          ref={ref}
          id={inputId}
          className={cn(
            'block w-full px-4 py-3 bg-surface/50',
            'border border-white/[0.08] rounded-xl',
            'text-body text-white',
            'transition-all duration-300 ease-smooth-out',
            'focus:outline-none focus:border-violet/50 focus:ring-0 focus:bg-surface',
            'disabled:bg-surface/30 disabled:cursor-not-allowed',
            'appearance-none bg-no-repeat bg-right',
            'cursor-pointer',
            error && 'border-rose/50 focus:border-rose/50',
            className
          )}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2371718A'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
            backgroundSize: '1.5rem',
            backgroundPosition: 'right 0.75rem center',
          }}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          aria-invalid={error ? 'true' : 'false'}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error && (
          <p className="text-small text-rose" role="alert">
            {error}
          </p>
        )}
      </div>
    )
  }
)

Select.displayName = 'Select'
