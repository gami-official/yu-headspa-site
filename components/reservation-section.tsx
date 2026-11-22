
"use client"

import { FadeIn } from "@/components/fade-in"

const RESERVE_URL =
  "https://headspayu.stores.jp/reserve/yuheadspa/services#pageContent"

const GIFT_URL =
  "https://gamistore.base.shop/items/144607972"

export function ReservationSection() {
  const trackClick = (
    eventName: "reserve_click" | "gift_click",
    location: string
  ) => {
    if (typeof window === "undefined") return

    const trackingWindow = window as Window & {
      dataLayer?: Record<string, unknown>[]
    }

    trackingWindow.dataLayer =
      trackingWindow.dataLayer || []

    trackingWindow.dataLayer.push({
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
      className="scroll-mt-24 bg-background px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24"
    >
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <div className="text-center">
            <p className="text-xs tracking-[0.3em] text-gold/70">
              PRIVATE RESERVATION
            </p>

            <h2 className="mt-5 text-[clamp(1.7rem,5vw,2.7rem)] leading-[1.6] text-foreground">
              美しさのための、
              <br />
              特別なひととき。
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-8 text-muted-foreground">
              完全個室・完全予約制。
              <br />
              一日わずか三名様だけをお迎えする、
              <br className="hidden sm:block" />
              プライベートヘッドスパサロン。
            </p>

            <div className="mx-auto mt-8 h-px w-16 bg-gold/50" />
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-10 overflow-hidden rounded-[28px] border border-gold/30 bg-[#111111] px-4 py-10 text-center text-white shadow-xl sm:px-8 sm:py-14">
            <p className="text-xs tracking-[0.3em] text-[#d6b36a]">
              EXCLUSIVE EXPERIENCE
            </p>

            <h3 className="mt-6 text-[clamp(1.4rem,4vw,2rem)] leading-[1.7]">
              髪と頭皮に、
              <br />
              妥協しない選択を。
            </h3>

            <p className="mx-auto mt-6 max-w-xl text-sm leading-9 text-white/75">
              カラーヘッドスパ
              <br />
              育毛ヘッドスパ
              <br />
              リラクゼーションヘッドスパ
            </p>

            <div className="mx-auto mt-8 h-px w-12 bg-[#d6b36a]/50" />

            <h4 className="mt-8 text-lg text-[#d6b36a]">
              ご予約・空き状況
            </h4>

            <p className="mt-4 text-sm leading-8 text-white/75">
              公式予約システムの最新情報をご確認いただけます。
            </p>

            <div className="mt-8 overflow-hidden rounded-[24px] border border-gold/20 bg-white shadow-xl sm:rounded-[28px]">
  <iframe
    src={RESERVE_URL}
    title="ヘッドスパ専門店 ゆう 本店 予約カレンダー"
    loading="lazy"
    referrerPolicy="strict-origin-when-cross-origin"
    className="block h-[780px] w-full border-0 sm:h-[850px] lg:h-[900px]"
  />
</div>

            <p className="mt-6 text-xs leading-6 text-white/60">
              カレンダーが表示されない場合は、
              <br />
              下のボタンから公式予約ページをご利用ください。
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
              className="mx-auto mt-6 inline-flex min-h-14 w-full max-w-sm items-center justify-center rounded-full bg-[#d6b36a] px-6 py-4 text-sm font-medium tracking-[0.08em] text-black transition hover:opacity-90"
            >
              公式予約カレンダーを開く ↗
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-12 rounded-[28px] border border-gold/20 bg-card px-6 py-10 text-center sm:px-10">
            <p className="text-xs tracking-[0.3em] text-gold/70">
              PREMIUM GIFT
            </p>

            <h3 className="mt-5 text-[clamp(1.4rem,4vw,2rem)] leading-[1.7] text-foreground">
              大切な方へ、
              <br />
              贅沢な時間を贈る。
            </h3>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-8 text-muted-foreground">
              誕生日、記念日、感謝を伝えたい日に。
              <br />
              心に残るヘッドスパ体験を、
              <br />
              大切な方への贈り物に。
            </p>

            <a
              href={GIFT_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackClick("gift_click", "reservation")
              }
              className="mx-auto mt-8 inline-flex min-h-12 w-full max-w-sm items-center justify-center rounded-full border border-gold/60 px-6 py-3 text-sm font-medium tracking-[0.06em] text-gold transition hover:bg-gold/10"
            >
              ギフトの詳細・購入はこちら ↗
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
