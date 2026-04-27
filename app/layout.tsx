import React from "react"
import type { Metadata, Viewport } from 'next'
import { Roboto } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'

const roboto = Roboto({ 
  subsets: ["latin"],
  weight: ['400', '500', '700']
});

export const metadata: Metadata = {
  title: 'Smile With Me - Clínica Dental en Ñuñoa | Vuelve a Sonreír',
  description: 'Clínica dental en Ñuñoa, Santiago. Especialistas en ortodoncia, implantes dentales, estética dental, odontopediatría y más. Atención personalizada y alta calidad.',
  keywords: ['clínica dental ñuñoa', 'dentista ñuñoa', 'dentista santiago', 'ortodoncia ñuñoa', 'implantes dentales', 'estética dental', 'odontopediatría', 'blanqueamiento dental', 'endodoncia', 'vuelve a sonreír'],
  authors: [{ name: 'Smile With Me Estudio Dental' }],
  creator: 'Smile With Me Estudio Dental',
  publisher: 'Smile With Me Estudio Dental',

  icons: {
    icon: '/favicon.jpg',
    apple: '/favicon.jpg',
  },

  openGraph: {
    title: 'Smile With Me - Clínica Dental en Ñuñoa | Vuelve a Sonreír',
    description:
      'Clínica dental en Ñuñoa, Santiago. Especialistas en ortodoncia, implantes dentales, estética dental, odontopediatría y más. Atención personalizada y alta calidad.',
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
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PBL43QBX');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body className={`font-sans antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PBL43QBX"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
        <Analytics />
      </body>
    </html>
  )
}
