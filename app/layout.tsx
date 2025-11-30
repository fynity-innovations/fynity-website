import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppWidget } from "@/components/whatsapp-widget"
import { ScrollProgress } from "@/components/scroll-progress"
import { InquiryModal } from "@/components/inquiry-modal"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })

export const metadata: Metadata = {
  title: {
    default: "Fynity Innovations - Digital Learning | Mentorship | Technology Consulting",
    template: "%s | Fynity Innovations",
  },
  description:
    "Fynity Innovations offers industry-leading training in AI, ML, Data Science, Python, and Cloud technologies. Get mentorship from working professionals and build real-world projects.",
  keywords: [
    "AI Training",
    "Machine Learning",
    "Data Science",
    "Python",
    "Cloud Computing",
    "DevOps",
    "Mentorship",
    "Technology Consulting",
  ],
  authors: [{ name: "Fynity Innovations" }],
  openGraph: {
    title: "Fynity Innovations - Innovate Beyond Limits",
    description: "Digital Learning | Mentorship | Technology Consulting",
    type: "website",
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1a2e" },
  ],
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${geistMono.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <ScrollProgress />
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <WhatsAppWidget />
          {/* <InquiryModal /> */}
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
