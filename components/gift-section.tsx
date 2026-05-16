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
              LUXURY GIFT EXPERIENCE
            </p>

            <h2 className="mt-4 text-[clamp(1.6rem,5vw,2.5rem)] leading-[1.8] tracking-[0.07em] text-foreground">
              大切な方へ、
              <br />
              “品のある艶と癒し”を贈る
            </h2>

            <p className="mx-auto mt-6 max-w-[23em] text-sm leading-8 text-muted-foreground sm:max-w-2xl">
              完全個室で過ごす、
              <br />
              ヘッドスパと頭皮美容の上質な時間。
              <br />
              白髪・艶不足・疲れた印象まで整える、
              <br className="sm:hidden" />
              大人のためのギフトです。
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <FadeIn delay={0.08}>
            <div className="h-full rounded-[28px] border border-gold/20 bg-card p-6 shadow-sm sm:p-8">
              <h3 className="text-center text-[1.3rem] leading-8 tracking-[0.07em] text-foreground sm:text-left">
                このギフトが選ばれる理由
              </h3>

              <div className="mt-7 space-y-6 text-sm leading-8 text-muted-foreground">
                <div>
                  <p className="font-medium text-foreground">
                    ただの施術ではなく、印象を整える体験
                  </p>
                  <p className="mt-1">
                    頭皮・髪質・艶・印象まで整える、
                    大切な方のための特別なケアです。
                  </p>
                </div>

                <div>
                  <p className="font-medium text-foreground">
                    完全個室で過ごす上質な時間
                  </p>
                  <p className="mt-1">
                    人目を気にせず、静かに過ごせるプライベート空間。
                    忙しい方への贈り物にも選ばれています。
                  </p>
                </div>

                <div>
                  <p className="font-medium text-foreground">
                    白髪・艶不足・年齢髪にも
                  </p>
                  <p className="mt-1">
                    美容意識の高い方へ。
                    “若々しく見える印象”を大切にしたい方におすすめです。
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.16}>
            <div className="h-full rounded-[28px] border border-gold/20 bg-card p-6 shadow-sm sm:p-8">
              <h3 className="text-center text-[1.3rem] leading-8 tracking-[0.07em] text-foreground sm:text-left">
                こんな贈り物に
              </h3>

              <ul className="mt-7 space-y-3 text-sm leading-7 text-muted-foreground">
                <li>・奥様への誕生日プレゼントに</li>
                <li>・お母様への感謝の贈り物に</li>
                <li>・美容意識の高い方へ</li>
                <li>・経営者様・大切なお取引先へのお礼に</li>
                <li>・白髪や艶不足を気にされている方へ</li>
                <li>・物ではなく、上質な時間を贈りたい方へ</li>
              </ul>

              <div className="mt-8 rounded-2xl border border-gold/20 bg-background/60 p-5 text-center">
                <p className="text-[10px] tracking-[0.3em] text-gold/70">
                  GIFT TICKET
                </p>

                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  大切な方へ、
                  <br />
                  自分をいたわる特別な時間を。
                </p>

                <div className="mx-auto mt-5 flex max-w-[280px] flex-col gap-3">
                  <a
                    href={GIFT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-medium tracking-[0.08em] text-black transition hover:opacity-90"
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
