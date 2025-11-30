"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Linkedin, Twitter } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const team = [
  {
    name: "Dr. Rajesh Kumar",
    role: "Founder & CEO",
    image: "/indian-professional-man-ceo-founder.jpg",
    bio: "15+ years in tech education and AI research",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Priya Menon",
    role: "Head of Training",
    image: "/indian-professional-woman-educator.jpg",
    bio: "Former Senior Engineer at Google, passionate educator",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Arjun Reddy",
    role: "Technical Director",
    image: "/indian-professional-man-tech-director.jpg",
    bio: "Cloud architect with 12+ years experience",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Sneha Sharma",
    role: "Head of Partnerships",
    image: "/indian-professional-woman-business.jpg",
    bio: "Building bridges between academia and industry",
    linkedin: "#",
    twitter: "#",
  },
]

export function TeamSection() {
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
            Meet Our{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Leadership</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">Experienced professionals committed to your success.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full group hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 border-border/50 overflow-hidden">
                <CardContent className="p-6 text-center">
                  <motion.div whileHover={{ scale: 1.05 }} className="mb-4">
                    <Avatar className="w-24 h-24 mx-auto ring-4 ring-primary/10 group-hover:ring-primary/20 transition-all">
                      <AvatarImage src={member.image || "/placeholder.svg"} alt={member.name} />
                      <AvatarFallback className="text-2xl">{member.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  </motion.div>
                  <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
                  <p className="text-sm text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                  <div className="flex items-center justify-center gap-3">
                    <a
                      href={member.linkedin}
                      className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href={member.twitter}
                      className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                      aria-label={`${member.name}'s Twitter`}
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
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
