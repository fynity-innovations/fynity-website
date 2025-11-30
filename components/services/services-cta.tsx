"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowRight, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useBookingModal } from "@/hooks/use-booking-modal"

export function ServicesCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { openModal } = useBookingModal()

  return (
    <section ref={ref} className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <Card className="border-border/50 overflow-hidden">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2">
                <div className="p-8 lg:p-12 bg-gradient-to-br from-primary to-accent">
                  <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
                    Ready to Transform Your Career?
                  </h2>
                  <p className="text-primary-foreground/80 mb-8 leading-relaxed">
                    Book a free consultation with our career experts and discover the right learning path for your
                    goals. No commitments, just guidance.
                  </p>
                  <Button
                    size="lg"
                    variant="secondary"
                    onClick={openModal}
                    className="bg-background text-foreground hover:bg-background/90"
                  >
                    Book Free Consultation
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
                <div className="p-8 lg:p-12 bg-card flex flex-col justify-center">
                  <h3 className="text-xl font-semibold text-foreground mb-6">Or reach out directly</h3>
                  <div className="space-y-4">
                    <a
                      href="tel:+919876543210"
                      className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                    >
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Call Us</p>
                        <p className="font-medium text-foreground">+91 94932 07300</p>
                      </div>
                    </a>
                    <a
                      href="mailto:info@fynity.com"
                      className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                    >
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Email Us</p>
                        <p className="font-medium text-foreground">fynityinnovations@gmail.com</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
