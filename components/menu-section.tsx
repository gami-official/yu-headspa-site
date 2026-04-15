"use client"

import Image from "next/image"
import Link from "next/link"
import { FadeIn } from "@/components/fade-in"
import { menus } from "@/lib/menu-data"

const COUBIC_URL = "https://coubic.com/yuheadspa/services"
const LINE_URL = "https://lin.ee/7hso3k1"

function getMenuPriority(menu: (typeof menus)[number]) {
  if (menu.id === "scalp") return 0
  if (menu.id === "color") return 1
  return 2
}

function getCatch(menu: (typeof menus)[number]) {
  if (menu.id === "scalp") {
    return "抜け毛・薄毛・分け目・ボリューム不足が気になる方へ"
  }

  if (menu.id === "color") {
    return "白髪染め・頭皮負担・将来の髪が気になる方へ"
  }

  return "深いリラックスと疲労ケアを求める方へ"
}

function getBadge(menu: (typeof menus)[number]) {
  if (menu.id === "scalp") return "人気No.1"
  if (menu.id === "color") return "PREMIUM CARE"
  return "RELAXATION"
}

function getCardStyle(menu: (typeof menus)[number]) {
  if (menu.id === "scalp") {
    return "border border-gold/50 bg-card shadow-[0_12px_40px_rgba(0,0,0,0.12)]"
  }

  if (menu.id === "color") {
    return "border border-gold/25 bg-card"
  }

  return "border border-border/30 bg-card"
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

            <h2 className="text-xl leading-relaxed tracking-[0.14em] text-foreground sm:text-2xl">
              お悩み別に選べる本格ヘッドスパ
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">
              抜け毛・薄毛・白髪・疲労感など、
              お悩みに合わせて最適な施術をご提案します。
              育毛ヘッドスパを中心に、ヘアカラーヘッドスパ、
              リラクゼーションヘッドスパまで対応しています。
            </p>
          </div>
        </FadeIn>

        <div className="mb-8 grid gap-4 md:grid-cols-3">
          <a
            href="#scalp"
            className="rounded-2xl border border-gold/35 bg-card px-5 py-5 transition hover:border-gold/55"
          >
            <p className="text-[10px] tracking-[0.28em] text-gold/70">SCALP CARE</p>
            <h3 className="mt-2 text-base tracking-[0.12em] text-foreground">
              育毛ヘッドスパ
            </h3>
            <p className="mt-2 text-xs leading-6 text-muted-foreground">
              抜け毛・薄毛・分け目が気になる方へ
            </p>
          </a>

          <a
            href="#color"
            className="rounded-2xl border border-gold/25 bg-card px-5 py-5 transition hover:border-gold/45"
          >
            <p className="text-[10px] tracking-[0.28em] text-gold/70">HAIR COLOR</p>
            <h3 className="mt-2 text-base tracking-[0.12em] text-foreground">
              ヘアカラーヘッドスパ
            </h3>
            <p className="mt-2 text-xs leading-6 text-muted-foreground">
              頭皮を守りながらカラーも整えたい方へ
            </p>
          </a>

          <a
            href="#relaxation"
            className="rounded-2xl border border-border/30 bg-card px-5 py-5 transition hover:border-gold/35"
          >
            <p className="text-[10px] tracking-[0.28em] text-gold/70">RELAXATION</p>
            <h3 className="mt-2 text-base tracking-[0.12em] text-foreground">
              リラクゼーションヘッドスパ
            </h3>
            <p className="mt-2 text-xs leading-6 text-muted-foreground">
              疲れを癒しながら、まずは心地よく体験したい方へ
            </p>
          </a>
        </div>

        <div className="flex flex-col gap-6 lg:gap-8">
          {sortedMenus.map((menu, idx) => (
            <FadeIn key={menu.id} delay={idx * 0.08}>
              <div id={menu.id}>
                <div
                  className={`relative overflow-hidden rounded-2xl transition-all duration-500 hover:shadow-[0_14px_40px_rgba(0,0,0,0.10)] ${getCardStyle(menu)}`}
                >
                  <div className="flex flex-col sm:flex-row">
                    {menu.image && (
                      <div className="relative h-64 w-full sm:w-72">
                        <Image
                          src={menu.image}
                          alt={menu.tab}
                          fill
                          className="object-cover brightness-90"
                          sizes="(max-width: 640px) 100vw, 288px"
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

                        <h3 className="text-lg leading-relaxed tracking-[0.1em] text-foreground">
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
                          <div key={item.name} className="flex justify-between gap-3 py-1.5">
                            <div className="min-w-0">
                              <span className="text-[12px] text-foreground/70">
                                {item.name}
                              </span>
                              {item.detail && (
                                <p className="mt-0.5 text-[10px] leading-5 text-muted-foreground">
                                  {item.detail}
                                </p>
                              )}
                            </div>

                            <div className="shrink-0 text-right">
                              <div className="flex items-baseline gap-2">
                                <span className="text-[11px] text-muted-foreground">
                                  {item.duration}
                                </span>
                                <span className="text-sm text-gold">
                                  {item.price}
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}

                        <div className="mt-4">
                          <a
                            href={COUBIC_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex w-full justify-center rounded-xl bg-gold px-5 py-3 text-sm font-medium text-black transition hover:opacity-90"
                          >
                            このメニューを予約する
                          </a>
                        </div>

                        <div className="mt-3 text-center">
                          <Link
                            href={`/menu/${menu.id}`}
                            className="text-xs text-foreground/60 transition hover:text-gold"
                          >
                            詳細を見る
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <div className="mt-12 rounded-2xl border border-gold/20 bg-card px-6 py-8 text-center">
            <p className="text-sm leading-7 text-muted-foreground">
              抜け毛・薄毛・白髪・頭皮の違和感など、
              早い段階でのケアが将来の髪につながります。
            </p>

            <p className="mt-2 text-xs text-foreground/50">
              ※1日3名限定のため、早めのご予約をおすすめしています
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <a
                href={COUBIC_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gold px-6 py-3 text-sm font-medium text-black transition hover:opacity-90"
              >
                残り枠わずか｜ご予約はこちら
              </a>

              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-gold/25 px-6 py-3 text-sm text-foreground/70 transition hover:border-gold/45 hover:text-foreground"
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
