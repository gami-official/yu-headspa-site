
"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Gift, CalendarDays } from "lucide-react"

const RESERVE_URL =
  "https://headspayu.stores.jp/reserve/yuheadspa/services#pageContent"

const LINE_URL = "https://lin.ee/7hso3k1"
const MEMBER_STORE_URL = "https://headspayu.stores.jp/"
const GIFT_URL = "https://gamistore.base.shop/items/144607972"
const FRANCHISE_URL =
  "https://www.gamigami.net/headspa-franchise"

const navigation = [
  { label: "ホーム", href: "/" },
  { label: "メニュー・料金", href: "/#menu" },
  { label: "10のこだわり", href: "/#essences" },
  { label: "お客様の声", href: "/#voice" },
  { label: "ビフォーアフター", href: "/#before-after" },
  { label: "よくある質問", href: "/#faq" },
  { label: "店舗・アクセス", href: "/#access" },
]

const externalLinks = [
  { label: "LINEでお問い合わせ", href: LINE_URL },
  { label: "会員ストア", href: MEMBER_STORE_URL },
  { label: "ギフトカード", href: GIFT_URL },
  { label: "フランチャイズ募集", href: FRANCHISE_URL },
]

function trackReserve(location: string) {
  if (typeof window === "undefined") return

  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    event: "reserve_click",
    reserve_location: location,
  })
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  useEffect(() => {
    if (!isMenuOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener("keydown", onEscape)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", onEscape)
    }
  }, [isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-2 sm:px-6">
        <div
          className={`mx-auto max-w-6xl rounded-full border border-white/15 px-3 py-2 shadow-lg backdrop-blur-xl transition-colors sm:px-5 ${
            isScrolled ? "bg-black/90" : "bg-black/65"
          }`}
        >
          <div className="flex items-center justify-between gap-2">
            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              aria-label="メニューを開く"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 text-white"
            >
              <Menu size={21} />
            </button>

            <Link
              href="/"
              aria-label="ヘッドスパ専門店ゆう ホーム"
              className="flex min-w-0 items-center gap-2"
            >
              <span className="hidden text-xs tracking-wider text-white sm:block">
                ヘッドスパ専門店 ゆう
              </span>

              <span className="relative block h-10 w-10 shrink-0 overflow-hidden rounded-full bg-white">
                <Image
                  src="/images/logo.png"
                  alt="ゆう"
                  fill
                  sizes="40px"
                  className="object-contain p-1"
                />
              </span>
            </Link>

            <a
              href={RESERVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackReserve("header")}
              className="flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-[#d6b36a] px-4 text-xs font-semibold text-black sm:px-6 sm:text-sm"
            >
              <CalendarDays size={16} />
              WEB予約
            </a>
          </div>
        </div>
      </header>

      {/* Mobile reservation button */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-black/90 px-4 pb-[calc(env(safe-area-inset-bottom)+10px)] pt-3 backdrop-blur-lg md:hidden">
        <a
          href={RESERVE_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackReserve("mobile_bottom")}
          className="flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#d6b36a] px-5 py-3 text-center text-sm font-semibold text-black"
        >
          <CalendarDays size={18} />
          空き状況を確認・予約する
        </a>
      </div>

      {/* Navigation overlay */}
      {isMenuOpen && (
        <div
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="サイトメニュー"
          className="fixed inset-0 z-[100] overflow-y-auto bg-[#101010] text-white"
        >
          <div className="mx-auto flex min-h-full max-w-2xl flex-col px-6 pb-12 pt-6">
            <div className="flex items-center justify-between">
              <p className="text-sm tracking-widest text-[#d6b36a]">
                HEAD SPA YU
              </p>

              <button
                type="button"
                onClick={closeMenu}
                aria-label="メニューを閉じる"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20"
              >
                <X size={22} />
              </button>
            </div>

            <p className="mt-8 text-xs tracking-widest text-white/50">
              MENU
            </p>

            <nav
              aria-label="メインナビゲーション"
              className="mt-4 grid grid-cols-1 gap-1 sm:grid-cols-2 sm:gap-3"
            >
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="flex min-h-12 items-center border-b border-white/10 py-3 text-base leading-7 transition hover:text-[#d6b36a]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-9">
              <p className="text-xs tracking-widest text-[#d6b36a]">
                SALON
              </p>

              <div className="mt-4 rounded-xl border border-[#d6b36a]/30 p-5">
                <p className="text-sm font-medium">
                  福岡本店
                </p>
                <p className="mt-2 text-xs leading-6 text-white/60">
                  福岡市西区
                </p>
                <Link
                  href="/#access"
                  onClick={closeMenu}
                  className="mt-3 inline-flex min-h-11 items-center text-sm text-[#d6b36a]"
                >
                  店舗情報・アクセスを見る →
                </Link>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-xs tracking-widest text-white/50">
                OTHER LINKS
              </p>

              <div className="mt-3 grid grid-cols-1 gap-1 sm:grid-cols-2">
                {externalLinks.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenu}
                    className="flex min-h-11 items-center border-b border-white/10 py-2 text-sm text-white/80"
                  >
                    {item.label} ↗
                  </a>
                ))}
              </div>
            </div>

            <a
              href={RESERVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                trackReserve("navigation")
                closeMenu()
              }}
              className="mt-10 flex min-h-12 items-center justify-center rounded-full bg-[#d6b36a] px-5 py-3 text-sm font-semibold text-black"
            >
              WEB予約はこちら →
            </a>

            <a
              href={GIFT_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="mt-4 flex min-h-11 items-center justify-center gap-2 text-xs text-white/70"
            >
              <Gift size={15} />
              ギフトカード
            </a>
          </div>
        </div>
      )}
    </>
  )
}

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
  }
}
