"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const COUBIC_URL = "https://coubic.com/yuheadspa/services"

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
  }
}

export function FloatingReserve() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 320)
    handleScroll()

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleReserveClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    window.dataLayer = window.dataLayer || []

    window.dataLayer.push({
      event: "reserve_click",
      reserve_location: "floating",
    })

    setTimeout(() => {
      window.open(COUBIC_URL, "_blank", "noopener,noreferrer")
    }, 300)
  }

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
          <div className="rounded-[26px] border border-gold/25 bg-black/88 px-5 py-5 shadow-[0_18px_40px_rgba(0,0,0,0.42)] backdrop-blur-xl">
            <p className="text-center text-[10px] tracking-[0.32em] text-gold/80">
              PRIVATE SCALP BEAUTY
            </p>

            <h3 className="mt-3 text-center text-[15px] leading-7 tracking-[0.06em] text-white">
              完全予約制｜一日三名限定
              <br />
              頭皮から印象を整える専門ケア
            </h3>

            <a
              href={COUBIC_URL}
              onClick={handleReserveClick}
              className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-[#d6b36a] px-6 py-3.5 text-center text-sm font-medium tracking-[0.1em] text-black transition hover:opacity-90"
            >
              ご予約枠を確認する
            </a>

            <p className="mt-4 text-center text-[11px] leading-6 text-white/55">
              分け目・白髪・艶不足・ボリューム低下へ
              <br />
              完全個室で丁寧にご案内しております
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
