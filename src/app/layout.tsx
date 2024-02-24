import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import ThemeProvider from '@/providers/ThemeProvider'
import type { Metadata } from 'next'
import { Titillium_Web } from 'next/font/google'
import './globals.css'

const titillium = Titillium_Web({
  subsets: ['latin'],
  weight: ["300", "400", "600", "700", "200", "900"],
  variable: '--font-titillium'
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
      <body className={`${titillium.variable} font-titillium`}>
        <ThemeProvider>
          <div className="relative text-color min-h-[100dvh]">
          <div className="absolute top-0 bottom-0 z-[-2] min-h-screen w-full bg-color dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
            <NavBar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
