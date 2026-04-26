"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { FadeIn } from "@/components/fade-in"

const COUBIC_URL = "https://coubic.com/yuheadspa/services"
const LINE_URL = "https://lin.ee/7hso3k1"
const FRANCHISE_URL = "https://www.gamigami.net/headspa-franchise"

const excluded = [3, 8, 21]

const comments = [
  "分け目の印象に変化を感じられたお客様",
  "トップのボリューム感を整えたい方へ",
  "頭皮環境を整え、髪の立ち上がりをサポート",
  "継続ケアで髪の印象が変わる方も",
  "抜け毛・薄毛が気になり始めた方へ",
  "髪のハリ・コシ不足が気になる方へ",
  "年齢による髪の変化に向き合うケア",
  "頭皮から整え、印象を若々しく",
  "分け目・つむじ周りのお悩みに",
  "髪の土台から見直したい方へ",
  "頭皮の状態に合わせた専門ケア",
  "将来の髪を見据えたメンテナンス",
  "自然なボリューム感を目指すケア",
  "頭皮環境を整えることから始めます",
  "髪の印象を根本から再設計",
  "薄毛・抜け毛のお悩みに寄り添います",
  "完全個室で人目を気にせず相談可能",
  "一人ひとりの状態に合わせた施術",
  "髪の変化を感じ始めた方へ",
  "早めのケアが未来の髪を守ります",
  "頭皮と髪を同時に整える専門施術",
  "美しい髪を育むための土台づくり",
  "大人女性の髪悩みに寄り添うケア",
]

const slides = Array.from({ length: 26 }, (_, i) => i + 1)
  .filter((n) => !excluded.includes(n))
  .map((n, i) => ({
    src: `/images/evidence-${String(n).padStart(2, "0")}.png`,
    alt: `Before & After ${i + 1}`,
    comment: comments[i] ?? "頭皮環境を整え、髪の印象を引き出すケア",
  }))

export function Evidence() {
  const [current, setCurrent] = useState(0)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  const prev = () => setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1))

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

  return (
    <section id="evidence" className="bg-secondary py-20 lg:py-32">
      <div className="mx-auto max-w-2xl px-5 lg:px-10">
        <FadeIn>
          <div className="mb-10 text-center">
            <p className="text-[11px] tracking-[0.4em] text-gold/70">
              RESULTS
            </p>

            <h2 className="mt-3 text-[clamp(1.6rem,4.8vw,2.4rem)] leading-[1.7] tracking-[0.08em] text-foreground">
              頭皮から整えることで、
              <br />
              髪の印象は変わります
            </h2>

            <div className="mx-auto mt-5 max-w-[18em] text-sm leading-[2.05] text-muted-foreground sm:max-w-xl sm:text-[15px]">
              <p>
                抜け毛・薄毛・分け目・ボリューム不足に。
                <br className="hidden sm:block" />
                一人ひとりの頭皮状態に合わせて、
                <br className="sm:hidden" />
                髪の土台から整える専門ケアです。
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <p className="mb-5 text-center text-xs leading-6 text-foreground/65">
            実際に施術を受けられたお客様の変化
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="relative">
            <div
              className="relative mx-auto w-full max-w-md overflow-hidden rounded-2xl border border-gold/20 bg-zinc-950 shadow-[0_18px_45px_rgba(0,0,0,0.28)]"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${current * 100}%)` }}
              >
                {slides.map((slide, i) => (
                  <div key={i} className="relative aspect-[3/4] w-full shrink-0">
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      fill
                      className="object-contain"
                    />

                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent px-5 pb-5 pt-14">
                      <p className="text-[10px] tracking-[0.28em] text-gold/80">
                        CASE {String(i + 1).padStart(2, "0")}
                      </p>
                      <p className="mt-2 text-sm leading-7 tracking-[0.04em] text-white">
                        {slide.comment}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={prev}
                className="rounded-full border border-border/30 px-4 py-2 text-xs tracking-[0.08em] text-foreground/70 transition hover:border-gold/50 hover:text-gold"
              >
                前へ
              </button>

              <p className="text-xs tracking-[0.12em] text-muted-foreground">
                {current + 1} / {slides.length}
              </p>

              <button
                type="button"
                onClick={next}
                className="rounded-full border border-border/30 px-4 py-2 text-xs tracking-[0.08em] text-foreground/70 transition hover:border-gold/50 hover:text-gold"
              >
                次へ
              </button>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="mt-5 text-center text-xs leading-6 text-foreground/60">
            ※変化には個人差があります。
            <br className="sm:hidden" />
            初回は頭皮状態を確認しながら、
            最適な施術をご提案します。
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-10 rounded-2xl border border-gold/20 bg-card px-6 py-9 text-center">
            <p className="text-[10px] tracking-[0.35em] text-gold/70">
              RESERVE
            </p>

            <h3 className="mt-3 text-[clamp(1.3rem,4vw,2rem)] leading-[1.75] tracking-[0.06em] text-foreground">
              気になり始めた今こそ
              <br />
              ケアの始めどきです
            </h3>

            <div className="mx-auto mt-5 max-w-[17em] text-sm leading-[2.05] text-muted-foreground sm:max-w-xl">
              <p>
                抜け毛・薄毛・分け目が気になり始めたら、
                <br className="hidden sm:block" />
                将来の髪のために頭皮環境から整えましょう。
              </p>
            </div>

            <p className="mt-3 text-xs leading-6 text-foreground/55">
              完全予約制・一日三名限定
            </p>

            <div className="mt-6 flex flex-col items-center gap-3">
              <a
                href={COUBIC_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full max-w-xs items-center justify-center rounded-full border border-gold bg-gold px-6 py-3 text-sm font-medium tracking-[0.08em] text-black transition hover:opacity-90"
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

            <div className="mt-8">
              <a
                href={FRANCHISE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-foreground/40 underline transition hover:text-gold"
              >
                この技術を学びたい方はこちら
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
