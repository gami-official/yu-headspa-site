"use client"

import { motion } from "framer-motion"

const ease: [number, number, number, number] = [0.25, 0.1, 0.25, 1]

export function Hero() {
  return (
    <section className="relative h-[90vh] overflow-hidden md:h-screen">
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-zinc-900">
        {/* Hero background */}
        <div className="relative h-full w-full">
          <video
            src="/videos/hero.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover object-center"
          />

          {/* overlay */}
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />
        </div>

        {/* Text */}
        <div className="pointer-events-none absolute inset-x-0 top-[22%] z-10 flex justify-center px-6 text-center sm:top-[24%]">
          <div className="pointer-events-auto flex max-w-3xl flex-col items-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease }}
              className="mb-3 text-[11px] tracking-[0.35em] text-white/80 sm:text-xs"
            >
              福岡市の完全個室ヘッドスパ
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.35, ease }}
              className="mb-4 text-xl tracking-[0.22em] text-[#d6b36a] drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)] sm:text-2xl md:text-3xl"
            >
              ヘッドスパ専門店ゆう
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5, ease }}
              className="mb-6 flex flex-col items-center gap-1 text-center text-[11px] leading-relaxed tracking-[0.18em] text-white/75 sm:text-xs"
            >
              <span>創業6年・リピート多数</span>
              <span>ヘッドスパ歴15年以上</span>
              <span>育毛・頭皮改善・カラー施術対応</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.65, ease }}
              className="mb-8 text-sm leading-relaxed tracking-[0.18em] text-[#f2deb0] drop-shadow-[0_2px_8px_rgba(0,0,0,0.75)] sm:text-base md:text-lg"
            >
              日常から解放される、静寂と癒しのひととき
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8, ease }}
              className="mb-8 flex flex-col items-center gap-2 text-center text-sm leading-[2] tracking-[0.18em] text-white/90 sm:text-base md:text-lg"
            >
              <span>福岡市で選ばれる完全個室</span>
              <span>1日3名限定の特別な空間</span>
              <span>本物志向のためのヘッドスパ専門店</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.95, ease }}
              className="flex flex-col items-center gap-3 sm:flex-row"
            >
              <a
                href="#menu"
                className="inline-flex min-w-[220px] items-center justify-center rounded-full border border-[#d6b36a]/70 bg-[#d6b36a]/15 px-8 py-3 text-sm tracking-[0.18em] text-white backdrop-blur-sm transition hover:bg-[#d6b36a]/25"
              >
                MENUを見る
              </a>
              <a
                href="https://www.yuheadspa.net/"
                className="inline-flex min-w-[220px] items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-3 text-sm tracking-[0.18em] text-white backdrop-blur-sm transition hover:bg-white/15"
              >
                公式サイト
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
