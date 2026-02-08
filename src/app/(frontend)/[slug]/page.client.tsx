'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'
import { usePathname } from 'next/navigation'

const PageClient: React.FC = () => {
  const { setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()

  useEffect(() => {
    // Home page has dark background, so use dark header theme
    if (pathname === '/') {
      setHeaderTheme('dark')
    } else {
      // Other pages depend on theme - no dark image behind header
      setHeaderTheme(null)
    }
  }, [setHeaderTheme, pathname])
  
  return <React.Fragment />
}

export default PageClient
