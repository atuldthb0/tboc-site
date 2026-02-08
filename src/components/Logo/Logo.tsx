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
  
  // Determine which logo variant to use based on theme
  // The logo should match the theme for consistency
  const getLogoSrc = () => {
    // Home page always shows dark logo regardless of theme
    if (pathname === '/') {
      return "/dark.png"
    }

    if (theme === 'dark') {
      return "/dark.png" // Dark logo for dark theme
    } else if (theme === 'light') {
      return "/light.png" // Light logo for light theme
    } else {
      // Fallback to system preference - but handle SSR properly
      if (typeof window === 'undefined') {
        // For SSR, we can't detect system preference, so we need to be consistent
        // Let's default to light.png for SSR to match typical light theme
        return "/light.png"
      }
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      // When system has dark theme, use dark logo
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
