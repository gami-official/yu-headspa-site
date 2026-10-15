
"use client"

import Image from "next/image"
import Link from "next/link"
import { FadeIn } from "@/components/fade-in"
import { menus } from "@/lib/menu-data"

const RESERVE_URL =
  "https://headspayu.stores.jp/reserve/yuheadspa/services#pageContent"

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
  }
}

const menuIntroductions: Record<
  string,
  {
    catchphrase: string
    description: string
    recommended: string
    badge: string
  }
> = {
  scalp: {
    catchphrase: "未来の髪を考える、本格頭皮ケア。",
    description:
      "頭皮の状態やお悩みに合わせて選べる、3つの育毛ヘッドスパ。ヒト幹細胞由来成分を取り入れたケアで、健やかな頭皮環境を目指します。",
    recommended: "髪や頭皮の変化が気になり始めた方",
    badge: "SCALP CARE",
  },
  color: {
    catchphrase: "髪色も、頭皮も、美しく。",
    description:
      "頭皮への配慮を大切にしたゼロテクニックカラーと、心地よいウェットヘッドスパ。美しい髪色と上質なケアを一度に。",
    recommended: "髪色を楽しみながら頭皮もケアしたい方",
    badge: "HAIR COLOR",
  },
  relaxation: {
    catchphrase: "自分をいたわる、贅沢な90分。",
    description:
      "アロマクリーム、スチーム、ホットストーン。水と温もりに包まれる、本格ウェットヘッドスパをご堪能ください。",
    recommended: "日常を離れて、ゆったり過ごしたい方",
    badge: "RELAXATION",
  },
}

const courseDetails: Record<
  string,
  {
    name: string
    note?: string
    price: string
  }[]
> = {
  scalp: [
    {
      name: "Light｜中濃度",
      price: "¥18,000",
    },
    {
      name: "Standard｜高濃度",
      price: "¥21,000",
    },
    {
      name: "Premium",
      note: "超高濃度・使用量多め",
      price: "¥35,000",
    },
  ],
  color: [
    {
      name: "ヘアカラーコース①",
      price: "¥21,000",
    },
    {
      name: "ヘアカラーコース②",
      price: "¥26,000",
    },
  ],
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
      className="scroll-mt-20 bg-background py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-6xl px-5 lg:px-10">
        <FadeIn>
          <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-11 lg:mb-12">
            <p className="text-[10px] tracking-[0.28em] text-gold/80">
              HEAD SPA MENU
            </p>

            <h2 className="mt-4 text-[clamp(1.45rem,5vw,2.5rem)] leading-[1.65] tracking-[0.02em] text-foreground">
              <span className="block sm:inline">
                あなたに合う、
              </span>
              <span className="block sm:inline">
                特別な90分。
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-[13px] leading-7 text-muted-foreground sm:mt-5 sm:text-sm sm:leading-8">
              髪と頭皮を整える時間も、
              <br className="sm:hidden" />
              心をほどく時間も。
              <br />
              目的に合わせた3つのヘッドスパを
              <br className="sm:hidden" />
              ご用意しました。
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-5 lg:grid-cols-3 lg:gap-6">
          {menus.map((menu, index) => {
            const intro = menuIntroductions[menu.id]
            const lowestPrice =
              menu.items[menu.items.length - 1]?.price
            const courses = courseDetails[menu.id]

            return (
              <FadeIn key={menu.id} delay={index * 0.06}>
                <article className="flex h-full flex-col overflow-hidden rounded-[22px] border border-gold/20 bg-card shadow-sm">
                  <div className="relative h-44 w-full overflow-hidden sm:h-52 lg:h-48">
                    <Image
                      src={menu.image}
                      alt={menu.tab}
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

                    {intro?.badge && (
                      <span className="absolute left-4 top-4 rounded-full border border-[#d6b36a]/60 bg-black/65 px-3 py-1.5 text-[10px] tracking-wider text-[#d6b36a]">
                        {intro.badge}
                      </span>
                    )}

                    <div className="absolute bottom-4 left-5 right-5">
                      <p className="text-[10px] tracking-[0.12em] text-[#d6b36a]">
                        {menu.enTitle.toUpperCase()}
                      </p>

                      <h3 className="mt-2 text-lg leading-7 text-white sm:text-xl">
                        {menu.tab}
                      </h3>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <p className="text-[15px] font-medium leading-7 tracking-[0.01em] text-foreground sm:text-base">
                      {intro?.catchphrase ?? menu.tab}
                    </p>

                    <p className="mt-3 text-[13px] leading-[1.9] text-muted-foreground sm:text-sm">
                      {intro?.description ??
                        menu.descriptionParagraphs[0]}
                    </p>

                    {intro && (
                      <div className="mt-5 rounded-xl border border-gold/15 bg-gold/5 px-4 py-3">
                        <p className="text-[10px] tracking-[0.08em] text-gold">
                          こんな方におすすめ
                        </p>

                        <p className="mt-1 text-[12px] leading-6 text-foreground sm:text-xs">
                          {intro.recommended}
                        </p>
                      </div>
                    )}

                    <div className="mt-6 border-t border-border/40 pt-5">
                      <p className="text-xs text-muted-foreground">
                        施術時間 90分 ／ 税込
                      </p>

                      <div className="mt-2 flex flex-wrap items-baseline gap-2">
                        <span className="text-2xl font-medium text-foreground">
                          {lowestPrice}
                        </span>

                        {menu.items.length > 1 && (
                          <span className="text-sm text-muted-foreground">
                            〜
                          </span>
                        )}
                      </div>

                      <p className="mt-2 text-xs leading-6 text-muted-foreground">
                        {menu.items.length === 1
                          ? "1コースをご用意"
                          : `${menu.items.length}つのコースから選べます`}
                      </p>
                    </div>

                    {courses && (
                      <div className="mt-4 rounded-xl border border-gold/20 bg-gold/5 px-4 py-4">
                        <p className="mb-3 text-[10px] tracking-[0.14em] text-gold">
                          {courses.length} COURSES
                        </p>

                        <div className="space-y-3 text-[12px] leading-6 text-muted-foreground">
                          {courses.map((course) => (
                            <div
                              key={course.name}
                              className="flex items-start justify-between gap-3"
                            >
                              <span>
                                {course.name}

                                {course.note && (
                                  <>
                                    <br />
                                    <span className="text-[11px] text-muted-foreground/80">
                                      {course.note}
                                    </span>
                                  </>
                                )}
                              </span>

                              <span className="shrink-0">
                                {course.price}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="mt-auto space-y-3 pt-7">
                      <Link
                        href={`/menu/${menu.id}`}
                        className="flex min-h-12 w-full items-center justify-center rounded-full border border-gold/70 px-4 py-3 text-[13px] font-medium text-gold transition hover:bg-gold hover:text-background sm:text-sm"
                      >
                        コースの違い・詳細を見る →
                      </Link>

                      <a
                        href={RESERVE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() =>
                          trackReserve(`menu_${menu.id}`)
                        }
                        className="flex min-h-12 w-full items-center justify-center rounded-full bg-gold px-4 py-3 text-[13px] font-medium text-background transition hover:opacity-90 sm:text-sm"
                      >
                        空き状況・予約はこちら
                      </a>
                    </div>
                  </div>
                </article>
              </FadeIn>
            )
          })}
        </div>

        <FadeIn>
          <div className="mt-8 text-center sm:mt-10">
            <p className="text-[13px] leading-7 text-muted-foreground sm:text-sm sm:leading-8">
              コース選びに迷われた方は、
              <br className="sm:hidden" />
              詳細ページで特徴をご確認ください。
            </p>

            <p className="mt-3 text-xs leading-7 text-muted-foreground sm:mt-4">
              完全予約制・完全個室 ／ 1日3名限定
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
