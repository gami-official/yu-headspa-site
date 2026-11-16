"use client"

import { FadeIn } from "@/components/fade-in"

const RESERVE_URL =
  "https://headspayu.stores.jp/reserve/yuheadspa/services#pageContent"
const GIFT_STORE_URL = "https://gamistore.base.shop/items/144607972"
const GOOGLE_REVIEW_URL =
  "https://www.google.com/search?q=ヘッドスパ専門店　ゆう　本店"

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
  }
}

export function Hero() {
  const trackReserve = () => {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      event: "reserve_click",
      reserve_location: "hero",
    })
  }

  return (
    <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-black text-white">
      {/* 動画背景は維持。画像は読み込み前の代替表示 */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
        />
        <video
          src="/videos/hero.mp4"
          poster="/images/hero-bg.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          className="absolute inset-0 h-full w-full scale-[1.08] object-cover sm:scale-[1.12] lg:scale-[1.15]"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/35 to-black/85" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center justify-center px-5 pb-20 pt-28 text-center sm:px-6 sm:pb-24 sm:pt-32 lg:px-10">
        <div className="w-full max-w-3xl">
          <FadeIn>
            <p className="text-[10px] tracking-[0.24em] text-[#d6b36a] sm:text-xs sm:tracking-[0.45em]">
              FUKUOKA MAIN SALON
            </p>
          </FadeIn>

          <FadeIn delay={0.05}>
            <a
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-auto mt-5 flex w-fit max-w-full flex-wrap items-center justify-center gap-x-2 gap-y-1 rounded-full border border-[#d6b36a]/35 bg-black/45 px-4 py-2 text-[11px] text-[#d6b36a] backdrop-blur-md transition hover:border-[#d6b36a] hover:bg-black/60"
            >
              <span>Googleの口コミを見る</span>
              <span aria-hidden="true">↗</span>
            </a>
          </FadeIn>

          <FadeIn delay={0.08}>
            <p className="mt-5 text-base font-medium tracking-[0.22em] text-white/95 sm:text-lg">
              ヘッドスパ専門店 ゆう｜本店
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="mx-auto mt-7 text-[clamp(2.1rem,9vw,3.8rem)] font-medium leading-[1.35] tracking-[0.03em] text-white sm:mt-8 sm:leading-[1.45]">
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
            <p className="mt-5 text-sm leading-7 text-white/75 sm:mt-6 sm:text-base">
              福岡市西区｜完全予約制・完全個室
              <br className="sm:hidden" />
              <span className="hidden sm:inline">｜</span>
              1日3名限定
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mx-auto mt-8 flex w-full max-w-[360px] flex-col gap-3 sm:mt-9">
              <a
                href={RESERVE_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackReserve}
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#d6b36a] px-6 py-3.5 text-sm font-medium tracking-[0.08em] text-black shadow-lg shadow-black/20 transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d6b36a]"
              >
                空き状況を確認・予約する ↗
              </a>

              <a
                href={GIFT_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-[#d6b36a]/60 bg-black/20 px-6 py-3.5 text-sm tracking-[0.08em] text-[#d6b36a] transition hover:bg-[#d6b36a] hover:text-black"
              >
                ギフトカードを見る ↗
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
