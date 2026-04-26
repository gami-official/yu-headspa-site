"use client"

import { FadeIn } from "@/components/fade-in"

const GIFT_URL = "https://gamistore.base.shop/"
const LINE_URL = "https://lin.ee/7hso3k1"

export function GiftSection() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-5 lg:px-10">

        {/* タイトル */}
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] tracking-[0.4em] text-gold/70">
              GIFT EXPERIENCE
            </p>

            <h2 className="mt-4 text-[clamp(1.8rem,5vw,2.6rem)] leading-[1.7] tracking-[0.08em] text-foreground">
              大切な方へ、
              <br />
              “自分を整える時間”を贈る
            </h2>

            <p className="mt-6 text-sm leading-8 text-muted-foreground">
              物ではなく、記憶に残る体験を。
              <br />
              完全個室のヘッドスパをギフトとしてお贈りいただけます。
            </p>
          </div>
        </FadeIn>

        {/* メイン */}
        <div className="mt-14 grid gap-6 lg:grid-cols-2">

          {/* 左 */}
          <FadeIn delay={0.08}>
            <div className="rounded-2xl border border-gold/20 bg-card p-7">

              <h3 className="text-lg tracking-[0.08em] text-foreground">
                このギフトが選ばれる理由
              </h3>

              <div className="mt-6 space-y-6 text-sm leading-7 text-muted-foreground">

                <div>
                  <p className="font-medium text-foreground">
                    記憶に残る“体験”を贈れる
                  </p>
                  <p className="mt-1">
                    モノではなく、
                    <span className="text-foreground">時間と体験</span>
                    を贈る特別なギフト。
                  </p>
                </div>

                <div>
                  <p className="font-medium text-foreground">
                    完全個室の上質空間
                  </p>
                  <p className="mt-1">
                    人目を気にせず過ごせる、
                    大人のためのプライベート空ロン。
                  </p>
                </div>

                <div>
                  <p className="font-medium text-foreground">
                    癒しと頭皮ケアを同時に
                  </p>
                  <p className="mt-1">
                    抜け毛・白髪・疲労など、
                    気になり始めた悩みにも対応。
                  </p>
                </div>

              </div>
            </div>
          </FadeIn>

          {/* 右 */}
          <FadeIn delay={0.16}>
            <div className="rounded-2xl border border-gold/20 bg-card p-7">

              <h3 className="text-lg tracking-[0.08em] text-foreground">
                こんな方への贈り物に
              </h3>

              <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                <li>・奥様・お母様へのプレゼント</li>
                <li>・忙しく働く方への癒し</li>
                <li>・美容意識の高い方へ</li>
                <li>・特別感のある贈り物をしたい方</li>
              </ul>

              <div className="mt-8 rounded-xl border border-border/40 bg-background/60 p-5 text-center">

                <p className="text-sm leading-7 text-muted-foreground">
                  「これを贈りたい」と思ったタイミングが
                  ベストです。
                </p>

                <a
                  href={GIFT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-gold px-6 py-3.5 text-sm font-medium text-black transition hover:opacity-90"
                >
                  ギフトチケットを見る
                </a>

                <a
                  href={LINE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex w-full items-center justify-center rounded-full border border-gold/30 px-6 py-3 text-sm text-foreground transition hover:text-gold"
                >
                  LINEで相談する
                </a>

              </div>
            </div>
          </FadeIn>

        </div>

      </div>
    </section>
  )
}
