
import './globals.css'
import type { Metadata } from 'next'
import { Noto_Sans_Bengali } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';
import AuthContext from '@/context/AuthContext';
import { Toaster } from '@/components/ui/toaster';


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
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1243977103901454"
          crossOrigin="anonymous"></script>
      </head>
      <body className={bengali.className}>
        <AuthContext>
          {children}
          <Toaster />
        </AuthContext>
        <Analytics />
      </body>
    </html>
  )
}
