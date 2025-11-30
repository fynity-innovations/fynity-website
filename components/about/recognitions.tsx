"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Building2, Rocket, FileCheck, CheckCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const recognitions = [
  {
    icon: Building2,
    title: "MSME Certified",
    description: "Registered under Ministry of Micro, Small & Medium Enterprises, Government of India.",
    badge: "Udyam Registration",
  },
  {
    icon: Rocket,
    title: "Startup India Recognized",
    description: "Officially recognized under the Startup India initiative by DPIIT, Government of India.",
    badge: "DPIIT Recognition",
  },
  {
    icon: FileCheck,
    title: "LLP Registered",
    description: "Legally registered as a Limited Liability Partnership under the Companies Act.",
    badge: "MCA Registration",
  },
]

const achievements = [
  "500+ students trained successfully",
  "50+ industry mentors on board",
  "30+ college partnerships",
  "95% placement assistance rate",
  "ISO quality standards followed",
  "24/7 learning support",
]

export function Recognitions() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
            Recognitions &{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">Our credentials that ensure quality and credibility.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {recognitions.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Card className="h-full group hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 border-border/50 overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-14 h-14 shrink-0 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center"
                    >
                      <item.icon className="w-7 h-7 text-primary" />
                    </motion.div>
                    <div>
                      <span className="inline-block px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded mb-2">
                        {item.badge}
                      </span>
                      <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Achievements Grid */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Card className="border-border/50">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-center text-foreground mb-8">Our Achievements</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-muted-foreground">{achievement}</span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div> */}
      </div>
    </section>
  )
}
