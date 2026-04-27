"use client"

import { FadeIn } from "@/components/fade-in"

const COUBIC_URL = "https://coubic.com/yuheadspa/services"
const LINE_URL = "https://lin.ee/7hso3k1"

const colorPoints = [
  {
    label: "01",
    title: "頭皮をいたわりながら染める",
    text: "ただ色を入れるだけでなく、頭皮への負担に配慮しながら施術します。",
  },
  {
    label: "02",
    title: "髪質と印象まで整える",
    text: "白髪を隠すだけでなく、艶・まとまり・清潔感まで考えたカラーをご提案します。",
  },
  {
    label: "03",
    title: "コースによって育毛ケアもプラス",
    text: "頭皮環境を整えながら、将来の髪まで見据えたケアを組み合わせられます。",
  },
]

export function ColorValueSection() {
  return (
    <section id="color-value" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-10">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] tracking-[0.36em] text-gold/70">
              COLOR HEAD SPA
            </p>

            <h2 className="mt-4 text-[clamp(1.55rem,5vw,2.5rem)] leading-[1.75] tracking-[0.06em] text-foreground">
              当店のカラーは、
              <br />
              なぜ選ばれるのか
            </h2>

            <p className="mx-auto mt-6 max-w-[23em] text-sm leading-8 text-muted-foreground sm:max-w-2xl">
              一般的なヘアカラー専門店のように、
              <br />
              ただ髪を染めるだけではありません。
              <br />
              頭皮から整え、髪質と印象まで考える
              <br className="sm:hidden" />
              ヘッドスパ専門店のカラーです。
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <div className="mx-auto mt-12 max-w-4xl rounded-2xl border border-gold/20 bg-card px-6 py-9 text-center shadow-sm sm:px-10 sm:py-11">
            <p className="text-[10px] tracking-[0.35em] text-gold/70">
              NOT JUST HAIR COLOR
            </p>

            <h3 className="mt-4 text-[clamp(1.3rem,4vw,1.9rem)] leading-[1.7] tracking-[0.06em] text-foreground">
              “染める”だけではなく、
              <br />
              これからの髪を守るカラーへ
            </h3>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-muted-foreground">
              白髪や色味を整えるだけでなく、
              頭皮の状態、髪のハリコシ、将来の髪まで見据えて施術します。
              <br />
              だからこそ、本物志向の方に高く支持されています。
            </p>

            <p className="mt-6 text-[13px] leading-7 text-foreground/70">
              リピート率 <span className="text-xl text-gold">95%</span>
            </p>
          </div>
        </FadeIn>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {colorPoints.map((item, index) => (
            <FadeIn key={item.label} delay={0.12 + index * 0.05}>
              <div className="h-full rounded-2xl border border-gold/20 bg-card px-6 py-7 text-center shadow-sm">
                <p className="text-[10px] tracking-[0.28em] text-gold/70">
                  {item.label}
                </p>

                <h3 className="mt-4 text-[15px] font-medium leading-7 tracking-[0.06em] text-foreground">
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
          <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-gold/20 bg-card px-6 py-9 text-center shadow-sm">
            <p className="text-sm leading-8 text-muted-foreground">
              安さだけで選ぶカラーではなく、
              <br />
              価値で選びたい方へ。
              <br />
              頭皮・髪・印象まで整える、
              <br className="sm:hidden" />
              別格のヘアカラーヘッドスパを。
            </p>

            <div className="mx-auto mt-7 flex max-w-[280px] flex-col items-center gap-3 sm:max-w-none sm:flex-row sm:justify-center">
              <a
                href={COUBIC_URL}
                target="_blank"
                rel="noopener noreferrer"
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
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
