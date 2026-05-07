'use client'
import { useTheme } from './ThemeProvider'
import { useEffect, useState } from 'react'

export default function DarkModeToggle() {
  const { theme, toggle } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  // Don't render until client-side to avoid hydration mismatch
  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 animate-pulse flex-shrink-0" />
    )
  }

  const isDark = theme === 'dark'

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      className="p-2 w-10 h-10 rounded-full text-blue-950 dark:text-amber-400 hover:bg-slate-100 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400 flex items-center justify-center flex-shrink-0"
    >
      <span className="material-symbols-outlined text-[22px]">
        {isDark ? 'light_mode' : 'dark_mode'}
      </span>
    </button>
  )
}
