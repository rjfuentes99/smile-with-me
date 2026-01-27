import React from "react"
import type { Metadata, Viewport } from 'next'
import { Roboto } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const roboto = Roboto({
  subsets: ["latin"],
  weight: ['400', '500', '700']
});

export const metadata: Metadata = {
  title: 'Smile With Me - Estudio Dental en Santiago',
  description: 'Clinica dental en Nuñoa, Santiago. Especialistas en ortodoncia, implantes dentales, estetica dental, odontopediatria y mas.  Agenda tu cita online.',
  keywords: ['dentista santiago', 'clinica dental nuñoa', 'ortodoncia', 'implantes dentales', 'estetica dental', 'odontopediatria', 'blanqueamiento dental', 'endodoncia'],
  authors: [{ name: 'Smile With Me Estudio Dental' }],
  icons: {
    icon: '/103386.png',
    apple: '/103386.png',
  },
  openGraph: {
    title: 'Smile With Me - Estudio Dental en Santiago',
    description: 'Tu sonrisa es nuestra prioridad. Clinica dental con atencion personalizada y de calidad en Santiago.',
    type: 'website',
    locale: 'es_CL',
    siteName: 'Smile With Me Estudio Dental',
  },
  robots: {
    index: true,
    follow: true,
  },
  generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: '#FAEBCD',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
