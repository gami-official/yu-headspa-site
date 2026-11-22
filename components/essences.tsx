
"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { FadeIn } from "@/components/fade-in"

type Essence = {
  number: string
  english: string
  title: string
  description: string
  image: string
  imagePosition?: string
}

const essences: Essence[] = [
  {
    number: "01",
    english: "ONLY THREE GUESTS A DAY",
    title: "1日わずか3名。数を追わない、質を極める。",
    description:
      "一人ひとりのお客様と丁寧に向き合うための人数限定。慌ただしさとは無縁の、贅沢なひとときを。",
    image: "/images/08-relaxation-bed.webp",
  },
  {
    number: "02",
    english: "15+ YEARS OF EXPERTISE",
    title: "15年以上の経験。技術にこそ、価値がある。",
    description:
      "積み重ねた経験から生まれる繊細な力加減と熟練の手技。画一的な施術ではなく、一人ひとりの状態やご希望に合わせて丁寧に向き合います。",
    image: "/images/04-headspa-treatment.webp",
  },
  {
    number: "03",
    english: "FUTURE-FOCUSED SCALP CARE",
    title: "その場の癒やしだけではない。これからの髪を考える。",
    description:
      "髪や頭皮の変化に向き合い、健やかな頭皮環境を目指す本格育毛ヘッドスパ。今だけでなく、これからの髪を大切にする方へ。",
    image: "/images/09-counseling.webp",
  },
  {
    number: "04",
    english: "PREMIUM HAIR COLOR & SPA",
    title: "髪色も、頭皮も、美しく。妥協しないカラー＆スパ。",
    description:
      "頭皮への配慮を大切にしたゼロテクニックカラーと、本格ウェットヘッドスパ。髪色の美しさと頭皮ケアを、ひとつの上質な時間に。",
    image: "/images/07-glossy-hair.webp",
    imagePosition: "center 45%",
  },
  {
    number: "05",
    english: "PRIVATE SPACE",
    title: "誰にも邪魔されない。完全個室という贅沢。",
    description:
      "周囲の視線や会話を気にせず過ごせるプライベート空間。扉を閉めた瞬間から、あなただけの特別な時間が始まります。",
    image: "/images/01-private-room.webp",
  },
  {
    number: "06",
    english: "TRUSTED BY DISCERNING GUESTS",
    title: "本物の価値を知る方々に、選ばれる場所。",
    description:
      "経営者や医師、著名人をはじめ、美と健康への意識が高い方々にもご愛顧いただいています。華やかさよりも、技術と空間の質を大切にするお客様へ。",
    image: "/images/06-consultation-space.webp",
  },
  {
    number: "07",
    english: "WET HEAD SPA",
    title: "水と技術が生み出す、本格ウェットヘッドスパ。",
    description:
      "水・スチーム・洗浄・トリートメント・熟練の手技を融合。頭皮を直接ケアする、本格ウェットヘッドスパならではの施術を。",
    image: "/images/05-scalp-care.webp",
  },
  {
    number: "08",
    english: "24/7 ONLINE RESERVATION",
    title: "大切な時間を無駄にしない、完全予約制。",
    description:
      "24時間365日、オンラインで空き状況の確認と予約が可能。忙しい日々を送る方にも、スマートな予約体験を。",
    image: "/images/02-art-interior.webp",
  },
  {
    number: "09",
    english: "TWO PRIVATE PARKING SPACES",
    title: "駐車場2台完備。お車でのご来店も快適に。",
    description:
      "店舗前に2台分の駐車スペースをご用意。ご来店からお帰りまで、心地よくお過ごしいただける環境を大切にしています。",
    image: "/images/03-parking.webp",
    imagePosition: "center 58%",
  },
  {
    number: "10",
    english: "A FIVE-SENSE EXPERIENCE",
    title: "五感で感じる、細部までこだわった上質な空間。",
    description:
      "光・音・香り・温度・肌に触れる心地よさまで。細部へのこだわりが、日常の中に特別なひとときを生み出します。",
    image: "/images/10-floral-lighting.webp",
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
        const cards =
          container.querySelectorAll<HTMLElement>(
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

    container.addEventListener(
      "scroll",
      updateActiveIndex,
      { passive: true }
    )

    window.addEventListener(
      "resize",
      updateActiveIndex
    )

    updateActiveIndex()

    return () => {
      cancelAnimationFrame(frame)
      container.removeEventListener(
        "scroll",
        updateActiveIndex
      )
      window.removeEventListener(
        "resize",
        updateActiveIndex
      )
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
              贅沢を日常に。
              <br />
              技術も、空間も、おもてなしも。
              <br />
              すべては、上質な時間のために。
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
                className="group relative flex w-[86%] shrink-0 snap-start flex-col overflow-hidden rounded-[20px] border border-[#d6b36a]/25 bg-[#211a15] sm:w-[47%] lg:w-[31%]"
              >
                <div className="relative h-56 w-full overflow-hidden sm:h-60 lg:h-64">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 31vw, (min-width: 640px) 47vw, 86vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    style={{
                      objectPosition:
                        item.imagePosition ?? "center",
                    }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#211a15] via-[#211a15]/10 to-transparent" />

                  <div className="absolute bottom-4 left-5 flex items-end gap-3 sm:left-6">
                    <span className="font-serif text-5xl font-light leading-none tracking-[-0.04em] text-[#e5c783] drop-shadow-lg sm:text-6xl">
                      {item.number}
                    </span>

                    <span className="mb-1 text-[9px] tracking-[0.16em] text-white/80">
                      / 10
                    </span>
                  </div>
                </div>

                <div className="flex min-w-0 flex-1 flex-col px-5 pb-6 pt-5 sm:p-7 sm:pt-5">
                  <p className="min-h-5 break-words text-[10px] leading-5 tracking-[0.09em] text-[#d6b36a]/85 sm:tracking-[0.17em]">
                    {item.english}
                  </p>

                  <div className="mt-4 h-px w-full bg-[#d6b36a]/20" />

                  <h3 className="mt-4 text-[16px] font-medium leading-[1.9] text-white sm:mt-5 sm:text-lg">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[13px] leading-[1.95] text-white/70 sm:mt-4 sm:text-sm sm:leading-8">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-sm tracking-[0.15em] text-[#d6b36a]">
                {String(activeIndex + 1).padStart(
                  2,
                  "0"
                )}
              </span>

              <div className="h-px w-12 bg-[#d6b36a]/50" />

              <span className="text-sm tracking-[0.15em] text-white/50">
                {essences.length}
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
                <span aria-hidden="true">←</span>
              </button>

              <button
                type="button"
                onClick={() => scroll("right")}
                disabled={
                  activeIndex === essences.length - 1
                }
                aria-label="次のこだわりを見る"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d6b36a]/50 text-[#d6b36a] transition hover:bg-[#d6b36a] hover:text-black disabled:cursor-not-allowed disabled:opacity-30"
              >
                <span aria-hidden="true">→</span>
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
