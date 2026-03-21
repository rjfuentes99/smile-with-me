"use client"

import { useEffect, useState, useRef } from "react"

interface StatItemProps {
  value: string
  label: string
  isVisible: boolean
}

function StatItem({ value, label, isVisible }: StatItemProps) {
  const [displayValue, setDisplayValue] = useState("0")
  const numericValue = parseInt(value.replace(/\D/g, ""))
  const prefix = value.startsWith("+") ? "+" : ""
  const suffix = value.endsWith("%") ? "%" : ""

  useEffect(() => {
    if (!isVisible) return

    let start = 0
    const duration = 2000
    const increment = numericValue / (duration / 16)

    const timer = setInterval(() => {
      start += increment
      if (start >= numericValue) {
        setDisplayValue(`${prefix}${numericValue}${suffix}`)
        clearInterval(timer)
      } else {
        setDisplayValue(`${prefix}${Math.floor(start)}${suffix}`)
      }
    }, 16)

    return () => clearInterval(timer)
  }, [isVisible, numericValue, prefix, suffix])

  return (
    <div className="px-4 py-2">
      <h3 className="text-4xl font-bold text-accent md:text-5xl lg:text-6xl">
        {displayValue}
      </h3>
      <p className="mt-2 text-base text-background md:text-lg">{label}</p>
    </div>
  )
}

export function StatsBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const stats = [
    { value: "+15", label: "Años de experiencia" },
    { value: "100%", label: "Vuelves a sonreír" },
    { value: "100%", label: "Satisfacción del paciente" },
  ]

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-foreground px-4 py-16 text-center md:px-6 md:py-20"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute left-1/4 top-0 h-64 w-64 rounded-full bg-accent blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-accent blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        <h2 className="mb-2 text-3xl font-bold text-background md:text-4xl lg:text-5xl">
          Smile With Me
        </h2>
        <p className="mb-10 text-lg text-background/90 md:text-xl">
          Si tu sonrisa no te sienta bien, ¡ven con nosotros!
        </p>

        <div className="flex flex-col items-center justify-center gap-8 sm:flex-row sm:gap-12 md:gap-16 lg:gap-24">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}
