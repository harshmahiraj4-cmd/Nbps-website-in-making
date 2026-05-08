'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import Image from 'next/image'
import DarkModeToggle from './DarkModeToggle'
import AnalogClock from './AnalogClock'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/academics', label: 'Academics' },
  { href: '/admissions', label: 'Admissions' },
  { href: '/student-life', label: 'Student Life' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-50 shadow-sm">
      {/* Alert Banner */}
      <div className="bg-blue-950 text-white py-1.5 px-4 font-medium relative text-xs flex flex-col md:flex-row justify-between items-center gap-2" style={{fontFamily:'Georgia,serif'}}>
        <div className="flex items-center justify-center">
          <span className="material-symbols-outlined filled align-middle mr-1 text-sm text-amber-400">campaign</span>
          <span className="text-amber-50">Admissions Open 2026–27 &nbsp;|&nbsp; UDISE: 10181403909</span>
          <Link href="/admissions" className="text-amber-400 underline font-bold ml-2 hover:text-white transition-colors">Apply Now</Link>
        </div>
        
        {/* Contact Details */}
        <div className="hidden md:flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-blue-100">
          <a href="tel:6207834778" className="flex items-center gap-1 hover:text-white transition-colors">
            <span className="material-symbols-outlined text-[14px]">call</span> 6207 834 778
          </a>
          <a href="tel:6204255099" className="flex items-center gap-1 hover:text-white transition-colors">
            <span className="material-symbols-outlined text-[14px]">call</span> 6204 255 099
          </a>
          <a href="tel:9708573000" className="flex items-center gap-1 hover:text-white transition-colors">
            <span className="material-symbols-outlined text-[14px]">call</span> 9708 573 000
          </a>
          <a href="mailto:nationbuildingpublicschool@gmail.com" className="flex items-center gap-1 hover:text-white transition-colors">
            <span className="material-symbols-outlined text-[14px]">mail</span> nationbuildingpublicschool@gmail.com
          </a>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-white dark:bg-gray-900 w-full border-b border-gray-200 dark:border-gray-800">
        <div className="flex justify-between items-center h-20 md:h-24 px-4 md:px-6 max-w-container mx-auto">

          {/* Logo and Clock */}
          <Link href="/" className="flex items-center gap-3">
            <AnalogClock />
            <div className="flex flex-col leading-tight">
              <span className="text-base font-black text-blue-950 dark:text-blue-300 uppercase tracking-tight hidden sm:block" style={{fontFamily:'Georgia,serif'}}>
                Nation Building Public School
              </span>
              <span className="text-base font-black text-blue-950 dark:text-blue-300 uppercase tracking-tight sm:hidden" style={{fontFamily:'Georgia,serif'}}>
                NBPS
              </span>
              <span className="text-[10px] text-amber-600 font-semibold tracking-widest uppercase hidden sm:block" style={{fontFamily:'Georgia,serif'}}>
                We Will Shine Together · CBSE · Play to Class VIII
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-semibold tracking-wide uppercase transition-colors pb-1 ${
                    isActive
                      ? 'text-blue-950 dark:text-blue-300 border-b-2 border-amber-400'
                      : 'text-slate-600 dark:text-slate-400 hover:text-blue-950 dark:hover:text-blue-300'
                  }`}
                  style={{fontFamily:'Georgia,serif'}}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>

          {/* Right: Toggle + CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <DarkModeToggle />
            <Link
              href="/admissions"
              className="px-5 py-2.5 rounded-lg font-semibold bg-secondary-container text-on-secondary-fixed hover:opacity-90 shadow-md transition-all text-sm"
              style={{fontFamily:'Georgia,serif'}}
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile: Toggle + Hamburger */}
          <div className="lg:hidden flex items-center gap-3">
            <DarkModeToggle />
            <button
              className="p-2 text-blue-950 dark:text-blue-300"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <span className="material-symbols-outlined text-2xl">
                {mobileOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 px-6 py-5 space-y-3">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block text-sm font-semibold tracking-wide uppercase py-2 transition-colors ${
                    isActive
                      ? 'text-blue-950 dark:text-blue-300 border-l-4 border-amber-400 pl-4'
                      : 'text-slate-600 dark:text-slate-400 hover:text-blue-950 dark:hover:text-blue-300'
                  }`}
                  style={{fontFamily:'Georgia,serif'}}
                >
                  {link.label}
                </Link>
              )
            })}
            <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
              <Link href="/admissions" className="block w-full py-3 rounded-lg font-semibold bg-secondary-container text-on-secondary-fixed text-center text-sm" style={{fontFamily:'Georgia,serif'}}>
                Apply Now
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
