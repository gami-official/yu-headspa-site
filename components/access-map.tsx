"use client"

import { FadeIn } from "@/components/fade-in"

const COUBIC_URL = "https://coubic.com/yuheadspa/services"
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
  const handleReserveClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    window.dataLayer = window.dataLayer || []

    window.dataLayer.push({
      event: "reserve_click",
      reserve_location: "access",
    })

    setTimeout(() => {
      window.open(COUBIC_URL, "_blank", "noopener,noreferrer")
    }, 300)
  }

  return (
    <section id="access" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-4xl px-5 lg:px-10">
        <FadeIn>
          <div className="mb-10 text-center">
            <p className="text-[10px] tracking-[0.28em] text-gold/70">
              ACCESS
            </p>

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
          <div className="mb-8 grid grid-cols-3 gap-3">
            {["駐車場2台", "完全個室", "一日3名"].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-gold/20 bg-card px-3 py-4 text-center shadow-sm"
              >
                <p className="text-xs leading-5 tracking-[0.03em] text-foreground">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mb-8 rounded-2xl border border-gold/20 bg-card px-6 py-6 text-center shadow-sm">
            <p className="text-[10px] tracking-[0.24em] text-gold/70">
              SALON
            </p>

            <p className="mt-4 text-base tracking-[0.04em] text-foreground">
              ヘッドスパ専門店 ゆう 本店
            </p>

            <p className="mt-4 text-sm leading-8 text-muted-foreground">
              〒819-0014
              <br />
              福岡県福岡市西区豊浜2丁目20-20-2
            </p>

            <p className="mt-2 text-sm text-muted-foreground">
              TEL：092-284-9392
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="overflow-hidden rounded-2xl border border-border/40 shadow-sm">
            <iframe
              src={MAP_EMBED_URL}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[280px] w-full md:h-[420px]"
              allowFullScreen
              title="ヘッドスパ専門店 ゆう へのアクセスマップ"
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.25}>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            <a
              href={MAP_LINK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[50px] items-center justify-center rounded-full border border-gold/40 px-6 py-3 text-sm tracking-[0.06em] text-foreground transition hover:bg-gold/10"
            >
              経路を見る
            </a>

            <a
              href={COUBIC_URL}
              onClick={handleReserveClick}
              className="inline-flex min-h-[50px] items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-medium tracking-[0.08em] text-black transition hover:opacity-90"
            >
              空き状況を見る
            </a>

            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[50px] items-center justify-center rounded-full border border-foreground/20 px-6 py-3 text-sm tracking-[0.06em] text-foreground transition hover:border-gold/50 hover:text-gold"
            >
              LINEで相談
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border/40 bg-border/40 text-center">
            <div className="bg-card px-4 py-5">
              <p className="text-[10px] tracking-[0.18em] text-gold/70">
                OPEN
              </p>
              <p className="mt-2 text-sm text-foreground">
                9:30 - 16:30
              </p>
            </div>

            <div className="bg-card px-4 py-5">
              <p className="text-[10px] tracking-[0.18em] text-gold/70">
                CLOSED
              </p>
              <p className="mt-2 text-sm leading-6 text-foreground">
                日曜日
                <br />
                祝日
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.35}>
          <div className="mt-4 rounded-2xl border border-border/40 bg-card/50 px-5 py-5 text-center">
            <p className="text-sm leading-8 text-muted-foreground">
              お車の方は、店舗前の駐車場をご利用ください。
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
