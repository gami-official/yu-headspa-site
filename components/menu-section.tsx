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
    <section id="menu" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-10">
        <FadeIn>
          <div className="mb-16 text-center">
            <p className="text-[11px] tracking-[0.4em] text-gold/70">
              MENU & RESERVE
            </p>

            <h2 className="mt-4 text-[clamp(1.7rem,5vw,2.9rem)] leading-[1.8] tracking-[0.08em] text-foreground">
              お悩みに合わせて選べる、
              <br />
              頭皮と髪の専門ケア
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-muted-foreground">
              分け目・白髪・艶不足・ボリューム低下へ。
              <br />
              初めての方も、現在の状態に合わせて
              <br className="sm:hidden" />
              最適なメニューをご提案いたします。
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
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
                          このメニューの空き状況を見る
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
              迷った方は、
              <br />
              当日カウンセリングでご相談ください
            </h3>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-muted-foreground">
              完全個室・一日三名限定。
              <br />
              頭皮や髪の状態を確認しながら、
              <br className="sm:hidden" />
              今のあなたに合うケアをご提案します。
            </p>

            <a
              href={COUBIC_URL}
              onClick={(e) => handleReserveClick(e, "menu_bottom")}
              className="mt-8 inline-flex min-w-[280px] items-center justify-center rounded-full bg-gold px-8 py-3.5 text-sm font-medium tracking-[0.08em] text-black transition hover:opacity-90"
            >
              初回の空き状況を見る
            </a>

            <p className="mt-5 text-xs text-muted-foreground">
              Google口コミ100件突破｜完全個室｜駐車場2台完備
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
