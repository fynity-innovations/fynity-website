import type { Metadata } from "next"
import SocialLinks from "@/components/social/social-links"

export const metadata: Metadata = {
  title: "Connect with Fynity Innovations",
  description:
    "Follow and connect with Fynity Innovations on Instagram, Facebook, WhatsApp, Telegram, YouTube, LinkedIn and explore our official website."
}

export default function SocialPage() {
  return <SocialLinks />
}
