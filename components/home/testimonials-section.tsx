"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Priya Sharma",
    college: "IIT Hyderabad",
    image: "/indian-woman-professional-photo.jpg",
    rating: 5,
    review:
      "Fynity transformed my career! The hands-on projects and mentor guidance helped me land a Data Scientist role at a top MNC. Highly recommend their AI/ML program.",
  },
  {
    name: "Rahul Verma",
    college: "BITS Pilani",
    image: "/indian-man-professional-photo.jpg",
    rating: 5,
    review:
      "The 1-on-1 mentorship was a game-changer. My mentor helped me prepare for interviews and understand industry expectations. Got placed at Microsoft!",
  },
  {
    name: "Ananya Reddy",
    college: "IIIT Bangalore",
    image: "/indian-woman-student-photo.jpg",
    rating: 5,
    review:
      "Best investment I made in my career. The project-based learning approach gave me practical skills that textbooks never could. Now working as a Cloud Engineer.",
  },
  {
    name: "Karthik Nair",
    college: "VIT University",
    image: "/indian-man-graduate-photo.jpg",
    rating: 5,
    review:
      "From zero coding knowledge to a full-stack developer in 6 months. The curriculum is well-structured and mentors are always available to help.",
  },
  {
    name: "Sneha Patel",
    college: "NIT Warangal",
    image: "/indian-woman-engineer-photo.jpg",
    rating: 5,
    review:
      "The DevOps program was exactly what I needed. Real-world scenarios, practical labs, and industry exposure. Landed a job at Amazon within 2 months of completion!",
  },
]

export function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const next = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

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
            What Our{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Students Say</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Join hundreds of successful graduates who transformed their careers with Fynity.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border-border/50 shadow-lg">
              <CardContent className="p-8 lg:p-12">
                <Quote className="w-12 h-12 text-primary/20 mb-6" />
                <p className="text-lg lg:text-xl text-foreground mb-8 leading-relaxed">
                  &ldquo;{testimonials[currentIndex].review}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <Avatar className="w-14 h-14">
                    <AvatarImage
                      src={testimonials[currentIndex].image || "/placeholder.svg"}
                      alt={testimonials[currentIndex].name}
                    />
                    <AvatarFallback>{testimonials[currentIndex].name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonials[currentIndex].name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonials[currentIndex].college}</p>
                    <div className="flex gap-0.5 mt-1">
                      {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button variant="outline" size="icon" onClick={prev} className="rounded-full bg-transparent">
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false)
                    setCurrentIndex(index)
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? "w-8 bg-primary" : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
            <Button variant="outline" size="icon" onClick={next} className="rounded-full bg-transparent">
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
