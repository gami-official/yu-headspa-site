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

          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/25 to-black/70" />
        </div>

        <div className="pointer-events-none absolute inset-x-0 top-[18%] z-10 flex justify-center px-6 text-center sm:top-[21%]">
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
              transition={{ duration: 0.9, delay: 0.3, ease }}
              className="mb-3 text-[12px] leading-relaxed tracking-[0.18em] text-white/80 sm:text-sm"
            >
              抜け毛・薄毛・分け目が気になり始めた方へ
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.38, ease }}
              className="mb-5 text-xl tracking-[0.22em] text-[#d6b36a] drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)] sm:text-2xl md:text-3xl"
            >
              ヘッドスパ専門店ゆう
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.48, ease }}
              className="mb-4 text-sm leading-relaxed tracking-[0.18em] text-[#f2deb0] drop-shadow-[0_2px_8px_rgba(0,0,0,0.75)] sm:text-base"
            >
              頭皮から美しさを整えるという選択
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.58, ease }}
              className="mb-6 flex flex-col items-center gap-1 text-center text-[11px] leading-relaxed tracking-[0.18em] text-white/75 sm:text-xs"
            >
              <span>創業6年・リピート多数</span>
              <span>ヘッドスパ歴15年以上</span>
              <span>育毛・ヘアカラー・リラクゼーションまで対応</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.72, ease }}
              className="mb-4 flex flex-col items-center gap-2 text-center text-sm leading-[1.9] tracking-[0.15em] text-white/92 sm:text-base md:text-lg"
            >
              <span>福岡市で希少な本格育毛ヘッドスパ</span>
              <span className="text-[12px] tracking-[0.12em] text-white/70 sm:text-sm">
                頭皮を守りながら染めるヘアカラーヘッドスパも対応
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.84, ease }}
              className="mb-3 text-[11px] text-white/60"
            >
              ※抜け毛・薄毛のお悩みから、白髪染めや癒し目的まで幅広くご相談いただいています
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9, ease }}
              className="mb-8 max-w-2xl text-sm leading-7 tracking-[0.08em] text-white/75 sm:text-base"
            >
              完全個室で、抜け毛・薄毛・分け目のお悩みから、
              頭皮負担を抑えたヘアカラー、深い癒しのリラクゼーションまで。
              お一人おひとりの状態に合わせて丁寧にご提案します。
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.96, ease }}
              className="flex flex-col items-center gap-3 sm:flex-row"
            >
              <a
                href={COUBIC_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-w-[220px] items-center justify-center rounded-full border border-[#d6b36a] bg-[#d6b36a] px-8 py-3 text-sm tracking-[0.18em] text-black transition hover:bg-transparent hover:text-[#d6b36a]"
              >
                ご予約はこちら
              </a>

              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-w-[220px] items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-3 text-sm tracking-[0.18em] text-white backdrop-blur-sm transition hover:bg-white/15"
              >
                LINEで相談する
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
