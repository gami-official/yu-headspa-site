"use client"

import { FadeIn } from "@/components/fade-in"

const RESERVE_URL =
  "https://headspayu.stores.jp/reserve/yuheadspa/services#pageContent"

export function ReservationSection() {
  return (
    <section
      id="reserve-calendar"
      className="bg-background px-5 py-12 sm:px-6 lg:px-10"
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

            <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
              リアルタイムで確認できます
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="overflow-hidden rounded-[28px] border border-gold/20 bg-white shadow-sm">
            <iframe
              src={RESERVE_URL}
              title="ヘッドスパ専門店　ゆう　本店 予約カレンダー"
              className="h-[820px] w-full border-0"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
