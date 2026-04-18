"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const COUBIC_URL = "https://coubic.com/yuheadspa/services"
const LINE_URL = "https://lin.ee/7hso3k1"
const FRANCHISE_URL = "https://www.gamigami.net/headspa-franchise"

const navLinks = [
  { label: "料金・メニュー", href: "#menu" },
  { label: "育毛ヘッドスパ", href: "#scalp" },
  { label: "ヘアカラーヘッドスパ", href: "#color" },
  { label: "リラクゼーションヘッドスパ", href: "#relaxation" },
  { label: "当店について", href: "#about" },
  { label: "アクセス", href: "#access" },
  { label: "よくある質問", href: "#faq" },
  { label: "フランチャイズ募集", href: FRANCHISE_URL, external: true },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

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
        target.scrollIntoView({ behavior: "smooth", block: "start" })
      }, 260)
    }
  }

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50">
        <div className="mx-auto max-w-7xl px-3 pt-3 sm:px-5 sm:pt-4">
          <div
            className={`rounded-[28px] border transition-all duration-500 ${
              isScrolled
                ? "border-white/12 bg-black/70 shadow-2xl backdrop-blur-xl"
                : "border-white/10 bg-black/35 backdrop-blur-md"
            }`}
          >
            <div className="px-3 py-3 sm:px-5 sm:py-4">
              <div className="flex items-center justify-between gap-3">
                <button
                  onClick={() => setIsMenuOpen(true)}
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/85 transition hover:border-[#d6b36a] hover:text-[#d6b36a]"
                  aria-label="メニューを開く"
                >
                  <Menu className="h-5 w-5" />
                </button>

                <div className="min-w-0 flex-1 text-center">
                  <p className="text-[10px] tracking-[0.32em] text-[#d6b36a] sm:text-[11px]">
                    〜贅沢を日常に〜
                  </p>
                  <p className="mt-1 text-[9px] tracking-[0.22em] text-white/55 sm:text-[10px]">
                    完全予約制｜1日3名限定
                  </p>
                </div>

                <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-white/10 bg-white">
                  <Image
                    src="/images/logo.png"
                    alt="ヘッドスパ専門店ゆう"
                    fill
                    className="object-contain p-1"
                    sizes="44px"
                  />
                </div>
              </div>

              <div className="mt-3 grid grid-cols-2 gap-2 sm:hidden">
                <a
                  href={COUBIC_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[#d6b36a] px-4 py-3 text-center text-sm font-medium tracking-[0.06em] text-black transition hover:opacity-90"
                >
                  ご予約はこちら
                </a>

                <a
                  href={LINE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-4 py-3 text-center text-sm tracking-[0.06em] text-white/90 transition hover:border-[#d6b36a] hover:text-[#d6b36a]"
                >
                  無料で相談する
                </a>
              </div>

              <div className="mt-4 hidden items-center justify-center gap-3 sm:flex">
                <a
                  href={COUBIC_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-[#d6b36a] bg-[#d6b36a] px-6 py-3 text-sm font-medium tracking-[0.08em] text-black transition hover:bg-transparent hover:text-[#d6b36a]"
                >
                  ご予約はこちら
                </a>

                <a
                  href={LINE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm tracking-[0.08em] text-white/90 transition hover:border-[#d6b36a] hover:text-[#d6b36a]"
                >
                  無料で相談する
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

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
                className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70 transition hover:border-[#d6b36a] hover:text-[#d6b36a]"
                aria-label="メニューを閉じる"
              >
                <X className="h-6 w-6" />
              </button>

              <div className="mb-10 text-center">
                <p className="text-[10px] tracking-[0.35em] text-[#d6b36a]">
                  〜贅沢を日常に〜
                </p>
                <p className="mt-4 text-[10px] tracking-[0.4em] text-white/40">
                  ヘッドスパ専門店
                </p>
                <p className="mt-2 text-lg tracking-[0.28em] text-white">
                  ゆう
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
                    transition={{ delay: i * 0.06 }}
                    className="text-center text-base tracking-[0.18em] text-white/85 transition hover:text-[#d6b36a] sm:text-lg"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              <div className="mt-12 flex w-full max-w-sm flex-col gap-3">
                <a
                  href={COUBIC_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-[#d6b36a] bg-[#d6b36a] px-6 py-3.5 text-center text-sm font-medium tracking-[0.08em] text-black transition hover:bg-transparent hover:text-[#d6b36a]"
                >
                  ご予約はこちら
                </a>

                <a
                  href="#menu"
                  onClick={(e) =>
                    handleNavClick(e, { label: "料金・メニュー", href: "#menu" })
                  }
                  className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-6 py-3.5 text-center text-sm tracking-[0.08em] text-white transition hover:border-[#d6b36a] hover:text-[#d6b36a]"
                >
                  料金・メニューを見る
                </a>

                <a
                  href={LINE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-6 py-3.5 text-center text-sm tracking-[0.08em] text-white/90 transition hover:border-[#d6b36a] hover:text-[#d6b36a]"
                >
                  無料で相談する
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
