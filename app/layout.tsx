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
  title: 'Clínica Dental en Ñuñoa, Santiago | Smile With Me',
  description:
    'Clínica dental en Ñuñoa, Santiago. Especialistas en ortodoncia, implantes dentales, estética dental, odontopediatría y blanqueamiento dental. Agenda tu hora online.',

  keywords: [
    'clinica dental ñuñoa',
    'dentista en ñuñoa',
    'dentista santiago',
    'ortodoncia santiago',
    'implantes dentales santiago',
    'estetica dental',
    'odontopediatria',
    'blanqueamiento dental',
    'endodoncia'
  ],

  authors: [{ name: 'Smile With Me Estudio Dental' }],
  creator: 'Smile With Me Estudio Dental',
  publisher: 'Smile With Me Estudio Dental',

  icons: {
    icon: '/103386.png',
    apple: '/103386.png',
  },

  openGraph: {
    title: 'Clínica Dental en Ñuñoa | Smile With Me',
    description:
      'Tu sonrisa es nuestra prioridad. Clínica dental en Ñuñoa con atención personalizada, tecnología moderna y especialistas certificados.',
    url: 'https://www.smilewithme.cl',
    siteName: 'Smile With Me',
    locale: 'es_CL',
    type: 'website',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
};

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
