
"use client"

import { FadeIn } from "@/components/fade-in"

const RESERVE_URL =
  "https://headspayu.stores.jp/reserve/yuheadspa/services#pageContent"

export function ReservationSection() {
  return (
    <section
      id="reserve-calendar"
      className="scroll-mt-20 bg-background px-4 py-14 sm:px-6 sm:py-20 lg:px-10 lg:py-24"
    >
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <div className="mb-9 text-center sm:mb-12">
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
          <div className="relative overflow-hidden rounded-[26px] border border-[#d6b36a]/30 bg-[#211a15] px-6 py-12 text-center text-white shadow-xl sm:rounded-[32px] sm:px-12 sm:py-16 lg:py-20">
            <div className="pointer-events-none absolute -left-20 -top-24 h-64 w-64 rounded-full bg-[#d6b36a]/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -right-20 h-64 w-64 rounded-full bg-[#d6b36a]/10 blur-3xl" />

            <div className="relative">
              <p className="text-[10px] tracking-[0.3em] text-[#d6b36a] sm:text-xs">
                PRIVATE HEAD SPA
              </p>

              <h3 className="mt-6 font-serif text-2xl font-medium leading-[1.7] tracking-[0.08em] text-white sm:text-3xl">
                心ほどける、上質なひととき。
              </h3>

              <p className="mx-auto mt-5 max-w-lg text-[13px] leading-8 text-white/70 sm:text-sm">
                完全予約制のプライベート空間で、
                <br className="hidden sm:block" />
                あなただけの時間をお過ごしください。
              </p>

              <div className="mx-auto mt-8 flex max-w-md flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11px] tracking-[0.08em] text-[#e2c78e] sm:text-xs">
                <span>完全予約制</span>
                <span className="text-white/25">◆</span>
                <span>1日3名限定</span>
                <span className="text-white/25">◆</span>
                <span>90分コース</span>
              </div>

              <a
                href={RESERVE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mx-auto mt-10 flex min-h-14 w-full max-w-sm items-center justify-center rounded-full bg-[#d6b36a] px-7 py-4 text-sm font-semibold tracking-[0.1em] text-[#211a15] shadow-lg transition duration-300 hover:bg-[#e7c984] hover:shadow-xl sm:text-base"
              >
                空き状況を確認・予約する
                <span aria-hidden="true" className="ml-3">
                  ↗
                </span>
              </a>

              <p className="mt-5 text-xs leading-7 text-white/55">
                外部予約サイト（STORES予約）が開きます。
                <br />
                24時間いつでも空き状況をご確認いただけます。
              </p>
            </div>
          </div>
        </FadeIn>

        <div className="mt-7 text-center">
          <p className="text-xs leading-7 text-muted-foreground">
            ご予約はオンラインから受け付けております。
            <br />
            メニュー・日時を選択してお進みください。
          </p>
        </div>
      </div>
    </section>
  )
}
