import '@/styles/globals.css'
import type { Metadata } from 'next'
import { JetBrains_Mono, Inter } from 'next/font/google'

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-mono',
})

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'GrowShow Server - Premium Private Server Experience',
  description: 'GrowShow adalah Private Server premium yang telah berdiri sejak 2021. Nikmati pengalaman bermain terbaik dengan server 24/7, daily giveaway, dan community yang ramah.',
  keywords: ['GrowShow', 'Private Server', 'Growtopia', 'Server 24/7'],
  authors: [{ name: 'SkyDev' }],
  creator: 'SkyDev',
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'GrowShow Server - Premium Server Experience',
    description: 'Server private premium dengan uptime 24/7, daily giveaway, dan komunitas yang supportif',
    type: 'website',
    locale: 'id_ID',
    siteName: 'GrowShow Server'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GrowShow Server - Premium Server Experience',
    description: 'Server private premium dengan uptime 24/7, daily giveaway, dan komunitas yang supportif'
  },
  manifest: '/manifest.json',
  themeColor: '#0284c7'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className={`${jetbrainsMono.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0284c7" />
      </head>
      <body className="font-sans bg-dark-metallic text-white antialiased overflow-x-hidden">
        <div className="min-h-screen relative">
          {/* Background Effects */}
          <div className="fixed inset-0 z-0">
            <div className="absolute inset-0 bg-grid-pattern" style={{ backgroundSize: '50px 50px' }} />
            <div className="absolute inset-0 bg-gradient-to-br from-darkBlue-900/50 via-primary-900/30 to-darkBlue-950/80" />
            <div className="absolute inset-0 bg-metallic-shine opacity-5" />
          </div>
          
          {/* Floating Particles */}
          <div className="fixed inset-0 z-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-primary-400 rounded-full animate-float opacity-60"
                style={{
                  left: `${10 + i * 15}%`,
                  animationDelay: `${i * 2}s`,
                  animationDuration: `${6 + i}s`
                }}
              />
            ))}
          </div>
          
          {/* Content */}
          <main className="relative z-10">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}