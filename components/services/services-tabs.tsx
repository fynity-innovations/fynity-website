"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { GraduationCap, Users, Briefcase, Calendar, FlaskConical, Code2, CheckCircle, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useBookingModal } from "@/hooks/use-booking-modal"

const services = [
  {
    id: "training",
    icon: GraduationCap,
    title: "Professional Training",
    shortDesc: "Industry-aligned courses",
    description:
      "Comprehensive training programs in cutting-edge technologies designed by industry experts. Our curriculum is constantly updated to match current industry demands.",
    features: [
      "Live interactive sessions with industry mentors",
      "Hands-on projects and case studies",
      "Access to recorded sessions and resources",
      "Industry-recognized certifications",
      "Flexible batch timings (weekday/weekend)",
      "Placement assistance and career guidance",
    ],
    programs: ["AI/ML", "Data Analysis", "Data Science", "Python",],
  },
  {
    id: "mentorship",
    icon: Users,
    title: "One-on-One Mentorship",
    shortDesc: "Personalized guidance",
    description:
      "Get dedicated attention from experienced professionals who guide you through your learning journey with personalized feedback and career advice.",
    features: [
      "Dedicated mentor matched to your goals",
      "Weekly 1-on-1 sessions",
      "Personalized learning roadmap",
      "Resume and portfolio review",
      "Mock interviews and feedback",
      "Direct industry connections",
    ],
    programs: ["Career Transition", "Skill Enhancement", "Interview Prep", "Project Guidance"],
  },
  {
    id: "consulting",
    icon: Briefcase,
    title: "Consulting Services",
    shortDesc: "Enterprise solutions",
    description:
      "Strategic technology consulting for businesses looking to upskill their workforce or implement new technologies in their operations.",
    features: [
      "Workforce skill assessment",
      "Custom training program design",
      "Technology adoption roadmap",
      "Digital transformation strategy",
      "Team building workshops",
      "Performance measurement systems",
    ],
    programs: ["Corporate Training", "Tech Assessment", "Digital Strategy", "Team Upskilling"],
  },
  {
    id: "workshops",
    icon: Calendar,
    title: "Workshops & Bootcamps",
    shortDesc: "Intensive learning",
    description:
      "Short-term intensive programs designed to quickly build specific skills through immersive, hands-on learning experiences.",
    features: [
      "Weekend and week-long formats",
      "Intensive hands-on practice",
      "Real-world project completion",
      "Industry expert sessions",
      "Networking opportunities",
      "Certificate of completion",
    ],
    programs: ["Weekend Bootcamps", "Hackathons", "Tech Talks", "Industry Visits"],
  },
  {
    id: "research",
    icon: FlaskConical,
    title: "Research & Development Support",
    shortDesc: "Academic collaboration",
    description:
      "Supporting students and researchers with technical guidance, resources, and mentorship for their academic and innovation projects.",
    features: [
      "Research methodology guidance",
      "Technical literature review",
      "Implementation support",
      "Data analysis assistance",
      "Paper writing guidance",
      "Patent filing support",
    ],
    programs: ["Thesis Support", "Publication Help", "Innovation Labs", "Research Grants"],
  },
  {
    id: "projects",
    icon: Code2,
    title: "Project Services",
    shortDesc: "End-to-end delivery",
    description:
      "Complete project development services for students and startups, from ideation to deployment with full technical support.",
    features: [
      "Project scoping and planning",
      "Full-stack development",
      "AI/ML model development",
      "Cloud deployment",
      "Documentation and support",
      "Source code with explanation",
    ],
    programs: ["Academic Projects", "Startup MVPs", "Proof of Concepts", "Demo Applications"],
  },
]

export function ServicesTabs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeTab, setActiveTab] = useState("training")
  const { openModal } = useBookingModal()

  const activeService = services.find((s) => s.id === activeTab)

  return (
    <section ref={ref} className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          {/* Tabs List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <TabsList className="flex flex-wrap justify-center h-auto gap-2 bg-transparent p-0 mb-12">
              {services.map((service) => (
                <TabsTrigger
                  key={service.id}
                  value={service.id}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-4 py-3 rounded-xl border border-border data-[state=active]:border-primary transition-all"
                >
                  <service.icon className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">{service.title}</span>
                  <span className="sm:hidden">{service.shortDesc}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </motion.div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            {services.map((service) => (
              <TabsContent key={service.id} value={service.id} className="mt-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="border-border/50 overflow-hidden">
                    <CardContent className="p-0">
                      <div className="grid lg:grid-cols-2">
                        {/* Left Column - Description */}
                        <div className="p-8 lg:p-12 bg-gradient-to-br from-primary/5 to-accent/5">
                          <div className="flex items-center gap-4 mb-6">
                            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                              <service.icon className="w-7 h-7 text-primary" />
                            </div>
                            <div>
                              <h2 className="text-2xl font-bold text-foreground">{service.title}</h2>
                              <p className="text-sm text-muted-foreground">{service.shortDesc}</p>
                            </div>
                          </div>
                          <p className="text-muted-foreground leading-relaxed mb-8">{service.description}</p>
                          <div className="flex flex-wrap gap-2 mb-8">
                            {service.programs.map((program) => (
                              <span key={program} className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full">
                                {program}
                              </span>
                            ))}
                          </div>
                          <Button onClick={openModal} size="lg">
                            Enquire Now
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </div>

                        {/* Right Column - Features */}
                        <div className="p-8 lg:p-12 bg-card">
                          <h3 className="text-lg font-semibold text-foreground mb-6">What&apos;s Included</h3>
                          <ul className="space-y-4">
                            {service.features.map((feature, index) => (
                              <motion.li
                                key={feature}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-start gap-3"
                              >
                                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                <span className="text-muted-foreground">{feature}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>
            ))}
          </AnimatePresence>
        </Tabs>
      </div>
    </section>
  )
}
