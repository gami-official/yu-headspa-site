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
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
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
      }, 200)
    }
  }

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50">
        <div className="mx-auto max-w-7xl px-3 pt-1 sm:px-5 sm:pt-2">
          <div
            className={`rounded-full border transition-all duration-400 ${
              isScrolled
                ? "border-white/10 bg-black/80 shadow-xl backdrop-blur-xl"
                : "border-white/10 bg-black/40 backdrop-blur-md"
            }`}
          >
            <div className="flex items-center justify-between gap-2 px-3 py-1.5 sm:px-4 sm:py-2">

              {/* メニュー */}
              <button
                onClick={() => setIsMenuOpen(true)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/85 transition hover:border-[#d6b36a] hover:text-[#d6b36a]"
              >
                <Menu className="h-4 w-4" />
              </button>

              {/* キャッチ */}
              <div className="hidden flex-1 text-center sm:block">
                <p className="text-[9px] tracking-[0.3em] text-[#d6b36a]">
                  完全個室｜一日三名限定
                </p>
              </div>

              {/* CTA */}
              <a
                href={COUBIC_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 flex-1 items-center justify-center rounded-full bg-[#d6b36a] px-3 text-[12px] font-medium tracking-[0.06em] text-black transition hover:opacity-90 sm:max-w-[180px]"
              >
                ご予約はこちら
              </a>

              {/* ロゴ */}
              <div className="relative h-9 w-9 overflow-hidden rounded-full border border-white/10 bg-white">
                <Image
                  src="/images/logo.png"
                  alt="ヘッドスパ専門店ゆう"
                  fill
                  className="object-contain p-1"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* メニュー（そのまま） */}
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
                className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70"
              >
                <X className="h-5 w-5" />
              </button>

              <nav className="flex flex-col items-center gap-5">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link)}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="text-base tracking-[0.15em] text-white/85"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
