import type { Metadata, Viewport } from 'next'
import './globals.css'
import WhatsAppButton from '@/components/WhatsAppButton'
import AIChatbot from '@/components/AIChatbot'
import { ThemeProvider } from '@/components/ThemeProvider'

// Resolves OpenGraph/Twitter image URLs correctly in production
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://nbps.edu.in'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Nation Building Public School (NBPS) | Best CBSE School in Bidupur',
    template: '%s | NBPS – Bidupur, Vaishali',
  },
  description: 'Nation Building Public School (NBPS) – An English Medium CBSE affiliated school in Daud Nagar Chakgadho, Bidupur, Vaishali, Bihar. Admissions open for 2026–27. We Will Shine Together.',
  keywords: 'NBPS, Nation Building Public School, Best school in Bidupur, CBSE school Vaishali, schools in Bihar, English medium school Daud Nagar',
  authors: [{ name: 'Nation Building Public School' }],
  robots: { index: true, follow: true },
  icons: {
    icon: '/nbps-logo.jpg',
    apple: '/nbps-logo.jpg',
  },
  openGraph: {
    title: 'Nation Building Public School (NBPS)',
    description: 'Admissions Open for 2026–27. We Will Shine Together.',
    url: BASE_URL,
    siteName: 'Nation Building Public School',
    images: [
      {
        url: '/gallery/campus-front.jpg',
        width: 1200,
        height: 630,
        alt: 'NBPS Campus Front View',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#002147' },
    { media: '(prefers-color-scheme: dark)', color: '#0c1120' },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Newsreader:opsz,wght@6..72,400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap"
          rel="stylesheet"
        />
        {/* Prevent flash of wrong theme on page load */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('nbps-theme');
                  var systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (saved === 'dark' || (!saved && systemDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="transition-colors duration-300">
        <ThemeProvider>
          {children}
          <WhatsAppButton />
          <AIChatbot />
        </ThemeProvider>
      </body>
    </html>
  )
}
