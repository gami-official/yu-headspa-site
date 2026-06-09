"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { FadeIn } from "@/components/fade-in"

const COUBIC_URL = "https://coubic.com/yuheadspa/services"
const LINE_URL = "https://lin.ee/7hso3k1"

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
  }
}

const excluded = [3, 8, 21]

const comments = [
  "分け目の印象変化に",
  "トップのボリューム感へ",
  "頭皮環境を整えるケア",
  "継続ケアの一例",
  "抜け毛・薄毛のお悩みに",
  "ハリ・コシ不足へ",
  "年齢髪の変化に",
  "頭皮から若々しい印象へ",
  "分け目・つむじ周りに",
  "髪の土台づくり",
  "頭皮状態に合わせたケア",
  "将来の髪を見据えて",
  "自然なボリューム感へ",
  "印象年齢を整える",
  "髪質と印象のケア",
  "薄毛・抜け毛の相談に",
  "完全個室で安心相談",
  "一人ひとりに合わせて",
  "髪の変化を感じたら",
  "早めの頭皮ケア",
  "頭皮と髪を同時に",
  "美しい髪の土台づくり",
  "大人女性の髪悩みに",
]

const slides = Array.from({ length: 26 }, (_, i) => i + 1)
  .filter((n) => !excluded.includes(n))
  .map((n, i) => ({
    src: `/images/evidence-${String(n).padStart(2, "0")}.png`,
    alt: `Case ${i + 1}`,
    comment: comments[i] ?? "頭皮から整える専門ケア",
  }))

const trustItems = [
  ["Google口コミ", "100件突破"],
  ["完全個室", "相談しやすい空間"],
  ["一日三名限定", "丁寧な施術"],
  ["駐車場", "店舗前2台"],
  ["経験", "歴15年"],
  ["初めての方", "安心対応"],
]

export function Evidence() {
  const [current, setCurrent] = useState(0)

  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  const prev = () =>
    setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1))

  const next = () =>
    setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1))

  useEffect(() => {
    if (slides.length <= 1) return

    const interval = setInterval(() => {
      setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX

    const diff = touchStartX.current - touchEndX.current
    const threshold = 50

    if (diff > threshold) next()
    else if (diff < -threshold) prev()
  }

  const handleReserveClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    window.dataLayer = window.dataLayer || []

    window.dataLayer.push({
      event: "reserve_click",
      reserve_location: "evidence",
    })

    setTimeout(() => {
      window.open(COUBIC_URL, "_blank", "noopener,noreferrer")
    }, 300)
  }

  return (
    <section id="evidence" className="bg-secondary py-16 lg:py-28">
      <div className="mx-auto max-w-5xl px-5 lg:px-10">
        <FadeIn>
          <div className="mb-10 text-center">
            <p className="text-[10px] tracking-[0.28em] text-gold/70">
              TRUST & RESULTS
            </p>

            <h2 className="mt-4 text-[clamp(1.55rem,6vw,2.5rem)] leading-[1.55] tracking-[0.03em] text-foreground">
              口コミ100件突破。
              <br />
              選ばれる理由があります
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-muted-foreground">
              分け目・薄毛・白髪・艶不足へ。
              <br />
              完全個室で丁寧に向き合います。
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.06}>
          <div className="mb-12 grid grid-cols-2 gap-3 lg:grid-cols-3">
            {trustItems.map(([label, value]) => (
              <div
                key={label}
                className="rounded-2xl border border-gold/20 bg-card px-4 py-4 text-center shadow-sm"
              >
                <p className="text-[9px] tracking-[0.2em] text-gold/70">
                  {label}
                </p>

                <p className="mt-2 text-sm leading-6 tracking-[0.03em] text-foreground">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <p className="mb-5 text-center text-xs leading-6 text-foreground/60">
            実際のお客様の一例
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="relative">
            <div
              className="relative mx-auto w-full max-w-sm overflow-hidden rounded-[26px] border border-gold/20 bg-black shadow-[0_20px_50px_rgba(0,0,0,0.35)] sm:max-w-lg"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(-${current * 100}%)`,
                }}
              >
                {slides.map((slide, i) => (
                  <div
                    key={i}
                    className="relative aspect-[4/5] w-full shrink-0 bg-black"
                  >
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      fill
                      className="object-cover object-center"
                    />

                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent px-5 pb-5 pt-16">
                      <p className="text-[9px] tracking-[0.24em] text-gold/80">
                        CASE {String(i + 1).padStart(2, "0")}
                      </p>

                      <p className="mt-2 text-sm leading-6 tracking-[0.03em] text-white">
                        {slide.comment}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={prev}
                className="rounded-full border border-border/30 px-5 py-2 text-xs tracking-[0.06em] text-foreground/70 transition hover:border-gold/50 hover:text-gold"
              >
                前へ
              </button>

              <p className="text-xs tracking-[0.08em] text-muted-foreground">
                {current + 1} / {slides.length}
              </p>

              <button
                type="button"
                onClick={next}
                className="rounded-full border border-border/30 px-5 py-2 text-xs tracking-[0.06em] text-foreground/70 transition hover:border-gold/50 hover:text-gold"
              >
                次へ
              </button>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="mt-5 text-center text-xs leading-6 text-foreground/55">
            ※変化には個人差があります。
            <br className="sm:hidden" />
            状態に合わせて施術をご提案します。
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-10 rounded-[28px] border border-gold/20 bg-card px-6 py-9 text-center shadow-sm">
            <p className="text-[10px] tracking-[0.28em] text-gold/70">
              PRIVATE RESERVE
            </p>

            <h3 className="mt-4 text-[clamp(1.35rem,5vw,2rem)] leading-[1.55] tracking-[0.03em] text-foreground">
              気になった今が、
              <br />
              始めどきです
            </h3>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-muted-foreground">
              完全予約制のため、枠に限りがあります。
              <br />
              まずは空き状況をご確認ください。
            </p>

            <p className="mt-4 text-xs leading-6 text-foreground/55">
              完全個室｜一日三名限定｜駐車場2台
            </p>

            <div className="mt-7 flex flex-col items-center gap-3">
              <a
                href={COUBIC_URL}
                onClick={handleReserveClick}
                className="inline-flex w-full max-w-xs items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-medium tracking-[0.08em] text-black transition hover:opacity-90"
              >
                空き状況を見る
              </a>

              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full max-w-xs items-center justify-center rounded-full border border-foreground/20 px-6 py-3 text-sm tracking-[0.08em] text-foreground transition hover:border-gold/50 hover:text-gold"
              >
                LINEで相談する
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
