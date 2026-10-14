
"use client"

import Link from "next/link"
import { CalendarDays, Check, ArrowUpRight } from "lucide-react"

const RESERVE_URL =
  "https://headspayu.stores.jp/reserve/yuheadspa/services#pageContent"

const features = [
  "完全予約制のプライベートサロン",
  "1日3名限定の丁寧な施術",
  "メニュー・料金を確認して予約可能",
]

export function ReservationSection() {
  const trackReserve = () => {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      event: "reserve_click",
      reserve_location: "reservation_section",
    })
  }

  return (
    <section
      id="reserve-calendar"
      className="scroll-mt-20 overflow-hidden bg-background px-4 py-14 sm:px-6 sm:py-20 lg:px-10"
    >
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="text-xs tracking-[0.25em] text-gold">
            RESERVATION
          </p>

          <h2 className="mt-4 text-2xl font-medium leading-relaxed text-foreground sm:text-3xl">
            ご予約・空き状況
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-muted-foreground sm:text-base">
            ヘッドスパ専門店ゆうは、
            完全予約制のプライベートサロンです。
            ご希望のメニューを選び、
            予約ページから空き状況をご確認ください。
          </p>
        </div>

        <div className="mx-auto mt-9 max-w-2xl rounded-2xl border border-gold/25 bg-card p-5 sm:p-9">
          <div className="flex items-center justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-gold/10 text-gold">
              <CalendarDays size={27} />
            </div>
          </div>

          <h3 className="mt-5 text-center text-lg font-medium text-foreground sm:text-xl">
            福岡本店 WEB予約
          </h3>

          <div className="mt-7 space-y-4">
            {features.map((feature) => (
              <div
                key={feature}
                className="flex items-start gap-3"
              >
                <Check
                  size={18}
                  className="mt-1 shrink-0 text-gold"
                />
                <p className="min-w-0 break-words text-sm leading-7 text-muted-foreground">
                  {feature}
                </p>
              </div>
            ))}
          </div>

          <a
            href={RESERVE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackReserve}
            className="mt-8 flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-gold px-5 py-4 text-center text-sm font-semibold text-black transition hover:opacity-90 sm:text-base"
          >
            空き状況を確認・予約する
            <ArrowUpRight size={18} />
          </a>

          <p className="mt-4 text-center text-xs leading-6 text-muted-foreground">
            外部予約サイトが新しいタブで開きます。
          </p>

          <div className="mt-6 border-t border-border/50 pt-6 text-center">
            <p className="text-sm leading-7 text-muted-foreground">
              どのコースにするか迷われている方へ
            </p>

            <Link
              href="/#menu"
              className="mt-3 inline-flex min-h-11 items-center justify-center text-sm font-medium text-gold underline underline-offset-4"
            >
              メニュー・料金を比較する →
            </Link>
          </div>
        </div>

        <p className="mx-auto mt-7 max-w-xl text-center text-xs leading-7 text-muted-foreground">
          ※ 大阪店のご予約は、店舗オープン時にご案内します。
        </p>
      </div>
    </section>
  )
}

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
  }
}
