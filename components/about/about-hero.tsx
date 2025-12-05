"use client"

import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"
import Image from "next/image"

export function AboutHero() {
  return (
    <section className="relative pt-32 overflow-hidden">
      {/* Background */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" /> */}

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl"
          >
            <Image 
            src="/fynity.png" 
            alt="Fynity Logo" 
            width={150} 
            height={40} 
            className="object-contain" 
            priority />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance"
          >
            About{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Fynity Innovations
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Fynity Innovations is a technology-driven education and consulting company dedicated to bridging the gap
            between academic learning and industry requirements. Founded with a vision to democratize quality tech
            education, we empower students and professionals with cutting-edge skills needed to thrive in the rapidly
            evolving digital landscape.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            As an MSME-certified and Startup India-recognized company, we partner with educational institutions and
            enterprises to deliver transformative learning experiences through project-based training, personalized
            mentorship, and industry-aligned curriculum.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
