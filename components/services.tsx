"use client"

import Image from "next/image"
import { useState } from "react"

const services = [
  {
    title: "Odontologia General",
    description: "Cuidado integral de tu salud bucal",
    image: "/images/odontogeneral.png",
    color: "bg-primary",
  },
  {
    title: "Ortodoncia",
    description: "Alineacion perfecta de tus dientes",
    image: "/images/ortodoncia.png",
    color: "bg-secondary",
  },
  {
    title: "Odontopediatria",
    description: "Cuidado dental para los mas pequenos",
    image: "/images/odontopedia.png",
    color: "bg-primary",
  },
  {
    title: "Implantes",
    description: "Recupera tu sonrisa completa",
    image: "/images/implantes.png",
    color: "bg-secondary",
  },
  {
    title: "Rehabilitacion Oral",
    description: "Restauracion completa de tu dentadura",
    image: "/images/ortodoncia.png",
    color: "bg-secondary",
  },
  {
    title: "Estetica Dental",
    description: "Mejora la apariencia de tu sonrisa",
    image: "/images/estetica.png",
    color: "bg-primary",
  },
  {
    title: "Endodoncia",
    description: "Tratamiento de conductos radiculares",
    image: "/images/endo.png",
    color: "bg-secondary",
  },
  {
    title: "Estetica Facial",
    description: "Tratamientos faciales complementarios",
    image: "/images/esteticafacial.png",
    color: "bg-primary",
  },
]

export function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="services" className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Header */}
        <div className="mb-12 text-center md:mb-16">
          <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-accent">
            Lo que hacemos
          </span>
          <h2 className="mb-4 text-balance text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Que <span className="text-accent">Servicios</span> ofrecemos?
          </h2>
          <p className="mx-auto max-w-2xl text-base text-foreground/80 md:text-lg">
            Estamos a tu disposicion con todos nuestros servicios y personal
            especializado que necesites para cuidar tu sonrisa.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="hover-lift group cursor-pointer rounded-2xl border border-border/50 bg-card/30 p-4 transition-all duration-300 hover:border-accent/30 hover:bg-card sm:p-6"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`mb-4 flex aspect-square items-center justify-center overflow-hidden rounded-xl ${service.color} transition-all duration-300 ${
                  hoveredIndex === index ? "scale-105 shadow-lg" : ""
                }`}
              >
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  width={200}
                  height={200}
                  className="h-3/4 w-3/4 object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="mb-1 text-center text-sm font-bold text-foreground sm:text-base md:text-lg">
                {service.title}
              </h3>
              <p className="hidden text-center text-xs text-foreground/70 sm:block sm:text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
