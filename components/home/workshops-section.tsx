"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useBookingModal } from "@/hooks/use-booking-modal"

const workshops = [
  {
    title: "Python for Data Science Bootcamp",
    date: "Jan 15, 2025",
    location: "Hyderabad",
    time: "10:00 AM - 5:00 PM",
    type: "In-Person",
  },
  {
    title: "AI/ML Weekend Workshop",
    date: "Jan 22-23, 2025",
    location: "Online",
    time: "9:00 AM - 1:00 PM",
    type: "Virtual",
  },
  {
    title: "Cloud Computing Masterclass",
    date: "Feb 5, 2025",
    location: "Bangalore",
    time: "10:00 AM - 4:00 PM",
    type: "In-Person",
  },
  {
    title: "DevOps Pipeline Workshop",
    date: "Feb 12, 2025",
    location: "Online",
    time: "2:00 PM - 6:00 PM",
    type: "Virtual",
  },
]

function CountdownTimer({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0 })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(targetDate).getTime() - new Date().getTime()
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          mins: Math.floor((difference / 1000 / 60) % 60),
        })
      }
    }
    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 60000)
    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div className="flex gap-2 text-xs">
      <span className="bg-primary/10 text-primary px-2 py-1 rounded">{timeLeft.days}d</span>
      <span className="bg-primary/10 text-primary px-2 py-1 rounded">{timeLeft.hours}h</span>
      <span className="bg-primary/10 text-primary px-2 py-1 rounded">{timeLeft.mins}m</span>
    </div>
  )
}

export function WorkshopsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { openModal } = useBookingModal()

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
            Upcoming{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Workshops</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Join our live sessions and accelerate your learning journey.
          </p>
        </motion.div>

        {/* Marquee Container */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-muted/30 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-muted/30 to-transparent z-10" />

          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{
              x: {
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
            className="flex gap-6"
          >
            {[...workshops, ...workshops].map((workshop, index) => (
              <Card
                key={index}
                className="min-w-[320px] sm:min-w-[380px] border-border/50 hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <Badge variant={workshop.type === "Virtual" ? "secondary" : "default"}>{workshop.type}</Badge>
                    <CountdownTimer targetDate={workshop.date} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-4">{workshop.title}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {workshop.date}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      {workshop.location}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      {workshop.time}
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full bg-transparent" onClick={openModal}>
                    Register Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
