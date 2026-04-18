"use client"

import Image from "next/image"
import { FadeIn } from "@/components/fade-in"

const COUBIC_URL = "https://coubic.com/yuheadspa/services"
const LINE_URL = "https://lin.ee/7hso3k1"
const FRANCHISE_URL = "https://www.gamigami.net/headspa-franchise"

export function About() {
  return (
    <section id="about" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <FadeIn>
          <div className="mb-5 flex justify-center">
            <div className="relative h-24 w-24 overflow-hidden rounded-full border border-gold/30 lg:h-32 lg:w-32">
              <Image
                src="/images/about-portrait.png"
                alt="ヘッドスパ専門店ゆう"
                fill
                className="object-contain"
                sizes="128px"
              />
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="mb-12 flex flex-col items-center text-center">
            <p className="mb-3 text-[11px] tracking-[0.45em] text-gold/70">
              ABOUT
            </p>

            <h2 className="text-[clamp(1.45rem,4.4vw,2.1rem)] leading-[1.72] tracking-[0.03em] text-foreground">
              ヘッドスパ専門店
              <br />
              ゆう本店について
            </h2>

            <div className="mt-5 mx-auto max-w-[15.5em] text-[14px] leading-[2.05] text-muted-foreground sm:max-w-xl sm:text-[15px]">
              <p>
                福岡市西区にある、
                <br className="sm:hidden" />
                完全個室・完全予約制の
                <br className="sm:hidden" />
                ヘッドスパ専門店です。
              </p>
              <p className="mt-4">
                抜け毛・薄毛・分け目のお悩みから、
                <br className="sm:hidden" />
                頭皮を守りながら染める
                <br className="sm:hidden" />
                ヘアカラー、
              </p>
              <p className="mt-4">
                深い癒しへ導く
                <br className="sm:hidden" />
                リラクゼーションまで、
                <br className="sm:hidden" />
                お一人おひとりの状態に合わせて
                <br className="sm:hidden" />
                丁寧にご提案いたします。
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
            <div>
              <div className="relative mx-auto aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border/30">
                <Image
                  src="/images/about-interior.png"
                  alt="当店の施術ルーム"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="mx-auto mt-6 w-full overflow-hidden rounded-2xl border border-border/30">
                <video
                  src="/videos/about.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full object-cover"
                />
              </div>
            </div>

            <div className="text-center lg:text-left">
              <div className="mx-auto max-w-[15.5em] sm:max-w-none">
                <p className="text-[14px] leading-[2.05] tracking-[0.02em] text-foreground/75 sm:text-[15px]">
                  一日3名限定で、
                  <br className="sm:hidden" />
                  お一人おひとりに合わせた
                  <br className="sm:hidden" />
                  丁寧な施術をご提供しています。
                </p>

                <p className="mt-5 text-[14px] leading-[2.05] tracking-[0.02em] text-foreground/75 sm:text-[15px]">
                  育毛ヘッドスパ、
                  <br className="sm:hidden" />
                  ヘアカラーヘッドスパ、
                  <br className="sm:hidden" />
                  リラクゼーションまで、
                  <br className="sm:hidden" />
                  ただ気持ちいいだけではない、
                  <br className="sm:hidden" />
                  将来の髪と頭皮を見据えたケアを
                  <br className="sm:hidden" />
                  大切にしています。
                </p>

                <p className="mt-5 text-[14px] leading-[2.05] text-muted-foreground sm:text-[15px]">
                  安価な施術ではなく、
                  <br className="sm:hidden" />
                  将来の髪と頭皮まで考えた
                  <br className="sm:hidden" />
                  本質的なケアを受けたい方に
                  <br className="sm:hidden" />
                  選ばれています。
                </p>
              </div>

              <div className="mt-6 rounded-2xl border border-gold/20 bg-card px-5 py-5">
                <p className="text-[10px] tracking-[0.3em] text-gold/70">
                  SPECIAL VALUE
                </p>

                <p className="mt-3 text-sm leading-[2] text-foreground/80">
                  完全個室 × 1日3名限定 × 本格頭皮ケア。
                  <br className="sm:hidden" />
                  福岡市でも希少な、
                  <br className="sm:hidden" />
                  育毛・ヘアカラー・癒しを
                  <br className="sm:hidden" />
                  一つの場所で受けられる
                  <br className="sm:hidden" />
                  ヘッドスパ専門店です。
                </p>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-gold/20 bg-card px-5 py-5 text-center">
                  <p className="text-[10px] tracking-[0.25em] text-gold/70">
                    SCALP CARE
                  </p>
                  <h3 className="mt-2 text-sm leading-6 tracking-[0.08em] text-foreground">
                    育毛
                    <br className="sm:hidden" />
                    ヘッドスパ
                  </h3>
                  <p className="mt-2 text-xs leading-6 text-muted-foreground">
                    抜け毛・薄毛・分け目など、
                    <br className="sm:hidden" />
                    頭皮環境から整えたい方へ。
                  </p>
                </div>

                <div className="rounded-2xl border border-gold/20 bg-card px-5 py-5 text-center">
                  <p className="text-[10px] tracking-[0.25em] text-gold/70">
                    HAIR COLOR
                  </p>
                  <h3 className="mt-2 text-sm leading-6 tracking-[0.08em] text-foreground">
                    ヘアカラー
                    <br className="sm:hidden" />
                    ヘッドスパ
                  </h3>
                  <p className="mt-2 text-xs leading-6 text-muted-foreground">
                    頭皮を守りながら染めたい方へ。
                    <br className="sm:hidden" />
                    将来の髪まで考えた上質ケア。
                  </p>
                </div>

                <div className="rounded-2xl border border-gold/20 bg-card px-5 py-5 text-center">
                  <p className="text-[10px] tracking-[0.25em] text-gold/70">
                    RELAXATION
                  </p>
                  <h3 className="mt-2 text-sm leading-6 tracking-[0.08em] text-foreground">
                    リラクゼーション
                  </h3>
                  <p className="mt-2 text-xs leading-6 text-muted-foreground">
                    疲れを癒しながら整えたい方へ。
                    <br className="sm:hidden" />
                    深いリラックスのための時間。
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-[11px] tracking-[0.12em] text-foreground/60 lg:justify-start">
                <span className="rounded-full border border-border/30 px-4 py-2">
                  完全個室
                </span>
                <span className="rounded-full border border-border/30 px-4 py-2">
                  1日3名限定
                </span>
                <span className="rounded-full border border-border/30 px-4 py-2">
                  駐車場あり
                </span>
                <span className="rounded-full border border-border/30 px-4 py-2">
                  完全予約制
                </span>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div
            id="reservation"
            className="mt-14 rounded-2xl border border-gold/20 bg-card px-6 py-9 text-center lg:px-10"
          >
            <p className="text-[10px] tracking-[0.35em] text-gold/70">
              RESERVE
            </p>

            <h3 className="mt-3 text-[clamp(1.2rem,3.8vw,1.7rem)] leading-[1.85] tracking-[0.02em] text-foreground">
              お悩みに合うメニューを
              <br />
              ご案内します
            </h3>

            <div className="mx-auto mt-5 max-w-[15em] text-sm leading-[2.05] text-muted-foreground sm:max-w-xl">
              <p>
                どのメニューが合うか迷う場合も、
                <br className="sm:hidden" />
                ご予約前にご相談いただけます。
              </p>
            </div>

            <p className="mt-3 text-xs leading-6 text-foreground/50">
              ※1日3名限定のため、
              <br className="sm:hidden" />
              ご予約はお早めにお願いいたします
            </p>

            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={COUBIC_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-w-[220px] items-center justify-center rounded-full border border-gold bg-gold px-6 py-3 text-sm tracking-[0.12em] text-background transition hover:opacity-90"
              >
                ご予約はこちら
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
