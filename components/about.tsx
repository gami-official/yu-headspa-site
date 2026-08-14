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
  ["歴15年", "専門技術"],
  ["完全個室", "安心して相談"],
  ["口コミ113件", "選ばれる理由"],
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
    <section id="about" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <FadeIn>
          <div className="text-center">
            <p className="text-[10px] tracking-[0.28em] text-gold/70">
              ABOUT
            </p>

            <h2 className="mt-4 text-[clamp(1.55rem,6vw,2.6rem)] leading-[1.55] tracking-[0.03em] text-foreground">
              初めてでも、
              <br />
              相談しやすい。
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-muted-foreground">
              福岡市西区の完全個室ヘッドスパ。
              <br />
              分け目・白髪・艶不足に寄り添います。
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <div className="mx-auto mt-10 max-w-3xl rounded-[28px] border border-gold/20 bg-card px-6 py-9 text-center shadow-sm sm:px-10">
            <p className="text-[10px] tracking-[0.28em] text-gold/70">
              COUNSELING
            </p>

            <h3 className="mt-4 text-xl leading-8 tracking-[0.03em] text-foreground">
              まずは状態を確認します
            </h3>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-muted-foreground">
              何を選べばいいか分からない方も大丈夫です。
              <br />
              頭皮と髪の状態を見ながら、最適なケアをご提案します。
            </p>
          </div>
        </FadeIn>

        <div className="mt-8 grid grid-cols-3 gap-3">
          {strengths.map(([title, text], index) => (
            <FadeIn key={title} delay={0.12 + index * 0.05}>
              <div className="h-full rounded-2xl border border-gold/20 bg-card px-3 py-5 text-center shadow-sm sm:px-6">
                <p className="text-sm font-medium leading-6 text-foreground">
                  {title}
                </p>

                <p className="mt-2 text-xs leading-5 text-muted-foreground">
                  {text}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.25}>
          <div className="mt-10 rounded-[28px] border border-gold/20 bg-card px-6 py-9 text-center shadow-sm">
            <p className="text-[10px] tracking-[0.28em] text-gold/70">
              RESERVE
            </p>

            <h3 className="mt-4 text-[clamp(1.35rem,5vw,2rem)] leading-[1.55] tracking-[0.03em] text-foreground">
              早めのケアが、
              <br />
              未来の髪を守ります。
            </h3>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-muted-foreground">
              完全予約制・一日三名限定。
              <br />
              まずは空き状況をご確認ください。
            </p>

            <p className="mt-4 text-xs leading-6 text-foreground/50">
              完全個室｜駐車場2台｜福岡市西区
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
