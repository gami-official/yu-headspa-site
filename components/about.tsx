"use client"

import { FadeIn } from "@/components/fade-in"

const COUBIC_URL = "https://coubic.com/yuheadspa/services"
const LINE_URL = "https://lin.ee/7hso3k1"
const FRANCHISE_URL = "https://www.gamigami.net/headspa-franchise"

export function About() {
  return (
    <section id="about" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-6 text-center lg:px-10">
        <FadeIn>
          <p className="text-[11px] tracking-[0.38em] text-gold/70">ABOUT</p>

          <h2 className="mt-4 text-[clamp(1.22rem,3.9vw,1.8rem)] leading-[1.9] tracking-[0.04em] text-foreground">
            ヘッドスパ専門店ゆう本店
            <br />
            について
          </h2>
        </FadeIn>

        <FadeIn delay={0.08}>
          <div className="mx-auto mt-8 max-w-[15.5em] text-[14px] leading-[2.05] text-muted-foreground sm:max-w-2xl sm:text-[15px]">
            <p>
              福岡市西区にある、
              <br className="sm:hidden" />
              完全個室・完全予約制の
              <br className="sm:hidden" />
              ヘッドスパ専門店です。
            </p>

            <p className="mt-5">
              一日3名限定で、
              <br className="sm:hidden" />
              お一人おひとりに合わせた
              <br className="sm:hidden" />
              丁寧な施術をご提供しています。
            </p>

            <p className="mt-5">
              育毛ヘッドスパ、
              <br className="sm:hidden" />
              ヘアカラーヘッドスパ、
              <br className="sm:hidden" />
              リラクゼーションまで、
            </p>

            <p className="mt-5">
              ただ気持ちいいだけではなく、
              <br className="sm:hidden" />
              将来の髪と頭皮を見据えたケアを
              <br className="sm:hidden" />
              大切にしています。
            </p>

            <p className="mt-6 text-xs leading-7 text-foreground/45 sm:text-sm">
              ※ギフトチケットの内容・ご利用方法は販売ページにてご確認ください
              <br />
              ※ご不明点はLINEよりお気軽にお問い合わせください
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="mt-12 rounded-2xl border border-gold/20 bg-card px-6 py-10">
            <p className="text-[10px] tracking-[0.35em] text-gold/70">
              RESERVE
            </p>

            <h3 className="mt-4 text-[clamp(1.18rem,3.8vw,1.65rem)] leading-[1.9] tracking-[0.04em] text-foreground">
              お悩みに合うメニューを
              <br />
              ご案内します
            </h3>

            <div className="mx-auto mt-6 max-w-[15em] text-sm leading-[2.05] text-muted-foreground sm:max-w-xl">
              <p>
                どのメニューが合うか迷う場合も、
                <br className="sm:hidden" />
                ご予約前にご相談いただけます。
              </p>
            </div>

            <p className="mt-4 text-xs leading-6 text-foreground/50">
              ※1日3名限定のため、
              <br className="sm:hidden" />
              ご予約はお早めにお願いいたします
            </p>

            <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <a
                href={COUBIC_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-w-[220px] items-center justify-center rounded-full bg-gold px-6 py-3 text-sm tracking-[0.1em] text-black transition hover:opacity-90"
              >
                ご予約はこちら
              </a>

              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-w-[220px] items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm tracking-[0.1em] text-foreground transition hover:border-gold hover:text-gold"
              >
                LINEで相談する
              </a>
            </div>

            <div className="mt-6">
              <a
                href={FRANCHISE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-foreground/40 underline transition hover:text-gold"
              >
                この技術を学びたい方はこちら
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
