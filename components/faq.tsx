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
  {
    q: "初めてでも予約して大丈夫ですか？",
    a: "はい、大丈夫です。当店は完全個室・完全予約制のため、人目を気にせず頭皮や髪のお悩みをご相談いただけます。",
  },
  {
    q: "薄毛・分け目の悩みも相談できますか？",
    a: "はい。分け目・頭頂部・抜け毛・ボリューム低下など、年齢による髪の印象変化に合わせた頭皮ケアをご提案しています。",
  },
  {
    q: "白髪や艶不足にも対応していますか？",
    a: "はい。白髪・艶不足・エイジング毛が気になる方へ、頭皮環境と髪質を考えたケアをご案内しています。",
  },
  {
    q: "どのメニューを選べばよいか分かりません。",
    a: "迷われる場合は、気になるメニューでご予約いただいて大丈夫です。当日、頭皮や髪の状態を確認しながら最適な内容をご提案します。",
  },
  {
    q: "一回で変化は分かりますか？",
    a: "頭の軽さ・スッキリ感・髪のまとまりは一回でも実感される方が多いです。育毛や頭皮改善は継続することで変化を感じやすくなります。",
  },
  {
    q: "男性も予約できますか？",
    a: "はい、男性のお客様もご利用いただけます。抜け毛・頭皮環境・疲れ・睡眠不足などのお悩みに合わせてご案内します。",
  },
  {
    q: "無理な勧誘やコース契約はありますか？",
    a: "無理な勧誘は行っておりません。必要なケアはご提案しますが、お客様のペースを大切にしています。",
  },
  {
    q: "駐車場はありますか？",
    a: "はい、店舗前に2台分の駐車場がございます。お車でも安心してご来店いただけます。",
  },
  {
    q: "事前予約は必要ですか？",
    a: "はい。完全予約制です。施術品質を保つため一日三名様限定でご案内しておりますので、ご希望日時がある場合は早めの確認がおすすめです。",
  },
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
    <section id="faq" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-5 lg:px-10">
        <FadeIn>
          <div className="mb-12 text-center">
            <p className="text-[11px] tracking-[0.4em] text-gold/70">
              FAQ
            </p>

            <h2 className="mt-4 text-[clamp(1.55rem,5vw,2.5rem)] leading-[1.75] tracking-[0.07em] text-foreground">
              予約前の不安を、
              <br />
              ここで解消できます
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-sm leading-8 text-muted-foreground">
              薄毛・分け目・白髪・年齢髪・完全個室について、
              <br />
              ご来店前に多いご質問をまとめました。
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="rounded-[28px] border border-gold/20 bg-card/60 px-4 py-2 shadow-sm sm:px-6">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-border/30"
                >
                  <AccordionTrigger className="py-5 text-left text-sm leading-7 text-foreground hover:no-underline">
                    <div className="flex gap-3">
                      <span className="text-gold/70">Q.</span>
                      <span className="leading-7">{faq.q}</span>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className="pb-6 pl-5 text-[13px] leading-[2] text-muted-foreground">
                    <span className="text-gold/50">A. </span>
                    {faq.a.split("\n").map((line, i) => (
                      <p key={i} className="mt-2 first:mt-0">
                        {line}
                      </p>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-14 rounded-[30px] border border-gold/25 bg-card px-6 py-10 text-center shadow-sm">
            <p className="text-[10px] tracking-[0.35em] text-gold/70">
              PRIVATE RESERVE
            </p>

            <h3 className="mt-4 text-[clamp(1.35rem,4vw,2rem)] leading-[1.8] tracking-[0.07em] text-foreground">
              不安が少しでも軽くなったら、
              <br />
              まずは空き状況をご確認ください
            </h3>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-8 text-muted-foreground">
              完全個室・一日三名限定。
              <br />
              初めての方も、状態を確認しながら丁寧にご案内します。
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
