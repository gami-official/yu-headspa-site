"use client"

import { FadeIn } from "@/components/fade-in"

const COUBIC_URL = "https://coubic.com/yuheadspa/services"
const LINE_URL = "https://lin.ee/7hso3k1"
const FRANCHISE_URL = "https://www.gamigami.net/headspa-franchise"

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
  }
}

const strengths = [
  {
    label: "01",
    title: "ヘッドスパ歴15年",
    text: "頭皮・髪質・印象変化まで。経験をもとに、今の状態に合わせたケアをご提案します。",
  },
  {
    label: "02",
    title: "完全個室・一日三名限定",
    text: "人目を気にせず相談できる空間で、流れ作業ではなく丁寧に向き合います。",
  },
  {
    label: "03",
    title: "Google口コミ100件突破",
    text: "初めての方にも安心してご来店いただけるよう、丁寧な接客と施術を大切にしています。",
  },
]

export function About() {
  const handleReserveClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    window.dataLayer = window.dataLayer || []

    window.dataLayer.push({
      event: "reserve_click",
      reserve_location: "about",
    })

    setTimeout(() => {
      window.open(COUBIC_URL, "_blank", "noopener,noreferrer")
    }, 300)
  }

  return (
    <section id="about" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <FadeIn>
          <div className="text-center">
            <p className="text-[11px] tracking-[0.36em] text-gold/70">
              ABOUT YU HEAD SPA
            </p>

            <h2 className="mt-4 text-[clamp(1.65rem,5vw,2.8rem)] leading-[1.8] tracking-[0.08em] text-foreground">
              初めてでも相談しやすい、
              <br />
              大人のための
              <br className="sm:hidden" />
              完全個室ヘッドスパ
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-muted-foreground">
              福岡市西区のヘッドスパ専門店ゆう本店。
              <br />
              分け目・薄毛・白髪・艶不足・ボリューム低下など、
              <br className="sm:hidden" />
              年齢による髪と頭皮のお悩みに寄り添います。
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <div className="mx-auto mt-12 max-w-3xl rounded-[28px] border border-gold/20 bg-card px-6 py-10 text-center shadow-sm sm:px-10 sm:py-12">
            <p className="text-[10px] tracking-[0.35em] text-gold/70">
              PRIVATE COUNSELING
            </p>

            <h3 className="mt-4 text-xl leading-9 tracking-[0.08em] text-foreground">
              いきなり施術ではなく、
              <br />
              まずは頭皮と髪の状態を確認します
            </h3>

            <div className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-muted-foreground">
              <p>
                「何を選べばいいかわからない」
                <br className="sm:hidden" />
                「薄毛や白髪の悩みを相談しにくい」
                <br />
                そんな方にも安心してお越しいただけるよう、
                完全個室で丁寧にお話を伺います。
              </p>

              <p className="mt-5">
                一時的な癒しだけではなく、
                将来の髪と印象まで見据えた
                頭皮美容をご提案しています。
              </p>
            </div>
          </div>
        </FadeIn>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {strengths.map((item, index) => (
            <FadeIn key={item.label} delay={0.12 + index * 0.05}>
              <div className="h-full rounded-[28px] border border-gold/20 bg-card px-6 py-8 text-center shadow-sm">
                <p className="text-[10px] tracking-[0.28em] text-gold/70">
                  {item.label}
                </p>

                <h3 className="mt-4 text-[16px] font-medium leading-8 tracking-[0.06em] text-foreground">
                  {item.title}
                </h3>

                <p className="mt-4 text-[13.5px] leading-7 text-muted-foreground">
                  {item.text}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.25}>
          <div className="mt-14 rounded-[30px] border border-gold/20 bg-card px-6 py-11 text-center shadow-sm">
            <p className="text-[10px] tracking-[0.35em] text-gold/70">
              PRIVATE RESERVE
            </p>

            <h3 className="mt-4 text-[clamp(1.35rem,4vw,2rem)] leading-[1.8] tracking-[0.08em] text-foreground">
              髪の変化が気になり始めたら、
              <br />
              早めのケアがおすすめです
            </h3>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-muted-foreground">
              完全予約制・一日三名限定のため、
              ご案内できる枠に限りがあります。
              <br />
              初めての方も、まずは空き状況をご確認ください。
            </p>

            <p className="mt-4 text-xs leading-6 text-foreground/50">
              完全個室｜駐車場2台完備｜福岡市西区
            </p>

            <div className="mx-auto mt-7 flex max-w-[280px] flex-col items-center gap-3 sm:max-w-none sm:flex-row sm:justify-center">
              <a
                href={COUBIC_URL}
                onClick={handleReserveClick}
                className="inline-flex w-full items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-medium tracking-[0.08em] text-black transition hover:opacity-90 sm:w-auto sm:min-w-[220px]"
              >
                空き状況を見る
              </a>

              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-full border border-foreground/20 px-6 py-3 text-sm tracking-[0.08em] text-foreground transition hover:border-gold/50 hover:text-gold sm:w-auto sm:min-w-[220px]"
              >
                LINEで相談する
              </a>
            </div>

            <div className="mt-7">
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
