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
    q: "初めてでも予約して大丈夫ですか？",
    a: "はい。初めての方でも安心してご利用いただけます。\n当店は完全個室・完全予約制のため、人目を気にせず頭皮や髪のお悩みをご相談いただけます。",
  },
  {
    q: "高級サロンとのことですが、どんな方が多いですか？",
    a: "40代以降の女性、経営者、医療関係者、美容意識の高い方など、安さよりも質や結果を重視されるお客様が多くご来店されています。",
  },
  {
    q: "育毛ヘッドスパはどんな人に向いていますか？",
    a: "分け目・頭頂部・抜け毛・ボリューム低下・髪密度の印象が気になる方におすすめです。\n一時的な癒しではなく、将来の髪を見据えた頭皮ケアをご提供します。",
  },
  {
    q: "ヘアカラーヘッドスパは普通のカラーと何が違いますか？",
    a: "ただ染めるだけではなく、頭皮環境と髪質まで考えたケアです。\n白髪・艶不足・エイジング毛が気になる大人女性に向けて、品のある髪色と印象づくりを目指します。",
  },
  {
    q: "一回で効果は分かりますか？",
    a: "頭の軽さやスッキリ感、髪のまとまりは一回でも実感される方が多いです。\n育毛・頭皮改善・年齢髪ケアは継続することで変化を感じやすくなります。",
  },
  {
    q: "安いヘッドスパや美容室との違いは何ですか？",
    a: "当店は価格の安さではなく、完全個室・一日三名限定・専門技術・頭皮から印象を整えることに価値を置いています。\n流れ作業ではなく、お一人ずつ丁寧に向き合います。",
  },
  {
    q: "どのメニューを選べばよいか分かりません。",
    a: "分け目・薄毛が気になる方は育毛ヘッドスパ、白髪・艶不足が気になる方はヘアカラーヘッドスパがおすすめです。\n迷われる場合は、当日状態を確認して最適な内容をご提案します。",
  },
  {
    q: "事前予約は必要ですか？",
    a: "はい。完全予約制です。\n施術品質を保つため、一日三名様限定でご案内しております。ご希望日時がある場合は早めのご予約をおすすめします。",
  },
]

export function Faq() {
  return (
    <section id="faq" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-5 lg:px-10">
        <FadeIn>
          <div className="mb-12 text-center">
            <p className="text-[11px] tracking-[0.4em] text-gold/70">
              FAQ
            </p>

            <h2 className="mt-4 text-[clamp(1.55rem,5vw,2.5rem)] leading-[1.75] tracking-[0.07em] text-foreground">
              高級頭皮美容を
              <br />
              初めて受ける方へ
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-sm leading-8 text-muted-foreground">
              育毛・白髪・年齢髪・完全個室について、
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
              一日三名限定。
              <br />
              まずは空き状況をご確認ください。
            </h3>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-8 text-muted-foreground">
              分け目・白髪・艶不足・頭皮環境など。
              <br />
              状態を確認しながら、最適なケアをご提案します。
            </p>

            <div className="mx-auto mt-7 flex max-w-[280px] flex-col gap-3">
              <a
                href={COUBIC_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-medium text-black"
              >
                ご予約枠を確認する
              </a>

              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-gold/30 px-6 py-3 text-sm text-foreground"
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
