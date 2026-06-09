"use client"

import { FadeIn } from "@/components/fade-in"

const COUBIC_URL = "https://coubic.com/yuheadspa/services"
const LINE_URL = "https://lin.ee/7hso3k1"

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
  }
}

const links = [
  {
    title: "分け目・薄毛ケア",
    description:
      "分け目・頭頂部・ボリューム低下へ。頭皮から整える専門ヘッドスパ。",
    href: "/scalp-care.html",
    label: "SCALP CARE",
  },
  {
    title: "白髪・艶髪ケア",
    description:
      "白髪・艶不足へ。頭皮環境まで考えた大人女性のためのカラーケア。",
    href: "/color-headspa.html",
    label: "COLOR CARE",
  },
]

export function CategoryLinks() {
  const handleReserveClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    window.dataLayer = window.dataLayer || []

    window.dataLayer.push({
      event: "reserve_click",
      reserve_location: "category",
    })

    setTimeout(() => {
      window.open(COUBIC_URL, "_blank", "noopener,noreferrer")
    }, 300)
  }

  return (
    <section
      id="category"
      className="bg-[#0a0a0a] py-16 text-white lg:py-24"
    >
      <div className="mx-auto max-w-5xl px-5 lg:px-10">
        <FadeIn>
          <div className="text-center">
            <p className="text-[10px] tracking-[0.28em] text-[#d6b36a]/80">
              AGING CARE
            </p>

            <h2 className="mt-4 text-[clamp(1.45rem,5.5vw,2.4rem)] leading-[1.55] tracking-[0.03em]">
              髪と印象の変化へ
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-white/65">
              お悩みに合わせて、専門ページをご覧ください。
            </p>
          </div>
        </FadeIn>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {links.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.08}>
              <a
                href={item.href}
                className="group relative block overflow-hidden rounded-[24px] border border-[#d6b36a]/20 bg-white/[0.03] p-6 transition-all duration-500 hover:border-[#d6b36a]/50 hover:bg-white/[0.05]"
              >
                <div className="relative z-10">
                  <p className="text-[9px] tracking-[0.2em] text-[#d6b36a]/80">
                    {item.label}
                  </p>

                  <h3 className="mt-3 text-[1.45rem] leading-[1.5] tracking-[0.02em] text-white sm:text-[1.8rem]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-[13px] leading-7 text-white/65">
                    {item.description}
                  </p>

                  <div className="mt-6 inline-flex items-center gap-2 text-sm text-[#d6b36a]">
                    専門ページを見る

                    <svg
                      className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <div className="mt-12 rounded-[28px] border border-[#d6b36a]/20 bg-white/[0.03] px-6 py-9 text-center lg:px-10">
            <p className="text-[10px] tracking-[0.28em] text-[#d6b36a]/80">
              RESERVE
            </p>

            <h3 className="mt-4 text-[clamp(1.35rem,5vw,2rem)] leading-[1.55] tracking-[0.03em] text-white">
              完全個室で、
              <br />
              丁寧にご案内します。
            </h3>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-white/65">
              完全予約制・一日三名限定。
              <br />
              まずは空き状況をご確認ください。
            </p>

            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={COUBIC_URL}
                onClick={handleReserveClick}
                className="inline-flex w-full max-w-xs items-center justify-center rounded-full bg-[#d6b36a] px-8 py-3.5 text-sm tracking-[0.08em] text-black transition hover:opacity-90"
              >
                空き状況を見る
              </a>

              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full max-w-xs items-center justify-center rounded-full border border-white/15 px-8 py-3.5 text-sm tracking-[0.08em] text-white transition hover:border-[#d6b36a]/50 hover:text-[#d6b36a]"
              >
                LINEで相談
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
