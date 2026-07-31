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
  metadataBase: new URL('https://www.smilewithme.cl'),
  title: 'Clínica Dental en Ñuñoa | Smile With Me',
  description: 'Clínica dental en Ñuñoa, Santiago. Especialistas en ortodoncia, implantes dentales, estética dental y odontopediatría. Atención personalizada y alta calidad.',
  keywords: ['clínica dental ñuñoa', 'dentista ñuñoa', 'dentista santiago', 'ortodoncia ñuñoa', 'implantes dentales', 'estética dental', 'odontopediatría', 'blanqueamiento dental', 'endodoncia', 'vuelve a sonreír'],
  authors: [{ name: 'Smile With Me Estudio Dental' }],
  creator: 'Smile With Me Estudio Dental',
  publisher: 'Smile With Me Estudio Dental',

  alternates: {
    canonical: 'https://www.smilewithme.cl',
  },

  manifest: '/site.webmanifest',

  icons: {
    icon: [
      { url: '/favicon.jpg', type: 'image/jpeg' },
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon-light-32x32.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: '/apple-icon.png',
  },

  openGraph: {
    title: 'Clínica Dental en Ñuñoa | Smile With Me',
    description:
      'Clínica dental en Ñuñoa, Santiago. Especialistas en ortodoncia, implantes dentales, estética dental y odontopediatría. Atención personalizada y alta calidad.',
    url: 'https://www.smilewithme.cl',
    siteName: 'Smile With Me',
    locale: 'es_CL',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Smile With Me - Clínica Dental en Ñuñoa',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Clínica Dental en Ñuñoa | Smile With Me',
    description:
      'Clínica dental en Ñuñoa, Santiago. Especialistas en ortodoncia, implantes dentales, estética dental y odontopediatría.',
    images: ['/og-image.png'],
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

        {/* Structured Data (JSON-LD) */}
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Dentist',
              name: 'Smile With Me - Estudio Dental',
              description:
                'Clínica dental en Ñuñoa, Santiago. Especialistas en ortodoncia, implantes dentales, estética dental y odontopediatría.',
              url: 'https://www.smilewithme.cl',
              telephone: '+56968286054',
              image: 'https://www.smilewithme.cl/og-image.png',
              logo: 'https://www.smilewithme.cl/images/logo.png',
              priceRange: '$$',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Irarrázaval 2821, Oficina 1404, Torre B',
                addressLocality: 'Ñuñoa',
                addressRegion: 'Región Metropolitana',
                addressCountry: 'CL',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: -33.4569,
                longitude: -70.5966,
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '09:00',
                  closes: '19:00',
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: 'Saturday',
                  opens: '09:00',
                  closes: '14:00',
                },
              ],
              sameAs: [
                'https://www.facebook.com/profile.php?id=61558048771952',
                'https://www.instagram.com/smilewithme.cl',
                'https://www.tiktok.com/@smilewithme.cl',
              ],
            }),
          }}
        />
        {/* End Structured Data */}
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
