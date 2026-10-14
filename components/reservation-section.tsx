
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
      className="scroll-mt-20 bg-background px-4 pb-10 pt-10 sm:px-6 sm:py-14 lg:px-10 lg:py-16"
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <div className="mb-6 text-center sm:mb-8">
            <p className="text-[10px] tracking-[0.28em] text-gold/70">
              RESERVATION
            </p>

            <h2 className="mt-4 text-[clamp(1.5rem,5vw,2.2rem)] leading-[1.5] tracking-[0.03em] text-foreground">
              ご予約・空き状況
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-[13px] leading-7 text-muted-foreground sm:text-sm">
              ご希望の日時をお選びください。
            </p>
          </div>
        </FadeIn>

        <div className="overflow-hidden rounded-[24px] border border-gold/20 bg-white shadow-sm sm:rounded-[28px]">
          {shouldLoad ? (
            <iframe
              src={RESERVE_URL}
              title="ヘッドスパ専門店 ゆう 本店 予約カレンダー"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              className="block h-[760px] w-full border-0 sm:h-[820px] lg:h-[850px]"
            />
          ) : (
            <div className="flex h-[420px] flex-col items-center justify-center px-5 text-center sm:h-[560px]">
              <p className="text-[10px] tracking-[0.2em] text-[#a88b54]">
                RESERVATION
              </p>

              <p className="mt-5 text-base leading-8 text-[#3b3026]">
                予約カレンダーを準備しています
              </p>

              <p className="mt-2 text-xs leading-6 text-[#74685d]">
                少々お待ちください。
              </p>
            </div>
          )}
        </div>

        <div className="mt-5 text-center sm:mt-6">
          <p className="text-xs leading-7 text-muted-foreground">
            カレンダーが表示されない場合は、
            <br className="sm:hidden" />
            予約ページからご確認ください。
          </p>

          <a
            href={RESERVE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex min-h-12 items-center justify-center rounded-full border border-gold/50 px-7 py-3 text-[13px] font-medium tracking-[0.06em] text-gold transition hover:border-gold hover:bg-gold/10 sm:text-sm"
          >
            予約ページを開く →
          </a>
        </div>
      </div>
    </section>
  )
}
