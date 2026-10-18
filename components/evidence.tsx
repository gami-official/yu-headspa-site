
"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { FadeIn } from "@/components/fade-in"

const RESERVE_URL =
  "https://headspayu.stores.jp/reserve/yuheadspa/services#pageContent"

const LINE_URL = "https://lin.ee/7hso3k1"

const slides = Array.from({ length: 18 }, (_, index) => ({
  src: `/images/evidence-${String(index + 1).padStart(2, "0")}.webp`,
  alt: `頭皮ケアの施術事例 ${index + 1}`,
}))

export function Evidence() {
  const [current, setCurrent] = useState(0)
  const touchStartX = useRef<number | null>(null)

  const prev = () => {
    setCurrent((index) =>
      index === 0 ? slides.length - 1 : index - 1
    )
  }

  const next = () => {
    setCurrent((index) =>
      index === slides.length - 1 ? 0 : index + 1
    )
  }

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrent((index) =>
        index === slides.length - 1 ? 0 : index + 1
      )
    }, 5000)

    return () => window.clearInterval(interval)
  }, [])

  const handleReserveClick = () => {
    const trackingWindow = window as Window & {
      dataLayer?: Record<string, unknown>[]
    }

    trackingWindow.dataLayer = trackingWindow.dataLayer || []

    trackingWindow.dataLayer.push({
      event: "reserve_click",
      reserve_location: "evidence",
    })
  }

  return (
    <section id="evidence" className="bg-secondary py-16 lg:py-24">
      <div className="mx-auto max-w-5xl px-5 lg:px-10">
        <FadeIn>
          <div className="mb-10 text-center">
            <p className="text-[10px] tracking-[0.3em] text-gold/80">
              SCALP CARE RESULTS
            </p>

            <h2 className="mt-4 text-[clamp(1.5rem,5.6vw,2.4rem)] leading-relaxed text-foreground">
              頭皮ケアの施術実績
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-8 text-muted-foreground">
              実際のお客様の写真をご紹介します。
              <br />
              一人ひとりの頭皮や髪の状態に合わせて
              ケアをご提案します。
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mx-auto max-w-[560px]">
            <div
              className="overflow-hidden rounded-2xl border border-gold/25 bg-black shadow-[0_20px_55px_rgba(0,0,0,0.3)]"
              onTouchStart={(event) => {
                touchStartX.current =
                  event.touches[0].clientX
              }}
              onTouchEnd={(event) => {
                if (touchStartX.current === null) return

                const difference =
                  touchStartX.current -
                  event.changedTouches[0].clientX

                if (difference > 50) next()
                if (difference < -50) prev()

                touchStartX.current = null
              }}
            >
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(-${current * 100}%)`,
                }}
              >
                {slides.map((slide, index) => (
                  <div
                    key={slide.src}
                    className="relative aspect-[4/5] w-full shrink-0 bg-black sm:aspect-[5/4]"
                  >
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      fill
                      sizes="(max-width: 640px) 90vw, 560px"
                      className="object-contain"
                      priority={index === 0}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 flex items-center justify-center gap-6">
              <button
                type="button"
                onClick={prev}
                aria-label="前の実績写真"
                className="rounded-full border border-gold/30 px-5 py-2 text-sm text-foreground transition hover:border-gold hover:text-gold"
              >
                前へ
              </button>

              <span
                className="min-w-16 text-center text-xs tracking-widest text-muted-foreground"
                aria-live="polite"
              >
                {current + 1} / {slides.length}
              </span>

              <button
                type="button"
                onClick={next}
                aria-label="次の実績写真"
                className="rounded-full border border-gold/30 px-5 py-2 text-sm text-foreground transition hover:border-gold hover:text-gold"
              >
                次へ
              </button>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="mx-auto mt-8 max-w-xl text-center text-xs leading-7 text-muted-foreground">
            ※掲載写真は個別の事例です。
            結果には個人差があり、
            同様の変化を保証するものではありません。
            <br />
            ※施術内容・期間などは事例によって異なります。
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mx-auto mt-12 max-w-2xl rounded-[28px] border border-gold/20 bg-card px-6 py-9 text-center">
            <p className="text-[10px] tracking-[0.28em] text-gold/80">
              RESERVATION
            </p>

            <h3 className="mt-4 text-[clamp(1.3rem,5vw,1.9rem)] leading-relaxed text-foreground">
              頭皮や髪のお悩みを、ご相談ください
            </h3>

            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              完全個室・完全予約制で、
              一人ひとりに合わせたケアをご提案します。
            </p>

            <div className="mx-auto mt-7 flex max-w-xs flex-col gap-3">
              <a
                href={RESERVE_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleReserveClick}
                className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-medium tracking-wider text-black transition hover:opacity-90"
              >
                空き状況・予約を見る ↗
              </a>

              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-gold/30 px-6 py-3 text-sm tracking-wider text-foreground transition hover:border-gold hover:text-gold"
              >
                LINEで相談 ↗
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
