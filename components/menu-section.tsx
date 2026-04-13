"use client"

import Image from "next/image"
import Link from "next/link"
import { FadeIn } from "@/components/fade-in"
import { menus } from "@/lib/menu-data"

function getMenuPriority(menu: (typeof menus)[number]) {
  const text = `${menu.id} ${menu.tab} ${menu.enTitle}`.toLowerCase()

  if (
    text.includes("scalp") ||
    text.includes("care") ||
    text.includes("育毛") ||
    text.includes("頭皮")
  ) {
    return 0
  }

  if (text.includes("color") || text.includes("カラー")) {
    return 1
  }

  return 2
}

function getMenuAnchor(menu: (typeof menus)[number]) {
  const text = `${menu.id} ${menu.tab} ${menu.enTitle}`.toLowerCase()

  if (
    text.includes("scalp") ||
    text.includes("care") ||
    text.includes("育毛") ||
    text.includes("頭皮")
  ) {
    return "ikumou"
  }

  if (text.includes("color") || text.includes("カラー")) {
    return "color"
  }

  return "relaxation"
}

function getMenuCatch(menu: (typeof menus)[number]) {
  const text = `${menu.id} ${menu.tab} ${menu.enTitle}`.toLowerCase()

  if (
    text.includes("scalp") ||
    text.includes("care") ||
    text.includes("育毛") ||
    text.includes("頭皮")
  ) {
    return "抜け毛・薄毛・分け目・ボリューム不足が気になる方へ"
  }

  if (text.includes("color") || text.includes("カラー")) {
    return "白髪染め・ダメージ・頭皮負担が気になる方へ"
  }

  return "深いリラックスと疲労ケアを求める方へ"
}

function getMenuBadge(menu: (typeof menus)[number]) {
  const text = `${menu.id} ${menu.tab} ${menu.enTitle}`.toLowerCase()

  if (
    text.includes("scalp") ||
    text.includes("care") ||
    text.includes("育毛") ||
    text.includes("頭皮")
  ) {
    return "人気No.1"
  }

  if (text.includes("color") || text.includes("カラー")) {
    return "高単価メニュー"
  }

  return "リラックス"
}

function isScalpMenu(menu: (typeof menus)[number]) {
  const text = `${menu.id} ${menu.tab} ${menu.enTitle}`.toLowerCase()

  return (
    text.includes("scalp") ||
    text.includes("care") ||
    text.includes("育毛") ||
    text.includes("頭皮")
  )
}

function getQuickLinkDescription(type: "scalp" | "color" | "relaxation") {
  if (type === "scalp") {
    return "抜け毛・薄毛・分け目・頭皮環境が気になる方に"
  }

  if (type === "color") {
    return "白髪染め・ダメージ・頭皮負担が気になる方に"
  }

  return "深くリラックスしたい方、疲労を癒したい方に"
}

function getQuickLinkSub(type: "scalp" | "color" | "relaxation") {
  if (type === "scalp") {
    return "福岡市で希少な本格育毛ヘッドスパ"
  }

  if (type === "color") {
    return "カラーしながら頭皮ケアできる希少施術"
  }

  return "完全個室で受ける上質な癒し時間"
}

export function MenuSection() {
  const sortedMenus = [...menus].sort((a, b) => getMenuPriority(a) - getMenuPriority(b))

  return (
    <section id="menu" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-10">
        <FadeIn>
          <div className="mb-10 flex flex-col items-center lg:mb-14">
            <span className="mb-3 text-xs tracking-[0.45em] text-gold/70 sm:text-sm">
              MENU
            </span>
            <h2 className="text-center text-xl tracking-[0.2em] text-foreground sm:text-2xl">
              抜け毛・薄毛・頭皮悩みから選ぶ専門メニュー
            </h2>
            <p className="mt-4 max-w-2xl text-center text-sm leading-7 text-muted-foreground sm:text-base">
              育毛ヘッドスパを中心に、ヘアカラーヘッドスパ、リラクゼーションヘッドスパまで。
              お悩みや目的に合わせて、最適なメニューをご案内します。
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.05}>
          <div className="mb-10 grid gap-4 md:grid-cols-3 lg:mb-14">
            <a
              href="#ikumou"
              className="group rounded-2xl border border-gold/30 bg-card px-5 py-5 transition-all duration-300 hover:border-gold/50 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
            >
              <p className="mb-2 text-[10px] tracking-[0.3em] text-gold/70">SCALP CARE</p>
              <h3 className="text-sm tracking-[0.12em] text-foreground sm:text-base">
                育毛ヘッドスパ
              </h3>
              <p className="mt-2 text-xs leading-6 text-muted-foreground">
                {getQuickLinkDescription("scalp")}
              </p>
              <p className="mt-2 text-[11px] leading-6 tracking-[0.08em] text-gold/80">
                {getQuickLinkSub("scalp")}
              </p>
            </a>

            <a
              href="#color"
              className="group rounded-2xl border border-gold/20 bg-card px-5 py-5 transition-all duration-300 hover:border-gold/50 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
            >
              <p className="mb-2 text-[10px] tracking-[0.3em] text-gold/70">HAIR COLOR</p>
              <h3 className="text-sm tracking-[0.12em] text-foreground sm:text-base">
                ヘアカラーヘッドスパ
              </h3>
              <p className="mt-2 text-xs leading-6 text-muted-foreground">
                {getQuickLinkDescription("color")}
              </p>
              <p className="mt-2 text-[11px] leading-6 tracking-[0.08em] text-gold/80">
                {getQuickLinkSub("color")}
              </p>
            </a>

            <a
              href="#relaxation"
              className="group rounded-2xl border border-border/30 bg-card px-5 py-5 transition-all duration-300 hover:border-gold/40 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
            >
              <p className="mb-2 text-[10px] tracking-[0.3em] text-gold/70">RELAXATION</p>
              <h3 className="text-sm tracking-[0.12em] text-foreground sm:text-base">
                リラクゼーションヘッドスパ
              </h3>
              <p className="mt-2 text-xs leading-6 text-muted-foreground">
                {getQuickLinkDescription("relaxation")}
              </p>
              <p className="mt-2 text-[11px] leading-6 tracking-[0.08em] text-gold/80">
                {getQuickLinkSub("relaxation")}
              </p>
            </a>
          </div>
        </FadeIn>

        <div className="flex flex-col gap-6 lg:gap-8">
          {sortedMenus.map((menu, idx) => {
            const anchor = getMenuAnchor(menu)
            const catchText = getMenuCatch(menu)
            const badge = getMenuBadge(menu)
            const highlighted = isScalpMenu(menu)

            return (
              <FadeIn key={menu.id} delay={idx * 0.08}>
                <div id={anchor}>
                  <Link href={`/menu/${menu.id}`} className="group block">
                    <div
                      className={`relative overflow-hidden rounded-2xl bg-card transition-all duration-500 hover:border-gold/50 hover:shadow-[0_14px_40px_rgba(0,0,0,0.10)] ${
                        highlighted
                          ? "border border-gold/50 shadow-[0_10px_40px_rgba(0,0,0,0.12)]"
                          : "border border-border/30"
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row">
                        {menu.image && (
                          <div className="relative h-64 w-full shrink-0 overflow-hidden sm:h-auto sm:w-64 lg:w-80">
                            <Image
                              src={menu.image}
                              alt={menu.tab}
                              fill
                              className="object-cover transition-transform duration-700 group-hover:scale-105"
                              sizes="(max-width: 640px) 100vw, 320px"
                            />
                            <div className="absolute inset-0 bg-black/25 transition-opacity duration-500 group-hover:bg-black/15" />
                          </div>
                        )}

                        <div className="flex flex-1 flex-col justify-between p-6 lg:p-8">
                          <div>
                            <div className="mb-4 flex items-start justify-between gap-4">
                              <div>
                                <span className="mb-2 inline-block rounded-full border border-gold/30 px-3 py-1 text-[10px] tracking-[0.2em] text-gold/80">
                                  {badge}
                                </span>
                                <p className="mb-2 text-[11px] tracking-[0.15em] text-muted-foreground">
                                  {catchText}
                                </p>
                                <h3 className="text-lg tracking-[0.12em] text-foreground lg:text-xl">
                                  {menu.tab}
                                </h3>
                                <p className="mt-1 text-[11px] tracking-[0.12em] text-muted-foreground">
                                  {menu.enTitle}
                                </p>
                              </div>

                              <span className="mt-1 shrink-0 text-gold/70 transition-transform duration-300 group-hover:translate-x-1">
                                →
                              </span>
                            </div>

                            <p className="mb-5 text-[13px] leading-7 tracking-[0.03em] text-muted-foreground line-clamp-3">
                              {menu.descriptionParagraphs[0]}
                            </p>
                          </div>

                          <div className="border-t border-border/20 pt-4">
                            <div className="mb-3 flex items-center justify-between">
                              <span className="text-[10px] tracking-[0.25em] text-gold/65">
                                PRICE MENU
                              </span>
                              <span className="text-[11px] text-muted-foreground">
                                詳細ページを見る
                              </span>
                            </div>

                            {menu.items.map((item) => (
                              <div
                                key={item.name}
                                className="flex items-baseline justify-between gap-3 py-1.5"
                              >
                                <span className="text-[11px] leading-5 tracking-[0.04em] text-foreground/75">
                                  {item.name}
                                  {item.detail && (
                                    <span className="ml-1 text-[10px] text-muted-foreground">
                                      ({item.detail})
                                    </span>
                                  )}
                                </span>

                                <div className="flex shrink-0 items-baseline gap-1.5">
                                  <span className="text-[10px] text-muted-foreground/60">
                                    {item.duration}/
                                  </span>
                                  <span className="text-base font-light tracking-[0.05em] text-gold">
                                    {item.price}
                                  </span>
                                  <span className="text-[9px] text-muted-foreground/40">
                                    税込
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </FadeIn>
            )
          })}
        </div>

        <FadeIn delay={0.2}>
          <div className="mt-12 rounded-2xl border border-gold/20 bg-card px-6 py-8 text-center lg:mt-16 lg:px-10">
            <p className="text-[10px] tracking-[0.35em] text-gold/70">SPECIAL CARE</p>
            <h3 className="mt-3 text-lg tracking-[0.15em] text-foreground sm:text-xl">
              どのメニューを選べばいいか迷う方へ
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">
              抜け毛・薄毛・白髪・頭皮の違和感・疲労感など、
              今のお悩みに合わせて最適なメニューをご提案します。
              まずはご予約いただくか、LINEからお気軽にご相談ください。
            </p>

            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="https://coubic.com/yuheadspa/services"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-w-[220px] items-center justify-center rounded-full border border-gold bg-gold px-6 py-3 text-sm tracking-[0.12em] text-background transition hover:opacity-90"
              >
                予約ページへ進む
              </a>
              <a
                href="https://lin.ee/7hso3k1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-w-[220px] items-center justify-center rounded-full border border-gold/40 bg-gold/10 px-6 py-3 text-sm tracking-[0.12em] text-foreground transition hover:bg-gold/20"
              >
                LINEで相談する
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
