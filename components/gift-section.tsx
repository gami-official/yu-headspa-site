"use client"

import { FadeIn } from "@/components/fade-in"

const GIFT_URL = "https://gamistore.base.shop/items/144607972"
const LINE_URL = "https://lin.ee/7hso3k1"

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
  }
}

const giftReasons = [
  ["誕生日に", "癒しの時間を贈る。"],
  ["母の日に", "感謝を形にする。"],
  ["大切な方へ", "特別な体験ギフトを。"],
]

export function GiftSection() {
  const handleGiftClick = (location: string) => {
    window.dataLayer = window.dataLayer || []

    window.dataLayer.push({
      event: "gift_click",
      gift_location: location,
    })

    setTimeout(() => {
      window.open(GIFT_URL, "_blank", "noopener,noreferrer")
    }, 300)
  }

  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-5xl px-5 lg:px-10">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[10px] tracking-[0.28em] text-gold/70">
              SPECIAL GIFT
            </p>

            <h2 className="mt-4 text-[clamp(1.55rem,6vw,2.5rem)] leading-[1.55] tracking-[0.03em] text-foreground">
              大切な人へ、
              <br />
              癒しを贈る。
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-muted-foreground">
              完全個室ヘッドスパを贈れる、
              <br />
              スペシャルギフトカードです。
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <div className="mt-10 rounded-[28px] border border-gold/20 bg-card p-6 shadow-sm sm:p-10">
            <div className="text-center">
              <p className="text-[10px] tracking-[0.28em] text-gold/70">
                GIFT CARD
              </p>

              <h3 className="mt-4 text-[1.35rem] leading-8 tracking-[0.03em] text-foreground">
                ありがとうを、
                <br className="sm:hidden" />
                特別な時間で。
              </h3>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-muted-foreground">
                誕生日・母の日・退職祝いに。
                <br />
                モノではなく、記憶に残る体験を。
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {giftReasons.map(([title, text]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-gold/15 p-5 text-center"
                >
                  <p className="text-sm text-foreground">{title}</p>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">
                    {text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-3xl border border-gold/20 bg-background/60 p-6 text-center">
              <p className="text-[10px] tracking-[0.28em] text-gold/70">
                BUY GIFT CARD
              </p>

              <h4 className="mt-4 text-lg leading-8 text-foreground">
                贈り物に迷ったら、
                <br />
                体験ギフトを。
              </h4>

              <div className="mx-auto mt-7 flex max-w-sm flex-col gap-3">
                <button
                  type="button"
                  onClick={() => handleGiftClick("gift_main")}
                  className="rounded-full bg-gold px-7 py-3.5 text-sm font-medium tracking-[0.08em] text-black transition hover:opacity-90"
                >
                  ギフトカードを見る
                </button>

                <a
                  href={LINE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-gold/30 px-7 py-3.5 text-sm text-foreground transition hover:text-gold"
                >
                  LINEで相談する
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
