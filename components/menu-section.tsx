"use client"

import Image from "next/image"
import Link from "next/link"
import { FadeIn } from "@/components/fade-in"
import { menus } from "@/lib/menu-data"

function getMenuPriority(menu: (typeof menus)[number]) {
  const text = `${menu.id} ${menu.tab} ${menu.enTitle}`.toLowerCase()

  if (text.includes("scalp") || text.includes("育毛") || text.includes("頭皮")) return 0
  if (text.includes("color") || text.includes("カラー")) return 1
  return 2
}

function isScalpMenu(menu: (typeof menus)[number]) {
  const text = `${menu.id} ${menu.tab}`.toLowerCase()
  return text.includes("scalp") || text.includes("育毛") || text.includes("頭皮")
}

function getCatch(menu: (typeof menus)[number]) {
  const text = `${menu.id} ${menu.tab}`.toLowerCase()

  if (text.includes("scalp") || text.includes("育毛"))
    return "抜け毛・薄毛・分け目・ボリューム不足が気になる方へ"

  if (text.includes("color") || text.includes("カラー"))
    return "白髪染め・ダメージ・頭皮負担が気になる方へ"

  return "深いリラックスと疲労ケアを求める方へ"
}

function getBadge(menu: (typeof menus)[number]) {
  const text = `${menu.id} ${menu.tab}`.toLowerCase()

  if (text.includes("scalp") || text.includes("育毛")) return "人気No.1"
  if (text.includes("color") || text.includes("カラー")) return "高単価メニュー"
  return "リラックス"
}

export function MenuSection() {
  const sortedMenus = [...menus].sort((a, b) => getMenuPriority(a) - getMenuPriority(b))

  return (
    <section id="menu" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-10">
        <FadeIn>
          <div className="mb-10 flex flex-col items-center text-center">
            <span className="mb-3 text-xs tracking-[0.45em] text-gold/70">
              MENU
            </span>

            <h2 className="text-xl tracking-[0.18em] text-foreground sm:text-2xl leading-relaxed">
              抜け毛・薄毛・頭皮悩みから選ぶ専門メニュー
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">
              育毛ヘッドスパを中心に、ヘアカラーヘッドスパ、リラクゼーションヘッドスパまで。
              お悩みに合わせて最適なメニューをご提案します。
            </p>
          </div>
        </FadeIn>

        <div className="flex flex-col gap-6 lg:gap-8">
          {sortedMenus.map((menu, idx) => {
            const highlighted = isScalpMenu(menu)

            return (
              <FadeIn key={menu.id} delay={idx * 0.08}>
                <Link href={`/menu/${menu.id}`} className="group block">
                  <div
                    className={`relative overflow-hidden rounded-2xl transition-all duration-500 ${
                      highlighted
                        ? "border border-gold/50 bg-card shadow-[0_12px_40px_rgba(0,0,0,0.12)]"
                        : "border border-border/30 bg-card"
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row">
                      {menu.image && (
                        <div className="relative h-64 w-full sm:w-72">
                          <Image
                            src={menu.image}
                            alt={menu.tab}
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}

                      <div className="flex flex-1 flex-col justify-between p-6 lg:p-8">
                        <div>
                          <span className="mb-2 inline-block rounded-full border border-gold/30 px-3 py-1 text-[10px] text-gold">
                            {getBadge(menu)}
                          </span>

                          <p className="mb-2 text-[11px] text-muted-foreground">
                            {getCatch(menu)}
                          </p>

                          <h3 className="text-lg tracking-[0.1em] leading-relaxed text-foreground">
                            {menu.tab}
                          </h3>

                          <p className="mt-1 text-[11px] text-muted-foreground">
                            {menu.enTitle}
                          </p>

                          <p className="mt-4 text-[13px] leading-7 text-muted-foreground">
                            {menu.descriptionParagraphs[0]}
                          </p>
                        </div>

                        <div className="mt-4 border-t pt-4">
                          {menu.items.map((item) => (
                            <div
                              key={item.name}
                              className="flex justify-between py-1"
                            >
                              <span className="text-[12px] text-foreground/70">
                                {item.name}
                              </span>

                              <span className="text-sm text-gold">
                                {item.price}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            )
          })}
        </div>

        {/* CTA */}
        <FadeIn delay={0.2}>
          <div className="mt-12 rounded-2xl border border-gold/20 bg-card px-6 py-8 text-center">
            <p className="text-sm text-muted-foreground">
              どのメニューを選べばいいか迷う方へ
            </p>

            <p className="mt-2 text-sm text-muted-foreground">
              初回は頭皮状態を確認しながら最適な施術をご提案します
            </p>

            <p className="mt-2 text-xs text-foreground/50">
              ※1日3名限定のため、早めのご予約をおすすめしています
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <a
                href="https://coubic.com/yuheadspa/services"
                target="_blank"
                className="rounded-full bg-gold px-6 py-3 text-black text-sm"
              >
                初回のご予約はこちら
              </a>

              <a
                href="https://lin.ee/7hso3k1"
                target="_blank"
                className="text-sm text-foreground/70"
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
