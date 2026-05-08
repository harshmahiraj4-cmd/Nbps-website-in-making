import type { Metadata } from 'next'
import './globals.css'
import WhatsAppButton from '@/components/WhatsAppButton'
import { ThemeProvider } from '@/components/ThemeProvider'

export const metadata: Metadata = {
  title: 'Nation Building Public School (NBPS) | Best CBSE School in Bidupur',
  description: 'Nation Building Public School (NBPS) – An English Medium CBSE affiliated school in Daud Nagar Chakgadho, Bidupur, Vaishali, Bihar. Admissions open for 2026–27. We Will Shine Together.',
  keywords: 'NBPS, Nation Building Public School, Best school in Bidupur, CBSE school Vaishali, schools in Bihar, English medium school Daud Nagar',
  icons: {
    icon: '/nbps-logo.jpg',
    apple: '/nbps-logo.jpg',
  },
  openGraph: {
    title: 'Nation Building Public School (NBPS)',
    description: 'Admissions Open for 2026-27. We Will Shine Together.',
    url: 'https://nbps.edu.in',
    siteName: 'Nation Building Public School',
    images: [
      {
        url: '/gallery/campus-front.jpg',
        width: 1200,
        height: 630,
        alt: 'NBPS Campus Front',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Newsreader:opsz,wght@6..72,400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
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
        </ThemeProvider>
      </body>
    </html>
  )
}
