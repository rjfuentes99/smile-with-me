import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { StatsBanner } from "@/components/stats-banner"
import { Services } from "@/components/services"
import { Location } from "@/components/location"
import { SocialMedia } from "@/components/social-media"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      {/* Sticky Navbar */}
      <Navbar />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <div className="mx-auto max-w-7xl">
          <Hero />
        </div>
        
        {/* About Section */}
        <About />
        
        {/* Stats Banner */}
        <StatsBanner />
        
        {/* Services Section */}
        <Services />
        
        {/* Location Section */}
        <Location />
        
        {/* Social Media Section */}
        <SocialMedia />
        
        {/* Footer */}
        <Footer />
      </main>
    </>
  )
}
