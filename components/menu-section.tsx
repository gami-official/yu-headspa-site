"use client"

import Image from "next/image"
import Link from "next/link"
import { FadeIn } from "@/components/fade-in"
import { menus } from "@/lib/menu-data"

const COUBIC_URL = "https://coubic.com/yuheadspa/services"
const LINE_URL = "https://lin.ee/7hso3k1"
const GIFT_URL = "https://gamistore.base.shop/"
const ONLINE_URL = "https://headspayu.stores.jp/"

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

        {/* 既存メニューカードはそのまま */}

        <div className="flex flex-col gap-6 lg:gap-8">
          {sortedMenus.map((menu, idx) => (
            <FadeIn key={menu.id} delay={idx * 0.08}>
              <div id={menu.id}>
                <div
                  className={`relative overflow-hidden rounded-2xl transition-all duration-500 hover:shadow-[0_14px_40px_rgba(0,0,0,0.10)] ${getCardStyle(menu)}`}
                >
                  {/* 中身はそのまま */}
                  {/* 省略（ここは元コードそのままでOK） */}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* 🔥 ここが重要：売上ブロック */}
        <FadeIn delay={0.2}>
          <div className="mt-12 rounded-2xl border border-gold/20 bg-card px-6 py-10 text-center">

            <p className="text-sm leading-7 text-muted-foreground">
              抜け毛・薄毛・白髪・頭皮の違和感など、
              早い段階でのケアが将来の髪につながります。
            </p>

            <p className="mt-2 text-xs text-foreground/50">
              ※1日3名限定のため、早めのご予約をおすすめしています
            </p>

            {/* 予約・LINE */}
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

            {/* 👇 追加：ギフト＆会員 */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2 text-left">

              <a
                href={GIFT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl border border-gold/20 p-5 transition hover:border-gold/40"
              >
                <p className="text-[10px] tracking-[0.2em] text-gold/70">
                  GIFT
                </p>
                <h3 className="mt-2 text-sm font-semibold text-foreground">
                  ヘッドスパギフトチケット
                </h3>
                <p className="mt-2 text-xs text-muted-foreground">
                  大切な方へ、癒しの時間を贈る特別なギフト
                </p>
                <p className="mt-3 text-xs text-gold">
                  ギフトを見る →
                </p>
              </a>

              <a
                href={ONLINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl border border-gold/20 p-5 transition hover:border-gold/40"
              >
                <p className="text-[10px] tracking-[0.2em] text-gold/70">
                  MEMBERS
                </p>
                <h3 className="mt-2 text-sm font-semibold text-foreground">
                  会員限定オンライン
                </h3>
                <p className="mt-2 text-xs text-muted-foreground">
                  ご来店者様限定（PASSはお問い合わせで発行）
                </p>
                <p className="mt-3 text-xs text-gold">
                  詳しく見る →
                </p>
              </a>

            </div>

          </div>
        </FadeIn>
      </div>
    </section>
  )
}
