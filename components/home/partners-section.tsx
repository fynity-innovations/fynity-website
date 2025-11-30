"use client"

import type React from "react"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { X, Loader2, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const partners = [
  { name: "IIT Hyderabad", logo: "/iit-university-logo.jpg" },
  { name: "BITS Pilani", logo: "/bits-university-logo.jpg" },
  { name: "VIT University", logo: "/vit-university-logo.jpg" },
  { name: "NIT Warangal", logo: "/nit-university-logo.jpg" },
  { name: "IIIT Bangalore", logo: "/iiit-university-logo.jpg" },
  { name: "Osmania University", logo: "/osmania-university-logo.jpg" },
]

export function PartnersSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSuccess(true)
    setTimeout(() => {
      setIsSuccess(false)
      setIsModalOpen(false)
    }, 2000)
  }

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
            Our College{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Partners</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Trusted by leading educational institutions across India.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 border-border/50">
                <CardContent className="p-6 flex items-center justify-center">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    src={partner.logo}
                    alt={partner.name}
                    className="h-12 object-contain opacity-60 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0"
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <Button size="lg" onClick={() => setIsModalOpen(true)}>
            Become a College Partner
          </Button>
        </motion.div>

        {/* Partner Inquiry Modal */}
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsModalOpen(false)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-lg bg-card border border-border rounded-2xl shadow-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="bg-gradient-to-r from-primary to-accent p-6">
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="absolute top-4 right-4 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                  <h2 className="text-2xl font-bold text-primary-foreground">Partner With Us</h2>
                  <p className="text-primary-foreground/80 mt-1">
                    Bring industry-relevant training to your institution
                  </p>
                </div>

                <div className="p-6">
                  {isSuccess ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center py-8"
                    >
                      <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                      <h3 className="text-xl font-semibold text-foreground">Thank You!</h3>
                      <p className="text-muted-foreground text-center mt-2">Our team will contact you soon.</p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="institution">Institution Name</Label>
                        <Input id="institution" placeholder="University/College Name" required />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="contact">Contact Person</Label>
                          <Input id="contact" placeholder="Full Name" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="designation">Designation</Label>
                          <Input id="designation" placeholder="HOD/Dean/Director" required />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="p-email">Email</Label>
                          <Input id="p-email" type="email" placeholder="email@institution.edu" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="p-phone">Phone</Label>
                          <Input id="p-phone" placeholder="+91 98765 43210" required />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="p-message">Message</Label>
                        <Textarea id="p-message" placeholder="Tell us about your requirements..." rows={3} />
                      </div>
                      <Button type="submit" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          "Submit Inquiry"
                        )}
                      </Button>
                    </form>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
