"use client"

import { FadeIn } from "@/components/fade-in"

const GIFT_URL =
  "https://gamistore.base.shop/items/144607972"

const LINE_URL = "https://lin.ee/7hso3k1"

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
  }
}

export function GiftSection() {
  const handleGiftClick = (location: string) => {
    window.dataLayer = window.dataLayer || []

    window.dataLayer.push({
      event: "gift_click",
      gift_location: location,
    })

    setTimeout(() => {
      window.open(
        GIFT_URL,
        "_blank",
        "noopener,noreferrer"
      )
    }, 300)
  }

  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-5 lg:px-10">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] tracking-[0.36em] text-gold/70">
              SPECIAL GIFT CARD
            </p>

            <h2 className="mt-4 text-[clamp(1.7rem,5vw,2.8rem)] leading-[1.8] tracking-[0.07em] text-foreground">
              大切な人へ、
              <br />
              癒しの時間を贈る。
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-muted-foreground">
              モノではなく、
              心から喜ばれる体験を。
              <br />
              完全個室で過ごす上質なヘッドスパを、
              <br />
              大切な方への贈り物としてお届けします。
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <div className="mt-12 rounded-[32px] border border-gold/20 bg-card p-8 shadow-sm sm:p-12">
            <div className="text-center">
              <p className="text-[10px] tracking-[0.35em] text-gold/70">
                GIFT EXPERIENCE
              </p>

              <h3 className="mt-4 text-[1.5rem] leading-10 tracking-[0.06em] text-foreground">
                ありがとうを、
                <br className="sm:hidden" />
                特別な時間で伝える。
              </h3>

              <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-muted-foreground">
                誕生日。
                母の日。
                父の日。
                退職祝い。
                結婚祝い。
                <br />
                美容が好きな方、
                日々忙しく頑張る方へ。
                <br />
                「自分ではなかなか行かないから嬉しい」
                と選ばれている人気のギフトです。
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              <div className="rounded-2xl border border-gold/15 p-6 text-center">
                <p className="text-base text-foreground">
                  完全個室
                </p>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  静かに過ごせる
                  上質なプライベート空間
                </p>
              </div>

              <div className="rounded-2xl border border-gold/15 p-6 text-center">
                <p className="text-base text-foreground">
                  頭皮美容
                </p>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  白髪・艶不足・
                  年齢髪のケアにも
                </p>
              </div>

              <div className="rounded-2xl border border-gold/15 p-6 text-center">
                <p className="text-base text-foreground">
                  一日三名限定
                </p>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  丁寧な施術と
                  特別感のある時間
                </p>
              </div>
            </div>

            <div className="mt-12 rounded-3xl border border-gold/20 bg-background/60 p-8 text-center">
              <p className="text-[10px] tracking-[0.35em] text-gold/70">
                SPECIAL GIFT CARD
              </p>

              <h4 className="mt-4 text-xl leading-9 text-foreground">
                大切な人へ、
                <br />
                ヘッドスパ体験を贈る。
              </h4>

              <p className="mt-5 text-sm leading-8 text-muted-foreground">
                記憶に残るプレゼントを。
                <br />
                スペシャルギフトカードはこちら。
              </p>

              <div className="mx-auto mt-8 flex max-w-sm flex-col gap-3">
                <button
                  type="button"
                  onClick={() =>
                    handleGiftClick("gift_main")
                  }
                  className="rounded-full bg-gold px-7 py-3.5 text-sm font-medium tracking-[0.08em] text-black transition hover:opacity-90"
                >
                  スペシャルギフトカードを見る
                </button>

                <a
                  href={LINE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-gold/30 px-7 py-3.5 text-sm text-foreground transition hover:text-gold"
                >
                  ギフトについて相談する
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
