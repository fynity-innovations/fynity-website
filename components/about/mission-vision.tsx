"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Target, Eye, Rocket } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const cards = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To provide industry-relevant, accessible, and practical technology education that empowers individuals to build successful careers in tech while contributing to the digital transformation of India.",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To become India's most trusted technology education partner, creating a new generation of skilled professionals who drive innovation and excellence in the global tech ecosystem.",
    gradient: "from-accent/20 to-accent/5",
  },
  {
    icon: Rocket,
    title: "Our Approach",
    description:
      "We combine hands-on project work with expert mentorship, ensuring every learner gains practical experience alongside theoretical knowledge, making them job-ready from day one.",
    gradient: "from-primary/10 via-accent/10 to-primary/5",
  },
]

export function MissionVision() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Card className="h-full group hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 border-border/50 overflow-hidden">
                <CardContent className="p-0">
                  <div className={`bg-gradient-to-br ${card.gradient} p-6 pb-8`}>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      className="w-14 h-14 rounded-2xl bg-background/80 backdrop-blur flex items-center justify-center shadow-lg"
                    >
                      <card.icon className="w-7 h-7 text-primary" />
                    </motion.div>
                  </div>
                  <div className="p-6 pt-4">
                    <h3 className="text-2xl font-bold text-foreground mb-3">{card.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{card.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
