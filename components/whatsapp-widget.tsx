"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X } from "lucide-react"

export function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false)

  const whatsappMessage = encodeURIComponent("Hello, I'm interested in training with Fynity Innovations.")
  const whatsappUrl = `https://wa.me/919493207300?text=${whatsappMessage}`

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="absolute bottom-16 right-0 w-72 bg-card border border-border rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="bg-[#25D366] p-4">
              <h3 className="text-white font-semibold">Chat with us!</h3>
              <p className="text-white/80 text-sm">We typically reply within minutes</p>
            </div>
            <div className="p-4">
              <p className="text-sm text-muted-foreground mb-4">
                Have questions about our programs? We&apos;re here to help!
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20BD5A] text-white py-3 rounded-lg font-medium transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Start Chat
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg flex items-center justify-center hover:bg-[#20BD5A] transition-colors"
        aria-label="Open WhatsApp chat"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </motion.button>
    </div>
  )
}
