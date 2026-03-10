"use client"

import React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#home", label: "Inicio" },
  { href: "#about", label: "Nosotros" },
  { href: "#services", label: "Servicios" },
  { href: "#location", label: "Ubicacion" },
  { href: "#contact", label: "Contacto" },
]

const APPOINTMENT_URL = "https://a259348cdd801055c6e465fe356840cbf43cc129.agenda.softwaredentalink.com/agenda"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  return (
    <nav 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 shadow-md backdrop-blur-sm" 
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:py-4">
        <Link 
          href="#home" 
          className="flex-shrink-0 transition-transform hover:scale-105"
          onClick={(e) => handleNavClick(e, "#home")}
        >
          <Image
            src="/images/logo.png"
            alt="Smile With Me - Estudio Dental"
            width={180}
            height={60}
            className="h-auto w-32 sm:w-36 md:w-44"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-6 lg:flex xl:gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="relative text-foreground transition-colors hover:text-accent after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <Button
          asChild
          className="hidden rounded-full bg-accent px-6 text-accent-foreground shadow-lg transition-all hover:bg-accent/90 hover:shadow-xl lg:inline-flex"
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

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="rounded-lg p-2 transition-colors hover:bg-primary lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`absolute left-0 right-0 top-full z-50 overflow-hidden bg-background shadow-lg transition-all duration-300 lg:hidden ${
          mobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-1 p-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block rounded-lg px-4 py-3 text-foreground transition-colors hover:bg-primary hover:text-accent"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="mt-2">
            <Button
              asChild
              className="w-full rounded-full bg-accent text-accent-foreground hover:bg-accent/90"
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
          </li>
        </ul>
      </div>
    </nav>
  )
}
