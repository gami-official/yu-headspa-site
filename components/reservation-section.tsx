"use client"

import { FadeIn } from "@/components/fade-in"

const RESERVE_URL =
  "https://headspayu.stores.jp/reserve/yuheadspa/services#pageContent"

export function ReservationSection() {
  return (
    <section id="reserve-calendar" className="bg-background px-5 py-16 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <div className="mb-8 text-center">
            <p className="text-[10px] tracking-[0.28em] text-gold/70">
              RESERVATION
            </p>

            <h2 className="mt-4 text-[clamp(1.55rem,6vw,2.5rem)] leading-[1.55] tracking-[0.03em] text-foreground">
              空き状況を
              <br />
              リアルタイムで確認
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-muted-foreground">
              下記カレンダーから空き枠を確認して、
              <br />
              そのままご予約いただけます。
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="overflow-hidden rounded-[28px] border border-gold/20 bg-white shadow-sm">
            <iframe
              src={RESERVE_URL}
              title="ヘッドスパ専門店ゆう 予約カレンダー"
              className="h-[820px] w-full border-0"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
