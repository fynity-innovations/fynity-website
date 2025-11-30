"use client"

import type React from "react"
import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Send, Loader2, CheckCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"

const programs = [
  "Artificial Intelligence",
  "Machine Learning",
  "Data Science",
  "Python & Automation",
  "Cloud & DevOps",
  "Emerging Technologies",
  "Corporate Training",
  "College Partnership",
  "Other",
]

export function ContactForm() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    // --- WEB3FORMS CONFIGURATION ---
    // Add your access key here. 
    formData.append("access_key", "a5e4e235-82a1-4092-a509-ec4e5fa816cd") 
    
    // Optional: Add a subject line for the email you receive
    formData.append("subject", "New Contact Form Submission from Website")
    
    // Convert FormData to JSON
    const object = Object.fromEntries(formData)
    const json = JSON.stringify(object)

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      })

      const result = await response.json()

      if (result.success) {
        setIsSuccess(true)
        toast({
          title: "Message Sent Successfully!",
          description: "Thank you for reaching out. We'll get back to you within 24 hours.",
        })
        form.reset()
      } else {
        // Handle error from the service
        toast({
          variant: "destructive",
          title: "Something went wrong.",
          description: result.message || "Please try again later.",
        })
      }
    } catch (error) {
      console.error("Form submission error", error)
      toast({
        variant: "destructive",
        title: "Network Error",
        description: "Please check your internet connection.",
      })
    } finally {
      setIsSubmitting(false)
      
      // Reset success state after 3 seconds so user can send another if needed
      if (isSuccess) {
        setTimeout(() => setIsSuccess(false), 3000)
      }
    }
  }

  return (
    <section ref={ref} className="py-12 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-balance">
              Send Us a{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Message</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Fill out the form below and our team will get back to you as soon as possible.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="border-border/50 overflow-hidden">
              <CardContent className="p-8 lg:p-12">
                {isSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12"
                  >
                    <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mb-6">
                      <CheckCircle className="w-10 h-10 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground mb-2">Thank You!</h3>
                    <p className="text-muted-foreground text-center max-w-md">
                      Your message has been sent successfully. Our team will contact you within 24 hours.
                    </p>
                    {/* Added a button to reset manually if they want to send another immediately */}
                    <Button 
                        variant="link" 
                        onClick={() => setIsSuccess(false)} 
                        className="mt-4"
                    >
                        Send another message
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input id="name" name="name" placeholder="John Doe" required className="bg-background" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          required
                          className="bg-background"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="+91 "
                          required
                          className="bg-background"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="program">Interested In</Label>
                        <Select name="program">
                          <SelectTrigger className="bg-background">
                            <SelectValue placeholder="Select a program" />
                          </SelectTrigger>
                          <SelectContent>
                            {programs.map((program) => (
                              <SelectItem
                                key={program}
                                value={program} // Simplifed value to keep it readable in email
                              >
                                {program}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your learning goals..."
                        rows={5}
                        required
                        className="bg-background resize-none"
                      />
                    </div>

                    {/* HONEYPOT: Helps prevent spam bots (Hidden input) */}
                    <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                    <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}