"use client"

import { FadeIn } from "@/components/fade-in"

const RESERVE_URL =
  "https://headspayu.stores.jp/reserve/yuheadspa/services#pageContent"
const GIFT_STORE_URL = "https://gamistore.base.shop/items/144607972"

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
  }
}

export function Hero() {
  const handleReserveClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    window.dataLayer = window.dataLayer || []

    window.dataLayer.push({
      event: "reserve_click",
      reserve_location: "hero",
    })

    setTimeout(() => {
      window.open(RESERVE_URL, "_blank", "noopener,noreferrer")
    }, 300)
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
          <div className="absolute inset-0 bg-black/68" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/45 to-black/88" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-5 pb-16 pt-28 text-center sm:px-6 sm:pb-20 sm:pt-34 lg:px-10">
          <div className="w-full max-w-3xl">
            <FadeIn>
              <p className="text-[10px] tracking-[0.28em] text-[#d6b36a] sm:text-xs sm:tracking-[0.45em]">
                FUKUOKA PRIVATE HEAD SPA
              </p>
            </FadeIn>

            <FadeIn delay={0.05}>
              <div className="mx-auto mt-5 flex w-fit max-w-full flex-wrap items-center justify-center gap-x-2 gap-y-1 rounded-full border border-[#d6b36a]/35 bg-black/45 px-4 py-2 text-[10px] tracking-[0.04em] text-[#d6b36a] backdrop-blur-md sm:text-[11px]">
                <span>口コミ100件突破</span>
                <span className="text-white/45">｜</span>
                <span>完全個室</span>
                <span className="text-white/45">｜</span>
                <span>一日三名限定</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="mx-auto mt-8 text-[clamp(2.15rem,10vw,3.8rem)] font-medium leading-[1.38] tracking-[0.03em] text-white sm:text-[clamp(2.4rem,5vw,4rem)] sm:leading-[1.45]">
                贅沢を日常に。
              </h1>
            </FadeIn>

            <FadeIn delay={0.13}>
              <p className="mx-auto mt-4 text-[clamp(1rem,4.5vw,1.45rem)] leading-[1.8] tracking-[0.03em] text-white/90">
                頭皮から整える、
                <br className="sm:hidden" />
                完全個室ヘッドスパ
              </p>
            </FadeIn>

            <FadeIn delay={0.16}>
              <div className="mx-auto mt-7 max-w-[22em] text-[13.5px] leading-[2] text-white/78 sm:max-w-2xl sm:text-base sm:leading-9">
                <p>
                  分け目・白髪・艶不足へ。
                  <br />
                  初めての方も安心してご相談ください。
                </p>

                <p className="mt-3">福岡市西区｜駐車場2台完備</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="mx-auto mt-10 flex w-full max-w-[360px] flex-col gap-3">
                <a
                  href={RESERVE_URL}
                  onClick={handleReserveClick}
                  className="w-full rounded-full bg-[#d6b36a] px-6 py-3.5 text-sm font-medium tracking-[0.08em] text-black transition hover:opacity-90"
                >
                  メニューと空き状況を見る
                </a>

                <a
                  href="#menu"
                  className="w-full rounded-full border border-white/30 bg-white/5 px-6 py-3.5 text-sm tracking-[0.08em] text-white transition hover:border-[#d6b36a] hover:text-[#d6b36a]"
                >
                  メニューを見る
                </a>

                <a
                  href={GIFT_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full rounded-full border border-[#d6b36a]/60 px-6 py-3.5 text-sm tracking-[0.08em] text-[#d6b36a] transition hover:bg-[#d6b36a] hover:text-black"
                >
                  ギフトカードを見る
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
              <p className="text-[11px] tracking-[0.28em] text-gold/70 sm:text-xs">
                CHOOSE BY CONCERNS
              </p>

              <h2 className="mt-3 text-xl leading-[1.6] tracking-[0.04em] text-foreground sm:text-2xl">
                お悩みに合わせたケア
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-8 text-muted-foreground">
                髪の印象を変えたい方にも選ばれています。
              </p>
            </div>
          </FadeIn>

          <div className="mt-12 grid gap-5 md:grid-cols-3 lg:gap-8">
            {[
              [
                "SCALP CARE",
                "分け目・薄毛",
                "ボリューム低下",
                "頭皮環境を整え、",
                "ふんわり見える印象へ。",
              ],
              [
                "GRAY HAIR CARE",
                "白髪・艶不足",
                "エイジング毛",
                "頭皮に配慮しながら、",
                "艶と品のある髪色へ。",
              ],
              [
                "PRIVATE CARE",
                "疲れ・睡眠不足",
                "ストレスケア",
                "完全個室で静かに整える、",
                "大人のための癒し時間。",
              ],
            ].map(([label, title1, title2, text1, text2], index) => (
              <FadeIn key={label} delay={0.05 + index * 0.05}>
                <div className="h-full rounded-2xl border border-gold/20 bg-card px-6 py-7 text-center shadow-sm">
                  <p className="text-[10px] tracking-[0.22em] text-gold/70">
                    {label}
                  </p>

                  <h3 className="mt-4 text-base font-medium leading-7 tracking-[0.04em] text-foreground">
                    {title1}
                    <br />
                    {title2}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {text1}
                    <br />
                    {text2}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.2}>
            <div className="mx-auto mt-12 max-w-2xl rounded-[28px] border border-gold/20 bg-card px-6 py-8 text-center shadow-sm">
              <p className="text-[10px] tracking-[0.26em] text-gold/70">
                FIRST VISIT
              </p>

              <h3 className="mt-3 text-lg leading-8 tracking-[0.04em] text-foreground">
                初めての方も安心
              </h3>

              <p className="mt-4 text-sm leading-8 text-muted-foreground">
                完全予約制のため、枠に限りがあります。
                <br />
                気になる日時は早めの確認がおすすめです。
              </p>

              <a
                href={RESERVE_URL}
                onClick={handleReserveClick}
                className="mx-auto mt-7 inline-flex w-full max-w-xs items-center justify-center rounded-full bg-gold px-6 py-3.5 text-sm font-medium tracking-[0.08em] text-black transition hover:opacity-90"
              >
                メニューと空き状況を見る
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
