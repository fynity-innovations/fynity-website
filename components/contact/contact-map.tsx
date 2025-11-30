"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { MapPin, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactMap() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} id="map" className="py-12 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-balance">
            Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Location</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Visit us at our office in Hyderabad, Telangana. We&apos;d love to meet you in person!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative rounded-2xl overflow-hidden border border-border"
        >
          {/* Map Placeholder */}
          <div className="relative h-[400px] lg:h-[500px] bg-muted">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.3160tried9707!2d78.24323!3d17.412255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Fynity Innovations Location"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />

            {/* Overlay Card */}
            <div className="absolute bottom-6 left-6 right-6 sm:right-auto sm:max-w-sm">
              <div className="bg-card/95 backdrop-blur-sm border border-border rounded-xl p-6 shadow-xl">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Fynity Innovations LLP</h3>
                    <p className="text-sm text-muted-foreground mb-3">Hyderabad, Telangana, India</p>
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href="https://maps.google.com/?q=Hyderabad,Telangana,India"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Get Directions
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
