import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, Target, Users, Sparkles } from "lucide-react"

const APPOINTMENT_URL = "https://a259348cdd801055c6e465fe356840cbf43cc129.agenda.softwaredentalink.com/agenda"

const features = [
  {
    icon: Target,
    title: "Nuestra Mision",
    description: "En Smile With Me, nuestra mision es proporcionar atención dental de alta calidad a nuestros pacientes. Nos dedicamos a crear un ambiente acogedor y profesional donde cada visita sea una experiencia positiva."
  },
  {
    icon: Users,
    title: "Nuestro Equipo",
    description: "Contamos con un equipo de dentistas y especialistas altamente capacitados en Smile With Me. Cada miembro de nuestro equipo esta comprometido con la formacion continua y el uso de las ultimas tecnologias dentales."
  },
  {
    icon: Sparkles,
    title: "Servicios Ofrecidos",
    description: "Ofrecemos una amplia gama de servicios dentales en Smile With Me, incluyendo limpieza dental, ortodoncia, y tratamientos de estetica dental. Nuestro objetivo es cuidar de su salud bucal con servicios personalizados para cada paciente."
  }
]

export function About() {
  return (
    <section id="about" className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="relative flex justify-center">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="/images/aboutus.png"
                alt="Sonrisa perfecta - Smile With Me Estudio Dental"
                width={500}
                height={600}
                className="h-auto w-full max-w-[500px] object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-3xl bg-accent/20" />
          </div>

          {/* Text Content */}
          <div>
            <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-accent">
              Conocenos
            </span>
            <h2 className="mb-8 text-balance text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
              Acerca de <span className="text-accent">Nosotros</span>
            </h2>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="hover-lift group rounded-xl border border-border/50 bg-card/50 p-5 transition-all duration-300 hover:border-accent/30 hover:bg-card"
                >
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                      <feature.icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground">{feature.title}</h3>
                  </div>
                  <p className="leading-relaxed text-foreground/80">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            <Button
              asChild
              className="mt-8 rounded-full bg-accent px-8 py-6 text-accent-foreground shadow-lg transition-all hover:bg-accent/90 hover:shadow-xl"
            >
              <a
                href={APPOINTMENT_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Agenda tu cita hoy
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
