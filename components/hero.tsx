import Image from "next/image"
import { Button } from "@/components/ui/button"
import { User, Check, Calendar, ArrowRight, MessageCircle } from "lucide-react"
import { WhatsAppButton } from "./whatsapp-button"

const APPOINTMENT_URL = "https://a259348cdd801055c6e465fe356840cbf43cc129.agenda.softwaredentalink.com/agenda"
const WHATSAPP_NUMBER = '+56968286054'
const WHATSAPP_MESSAGE = '¡Hola! Me interesa agendar una cita en Smile With Me Estudio Dental.'
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, '')}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

export function Hero() {
  return (
    <header id="home" className="flex flex-1 items-center px-4 py-8 md:py-12 lg:py-16">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-8 lg:grid-cols-2 lg:gap-12">
        {/* Content */}
        <div className="text-center lg:text-left">
          <span className="animate-fade-in mb-4 inline-block rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
            Tu clínica dental de confianza
          </span>
          <h1 className="animate-fade-in-up mb-6 text-balance text-4xl font-bold leading-tight text-foreground sm:text-5xl md:text-6xl">
            Los <span className="text-accent">mejores</span>
            <br />
            para tu bienestar
          </h1>
          <p className="animate-fade-in-up animation-delay-100 mb-8 max-w-xl text-base leading-relaxed text-foreground/80 sm:text-lg lg:mx-0">
            Tu sonrisa es nuestra prioridad. En nuestra clínica dental, nos
            comprometemos a ofrecerte una atención personalizada y de calidad,
            donde tu comodidad y satisfacción son fundamentales en cada visita.
          </p>
          <div className="animate-fade-in-up animation-delay-200 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-accent px-8 py-6 text-base text-accent-foreground shadow-lg transition-all hover:bg-accent/90 hover:shadow-xl"
            >
              <a
                href={APPOINTMENT_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Agenda tu cita
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="rounded-full bg-green-500 px-8 py-6 text-base text-white shadow-lg transition-all hover:bg-green-600 hover:shadow-xl"
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp
              </a>
            </Button>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative order-first flex justify-center lg:order-last">
          {/* Background Circle */}
          <div className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary sm:h-[350px] sm:w-[350px] md:h-[400px] md:w-[400px] lg:h-[450px] lg:w-[450px]" />

          {/* Main Image */}
          <Image
            src="/images/dentist-hero.png"
            alt="Doctora profesional de Smile With Me Estudio Dental"
            width={475}
            height={600}
            className="relative z-10 w-full max-w-[280px] object-contain sm:max-w-[320px] md:max-w-[380px]"
            priority
          />

          {/* Floating Card 1 - Patients */}
          <div className="animate-fade-in animation-delay-300 absolute left-0 top-1/4 z-20 hidden items-center gap-3 rounded-xl bg-card p-4 shadow-2xl transition-transform hover:scale-105 sm:flex lg:left-[-1rem] xl:left-[-2rem]">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
              <User className="h-6 w-6" />
            </span>
            <div>
              <h4 className="text-2xl font-bold text-accent">100+</h4>
              <p className="text-sm font-medium text-foreground">Pacientes felices</p>
            </div>
          </div>

          {/* Floating Card 2 - Checklist */}
          <div className="animate-fade-in animation-delay-400 absolute bottom-8 right-0 z-20 hidden rounded-xl bg-card p-4 shadow-2xl transition-transform hover:scale-105 sm:block lg:right-[-1rem] xl:right-[-2rem]">
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-foreground">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-accent/10">
                  <Check className="h-3 w-3 text-accent" />
                </span>
                <span className="text-sm">Atención de calidad</span>
              </li>
              <li className="flex items-start gap-3 text-foreground">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-accent/10">
                  <Check className="h-3 w-3 text-accent" />
                </span>
                <span className="text-sm">Especialistas en Santiago</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}
