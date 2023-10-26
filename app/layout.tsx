import Container from '@/components/atoms/container'
import Navbar from '@/components/molecules/navbar'
import Topbar from '@/components/molecules/topbar'

import '@/styles/globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Máquinas Monteiro | Soluções para fabricação de joias',
  description: 'Máquinas Monteiro'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Container>
          <Topbar />
          <Navbar />
          {children}
        </Container>
      </body>
    </html>
  )
}
