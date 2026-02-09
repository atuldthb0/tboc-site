'use client';

import React from 'react';

export default function BigDreamCTA() {
  return (
    <section className="relative w-full h-screen flex items-center justify-end overflow-hidden pt-12">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/images/cta.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Optional: Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20 z-0" />

      {/* Left Side - Trust Indicators (Vertical Column) */}
      <div className="absolute left-8 md:left-16 lg:left-24 top-1/2 -translate-y-1/2 z-10 hidden md:flex flex-col gap-12 lg:gap-16 text-white">
        <div className="text-left">
          <div className="text-white font-semibold text-3xl lg:text-4xl mb-2">100+</div>
          <div className="text-white/60 text-sm lg:text-base">Projects Delivered</div>
        </div>
        <div className="text-left">
          <div className="text-white font-semibold text-3xl lg:text-4xl mb-2">24/7</div>
          <div className="text-white/60 text-sm lg:text-base">Support</div>
        </div>
        <div className="text-left">
          <div className="text-white font-semibold text-3xl lg:text-4xl mb-2">∞</div>
          <div className="text-white/60 text-sm lg:text-base">Possibilities</div>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl w-full px-6 md:px-16 lg:px-24">
        {/* Mobile: shift content up, keep to right, limit width to avoid red band */}
        <div className="ml-auto w-[70%] sm:w-[65%] md:max-w-[40rem] text-right pr-4 sm:pr-6 md:pr-12 lg:pr-16 
                        -mt-16 sm:-mt-12 md:mt-0">
          
          {/* Company Tag */}
          <div className="mb-4 md:mb-8">
            <span className="text-white/60 text-xs sm:text-sm md:text-base font-light tracking-[0.2em] uppercase">
              The Big O Company
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-white mb-6 md:mb-12">
            <span className="block text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-1">
              The Dream
            </span>
            <span className="block text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] relative">
              Project
              {/* Red accent underline */}
              <span className="absolute bottom-0 -right-2 sm:-right-4 md:-right-12 lg:-right-12 
                             w-20 sm:w-28 md:w-40 lg:w-48 h-1 bg-red-500"></span>
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="text-white/90 text-sm sm:text-base md:text-xl lg:text-2xl font-light leading-relaxed 
                        mb-18 md:mb-14 ml-auto">
            Your vision, our expertise. We&apos;re here for you with the bold solutions 
            and unwavering support you need.
          </p>

          {/* CTA Button */}
          <div className="flex justify-end mb-8 md:mb-0">
            <button className="group relative px-5 sm:px-8 md:px-12 py-3 sm:py-4 md:py-6 
                             text-sm sm:text-base md:text-lg font-semibold tracking-wide 
                             overflow-hidden transition-all duration-300 border-2 border-white text-white hover:text-white">
              {/* Button background that slides in on hover */}
              <span className="absolute inset-0 bg-red-500 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
              
              {/* Button text */}
              <span className="relative z-10 flex items-center gap-2 md:gap-3">
                Let&apos;s Build Together
                <svg 
                  className="w-4 h-4 md:w-5 md:h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M17 8l4 4m0 0l-4 4m4-4H3" 
                  />
                </svg>
              </span>
            </button>
          </div>

          {/* Mobile Stats - Horizontal Row */}
          <div className="md:hidden flex justify-end gap-6 text-white mt-8">
            <div className="text-center">
              <div className="text-white font-semibold text-xl sm:text-2xl">100+</div>
              <div className="text-white/60 text-xs sm:text-sm">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-white font-semibold text-xl sm:text-2xl">24/7</div>
              <div className="text-white/60 text-xs sm:text-sm">Support</div>
            </div>
            <div className="text-center">
              <div className="text-white font-semibold text-xl sm:text-2xl">∞</div>
              <div className="text-white/60 text-xs sm:text-sm">Possibilities</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}