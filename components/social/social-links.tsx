"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import {
  Youtube,
  Instagram,
  Linkedin,
  Send,
  Facebook,
  Globe,
  MessageCircle,
} from "lucide-react"

const socials = [
  { name: "Website", url: "https://fynityinnovations.com", icon: <Globe size={32} /> },
  { name: "Instagram", url: "https://www.instagram.com/fynityinnovations?igsh=Zmt5cXlzZ3d4Y3Yz", icon: <Instagram size={32} /> },
  { name: "WhatsApp", url: "https://wa.me/message/KCGJLKGEKY2UA1", icon: <MessageCircle size={32} /> },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/fynity-innovations-80253139b/", icon: <Linkedin size={32} /> },
  { name: "YouTube", url: "https://youtube.com/", icon: <Youtube size={32} /> },
  { name: "Telegram", url: "https://t.me/fynityinnovations", icon: <Send size={32} /> },
  // { name: "Facebook", url: "https://facebook.com/", icon: <Facebook size={32} /> },
]

export default function SocialLinks() {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-24 bg-background">
      <div className="w-full max-w-5xl px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h1 className="text-4xl sm:text-5xl font-bold">
            Connect with <span className="text-primary">Fynity</span>
          </h1>

          <p className="mt-4 text-muted-foreground text-lg">
            Follow & connect with us across platforms.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {socials.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6, scale: 1.04 }}
              transition={{ type: "spring", stiffness: 250 }}
            >
              <Link
                target="_blank"
                href={item.url}
                className="
                  block rounded-2xl border 
                  bg-card px-8 py-10 
                  shadow-sm hover:shadow-lg 
                  transition
                  hover:border-primary/50
                "
              >
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="text-primary/90">
                    {item.icon}
                  </div>

                  <h3 className="text-xl font-semibold">
                    {item.name}
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    Join us on {item.name}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
