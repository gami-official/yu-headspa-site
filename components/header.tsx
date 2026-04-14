"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const COUBIC_URL = "https://coubic.com/yuheadspa/services"
const LINE_URL = "https://lin.ee/7hso3k1"
const FRANCHISE_URL = "https://www.gamigami.net/headspa-franchise"

const navLinks = [
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
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-700 ${
          isScrolled
            ? "bg-black/80 py-3 shadow-2xl backdrop-blur-md"
            : "bg-transparent py-4"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-5">
          <button
            onClick={() => setIsMenuOpen(true)}
            className="shrink-0 text-white/80 transition hover:text-[#d6b36a]"
            aria-label="メニューを開く"
          >
            <Menu className="h-5 w-5" />
          </button>

          <div className="mx-3 flex flex-col items-center gap-1 text-[10px] tracking-[0.12em] sm:text-[11px]">
            <p className="text-[9px] tracking-[0.18em] text-white/50">
              完全予約制｜1日3名限定
            </p>

            <div className="flex items-center gap-2">
              <a
                href={COUBIC_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[#d6b36a] bg-[#d6b36a] px-3 py-2 text-[12px] font-medium text-black transition hover:bg-transparent hover:text-[#d6b36a] sm:px-4 sm:text-sm"
              >
                ご予約はこちら
              </a>

              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/40 px-3 py-2 text-[12px] text-white/80 transition hover:border-[#d6b36a] hover:text-[#d6b36a] sm:px-4 sm:text-sm"
              >
                無料で相談する
              </a>
            </div>
          </div>

          <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full">
            <Image
              src="/images/logo.png"
              alt="ゆう"
              fill
              className="object-contain"
              sizes="32px"
            />
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
            <div className="flex h-full flex-col items-center justify-center px-6">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute right-5 top-5 text-white/60 transition hover:text-[#d6b36a]"
                aria-label="メニューを閉じる"
              >
                <X className="h-6 w-6" />
              </button>

              <div className="mb-10 text-center">
                <p className="text-[10px] tracking-[0.4em] text-white/40">
                  ヘッドスパ専門店
                </p>
                <p className="mt-1 text-lg tracking-[0.3em] text-[#d6b36a]">
                  ゆう
                </p>
              </div>

              <div className="mb-10 text-center">
                <p className="text-sm leading-8 tracking-[0.16em] text-white/70">
                  頭皮から美しさを整える
                </p>
              </div>

              <nav className="flex flex-col items-center gap-5">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      setIsMenuOpen(false)

                      if (link.external) {
                        window.open(link.href, "_blank", "noopener,noreferrer")
                        return
                      }

                      const target = document.querySelector(link.href)
                      if (target) {
                        setTimeout(() => {
                          target.scrollIntoView({ behavior: "smooth" })
                        }, 280)
                      }
                    }}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.06 }}
                    className="text-base tracking-[0.2em] text-white/85 transition hover:text-[#d6b36a] sm:text-lg"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              <div className="mt-12 flex flex-col items-center gap-4">
                <p className="text-[10px] text-white/50">完全予約制｜1日3名限定</p>

                <a
                  href={COUBIC_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-[#d6b36a] bg-[#d6b36a] px-8 py-3 text-center text-sm tracking-[0.16em] text-black transition hover:bg-transparent hover:text-[#d6b36a] sm:px-12"
                >
                  ご予約はこちら
                </a>

                <a
                  href={LINE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/70 transition hover:text-[#d6b36a]"
                >
                  無料で相談する
                </a>

                <a
                  href={FRANCHISE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 text-[11px] text-white/40 underline transition hover:text-[#d6b36a]"
                >
                  技術を学びたい方はこちら
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
