"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const COUBIC_URL = "https://coubic.com/yuheadspa/services"
const LINE_URL = "https://lin.ee/7hso3k1"
const FRANCHISE_URL = "https://www.gamigami.net/headspa-franchise"

const navLinks = [
  { label: "育毛ヘッドスパ", href: "#ikumou" },
  { label: "カラー×ヘッドスパ", href: "#color" },
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled
            ? "bg-black/80 backdrop-blur-md py-3 shadow-2xl"
            : "bg-transparent py-4"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5">
          {/* Left */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="text-white/80 hover:text-[#d6b36a]"
          >
            <Menu className="h-5 w-5" />
          </button>

          {/* Center CTA（最重要） */}
          <div className="flex flex-col items-center gap-1 text-[11px] tracking-[0.15em]">
            <p className="text-[9px] text-white/50 tracking-[0.2em]">
              1日3名限定
            </p>

            <div className="flex gap-2">
              <a
                href={COUBIC_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[#d6b36a] bg-[#d6b36a] px-4 py-2 text-black font-medium transition hover:bg-transparent hover:text-[#d6b36a]"
              >
                育毛ヘッドスパ予約
              </a>

              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/40 px-4 py-2 text-white/80 transition hover:border-[#d6b36a] hover:text-[#d6b36a]"
              >
                LINE相談
              </a>
            </div>
          </div>

          {/* Right Logo */}
          <div className="relative h-8 w-8 overflow-hidden rounded-full">
            <Image
              src="/images/logo.png"
              alt="ゆう"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </header>

      {/* Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl"
          >
            <div className="flex h-full flex-col items-center justify-center">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute right-5 top-5 text-white/60 hover:text-[#d6b36a]"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Logo */}
              <div className="mb-12 text-center">
                <p className="text-[10px] tracking-[0.4em] text-white/40">
                  ヘッドスパ専門店
                </p>
                <p className="mt-1 text-lg tracking-[0.3em] text-[#d6b36a]">
                  ゆう
                </p>
              </div>

              {/* Nav */}
              <nav className="flex flex-col items-center gap-6">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      setIsMenuOpen(false)

                      if (link.external) {
                        window.open(link.href, "_blank")
                        return
                      }

                      const el = document.querySelector(link.href)
                      if (el) {
                        setTimeout(() => {
                          el.scrollIntoView({ behavior: "smooth" })
                        }, 300)
                      }
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className="text-sm tracking-[0.25em] text-white/80 hover:text-[#d6b36a]"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              {/* CTA */}
              <div className="mt-14 flex flex-col items-center gap-4">
                <p className="text-[10px] text-white/50">
                  1日3名限定
                </p>

                <a
                  href={COUBIC_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#d6b36a] px-12 py-3 text-black tracking-[0.2em] hover:bg-transparent hover:text-[#d6b36a] border border-[#d6b36a]"
                >
                  育毛ヘッドスパ予約はこちら
                </a>

                <a
                  href={LINE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/70 hover:text-[#d6b36a]"
                >
                  LINEで相談する
                </a>

                <a
                  href={FRANCHISE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 text-[11px] text-white/40 underline hover:text-[#d6b36a]"
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
