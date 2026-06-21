"use client"

import Image from "next/image"
import { FadeIn } from "@/components/fade-in"
import { menus } from "@/lib/menu-data"

const RESERVE_URL =
  "https://headspayu.stores.jp/reserve/yuheadspa/services#pageContent"

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
      window.open(RESERVE_URL, "_blank", "noopener,noreferrer")
    }, 300)
  }

  return (
    <section id="menu" className="bg-background py-12 lg:py-18">
      <div className="mx-auto max-w-5xl px-5 lg:px-10">
        <FadeIn>
          <div className="mb-9 text-center">
            <p className="text-[10px] tracking-[0.28em] text-gold/70">
              MENU
            </p>

            <h2 className="mt-4 text-[clamp(1.55rem,6vw,2.4rem)] leading-[1.45] tracking-[0.03em] text-foreground">
              メニューを選ぶ
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-muted-foreground">
              空き状況は予約ページで確認できます。
            </p>
          </div>
        </FadeIn>

        <div className="flex flex-col gap-7">
          {menus.map((menu, idx) => (
            <FadeIn key={menu.id} delay={idx * 0.06}>
              <div className="overflow-hidden rounded-[26px] border border-gold/20 bg-card shadow-sm">
                <div className="relative h-40 w-full overflow-hidden sm:h-52">
                  <Image
                    src={menu.image}
                    alt={menu.tab}
                    fill
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                </div>

                <div className="p-5 sm:p-7">
                  <div className="text-center sm:text-left">
                    <p className="text-[10px] tracking-[0.24em] text-gold/70">
                      {menu.enTitle.toUpperCase()}
                    </p>

                    <h3 className="mt-3 text-[clamp(1.25rem,5vw,1.8rem)] leading-[1.45] tracking-[0.03em] text-foreground">
                      {menu.tab}
                    </h3>
                  </div>

                  <div className="mt-6 space-y-3">
                    {menu.items.map((item, i) => (
                      <div
                        key={i}
                        className={`rounded-2xl border p-5 ${
                          i === 1
                            ? "border-gold bg-gold/5"
                            : "border-border/30"
                        }`}
                      >
                        {i === 1 && (
                          <p className="mb-2 text-[10px] tracking-[0.24em] text-gold">
                            MOST POPULAR
                          </p>
                        )}

                        <p className="text-[15px] font-medium leading-7 text-foreground">
                          {item.name}
                        </p>

                        <p className="mt-2 text-xs leading-6 text-muted-foreground">
                          {item.detail} ／ {item.duration}
                        </p>

                        <p className="mt-4 text-2xl font-semibold tracking-[0.03em] text-foreground">
                          {item.price}
                        </p>

                        <a
                          href={RESERVE_URL}
                          onClick={(e) =>
                            handleReserveClick(e, `menu_${menu.id}_${i + 1}`)
                          }
                          className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-gold px-5 py-3 text-sm font-medium tracking-[0.08em] text-black transition hover:opacity-90"
                        >
                          このコースを予約する
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
