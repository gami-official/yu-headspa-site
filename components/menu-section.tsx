"use client"

import Image from "next/image"
import { FadeIn } from "@/components/fade-in"
import { menus } from "@/lib/menu-data"

const COUBIC_URL = "https://coubic.com/yuheadspa/services"
const LINE_URL = "https://lin.ee/7hso3k1"

export function MenuSection() {
  return (
    <section id="menu" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-10">

        {/* タイトル */}
        <FadeIn>
          <div className="mb-12 text-center">
            <p className="text-xs tracking-[0.4em] text-gold/70">MENU</p>
            <h2 className="mt-3 text-xl sm:text-2xl tracking-[0.14em]">
              お悩み別に選べる本格ヘッドスパ
            </h2>
          </div>
        </FadeIn>

        {/* メニュー */}
        <div className="flex flex-col gap-10">
          {menus.map((menu, idx) => (
            <FadeIn key={menu.id} delay={idx * 0.1}>
              <div id={menu.id} className="rounded-2xl border border-gold/20 bg-card overflow-hidden">

                {/* 画像 */}
                <div className="relative h-56 w-full">
                  <Image
                    src={menu.image}
                    alt={menu.tab}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6">

                  {/* タイトル */}
                  <h3 className="text-lg font-semibold tracking-[0.1em]">
                    {menu.tab}
                  </h3>

                  {/* 説明 */}
                  <div className="mt-4 space-y-3 text-sm text-muted-foreground leading-7">
                    {menu.descriptionParagraphs.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>

                  {/* 料金 */}
                  <div className="mt-6 border-t pt-4">
                    <p className="text-xs tracking-[0.2em] text-gold">PRICE</p>

                    <div className="mt-3 space-y-3">
                      {menu.items.map((item, i) => (
                        <div key={i} className="flex justify-between text-sm">
                          <div>
                            <p className="font-medium">{item.name}</p>
                            <p className="text-xs text-muted-foreground">
                              {item.detail} / {item.duration}
                            </p>
                          </div>
                          <p className="font-semibold">{item.price}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 施術内容 */}
                  <div className="mt-6 border-t pt-4">
                    <p className="text-xs tracking-[0.2em] text-gold">STEP</p>

                    <div className="mt-3 flex flex-wrap gap-2 text-xs text-muted-foreground">
                      {menu.steps.map((step, i) => (
                        <span
                          key={i}
                          className="rounded-full border px-3 py-1"
                        >
                          {step}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* CTA */}
        <FadeIn delay={0.2}>
          <div className="mt-14 text-center">
            <p className="text-sm text-muted-foreground">
              ※1日3名限定のためご予約はお早めに
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <a
                href={COUBIC_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gold px-6 py-3 text-sm font-medium text-black"
              >
                ご予約はこちら
              </a>

              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border px-6 py-3 text-sm"
              >
                LINEで相談
              </a>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  )
}
