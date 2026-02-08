'use client'

import React from 'react'
import { usePathname } from 'next/navigation'

import type { Header as HeaderType } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import Link from 'next/link'
import { SearchIcon } from 'lucide-react'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || []
  const pathname = usePathname()

  // Home page always needs white text because it has dark header theme
  const isHomePage = pathname === '/'
  const navLinkClass = isHomePage 
    ? "text-white hover:text-gray-300" 
    : "text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300"
  const searchIconClass = isHomePage 
    ? "w-5 text-white hover:text-gray-300" 
    : "w-5 text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300"

  return (
    <nav className="flex gap-3 items-center">
      {navItems.map(({ link }, i) => {
        return <CMSLink key={i} {...link} appearance="link" className={navLinkClass} />
      })}
      <Link href="/search">
        <span className="sr-only">Search</span>
        <SearchIcon className={searchIconClass} />
      </Link>
    </nav>
  )
}
