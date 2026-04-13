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
    a: "当店は完全予約制です。1日3名様限定でご案内しており、前日までに満席となることも多いため、お早めのご予約をおすすめしております。",
  },
  {
    q: "駐車場はありますか？",
    a: "サロン目の前に駐車場を2台分ご用意しております。お車でも安心してご来店いただけます。",
  },
  {
    q: "トータルでどのくらい時間がかかりますか？",
    a: "ご来店からお帰りまで、全体で約2時間を目安としております。",
  },
  {
    q: "2人同時に施術を受けることはできますか？",
    a: "当店はお一人様ずつのご案内です。完全個室で丁寧に施術を行っております。",
  },
  {
    q: "スタイリング剤はつけて来ても大丈夫ですか？",
    a: "はい、大丈夫です。ウエットスパが中心のため問題ございません。",
  },
  {
    q: "ロング料金はありますか？",
    a: "当店ではロング料金はいただいておりません。",
  },
  {
    q: "ヒト幹細胞上清液は安全ですか？",
    a: "国内製造の製品を使用しており、品質管理されたものを採用しております。",
  },
  {
    q: "髪の毛は生えてきますか？",
    a: "育毛には個人差がありますが、頭皮環境の変化を実感される方が多くいらっしゃいます。",
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
            <h2 className="mt-3 text-xl tracking-[0.18em] text-foreground sm:text-2xl">
              初めての方によくあるご質問
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.05}>
          <div className="mb-8 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-gold/20 bg-card px-4 py-4 text-center">
              <p className="text-[10px] text-gold/70">完全予約制</p>
              <p className="text-xs mt-2">1日3名限定</p>
            </div>

            <div className="rounded-2xl border border-gold/20 bg-card px-4 py-4 text-center">
              <p className="text-[10px] text-gold/70">駐車場あり</p>
              <p className="text-xs mt-2">2台分完備</p>
            </div>

            <div className="rounded-2xl border border-gold/20 bg-card px-4 py-4 text-center">
              <p className="text-[10px] text-gold/70">施術時間</p>
              <p className="text-xs mt-2">約2時間</p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>
                  Q. {faq.q}
                </AccordionTrigger>
                <AccordionContent>
                  A. {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>

        {/* 🔥 最重要CTA */}
        <FadeIn delay={0.2}>
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground">
              抜け毛・薄毛・分け目が気になり始めた今が、
              最も変化しやすいタイミングです。
            </p>

            <p className="mt-2 text-xs text-foreground/50">
              ※1日3名限定のため、早めのご予約をおすすめしています
            </p>

            <div className="mt-6 flex flex-col items-center gap-3">
              <a
                href={COUBIC_URL}
                target="_blank"
                className="bg-gold px-6 py-3 text-black rounded-full"
              >
                初回のご予約はこちら
              </a>

              <a
                href={LINE_URL}
                target="_blank"
                className="text-sm text-foreground/70"
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
