import type { Metadata } from "next"
import { ServicesHero } from "@/components/services/services-hero"
import { ServicesTabs } from "@/components/services/services-tabs"
import { ProcessSection } from "@/components/services/process-section"
import { ServicesCTA } from "@/components/services/services-cta"

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Fynity's comprehensive services - Professional Training, Mentorship, Consulting, Workshops, R&D Support, and Project Services.",
}

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesTabs />
      <ProcessSection />
      {/* <ServicesCTA /> */}
    </>
  )
}
