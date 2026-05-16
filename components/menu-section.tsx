"use client"

import Image from "next/image"
import { FadeIn } from "@/components/fade-in"
import { menus } from "@/lib/menu-data"

const COUBIC_URL = "https://coubic.com/yuheadspa/services"

export function MenuSection() {
  const handleReserveClick = () => {
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || []

      window.dataLayer.push({
        event: "reserve_click",
        reserve_location: "menu",
      })
    }
  }

  return (
    <section id="menu" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-10">

        <FadeIn>
          <div className="mb-16 text-center">

            <p className="text-[11px] tracking-[0.4em] text-gold/70">
              AGING HAIR CARE MENU
            </p>

            <h2 className="mt-4 text-[clamp(1.7rem,5vw,2.9rem)] leading-[1.8] tracking-[0.08em] text-foreground">
              年齢による髪と頭皮の変化へ。
              <br />
              印象まで整える専門ケア
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-muted-foreground">
              分け目・白髪・艶不足・ボリューム低下など。
              <br />
              現在の頭皮環境と髪質を見極めながら、
              <br className="sm:hidden" />
              お一人おひとりに合わせた
              本格ケアをご提供しています。
            </p>

          </div>
        </FadeIn>

        <div className="flex flex-col gap-14">

          {menus.map((menu, idx) => (
            <FadeIn key={menu.id} delay={idx * 0.1}>

              <div className="overflow-hidden rounded-[30px] border border-gold/20 bg-card shadow-sm">

                <div className="relative h-60 w-full overflow-hidden">
                  <Image
                    src={menu.image}
                    alt={menu.tab}
                    fill
                    className="object-cover transition duration-700 hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                <div className="p-6 sm:p-8">

                  <div className="text-center sm:text-left">

                    <p className="text-[10px] tracking-[0.3em] text-gold/70">
                      {menu.enTitle.toUpperCase()}
                    </p>

                    <h3 className="mt-3 text-[clamp(1.5rem,4.5vw,2.1rem)] leading-[1.7] tracking-[0.06em] text-foreground">
                      {menu.tab.replace("ヘッドスパ", "")}
                      <br />
                      ヘッドスパ
                    </h3>

                  </div>

                  <div className="mt-7 space-y-4 text-[14px] leading-[2.1] text-muted-foreground">

                    {menu.descriptionParagraphs.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}

                  </div>

                  <div className="mt-10 space-y-5">

                    {menu.items.map((item, i) => (
                      <div
                        key={i}
                        className={`rounded-2xl border p-6 transition ${
                          i === 1
                            ? "border-gold bg-gold/5"
                            : "border-border/30"
                        }`}
                      >

                        {i === 1 && (
                          <p className="mb-3 text-[10px] tracking-[0.3em] text-gold">
                            MOST POPULAR
                          </p>
                        )}

                        <p className="text-[16px] font-medium leading-7 text-foreground">
                          {item.name}
                        </p>

                        <p className="mt-2 text-xs text-muted-foreground">
                          {item.detail} ／ {item.duration}
                        </p>

                        <p className="mt-4 text-[13px] leading-[2] text-muted-foreground">
                          頭皮環境・髪質・印象変化へ。
                          <br />
                          年齢による変化を見据えながら、
                          <br className="sm:hidden" />
                          本質的なケアをご提供します。
                        </p>

                        <div className="mt-5 flex items-end justify-between gap-4">

                          <p className="text-2xl font-semibold tracking-[0.03em] text-foreground">
                            {item.price}
                          </p>

                        </div>

                        <a
                          href={COUBIC_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={handleReserveClick}
                          className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-gold px-5 py-3 text-sm font-medium tracking-[0.08em] text-black transition hover:opacity-90"
                        >
                          ご予約枠を確認する
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

          <div className="mt-20 rounded-[32px] border border-gold/20 bg-card px-6 py-12 text-center shadow-sm">

            <p className="text-[10px] tracking-[0.35em] text-gold/70">
              PRIVATE RESERVE
            </p>

            <h3 className="mt-4 text-[clamp(1.45rem,4vw,2.2rem)] leading-[1.8] tracking-[0.08em] text-foreground">
              完全個室・一日三名限定で、
              <br />
              丁寧に向き合う。
            </h3>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-muted-foreground">
              分け目・白髪・ボリューム低下・頭皮環境など。
              <br />
              現在の状態を確認しながら、
              <br className="sm:hidden" />
              最適なケアをご提案しております。
            </p>

            <a
              href={COUBIC_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleReserveClick}
              className="mt-8 inline-flex min-w-[280px] items-center justify-center rounded-full bg-gold px-8 py-3.5 text-sm font-medium tracking-[0.08em] text-black transition hover:opacity-90"
            >
              初回の空き状況を見る
            </a>

            <p className="mt-5 text-xs text-muted-foreground">
              完全予約制｜福岡市西区｜ヘッドスパ専門店
            </p>

          </div>

        </FadeIn>

      </div>
    </section>
  )
}
