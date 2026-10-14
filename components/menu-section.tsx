
"use client"

import Image from "next/image"
import Link from "next/link"
import { menus } from "@/lib/menu-data"

const RESERVE_URL =
  "https://headspayu.stores.jp/reserve/yuheadspa/services#pageContent"

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
  }
}

export function MenuSection() {
  const trackReserve = (location: string) => {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      event: "reserve_click",
      reserve_location: location,
    })
  }

  return (
    <section
      id="menu"
      className="scroll-mt-20 overflow-hidden bg-background py-14 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center sm:mb-14">
          <p className="text-xs tracking-[0.25em] text-gold">
            HEAD SPA MENU
          </p>

          <h2 className="mt-4 text-2xl font-medium leading-relaxed text-foreground sm:text-3xl">
            あなたに合ったヘッドスパを
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-8 text-muted-foreground sm:text-base">
            頭皮や髪のお悩み、リラックスしたい気持ちに合わせて
            3種類のヘッドスパをご用意しています。
            施術内容や料金を比較してお選びください。
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {menus.map((menu) => (
            <article
              key={menu.id}
              className="flex min-w-0 flex-col overflow-hidden rounded-2xl border border-gold/25 bg-card"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-zinc-900">
                <Image
                  src={menu.image}
                  alt={menu.tab}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute bottom-4 left-4 text-xs tracking-widest text-white">
                  {menu.enTitle}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="break-words text-lg font-semibold leading-8 text-foreground">
                  {menu.tab}
                </h3>

                <p className="mt-3 line-clamp-3 text-sm leading-7 text-muted-foreground">
                  {menu.descriptionParagraphs[0]}
                </p>

                <div className="mt-6 space-y-4 border-t border-border/50 pt-5">
                  {menu.items.map((item, index) => (
                    <div
                      key={`${menu.id}-${index}`}
                      className="min-w-0 border-b border-border/30 pb-4 last:border-b-0 last:pb-0"
                    >
                      <p className="break-words text-sm font-medium leading-6 text-foreground">
                        {item.name}
                      </p>

                      <p className="mt-1 break-words text-xs leading-6 text-muted-foreground">
                        {item.detail}
                      </p>

                      <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
                        <span className="text-xs text-muted-foreground">
                          {item.duration}
                        </span>
                        <span className="text-lg font-semibold text-gold">
                          {item.price}
                          <span className="ml-1 text-xs font-normal">
                            税込
                          </span>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-auto space-y-3 pt-7">
                  <Link
                    href={`/menu/${menu.id}`}
                    className="flex min-h-12 w-full items-center justify-center rounded-full border border-gold px-4 py-3 text-center text-sm font-medium text-gold transition hover:bg-gold/10"
                  >
                    施術内容・コース詳細を見る →
                  </Link>

                  <a
                    href={RESERVE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackReserve(`menu_${menu.id}`)
                    }
                    className="flex min-h-12 w-full items-center justify-center rounded-full bg-gold px-4 py-3 text-center text-sm font-medium text-black transition hover:opacity-90"
                  >
                    空き状況を確認・予約する →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-xs leading-7 text-muted-foreground">
          ※ ご予約は外部予約サイトに移動します。
          コース内容に迷われた方は、詳細ページをご覧ください。
        </p>
      </div>
    </section>
  )
}
