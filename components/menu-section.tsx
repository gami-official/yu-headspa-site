"use client"

import Image from "next/image"
import { FadeIn } from "@/components/fade-in"
import { menus } from "@/lib/menu-data"

const COUBIC_URL = "https://coubic.com/yuheadspa/services"

export function MenuSection() {
  return (
    <section id="menu" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-10">

        <FadeIn>
          <div className="mb-14 text-center">
            <p className="text-[11px] tracking-[0.4em] text-gold/70">
              PRICE & COURSE
            </p>

            <h2 className="mt-4 text-[clamp(1.8rem,5.5vw,3rem)] leading-[1.7] tracking-[0.1em] text-foreground">
              髪と頭皮の未来を見据えた、
              <br />
              専門ヘッドスパコース
            </h2>

            <div className="mx-auto mt-6 max-w-2xl text-[14px] leading-[2.1] text-muted-foreground sm:text-[15px]">
              <p>
                頭皮環境・毛髪状態を見極め、
                <br />
                美しさを再設計する施術をご提供します。
              </p>
            </div>
          </div>
        </FadeIn>

        <div className="flex flex-col gap-12">
          {menus.map((menu, idx) => (
            <FadeIn key={menu.id} delay={idx * 0.1}>
              <div
                id={menu.id}
                className="overflow-hidden rounded-2xl border border-gold/20 bg-card"
              >
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

                    <h3 className="mt-3 text-[clamp(1.5rem,4.5vw,2rem)] leading-[1.6] tracking-[0.08em] text-foreground">
                      {menu.tab}
                    </h3>
                  </div>

                  <div className="mt-6 space-y-4 text-[14px] leading-[2.1] text-muted-foreground sm:text-[15px]">
                    {menu.descriptionParagraphs.map((p, i) => (
                      <p key={i}>
                        {p}
                      </p>
                    ))}
                  </div>

                  {/* コース */}
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
                          髪本来の美しさを引き出す基本コースです。
                        </p>

                        <p className="mt-4 text-xl font-semibold text-foreground">
                          {item.price}
                        </p>

                        <a
                          href={COUBIC_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-gold px-5 py-3 text-sm font-medium text-black transition hover:opacity-90"
                        >
                          空き状況を見る
                        </a>
                      </div>
                    ))}
                  </div>

                  {/* FLOW */}
                  <div className="mt-10 border-t border-border/40 pt-6">
                    <p className="text-[10px] tracking-[0.25em] text-gold/70">
                      FLOW
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {menu.steps.map((step, i) => (
                        <span
                          key={i}
                          className="rounded-full border border-border/30 px-3 py-1.5 text-xs text-muted-foreground"
                        >
                          {step}
                        </span>
                      ))}
                    </div>
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
              className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-4 text-base font-medium text-black transition hover:opacity-90"
            >
              ご予約はこちら
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
