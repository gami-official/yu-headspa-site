"use client"

import { motion } from "framer-motion"

const ease: [number, number, number, number] = [0.25, 0.1, 0.25, 1]
const COUBIC_URL = "https://coubic.com/yuheadspa/services"
const LINE_URL = "https://lin.ee/7hso3k1"

export function Hero() {
  return (
    <section className="relative h-[90vh] overflow-hidden md:h-screen">
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-zinc-900">
        <div className="relative h-full w-full">
          <video
            src="/videos/hero.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/30 to-black/70" />
        </div>

        <div className="pointer-events-none absolute inset-x-0 top-[18%] z-10 flex justify-center px-6 text-center sm:top-[21%]">
          <div className="pointer-events-auto flex max-w-3xl flex-col items-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease }}
              className="mb-2 text-[11px] tracking-[0.2em] text-white/60"
            >
              完全予約制｜1日3名限定
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.28, ease }}
              className="mt-2 text-[12px] tracking-[0.2em] text-white/60"
            >
              福岡市の完全個室ヘッドスパ
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.38, ease }}
              className="mt-6 text-2xl tracking-[0.2em] text-[#d6b36a] sm:text-3xl"
            >
              ヘッドスパ専門店ゆう
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.48, ease }}
              className="mt-4 text-sm text-white/70"
            >
              頭皮から美しさを整えるという選択
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.58, ease }}
              className="mt-6 text-base text-white"
            >
              抜け毛・薄毛・分け目に悩む方へ
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.66, ease }}
              className="mt-2 text-sm text-white/70"
            >
              頭皮から整える本格ケア
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.76, ease }}
              className="mt-6 max-w-2xl text-xs leading-relaxed text-white/60"
            >
              完全個室で、育毛・ヘアカラー・リラクゼーションまで対応。
              お一人おひとりに合わせた施術をご提供します。
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9, ease }}
              className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
            >
              <a
                href={COUBIC_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-w-[220px] items-center justify-center rounded-full border border-[#d6b36a] bg-[#d6b36a] px-8 py-3 text-sm tracking-[0.14em] text-black transition hover:bg-transparent hover:text-[#d6b36a]"
              >
                ご予約はこちら
              </a>

              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-w-[220px] items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-3 text-sm tracking-[0.14em] text-white backdrop-blur-sm transition hover:bg-white/15"
              >
                無料で相談する
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
