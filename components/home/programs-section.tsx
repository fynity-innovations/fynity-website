"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { Brain, Cpu, Database, Code2, Cloud, Sparkles, Clock, Wrench, GraduationCap, X } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useBookingModal } from "@/hooks/use-booking-modal"

const programs = [
  {
    icon: Brain,
    title: "Artificial Intelligence",
    duration: "12 Weeks",
    tools: ["TensorFlow", "PyTorch", "OpenAI", "LangChain"],
    certification: "AI Professional Certificate",
    description:
      "Master AI fundamentals, neural networks, NLP, computer vision, and generative AI. Build real-world AI applications.",
  },
  {
    icon: Cpu,
    title: "Machine Learning",
    duration: "10 Weeks",
    tools: ["Scikit-learn", "XGBoost", "MLflow", "AWS SageMaker"],
    certification: "ML Engineer Certificate",
    description:
      "Learn supervised/unsupervised learning, model deployment, and MLOps. Create production-ready ML pipelines.",
  },
  {
    icon: Database,
    title: "Data Science",
    duration: "14 Weeks",
    tools: ["Python", "SQL", "Tableau", "Power BI"],
    certification: "Data Science Certificate",
    description: "From data wrangling to visualization, master the complete data science workflow and analytics.",
  },
  {
    icon: Code2,
    title: "Python & Automation",
    duration: "8 Weeks",
    tools: ["Python", "Selenium", "APIs", "Scripting"],
    certification: "Python Developer Certificate",
    description: "Learn Python programming, automation scripts, web scraping, and API development from scratch.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    duration: "12 Weeks",
    tools: ["AWS", "Docker", "Kubernetes", "Terraform"],
    certification: "Cloud Engineer Certificate",
    description: "Master cloud platforms, containerization, CI/CD pipelines, and infrastructure as code.",
  },
  {
    icon: Sparkles,
    title: "Emerging Technologies",
    duration: "10 Weeks",
    tools: ["Blockchain", "IoT", "AR/VR", "Edge Computing"],
    certification: "Emerging Tech Certificate",
    description: "Explore cutting-edge technologies shaping the future of tech industry.",
  },
]

export function ProgramsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedProgram, setSelectedProgram] = useState<(typeof programs)[0] | null>(null)
  const { openModal } = useBookingModal()

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
            Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Programs</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Industry-aligned courses designed to make you job-ready from day one.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className="h-full cursor-pointer group hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2 border-border/50 overflow-hidden"
                onClick={() => setSelectedProgram(program)}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center"
                    >
                      <program.icon className="w-7 h-7 text-primary" />
                    </motion.div>
                    <Badge variant="secondary" className="text-xs">
                      <Clock className="w-3 h-3 mr-1" />
                      {program.duration}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{program.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {program.tools.slice(0, 3).map((tool) => (
                      <Badge key={tool} variant="outline" className="text-xs">
                        {tool}
                      </Badge>
                    ))}
                    {program.tools.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{program.tools.length - 3}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Program Modal */}
        <AnimatePresence>
          {selectedProgram && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
              onClick={() => setSelectedProgram(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-lg bg-card border border-border rounded-2xl shadow-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedProgram(null)}
                  className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors z-10"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-6 pb-8">
                  <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-4">
                    <selectedProgram.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{selectedProgram.title}</h3>
                  <Badge variant="secondary" className="mt-2">
                    <Clock className="w-3 h-3 mr-1" />
                    {selectedProgram.duration}
                  </Badge>
                </div>

                <div className="p-6 space-y-6">
                  <div>
                    <p className="text-muted-foreground">{selectedProgram.description}</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Wrench className="w-4 h-4 text-primary" />
                      <span className="font-medium">Tools & Technologies</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {selectedProgram.tools.map((tool) => (
                        <Badge key={tool} variant="outline">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <GraduationCap className="w-4 h-4 text-primary" />
                      <span className="font-medium">Certification</span>
                    </div>
                    <p className="text-muted-foreground text-sm">{selectedProgram.certification}</p>
                  </div>

                  <Button
                    className="w-full"
                    onClick={() => {
                      setSelectedProgram(null)
                      openModal()
                    }}
                  >
                    Enroll Now
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
