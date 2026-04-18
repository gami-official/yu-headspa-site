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

        {/* 🔥 追加：最初にCTA（めちゃ重要） */}
        <FadeIn>
          <div className="mb-10 text-center">
            <p className="text-xs text-gold/70 tracking-[0.3em]">MENU</p>
            <h2 className="mt-3 text-xl sm:text-2xl tracking-[0.14em]">
              お悩み別に選べる本格ヘッドスパ
            </h2>

            <p className="mt-4 text-sm text-muted-foreground leading-7 max-w-xl mx-auto">
              抜け毛・薄毛・白髪・疲労など、
              状態に合わせて最適な施術をご提案します。
            </p>

            {/* 👇 即予約導線 */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={COUBIC_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gold px-6 py-3 text-sm font-medium text-black hover:opacity-90"
              >
                空き状況を確認する
              </a>

              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-gold/30 px-6 py-3 text-sm text-foreground/70 hover:border-gold"
              >
                LINEで相談
              </a>
            </div>
          </div>
        </FadeIn>

        {/* メニュー一覧 */}
        <div className="flex flex-col gap-6 lg:gap-8">
          {sortedMenus.map((menu, idx) => (
            <FadeIn key={menu.id} delay={idx * 0.08}>
              <div id={menu.id}>
                <div className={`rounded-2xl ${getCardStyle(menu)}`}>
                  {/* ここは既存のままでOK */}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* 🔥 クロージング強化 */}
        <FadeIn delay={0.2}>
          <div className="mt-14 rounded-2xl border border-gold/20 bg-card px-6 py-10 text-center">

            <h3 className="text-base font-semibold tracking-[0.1em]">
              迷ったらまずはご相談ください
            </h3>

            <p className="mt-3 text-sm text-muted-foreground leading-7">
              抜け毛・薄毛・白髪・頭皮の違和感など、
              早いケアが将来の髪を守ります。
            </p>

            <p className="mt-2 text-xs text-foreground/50">
              ※1日3名限定のためご予約はお早めに
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={COUBIC_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gold px-6 py-3 text-sm font-medium text-black"
              >
                今すぐ予約する
              </a>

              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-gold/25 px-6 py-3 text-sm"
              >
                LINE相談
              </a>
            </div>

            {/* 物販 */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2 text-left">

              <a href={GIFT_URL} target="_blank" className="rounded-xl border p-5">
                <p className="text-xs text-gold">GIFT</p>
                <p className="mt-2 text-sm font-semibold">ギフトチケット</p>
                <p className="text-xs mt-2 text-muted-foreground">
                  癒しを贈る特別なプレゼント
                </p>
              </a>

              <a href={ONLINE_URL} target="_blank" className="rounded-xl border p-5">
                <p className="text-xs text-gold">MEMBERS</p>
                <p className="mt-2 text-sm font-semibold">会員限定オンライン</p>
                <p className="text-xs mt-2 text-muted-foreground">
                  来店者限定コンテンツ
                </p>
              </a>

            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  )
}
