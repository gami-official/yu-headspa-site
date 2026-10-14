
"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { FadeIn } from "@/components/fade-in"

type Essence = {
  number: string
  english: string
  title: string
  description: string
  image?: string
}

const essences: Essence[] = [
  {
    number: "01",
    english: "PRIVATE SPACE",
    title: "誰にも邪魔されない。完全個室という、最高の贅沢。",
    description:
      "人目も周囲の会話も気にしない。扉を閉めた瞬間から始まる、あなただけの特別な時間。",
  },
  {
    number: "02",
    english: "RESERVATION",
    title: "待たない贅沢。24時間365日、スマートに予約。",
    description:
      "完全予約制だからこそ、時間まで上質に。空き状況の確認から予約まで、いつでもオンラインで完結。",
  },
  {
    number: "03",
    english: "PRIVATE PARKING",
    title: "駐車場2台完備。ご来店の瞬間から、ストレスフリー。",
    description:
      "店舗前に駐車スペースを2台分ご用意。お車で気軽に訪れられる快適さも、おもてなしのひとつ。",
  },
  {
    number: "04",
    english: "MASTER TECHNIQUE",
    title: "15年以上の経験。その手技に、技術の差が現れる。",
    description:
      "積み重ねた経験が生み出す繊細な力加減と熟練の技。マニュアルだけでは再現できない、一人ひとりに合わせた施術。",
  },
  {
    number: "05",
    english: "WET HEAD SPA",
    title: "ドライでは味わえない。本物志向の極上ウェットスパ。",
    description:
      "水・スチーム・洗浄・トリートメント・熟練の手技を融合。頭皮を直接ケアする、本格ウェットヘッドスパの醍醐味を。",
  },
  {
    number: "06",
    english: "TRUSTED BY VIPs",
    title: "著名人も、セレブも、医師も。選ばれる育毛ヘッドスパ。",
    description:
      "美と健康への意識が高い方々にもご愛顧いただく専門ケア。頭皮環境とこれからの髪を考え、質にこだわるお客様に選ばれています。",
  },
  {
    number: "07",
    english: "PREMIUM HAIR COLOR",
    title: "髪色も、頭皮も、美しく。妥協なきヘアカラー＆スパ。",
    description:
      "美しい仕上がりを追求しながら、頭皮への配慮も大切に。ヘアカラーとヘッドスパを組み合わせた、こだわりの施術。",
  },
  {
    number: "08",
    english: "EXCLUSIVITY",
    title: "1日わずか3名。数を追わない、質を極める。",
    description:
      "一人ひとりのお客様と丁寧に向き合うための人数限定。慌ただしさとは無縁の、贅沢なひとときを。",
  },
  {
    number: "09",
    english: "SCALP CARE",
    title: "その場の癒やしで終わらせない。未来の髪まで考える。",
    description:
      "頭皮の状態を確認し、一人ひとりに合うケアをご提案。美しい髪の土台となる、健やかな頭皮環境を目指します。",
  },
  {
    number: "10",
    english: "FIVE SENSES",
    title: "五感すべてを満たす。日常を忘れる、非日常へ。",
    description:
      "光・音・香り・温度・肌に触れる心地よさまで。細部にこだわり抜いた空間が、上質なスパ体験を演出します。",
  },
]

export function Essences() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const scrollToIndex = (index: number) => {
    const container = scrollRef.current
    if (!container) return

    const cards = container.querySelectorAll<HTMLElement>(
      "[data-essence-card]"
    )

    const targetIndex = Math.max(
      0,
      Math.min(index, cards.length - 1)
    )

    const target = cards[targetIndex]
    if (!target) return

    container.scrollTo({
      left: target.offsetLeft - container.offsetLeft,
      behavior: "smooth",
    })

    setActiveIndex(targetIndex)
  }

  const scroll = (direction: "left" | "right") => {
    scrollToIndex(
      activeIndex + (direction === "left" ? -1 : 1)
    )
  }

  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    let frame = 0

    const updateActiveIndex = () => {
      cancelAnimationFrame(frame)

      frame = requestAnimationFrame(() => {
        const cards = container.querySelectorAll<HTMLElement>(
          "[data-essence-card]"
        )

        if (!cards.length) return

        const scrollPosition = container.scrollLeft

        let nearestIndex = 0
        let nearestDistance = Infinity

        cards.forEach((card, index) => {
          const distance = Math.abs(
            card.offsetLeft -
              container.offsetLeft -
              scrollPosition
          )

          if (distance < nearestDistance) {
            nearestDistance = distance
            nearestIndex = index
          }
        })

        setActiveIndex(nearestIndex)
      })
    }

    container.addEventListener("scroll", updateActiveIndex, {
      passive: true,
    })

    window.addEventListener("resize", updateActiveIndex)

    updateActiveIndex()

    return () => {
      cancelAnimationFrame(frame)
      container.removeEventListener("scroll", updateActiveIndex)
      window.removeEventListener("resize", updateActiveIndex)
    }
  }, [])

  return (
    <section
      id="essences"
      className="overflow-hidden bg-[#171310] py-16 text-white sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <FadeIn>
          <div className="mb-10 text-center sm:mb-12">
            <p className="text-[10px] tracking-[0.28em] text-[#d6b36a] sm:text-xs sm:tracking-[0.4em]">
              10 REASONS TO CHOOSE YU
            </p>

            <h2 className="mt-5 text-2xl font-medium leading-relaxed tracking-[0.05em] text-white sm:text-3xl lg:text-4xl">
              選ばれる、10の理由。
            </h2>

            <p className="mt-5 text-sm leading-8 text-white/65 sm:text-base">
              技術も、空間も、おもてなしも。
              <br />
              すべては、特別なひとときのために。
            </p>

            <div className="mx-auto mt-7 h-px w-16 bg-[#d6b36a]/60" />
          </div>
        </FadeIn>

        <div className="relative">
          <div
            ref={scrollRef}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-5 sm:gap-5 lg:gap-6"
            style={{
              scrollbarWidth: "none",
              scrollPaddingLeft: "0px",
            }}
            aria-label="選ばれる10の理由"
          >
            {essences.map((item) => (
              <article
                key={item.number}
                data-essence-card
                className="relative flex w-[86%] shrink-0 snap-start flex-col overflow-hidden rounded-[20px] border border-[#d6b36a]/25 bg-[#211a15] sm:w-[47%] lg:w-[31%]"
              >
                {item.image ? (
                  <div className="relative h-48 w-full overflow-hidden sm:h-52">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(min-width: 1024px) 31vw, (min-width: 640px) 47vw, 86vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#211a15]/70 to-transparent" />
                  </div>
                ) : (
                  <div className="relative flex h-28 items-center justify-center overflow-hidden border-b border-[#d6b36a]/15 bg-gradient-to-br from-[#35291e] via-[#241c17] to-[#171310] sm:h-32">
                    <div className="absolute inset-5 rounded-full border border-[#d6b36a]/10" />
                    <div className="absolute inset-8 rounded-full border border-[#d6b36a]/10" />

                    <span className="relative text-5xl font-light tracking-[0.1em] text-[#d6b36a]/65 sm:text-6xl">
                      {item.number}
                    </span>
                  </div>
                )}

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <div className="flex items-start justify-between gap-3">
                    <span className="text-xs tracking-[0.15em] text-[#d6b36a]/75">
                      {item.number} / 10
                    </span>

                    <span className="text-right text-[9px] leading-5 tracking-[0.1em] text-[#d6b36a]/80">
                      {item.english}
                    </span>
                  </div>

                  <div className="mt-5 h-px w-full bg-[#d6b36a]/20" />

                  <h3 className="mt-5 text-lg font-medium leading-[1.75] tracking-[0.02em] text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-8 text-white/65">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-sm tracking-[0.15em] text-[#d6b36a]">
                {String(activeIndex + 1).padStart(2, "0")}
              </span>

              <div className="h-px w-12 bg-[#d6b36a]/50" />

              <span className="text-sm tracking-[0.15em] text-white/50">
                10
              </span>
            </div>

            <p className="hidden text-xs tracking-[0.15em] text-white/45 sm:block">
              DRAG TO EXPLORE
            </p>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => scroll("left")}
                disabled={activeIndex === 0}
                aria-label="前のこだわりを見る"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d6b36a]/50 text-[#d6b36a] transition hover:bg-[#d6b36a] hover:text-black disabled:cursor-not-allowed disabled:opacity-30"
              >
                <span aria-hidden="true" className="text-lg">
                  ←
                </span>
              </button>

              <button
                type="button"
                onClick={() => scroll("right")}
                disabled={activeIndex === essences.length - 1}
                aria-label="次のこだわりを見る"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d6b36a]/50 text-[#d6b36a] transition hover:bg-[#d6b36a] hover:text-black disabled:cursor-not-allowed disabled:opacity-30"
              >
                <span aria-hidden="true" className="text-lg">
                  →
                </span>
              </button>
            </div>
          </div>

          <p className="mt-4 text-center text-xs leading-6 text-white/40 sm:hidden">
            横にスワイプしてご覧ください
          </p>
        </div>
      </div>
    </section>
  )
}
