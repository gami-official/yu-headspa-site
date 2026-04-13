"use client"

import { FadeIn } from "@/components/fade-in"

const COUBIC_URL = "https://coubic.com/yuheadspa/services"
const LINE_URL = "https://lin.ee/7hso3k1"
const FRANCHISE_URL = "https://www.gamigami.net/headspa-franchise"

export function SiteFooter() {
  return (
    <footer className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-10">
        <FadeIn>
          <div className="rounded-2xl border border-gold/20 bg-card px-6 py-10 text-center lg:px-10">
            <p className="mb-2 text-[10px] tracking-[0.4em] text-foreground/40 sm:text-xs">
              HEAD SPA SALON
            </p>
            <h2 className="text-base tracking-[0.3em] text-gold-light/80 sm:text-lg">
              ヘッドスパ専門店 ゆう
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-muted-foreground">
              福岡市西区の完全個室ヘッドスパ専門店。
              育毛ヘッドスパ、ヘアカラーヘッドスパ、リラクゼーションまで、
              お悩みに合わせた上質な施術をご提供しています。
            </p>

            <div className="mt-8 grid gap-4 text-center sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-xl border border-border/30 px-4 py-4">
                <p className="text-[10px] tracking-[0.25em] text-gold/70">ADDRESS</p>
                <p className="mt-2 text-xs leading-6 text-foreground/70">
                  福岡県福岡市西区豊浜2丁目20-20-2
                </p>
              </div>

              <div className="rounded-xl border border-border/30 px-4 py-4">
                <p className="text-[10px] tracking-[0.25em] text-gold/70">HOURS</p>
                <p className="mt-2 text-xs leading-6 text-foreground/70">
                  営業時間 9:30～16:30
                  <br />
                  （日曜日）
                </p>
              </div>

              <div className="rounded-xl border border-border/30 px-4 py-4">
                <p className="text-[10px] tracking-[0.25em] text-gold/70">STYLE</p>
                <p className="mt-2 text-xs leading-6 text-foreground/70">
                  完全個室
                  <br />
                  1日3名限定
                </p>
              </div>

              <div className="rounded-xl border border-border/30 px-4 py-4">
                <p className="text-[10px] tracking-[0.25em] text-gold/70">PARKING</p>
                <p className="mt-2 text-xs leading-6 text-foreground/70">
                  駐車場あり
                  <br />
                  サロン前2台分
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={COUBIC_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-w-[220px] items-center justify-center rounded-full border border-gold bg-gold px-6 py-3 text-sm tracking-[0.12em] text-background transition hover:opacity-90"
              >
                予約する
              </a>

              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-w-[220px] items-center justify-center rounded-full border border-foreground/20 px-6 py-3 text-sm tracking-[0.12em] text-foreground transition hover:border-gold/50 hover:text-gold"
              >
                LINEで相談する
              </a>
            </div>

            <div className="mt-6">
              <a
                href={FRANCHISE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-foreground/40 underline transition-colors hover:text-gold"
              >
                この技術を学びたい方はこちら
              </a>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <div className="mt-10 border-t border-border/20 pt-8 text-center">
            <p className="text-[9px] tracking-[0.2em] text-foreground/25">
              &copy; {new Date().getFullYear()} HEAD SPA YUU. All rights reserved.
            </p>
          </div>
        </FadeIn>
      </div>
    </footer>
  )
}
