"use client"

import { FadeIn } from "@/components/fade-in"

const RESERVE_URL =
  "https://headspayu.stores.jp/reserve/yuheadspa/services#pageContent"
const GIFT_STORE_URL = "https://gamistore.base.shop/items/144607972"
const GOOGLE_REVIEW_URL =
  "https://www.google.com/search?q=ヘッドスパ専門店ゆう本店"

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
  }
}

export function Hero() {
  const handleReserveClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      event: "reserve_click",
      reserve_location: "hero",
    })

    setTimeout(() => {
      window.open(RESERVE_URL, "_blank", "noopener,noreferrer")
    }, 300)
  }

  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-black text-white">
      <div className="absolute inset-0 overflow-hidden">
        <video
          src="/videos/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover scale-[1.08] sm:scale-[1.12] lg:scale-[1.15]"
        />
        <div className="absolute inset-0 bg-black/68" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/45 to-black/88" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-5 pb-16 pt-28 text-center sm:px-6 sm:pb-20 sm:pt-34 lg:px-10">
        <div className="w-full max-w-3xl">
          <FadeIn>
            <p className="text-[10px] tracking-[0.28em] text-[#d6b36a] sm:text-xs sm:tracking-[0.45em]">
              FUKUOKA PRIVATE HEAD SPA
            </p>
          </FadeIn>

          <FadeIn delay={0.05}>
            <a
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-auto mt-5 flex w-fit max-w-full flex-wrap items-center justify-center gap-x-2 gap-y-1 rounded-full border border-[#d6b36a]/35 bg-black/45 px-4 py-2 text-[10px] tracking-[0.04em] text-[#d6b36a] backdrop-blur-md transition hover:border-[#d6b36a] hover:bg-black/60 sm:text-[11px]"
            >
              <span>Google口コミ ★5.0</span>
              <span className="text-white/45">｜</span>
              <span>109件</span>
              <span className="text-white/45">｜</span>
              <span>完全個室</span>
            </a>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="mx-auto mt-8 text-[clamp(2.15rem,10vw,3.8rem)] font-medium leading-[1.38] tracking-[0.03em] text-white sm:text-[clamp(2.4rem,5vw,4rem)] sm:leading-[1.45]">
              贅沢を日常に。
            </h1>
          </FadeIn>

          <FadeIn delay={0.13}>
            <p className="mx-auto mt-4 text-[clamp(1rem,4.5vw,1.45rem)] leading-[1.8] tracking-[0.03em] text-white/90">
              頭皮から整える
              <br />
              完全個室ヘッドスパ
            </p>
          </FadeIn>

          <FadeIn delay={0.16}>
            <p className="mt-6 text-sm leading-8 text-white/75 sm:text-base">
              福岡市西区｜駐車場2台完備
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mx-auto mt-9 flex w-full max-w-[340px] flex-col gap-3">
              <a
                href={RESERVE_URL}
                onClick={handleReserveClick}
                className="w-full rounded-full bg-[#d6b36a] px-6 py-3.5 text-sm font-medium tracking-[0.08em] text-black transition hover:opacity-90"
              >
                空き状況を見る
              </a>

              <a
                href={GIFT_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-full border border-[#d6b36a]/60 px-6 py-3.5 text-sm tracking-[0.08em] text-[#d6b36a] transition hover:bg-[#d6b36a] hover:text-black"
              >
                ギフトカードを見る
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
