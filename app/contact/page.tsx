import type { Metadata } from "next"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactInfo } from "@/components/contact/contact-info"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactMap } from "@/components/contact/contact-map"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Fynity Innovations. We're here to help you start your tech journey with expert mentorship and training.",
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      {/* <ContactMap /> */}
    </>
  )
}
