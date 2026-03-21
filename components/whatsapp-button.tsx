'use client'

import { MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

const WHATSAPP_NUMBER = '+56968286054'
const WHATSAPP_MESSAGE = '¡Hola! Me interesa agendar una cita en Smile With Me Estudio Dental.'
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, '')}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

export function WhatsAppButton() {
  return (
    <Button
      asChild
      className="flex items-center gap-2 rounded-full bg-green-500 px-6 py-6 text-base text-white shadow-lg transition-all hover:bg-green-600 hover:shadow-xl"
      size="lg"
    >
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="h-5 w-5" />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>
    </Button>
  )
}

export function WhatsAppFloatingButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl transition-all hover:scale-110 hover:bg-green-600 hover:shadow-lg md:bottom-8 md:right-8"
      aria-label="Contactar por WhatsApp"
      title="Contactar por WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  )
}
