"use client"

import { FadeIn } from "@/components/fade-in"

const COUBIC_URL = "https://coubic.com/yuheadspa/services"
const GIFT_STORE_URL = "https://gamistore.base.shop/"

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
                PRIVATE HAIR & SCALP BEAUTY
              </p>
            </FadeIn>

            <FadeIn delay={0.05}>
              <p className="mt-4 text-[10px] tracking-[0.2em] text-white/60 sm:text-[11px] sm:tracking-[0.35em]">
                完全個室｜完全予約制｜一日三名限定
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="mx-auto mt-7 max-w-[13em] text-[clamp(1.45rem,5.5vw,2.8rem)] font-medium leading-[1.7] tracking-[0.06em] text-white sm:max-w-none sm:text-[clamp(2rem,4.8vw,3.6rem)] sm:leading-[1.65] sm:tracking-[0.1em]">
                <span className="sm:hidden">
                  年齢を重ねた髪に、
                  <br />
                  品格という艶を。
                  <br />
                  完全個室ヘッドスパ
                </span>

                <span className="hidden sm:inline">
                  年齢を重ねた髪に、
                  <br />
                  品格という艶を。
                  <br />
                  完全個室ヘッドスパ
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="mx-auto mt-7 max-w-[21em] text-[13.5px] leading-[2.05] text-white/82 sm:max-w-2xl sm:text-base sm:leading-9">
                <p>
                  分け目・白髪・艶不足・印象変化へ。
                  <br />
                  頭皮から整え、
                  <br className="sm:hidden" />
                  品のある髪質と印象へ導きます。
                </p>

                <p className="mt-4">
                  育毛・エイジングカラー・頭皮美容まで。
                  <br />
                  一日三名限定で、
                  <br className="sm:hidden" />
                  本質的なケアをご提供しています。
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
                  ご予約枠を確認する
                </a>

                <a
                  href={GIFT_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full rounded-full border border-[#d6b36a] px-6 py-3.5 text-sm tracking-[0.08em] text-[#d6b36a] transition hover:bg-[#d6b36a] hover:text-black"
                >
                  ギフトカードを購入する
                </a>

                <a
                  href="#category"
                  className="w-full rounded-full border border-white/30 bg-white/5 px-6 py-3.5 text-sm tracking-[0.08em] text-white transition hover:border-[#d6b36a] hover:text-[#d6b36a]"
                >
                  お悩み別に選ぶ
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.25}>
              <p className="mt-6 text-[11px] text-white/40">
                大切な方への贈り物としてもご利用いただけます
              </p>
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
                年齢による髪と頭皮の変化に
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-8 text-muted-foreground">
                分け目・白髪・艶不足・ボリューム低下など。
                <br />
                現在の状態を見極め、
                <br className="sm:hidden" />
                印象まで整えるケアをご提案いたします。
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
                  分け目・薄毛・
                  <br />
                  ボリューム低下
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  頭皮環境から整え、
                  <br />
                  品のある印象へ導きます。
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="h-full rounded-2xl border border-gold/20 bg-card px-6 py-7 text-center shadow-sm">
                <p className="text-[10px] tracking-[0.26em] text-gold/70">
                  COLOR CARE
                </p>
                <h3 className="mt-4 text-base font-medium leading-7 tracking-[0.08em] text-foreground">
                  白髪・艶不足・
                  <br />
                  エイジング毛
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  頭皮に配慮しながら、
                  <br />
                  艶と品のある髪色へ。
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="h-full rounded-2xl border border-gold/20 bg-card px-6 py-7 text-center shadow-sm">
                <p className="text-[10px] tracking-[0.26em] text-gold/70">
                  PRIVATE CARE
                </p>
                <h3 className="mt-4 text-base font-medium leading-7 tracking-[0.08em] text-foreground">
                  完全個室で
                  <br />
                  静かに整える
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  一日三名限定。
                  <br />
                  流れ作業ではない上質なケア。
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  )
}
