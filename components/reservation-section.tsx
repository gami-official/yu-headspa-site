
"use client"

import { useEffect, useRef, useState } from "react"
import { FadeIn } from "@/components/fade-in"

const RESERVE_URL =
  "https://headspayu.stores.jp/reserve/yuheadspa/services#pageContent"

export function ReservationSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    if (!("IntersectionObserver" in window)) {
      setShouldLoad(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShouldLoad(true)
          observer.disconnect()
        }
      },
      {
        rootMargin: "300px 0px",
        threshold: 0,
      }
    )

    observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="reserve-calendar"
      className="scroll-mt-24 bg-background px-4 py-14 sm:px-6 sm:py-20 lg:px-10 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <div className="mb-8 text-center sm:mb-10">
            <p className="text-[10px] tracking-[0.28em] text-gold/70 sm:text-xs">
              RESERVATION
            </p>

            <h2 className="mt-4 text-[clamp(1.6rem,5vw,2.5rem)] leading-[1.5] tracking-[0.03em] text-foreground">
              ご予約・空き状況
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-[13px] leading-8 text-muted-foreground sm:text-sm">
              あなただけの、特別な90分を。
              <br />
              ご希望のメニューと日時をお選びください。
            </p>

            <div className="mx-auto mt-7 h-px w-16 bg-gold/50" />
          </div>
        </FadeIn>

        <FadeIn>
          <div className="overflow-hidden rounded-[24px] border border-gold/20 bg-white shadow-xl sm:rounded-[28px]">
            {shouldLoad ? (
              <iframe
                src={RESERVE_URL}
                title="ヘッドスパ専門店 ゆう 本店 予約カレンダー"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                className="block h-[780px] w-full border-0 sm:h-[850px] lg:h-[900px]"
              />
            ) : (
              <div className="flex h-[420px] flex-col items-center justify-center px-5 text-center sm:h-[560px]">
                <p className="text-[10px] tracking-[0.2em] text-[#a88b54]">
                  RESERVATION
                </p>

                <p className="mt-5 text-base leading-8 text-[#3b3026]">
                  予約カレンダーを読み込んでいます
                </p>

                <p className="mt-2 text-xs leading-6 text-[#74685d]">
                  少々お待ちください。
                </p>
              </div>
            )}
          </div>
        </FadeIn>

        <div className="mt-7 text-center">
          <p className="text-xs leading-7 text-muted-foreground">
            カレンダーが表示されない場合や、
            <br className="sm:hidden" />
            予約操作ができない場合はこちら。
          </p>

          <a
            href={RESERVE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex min-h-12 items-center justify-center rounded-full border border-gold/50 px-8 py-3 text-[13px] font-medium tracking-[0.06em] text-gold transition hover:border-gold hover:bg-gold/10 sm:text-sm"
          >
            予約カレンダーを直接開く ↗
          </a>
        </div>
      </div>
    </section>
  )
}
