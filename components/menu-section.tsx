
"use client"

import Image from "next/image"
import Link from "next/link"
import { FadeIn } from "@/components/fade-in"
import { menus } from "@/lib/menu-data"

const RESERVE_URL =
  "https://headspayu.stores.jp/reserve/yuheadspa/services#pageContent"

const GIFT_STORE_URL =
  "https://gamistore.base.shop/items/144607972"

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
  }
}

type MenuIntroduction = {
  catchphrase: string
  description: string
  recommended: string
  badge: string
}

type CourseDetail = {
  name: string
  note?: string
  price: string
}

const menuImages: Record<string, string> = {
  scalp: "/images/menu-scalp-care.webp",
  color: "/images/menu-hair-color.webp",
  relaxation: "/images/menu-relaxation.webp",
}

const menuIntroductions: Record<string, MenuIntroduction> = {
  scalp: {
    catchphrase: "これからの髪に、妥協しない。",
    description:
      "髪や頭皮の変化と向き合うための、本格育毛ヘッドスパ。ヒト幹細胞由来成分を取り入れた3つのコースから、ご自身の目的に合わせたケアをお選びいただけます。",
    recommended:
      "髪のボリュームや頭皮環境が気になる方。これからの髪を大切にしたい方。",
    badge: "PREMIUM SCALP CARE",
  },

  color: {
    catchphrase: "髪色も、頭皮も、美しく。",
    description:
      "頭皮への配慮を大切にしたゼロテクニックカラーと、本格ウェットヘッドスパ。美しい髪色を楽しみながら、頭皮にも向き合う上質なケアを。",
    recommended:
      "髪色の美しさだけでなく、頭皮への配慮や施術時間の質も大切にしたい方。",
    badge: "LUXURY HAIR COLOR",
  },

  relaxation: {
    catchphrase: "静けさに身を委ねる、贅沢な90分。",
    description:
      "アロマクリーム、スチーム、ホットストーン。水と温もりに包まれる、本格ウェットヘッドスパ。",
    recommended:
      "日常から離れ、静かな時間を過ごしたい方。",
    badge: "RELAXATION",
  },
}

const courseDetails: Record<string, CourseDetail[]> = {
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
      name: "Hair Color Head Spa",
      note: "ゼロテクニックカラー＋ウェットヘッドスパ",
      price: "¥21,000",
    },
    {
      name: "Hair Color Head Spa + Scalp Care",
      note: "高濃度ヒト幹細胞ケア Standard付き",
      price: "¥26,000",
    },
  ],
}

export function MenuSection() {
  const trackClick = (
    event: string,
    location: string
  ) => {
    window.dataLayer = window.dataLayer || []

    window.dataLayer.push({
      event,
      click_location: location,
      ...(event === "reserve_click"
        ? { reserve_location: location }
        : {}),
    })
  }

  // 育毛・カラーを優先して表示
  const primaryMenus = ["scalp", "color"]
    .map((id) => menus.find((menu) => menu.id === id))
    .filter((menu): menu is (typeof menus)[number] =>
      Boolean(menu)
    )

  const secondaryMenus = menus.filter(
    (menu) => !["scalp", "color"].includes(menu.id)
  )

  const renderMenu = (
    menu: (typeof menus)[number],
    index: number,
    featured: boolean
  ) => {
    const intro = menuIntroductions[menu.id]
    const courses = courseDetails[menu.id]

    const lowestPrice =
      courses?.[0]?.price ??
      menu.items[menu.items.length - 1]?.price

    const imageSrc =
      menuImages[menu.id] ?? menu.image

    return (
      <FadeIn key={menu.id} delay={index * 0.06}>
        <article
          className={`flex h-full flex-col overflow-hidden rounded-[22px] border bg-card shadow-sm ${
            featured
              ? "border-gold/40"
              : "border-gold/15"
          }`}
        >
          <div
            className={`relative w-full overflow-hidden ${
              featured
                ? "h-56 sm:h-64 lg:h-72"
                : "h-44 sm:h-52"
            }`}
          >
            <Image
              src={imageSrc}
              alt={menu.tab}
              fill
              sizes={
                featured
                  ? "(min-width: 1024px) 50vw, 100vw"
                  : "100vw"
              }
              className="object-cover transition-transform duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {intro?.badge && (
              <span className="absolute left-4 top-4 rounded-full border border-[#d6b36a]/60 bg-black/65 px-3 py-1.5 text-[10px] tracking-wider text-[#d6b36a]">
                {intro.badge}
              </span>
            )}

            <div className="absolute bottom-5 left-5 right-5">
              <h3
                className={`leading-8 text-white ${
                  featured
                    ? "text-xl sm:text-2xl"
                    : "text-lg"
                }`}
              >
                {menu.tab}
              </h3>
            </div>
          </div>

          <div className="flex flex-1 flex-col p-5 sm:p-7">
            <p className="text-base font-medium leading-8 tracking-[0.02em] text-foreground sm:text-lg">
              {intro?.catchphrase ?? menu.tab}
            </p>

            <p className="mt-4 text-[13px] leading-[2] text-muted-foreground sm:text-sm">
              {intro?.description ??
                menu.descriptionParagraphs[0]}
            </p>

            {intro && (
              <div className="mt-6 rounded-xl border border-gold/15 bg-gold/5 px-4 py-4">
                <p className="text-[10px] tracking-[0.12em] text-gold">
                  RECOMMENDED FOR
                </p>

                <p className="mt-2 text-xs leading-7 text-foreground">
                  {intro.recommended}
                </p>
              </div>
            )}

            <div className="mt-7 border-t border-border/40 pt-5">
              <p className="text-xs text-muted-foreground">
                施術時間 90分 ／ 税込
              </p>

              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-2xl font-medium text-foreground sm:text-3xl">
                  {lowestPrice}
                </span>

                {menu.items.length > 1 && (
                  <span className="text-sm text-muted-foreground">
                    〜
                  </span>
                )}
              </div>
            </div>

            {courses && (
              <div className="mt-5 rounded-xl border border-gold/20 bg-gold/5 p-4 sm:p-5">
                <p className="mb-4 text-[10px] tracking-[0.16em] text-gold">
                  {courses.length} COURSES
                </p>

                <div className="space-y-4">
                  {courses.map((course) => (
                    <div
                      key={course.name}
                      className="flex items-start justify-between gap-3"
                    >
                      <div className="min-w-0 flex-1">
                        <p className="text-xs leading-6 text-foreground">
                          {course.name}
                        </p>

                        {course.note && (
                          <p className="mt-1 text-[11px] leading-5 text-muted-foreground">
                            {course.note}
                          </p>
                        )}
                      </div>

                      <span className="shrink-0 text-xs leading-6 text-gold">
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
                className="flex min-h-12 w-full items-center justify-center rounded-full border border-gold/70 px-4 py-3 text-center text-sm font-medium text-gold transition hover:bg-gold hover:text-background"
              >
                コースの違い・詳細を見る →
              </Link>

              <a
                href={RESERVE_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackClick(
                    "reserve_click",
                    `menu_${menu.id}`
                  )
                }
                className="flex min-h-14 w-full items-center justify-center rounded-full bg-gold px-4 py-3 text-center text-sm font-medium text-background transition hover:opacity-90"
              >
                空き状況・予約はこちら ↗
              </a>
            </div>
          </div>
        </article>
      </FadeIn>
    )
  }

  return (
    <section
      id="menu"
      className="scroll-mt-20 bg-background py-14 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-5 lg:px-10">
        <FadeIn>
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-[10px] tracking-[0.28em] text-gold/80">
              PREMIUM HEAD SPA MENU
            </p>

            <h2 className="mt-5 text-[clamp(1.6rem,5vw,2.8rem)] leading-[1.65] tracking-[0.03em] text-foreground">
              髪の美しさに、
              <br />
              妥協しないという選択。
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-sm leading-8 text-muted-foreground">
              髪色を美しく保つこと。
              <br />
              これからの髪と向き合うこと。
              <br />
              そのどちらにも、上質な時間を。
            </p>

            <p className="mt-6 text-xs tracking-[0.12em] text-gold">
              完全個室・完全予約制・1日3名限定
            </p>
          </div>
        </FadeIn>

        {/* 主力メニュー */}
        <div className="grid gap-7 lg:grid-cols-2">
          {primaryMenus.map((menu, index) =>
            renderMenu(menu, index, true)
          )}
        </div>

        {/* ギフトへの導線 */}
        <FadeIn>
          <div className="my-12 rounded-[24px] border border-[#d6b36a]/35 bg-[#111111] px-6 py-12 text-center text-white sm:my-16 sm:px-10">
            <p className="text-[10px] tracking-[0.25em] text-[#d6b36a]">
              THE GIFT OF LUXURY
            </p>

            <h3 className="mt-5 text-xl leading-[1.8] tracking-[0.04em] sm:text-2xl">
              大切な方へ、
              <br />
              上質なヘッドスパ体験を。
            </h3>

            <p className="mx-auto mt-5 max-w-lg text-sm leading-8 text-white/75">
              誕生日、記念日、感謝を伝えたい日に。
              <br />
              ありきたりではない、
              <br className="sm:hidden" />
              特別な贈り物を。
            </p>

            <a
              href={GIFT_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackClick("gift_click", "menu_gift")
              }
              className="mx-auto mt-8 flex min-h-14 w-full max-w-sm items-center justify-center rounded-full bg-[#d6b36a] px-6 py-4 text-sm font-medium tracking-[0.05em] text-black transition hover:bg-[#e5c784]"
            >
              ギフトカードを見る ↗
            </a>
          </div>
        </FadeIn>

        {/* その他のメニューは控えめに掲載 */}
        {secondaryMenus.length > 0 && (
          <div className="mx-auto max-w-2xl">
            <FadeIn>
              <div className="mb-8 text-center">
                <p className="text-[10px] tracking-[0.2em] text-gold/80">
                  OTHER HEAD SPA
                </p>

                <h3 className="mt-3 text-lg text-foreground">
                  その他のヘッドスパ
                </h3>
              </div>
            </FadeIn>

            <div className="grid gap-6">
              {secondaryMenus.map((menu, index) =>
                renderMenu(menu, index, false)
              )}
            </div>
          </div>
        )}

        <FadeIn>
          <div className="mt-12 text-center">
            <p className="text-xs leading-7 text-muted-foreground">
              コースの詳細は各メニューページをご確認ください。
            </p>

            <p className="mt-3 text-xs leading-7 text-muted-foreground">
              完全予約制・完全個室 ／ 1日3名限定
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
