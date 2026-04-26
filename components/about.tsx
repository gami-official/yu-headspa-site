"use client"

import { FadeIn } from "@/components/fade-in"

const COUBIC_URL = "https://coubic.com/yuheadspa/services"
const LINE_URL = "https://lin.ee/7hso3k1"
const FRANCHISE_URL = "https://www.gamigami.net/headspa-franchise"

const strengths = [
  {
    label: "01",
    title: "15年の経験に基づく専門ケア",
    text: "頭皮・髪・疲労感のお悩みに向き合ってきた経験をもとに、今の状態に合わせた施術をご提案します。",
  },
  {
    label: "02",
    title: "一日三名限定の完全個室",
    text: "流れ作業ではなく、お一人おひとりのために時間を確保。人目を気にせず、静かに整う時間をお過ごしいただけます。",
  },
  {
    label: "03",
    title: "将来の髪まで見据えた設計",
    text: "その場の心地よさだけでなく、抜け毛・薄毛・白髪・頭皮環境まで見据えた継続的なケアを大切にしています。",
  },
]

export function About() {
  return (
    <section id="about" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <FadeIn>
          <div className="text-center">
            <p className="text-[11px] tracking-[0.38em] text-gold/70">
              ABOUT
            </p>

            <h2 className="mt-4 text-[clamp(1.7rem,5vw,2.8rem)] leading-[1.65] tracking-[0.08em] text-foreground">
              一日三名だけに向き合う、
              <br />
              完全個室のヘッドスパ専門店
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-muted-foreground sm:text-[15px]">
              福岡市西区にある「ヘッドスパ専門店ゆう」は、
              頭皮から髪質と印象を再設計するためのプライベートサロンです。
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-gold/20 bg-card px-6 py-9 text-center shadow-sm sm:px-10 sm:py-11">
            <p className="text-[10px] tracking-[0.35em] text-gold/70">
              PRIVATE CARE
            </p>

            <div className="mx-auto mt-5 max-w-2xl text-sm leading-[2.05] text-muted-foreground sm:text-[15px]">
              <p>
                抜け毛・薄毛・分け目・白髪・頭皮の違和感。
                <br className="hidden sm:block" />
                年齢とともに変化する髪のお悩みに、
                丁寧なカウンセリングと専門ケアで向き合います。
              </p>

              <p className="mt-5">
                育毛ヘッドスパ、ヘアカラーヘッドスパ、
                リラクゼーションまで、
                その日の癒しだけで終わらせず、
                将来の髪と頭皮まで見据えた施術をご提供します。
              </p>
            </div>
          </div>
        </FadeIn>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {strengths.map((item, index) => (
            <FadeIn key={item.label} delay={0.12 + index * 0.05}>
              <div className="h-full rounded-2xl border border-gold/20 bg-card px-6 py-7 text-center shadow-sm">
                <p className="text-[10px] tracking-[0.28em] text-gold/70">
                  {item.label}
                </p>

                <h3 className="mt-4 text-base font-medium leading-7 tracking-[0.08em] text-foreground">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  {item.text}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.25}>
          <div className="mt-14 rounded-2xl border border-gold/20 bg-card px-6 py-10 text-center shadow-sm">
            <p className="text-[10px] tracking-[0.35em] text-gold/70">
              RESERVE
            </p>

            <h3 className="mt-4 text-[clamp(1.35rem,4vw,2rem)] leading-[1.75] tracking-[0.06em] text-foreground">
              まずは今の頭皮状態を
              <br />
              確認することから
            </h3>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-muted-foreground">
              どのメニューが合うか迷う方も、
              カウンセリングで状態を確認しながら最適なケアをご提案します。
            </p>

            <p className="mt-4 text-xs leading-6 text-foreground/50">
              完全予約制・一日三名限定
            </p>

            <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <a
                href={COUBIC_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-w-[230px] items-center justify-center rounded-full bg-gold px-6 py-3.5 text-sm font-medium tracking-[0.08em] text-black transition hover:opacity-90"
              >
                空き状況を見る
              </a>

              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-w-[230px] items-center justify-center rounded-full border border-foreground/20 px-6 py-3.5 text-sm tracking-[0.08em] text-foreground transition hover:border-gold/50 hover:text-gold"
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
