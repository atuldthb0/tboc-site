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
      setHeaderTheme('light')
    }
  }, [setHeaderTheme, pathname])
  
  return <React.Fragment />
}

export default PageClient
