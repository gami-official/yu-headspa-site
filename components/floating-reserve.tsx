"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const COUBIC_URL = "https://coubic.com/yuheadspa/services"
const LINE_URL = "https://lin.ee/7hso3k1"
const GIFT_URL = "https://gamistore.base.shop/"

export function FloatingReserve() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 320)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 18 }}
          transition={{ duration: 0.28 }}
          className="fixed bottom-5 left-1/2 z-40 w-[calc(100%-32px)] max-w-md -translate-x-1/2 sm:bottom-6"
        >
          <div className="rounded-2xl border border-gold/25 bg-black/80 px-3 py-3 shadow-[0_12px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl">
            <div className="grid grid-cols-2 gap-2">
              <a
                href={COUBIC_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#d6b36a] px-4 text-center text-sm font-medium tracking-[0.08em] text-black transition hover:opacity-90"
              >
                ご予約はこちら
              </a>

              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-white/20 bg-white/5 px-4 text-center text-sm tracking-[0.08em] text-white transition hover:border-[#d6b36a] hover:text-[#d6b36a]"
              >
                LINEで相談
              </a>
            </div>

            <div className="mt-2 text-center">
              <a
                href={GIFT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] tracking-[0.06em] text-white/55 underline underline-offset-2 transition hover:text-[#d6b36a]"
              >
                ギフトチケットはこちら
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
