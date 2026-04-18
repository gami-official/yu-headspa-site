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

const faqs = [
  {
    q: "事前の予約が必要ですか？",
    a: "当店は完全予約制です。1日3名様限定のため、前日までに満席となることも多くございます。お早めのご予約をおすすめしております。",
  },
  {
    q: "駐車場はありますか？",
    a: "サロン目の前に2台分の駐車場をご用意しております。お車でも安心してご来店いただけます。",
  },
  {
    q: "トータルでどのくらい時間がかかりますか？",
    a: "ご来店からお帰りまで、全体で約2時間を目安としております。",
  },
  {
    q: "どのメニューを選べばよいか分かりません。",
    a: "抜け毛・薄毛・分け目には育毛ヘッドスパ、頭皮負担を抑えたい方にはヘアカラーヘッドスパ、まずは癒しを体験したい方にはリラクゼーションヘッドスパがおすすめです。迷われる場合はLINEでご相談ください。",
  },
  {
    q: "ヘアカラーヘッドスパは普通のカラーと何が違いますか？",
    a: "頭皮への負担に配慮したゼロテクニックカラーを採用し、カラーと同時に頭皮環境を整えるケアをご提供しています。その場の仕上がりだけでなく、将来の髪と頭皮まで見据えた施術です。",
  },
  {
    q: "リラクゼーションヘッドスパだけでも受けられますか？",
    a: "はい、可能です。疲労感・眼精疲労・睡眠の質の低下など、癒しを目的にご来店される方にもおすすめです。",
  },
]

export function Faq() {
  return (
    <section id="faq" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-4xl px-5 lg:px-10">
        <FadeIn>
          <div className="mb-10 text-center">
            <p className="text-[11px] tracking-[0.45em] text-gold/70">
              FAQ
            </p>

            <h2 className="mt-3 text-[clamp(1.3rem,4vw,1.9rem)] leading-[1.75] tracking-[0.03em] text-foreground">
              初めての方によくある
              <br />
              ご質問
            </h2>

            <div className="mx-auto mt-5 max-w-[15.5em] text-[14px] leading-[2.05] text-muted-foreground sm:max-w-xl sm:text-[15px]">
              <p>
                育毛ヘッドスパ・
                <br className="sm:hidden" />
                ヘアカラーヘッドスパ・
                <br className="sm:hidden" />
                リラクゼーションヘッドスパを
              </p>
              <p className="mt-4">
                ご検討中の方から多くいただく
                <br className="sm:hidden" />
                ご質問をまとめました。
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="rounded-2xl border border-border/30 bg-card/40 px-4 py-2 sm:px-6">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-border/30"
                >
                  <AccordionTrigger className="py-5 text-left text-sm leading-7 text-foreground/85 hover:text-gold hover:no-underline lg:text-[15px]">
                    <span className="flex gap-3">
                      <span className="shrink-0 text-gold/60">Q.</span>
                      <span>{faq.q}</span>
                    </span>
                  </AccordionTrigger>

                  <AccordionContent className="pb-6 pl-5 text-xs leading-[2.1] text-muted-foreground lg:text-[13px]">
                    <span className="text-gold/40">A. </span>
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-12 rounded-2xl border border-gold/20 bg-card px-6 py-9 text-center">
            <p className="text-[10px] tracking-[0.35em] text-gold/70">
              RESERVE & CONSULT
            </p>

            <h3 className="mt-3 text-[clamp(1.22rem,3.8vw,1.8rem)] leading-[1.78] tracking-[0.03em] text-foreground">
              メニュー選びに迷う方も
              <br />
              ご安心ください
            </h3>

            <div className="mx-auto mt-5 max-w-[15.5em] text-sm leading-[2.05] text-muted-foreground sm:max-w-xl">
              <p>
                抜け毛・薄毛・分け目のお悩みや、
                <br className="sm:hidden" />
                ヘアカラーヘッドスパとの違いなど、
              </p>
              <p className="mt-4">
                ご予約前にLINEで
                <br className="sm:hidden" />
                ご相談いただけます。
              </p>
            </div>

            <p className="mt-3 text-xs leading-6 text-foreground/50">
              ※1日3名限定のため、
              <br className="sm:hidden" />
              早めのご予約をおすすめしています
            </p>

            <div className="mt-6 flex flex-col gap-3">
              <a
                href={COUBIC_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mx-auto inline-flex w-full max-w-xs items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-medium text-black transition hover:opacity-90"
              >
                ご予約はこちら
              </a>

              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mx-auto inline-flex w-full max-w-xs items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm text-foreground transition hover:border-gold/50 hover:text-gold"
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
