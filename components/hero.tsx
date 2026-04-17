"use client"

import { motion } from "framer-motion"

const ease: [number, number, number, number] = [0.25, 0.1, 0.25, 1]
const COUBIC_URL = "https://coubic.com/yuheadspa/services"
const LINE_URL = "https://lin.ee/7hso3k1"

export function Hero() {
  return (
    <section className="relative min-h-[760px] overflow-hidden bg-zinc-900 md:min-h-screen">
      <div className="absolute inset-0">
        <video
          src="/videos/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/35 to-black/80" />
      </div>

      <div className="relative z-10 flex min-h-[760px] items-center justify-center px-5 py-20 md:min-h-screen">
        <div className="w-full max-w-[360px] text-center sm:max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease }}
            className="text-[11px] tracking-[0.22em] text-white/70 sm:text-xs"
          >
            完全個室｜完全予約制｜1日3名限定
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.24, ease }}
            className="mt-3 text-[11px] tracking-[0.22em] text-[#d6b36a] sm:text-xs"
          >
            福岡市西区の本格ヘッドスパ専門店
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease }}
            className="mt-5 text-[clamp(1.9rem,8vw,3.6rem)] font-semibold leading-[1.28] tracking-[0.08em] text-white"
          >
            ヘッドスパ専門店ゆう
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.48, ease }}
            className="mt-5 text-base leading-7 text-[#d6b36a] sm:text-lg"
          >
            抜け毛・薄毛・分け目が気になる方へ
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.58, ease }}
            className="mt-3 text-sm leading-7 text-white/85 sm:text-base"
          >
            頭皮環境を整えながら、
            <br className="hidden sm:block" />
            育毛・ヘアカラー・リラクゼーションまで
            <br className="hidden sm:block" />
            お一人おひとりに合わせて丁寧に施術します。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, delay: 0.75, ease }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center"
          >
            <a
              href={COUBIC_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-w-[240px] items-center justify-center rounded-full border border-[#d6b36a] bg-[#d6b36a] px-8 py-3.5 text-sm font-medium tracking-[0.12em] text-black transition hover:bg-transparent hover:text-[#d6b36a]"
            >
              ご予約はこちら
            </a>

            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-w-[240px] items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-3.5 text-sm font-medium tracking-[0.12em] text-white backdrop-blur-sm transition hover:bg-white/15"
            >
              LINEで無料相談
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.92, ease }}
            className="mt-5 text-xs leading-6 text-white/65"
          >
            駐車場あり・完全個室でゆっくりお過ごしいただけます
          </motion.p>
        </div>
      </div>
    </section>
  )
}
