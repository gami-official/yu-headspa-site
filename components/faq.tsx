"use client"

import { FadeIn } from "@/components/fade-in"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const COUBIC_URL = "https://coubic.com/yuheadspa/services"
const LINE_URL = "https://lin.ee/7hso3k1"

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
  }
}

const faqs = [
  ["初めてでも大丈夫？", "はい。完全個室なので、安心してご相談いただけます。"],
  ["薄毛や分け目も相談できる？", "はい。頭皮と髪の状態に合わせてご提案します。"],
  ["白髪や艶不足も対応？", "はい。年齢髪のお悩みに合わせたケアをご案内します。"],
  ["メニューに迷ったら？", "気になるメニューでご予約ください。当日相談できます。"],
  ["1回で変化は分かる？", "スッキリ感やまとまりは、1回でも感じる方が多いです。"],
  ["男性も予約できる？", "はい。男性のお客様もご利用いただけます。"],
  ["勧誘はありますか？", "無理な勧誘は行っておりません。"],
  ["駐車場はありますか？", "はい。店舗前に2台分ございます。"],
  ["予約は必要？", "はい。完全予約制・一日三名限定です。"],
]

export function Faq() {
  const handleReserveClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    window.dataLayer = window.dataLayer || []

    window.dataLayer.push({
      event: "reserve_click",
      reserve_location: "faq",
    })

    setTimeout(() => {
      window.open(COUBIC_URL, "_blank", "noopener,noreferrer")
    }, 300)
  }

  return (
    <section id="faq" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-4xl px-5 lg:px-10">
        <FadeIn>
          <div className="mb-10 text-center">
            <p className="text-[10px] tracking-[0.28em] text-gold/70">
              FAQ
            </p>

            <h2 className="mt-4 text-[clamp(1.55rem,6vw,2.4rem)] leading-[1.55] tracking-[0.03em] text-foreground">
              予約前の不安を、
              <br />
              ここで解消。
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-8 text-muted-foreground">
              初めての方から多い質問をまとめました。
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="rounded-[26px] border border-gold/20 bg-card/60 px-4 py-2 shadow-sm sm:px-6">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map(([q, a], index) => (
                <AccordionItem
                  key={q}
                  value={`item-${index}`}
                  className="border-border/30"
                >
                  <AccordionTrigger className="py-4 text-left text-sm leading-7 text-foreground hover:no-underline">
                    <div className="flex gap-3">
                      <span className="text-gold/70">Q.</span>
                      <span>{q}</span>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className="pb-5 pl-5 text-[13px] leading-7 text-muted-foreground">
                    <span className="text-gold/50">A. </span>
                    {a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-10 rounded-[28px] border border-gold/25 bg-card px-6 py-9 text-center shadow-sm">
            <p className="text-[10px] tracking-[0.28em] text-gold/70">
              RESERVE
            </p>

            <h3 className="mt-4 text-[clamp(1.35rem,5vw,2rem)] leading-[1.55] tracking-[0.03em] text-foreground">
              不安が軽くなったら、
              <br />
              空き状況へ。
            </h3>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-8 text-muted-foreground">
              完全個室・一日三名限定。
              <br />
              初めての方も丁寧にご案内します。
            </p>

            <div className="mx-auto mt-7 flex max-w-[280px] flex-col gap-3">
              <a
                href={COUBIC_URL}
                onClick={handleReserveClick}
                className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-medium text-black transition hover:opacity-90"
              >
                空き状況を見る
              </a>

              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-gold/30 px-6 py-3 text-sm text-foreground transition hover:text-gold"
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
