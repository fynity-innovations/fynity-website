import type { Metadata } from "next"
import { AboutHero } from "@/components/about/about-hero"
import { MissionVision } from "@/components/about/mission-vision"
import { CoreValues } from "@/components/about/core-values"
import { Recognitions } from "@/components/about/recognitions"
import { TeamSection } from "@/components/about/team-section"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Fynity Innovations - MSME certified and Startup India recognized technology training and consulting company.",
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <MissionVision />
      <CoreValues />
      <Recognitions />
      {/* <TeamSection /> */}
    </>
  )
}
