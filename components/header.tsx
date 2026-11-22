
"use client"

import { useEffect, useState } from "react"
import { Menu, X, Gift } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const RESERVE_URL =
  "https://headspayu.stores.jp/reserve/yuheadspa/services#pageContent"

const GIFT_STORE_URL =
  "https://gamistore.base.shop/items/144607972"

const ENGLISH_URL = "/en"
const OSAKA_URL = "/osaka"
const LINE_URL = "https://lin.ee/7hso3k1"

const FRANCHISE_URL =
  "https://www.gamigami.net/headspa-franchise"

const MEMBER_STORE_URL =
  "https://headspayu.stores.jp/"

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
  }
}

const navLinks = [
  { label: "ギフト・プレゼント", href: GIFT_STORE_URL, external: true },
  { label: "育毛・カラーヘッドスパ", href: "#menu" },
  { label: "選ばれる10の理由", href: "#essences" },
  { label: "ご予約・空き状況", href: "#reserve-calendar" },
  { label: "口コミ", href: "#voice" },
  { label: "ビフォーアフター", href: "#evidence" },
  { label: "FAQ", href: "#faq" },
  { label: "アクセス", href: "#access" },
  { label: "大阪店", href: OSAKA_URL },
  { label: "会員ストア", href: MEMBER_STORE_URL, external: true },
  { label: "FC募集", href: FRANCHISE_URL, external: true },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isReservationVisible, setIsReservationVisible] =
    useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    handleScroll()

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    const reservationSection =
      document.getElementById("reserve-calendar")

    if (!reservationSection) return
    if (!("IntersectionObserver" in window)) return

    const observer = new IntersectionObserver(
      (entries) => {
        setIsReservationVisible(
          entries[0]?.isIntersecting ?? false
        )
      },
      {
        rootMargin: "0px 0px -60px 0px",
        threshold: 0,
      }
    )

    observer.observe(reservationSection)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const previousOverflow = document.body.style.overflow

    document.body.style.overflow =
      isMenuOpen ? "hidden" : previousOverflow

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [isMenuOpen])

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener("keydown", handleEscape)

    return () => {
      window.removeEventListener("keydown", handleEscape)
    }
  }, [])

  const trackReserve = (location: string) => {
    window.dataLayer = window.dataLayer || []

    window.dataLayer.push({
      event: "reserve_click",
      reserve_location: location,
    })
  }

  const trackGift = (location: string) => {
    window.dataLayer = window.dataLayer || []

    window.dataLayer.push({
      event: "gift_click",
      click_location: location,
    })
  }

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    link: (typeof navLinks)[number]
  ) => {
    setIsMenuOpen(false)

    if ("external" in link && link.external) {
      if (link.href === GIFT_STORE_URL) {
        trackGift("header_navigation")
      }
      return
    }

    if (!link.href.startsWith("#")) return

    const target = document.getElementById(
      link.href.slice(1)
    )

    if (!target) return

    event.preventDefault()

    window.history.replaceState(null, "", link.href)

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  return (
    <>
      {/* 上部固定ヘッダー */}
      <header className="fixed left-0 right-0 top-0 z-50">
        <div className="mx-auto max-w-7xl px-3 pt-1 sm:px-5 sm:pt-2">
          <div
            className={`rounded-full border transition-all duration-300 ${
              isScrolled
                ? "border-white/10 bg-black/85 shadow-xl backdrop-blur-xl"
                : "border-white/10 bg-black/45 backdrop-blur-md"
            }`}
          >
            <div className="flex items-center justify-between gap-1.5 px-2.5 py-1.5 sm:gap-2 sm:px-4 sm:py-2">

              <button
                type="button"
                onClick={() => setIsMenuOpen(true)}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/85 transition hover:border-[#d6b36a] hover:text-[#d6b36a]"
                aria-label="メニューを開く"
                aria-expanded={isMenuOpen}
                aria-controls="site-navigation"
              >
                <Menu className="h-4 w-4" />
              </button>

              {/* ギフトをメインに */}
              <a
                href={GIFT_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackGift("header")}
                className="inline-flex h-9 min-w-0 flex-1 items-center justify-center gap-1 rounded-full bg-[#d6b36a] px-2 text-center text-[11px] font-medium tracking-[0.04em] text-black transition hover:bg-[#e5c784] sm:max-w-[200px] sm:text-xs"
              >
                <Gift className="h-3.5 w-3.5 shrink-0" />
                ギフト購入
              </a>

              {/* 施術予約 */}
              <a
                href={RESERVE_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackReserve("header")}
                className="inline-flex h-9 shrink-0 items-center justify-center rounded-full border border-[#d6b36a]/60 bg-black/40 px-3 text-[11px] font-medium text-[#d6b36a] transition hover:bg-[#d6b36a] hover:text-black sm:px-5 sm:text-xs"
              >
                予約する
              </a>

              <a
                href={ENGLISH_URL}
                lang="en"
                aria-label="View English website"
                className="inline-flex h-9 min-w-9 shrink-0 items-center justify-center rounded-full border border-[#d6b36a]/50 bg-black/40 px-2 text-[11px] font-semibold text-[#d6b36a] transition hover:bg-[#d6b36a]/15"
              >
                EN
              </a>

              <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full border border-white/10 bg-white">
                <Image
                  src="/images/logo.png"
                  alt="ヘッドスパ専門店 ゆう 本店"
                  fill
                  sizes="36px"
                  className="object-contain p-1"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* スマホ固定ギフトボタン */}
      {!isMenuOpen && !isReservationVisible && (
        <a
          href={GIFT_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackGift("fixed_bottom")}
          aria-label="ヘッドスパギフトを購入する"
          className="fixed bottom-[calc(env(safe-area-inset-bottom)+16px)] right-4 z-50 inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#e5c88a]/50 bg-[#d6b36a] px-5 py-3 text-xs font-medium text-black shadow-[0_6px_24px_rgba(0,0,0,0.45)] transition hover:bg-[#e5c784] active:scale-95 md:hidden"
        >
          <Gift className="h-4 w-4" />
          ギフトを贈る ↗
        </a>
      )}

      {/* 全画面ナビゲーション */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="site-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="サイトメニュー"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] overflow-y-auto overscroll-contain bg-black/95 backdrop-blur-xl"
          >
            <div className="flex min-h-full flex-col items-center justify-center px-6 py-20">

              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                className="fixed right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-[#171310] text-white/70 transition hover:border-[#d6b36a] hover:text-[#d6b36a]"
                aria-label="メニューを閉じる"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="mb-8 text-center">
                <p className="text-[10px] tracking-[0.3em] text-[#d6b36a]">
                  FUKUOKA PRIVATE HEAD SPA
                </p>

                <p className="mt-4 text-lg tracking-[0.15em] text-white">
                  ヘッドスパ専門店 ゆう 本店
                </p>

                <p className="mt-4 text-sm tracking-[0.15em] text-[#d6b36a]">
                  贅沢を日常に。
                </p>

                <p className="mt-3 text-xs tracking-[0.12em] text-white/50">
                  完全個室・完全予約制・1日3名限定
                </p>
              </div>

              <nav className="flex flex-col items-center gap-5">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target={
                      "external" in link && link.external
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      "external" in link && link.external
                        ? "noopener noreferrer"
                        : undefined
                    }
                    onClick={(event) =>
                      handleNavClick(event, link)
                    }
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.04 }}
                    className={`text-center text-base tracking-[0.1em] transition hover:text-[#d6b36a] ${
                      index === 0
                        ? "font-medium text-[#d6b36a]"
                        : "text-white/85"
                    }`}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="/"
                  aria-current="page"
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-full border border-[#d6b36a] px-5 py-2 text-xs text-[#d6b36a]"
                >
                  本店
                </a>

                <a
                  href={OSAKA_URL}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-full border border-white/30 px-5 py-2 text-xs text-white transition hover:border-[#d6b36a] hover:text-[#d6b36a]"
                >
                  大阪店 ↗
                </a>
              </div>

              <div className="mt-8 flex items-center gap-3">
                <span
                  aria-current="page"
                  className="rounded-full border border-[#d6b36a] bg-[#d6b36a]/10 px-5 py-2 text-xs font-medium text-[#d6b36a]"
                >
                  JP
                </span>

                <span className="text-white/30">/</span>

                <a
                  href={ENGLISH_URL}
                  lang="en"
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-full border border-white/25 px-5 py-2 text-xs font-medium text-white/80 transition hover:border-[#d6b36a] hover:text-[#d6b36a]"
                >
                  EN
                </a>
              </div>

              <div className="mt-9 flex w-full max-w-xs flex-col gap-3">

                <a
                  href={GIFT_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    trackGift("menu")
                    setIsMenuOpen(false)
                  }}
                  className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-[#d6b36a] px-6 py-3 text-sm font-medium text-black transition hover:bg-[#e5c784]"
                >
                  <Gift className="h-4 w-4" />
                  ギフトカードを購入する ↗
                </a>

                <a
                  href={RESERVE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    trackReserve("menu")
                    setIsMenuOpen(false)
                  }}
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#d6b36a] px-6 py-3 text-sm font-medium text-[#d6b36a] transition hover:bg-[#d6b36a] hover:text-black"
                >
                  施術を予約する ↗
                </a>

                <a
                  href={LINE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm text-white/90 transition hover:border-[#d6b36a] hover:text-[#d6b36a]"
                >
                  LINE相談
                </a>
              </div>

              <a
                href={FRANCHISE_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="mt-8 text-[11px] text-white/40 underline transition hover:text-[#d6b36a]"
              >
                技術を学びたい方はこちら
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
