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
  ["奥様・パートナーへ", "誕生日や記念日に、癒しの時間を。"],
  ["お母様へ", "母の日や感謝の贈り物に。"],
  ["大切な方へ", "退職祝い・結婚祝い・お礼にも。"],
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
              完全個室ヘッドスパを贈る。
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-muted-foreground">
              モノではなく、心から喜ばれる体験を。
              <br />
              誕生日・母の日・父の日・退職祝いに選ばれている、
              <br className="hidden sm:block" />
              ヘッドスパ専門店ゆうのスペシャルギフトカードです。
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
                「ありがとう」を、
                <br className="sm:hidden" />
                特別な時間で伝える。
              </h3>

              <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-muted-foreground">
                完全個室で過ごす、静かで上質なヘッドスパ時間。
                <br />
                日々忙しく頑張る方や、美容が好きな方へ。
                <br />
                自分ではなかなか選ばないからこそ、喜ばれやすいギフトです。
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {giftReasons.map(([title, text]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-gold/15 p-6 text-center"
                >
                  <p className="text-base text-foreground">{title}</p>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">
                    {text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-3xl border border-gold/20 bg-background/60 p-8 text-center">
              <p className="text-[10px] tracking-[0.35em] text-gold/70">
                GIFT TICKET
              </p>

              <h4 className="mt-4 text-xl leading-9 text-foreground">
                迷った時にも選びやすい、
                <br />
                上質な体験ギフト。
              </h4>

              <p className="mt-5 text-sm leading-8 text-muted-foreground">
                商品ページから詳細をご確認いただけます。
                <br />
                ギフト内容について不安な方はLINEでもご相談ください。
              </p>

              <div className="mx-auto mt-8 flex max-w-sm flex-col gap-3">
                <button
                  type="button"
                  onClick={() => handleGiftClick("gift_main")}
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
