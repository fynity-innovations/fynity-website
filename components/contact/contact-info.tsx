"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const contactDetails = [
  {
    icon: Mail,
    title: "Email Us",
    value: "fynityinnovations@gmail.com",
    description: "We'll respond within 24 hours",
    href: "mailto:fynityinnovations@gmail.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+91 94932 07300",
    description: "Mon-Sat, 9AM-6PM IST",
    href: "tel:+919493207300",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    value: "Hyderabad, Telangana",
    description: "India",
    href: "#",
  },
  // {
  //   icon: Clock,
  //   title: "Working Hours",
  //   value: "Mon - Sat: 9AM - 6PM",
  //   description: "Sunday: Closed",
  //   href: null,
  // },
]

export function ContactInfo() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {contactDetails.map((detail, index) => (
            <motion.div
              key={detail.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-border/50 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  {detail.href ? (
                    <a href={detail.href} className="block">
                      <div className="w-14 h-14 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                        <detail.icon className="w-7 h-7 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-1">{detail.title}</h3>
                      <p className="text-primary font-medium group-hover:underline">{detail.value}</p>
                      <p className="text-sm text-muted-foreground mt-1">{detail.description}</p>
                    </a>
                  ) : (
                    <div>
                      <div className="w-14 h-14 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                        <detail.icon className="w-7 h-7 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-1">{detail.title}</h3>
                      <p className="text-foreground font-medium">{detail.value}</p>
                      <p className="text-sm text-muted-foreground mt-1">{detail.description}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
