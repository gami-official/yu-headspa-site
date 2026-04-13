"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { FadeIn } from "@/components/fade-in"

const COUBIC_URL = "https://coubic.com/yuheadspa/services"
const LINE_URL = "https://lin.ee/7hso3k1"
const FRANCHISE_URL = "https://www.gamigami.net/headspa-franchise"

const excluded = [3, 8, 21]
const slides = Array.from({ length: 26 }, (_, i) => i + 1)
  .filter((n) => !excluded.includes(n))
  .map((n, i) => ({
    src: `/images/evidence-${String(n).padStart(2, "0")}.png`,
    alt: `Before & After ${i + 1}`,
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
    <section id="evidence" className="bg-secondary py-24 lg:py-36">
      <div className="mx-auto max-w-2xl px-5 lg:px-10">
        {/* タイトル強化 */}
        <FadeIn>
          <div className="mb-10 text-center">
            <p className="text-[11px] tracking-[0.4em] text-gold/70">
              RESULTS
            </p>
            <h2 className="mt-3 text-xl tracking-[0.15em] text-foreground sm:text-2xl">
              抜け毛・薄毛に悩む方へ
            </h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              頭皮環境を整えることで、髪は変わります。
              実際にご来店いただいたお客様の変化をご覧ください。
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="relative">
            {/* スライダー */}
            <div
              className="relative mx-auto w-full max-w-md overflow-hidden border border-border/30 bg-zinc-900"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${current * 100}%)` }}
              >
                {slides.map((slide, i) => (
                  <div key={i} className="relative w-full shrink-0 aspect-[3/4]">
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      fill
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* ボタン */}
            {slides.length > 1 && (
              <>
                <button
                  onClick={prev}
                  className="absolute left-0 top-1/2 -translate-x-3 -translate-y-1/2 bg-black/70 px-3 py-2 text-white"
                >
                  ‹
                </button>
                <button
                  onClick={next}
                  className="absolute right-0 top-1/2 translate-x-3 -translate-y-1/2 bg-black/70 px-3 py-2 text-white"
                >
                  ›
                </button>
              </>
            )}
          </div>

          {/* ドット */}
          <div className="mt-5 flex justify-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full ${
                  i === current ? "w-6 bg-gold" : "w-1.5 bg-white/30"
                }`}
              />
            ))}
          </div>
        </FadeIn>

        {/* CTA追加（超重要） */}
        <FadeIn delay={0.2}>
          <div className="mt-10 text-center">
            <p className="text-sm text-muted-foreground leading-7">
              「まだ大丈夫」と思っている今が、ケアの始めどきです。
              まずはお気軽にご相談ください。
            </p>

            <div className="mt-6 flex flex-col items-center gap-3">
              <a
                href={COUBIC_URL}
                target="_blank"
                className="w-full max-w-xs bg-gold px-6 py-3 text-center text-sm text-black tracking-[0.15em] hover:opacity-90"
              >
                予約する
              </a>

              <a
                href={LINE_URL}
                target="_blank"
                className="text-sm text-white/70 hover:text-gold"
              >
                LINEで相談する
              </a>
            </div>

            {/* フランチャイズ導線 */}
            <div className="mt-8">
              <a
                href={FRANCHISE_URL}
                target="_blank"
                className="text-[11px] text-white/40 underline hover:text-gold"
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
