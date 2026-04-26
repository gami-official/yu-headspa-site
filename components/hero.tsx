"use client"

import { FadeIn } from "@/components/fade-in"

const COUBIC_URL = "https://coubic.com/yuheadspa/services"

export function Hero() {
  const handleReserveClick = () => {
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({
        event: "reserve_click",
        reserve_location: "hero",
      })
    }
  }

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
          <div className="absolute inset-0 bg-black/62" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/24 via-black/42 to-black/84" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-5 pb-16 pt-28 text-center sm:px-6 sm:pb-20 sm:pt-34 lg:px-10">
          <div className="w-full max-w-3xl">
            <FadeIn>
              <p className="text-[10px] tracking-[0.34em] text-[#d6b36a] sm:text-xs sm:tracking-[0.45em]">
                PRIVATE HEAD SPA SALON
              </p>
            </FadeIn>

            <FadeIn delay={0.05}>
              <p className="mt-4 text-[10px] tracking-[0.2em] text-white/60 sm:text-[11px] sm:tracking-[0.35em]">
                完全個室｜完全予約制｜一日三名限定
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
  <h1 className="mx-auto mt-7 max-w-[12em] text-[clamp(1.4rem,5.5vw,3rem)] font-medium leading-[1.52] tracking-[0.055em] text-white sm:max-w-none sm:text-[clamp(1.8rem,4.5vw,3.2rem)] sm:leading-[1.5] sm:tracking-[0.1em]">
    
    {/* スマホ表示 */}
    <span className="sm:hidden">
      頭皮から整え、
      <br />
      髪質と印象を
      <br />
      再設計するヘッドスパ専門店
    </span>

    {/* PC表示 */}
    <span className="hidden sm:inline">
      頭皮から整え、
      <br />
      髪質と印象を再設計する
      <br />
      ヘッドスパ専門店
    </span>

  </h1>
</FadeIn>

            <FadeIn delay={0.15}>
              <div className="mx-auto mt-7 max-w-[21em] text-[13.5px] leading-[2.05] text-white/82 sm:max-w-2xl sm:text-base sm:leading-9">
                <p>
                  抜け毛・薄毛・白髪・頭皮トラブルに。
                  <br />
                  根本から整える専門ケアをご提供します。
                </p>

                <p className="mt-4">
                  育毛・カラー・リラクゼーションまで。
                  <br />
                  お一人おひとりに合わせて、
                  <br className="sm:hidden" />
                  最適な施術をご提案いたします。
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="mx-auto mt-10 flex w-full max-w-[340px] flex-col gap-3">
                <a
                  href={COUBIC_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleReserveClick}
                  className="w-full rounded-full bg-[#d6b36a] px-6 py-3.5 text-sm font-medium tracking-[0.08em] text-black transition hover:opacity-90"
                >
                  初回の空き状況を見る
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

              <h2 className="mt-3 text-xl leading-[1.7] tracking-[0.1em] text-foreground sm:text-2xl">
                このようなお悩みを
                <br className="sm:hidden" />
                お持ちではありませんか
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-8 text-muted-foreground">
                頭皮環境・毛髪状態・疲労の蓄積など。
                <br />
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
                  抜け毛・薄毛・
                  <br />
                  分け目の変化
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  ボリュームやハリコシの低下など。
                  <br />
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
                  白髪ケアと
                  <br />
                  頭皮環境の両立
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  頭皮負担に配慮しながら。
                  <br />
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
                  頭の重さ・
                  <br />
                  慢性的な疲労
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  眼精疲労や睡眠の質低下など。
                  <br />
                  深い休息を求める方へ。
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  )
}
