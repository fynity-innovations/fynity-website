import { HeroSection } from "@/components/home/hero-section"
import { WhyChooseSection } from "@/components/home/why-choose-section"
import { ProgramsSection } from "@/components/home/programs-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { PartnersSection } from "@/components/home/partners-section"
import { WorkshopsSection } from "@/components/home/workshops-section"
import { FinalCTASection } from "@/components/home/final-cta-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhyChooseSection />
      {/* <ProgramsSection />
      <TestimonialsSection />
      <PartnersSection /> */}
      {/* <WorkshopsSection /> */}
      <FinalCTASection />
    </>
  )
}
