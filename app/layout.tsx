import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Adeyemi Adeniji | System & Soul',
  description: 'Computer Science student and Reflective Model Translation Partner. Building ethical, scalable digital systems through algorithmic thinking and human leadership. Explore essays on AI, education, and systems thinking.',
  keywords: ['portfolio', 'developer', 'computer science', 'leadership', 'AI ethics', 'education', 'systems thinking', 'philosophy'],
  authors: [{ name: 'Adeyemi Adeniji', url: 'https://adeyemiadeniji.com' }],
  creator: 'Adeyemi Adeniji',
  publisher: 'Adeyemi Adeniji',
  formatDetection: {
    email: true,
    telephone: false,
    address: false,
  },
  metadataBase: new URL('https://adeyemiadeniji.com'),
  openGraph: {
    title: 'Adeyemi Adeniji | System & Soul',
    description: 'Structuring Wisdom. Engineering Systems. Building the future through thoughtful engineering and ethical leadership.',
    type: 'website',
    url: 'https://adeyemiadeniji.com',
    siteName: 'Adeyemi Adeniji',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Adeyemi Adeniji - System & Soul | Computer Science & AI Ethics',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adeyemi Adeniji | System & Soul',
    description: 'Structuring Wisdom. Engineering Systems.',
    creator: '@_adeyemiadeniji',
    images: ['/og-image.svg'],
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/apple-touch-icon.svg', type: 'image/svg+xml' },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0a192f" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="bg-navy text-slate font-main">
        {children}
      </body>
    </html>
  )
}
