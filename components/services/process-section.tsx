"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Search, FileText, Rocket, Award } from "lucide-react"

const steps = [
  {
    icon: Search,
    title: "Discovery",
    description: "We understand your goals, current skills, and career aspirations through detailed consultation.",
  },
  {
    icon: FileText,
    title: "Planning",
    description: "Create a personalized learning roadmap with clear milestones and timelines.",
  },
  {
    icon: Rocket,
    title: "Execution",
    description: "Hands-on training with projects, regular assessments, and mentor guidance.",
  },
  {
    icon: Award,
    title: "Success",
    description: "Certification, placement support, and continued career guidance after completion.",
  },
]

export function ProcessSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-12 lg:py-12 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
            Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Process</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">A structured approach to help you achieve your goals.</p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20 -translate-y-1/2" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                <div className="flex flex-col items-center text-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-20 h-20 rounded-full bg-background border-4 border-primary/20 flex items-center justify-center mb-6 relative z-10"
                  >
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <step.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    {/* <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                      {index + 1}
                    </span> */}
                  </motion.div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
