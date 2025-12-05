import type { Metadata } from "next"
import RegisterForm from "@/components/register/register-form"

export const metadata: Metadata = {
  title: "Register | Fynity Innovations",
  description:
    "Register for Fynity Innovations workshops in React, Python, Data Science, and AI. Book your seat now for hands-on mentorship programs.",
}

export default function RegisterPage() {
  return <RegisterForm />
}
