"use client"

import Image from "next/image"
import { FadeIn } from "@/components/fade-in"
import { menus } from "@/lib/menu-data"

const COUBIC_URL = "https://coubic.com/yuheadspa/services"
const GOOGLE_ADS_CONVERSION_ID = "AW-576787598/2SfQCIPJ7qIcEI6phJMC"

export function MenuSection() {
  const handleReserveClick = () => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      ;(window as any).gtag("event", "conversion", {
        send_to: GOOGLE_ADS_CONVERSION_ID,
      })
    }
  }

  return (
    <section id="menu" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-10">

        {/* タイトル */}
        <FadeIn>
          <div className="mb-14 text-center">
            <p className="text-[11px] tracking-[0.4em] text-gold/70">
              PRICE & COURSE
            </p>

            <h2 className="mt-4 text-[clamp(1.6rem,5vw,2.6rem)] leading-[1.7] tracking-[0.08em] text-foreground">
              髪と頭皮の未来を見据えた
              <br />
              専門ヘッドスパコース
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-sm leading-8 text-muted-foreground">
              頭皮環境と毛髪状態を見極め、
              <br />
              美しさを再設計する施術をご提供します。
            </p>
          </div>
        </FadeIn>

        {/* メニュー */}
        <div className="flex flex-col gap-12">
          {menus.map((menu, idx) => (
            <FadeIn key={menu.id} delay={idx * 0.1}>
              <div className="overflow-hidden rounded-2xl border border-gold/20 bg-card">

                <div className="relative h-56 w-full">
                  <Image
                    src={menu.image}
                    alt={menu.tab}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6">

                  <div className="text-center sm:text-left">
                    <p className="text-[10px] tracking-[0.28em] text-gold/70">
                      {menu.enTitle.toUpperCase()}
                    </p>

                    <h3 className="mt-3 text-[clamp(1.4rem,4.5vw,1.9rem)] leading-[1.6] tracking-[0.06em] text-foreground">
                      {menu.tab.replace("ヘッドスパ", "")}
                      <br />
                      ヘッドスパ
                    </h3>
                  </div>

                  <div className="mt-6 space-y-4 text-[14px] leading-[2.05] text-muted-foreground">
                    {menu.descriptionParagraphs.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>

                  <div className="mt-10 space-y-5">
                    {menu.items.map((item, i) => (
                      <div
                        key={i}
                        className={`rounded-xl border p-5 ${
                          i === 1
                            ? "border-gold bg-gold/5"
                            : "border-border/30"
                        }`}
                      >
                        {i === 1 && (
                          <p className="mb-2 text-[10px] tracking-[0.25em] text-gold">
                            RECOMMENDED
                          </p>
                        )}

                        <p className="text-[15px] font-medium text-foreground">
                          {item.name}
                        </p>

                        <p className="mt-1 text-xs text-muted-foreground">
                          {item.detail} ／ {item.duration}
                        </p>

                        <p className="mt-3 text-[13px] leading-[1.9] text-muted-foreground">
                          頭皮環境を整え、
                          <br />
                          髪本来の美しさを引き出すコースです。
                        </p>

                        <p className="mt-4 text-xl font-semibold text-foreground">
                          {item.price}
                        </p>

                        <a
                          href={COUBIC_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={handleReserveClick}
                          className="mt-4 inline-flex w-full max-w-[260px] items-center justify-center rounded-full bg-gold px-5 py-3 text-sm font-medium text-black transition hover:opacity-90"
                        >
                          空き状況を見る
                        </a>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* CTA */}
        <FadeIn delay={0.2}>
          <div className="mt-16 text-center">
            <a
              href={COUBIC_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleReserveClick}
              className="inline-flex max-w-[300px] items-center justify-center rounded-full bg-gold px-8 py-3.5 text-sm font-medium text-black transition hover:opacity-90"
            >
              初回の空き状況を見る
            </a>

            <p className="mt-4 text-xs text-muted-foreground">
              完全予約制・一日三名限定
            </p>
          </div>
        </FadeIn>

      </div>
    </section>
  )
}
