"use client"

import { FadeIn } from "@/components/fade-in"

const GIFT_URL = "https://gamistore.base.shop/"
const LINE_URL = "https://lin.ee/7hso3k1"

export function GiftSection() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-5 lg:px-10">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] tracking-[0.36em] text-gold/70">
              GIFT EXPERIENCE
            </p>

            <h2 className="mt-4 text-[clamp(1.55rem,5vw,2.4rem)] leading-[1.75] tracking-[0.06em] text-foreground">
              大切な方へ、
              <br />
              “整う時間”を贈る
            </h2>

            <p className="mx-auto mt-6 max-w-[22em] text-sm leading-8 text-muted-foreground sm:max-w-2xl">
              物ではなく、記憶に残る体験を。
              <br />
              完全個室のヘッドスパを、
              <br className="sm:hidden" />
              ギフトとしてお贈りいただけます。
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <FadeIn delay={0.08}>
            <div className="rounded-2xl border border-gold/20 bg-card p-6 sm:p-7">
              <h3 className="text-center text-[1.25rem] leading-8 tracking-[0.06em] text-foreground sm:text-left">
                このギフトが選ばれる理由
              </h3>

              <div className="mt-6 space-y-6 text-sm leading-8 text-muted-foreground">
                <div>
                  <p className="font-medium text-foreground">
                    記憶に残る“体験”を贈れる
                  </p>
                  <p className="mt-1">
                    モノではなく、
                    <span className="text-foreground">時間と体験</span>
                    を贈る特別なギフトです。
                  </p>
                </div>

                <div>
                  <p className="font-medium text-foreground">
                    完全個室の上質空間
                  </p>
                  <p className="mt-1">
                    人目を気にせず過ごせる、
                    大人のためのプライベート空間です。
                  </p>
                </div>

                <div>
                  <p className="font-medium text-foreground">
                    癒しと頭皮ケアを同時に
                  </p>
                  <p className="mt-1">
                    抜け毛・白髪・疲労など。
                    気になり始めたお悩みにも寄り添います。
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.16}>
            <div className="rounded-2xl border border-gold/20 bg-card p-6 sm:p-7">
              <h3 className="text-center text-[1.25rem] leading-8 tracking-[0.06em] text-foreground sm:text-left">
                こんな方への贈り物に
              </h3>

              <ul className="mt-6 space-y-3 text-sm leading-7 text-muted-foreground">
                <li>・奥様・お母様へのプレゼント</li>
                <li>・忙しく働く方への癒し</li>
                <li>・美容意識の高い方へ</li>
                <li>・特別感のある贈り物をしたい方</li>
              </ul>

              <div className="mt-8 rounded-xl border border-border/40 bg-background/60 p-5 text-center">
                <p className="text-sm leading-7 text-muted-foreground">
                  大切な方へ、
                  <br />
                  自分をいたわる時間を。
                </p>

                <div className="mx-auto mt-5 flex max-w-[280px] flex-col gap-3">
                  <a
                    href={GIFT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-medium text-black transition hover:opacity-90"
                  >
                    ギフトチケットを見る
                  </a>

                  <a
                    href={LINE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-gold/30 px-6 py-3 text-sm text-foreground transition hover:text-gold"
                  >
                    LINEで相談する
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
