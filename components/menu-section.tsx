"use client"

import Image from "next/image"
import { FadeIn } from "@/components/fade-in"
import { menus } from "@/lib/menu-data"

const COUBIC_URL = "https://coubic.com/yuheadspa/services"

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
  }
}

export function MenuSection() {
  const handleReserveClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    location: string,
  ) => {
    e.preventDefault()

    window.dataLayer = window.dataLayer || []

    window.dataLayer.push({
      event: "reserve_click",
      reserve_location: location,
    })

    setTimeout(() => {
      window.open(COUBIC_URL, "_blank", "noopener,noreferrer")
    }, 300)
  }

  return (
    <section id="menu" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-10">
        <FadeIn>
          <div className="mb-12 text-center">
            <p className="text-[10px] tracking-[0.28em] text-gold/70">
              MENU
            </p>

            <h2 className="mt-4 text-[clamp(1.55rem,6vw,2.6rem)] leading-[1.55] tracking-[0.03em] text-foreground">
              悩みに合わせて、
              <br />
              選べるケア。
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-muted-foreground">
              分け目・白髪・艶不足へ。
              <br />
              状態に合わせてご提案します。
            </p>
          </div>
        </FadeIn>

        <div className="flex flex-col gap-10">
          {menus.map((menu, idx) => (
            <FadeIn key={menu.id} delay={idx * 0.08}>
              <div className="overflow-hidden rounded-[28px] border border-gold/20 bg-card shadow-sm">
                <div className="relative h-48 w-full overflow-hidden sm:h-60">
                  <Image
                    src={menu.image}
                    alt={menu.tab}
                    fill
                    className="object-cover object-center transition duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                </div>

                <div className="p-5 sm:p-8">
                  <div className="text-center sm:text-left">
                    <p className="text-[10px] tracking-[0.24em] text-gold/70">
                      {menu.enTitle.toUpperCase()}
                    </p>

                    <h3 className="mt-3 text-[clamp(1.35rem,5vw,2rem)] leading-[1.55] tracking-[0.03em] text-foreground">
                      {menu.tab}
                    </h3>
                  </div>

                  <div className="mt-6 space-y-3 text-[13.5px] leading-8 text-muted-foreground">
                    {menu.descriptionParagraphs.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>

                  <div className="mt-8 space-y-4">
                    {menu.items.map((item, i) => (
                      <div
                        key={i}
                        className={`rounded-2xl border p-5 transition sm:p-6 ${
                          i === 1
                            ? "border-gold bg-gold/5"
                            : "border-border/30"
                        }`}
                      >
                        {i === 1 && (
                          <p className="mb-3 text-[10px] tracking-[0.24em] text-gold">
                            MOST POPULAR
                          </p>
                        )}

                        <p className="text-[15px] font-medium leading-7 text-foreground">
                          {item.name}
                        </p>

                        <p className="mt-2 text-xs leading-6 text-muted-foreground">
                          {item.detail} ／ {item.duration}
                        </p>

                        <p className="mt-4 text-[13px] leading-7 text-muted-foreground">
                          頭皮環境・髪質・印象変化へ。
                          <br />
                          今の状態に合わせてご提案します。
                        </p>

                        <p className="mt-5 text-2xl font-semibold tracking-[0.03em] text-foreground">
                          {item.price}
                        </p>

                        <a
                          href={COUBIC_URL}
                          onClick={(e) =>
                            handleReserveClick(e, `menu_${menu.id}_${i + 1}`)
                          }
                          className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-gold px-5 py-3 text-sm font-medium tracking-[0.08em] text-black transition hover:opacity-90"
                        >
                          空き状況を見る
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <div className="mt-14 rounded-[28px] border border-gold/20 bg-card px-6 py-10 text-center shadow-sm">
            <p className="text-[10px] tracking-[0.28em] text-gold/70">
              PRIVATE RESERVE
            </p>

            <h3 className="mt-4 text-[clamp(1.35rem,5vw,2rem)] leading-[1.55] tracking-[0.03em] text-foreground">
              迷った方も、
              <br />
              ご相談ください。
            </h3>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-muted-foreground">
              当日、頭皮と髪の状態を確認しながら、
              <br />
              今のあなたに合うケアをご提案します。
            </p>

            <a
              href={COUBIC_URL}
              onClick={(e) => handleReserveClick(e, "menu_bottom")}
              className="mt-7 inline-flex min-w-[260px] items-center justify-center rounded-full bg-gold px-8 py-3.5 text-sm font-medium tracking-[0.08em] text-black transition hover:opacity-90"
            >
              空き状況を見る
            </a>

            <p className="mt-5 text-xs leading-6 text-muted-foreground">
              口コミ100件突破｜完全個室｜駐車場2台
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
