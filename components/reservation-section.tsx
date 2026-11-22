
"use client"

import { useEffect, useRef, useState } from "react"
import { FadeIn } from "@/components/fade-in"

const RESERVE_URL =
  "https://headspayu.stores.jp/reserve/yuheadspa/services#pageContent"

const GIFT_STORE_URL =
  "https://gamistore.base.shop/items/144607972"

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
  }
}

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

  const trackReserve = (location: string) => {
    window.dataLayer = window.dataLayer || []

    window.dataLayer.push({
      event: "reserve_click",
      reserve_location: location,
    })
  }

  const trackGift = () => {
    window.dataLayer = window.dataLayer || []

    window.dataLayer.push({
      event: "gift_click",
      click_location: "reservation_gift",
    })
  }

  return (
    <section
      ref={sectionRef}
      id="reserve-calendar"
      className="scroll-mt-24 bg-background px-4 py-14 sm:px-6 sm:py-20 lg:px-10 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">

        {/* ギフト案内 */}
        <FadeIn>
          <div className="mb-14 overflow-hidden rounded-[26px] border border-[#d6b36a]/35 bg-[#111111] px-6 py-12 text-center text-white sm:mb-20 sm:px-10 sm:py-16">

            <p className="text-[10px] tracking-[0.28em] text-[#d6b36a]">
              PREMIUM HEAD SPA GIFT
            </p>

            <h2 className="mt-6 text-[clamp(1.5rem,5vw,2.5rem)] font-medium leading-[1.7] tracking-[0.04em]">
              大切な方へ、
              <br />
              贅沢なひとときを。
            </h2>

            <div className="mx-auto mt-6 h-px w-14 bg-[#d6b36a]/60" />

            <p className="mx-auto mt-7 max-w-lg text-[13px] leading-8 text-white/80 sm:text-sm">
              誕生日、結婚記念日、
              <br className="sm:hidden" />
              大切な節目のお祝いに。
              <br />
              モノではなく、
              <br className="sm:hidden" />
              心に残る体験を贈る。
            </p>

            <p className="mx-auto mt-6 max-w-lg text-xs leading-7 text-[#d6b36a]">
              完全個室・完全予約制
              <br className="sm:hidden" />
              <span className="hidden sm:inline"> ／ </span>
              1日3名限定
            </p>

            <a
              href={GIFT_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackGift}
              className="mx-auto mt-9 inline-flex min-h-14 w-full max-w-sm items-center justify-center rounded-full bg-[#d6b36a] px-6 py-4 text-sm font-medium tracking-[0.06em] text-black transition hover:bg-[#e5c784] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d6b36a]"
            >
              ギフトカードの詳細・購入はこちら ↗
            </a>

            <p className="mt-4 text-[11px] leading-6 text-white/50">
              ギフト販売ページが別タブで開きます
            </p>
          </div>
        </FadeIn>

        {/* 予約セクション */}
        <FadeIn>
          <div className="mb-8 text-center sm:mb-10">

            <p className="text-[10px] tracking-[0.28em] text-gold/70 sm:text-xs">
              PRIVATE RESERVATION
            </p>

            <h2 className="mt-4 text-[clamp(1.6rem,5vw,2.5rem)] leading-[1.5] tracking-[0.03em] text-foreground">
              ご予約・空き状況
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-[13px] leading-8 text-muted-foreground sm:text-sm">
              1日3名限定。
              <br />
              完全個室で過ごす、
              <br className="sm:hidden" />
              あなただけの特別な時間。
              <br />
              ご希望のメニューと日時をお選びください。
            </p>

            <div className="mx-auto mt-7 h-px w-16 bg-gold/50" />

            <a
              href={RESERVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackReserve("reservation_primary")
              }
              className="mt-7 inline-flex min-h-12 w-full max-w-sm items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-medium tracking-[0.06em] text-black transition hover:opacity-90"
            >
              空き状況を確認して予約する ↗
            </a>

            <p className="mt-3 text-xs leading-6 text-muted-foreground">
              予約ページが別タブで開きます
            </p>
          </div>
        </FadeIn>

        {/* 既存の予約カレンダー */}
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

        {/* カレンダーが表示されない場合 */}
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
            onClick={() =>
              trackReserve("reservation_fallback")
            }
            className="mt-4 inline-flex min-h-12 w-full max-w-sm items-center justify-center rounded-full border border-gold/50 px-6 py-3 text-[13px] font-medium tracking-[0.06em] text-gold transition hover:border-gold hover:bg-gold/10 sm:text-sm"
          >
            予約カレンダーを直接開く ↗
          </a>
        </div>
      </div>
    </section>
  )
}
