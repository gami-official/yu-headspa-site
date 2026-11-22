
"use client"

import { FadeIn } from "@/components/fade-in"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const RESERVE_URL =
  "https://headspayu.stores.jp/reserve/yuheadspa/services#pageContent"

const GIFT_STORE_URL =
  "https://gamistore.base.shop/items/144607972"

const LINE_URL = "https://lin.ee/7hso3k1"

const faqs = [
  {
    category: "GIFT",
    question: "ヘッドスパをプレゼントできますか？",
    answer:
      "はい。大切な方への贈り物として、ヘッドスパのギフトカードをご用意しています。誕生日や記念日、お祝いなどにご利用いただけます。",
  },
  {
    category: "GIFT",
    question: "ギフトカードはどこで購入できますか？",
    answer:
      "当サイトの「ギフト購入」ボタンから、専用のオンライン販売ページをご覧いただけます。ギフトの内容や購入条件は販売ページでご確認ください。",
  },
  {
    category: "GIFT",
    question: "ギフトを贈る前に相談できますか？",
    answer:
      "はい。贈るお相手やメニューについて迷われた場合は、LINEからお気軽にご相談ください。",
  },
  {
    category: "SCALP CARE",
    question: "薄毛や分け目、髪のボリュームについて相談できますか？",
    answer:
      "はい。髪や頭皮のお悩みを伺い、目的に合わせた育毛ヘッドスパをご案内します。施術は医療行為ではなく、発毛や増毛の効果を保証するものではありません。",
  },
  {
    category: "SCALP CARE",
    question: "育毛ヘッドスパはどのコースを選べばよいですか？",
    answer:
      "Light・Standard・Premiumの3コースをご用意しています。使用するケアの濃度や量などが異なりますので、各メニューの詳細をご確認ください。迷われる場合は事前にご相談いただけます。",
  },
  {
    category: "HAIR COLOR",
    question: "ヘアカラーとヘッドスパを一緒に受けられますか？",
    answer:
      "はい。ゼロテクニックカラーとウェットヘッドスパを組み合わせた、カラーヘッドスパをご用意しています。",
  },
  {
    category: "HAIR COLOR",
    question: "白髪や髪の艶についても相談できますか？",
    answer:
      "はい。髪色や仕上がりのご希望を伺いながら、メニューをご案内します。髪や頭皮の状態によって施術内容をご相談させていただく場合があります。",
  },
  {
    category: "SALON",
    question: "初めてでも大丈夫ですか？",
    answer:
      "はい。完全個室のプライベート空間で、初めての方にも丁寧にご案内しています。",
  },
  {
    category: "SALON",
    question: "男性も予約できますか？",
    answer:
      "はい。男性のお客様もご利用いただけます。",
  },
  {
    category: "SALON",
    question: "1回の施術で変化を感じられますか？",
    answer:
      "施術後のすっきり感や髪のまとまりなど、感じ方には個人差があります。育毛ヘッドスパについても、1回の施術で特定の効果をお約束するものではありません。",
  },
  {
    category: "SALON",
    question: "無理な勧誘はありますか？",
    answer:
      "無理な勧誘は行っておりません。ご希望やお悩みに合わせてご案内します。",
  },
  {
    category: "SALON",
    question: "駐車場はありますか？",
    answer:
      "はい。店舗前に2台分の駐車スペースをご用意しています。",
  },
  {
    category: "RESERVATION",
    question: "予約は必要ですか？",
    answer:
      "はい。完全予約制・1日3名限定でご案内しています。事前にオンライン予約ページから空き状況をご確認ください。",
  },
  {
    category: "RESERVATION",
    question: "メニュー選びに迷った場合はどうすればよいですか？",
    answer:
      "気になるメニューの詳細をご確認いただくか、LINEでご相談ください。施術内容については当日もご相談いただけます。",
  },
]

export function Faq() {
  const trackReserve = () => {
    window.dataLayer = window.dataLayer || []

    window.dataLayer.push({
      event: "reserve_click",
      reserve_location: "faq",
    })
  }

  const trackGift = () => {
    window.dataLayer = window.dataLayer || []

    window.dataLayer.push({
      event: "gift_click",
      click_location: "faq",
    })
  }

  return (
    <section
      id="faq"
      className="scroll-mt-24 bg-background py-16 lg:py-24"
    >
      <div className="mx-auto max-w-4xl px-5 lg:px-10">
        <FadeIn>
          <div className="mb-10 text-center">
            <p className="text-[10px] tracking-[0.28em] text-gold/70">
              FREQUENTLY ASKED QUESTIONS
            </p>

            <h2 className="mt-4 text-[clamp(1.55rem,6vw,2.4rem)] leading-[1.55] tracking-[0.03em] text-foreground">
              よくあるご質問
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-8 text-muted-foreground">
              ギフトのご購入から、
              <br className="sm:hidden" />
              育毛・カラーヘッドスパのご相談まで。
              <br />
              初めての方にも安心してお選びいただけるよう、
              よくあるご質問をまとめました。
            </p>

            <div className="mx-auto mt-7 h-px w-16 bg-gold/50" />
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="rounded-[26px] border border-gold/20 bg-card/60 px-4 py-2 shadow-sm sm:px-6">
            <Accordion
              type="single"
              collapsible
              className="w-full"
            >
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={faq.question}
                  value={`item-${index}`}
                  className="border-border/30"
                >
                  <AccordionTrigger className="py-5 text-left text-sm leading-7 text-foreground hover:no-underline">
                    <div className="flex min-w-0 items-start gap-3 pr-2">
                      <span className="shrink-0 text-gold/70">
                        Q.
                      </span>

                      <div className="min-w-0">
                        <span className="mb-1 block text-[10px] tracking-[0.13em] text-gold/70">
                          {faq.category}
                        </span>

                        <span className="block">
                          {faq.question}
                        </span>
                      </div>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className="pb-5 pl-5 text-[13px] leading-8 text-muted-foreground">
                    <span className="mr-1 text-gold/60">
                      A.
                    </span>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </FadeIn>

        {/* ギフト購入への導線 */}
        <FadeIn delay={0.15}>
          <div className="mt-12 rounded-[28px] border border-[#d6b36a]/35 bg-[#111111] px-6 py-11 text-center text-white sm:px-10">
            <p className="text-[10px] tracking-[0.28em] text-[#d6b36a]">
              PREMIUM HEAD SPA GIFT
            </p>

            <h3 className="mt-5 text-[clamp(1.4rem,5vw,2rem)] leading-[1.7] tracking-[0.04em]">
              大切な方へ、
              <br />
              贅沢なひとときを。
            </h3>

            <p className="mx-auto mt-5 max-w-lg text-sm leading-8 text-white/75">
              誕生日や記念日、感謝を伝えたい日に。
              <br />
              心に残るヘッドスパ体験を贈りませんか。
            </p>

            <a
              href={GIFT_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackGift}
              className="mx-auto mt-8 inline-flex min-h-14 w-full max-w-sm items-center justify-center rounded-full bg-[#d6b36a] px-6 py-4 text-sm font-medium tracking-[0.05em] text-black transition hover:bg-[#e5c784]"
            >
              ギフトカードの詳細・購入はこちら ↗
            </a>
          </div>
        </FadeIn>

        {/* 施術予約・相談 */}
        <FadeIn delay={0.2}>
          <div className="mt-8 rounded-[28px] border border-gold/25 bg-card px-6 py-9 text-center shadow-sm">
            <p className="text-[10px] tracking-[0.28em] text-gold/70">
              RESERVATION & CONSULTATION
            </p>

            <h3 className="mt-4 text-[clamp(1.3rem,5vw,1.9rem)] leading-[1.55] tracking-[0.03em] text-foreground">
              ご予約・ご相談はこちら
            </h3>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-8 text-muted-foreground">
              完全個室・1日3名限定。
              <br />
              育毛・カラーヘッドスパについても、
              お気軽にご相談ください。
            </p>

            <div className="mx-auto mt-7 flex max-w-sm flex-col gap-3">
              <a
                href={RESERVE_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackReserve}
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-gold/70 px-6 py-3 text-sm font-medium text-gold transition hover:bg-gold hover:text-black"
              >
                空き状況を確認・予約する ↗
              </a>

              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-gold/30 px-6 py-3 text-sm text-foreground transition hover:border-gold hover:text-gold"
              >
                LINEで相談する ↗
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
