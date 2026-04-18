"use client"

import Image from "next/image"
import { FadeIn } from "@/components/fade-in"
import { menus } from "@/lib/menu-data"

const COUBIC_URL = "https://coubic.com/yuheadspa/services"
const LINE_URL = "https://lin.ee/7hso3k1"

export function MenuSection() {
  return (
    <section id="menu" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-10">
        <FadeIn>
          <div className="mb-12 text-center">
            <p className="text-[11px] tracking-[0.4em] text-gold/70">MENU</p>

            <h2 className="mt-3 text-[clamp(1.9rem,5.6vw,3rem)] leading-[1.7] tracking-[0.08em] text-foreground">
              お悩み別に選べる
              <br className="sm:hidden" />
              本格ヘッドスパ
            </h2>

            <div className="mx-auto mt-5 max-w-[20em] text-sm leading-8 text-muted-foreground sm:max-w-2xl sm:text-[15px]">
              <p>
                抜け毛・薄毛・白髪・疲労感など、
                <br className="sm:hidden" />
                お悩みに合わせて
                <br className="sm:hidden" />
                最適な施術をご提案します。
              </p>
            </div>
          </div>
        </FadeIn>

        <div className="flex flex-col gap-10">
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

                <div className="p-6 sm:p-7">
                  <div className="text-center sm:text-left">
                    <p className="text-[10px] tracking-[0.28em] text-gold/70">
                      {menu.enTitle.toUpperCase()}
                    </p>

                    <h3 className="mt-3 text-[clamp(1.5rem,4.8vw,2rem)] leading-[1.7] tracking-[0.08em] text-foreground">
                      {menu.id === "scalp" && (
                        <>
                          育毛
                          <br className="sm:hidden" />
                          ヘッドスパ
                        </>
                      )}

                      {menu.id === "color" && (
                        <>
                          ヘアカラー
                          <br className="sm:hidden" />
                          ヘッドスパ
                        </>
                      )}

                      {menu.id === "relaxation" && (
                        <>
                          リラクゼーション
                          <br className="sm:hidden" />
                          ヘッドスパ
                        </>
                      )}
                    </h3>
                  </div>

                  <div className="mt-5 space-y-4 text-sm leading-8 text-muted-foreground sm:text-[15px]">
                    {menu.descriptionParagraphs.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>

                  <div className="mt-7 border-t border-border/40 pt-5">
                    <p className="text-[10px] tracking-[0.25em] text-gold/70">
                      PRICE
                    </p>

                    <div className="mt-4 space-y-4">
                      {menu.items.map((item, i) => (
                        <div
                          key={i}
                          className="flex items-start justify-between gap-4 border-b border-border/20 pb-4 last:border-b-0 last:pb-0"
                        >
                          <div className="min-w-0">
                            <p className="text-sm font-medium leading-7 text-foreground sm:text-[15px]">
                              {item.name}
                            </p>
                            <p className="mt-1 text-xs leading-6 text-muted-foreground sm:text-[13px]">
                              {item.detail}
                              <br className="sm:hidden" />
                              <span className="hidden sm:inline"> ／ </span>
                              <span>{item.duration}</span>
                            </p>
                          </div>

                          <p className="shrink-0 text-sm font-semibold tracking-[0.04em] text-foreground sm:text-[15px]">
                            {item.price}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-7 border-t border-border/40 pt-5">
                    <p className="text-[10px] tracking-[0.25em] text-gold/70">
                      STEP
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {menu.steps.map((step, i) => (
                        <span
                          key={i}
                          className="rounded-full border border-border/30 px-3 py-1.5 text-xs leading-6 text-muted-foreground"
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

        <FadeIn delay={0.2}>
          <div className="mt-14 rounded-2xl border border-gold/20 bg-card px-6 py-9 text-center">
            <p className="text-[10px] tracking-[0.35em] text-gold/70">
              RESERVE
            </p>

            <h3 className="mt-4 text-[13px] leading-[2.05] tracking-[0.01em] text-foreground sm:text-[20px] sm:leading-[1.8]">
              お悩みに合う
              <br />
              メニューをご案内します
            </h3>

            <div className="mx-auto mt-6 max-w-[16em] text-sm leading-[2] text-muted-foreground sm:max-w-2xl">
              <p>
                どのメニューが合うか迷う場合も、
                <br className="sm:hidden" />
                ご予約前にご相談いただけます。
              </p>
            </div>

            <p className="mt-3 text-xs leading-6 text-foreground/50">
              ※1日3名限定のため、
              <br className="sm:hidden" />
              ご予約はお早めにお願いいたします
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <a
                href={COUBIC_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-w-[220px] items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-medium tracking-[0.08em] text-black transition hover:opacity-90"
              >
                ご予約はこちら
              </a>

              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-w-[220px] items-center justify-center rounded-full border border-foreground/20 px-6 py-3 text-sm tracking-[0.08em] text-foreground transition hover:border-gold/50 hover:text-gold"
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
