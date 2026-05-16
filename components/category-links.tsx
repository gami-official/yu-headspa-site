"use client"

import { FadeIn } from "@/components/fade-in"

const COUBIC_URL = "https://coubic.com/yuheadspa/services"
const LINE_URL = "https://lin.ee/7hso3k1"

const links = [
  {
    title: "分け目・薄毛・印象改善ケア",
    description:
      "分け目・頭頂部・ボリューム低下へ。頭皮から整え、年齢による印象変化に向き合う専門ヘッドスパ。",
    href: "/scalp-care.html",
    label: "SCALP & IMPRESSION",
  },
  {
    title: "白髪・艶髪ヘアカラーヘッドスパ",
    description:
      "白髪を隠すだけでなく、艶・品・若々しさへ。頭皮環境まで考えた大人女性のための高級カラーケア。",
    href: "/color-headspa.html",
    label: "COLOR & AGING HAIR",
  },
]

export function CategoryLinks() {
  return (
    <section
      id="category"
      className="bg-[#0a0a0a] py-20 text-white lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 lg:px-10">
        <FadeIn>
          <div className="text-center">
            <p className="text-[11px] tracking-[0.45em] text-[#d6b36a]/80">
              SPECIAL AGING CARE
            </p>

            <h2 className="mt-4 text-[clamp(1.8rem,5vw,3rem)] leading-[1.75] tracking-[0.12em]">
              年齢による髪と印象の変化へ
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-white/65">
              分け目・白髪・艶不足・ボリューム低下など。
              <br />
              お悩みに合わせて、専門ページをご覧ください。
            </p>
          </div>
        </FadeIn>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {links.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.08}>
              <a
                href={item.href}
                className="group relative overflow-hidden rounded-[30px] border border-[#d6b36a]/20 bg-white/[0.03] p-8 transition-all duration-500 hover:border-[#d6b36a]/50 hover:bg-white/[0.05]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#d6b36a]/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative z-10">
                  <p className="text-[10px] tracking-[0.35em] text-[#d6b36a]/80">
                    {item.label}
                  </p>

                  <h3 className="mt-5 text-2xl leading-[1.7] tracking-[0.08em] text-white">
                    {item.title}
                  </h3>

                  <p className="mt-6 text-sm leading-8 text-white/65">
                    {item.description}
                  </p>

                  <div className="mt-8 inline-flex items-center gap-3 text-sm tracking-[0.14em] text-[#d6b36a]">
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
          <div className="mt-16 rounded-[32px] border border-[#d6b36a]/20 bg-white/[0.03] px-6 py-10 text-center lg:px-12">
            <p className="text-[10px] tracking-[0.35em] text-[#d6b36a]/80">
              PRIVATE RESERVE
            </p>

            <h3 className="mt-4 text-[clamp(1.5rem,4vw,2.4rem)] leading-[1.8] tracking-[0.08em] text-white">
              完全個室・完全予約制
              <br />
              一日三名限定
            </h3>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-white/65">
              流れ作業ではなく、頭皮状態・髪質・印象に合わせて、
              <br />
              限られたお客様だけに丁寧なケアをご提供しております。
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={COUBIC_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-w-[240px] items-center justify-center rounded-full bg-[#d6b36a] px-8 py-4 text-sm tracking-[0.12em] text-black transition hover:opacity-90"
              >
                ご予約枠を確認する
              </a>

              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-w-[240px] items-center justify-center rounded-full border border-white/15 px-8 py-4 text-sm tracking-[0.12em] text-white transition hover:border-[#d6b36a]/50 hover:text-[#d6b36a]"
              >
                LINEで相談する
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
