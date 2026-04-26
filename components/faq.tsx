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
    a: "はい、初めての方でも安心してご利用いただけます。\nカウンセリングで頭皮や髪のお悩みを丁寧にお伺いし、今の状態に合うケアをご案内いたします。",
  },
  {
    q: "どのメニューを選べばよいか分かりません。",
    a: "ご予約時に迷われる場合は、気になるお悩みに近いメニューをお選びください。\n当日のカウンセリングで状態を確認し、最適な内容をご提案いたします。",
  },
  {
    q: "事前の予約は必要ですか？",
    a: "当店は完全予約制です。\n一日三名様限定のため、事前のご予約をお願いしております。",
  },
  {
    q: "施術時間はどのくらいですか？",
    a: "メニューにより異なりますが、約2時間前後が目安です。\nカウンセリングから施術まで丁寧に行います。",
  },
  {
    q: "育毛ヘッドスパはどんな人におすすめですか？",
    a: "抜け毛・薄毛・分け目・ボリューム不足が気になる方におすすめです。\n頭皮環境を整え、髪が育ちやすい状態へ導きます。",
  },
  {
    q: "一回で効果は分かりますか？",
    a: "頭の軽さやスッキリ感は一回でも実感される方が多いです。\n育毛や頭皮改善は継続的なケアで変化が現れやすくなります。",
  },
]

export function Faq() {
  return (
    <section id="faq" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-5 lg:px-10">

        {/* タイトル */}
        <FadeIn>
          <div className="mb-12 text-center">
            <p className="text-[11px] tracking-[0.4em] text-gold/70">
              FAQ
            </p>

            <h2 className="mt-4 text-[clamp(1.5rem,5vw,2.4rem)] leading-[1.7] tracking-[0.06em] text-foreground">
              初めての方の不安を
              <br />
              ひとつずつ解消します
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-sm leading-8 text-muted-foreground">
              ご来店前に多くいただくご質問を、
              <br />
              分かりやすくまとめました。
            </p>
          </div>
        </FadeIn>

        {/* FAQ本体 */}
        <FadeIn delay={0.1}>
          <div className="rounded-2xl border border-gold/20 bg-card/60 px-4 py-2 shadow-sm sm:px-6">
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

                      <span className="leading-7">
                        {faq.q.replace("。", "。\n").split("\n").map((line, i) => (
                          <span key={i} className="block">
                            {line}
                          </span>
                        ))}
                      </span>
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

        {/* CTA */}
        <FadeIn delay={0.2}>
          <div className="mt-14 rounded-2xl border border-gold/25 bg-card px-6 py-10 text-center shadow-sm">

            <p className="text-[10px] tracking-[0.35em] text-gold/70">
              RESERVE
            </p>

            <h3 className="mt-4 text-[clamp(1.3rem,4vw,1.9rem)] leading-[1.7] tracking-[0.06em] text-foreground">
              迷われている方も
              <br />
              まずはご相談ください
            </h3>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-8 text-muted-foreground">
              状態を確認した上で、
              <br />
              最適なメニューをご提案いたします。
            </p>

            <div className="mx-auto mt-7 flex max-w-[280px] flex-col gap-3">

              <a
                href={COUBIC_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-medium text-black"
              >
                空き状況を見る
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
