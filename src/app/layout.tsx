import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Navbar } from '@/components'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TMDB',
  description: 'TMDB - The Movie Database using Next App Router',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />

        {children}
      </body>
    </html>
  )
}
