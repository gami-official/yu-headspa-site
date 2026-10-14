
"use client"

import Link from "next/link"

const RESERVE_URL =
  "https://headspayu.stores.jp/reserve/yuheadspa/services#pageContent"

const GIFT_URL =
  "https://gamistore.base.shop/items/144607972"

export function Hero() {
  const trackReserve = () => {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      event: "reserve_click",
      reserve_location: "hero",
    })
  }

  return (
    <section className="relative isolate flex min-h-[620px] items-center overflow-hidden bg-black text-white sm:min-h-[680px] lg:min-h-[720px]">
      {/* Background video */}
      <div className="absolute inset-0">
        <video
          src="/videos/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/85" />
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-14 pt-28 sm:px-8 sm:pb-20 sm:pt-32 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[10px] font-medium tracking-[0.2em] text-[#d6b36a] sm:text-xs sm:tracking-[0.35em]">
            FUKUOKA PRIVATE HEAD SPA
          </p>

          <p className="mt-5 text-xs tracking-widest text-white/80 sm:text-sm">
            福岡市西区の完全個室ヘッドスパ専門店
          </p>

          <h1 className="mt-7 text-[clamp(2rem,8vw,4rem)] font-medium leading-[1.45] tracking-[0.02em] sm:mt-9">
            贅沢を日常に。
          </h1>

          <p className="mt-4 text-lg font-medium leading-relaxed tracking-wide sm:text-2xl">
            頭皮から整える
            <br />
            プライベートヘッドスパ
          </p>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-8 text-white/80 sm:text-base">
            育毛を見据えた頭皮ケアから、
            ヘアカラー、リラクゼーションまで。
            <br className="hidden sm:block" />
            一人ひとりのお悩みに寄り添う、
            丁寧な施術をご提供します。
          </p>

          {/* Features */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-2 text-xs sm:gap-3 sm:text-sm">
            {[
              "完全個室",
              "1日3名限定",
              "90分コース",
            ].map((feature) => (
              <span
                key={feature}
                className="rounded-full border border-[#d6b36a]/50 bg-black/30 px-3 py-2 text-white/90"
              >
                {feature}
              </span>
            ))}
          </div>

          {/* Call to action */}
          <div className="mx-auto mt-9 grid w-full max-w-md grid-cols-1 gap-3 sm:mt-11">
            <a
              href={RESERVE_URL}
              onClick={trackReserve}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-13 items-center justify-center rounded-full bg-[#d6b36a] px-5 py-3 text-center text-sm font-semibold text-black transition hover:opacity-90"
            >
              空き状況を確認・予約する →
            </a>

            <Link
              href="/#menu"
              className="flex min-h-13 items-center justify-center rounded-full border border-[#d6b36a] bg-black/30 px-5 py-3 text-center text-sm font-medium text-white transition hover:bg-white/10"
            >
              メニュー・料金・施術内容を見る →
            </Link>
          </div>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-5 text-xs text-white/75">
            <a
              href={GIFT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-white/40 underline-offset-4 hover:text-[#d6b36a]"
            >
              ギフトカードを見る
            </a>

            <Link
              href="/#essences"
              className="underline decoration-white/40 underline-offset-4 hover:text-[#d6b36a]"
            >
              ゆうの10のこだわり
            </Link>
          </div>

          <p className="mt-8 text-xs leading-6 text-white/60">
            福岡市西区｜駐車場2台完備
          </p>
        </div>
      </div>
    </section>
  )
}

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
  }
}
