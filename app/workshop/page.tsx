import type { Metadata } from "next"

import WorkshopCard from "@/components/workshop/workshop-card"
import WorkshopsSection from "@/components/workshop/workshops-section"
import WorkshopList from "@/components/workshop/workshop-list"

export const metadata: Metadata = {
  title: "Workshops | Fynity Innovations",
  description:
    "Join Fynity Innovations' hands-on tech workshops in SQL, Data Analysis, Python, Data Science and AI. Learn from industry mentors through live training, real projects and career-focused sessions. Check our ongoing and upcoming workshops.",
};

export default function WorkshopPage() {
  return (
    <>
      <WorkshopsSection />
    </>
  )
}
