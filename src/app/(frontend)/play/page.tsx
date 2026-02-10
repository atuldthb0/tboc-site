'use client'
import LogoLoop from '@/components/LogoLoop'

const imageLogos = [
  { src: '/dark.png', alt: 'Company 1', href: 'https://company1.com' },
  { src: '/logos/company2.png', alt: 'Company 2', href: 'https://company2.com' },
  { src: '/logos/company3.png', alt: 'Company 3', href: 'https://company3.com' },
]

export default function App() {
  return (
    <div style={{ height: '200px', position: 'relative', overflow: 'hidden' }}>
      {/* Basic horizontal loop */}

      {/* Vertical loop with deceleration on hover */}
      <LogoLoop
        logos={imageLogos}
        speed={100}
        direction="left"
        logoHeight={60}
        gap={60}
        hoverSpeed={0}
        fadeOut
      />
    </div>
  )
}
