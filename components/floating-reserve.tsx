"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const COUBIC_URL = "https://coubic.com/yuheadspa/services"

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
          <div className="rounded-2xl border border-gold/25 bg-black/85 px-4 py-4 shadow-[0_12px_30px_rgba(0,0,0,0.4)] backdrop-blur-xl">

            {/* 限定性 */}
            <p className="text-center text-[10px] tracking-[0.3em] text-gold/80">
              完全予約制｜一日三名限定
            </p>

            {/* メインCTA */}
            <a
              href={COUBIC_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex w-full items-center justify-center rounded-full bg-[#d6b36a] px-6 py-3.5 text-center text-sm font-medium tracking-[0.08em] text-black transition hover:opacity-90"
            >
              空き状況を見る
            </a>

            {/* 補足 */}
            <p className="mt-3 text-center text-[11px] text-white/60">
              初めての方も安心してご予約いただけます
            </p>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
