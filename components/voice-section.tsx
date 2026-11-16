"use client"

import { FadeIn } from "@/components/fade-in"

const RESERVE_URL =
  "https://headspayu.stores.jp/reserve/yuheadspa/services#pageContent"
const GOOGLE_REVIEW_URL =
  "https://www.google.com/search?q=ヘッドスパ専門店　ゆう　本店"

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
  }
}

export function VoiceSection() {
  const trackReserve = () => {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      event: "reserve_click",
      reserve_location: "voice",
    })
  }

  return (
    <section id="voice" className="scroll-mt-24 bg-background py-14 lg:py-20">
      <div className="mx-auto max-w-4xl px-5 lg:px-10">
        <FadeIn>
          <div className="text-center">
            <p className="text-[10px] tracking-[0.28em] text-gold/70">
              GOOGLE REVIEW
            </p>

            <h2 className="mt-4 text-[clamp(1.55rem,6vw,2.4rem)] leading-[1.5] tracking-[0.03em] text-foreground">
              お客様からの口コミ
            </h2>

            <p className="mx-auto mt-4 max-w-lg text-[13px] leading-7 text-muted-foreground sm:text-sm">
              お客様からいただいた声を、Googleの口コミでご紹介しています。
            </p>

            <a
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-auto mt-7 flex min-h-28 max-w-sm flex-col items-center justify-center rounded-[24px] border border-gold/20 bg-card px-6 py-6 text-center shadow-sm transition hover:border-gold/50"
            >
              <p className="text-xl tracking-[0.12em] text-gold">Google Reviews</p>
              <p className="mt-3 text-sm text-muted-foreground">
                最新の評価・口コミを見る ↗
              </p>
            </a>

            <a
              href={RESERVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackReserve}
              className="mt-8 inline-flex min-h-12 w-full max-w-xs items-center justify-center rounded-full bg-gold px-6 py-3.5 text-sm font-medium tracking-[0.08em] text-black transition hover:opacity-90"
            >
              空き状況を見る ↗
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
