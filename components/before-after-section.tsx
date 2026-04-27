"use client"

import { FadeIn } from "@/components/fade-in"

const examples = [
  {
    title: "頭皮環境の変化",
    before: "乾燥・かゆみ・頭皮の硬さが気になる状態",
    after: "頭皮を整え、健やかな状態を目指すケアへ",
  },
  {
    title: "髪の印象の変化",
    before: "白髪・パサつき・ツヤ不足が気になる状態",
    after: "カラーとケアで、上品でまとまりのある印象へ",
  },
  {
    title: "疲労感の変化",
    before: "頭の重さ・眼精疲労・睡眠の浅さが気になる状態",
    after: "深いリラクゼーションで、すっきり整う時間へ",
  },
]

export function BeforeAfterSection() {
  return (
    <section id="before-after" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-10">
        <FadeIn>
          <div className="text-center">
            <p className="text-[11px] tracking-[0.36em] text-gold/70">
              BEFORE / AFTER
            </p>

            <h2 className="mt-4 text-[clamp(1.55rem,5vw,2.5rem)] leading-[1.75] tracking-[0.06em] text-foreground">
              施術前後で感じる、
              <br />
              変化のイメージ
            </h2>

            <p className="mx-auto mt-6 max-w-[23em] text-sm leading-8 text-muted-foreground sm:max-w-2xl">
              見た目だけでなく、
              <br />
              頭皮・髪・気分まで整えることを大切にしています。
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {examples.map((item, index) => (
            <FadeIn key={item.title} delay={0.08 + index * 0.05}>
              <div className="h-full rounded-2xl border border-gold/20 bg-card p-6 shadow-sm">
                <p className="text-[10px] tracking-[0.28em] text-gold/70">
                  CASE {index + 1}
                </p>

                <h3 className="mt-4 text-[15px] font-medium leading-7 tracking-[0.06em] text-foreground">
                  {item.title}
                </h3>

                <div className="mt-6 space-y-4 text-sm leading-7">
                  <div className="rounded-xl border border-border/40 bg-background/60 p-4">
                    <p className="text-[10px] tracking-[0.25em] text-foreground/40">
                      BEFORE
                    </p>
                    <p className="mt-2 text-muted-foreground">
                      {item.before}
                    </p>
                  </div>

                  <div className="rounded-xl border border-gold/30 bg-gold/5 p-4">
                    <p className="text-[10px] tracking-[0.25em] text-gold/80">
                      AFTER
                    </p>
                    <p className="mt-2 text-foreground">
                      {item.after}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.25}>
          <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-6 text-muted-foreground">
            ※感じ方や変化には個人差があります。状態を確認しながら、お一人おひとりに合わせたケアをご提案します。
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
