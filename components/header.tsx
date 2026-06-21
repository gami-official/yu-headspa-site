"use client"

import { useEffect, useState } from "react"
import { Menu, X, Gift } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const RESERVE_URL =
  "https://headspayu.stores.jp/reserve/yuheadspa/services#pageContent"
const LINE_URL = "https://lin.ee/7hso3k1"
const FRANCHISE_URL = "https://www.gamigami.net/headspa-franchise"
const MEMBER_STORE_URL = "https://headspayu.stores.jp/"
const GIFT_STORE_URL = "https://gamistore.base.shop/items/144607972"

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
  }
}

const navLinks = [
  { label: "メニュー", href: "#menu" },
  { label: "予約", href: "#reserve-calendar" },
  { label: "口コミ", href: "#voice" },
  { label: "ビフォーアフター", href: "#before-after" },
  { label: "FAQ", href: "#faq" },
  { label: "アクセス", href: "#access" },
  { label: "会員ストア", href: MEMBER_STORE_URL, external: true },
  { label: "ギフト", href: GIFT_STORE_URL, external: true },
  { label: "FC募集", href: FRANCHISE_URL, external: true },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : ""

    return () => {
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

  const handleReserveClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    location: string,
  ) => {
    e.preventDefault()

    window.dataLayer = window.dataLayer || []

    window.dataLayer.push({
      event: "reserve_click",
      reserve_location: location,
    })

    setIsMenuOpen(false)

    setTimeout(() => {
      window.open(RESERVE_URL, "_blank", "noopener,noreferrer")
    }, 300)
  }

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    link: { label: string; href: string; external?: boolean },
  ) => {
    e.preventDefault()
    setIsMenuOpen(false)

    if (link.external) {
      window.open(link.href, "_blank", "noopener,noreferrer")
      return
    }

    const target = document.querySelector(link.href)

    if (target) {
      setTimeout(() => {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }, 200)
    }
  }

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50">
        <div className="mx-auto max-w-7xl px-3 pt-1 sm:px-5 sm:pt-2">
          <div
            className={`rounded-full border transition-all duration-300 ${
              isScrolled
                ? "border-white/10 bg-black/85 shadow-xl backdrop-blur-xl"
                : "border-white/10 bg-black/45 backdrop-blur-md"
            }`}
          >
            <div className="flex items-center justify-between gap-2 px-3 py-1.5 sm:px-4 sm:py-2">
              <button
                onClick={() => setIsMenuOpen(true)}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/85 transition hover:border-[#d6b36a] hover:text-[#d6b36a]"
                aria-label="メニューを開く"
              >
                <Menu className="h-4 w-4" />
              </button>

              <a
                href={RESERVE_URL}
                onClick={(e) => handleReserveClick(e, "header")}
                className="inline-flex h-9 flex-1 items-center justify-center rounded-full bg-[#d6b36a] px-4 text-center text-[12px] font-medium tracking-[0.08em] text-black transition hover:opacity-90 sm:max-w-[200px]"
              >
                予約する
              </a>

              <a
                href={GIFT_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden h-9 items-center justify-center rounded-full border border-[#d6b36a]/30 bg-white/5 px-4 text-[11px] tracking-[0.08em] text-[#d6b36a] transition hover:border-[#d6b36a] hover:bg-[#d6b36a]/10 md:inline-flex"
              >
                <Gift className="mr-1 h-3.5 w-3.5" />
                GIFT
              </a>

              <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full border border-white/10 bg-white">
                <Image
                  src="/images/logo.png"
                  alt="ヘッドスパ専門店ゆう本店"
                  fill
                  className="object-contain p-1"
                  sizes="36px"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      <a
        href={RESERVE_URL}
        onClick={(e) => handleReserveClick(e, "fixed_bottom")}
        className="fixed bottom-4 left-6 right-6 z-50 inline-flex items-center justify-center rounded-full bg-[#d6b36a] px-5 py-3 text-center text-sm font-medium tracking-[0.08em] text-black shadow-2xl transition hover:opacity-90 md:hidden"
      >
        今すぐ予約
      </a>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl"
          >
            <div className="flex min-h-full flex-col items-center justify-center px-6 py-16">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70 transition hover:border-[#d6b36a] hover:text-[#d6b36a]"
                aria-label="メニューを閉じる"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="mb-10 text-center">
                <p className="text-[10px] tracking-[0.32em] text-[#d6b36a]">
                  PRIVATE HEAD SPA SALON
                </p>

                <p className="mt-4 text-[10px] tracking-[0.28em] text-white/40">
                  口コミ★5.0｜109件
                </p>

                <p className="mt-3 text-lg tracking-[0.22em] text-white">
                  ヘッドスパ専門店ゆう本店
                </p>
              </div>

              <nav className="flex flex-col items-center gap-5">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link)}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="text-center text-base tracking-[0.15em] text-white/85 transition hover:text-[#d6b36a]"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              <div className="mt-10 flex w-full max-w-xs flex-col gap-3">
                <a
                  href={RESERVE_URL}
                  onClick={(e) => handleReserveClick(e, "menu")}
                  className="inline-flex items-center justify-center rounded-full border border-[#d6b36a] bg-[#d6b36a] px-6 py-3 text-center text-sm font-medium tracking-[0.08em] text-black transition hover:bg-transparent hover:text-[#d6b36a]"
                >
                  予約する
                </a>

                <a
                  href={GIFT_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-6 py-3 text-center text-sm tracking-[0.08em] text-white transition hover:border-[#d6b36a] hover:text-[#d6b36a]"
                >
                  ギフトを見る
                </a>

                <a
                  href={LINE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-6 py-3 text-center text-sm tracking-[0.08em] text-white/90 transition hover:border-[#d6b36a] hover:text-[#d6b36a]"
                >
                  LINE相談
                </a>
              </div>

              <a
                href={FRANCHISE_URL}
                target="_blank"
                rel="noopener noreferrer"
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
