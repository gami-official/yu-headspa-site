"use client"

import { FadeIn } from "@/components/fade-in"

const COUBIC_URL = "https://coubic.com/yuheadspa/services"
const LINE_URL = "https://lin.ee/7hso3k1"

const scalpPoints = [
  {
    label: "01",
    title: "頭皮環境から整える",
    text: "抜け毛・薄毛の原因となる頭皮環境にアプローチし、根本から改善を目指します。",
  },
  {
    label: "02",
    title: "一人ひとりに合わせた施術",
    text: "状態を見極めながら、その方に合ったケアを組み合わせていきます。",
  },
  {
    label: "03",
    title: "継続できる現実的なケア",
    text: "無理のない価格と通い方で、長く続けられることを大切にしています。",
  },
]

export function ScalpCareSection() {
  return (
    <section id="scalp-care" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-10">

        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] tracking-[0.36em] text-gold/70">
              SCALP CARE
            </p>

            <h2 className="mt-4 text-[clamp(1.55rem,5vw,2.5rem)] leading-[1.75] tracking-[0.06em] text-foreground">
              抜け毛・薄毛を、
              <br />
              頭皮から整える
            </h2>

            <p className="mx-auto mt-6 max-w-[23em] text-sm leading-8 text-muted-foreground sm:max-w-2xl">
              表面的なケアではなく、
              <br />
              頭皮環境から整えることで、
              <br className="sm:hidden" />
              髪本来の状態へ導きます。
            </p>
          </div>
        </FadeIn>

        {/* 中央メッセージ */}
        <FadeIn delay={0.08}>
          <div className="mx-auto mt-12 max-w-4xl rounded-2xl border border-gold/20 bg-card px-6 py-9 text-center shadow-sm sm:px-10 sm:py-11">
            <p className="text-[10px] tracking-[0.35em] text-gold/70">
              ROOT CARE
            </p>

            <h3 className="mt-4 text-[clamp(1.3rem,4vw,1.9rem)] leading-[1.7] tracking-[0.06em] text-foreground">
              その場しのぎではなく、
              <br />
              “これからの髪”のために
            </h3>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-muted-foreground">
              抜け毛・薄毛・分け目の変化など。
              <br />
              今の状態を見極めながら、
              将来の髪まで見据えたケアをご提案します。
            </p>

            <p className="mt-6 text-[13px] leading-7 text-foreground/70">
              継続されるお客様多数
            </p>
          </div>
        </FadeIn>

        {/* 3ポイント */}
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {scalpPoints.map((item, index) => (
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

        {/* CTA */}
        <FadeIn delay={0.25}>
          <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-gold/20 bg-card px-6 py-9 text-center shadow-sm">
            <p className="text-sm leading-8 text-muted-foreground">
              今の状態を知ることが、
              <br />
              最初の一歩です。
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
