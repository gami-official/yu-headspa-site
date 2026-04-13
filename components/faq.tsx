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
    q: "高濃度ヒト幹細胞ケアは安全ですか？",
    a: "国内製造の製品を使用しており、品質管理されたものを採用しております。",
  },
  {
    q: "髪の毛は生えてきますか？",
    a: "育毛には個人差がありますが、頭皮環境の変化を実感される方が多くいらっしゃいます。",
  },
  {
    q: "カラーやパーマの次の日にヘッドスパはできますか？",
    a: "カラーやパーマの施術後は、1週間ほど間隔を空けていただくことをおすすめしております。",
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

            <h2 className="mt-3 text-xl leading-relaxed tracking-[0.18em] text-foreground sm:text-2xl">
              初めての方によくあるご質問
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">
              育毛ヘッドスパやヘアカラーヘッドスパをご検討中の方から、
              特に多くいただくご質問をまとめました。
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.05}>
          <div className="mb-8 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-gold/20 bg-card px-4 py-4 text-center">
              <p className="text-[10px] tracking-[0.25em] text-gold/70">
                RESERVATION
              </p>
              <p className="mt-2 text-xs leading-6 text-foreground/75">
                完全予約制
                <br />
                1日3名様限定
              </p>
            </div>

            <div className="rounded-2xl border border-gold/20 bg-card px-4 py-4 text-center">
              <p className="text-[10px] tracking-[0.25em] text-gold/70">
                ACCESS
              </p>
              <p className="mt-2 text-xs leading-6 text-foreground/75">
                駐車場あり
                <br />
                2台分完備
              </p>
            </div>

            <div className="rounded-2xl border border-gold/20 bg-card px-4 py-4 text-center">
              <p className="text-[10px] tracking-[0.25em] text-gold/70">
                TIME
              </p>
              <p className="mt-2 text-xs leading-6 text-foreground/75">
                施術時間
                <br />
                約2時間
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
                  <AccordionTrigger className="flex min-h-[44px] items-center py-5 text-left text-sm tracking-[0.03em] text-foreground/85 hover:text-gold hover:no-underline md:py-6 lg:text-[15px]">
                    <span className="flex items-start gap-3">
                      <span className="shrink-0 text-[11px] tracking-[0.18em] text-gold/60">
                        Q.
                      </span>
                      <span>{faq.q}</span>
                    </span>
                  </AccordionTrigger>

                  <AccordionContent className="pb-6 pl-6 pr-2 text-xs leading-[2.1] tracking-[0.02em] text-muted-foreground md:pl-7 lg:text-[13px]">
                    <div className="flex gap-2">
                      <span className="shrink-0 text-[11px] tracking-[0.18em] text-gold/40">
                        A.
                      </span>
                      <span>{faq.a}</span>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-10 rounded-2xl border border-gold/20 bg-card px-6 py-8 text-center lg:px-10">
            <p className="text-[10px] tracking-[0.35em] text-gold/70">
              RESERVE & CONSULT
            </p>

            <h3 className="mt-3 text-lg tracking-[0.15em] text-foreground sm:text-xl">
              メニュー選びに迷う方もご安心ください
            </h3>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">
              抜け毛・薄毛・分け目のお悩みや、
              ヘアカラーヘッドスパとの違いが分からない場合も、
              ご予約前にLINEでご相談いただけます。
            </p>

            <p className="mt-3 text-xs text-foreground/50">
              ※1日3名限定のため、早めのご予約をおすすめしています
            </p>

            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={COUBIC_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-w-[220px] items-center justify-center rounded-full border border-gold bg-gold px-6 py-3 text-sm tracking-[0.12em] text-background transition hover:opacity-90"
              >
                初回のご予約はこちら
              </a>

              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-w-[220px] items-center justify-center rounded-full border border-foreground/20 px-6 py-3 text-sm tracking-[0.12em] text-foreground transition hover:border-gold/50 hover:text-gold"
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
