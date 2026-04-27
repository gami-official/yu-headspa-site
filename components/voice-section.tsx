"use client"

import { FadeIn } from "@/components/fade-in"

const voices = [
  {
    age: "40代女性",
    title: "髪だけでなく、気持ちまで整いました",
    text: "完全個室で人目を気にせず過ごせるので、とても贅沢な時間でした。頭皮や髪の悩みも丁寧に聞いてくださり、安心してお願いできました。",
  },
  {
    age: "50代女性",
    title: "白髪染めの印象が変わりました",
    text: "ただ染めるだけではなく、頭皮のことまで考えてもらえるのが嬉しいです。髪のまとまりも良くなり、毎月通うのが楽しみです。",
  },
  {
    age: "40代男性",
    title: "抜け毛が気になり相談しました",
    text: "頭皮の状態を見てもらいながら、自分に合ったケアを提案してもらえました。リラックスもできて、継続して通いたいと思いました。",
  },
]

export function VoiceSection() {
  return (
    <section id="voice" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-10">
        <FadeIn>
          <div className="text-center">
            <p className="text-[11px] tracking-[0.36em] text-gold/70">
              CUSTOMER VOICE
            </p>

            <h2 className="mt-4 text-[clamp(1.55rem,5vw,2.5rem)] leading-[1.75] tracking-[0.06em] text-foreground">
              お客様の声
            </h2>

            <p className="mx-auto mt-6 max-w-[23em] text-sm leading-8 text-muted-foreground sm:max-w-2xl">
              実際にご来店いただいたお客様から、
              <br />
              嬉しいお声をいただいています。
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {voices.map((voice, index) => (
            <FadeIn key={voice.title} delay={0.08 + index * 0.05}>
              <div className="h-full rounded-2xl border border-gold/20 bg-card px-6 py-7 shadow-sm">
                <p className="text-[10px] tracking-[0.28em] text-gold/70">
                  VOICE {index + 1}
                </p>

                <h3 className="mt-4 text-[15px] font-medium leading-7 tracking-[0.06em] text-foreground">
                  {voice.title}
                </h3>

                <p className="mt-3 text-xs text-foreground/50">
                  {voice.age}
                </p>

                <p className="mt-4 text-[13.5px] leading-8 text-muted-foreground">
                  {voice.text}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
