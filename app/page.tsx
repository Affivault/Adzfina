"use client"

import { Navbar } from "@/components/adzfina/navbar"
import { Hero } from "@/components/adzfina/hero"
import { LogoCloud } from "@/components/adzfina/logo-cloud"
import { Features } from "@/components/adzfina/features"
import { ScrollingBanner } from "@/components/adzfina/scrolling-banner"
import { Testimonials } from "@/components/adzfina/testimonials"
import { FAQ } from "@/components/adzfina/faq"
import { CallToAction } from "@/components/adzfina/call-to-action"
import { Footer } from "@/components/adzfina/footer"
import { InteractionProvider } from "@/components/adzfina/interaction-context"

export default function Home() {
  return (
    <InteractionProvider>
      <div className="min-h-screen bg-background text-foreground font-sans selection:bg-lime-100 selection:text-lime-900">
        <Navbar />
        <main>
          <Hero />
          <LogoCloud />
          <Features />
          <ScrollingBanner />
          <Testimonials />
          <FAQ />
          <CallToAction />
        </main>
        <Footer />
      </div>
    </InteractionProvider>
  )
}
