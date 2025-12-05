"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function RegisterForm() {
  const [loading, setLoading] = useState(false)

  async function submitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)

    const fd = new FormData(e.currentTarget)
    const payload = Object.fromEntries(fd.entries())

    const res = await fetch("https://fynityinnovations.com/api/register.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })

    const data = await res.json()
    setLoading(false)

    if (data.status === "success") {
      alert("✅ Registration Successful!\nID: " + data.registration_id)
      e.currentTarget.reset()
    } else {
      alert("❌ " + data.message)
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-muted/30 py-24 px-6">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-3xl bg-card border shadow-xl rounded-2xl overflow-hidden"
      >
        <div className="bg-gradient-to-r from-primary to-accent p-10 text-white text-center">
          <h1 className="text-3xl sm:text-4xl font-bold">Workshop Registration</h1>
          <p className="mt-2 opacity-90">Join Fynity Innovations programs</p>
        </div>

        <form onSubmit={submitForm} className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">

          <Input name="name" label="Full Name" />
          <Input name="phone" label="Phone Number" />
          <Input name="email" type="email" label="Email" />
          <Input name="dob" type="date" label="Date of Birth" />
          <Input name="passedout_year" type="number" label="Passed Out Year" />

          <Select
            name="college_name"
            label="College Name"
            options={["NEC", "ESWAR", "TEC", "RVR"]}
          />

          {/* <Input name="college_code" label="College Code" /> */}
          <Input name="branch" label="Branch" />
          <Input name="roll_number" label="Roll Number" />

          <Select
            name="gender"
            label="Gender"
            options={["Male", "Female", "Other"]}
          />

          <Select
            name="interested_domain"
            label="Interested Domain"
            options={["Data Analysis", "Data Science", "AI", "Fullstack"]}
          />

          <div className="md:col-span-2 mt-6">
            <Button type="submit" disabled={loading} className="w-full h-14 text-lg">
              {loading ? "Submitting..." : "Register Now"}
            </Button>
          </div>
        </form>
      </motion.div>
    </section>
  )
}

function Input({
  name,
  label,
  type = "text",
}: {
  name: string
  label: string
  type?: string
}) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-muted-foreground">{label}</label>
      <input
        required
        name={name}
        type={type}
        className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary"
      />
    </div>
  )
}

function Select({
  name,
  label,
  options,
}: {
  name: string
  label: string
  options: string[]
}) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-muted-foreground">{label}</label>
      <select
        required
        name={name}
        className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary"
      >
        <option value="">Select {label}</option>
        {options.map(op => (
          <option key={op} value={op}>{op}</option>
        ))}
      </select>
    </div>
  )
}
