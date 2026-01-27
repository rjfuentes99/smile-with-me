import { MapPin, Calendar, Clock, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const APPOINTMENT_URL = "https://a259348cdd801055c6e465fe356840cbf43cc129.agenda.softwaredentalink.com/agenda"

export function Location() {
  return (
    <section id="location" className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-12 text-center">
          <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-accent">
            Visitanos
          </span>
          <h2 className="mb-4 text-balance text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Nuestra <span className="text-accent">Ubicacion</span>
          </h2>
          <p className="mx-auto max-w-2xl text-base text-foreground/80 md:text-lg">
            Visitanos en nuestra clinica ubicada en el corazon de Nunoa, Santiago
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Map - Takes more space */}
          <div className="overflow-hidden rounded-2xl shadow-xl lg:col-span-3">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.4!2d-70.61!3d-33.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf5e6d6c4c3b%3A0x9662cf5e6d6c4c3b!2sAv.%20Irarr%C3%A1zaval%202821%2C%20%C3%91u%C3%B1oa%2C%20Regi%C3%B3n%20Metropolitana%2C%20Chile!5e0!3m2!1ses!2scl!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicacion de Smile With Me - Irarrazaval 2821, Nunoa"
              className="h-full min-h-[350px] w-full md:min-h-[400px]"
            />
          </div>

          {/* Info Card */}
          <div className="flex flex-col justify-center rounded-2xl bg-card p-6 shadow-lg md:p-8 lg:col-span-2">
            {/* Address */}
            <div className="mb-6 flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-accent/10">
                <MapPin className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="mb-1 text-lg font-bold text-foreground">Direccion</h3>
                <p className="font-medium text-foreground">
                  Irarrazaval 2821, Oficina 1404
                </p>
                <p className="font-medium text-foreground">Torre B</p>
                <p className="text-sm text-foreground/70">Nunoa, Santiago, Chile</p>
              </div>
            </div>

            {/* Hours */}
            <div className="mb-6 flex items-start gap-4 border-t border-border/50 pt-6">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-accent/10">
                <Clock className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="mb-2 text-lg font-bold text-foreground">Horarios</h3>
                <div className="space-y-1 text-sm text-foreground/80">
                  <p className="flex justify-between gap-4">
                    <span>Lun - Vie:</span>
                    <span className="font-medium text-foreground">9:00 - 19:00</span>
                  </p>
                  <p className="flex justify-between gap-4">
                    <span>Sabado:</span>
                    <span className="font-medium text-foreground">9:00 - 14:00</span>
                  </p>
                  <p className="flex justify-between gap-4">
                    <span>Domingo:</span>
                    <span className="font-medium text-foreground">Cerrado</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="mb-8 flex items-start gap-4 border-t border-border/50 pt-6">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-accent/10">
                <Phone className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="mb-1 text-lg font-bold text-foreground">Contacto</h3>
                <a 
                  href="tel:+56912345678"
                  className="font-medium text-accent hover:underline"
                >
                  +56 9 1234 5678
                </a>
              </div>
            </div>

            <Button
              asChild
              size="lg"
              className="w-full rounded-full bg-accent py-6 text-accent-foreground shadow-lg transition-all hover:bg-accent/90 hover:shadow-xl"
            >
              <a
                href={APPOINTMENT_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Agenda tu cita ahora
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
