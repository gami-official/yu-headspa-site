
"use client"

import { FadeIn } from "@/components/fade-in"

const RESERVE_URL =
  "https://headspayu.stores.jp/reserve/yuheadspa/services#pageContent"

const GIFT_URL =
  "https://gamistore.base.shop/items/144607972"

export function ReservationSection() {
  const trackClick = (
    eventName: string,
    location: string
  ) => {
    window.dataLayer = window.dataLayer || []

    window.dataLayer.push({
      event: eventName,
      click_location: location,
      ...(eventName === "reserve_click"
        ? { reserve_location: location }
        : {}),
    })
  }

  return (
    <section
      id="reserve-calendar"
      className="scroll-mt-24 bg-background px-4 py-14 sm:px-6 sm:py-20 lg:px-10 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <div className="mb-10 text-center">
            <p className="text-xs tracking-[0.28em] text-gold/70">
              RESERVATION
            </p>

            <h2 className="mt-4 text-[clamp(1.6rem,5vw,2.5rem)] leading-[1.5] text-foreground">
              ご予約・空き状況
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-8 text-muted-foreground">
              完全個室・1日3名限定。
              <br />
              ご希望のメニューと日時をお選びください。
            </p>

            <a
              href={RESERVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackClick(
                  "reserve_click",
                  "reservation_primary"
                )
              }
              className="mt-7 inline-flex min-h-12 w-full max-w-sm items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-medium text-black transition hover:opacity-90"
            >
              空き状況を確認して予約する ↗
            </a>

            <p className="mt-3 text-xs text-muted-foreground">
              予約ページが別タブで開きます
            </p>
          </div>
        </FadeIn>

        {/* 予約カレンダー */}
        <div className="overflow-hidden rounded-[24px] border border-gold/20 bg-white shadow-xl">
          <iframe
            src={RESERVE_URL}
            title="ヘッドスパ専門店ゆう 本店 予約カレンダー"
            loading="eager"
            referrerPolicy="strict-origin-when-cross-origin"
            className="block h-[800px] w-full border-0 sm:h-[900px]"
          />
        </div>

        <div className="mt-7 text-center">
          <p className="text-xs leading-7 text-muted-foreground">
            カレンダーが表示されない場合は、
            <br />
            下のボタンから直接ご予約ください。
          </p>

          <a
            href={RESERVE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackClick(
                "reserve_click",
                "reservation_fallback"
              )
            }
            className="mt-4 inline-flex min-h-12 w-full max-w-sm items-center justify-center rounded-full border border-gold/50 px-6 py-3 text-sm text-gold transition hover:bg-gold/10"
          >
            予約ページを直接開く ↗
          </a>
        </div>

        {/* ギフト */}
        <FadeIn>
          <div className="mt-14 rounded-[28px] border border-[#d6b36a]/30 bg-[#111111] px-6 py-10 text-center text-white">
            <p className="text-xs tracking-[0.25em] text-[#d6b36a]">
              PREMIUM GIFT
            </p>

            <h3 className="mt-4 text-2xl leading-relaxed">
              大切な方へ、贅沢な時間を。
            </h3>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-8 text-white/75">
              誕生日や記念日、感謝を伝えたい日に。
              <br />
              特別なヘッドスパ体験を贈りませんか。
            </p>

            <a
              href={GIFT_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackClick("gift_click", "reservation")
              }
              className="mt-7 inline-flex min-h-12 w-full max-w-sm items-center justify-center rounded-full bg-[#d6b36a] px-6 py-3 text-sm font-medium text-black transition hover:opacity-90"
            >
              ギフトカードの詳細・購入はこちら ↗
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
