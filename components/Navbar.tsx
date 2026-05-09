'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
  const [visible, setVisible] = useState(true)
  const [scrolled, setScrolled] = useState(false)
  const lastScrollY = useRef(0)
  const ticking = useRef(false)

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(() => {
          const currentY = window.scrollY
          const diff = currentY - lastScrollY.current

          // Show/hide based on scroll direction
          if (currentY < 80) {
            setVisible(true)
          } else if (diff > 6) {
            // Scrolling down — hide
            setVisible(false)
            setMobileOpen(false)
          } else if (diff < -4) {
            // Scrolling up — show
            setVisible(true)
          }

          setScrolled(currentY > 20)
          lastScrollY.current = currentY
          ticking.current = false
        })
        ticking.current = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Top Info Bar — always visible, not animated */}
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="fixed top-0 w-full z-50 bg-[#001433] text-white py-1.5 px-4 text-xs flex flex-col md:flex-row justify-between items-center gap-1"
        style={{ fontFamily: 'Georgia, serif' }}
      >
        <div className="flex items-center justify-center gap-2">
          <span className="material-symbols-outlined text-amber-400 text-sm align-middle">campaign</span>
          <span className="text-amber-50">Admissions Open 2026–27 &nbsp;|&nbsp; UDISE: 10181403909</span>
          <Link href="/admissions" className="text-amber-400 underline font-bold ml-1 hover:text-white transition-colors">
            Apply Now
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-x-4 text-blue-200">
          <a href="tel:6207834778" className="flex items-center gap-1 hover:text-white transition-colors">
            <span className="material-symbols-outlined text-[13px]">call</span>6207 834 778
          </a>
          <a href="tel:6204255099" className="flex items-center gap-1 hover:text-white transition-colors">
            <span className="material-symbols-outlined text-[13px]">call</span>6204 255 099
          </a>
          <a href="tel:9708573000" className="flex items-center gap-1 hover:text-white transition-colors">
            <span className="material-symbols-outlined text-[13px]">call</span>9708 573 000
          </a>
          <a href="mailto:nationbuildingpublicschool@gmail.com" className="flex items-center gap-1 hover:text-white transition-colors">
            <span className="material-symbols-outlined text-[13px]">mail</span>nationbuildingpublicschool@gmail.com
          </a>
        </div>
      </motion.div>

      {/* Smart Navbar */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{
          y: visible ? 0 : -110,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.38,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        className="fixed top-[38px] md:top-[30px] w-full z-40"
      >
        <nav
          className={`mx-3 md:mx-6 rounded-2xl transition-all duration-500 ${
            scrolled
              ? 'bg-white/80 dark:bg-gray-900/85 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,21,71,0.18)] border border-white/40 dark:border-gray-700/50'
              : 'bg-white/60 dark:bg-gray-900/60 backdrop-blur-md border border-white/20 dark:border-gray-800/30'
          }`}
        >
          <div className="flex justify-between items-center h-16 md:h-20 px-4 md:px-6 max-w-[1400px] mx-auto">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group min-w-0 flex-shrink-0 max-w-[280px] lg:max-w-xs" onClick={() => setMobileOpen(false)}>
              <div className="transition-transform duration-300 group-hover:scale-105 flex-shrink-0">
                <AnalogClock />
              </div>
              <div className="flex flex-col leading-tight min-w-0">
                <span
                  className="text-sm font-black text-blue-950 dark:text-blue-200 uppercase tracking-tight hidden sm:block truncate"
                  style={{ fontFamily: 'Georgia, serif' }}
                >
                  Nation Building Public School
                </span>
                <span
                  className="text-base font-black text-blue-950 dark:text-blue-200 uppercase tracking-tight sm:hidden"
                  style={{ fontFamily: 'Georgia, serif' }}
                >
                  NBPS
                </span>
                <span
                  className="text-[9px] text-amber-600 font-semibold tracking-wider uppercase hidden sm:block truncate"
                  style={{ fontFamily: 'Georgia, serif' }}
                >
                  We Will Shine Together · CBSE · Play–VIII
                </span>
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-3 py-2 text-sm font-semibold tracking-wide uppercase transition-all duration-200 rounded-lg group ${
                      isActive
                        ? 'text-blue-950 dark:text-blue-200'
                        : 'text-slate-600 dark:text-slate-400 hover:text-blue-950 dark:hover:text-blue-200'
                    }`}
                    style={{ fontFamily: 'Georgia, serif' }}
                  >
                    {link.label}
                    {/* Active indicator */}
                    <span
                      className={`absolute bottom-0.5 left-3 right-3 h-0.5 rounded-full bg-amber-400 transition-all duration-300 ${
                        isActive ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0 group-hover:opacity-60 group-hover:scale-x-100'
                      }`}
                    />
                  </Link>
                )
              })}
            </div>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-2.5">
              <DarkModeToggle />

              {/* Student Portal Button */}
              <a
                href="https://www.vidyapranali.com/admin/auth/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{
                  fontFamily: 'Georgia, serif',
                  background: 'linear-gradient(135deg, #001433 0%, #002d6e 100%)',
                  color: '#FFD700',
                  border: '1px solid rgba(255,215,0,0.35)',
                  boxShadow: '0 0 16px rgba(255,215,0,0.2)',
                }}
              >
                <span className="material-symbols-outlined text-[16px]">account_circle</span>
                Student Portal
              </a>

              {/* Apply Now Button */}
              <Link
                href="/admissions"
                className="px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{
                  fontFamily: 'Georgia, serif',
                  background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                  color: '#001433',
                  boxShadow: '0 4px 15px rgba(245,158,11,0.3)',
                }}
              >
                Apply Now
              </Link>
            </div>

            {/* Mobile: DarkMode + Hamburger */}
            <div className="lg:hidden flex items-center gap-2">
              <DarkModeToggle />
              <button
                className="p-2 rounded-xl text-blue-950 dark:text-blue-200 hover:bg-blue-950/10 dark:hover:bg-white/10 transition-all duration-200"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                <motion.span
                  key={mobileOpen ? 'close' : 'menu'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="material-symbols-outlined text-2xl block"
                >
                  {mobileOpen ? 'close' : 'menu'}
                </motion.span>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                key="mobile-menu"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="lg:hidden overflow-hidden border-t border-white/20 dark:border-gray-700/40"
              >
                <div className="px-5 py-4 space-y-1">
                  {navLinks.map((link, i) => {
                    const isActive = pathname === link.href
                    return (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: -16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05, duration: 0.25 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setMobileOpen(false)}
                          className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold uppercase tracking-wide transition-all duration-200 ${
                            isActive
                              ? 'bg-blue-950/10 dark:bg-blue-200/10 text-blue-950 dark:text-blue-200 border-l-4 border-amber-400'
                              : 'text-slate-600 dark:text-slate-400 hover:bg-blue-950/5 hover:text-blue-950 dark:hover:text-blue-200'
                          }`}
                          style={{ fontFamily: 'Georgia, serif' }}
                        >
                          {link.label}
                        </Link>
                      </motion.div>
                    )
                  })}

                  {/* Mobile CTAs */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: navLinks.length * 0.05 + 0.05 }}
                    className="pt-4 pb-1 border-t border-white/20 dark:border-gray-700/40 space-y-3"
                  >
                    <a
                      href="https://www.vidyapranali.com/admin/auth/"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold transition-all duration-200"
                      style={{
                        fontFamily: 'Georgia, serif',
                        background: 'linear-gradient(135deg, #001433 0%, #002d6e 100%)',
                        color: '#FFD700',
                        border: '1px solid rgba(255,215,0,0.3)',
                      }}
                    >
                      <span className="material-symbols-outlined text-[16px]">account_circle</span>
                      Student Portal
                    </a>
                    <Link
                      href="/admissions"
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center justify-center w-full py-3 rounded-xl text-sm font-semibold transition-all duration-200"
                      style={{
                        fontFamily: 'Georgia, serif',
                        background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                        color: '#001433',
                      }}
                    >
                      Apply Now
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </motion.header>

      {/* Spacer so page content doesn't hide under navbar */}
      <div className="h-[80px] md:h-[78px]" />
    </>
  )
}
