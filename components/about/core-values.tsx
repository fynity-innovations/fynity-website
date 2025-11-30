"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Lightbulb, Shield, Award, Heart, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Embracing new technologies and teaching methodologies to stay ahead of industry trends.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "Maintaining transparency and honesty in all our interactions with students and partners.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Striving for the highest standards in education delivery and student outcomes.",
  },
  {
    icon: Heart,
    title: "Empowerment",
    description: "Enabling individuals to take charge of their careers through skill development.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Building strong partnerships with institutions, mentors, and industry experts.",
  },
]

export function CoreValues() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
            Our Core{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Values</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            The principles that guide everything we do at Fynity Innovations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="h-full group hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2 border-border/50 text-center">
                <CardContent className="p-6">
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4"
                  >
                    <value.icon className="w-8 h-8 text-primary" />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
