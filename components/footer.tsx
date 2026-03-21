"use client"

import React from "react"

import Image from "next/image"
import { Phone, Mail, MapPin, Clock, Calendar, Instagram, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const APPOINTMENT_URL = "https://a259348cdd801055c6e465fe356840cbf43cc129.agenda.softwaredentalink.com/agenda"
const WHATSAPP_NUMBER = '+56968286054'
const WHATSAPP_MESSAGE = '¡Hola! Me interesa agendar una cita en Smile With Me Estudio Dental.'
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, '')}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

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

const footerLinks = [
  { href: "#home", label: "Inicio" },
  { href: "#about", label: "Nosotros" },
  { href: "#services", label: "Servicios" },
  { href: "#location", label: "Ubicación" },
]

export function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer id="contact" className="bg-foreground px-4 py-12 text-primary md:px-6 md:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Logo & Description */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Image
              src="/images/logo.png"
              alt="Smile With Me - Estudio Dental"
              width={200}
              height={70}
              className="mb-4 h-auto w-40 sm:w-44"
            />
            <p className="mb-6 text-sm leading-relaxed text-primary/80 sm:text-base">
              Tu sonrisa es nuestra prioridad. Cuidamos de tu salud bucal con
              dedicación y profesionalismo.
            </p>
            <Button
              asChild
              className="w-full rounded-full bg-accent text-accent-foreground transition-all hover:bg-accent/90 hover:shadow-lg sm:w-auto"
            >
              <a
                href={APPOINTMENT_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Calendar className="mr-2 h-4 w-4" />
                Agenda tu cita
              </a>
            </Button>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 text-lg font-bold text-accent">Contacto</h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="tel:+56968286054" 
                  className="flex items-center gap-3 transition-colors hover:text-accent"
                >
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Phone className="h-5 w-5 text-accent" />
                  </span>
                  <span className="text-sm sm:text-base">+56 9 6828 6054</span>
                </a>
              </li>
              <li>
                <a 
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 transition-colors hover:text-accent"
                >
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <MessageCircle className="h-5 w-5 text-accent" />
                  </span>
                  <span className="text-sm sm:text-base">WhatsApp</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:contacto@smilewithme.cl" 
                  className="flex items-center gap-3 transition-colors hover:text-accent"
                >
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Mail className="h-5 w-5 text-accent" />
                  </span>
                  <span className="text-sm sm:text-base">contacto@smilewithme.cl</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <MapPin className="h-5 w-5 text-accent" />
                </span>
                <span className="text-sm sm:text-base">
                  Irarrázaval 2821, Of. 1404
                  <br />
                  Torre B, Ñuñoa
                </span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="mb-4 text-lg font-bold text-accent">Horarios</h4>
            <ul className="space-y-3 text-sm sm:text-base">
              <li className="flex items-center gap-3">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Clock className="h-5 w-5 text-accent" />
                </span>
                <div>
                  <p className="font-medium">Lunes - Viernes</p>
                  <p className="text-primary/70">9:00 - 19:00</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Clock className="h-5 w-5 text-accent" />
                </span>
                <div>
                  <p className="font-medium">Sábado</p>
                  <p className="text-primary/70">9:00 - 14:00</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Social & Links */}
          <div>
            <h4 className="mb-4 text-lg font-bold text-accent">Redes Sociales</h4>
            <div className="mb-6 flex gap-3">
              <a
                href="https://instagram.com/smilewithme.cl"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 transition-all hover:scale-110 hover:bg-accent"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61558048771952"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 transition-all hover:scale-110 hover:bg-accent"
                aria-label="Facebook"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a
                href="https://tiktok.com/@smilewithme.cl"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 transition-all hover:scale-110 hover:bg-accent"
                aria-label="TikTok"
              >
                <TikTokIcon className="h-5 w-5" />
              </a>
            </div>
            <h4 className="mb-3 text-lg font-bold text-accent">Enlaces</h4>
            <ul className="grid grid-cols-2 gap-2 text-sm sm:grid-cols-1 sm:text-base">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-primary/20 pt-8 text-center">
          <p className="text-sm text-primary/60 sm:text-base">
            © {new Date().getFullYear()} Smile With Me Estudio Dental. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
