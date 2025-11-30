import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '../app/home/layout/Navigation/Navigation'
import Footer from '../app/home/layout/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Okoa Sem - Access Past Papers & Study Resources',
  description: 'Access 24,000+ past papers from 8 schools and 50+ departments. Search by topic, upload notes, and collaborate with study groups.',
  keywords: ['past papers', 'study resources', 'exam preparation', 'university papers', 'Kenya'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}