"use client"

import { FadeIn } from "@/components/fade-in"

const RESERVE_URL =
  "https://headspayu.stores.jp/reserve/yuheadspa/services#pageContent"
const GOOGLE_REVIEW_URL =
  "https://www.google.com/search?q=ヘッドスパ専門店ゆう本店"

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
  }
}

const voices = [
  ["相談しやすい", "完全個室なので、髪や頭皮の悩みを話しやすい。"],
  ["丁寧な説明", "状態を見ながら、分かりやすく提案してもらえる。"],
  ["通いやすい", "落ち着いた空間で、リラックスして過ごせる。"],
]

export function VoiceSection() {
  const handleReserveClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    window.dataLayer = window.dataLayer || []

    window.dataLayer.push({
      event: "reserve_click",
      reserve_location: "voice",
    })

    setTimeout(() => {
      window.open(RESERVE_URL, "_blank", "noopener,noreferrer")
    }, 300)
  }

  return (
    <section id="voice" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-5xl px-5 lg:px-10">
        <FadeIn>
          <div className="text-center">
            <p className="text-[10px] tracking-[0.28em] text-gold/70">
              GOOGLE REVIEW
            </p>

            <h2 className="mt-4 text-[clamp(1.55rem,6vw,2.5rem)] leading-[1.55] tracking-[0.03em] text-foreground">
              Google口コミ★5.0
              <br />
              109件の口コミ。
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-muted-foreground">
              完全個室で、初めての方も安心。
              <br />
              多くのお客様に選ばれています。
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.06}>
          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto mt-8 block max-w-md rounded-[26px] border border-gold/20 bg-card px-6 py-6 text-center shadow-sm transition hover:border-gold/50 hover:shadow-md"
          >
            <p className="text-[10px] tracking-[0.24em] text-gold/70">
              GOOGLE
            </p>

            <p className="mt-3 text-3xl tracking-[0.12em] text-gold">
              ★★★★★
            </p>

            <p className="mt-3 text-2xl font-semibold tracking-[0.03em] text-foreground">
              5.0 / 109件
            </p>

            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              Google口コミを見る
            </p>
          </a>
        </FadeIn>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {voices.map(([title, text], index) => (
            <FadeIn key={title} delay={0.08 + index * 0.05}>
              <div className="h-full rounded-2xl border border-gold/20 bg-card px-5 py-6 text-center shadow-sm">
                <p className="text-[10px] tracking-[0.22em] text-gold/70">
                  VOICE {index + 1}
                </p>

                <h3 className="mt-4 text-base font-medium leading-7 tracking-[0.03em] text-foreground">
                  {title}
                </h3>

                <p className="mt-3 text-[13px] leading-7 text-muted-foreground">
                  {text}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <div className="mt-10 text-center">
            <a
              href={RESERVE_URL}
              onClick={handleReserveClick}
              className="inline-flex w-full max-w-xs items-center justify-center rounded-full bg-gold px-6 py-3.5 text-sm font-medium tracking-[0.08em] text-black transition hover:opacity-90"
            >
              メニューと空き状況を見る
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
