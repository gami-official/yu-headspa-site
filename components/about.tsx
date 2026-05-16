"use client"

import { FadeIn } from "@/components/fade-in"

const COUBIC_URL = "https://coubic.com/yuheadspa/services"
const LINE_URL = "https://lin.ee/7hso3k1"
const FRANCHISE_URL = "https://www.gamigami.net/headspa-franchise"

const strengths = [
  {
    label: "01",
    title: "15年以上の専門技術",
    text: "頭皮・髪質・印象変化まで。現在の状態を見極めながら、本質的なケアをご提供しています。",
  },
  {
    label: "02",
    title: "完全個室・一日三名限定",
    text: "流れ作業ではなく、限られたお客様だけに丁寧に向き合う完全予約制サロンです。",
  },
  {
    label: "03",
    title: "印象まで整える頭皮美容",
    text: "白髪・分け目・艶不足・疲れた印象へ。頭皮から整え、品のある髪質と印象へ導きます。",
  },
]

export function About() {
  return (
    <section id="about" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">

        <FadeIn>
          <div className="text-center">

            <p className="text-[11px] tracking-[0.36em] text-gold/70">
              PRIVATE SCALP BEAUTY
            </p>

            <h2 className="mt-4 text-[clamp(1.65rem,5vw,2.8rem)] leading-[1.8] tracking-[0.08em] text-foreground">
              年齢による髪と印象の変化へ。
              <br />
              完全個室の
              <br className="sm:hidden" />
              頭皮美容専門店
            </h2>

            <p className="mx-auto mt-6 max-w-[22em] text-sm leading-8 text-muted-foreground sm:max-w-2xl">
              福岡市西区の完全個室ヘッドスパ専門店。
              <br />
              分け目・白髪・艶不足・頭皮環境へ。
              <br />
              頭皮から整え、
              <br className="sm:hidden" />
              品のある髪質と印象へ導きます。
            </p>

          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <div className="mx-auto mt-12 max-w-3xl rounded-[28px] border border-gold/20 bg-card px-6 py-10 text-center shadow-sm sm:px-10 sm:py-12">

            <p className="text-[10px] tracking-[0.35em] text-gold/70">
              AGING HAIR CARE
            </p>

            <div className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-muted-foreground">

              <p>
                分け目・薄毛・白髪・ボリューム低下。
                <br />
                年齢による髪質変化や、
                <br className="sm:hidden" />
                印象変化へ丁寧に向き合います。
              </p>

              <p className="mt-5">
                育毛・エイジングカラー・頭皮美容まで。
                <br />
                一時的な癒しではなく、
                <br className="sm:hidden" />
                将来の髪まで見据えた本格ケアをご提供しています。
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
              一日三名限定で、
              <br />
              丁寧に向き合う。
            </h3>

            <p className="mx-auto mt-5 max-w-[22em] text-sm leading-8 text-muted-foreground sm:max-w-2xl">
              流れ作業ではなく、
              <br className="sm:hidden" />
              お一人おひとりの頭皮状態・髪質・印象に合わせて、
              <br />
              最適なケアをご提案しております。
            </p>

            <p className="mt-4 text-xs leading-6 text-foreground/50">
              完全予約制｜完全個室
            </p>

            <div className="mx-auto mt-7 flex max-w-[280px] flex-col items-center gap-3 sm:max-w-none sm:flex-row sm:justify-center">

              <a
                href={COUBIC_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-medium tracking-[0.08em] text-black transition hover:opacity-90 sm:w-auto sm:min-w-[220px]"
              >
                ご予約枠を確認する
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
