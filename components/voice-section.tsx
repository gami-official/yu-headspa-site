"use client"

import { FadeIn } from "@/components/fade-in"

const COUBIC_URL = "https://coubic.com/yuheadspa/services"

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
  }
}

const voices = [
  {
    age: "40代女性",
    title: "完全個室なので、髪の悩みを相談しやすかったです",
    text: "分け目やボリュームの悩みを人に話すのが苦手でしたが、完全個室で丁寧に聞いてもらえて安心しました。",
  },
  {
    age: "50代女性",
    title: "白髪や艶不足の印象が気になり来店しました",
    text: "ただの癒しではなく、頭皮や髪の状態を見ながら提案してもらえるのが良かったです。髪のまとまりも感じました。",
  },
  {
    age: "40代男性",
    title: "抜け毛が気になり相談しました",
    text: "頭皮の状態を確認しながら説明してもらえたので分かりやすかったです。リラックスできる空間で通いやすいです。",
  },
]

export function VoiceSection() {
  const handleReserveClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    window.dataLayer = window.dataLayer || []

    window.dataLayer.push({
      event: "reserve_click",
      reserve_location: "voice",
    })

    setTimeout(() => {
      window.open(COUBIC_URL, "_blank", "noopener,noreferrer")
    }, 300)
  }

  return (
    <section id="voice" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-10">
        <FadeIn>
          <div className="text-center">
            <p className="text-[11px] tracking-[0.36em] text-gold/70">
              CUSTOMER VOICE
            </p>

            <h2 className="mt-4 text-[clamp(1.55rem,5vw,2.5rem)] leading-[1.75] tracking-[0.06em] text-foreground">
              Google口コミ100件突破。
              <br />
              初めての方にも選ばれています
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-muted-foreground">
              完全個室・一日三名限定。
              <br />
              人目を気にせず相談できる頭皮美容専門店です。
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.06}>
          <div className="mx-auto mt-10 max-w-xl rounded-[28px] border border-gold/20 bg-card px-6 py-7 text-center shadow-sm">
            <p className="text-[10px] tracking-[0.3em] text-gold/70">
              GOOGLE REVIEW
            </p>

            <p className="mt-3 text-2xl tracking-[0.12em] text-gold">
              ★★★★★
            </p>

            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              口コミ100件突破
              <br />
              相談しやすさ・完全個室・丁寧な施術で選ばれています
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

        <FadeIn delay={0.2}>
          <div className="mt-12 text-center">
            <a
              href={COUBIC_URL}
              onClick={handleReserveClick}
              className="inline-flex w-full max-w-xs items-center justify-center rounded-full bg-gold px-6 py-3.5 text-sm font-medium tracking-[0.08em] text-black transition hover:opacity-90"
            >
              空き状況を見る
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
