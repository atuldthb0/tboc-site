'use client'

import React from 'react'

import type { Media } from '@/payload-types'

import { LogoLoop as LogoLoopComponent } from '@/components/LogoLoop'

interface LogoItem {
  image: Media
  altText: string
  url?: string
  title: string
}

interface LogoLoopBlockProps {
  blockType: 'logoLoop'
  blockName?: string
  logos: LogoItem[]
  speed?: number
  direction?: 'left' | 'right' | 'up' | 'down'
  logoHeight?: number
  gap?: number
  pauseOnHover?: boolean
  scaleOnHover?: boolean
  fadeOut?: boolean
}

export const LogoLoopBlock: React.FC<LogoLoopBlockProps> = ({
  logos,
  speed = 120,
  direction = 'left',
  logoHeight = 28,
  gap = 32,
  pauseOnHover = true,
  scaleOnHover = true,
  fadeOut = false,
}) => {
  // Transform Payload data to LogoLoop format
  const logoItems = logos?.map((logo) => ({
    src: logo.image?.url || '',
    alt: logo.altText || logo.title || '',
    href: logo.url || undefined,
    title: logo.title || '',
  })) || []

  if (logoItems.length === 0) {
    return null
  }

  return (
    <div className="py-8">
      <LogoLoopComponent
        logos={logoItems}
        speed={speed}
        direction={direction}
        logoHeight={logoHeight}
        gap={gap}
        pauseOnHover={pauseOnHover}
        hoverSpeed={pauseOnHover ? 0 : undefined}
        scaleOnHover={scaleOnHover}
        fadeOut={fadeOut}
        ariaLabel="Partner logos"
      />
    </div>
  )
}