"use client"

import { FadeIn } from "@/components/fade-in"

const COUBIC_URL = "https://coubic.com/yuheadspa/services"

export function Hero() {
  return (
    <>
      <section className="relative isolate min-h-screen overflow-hidden bg-black text-white">
        <div className="absolute inset-0 overflow-hidden">
          <video
            src="/videos/hero.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover scale-[1.08] sm:scale-[1.12] lg:scale-[1.15]"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-5 pb-16 pt-32 text-center sm:px-6 sm:pb-20 sm:pt-36 lg:px-10">
          <div className="w-full max-w-3xl">

            <FadeIn>
              <p className="text-[11px] tracking-[0.45em] text-[#d6b36a] sm:text-xs">
                PRIVATE HEAD SPA SALON
              </p>
            </FadeIn>

            <FadeIn delay={0.05}>
              <p className="mt-4 text-[10px] tracking-[0.35em] text-white/60 sm:text-[11px]">
                完全個室｜完全予約制｜一日三名限定
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="mt-6 text-[clamp(2.2rem,7vw,4rem)] font-medium leading-[1.5] tracking-[0.12em] text-white">
                頭皮から整え、
                <br />
                髪質と印象を再設計する
                <br />
                ヘッドスパ専門店
              </h1>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="mx-auto mt-6 max-w-[24em] text-sm leading-8 text-white/80 sm:max-w-2xl sm:text-base sm:leading-9">
                <p>
                  抜け毛・薄毛・白髪・頭皮トラブルに対し、
                  根本から整える専門ケアをご提供。
                </p>
                <p className="mt-3">
                  育毛・カラー・リラクゼーションを融合し、
                  お一人おひとりに最適な施術をご提案いたします。
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="mx-auto mt-10 flex w-full max-w-md flex-col gap-3">
                <a
                  href={COUBIC_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full rounded-full bg-[#d6b36a] px-6 py-4 text-base font-medium tracking-[0.08em] text-black transition hover:opacity-90"
                >
                  空き状況を見る
                </a>

                <a
                  href="#menu"
                  className="w-full rounded-full border border-white/30 bg-white/5 px-6 py-3.5 text-sm tracking-[0.08em] text-white transition hover:border-[#d6b36a] hover:text-[#d6b36a]"
                >
                  メニューを見る
                </a>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      <section
        id="hero-issues"
        className="bg-background px-5 py-16 sm:px-6 lg:px-10"
      >
        <div className="mx-auto max-w-6xl">

          <FadeIn>
            <div className="text-center">
              <p className="text-[11px] tracking-[0.35em] text-gold/70 sm:text-xs">
                FOR YOUR CONCERNS
              </p>
              <h2 className="mt-3 text-xl leading-[1.7] tracking-[0.12em] text-foreground sm:text-2xl">
                このようなお悩みをお持ちではありませんか
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">
                頭皮環境・毛髪状態・疲労の蓄積など、
                <br className="sm:hidden" />
                現在の状態を見極めた上で、
                <br className="sm:hidden" />
                最適なケアをご提案いたします。
              </p>
            </div>
          </FadeIn>

          <div className="mt-12 grid gap-5 md:grid-cols-3 lg:gap-8">

            <FadeIn delay={0.05}>
              <div className="h-full rounded-2xl border border-gold/20 bg-card px-6 py-7 text-center shadow-sm">
                <p className="text-[10px] tracking-[0.26em] text-gold/70">
                  SCALP CARE
                </p>
                <h3 className="mt-4 text-base font-medium leading-7 tracking-[0.08em] text-foreground">
                  抜け毛・薄毛・分け目の変化
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  ボリュームやハリコシの低下など、
                  頭皮環境から整えたい方へ。
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="h-full rounded-2xl border border-gold/20 bg-card px-6 py-7 text-center shadow-sm">
                <p className="text-[10px] tracking-[0.26em] text-gold/70">
                  COLOR CARE
                </p>
                <h3 className="mt-4 text-base font-medium leading-7 tracking-[0.08em] text-foreground">
                  白髪ケアと頭皮環境の両立
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  頭皮負担に配慮しながら、
                  美しい髪色を維持したい方へ。
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="h-full rounded-2xl border border-gold/20 bg-card px-6 py-7 text-center shadow-sm">
                <p className="text-[10px] tracking-[0.26em] text-gold/70">
                  RELAXATION
                </p>
                <h3 className="mt-4 text-base font-medium leading-7 tracking-[0.08em] text-foreground">
                  頭の重さ・慢性的な疲労
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  眼精疲労や睡眠の質低下など、
                  深い休息を求める方へ。
                </p>
              </div>
            </FadeIn>

          </div>

          <FadeIn delay={0.2}>
            <div className="mt-10 text-center">
              <a
                href="#menu"
                className="inline-flex items-center justify-center rounded-full border border-gold/30 px-6 py-3 text-sm tracking-[0.08em] text-foreground transition hover:border-gold hover:text-gold"
              >
                お悩みに合うメニューを見る
              </a>
            </div>
          </FadeIn>

        </div>
      </section>
    </>
  )
}
