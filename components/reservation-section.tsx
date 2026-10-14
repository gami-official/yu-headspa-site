
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
      }
    )

    observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="reserve-calendar"
      className="scroll-mt-20 bg-background px-5 py-12 sm:px-6 lg:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <div className="mb-6 text-center">
            <p className="text-[10px] tracking-[0.28em] text-gold/70">
              RESERVATION
            </p>

            <h2 className="mt-4 text-[clamp(1.45rem,6vw,2.2rem)] leading-[1.45] tracking-[0.03em] text-foreground">
              空き状況・ご予約
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-muted-foreground">
              ご希望の日時をオンラインでご確認いただけます。
            </p>
          </div>
        </FadeIn>

        <div className="overflow-hidden rounded-[28px] border border-gold/20 bg-white shadow-sm">
          {shouldLoad ? (
            <iframe
              src={RESERVE_URL}
              title="ヘッドスパ専門店 ゆう 本店 予約カレンダー"
              loading="lazy"
              className="h-[820px] w-full border-0"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          ) : (
            <div className="flex h-[500px] flex-col items-center justify-center px-5 text-center sm:h-[620px]">
              <p className="text-xs tracking-[0.2em] text-[#a88b54]">
                RESERVATION
              </p>

              <p className="mt-5 text-lg leading-8 text-[#3b3026]">
                予約カレンダーを準備しています
              </p>

              <p className="mt-3 text-sm leading-7 text-[#74685d]">
                少々お待ちください。
              </p>
            </div>
          )}
        </div>

        <div className="mt-6 text-center">
          <p className="text-xs leading-7 text-muted-foreground">
            カレンダーが表示されない場合は、
            <br className="sm:hidden" />
            外部予約ページをご利用ください。
          </p>

          <a
            href={RESERVE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex min-h-12 items-center justify-center rounded-full bg-gold px-8 py-3 text-sm font-medium tracking-[0.08em] text-background transition hover:opacity-90"
          >
            予約ページを開く →
          </a>
        </div>
      </div>
    </section>
  )
}
