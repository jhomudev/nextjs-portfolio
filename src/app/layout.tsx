import type { Metadata } from 'next'
import { Nunito_Sans, Dosis } from 'next/font/google'
import './globals.css'
import ThemeProvider from '@/providers/ThemeProvider'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

const nunito = Nunito_Sans({ 
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap'
})

const dosis = Dosis({ 
  subsets: ['latin'],
  variable: '--font-dosis',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'jhomudev',
  description: 'jhomudev porfoltio, NextJs 13, Framer Motion',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} ${dosis.variable}`}>
        <ThemeProvider>
          <div className="font-nunito text-color bg-color min-h-[100dvh]">
            <NavBar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
