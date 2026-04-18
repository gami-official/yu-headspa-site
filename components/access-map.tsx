"use client"

import { FadeIn } from "@/components/fade-in"

const COUBIC_URL = "https://coubic.com/yuheadspa/services"
const MAP_EMBED_URL =
  "https://www.google.com/maps?q=福岡県福岡市西区豊浜2丁目20-20-2&output=embed"
const MAP_LINK_URL =
  "https://www.google.com/maps/search/?api=1&query=福岡県福岡市西区豊浜2丁目20-20-2"

export function AccessMap() {
  return (
    <section id="access" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-5 lg:px-10">
        <FadeIn>
          <div className="mb-12 flex flex-col items-center text-center">
            <span className="text-[11px] tracking-[0.4em] text-gold/70">
              ACCESS
            </span>

            <h2 className="mt-3 text-[clamp(1.9rem,5.6vw,3rem)] leading-[1.7] tracking-[0.08em] text-foreground">
              ゆっくり通える、
              <br className="sm:hidden" />
              上質な空間へ
            </h2>

            <div className="mt-5 max-w-[20em] text-sm leading-8 text-muted-foreground sm:max-w-2xl sm:text-[15px]">
              <p>
                駐車場完備・完全個室で、
                <br className="sm:hidden" />
                周囲を気にせず
                <br className="sm:hidden" />
                お過ごしいただけます。
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mb-10 rounded-2xl border border-gold/20 bg-card px-6 py-7 text-center">
            <p className="text-sm tracking-[0.12em] text-foreground">
              ヘッドスパ専門店 ゆう
            </p>

            <p className="mt-4 text-sm leading-8 text-muted-foreground">
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
              className="h-[320px] w-full md:h-[420px]"
              allowFullScreen
              title="ヘッドスパ専門店 ゆう へのアクセスマップ"
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.25}>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <a
              href={MAP_LINK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-gold/40 px-6 py-3 text-sm tracking-[0.08em] text-foreground transition hover:bg-gold/10"
            >
              Googleマップで経路を見る
            </a>

            <a
              href={COUBIC_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-medium tracking-[0.08em] text-black transition hover:opacity-90"
            >
              空き状況を確認する
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border/40 bg-border/40 text-center">
            <div className="bg-card px-4 py-5">
              <p className="text-[10px] tracking-[0.2em] text-gold/70">
                OPEN
              </p>
              <p className="mt-2 text-sm text-foreground">
                9:30 - 16:30
              </p>
            </div>

            <div className="bg-card px-4 py-5">
              <p className="text-[10px] tracking-[0.2em] text-gold/70">
                CLOSED
              </p>
              <p className="mt-2 text-sm text-foreground">
                日曜日
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.35}>
          <div className="mt-4 rounded-2xl border border-border/40 bg-card/50 px-5 py-5 text-center">
            <p className="text-sm leading-8 text-muted-foreground">
              お車でもご来店いただけます。
              <br className="sm:hidden" />
              店舗前に
              <span className="mx-1 font-medium text-foreground">駐車場2台分</span>
              をご用意しております。
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
