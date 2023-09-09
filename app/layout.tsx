import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'
import type { Metadata } from 'next'
import { Noto_Sans_Bengali } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';


const bengali = Noto_Sans_Bengali({ subsets: ["bengali"], weight: "400" })

export const metadata: Metadata = {
  title: 'Star Golpo',
  description: 'News & Magazin',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>

      </head>
      <body className={bengali.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
