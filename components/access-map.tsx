"use client"

import { FadeIn } from "@/components/fade-in"

const RESERVE_URL =
  "https://headspayu.stores.jp/reserve/yuheadspa/services#pageContent"
const LINE_URL = "https://lin.ee/7hso3k1"
const MAP_EMBED_URL =
  "https://www.google.com/maps?q=福岡県福岡市西区豊浜2丁目20-20-2&output=embed"
const MAP_LINK_URL =
  "https://www.google.com/maps/search/?api=1&query=福岡県福岡市西区豊浜2丁目20-20-2"

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
  }
}

export function AccessMap() {
  const trackReserve = () => {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      event: "reserve_click",
      reserve_location: "access",
    })
  }

  return (
    <section id="access" className="scroll-mt-24 bg-background py-14 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-4xl px-5 lg:px-10">
        <FadeIn>
          <div className="mb-9 text-center sm:mb-10">
            <p className="text-[10px] tracking-[0.28em] text-gold/70">ACCESS</p>
            <h2 className="mt-4 text-[clamp(1.55rem,6vw,2.5rem)] leading-[1.55] tracking-[0.03em] text-foreground">
              福岡市西区豊浜。
              <br />
              駐車場完備。
            </h2>
            <p className="mt-5 text-sm leading-8 text-muted-foreground">
              初めての方も、マップで経路をご確認いただけます。
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <div className="mb-8 grid grid-cols-3 gap-2 sm:gap-3">
            {["駐車場2台", "完全個室", "1日3名限定"].map((item) => (
              <div key={item} className="flex min-h-16 items-center justify-center rounded-2xl border border-gold/20 bg-card px-2 py-3 text-center shadow-sm sm:px-3 sm:py-4">
                <p className="text-xs leading-5 tracking-[0.03em] text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mb-8 rounded-2xl border border-gold/20 bg-card px-5 py-6 text-center shadow-sm sm:px-6">
            <p className="text-[10px] tracking-[0.24em] text-gold/70">SALON</p>
            <h3 className="mt-4 text-base tracking-[0.04em] text-foreground">
              ヘッドスパ専門店 ゆう 本店
            </h3>
            <p className="mt-4 text-sm leading-8 text-muted-foreground">
              〒819-0014
              <br />
              福岡県福岡市西区豊浜2丁目20-20-2
            </p>
            <a href="tel:0922849392" className="mt-2 inline-block min-h-11 py-2 text-sm text-foreground underline underline-offset-4 transition hover:text-gold">
              TEL：092-284-9392
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="overflow-hidden rounded-2xl border border-border/40 shadow-sm">
            <iframe
              src={MAP_EMBED_URL}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block h-[300px] w-full border-0 sm:h-[380px] md:h-[420px]"
              allowFullScreen
              title="ヘッドスパ専門店 ゆう 本店へのアクセスマップ"
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.25}>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            <a href={MAP_LINK_URL} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-full border border-gold/40 px-6 py-3 text-sm tracking-[0.06em] text-foreground transition hover:bg-gold/10">
              Googleマップで経路を見る ↗
            </a>
            <a href={RESERVE_URL} target="_blank" rel="noopener noreferrer" onClick={trackReserve} className="inline-flex min-h-12 items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-medium tracking-[0.08em] text-black transition hover:opacity-90">
              空き状況・予約はこちら ↗
            </a>
            <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-full border border-foreground/20 px-6 py-3 text-sm tracking-[0.06em] text-foreground transition hover:border-gold/50 hover:text-gold">
              LINEで相談 ↗
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border/40 bg-border/40 text-center">
            <div className="bg-card px-3 py-5 sm:px-4">
              <p className="text-[10px] tracking-[0.18em] text-gold/70">OPEN</p>
              <p className="mt-2 text-sm text-foreground">9:30〜16:30</p>
            </div>
            <div className="bg-card px-3 py-5 sm:px-4">
              <p className="text-[10px] tracking-[0.18em] text-gold/70">CLOSED</p>
              <p className="mt-2 text-sm leading-6 text-foreground">日曜日</p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.35}>
          <div className="mt-4 rounded-2xl border border-border/40 bg-card/50 px-5 py-5 text-center">
            <p className="text-sm leading-8 text-muted-foreground">
              店舗前に駐車場を2台分ご用意しています。
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
