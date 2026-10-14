
"use client"

import { useRef } from "react"
import { FadeIn } from "@/components/fade-in"

const essences = [
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

  const scroll = (direction: "left" | "right") => {
    const element = scrollRef.current
    if (!element) return

    const card = element.querySelector<HTMLElement>(
      "[data-essence-card]"
    )

    const distance = (card?.offsetWidth ?? 300) + 16

    element.scrollBy({
      left: direction === "left" ? -distance : distance,
      behavior: "smooth",
    })
  }

  return (
    <section
      id="essences"
      className="overflow-hidden bg-secondary py-20 text-white sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-6xl px-5 lg:px-10">
        <FadeIn>
          <div className="mb-12 text-center sm:mb-16">
            <p className="text-[11px] tracking-[0.25em] text-gold sm:text-sm sm:tracking-[0.4em]">
              10 REASONS TO CHOOSE YU
            </p>

            <h2 className="mt-5 text-2xl font-medium leading-relaxed tracking-wider text-white sm:text-3xl lg:text-4xl">
              選ばれる、10の理由。
            </h2>

            <p className="mt-5 text-sm leading-8 text-white/65 sm:text-base">
              技術も、空間も、おもてなしも。
              <br />
              すべては、特別なひとときのために。
            </p>

            <div className="mx-auto mt-7 h-px w-16 bg-gold/60" />
          </div>
        </FadeIn>

        <div className="relative">
          <div
            ref={scrollRef}
            className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-5 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-2"
            style={{ scrollbarWidth: "none" }}
          >
            {essences.map((item) => (
              <article
                key={item.number}
                data-essence-card
                className="flex w-[84vw] max-w-[360px] shrink-0 snap-center flex-col border border-gold/25 bg-black/35 p-6 sm:w-full sm:max-w-none sm:p-8 lg:p-10"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-3xl font-light tracking-wide text-gold/80 sm:text-4xl">
                    {item.number}
                  </span>

                  <span className="text-right text-[9px] tracking-[0.12em] text-gold/70 sm:text-[10px] sm:tracking-[0.2em]">
                    {item.english}
                  </span>
                </div>

                <div className="mt-6 h-px w-full bg-gold/20" />

                <h3 className="mt-6 text-lg font-medium leading-[1.8] tracking-[0.03em] text-white sm:text-xl">
                  {item.title}
                </h3>

                <p className="mt-5 text-sm leading-8 text-white/70">
                  {item.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-5 flex items-center justify-center gap-5 sm:hidden">
            <button
              type="button"
              onClick={() => scroll("left")}
              aria-label="前のこだわりを見る"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/50 text-gold transition hover:bg-gold hover:text-black"
            >
              <span aria-hidden="true">←</span>
            </button>

            <span className="text-xs tracking-widest text-white/50">
              SWIPE
            </span>

            <button
              type="button"
              onClick={() => scroll("right")}
              aria-label="次のこだわりを見る"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/50 text-gold transition hover:bg-gold hover:text-black"
            >
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
