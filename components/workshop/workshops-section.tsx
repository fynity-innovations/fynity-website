"use client"

import { motion } from "framer-motion"
import WorkshopList from "@/components/workshop/workshop-list"

export default function WorkshopsSection() {
  const ongoingWorkshops = [
    {
      title: "React Bootcamp",
      date: "Dec 10 – Dec 20, 2025",
      time: "7 PM – 9 PM IST",
      mode: "Online",
      mentor: "Senior React Developer",
    },
    {
      title: "Python for Beginners",
      date: "Dec 5 – Dec 15, 2025",
      time: "6 PM – 8 PM IST",
      mode: "Online",
      mentor: "Industry Python Mentor",
    },
  ]

  const upcomingWorkshops = [
    {
      title: "Python for Data Analysis & Data Science",
      date: "Starts Dec 15, 2025",
      time: "9 AM – 4 PM IST",
      mode: "Offline",
      mentor: "Lead Data Analyst",
    },
    // {
    //   title: "AI & Machine Learning Basics",
    //   date: "Starts Jan 20, 2026",
    //   time: "6 PM – 8 PM IST",
    //   mode: "Online",
    //   mentor: "ML Engineer",
    // },
  ]

  return (
    <section className="relative py-24 overflow-hidden bg-background">
      <div className="container mx-auto px-4 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-3xl sm:text-4xl font-bold">
            Tech Workshops at Fynity Innovations
          </h1>

          <p className="mt-4 text-muted-foreground">
            Get industry-ready with hands-on workshops led by working
            professionals.
          </p>
        </motion.div>

        {/* Workshops */}
        {/* <WorkshopList
          title="🔥 Ongoing Workshops"
          workshops={ongoingWorkshops}
        /> */}

        <WorkshopList
          title="📅 Upcoming Workshops"
          workshops={upcomingWorkshops}
        />

      </div>
    </section>
  )
}
