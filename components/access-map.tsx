"use client"

import { FadeIn } from "@/components/fade-in"

const COUBIC_URL = "https://coubic.com/yuheadspa/services"

export function AccessMap() {
  return (
    <section id="access" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-5 lg:px-10">
        <FadeIn>
          <div className="mb-12 flex flex-col items-center text-center">
            <span className="text-[11px] tracking-[0.4em] text-gold/70">
              ACCESS
            </span>

            <h2 className="mt-3 text-lg tracking-[0.12em] text-foreground sm:text-xl">
              アクセス
            </h2>

            <p className="mt-3 text-xs text-muted-foreground">
              駐車場完備・完全個室でゆっくりお過ごしいただけます
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mb-10 text-center">
            <p className="text-sm tracking-[0.1em] text-foreground">
              ヘッドスパ専門店 ゆう
            </p>

            <p className="mt-2 text-xs leading-6 text-muted-foreground">
              福岡県福岡市西区豊浜2丁目20-20-2
            </p>

            <p className="mt-2 text-xs text-muted-foreground">
              TEL: 092-284-9392
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="overflow-hidden rounded-2xl border border-border/40">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18..."
              width="100%"
              style={{ border: 0 }}
              loading="lazy"
              className="h-[320px] w-full md:h-[420px]"
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="mt-8 grid grid-cols-2 gap-px border border-border/40 bg-border/40 text-center">
            <div className="bg-card px-4 py-5">
              <p className="text-[10px] tracking-[0.2em] text-gold/70">
                OPEN
              </p>
              <p className="mt-1 text-xs text-foreground">
                9:30 - 16:30
              </p>
            </div>

            <div className="bg-card px-4 py-5">
              <p className="text-[10px] tracking-[0.2em] text-gold/70">
                CLOSED
              </p>
              <p className="mt-1 text-xs text-foreground">
                日曜日
              </p>
            </div>
          </div>
        </FadeIn>

        {/* 🔥 最後の一押し */}
        <FadeIn delay={0.4}>
          <div className="mt-10 text-center">
            <a
              href={COUBIC_URL}
              target="_blank"
              className="inline-flex rounded-full bg-gold px-6 py-3 text-sm text-black"
            >
              残り枠わずか｜ご予約はこちら
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
