"use client"

import { Instagram } from "lucide-react"

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
        clipRule="evenodd"
      />
    </svg>
  )
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  )
}

const socialLinks = [
  {
    name: "Instagram",
    handle: "@smilewithme.cl",
    icon: Instagram,
    href: "https://instagram.com/smilewithme.cl",
    gradient: "from-pink-500 via-red-500 to-yellow-500",
    bgColor: "bg-gradient-to-br from-pink-50 to-orange-50",
    hoverBg: "group-hover:from-pink-500 group-hover:via-red-500 group-hover:to-yellow-500",
  },
  {
    name: "Facebook",
    handle: "Smile With Me",
    icon: FacebookIcon,
    href: "https://www.facebook.com/profile.php?id=61558048771952",
    gradient: "from-blue-600 to-blue-400",
    bgColor: "bg-blue-50",
    hoverBg: "group-hover:from-blue-600 group-hover:to-blue-400",
  },
  {
    name: "TikTok",
    handle: "@smilewithme.cl",
    icon: TikTokIcon,
    href: "https://tiktok.com/@smilewithme.cl",
    gradient: "from-foreground to-gray-700",
    bgColor: "bg-gray-50",
    hoverBg: "group-hover:from-foreground group-hover:to-gray-700",
  },
]

export function SocialMedia() {
  return (
    <section className="bg-primary py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 text-center md:px-6">
        <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-accent">
          Conecta con nosotros
        </span>
        <h2 className="mb-4 text-balance text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
          Siguenos en <span className="text-accent">Redes Sociales</span>
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-base text-foreground/80 md:text-lg">
          Mantente al dia con nuestras novedades, consejos de salud bucal y promociones especiales
        </p>

        <div className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-8">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover-lift group flex w-full max-w-[280px] flex-col items-center gap-4 rounded-2xl bg-background p-6 shadow-lg transition-all sm:p-8"
            >
              <div
                className={`flex h-20 w-20 items-center justify-center rounded-2xl ${social.bgColor} bg-gradient-to-br transition-all duration-300 ${social.hoverBg} sm:h-24 sm:w-24`}
              >
                <social.icon
                  className="h-10 w-10 text-foreground transition-colors duration-300 group-hover:text-background sm:h-12 sm:w-12"
                />
              </div>
              <div className="text-center">
                <span className="block text-lg font-bold text-foreground sm:text-xl">
                  {social.name}
                </span>
                <span className="text-sm text-foreground/70">
                  {social.handle}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
