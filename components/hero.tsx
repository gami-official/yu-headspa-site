"use client"

import { motion } from "framer-motion"

const ease = [0.25, 0.1, 0.25, 1]

export function Hero() {
  return (
    <section className="relative h-[90vh] overflow-hidden md:h-screen">
      {/* 写真コンテナ: relative にして、この中にテキストを重ねる */}
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-zinc-800">
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
        </div>

        {/* 写真の上に重ねるテキスト（中央より少し上） */}
        <div className="pointer-events-none absolute inset-x-0 top-[28%] z-10 flex justify-center px-6 text-center">
          <div className="pointer-events-auto flex max-w-xl flex-col items-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease }}
              className="mb-2 text-base tracking-[0.4em] text-foreground/70 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)] sm:text-lg"
            >
              <motion.p className="mb-2 text-sm text-white/80 tracking-[0.2em]">
  福岡市の完全個室ヘッドスパ
</motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.45, ease }}
              className="mb-3 text-2xl tracking-[0.3em] text-gold-light/90 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)] sm:text-3xl"
            >
              <motion.p className="mb-3 text-2xl tracking-[0.2em] text-gold-light">
  ヘッドスパ専門店ゆう
</motion.p>

              <motion.div className="mb-4 flex flex-col items-center gap-1 text-xs text-white/70 tracking-[0.2em] text-center">
  <span>創業6年・リピート多数</span>
<span>ヘッドスパ歴15年以上</span>
<span>育毛・頭皮改善・カラー施術対応</span>
</motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.55, ease }}
              className="mb-10 text-lg tracking-[0.3em] text-gold-light/90 sm:text-xl"
              style={{ WebkitTextStroke: "1px black", paintOrder: "stroke fill" }}
            >
         <motion.p className="mb-6 text-base text-gold-light text-center leading-relaxed">
  日常から解放される、静寂と癒しのひととき
</motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7, ease }}
              className="flex flex-col items-center gap-2 text-center text-base leading-[2.2] tracking-[0.2em] text-foreground/90 sm:text-lg"
            >
           <div className="flex flex-col items-center gap-1 text-xs text-white/80 text-center leading-relaxed">
  <span>福岡市で選ばれる完全個室</span>
  <span>1日3名限定の特別な空間</span>
  <span>本物志向のためのヘッドスパ専門店</span>
</div>
            </motion.h1>
          </div>
        </div>
      </div>
    </section>
  )
}
