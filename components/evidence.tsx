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
    <section id="evidence" className="bg-secondary py-20 lg:py-32">
      <div className="mx-auto max-w-2xl px-5 lg:px-10">
        <FadeIn>
          <div className="mb-10 text-center">
            <p className="text-[11px] tracking-[0.4em] text-gold/70">
              RESULTS
            </p>

            <h2 className="mt-3 text-[clamp(1.3rem,4vw,1.9rem)] leading-[1.75] tracking-[0.03em] text-foreground">
              抜け毛・薄毛・分け目に
              <br />
              お悩みの方へ
            </h2>

            <div className="mx-auto mt-5 max-w-[15.5em] text-[14px] leading-[2.05] text-muted-foreground sm:max-w-xl sm:text-[15px]">
              <p>
                頭皮環境を整えることで、
                <br className="sm:hidden" />
                髪の印象は変わります。
              </p>
              <p className="mt-4">
                変化を実感される方が多い
                <br className="sm:hidden" />
                人気メニューです。
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <p className="mb-5 text-center text-xs leading-6 text-foreground/65">
            分け目・ボリューム・抜け毛で悩まれていた
            <br className="sm:hidden" />
            お客様の変化です
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

        <FadeIn delay={0.15}>
          <p className="mt-5 text-center text-xs leading-6 text-foreground/60">
            初回は頭皮状態を確認しながら、
            <br className="sm:hidden" />
            最適な施術をご提案します
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-10 rounded-2xl border border-gold/20 bg-card px-6 py-9 text-center">
            <p className="text-[10px] tracking-[0.35em] text-gold/70">
              RESERVE
            </p>

            <h3 className="mt-3 text-[clamp(1.22rem,3.8vw,1.8rem)] leading-[1.78] tracking-[0.03em] text-foreground">
              気になり始めた今こそ
              <br />
              ケアの始めどきです
            </h3>

            <div className="mx-auto mt-5 max-w-[15.5em] text-sm leading-[2.05] text-muted-foreground sm:max-w-xl">
              <p>
                抜け毛・薄毛・分け目が
                <br className="sm:hidden" />
                気になり始めた今が、
              </p>
              <p className="mt-4">
                将来の髪のために
                <br className="sm:hidden" />
                ケアを始めるタイミングです。
              </p>
            </div>

            <p className="mt-3 text-xs leading-6 text-foreground/55">
              ※1日3名限定のため、
              <br className="sm:hidden" />
              早めのご予約をおすすめしています
            </p>

            <div className="mt-6 flex flex-col items-center gap-3">
              <a
                href={COUBIC_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full max-w-xs items-center justify-center rounded-full border border-gold bg-gold px-6 py-3 text-sm font-medium tracking-[0.08em] text-black transition hover:opacity-90"
              >
                初回のご予約はこちら
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
