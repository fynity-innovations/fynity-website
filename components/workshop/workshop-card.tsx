"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

type Workshop = {
  title: string
  date: string
  time: string
  mode: string
  mentor: string
}

export default function WorkshopCard({ workshop }: { workshop: Workshop }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="relative group rounded-2xl border bg-card p-6 shadow hover:shadow-xl transition"
    >
      <h3 className="text-xl font-semibold">{workshop.title}</h3>

      <div className="mt-3 space-y-1 text-muted-foreground text-sm">
        <p>📅 {workshop.date}</p>
        <p>⏰ {workshop.time}</p>
        <p>💻 {workshop.mode}</p>
        <p>👨‍🏫 {workshop.mentor}</p>
      </div>

      <Button asChild className="mt-5 w-full">
        <Link href="/register">Register Now</Link>
      </Button>
    </motion.div>
  )
}
