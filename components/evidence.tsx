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
  "分け目の印象変化が気になり始めたお客様",
  "トップのボリューム感を整えたい方へ",
  "頭皮環境を整え、立ち上がりをサポート",
  "継続ケアで印象変化を感じられたケース",
  "抜け毛・薄毛が気になり始めた方へ",
  "ハリ・コシ不足が気になる方へ",
  "年齢による髪質変化へ向き合うケア",
  "頭皮から整え、若々しい印象へ",
  "分け目・つむじ周りのお悩みに",
  "髪の土台から整えたい方へ",
  "頭皮状態に合わせた専門ケア",
  "将来の髪を見据えた頭皮美容",
  "自然なボリューム感を目指すケア",
  "印象年齢を整える頭皮ケア",
  "髪質と印象を再設計する専門施術",
  "薄毛・抜け毛のお悩みに寄り添います",
  "完全個室で相談できる安心空間",
  "お一人おひとりに合わせた本格ケア",
  "髪の変化を感じ始めた方へ",
  "早めのケアが未来の髪を守ります",
  "頭皮と髪を同時に整える施術",
  "美しい髪を育むための土台づくり",
  "大人女性の髪悩みに寄り添うケア",
]

const slides = Array.from({ length: 26 }, (_, i) => i + 1)
  .filter((n) => !excluded.includes(n))
  .map((n, i) => ({
    src: `/images/evidence-${String(n).padStart(2, "0")}.png`,
    alt: `Case ${i + 1}`,
    comment:
      comments[i] ??
      "頭皮環境を整え、髪の印象を引き出す専門ケア",
  }))

const trustItems = [
  ["Google口コミ", "100件突破"],
  ["完全個室", "人目を気にせず相談"],
  ["一日三名限定", "流れ作業ではない施術"],
  ["駐車場", "店舗前2台完備"],
  ["経験", "ヘッドスパ歴15年"],
  ["対応", "初めての方も安心"],
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
    <section id="evidence" className="bg-secondary py-20 lg:py-32">
      <div className="mx-auto max-w-5xl px-5 lg:px-10">
        <FadeIn>
          <div className="mb-12 text-center">
            <p className="text-[11px] tracking-[0.4em] text-gold/70">
              TRUST & RESULTS
            </p>

            <h2 className="mt-4 text-[clamp(1.7rem,4.8vw,2.6rem)] leading-[1.8] tracking-[0.08em] text-foreground">
              Google口コミ100件突破。
              <br />
              選ばれる理由があります
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-[2.1] text-muted-foreground sm:text-[15px]">
              分け目・薄毛・白髪・艶不足・ボリューム低下など。
              <br />
              年齢による髪と頭皮の変化に、
              完全個室で丁寧に向き合います。
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.06}>
          <div className="mb-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {trustItems.map(([label, value]) => (
              <div
                key={label}
                className="rounded-2xl border border-gold/20 bg-card px-5 py-5 text-center shadow-sm"
              >
                <p className="text-[10px] tracking-[0.28em] text-gold/70">
                  {label}
                </p>

                <p className="mt-3 text-sm leading-7 tracking-[0.06em] text-foreground">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <p className="mb-6 text-center text-xs leading-6 text-foreground/60">
            実際に施術を受けられたお客様の一例
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="relative">
            <div
              className="relative mx-auto w-full max-w-lg overflow-hidden rounded-[30px] border border-gold/20 bg-black shadow-[0_24px_60px_rgba(0,0,0,0.38)]"
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
                    className="relative aspect-[3/4] w-full shrink-0"
                  >
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      fill
                      className="object-contain"
                    />

                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/55 to-transparent px-6 pb-6 pt-20">
                      <p className="text-[10px] tracking-[0.3em] text-gold/80">
                        CASE {String(i + 1).padStart(2, "0")}
                      </p>

                      <p className="mt-3 text-sm leading-7 tracking-[0.04em] text-white">
                        {slide.comment}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={prev}
                className="rounded-full border border-border/30 px-5 py-2 text-xs tracking-[0.08em] text-foreground/70 transition hover:border-gold/50 hover:text-gold"
              >
                前へ
              </button>

              <p className="text-xs tracking-[0.12em] text-muted-foreground">
                {current + 1} / {slides.length}
              </p>

              <button
                type="button"
                onClick={next}
                className="rounded-full border border-border/30 px-5 py-2 text-xs tracking-[0.08em] text-foreground/70 transition hover:border-gold/50 hover:text-gold"
              >
                次へ
              </button>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="mt-6 text-center text-xs leading-6 text-foreground/55">
            ※変化には個人差があります。
            <br className="sm:hidden" />
            現在の頭皮状態を確認した上で、
            最適な施術をご提案しております。
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-12 rounded-[32px] border border-gold/20 bg-card px-6 py-11 text-center shadow-sm">
            <p className="text-[10px] tracking-[0.35em] text-gold/70">
              PRIVATE RESERVE
            </p>

            <h3 className="mt-4 text-[clamp(1.45rem,4vw,2.1rem)] leading-[1.8] tracking-[0.08em] text-foreground">
              気になり始めた今こそ、
              <br />
              ケアの始めどきです
            </h3>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-[2.1] text-muted-foreground">
              完全予約制のため、
              ご案内できる枠に限りがあります。
              <br />
              初めての方も、まずは空き状況をご確認ください。
            </p>

            <p className="mt-4 text-xs leading-6 text-foreground/55">
              完全個室｜完全予約制｜一日三名限定｜駐車場2台完備
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
