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
    a: "はい、初めての方にも安心してお越しいただけるよう、カウンセリングで頭皮や髪のお悩みを丁寧にお伺いします。無理なご提案はせず、今の状態に合うケアをご案内いたします。",
  },
  {
    q: "どのメニューを選べばよいか分かりません。",
    a: "ご予約時に迷われる場合は、気になるお悩みに近いメニューをお選びください。当日のカウンセリングで状態を確認し、必要に応じて最適な内容をご提案いたします。",
  },
  {
    q: "事前の予約は必要ですか？",
    a: "当店は完全予約制です。一日三名様限定でお一人おひとりの時間を確保しているため、早めのご予約をおすすめしております。",
  },
  {
    q: "当日予約はできますか？",
    a: "空きがある場合は当日予約も可能です。ただし一日三名限定のため、満席となる日もございます。空き状況ページよりご確認ください。",
  },
  {
    q: "施術時間はどのくらいですか？",
    a: "メニューにより異なりますが、ご来店からお帰りまで約2時間前後を目安にお考えください。カウンセリング・施術・お仕上げまで丁寧に行います。",
  },
  {
    q: "カウンセリングでは何をしますか？",
    a: "抜け毛・薄毛・白髪・頭皮の違和感・疲労感などのお悩みを伺い、頭皮や髪の状態に合わせて施術内容をご提案します。",
  },
  {
    q: "無理な勧誘や高額商品の販売はありますか？",
    a: "ございません。お客様に安心して通っていただくことを大切にしているため、必要のないメニューや商品を無理におすすめすることはありません。",
  },
  {
    q: "育毛ヘッドスパはどんな人におすすめですか？",
    a: "抜け毛・薄毛・分け目・ボリューム不足・ハリコシの低下が気になる方におすすめです。頭皮環境を整え、髪が育ちやすい土台づくりを目指します。",
  },
  {
    q: "一回で効果は分かりますか？",
    a: "頭の軽さやスッキリ感、髪のまとまりなどは一回でも実感される方が多いです。育毛や頭皮環境の変化は継続的なケアで実感しやすくなります。",
  },
  {
    q: "薄毛がかなり進んでいても受けられますか？",
    a: "はい、受けていただけます。状態によりご提案内容は変わりますが、頭皮環境を整えるケアとしてご相談いただけます。",
  },
  {
    q: "白髪にも効果がありますか？",
    a: "白髪そのものをすぐに黒く戻す施術ではありませんが、頭皮環境や髪の土台を整えることで、健やかな髪を育むサポートを行います。",
  },
  {
    q: "ヘアカラーヘッドスパは普通のカラーと何が違いますか？",
    a: "髪色を整えるだけでなく、カラー時の頭皮負担に配慮しながら頭皮ケアまで同時に行うメニューです。将来の髪と頭皮を大切にしたい方におすすめです。",
  },
  {
    q: "カラーで頭皮がしみやすいのですが大丈夫ですか？",
    a: "頭皮状態を確認し、負担に配慮した施術を行います。ただし強い炎症や痛みがある場合は、安全のため施術を控えることがあります。",
  },
  {
    q: "リラクゼーション目的でも利用できますか？",
    a: "はい、もちろんです。頭の重さ・眼精疲労・首肩のこわばり・睡眠の質が気になる方にも多くご利用いただいております。",
  },
  {
    q: "男性も利用できますか？",
    a: "はい、男性のお客様もご利用いただけます。抜け毛・薄毛・頭皮のベタつき・疲労感などのお悩みに合わせてご提案いたします。",
  },
  {
    q: "完全個室ですか？",
    a: "はい、完全個室のプライベート空間で施術いたします。周囲を気にせず、ゆっくりとお過ごしいただけます。",
  },
  {
    q: "駐車場はありますか？",
    a: "はい、サロン前に2台分の駐車場をご用意しております。お車でも安心してご来店いただけます。",
  },
  {
    q: "施術後に予定を入れても大丈夫ですか？",
    a: "基本的には問題ありません。施術後は髪を整えてお帰りいただけますので、その後のお出かけ前にもご利用いただけます。",
  },
  {
    q: "メイクしたままでも大丈夫ですか？",
    a: "はい、大丈夫です。ただし施術中に額まわりやフェイスラインに触れる場合がございますので、気になる方は簡単なお直し道具をお持ちください。",
  },
  {
    q: "支払い方法は何がありますか？",
    a: "お支払い方法はご来店時にご案内しております。事前に確認されたい場合は、LINEよりお気軽にお問い合わせください。",
  },
  {
    q: "キャンセルや変更はできますか？",
    a: "ご予約の変更やキャンセルは、できるだけお早めにご連絡ください。一日三名限定のため、直前の変更は他のお客様のご案内に影響する場合がございます。",
  },
  {
    q: "どのくらいの頻度で通うのがおすすめですか？",
    a: "お悩みや頭皮状態によりますが、頭皮環境を整えたい方は定期的なケアがおすすめです。カウンセリング時に無理のない頻度をご提案いたします。",
  },
]

export function Faq() {
  return (
    <section id="faq" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-5 lg:px-10">
        <FadeIn>
          <div className="mb-12 text-center">
            <p className="text-[11px] tracking-[0.45em] text-gold/70">
              FAQ
            </p>

            <h2 className="mt-4 text-[clamp(1.7rem,5vw,2.6rem)] leading-[1.65] tracking-[0.08em] text-foreground">
              初めての方の不安を
              <br />
              ひとつずつ解消します
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-muted-foreground sm:text-[15px]">
              育毛・白髪・カラー・リラクゼーションまで、
              ご来店前に多くいただくご質問をまとめました。
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="rounded-2xl border border-gold/20 bg-card/60 px-4 py-2 shadow-sm sm:px-6">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-border/30"
                >
                  <AccordionTrigger className="py-5 text-left text-sm leading-7 text-foreground/90 hover:text-gold hover:no-underline lg:text-[15px]">
                    <span className="flex gap-3">
                      <span className="shrink-0 text-gold/70">Q.</span>
                      <span>{faq.q}</span>
                    </span>
                  </AccordionTrigger>

                  <AccordionContent className="pb-6 pl-5 text-xs leading-[2.1] text-muted-foreground lg:text-[13px]">
                    <span className="text-gold/50">A. </span>
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-14 rounded-2xl border border-gold/25 bg-card px-6 py-10 text-center shadow-sm">
            <p className="text-[10px] tracking-[0.35em] text-gold/70">
              RESERVE & CONSULT
            </p>

            <h3 className="mt-4 text-[clamp(1.35rem,4vw,2rem)] leading-[1.75] tracking-[0.06em] text-foreground">
              メニュー選びに迷う方も
              <br />
              ご安心ください
            </h3>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-muted-foreground">
              頭皮や髪の状態を確認した上で、
              お悩みに合わせた最適なケアをご提案いたします。
            </p>

            <p className="mt-4 text-xs leading-6 text-foreground/50">
              完全予約制・一日三名限定
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <a
                href={COUBIC_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-w-[230px] items-center justify-center rounded-full bg-gold px-6 py-3.5 text-sm font-medium tracking-[0.08em] text-black transition hover:opacity-90"
              >
                空き状況を見る
              </a>

              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-w-[230px] items-center justify-center rounded-full border border-foreground/20 px-6 py-3.5 text-sm tracking-[0.08em] text-foreground transition hover:border-gold/50 hover:text-gold"
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
