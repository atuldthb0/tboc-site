'use client'

import clsx from 'clsx'
import React, { useEffect, useState } from 'react'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
  theme?: 'dark' | 'light' | null
}

export const Logo = (props: Props) => {
  const { loading: loadingFromProps, priority: priorityFromProps, className, theme } = props

  const loading = loadingFromProps || 'lazy'
  const priority = priorityFromProps || 'low'
  
  // Determine which logo variant to use based on theme
  // The logo should contrast with the header theme for visibility
  const getLogoSrc = () => {
    if (theme === 'dark') {
      return "/dark.png" // Dark logo for dark header (dark backgrounds)
    } else if (theme === 'light') {
      return "/light.png" // Light logo for light header (light backgrounds)
    } else {
      // Fallback to system preference - but handle SSR properly
      // For SSR, we'll default to light.png to match the typical light theme
      if (typeof window === 'undefined') {
        return "/light.png"
      }
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      return prefersDark ? "/dark.png" : "/light.png"
    }
  }

  return (
    /* eslint-disable @next/next/no-img-element */
    <img
      alt="Payload Logo"
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
