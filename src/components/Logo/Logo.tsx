'use client'

import clsx from 'clsx'
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
  theme?: 'dark' | 'light' | null
}

export const Logo = (props: Props) => {
  const { loading: loadingFromProps, priority: priorityFromProps, className, theme } = props
  const pathname = usePathname()

  const loading = loadingFromProps || 'lazy'
  const priority = priorityFromProps || 'low'
  
  // Determine which logo variant to use based on theme and page context
  // The logo should provide good contrast against the header background
  const getLogoSrc = () => {
    // Home page has black hero section, so we need dark logo (with white text) for visibility
    if (pathname === '/') {
      return "/dark.png"
    }

    if (theme === 'dark') {
      return "/dark.png" // Dark logo (white text) for dark theme (light navbar)
    } else if (theme === 'light') {
      return "/light.png" // Light logo (black text) for light theme (dark navbar)
    } else {
      // Auto theme: fallback to system preference
      if (typeof window === 'undefined') {
        // For SSR, default to light.png to match typical light theme
        return "/light.png"
      }
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      return prefersDark ? "/dark.png" : "/light.png"
    }
  }

  return (
    /* eslint-disable @next/next/no-img-element */
    <img
      alt="Tboc Logo"
      width={193}
      height={34}
      loading={loading}
      fetchPriority={priority}
      decoding="async"
      className={clsx('max-w-[9.375rem] w-full h-[34px]', className)}
      src={getLogoSrc()}
    />
  )
}
