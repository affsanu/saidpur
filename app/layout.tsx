import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'
import type { Metadata } from 'next'
import { Noto_Sans_Bengali } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';


const bengali = Noto_Sans_Bengali({ subsets: ["bengali"], weight: "400" })

export const metadata: Metadata = {
  title: 'Star Golpo',
  description: 'Documentry of legent',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <meta name="juicyads-site-verification" content="774dd89bcccbdda4620ddd9e4321b7fd" />
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
