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
        <FadeIn>
          <div className="mb-10 text-center">
            <p className="text-[11px] tracking-[0.4em] text-gold/70">
              RESULTS
            </p>

            <h2 className="mt-3 text-xl tracking-[0.14em] text-foreground sm:text-2xl leading-relaxed">
              抜け毛・薄毛に悩む方へ
            </h2>

            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              頭皮環境を整えることで、髪は変わります。
              あなたも変化を実感される方の一人かもしれません。
            </p>
          </div>
        </FadeIn>

        {/* 🔥 共感追加 */}
        <FadeIn delay={0.08}>
          <p className="mb-4 text-center text-xs leading-6 text-foreground/65">
            分け目・ボリューム・抜け毛で悩まれていたお客様の変化です
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="relative">
            <div
              className="relative mx-auto w-full max-w-md overflow-hidden rounded-2xl border border-border/30 bg-zinc-900"
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
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

        {/* 🔥 追加（超重要） */}
        <FadeIn delay={0.15}>
          <p className="mt-5 text-center text-xs text-foreground/60">
            初回は頭皮状態を確認しながら最適な施術をご提案します
          </p>
        </FadeIn>

        {/* CTA */}
        <FadeIn delay={0.2}>
          <div className="mt-10 rounded-2xl border border-gold/20 bg-card px-6 py-8 text-center">
            <p className="text-sm leading-7 text-muted-foreground">
              抜け毛・薄毛・分け目が気になり始めた今が、
              最も変化しやすいタイミングです。
            </p>

            <p className="mt-3 text-xs text-foreground/55">
              ※1日3名限定のため、早めのご予約をおすすめしています
            </p>

            <div className="mt-6 flex flex-col items-center gap-3">
              <a
                href={COUBIC_URL}
                target="_blank"
                className="inline-flex w-full max-w-xs items-center justify-center rounded-full border border-gold bg-gold px-6 py-3 text-sm text-black"
              >
                初回のご予約はこちら
              </a>

              <a
                href={LINE_URL}
                target="_blank"
                className="text-sm text-foreground/70 hover:text-gold"
              >
                LINEで相談する
              </a>
            </div>

            <div className="mt-8">
              <a
                href={FRANCHISE_URL}
                target="_blank"
                className="text-[11px] text-foreground/40 underline"
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
