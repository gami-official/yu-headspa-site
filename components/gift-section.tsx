"use client"

import Image from "next/image"
import { FadeIn } from "@/components/fade-in"

const GIFT_URL = "https://gamistore.base.shop/items/144607972"
const LINE_URL = "https://lin.ee/7hso3k1"

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
  }
}

const giftScenes = [
  {
    image: "/images/gift-section-1.jpg",
    title: "忙しい毎日に、深くほどける時間を。",
  },
  {
    image: "/images/gift-section-2.jpg",
    title: "完全個室で過ごす、特別なひととき。",
  },
  {
    image: "/images/gift-section-3.jpg",
    title: "大切な人へ、“ありがとう”を贈る。",
  },
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
      <div className="mx-auto max-w-6xl px-5 lg:px-10">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] tracking-[0.36em] text-gold/70">
              SPECIAL GIFT CARD
            </p>

            <h2 className="mt-4 text-[clamp(1.7rem,5vw,2.8rem)] leading-[1.75] tracking-[0.07em] text-foreground">
              大切な人へ、
              <br />
              “癒しの時間”を贈る。
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-muted-foreground">
              モノではなく、
              <br className="sm:hidden" />
              心から喜ばれる上質な体験を。
              <br />
              完全個室ヘッドスパを贈れる、
              <br className="sm:hidden" />
              スペシャルギフトカードです。
            </p>

            <div className="mx-auto mt-8 flex max-w-[320px] flex-col gap-3">
              <button
                type="button"
                onClick={() => handleGiftClick("gift_section_main")}
                className="rounded-full bg-gold px-7 py-3.5 text-sm font-medium tracking-[0.08em] text-black transition hover:opacity-90"
              >
                スペシャルギフトカードを見る
              </button>

              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-gold/30 px-7 py-3.5 text-sm tracking-[0.08em] text-foreground transition hover:text-gold"
              >
                LINEで相談する
              </a>
            </div>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {giftScenes.map((scene, index) => (
            <FadeIn key={scene.title} delay={0.08 + index * 0.06}>
              <div className="overflow-hidden rounded-[28px] border border-gold/20 bg-card shadow-sm">
                <div className="relative aspect-[4/5]">
                  <Image
                    src={scene.image}
                    alt={scene.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
                  <p className="absolute bottom-5 left-5 right-5 text-center text-sm leading-7 tracking-[0.08em] text-white">
                    {scene.title}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <FadeIn delay={0.1}>
            <div className="h-full rounded-[28px] border border-gold/20 bg-card p-6 shadow-sm sm:p-8">
              <h3 className="text-[1.25rem] leading-8 tracking-[0.07em] text-foreground">
                こんな贈り物に選ばれています
              </h3>

              <ul className="mt-7 space-y-3 text-sm leading-7 text-muted-foreground">
                <li>・奥様、パートナーへの誕生日プレゼントに</li>
                <li>・お母様への感謝の贈り物に</li>
                <li>・母の日、父の日、退職祝いに</li>
                <li>・美容意識の高い方への特別なギフトに</li>
                <li>・何を贈ればいいか迷った時に</li>
                <li>・物ではなく、上質な時間を贈りたい方へ</li>
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.16}>
            <div className="h-full rounded-[28px] border border-gold/20 bg-card p-6 shadow-sm sm:p-8">
              <h3 className="text-[1.25rem] leading-8 tracking-[0.07em] text-foreground">
                ヘッドスパ専門店ゆうのギフト
              </h3>

              <div className="mt-7 space-y-5 text-sm leading-8 text-muted-foreground">
                <p>
                  完全個室で過ごす、静かで贅沢なヘッドスパ時間。
                  頭皮・髪・印象まで整える体験を、大切な方へ贈れます。
                </p>

                <p>
                  「疲れている方」「美容が好きな方」「年齢髪が気になる方」へ。
                  記憶に残る、特別なプレゼントです。
                </p>
              </div>

              <button
                type="button"
                onClick={() => handleGiftClick("gift_section_bottom")}
                className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-gold px-6 py-3.5 text-sm font-medium tracking-[0.08em] text-black transition hover:opacity-90"
              >
                ギフトカードを購入する
              </button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
