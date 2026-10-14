
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { menus } from "@/lib/menu-data"

const RESERVE_URL =
  "https://headspayu.stores.jp/reserve/yuheadspa/services#pageContent"

const menuGuides: Record<
  string,
  {
    headline: string
    lead: string
    recommended: string[]
    highlights: { title: string; description: string }[]
    faq: { question: string; answer: string }[]
  }
> = {
  scalp: {
    headline: "未来の髪のために、今できる上質な頭皮ケア。",
    lead: "髪のボリュームや頭皮環境が気になり始めた方へ。15年以上の経験を活かした手技と、本格ウェットヘッドスパで、頭皮と丁寧に向き合う90分を。",
    recommended: [
      "抜け毛や髪のボリュームが気になる",
      "分け目や髪のハリ・コシが気になる",
      "本格的な頭皮ケアを始めたい",
      "質にこだわったケアを受けたい",
    ],
    highlights: [
      {
        title: "頭皮の状態を丁寧に確認",
        description:
          "マイクロスコープで頭皮の状態を確認し、お悩みに合わせたケアを行います。",
      },
      {
        title: "熟練のウェットヘッドスパ",
        description:
          "スチーム、クリームスパ、洗浄、トリートメントなどを組み合わせた専門ケアです。",
      },
      {
        title: "濃度と使用量で選べる3コース",
        description:
          "Premium・Standard・Lightの3種類から、ご希望やご予算に合わせてお選びいただけます。",
      },
    ],
    faq: [
      {
        question: "3つのコースは何が違いますか？",
        answer:
          "主な違いは頭皮ケア成分の濃度と使用量です。Premiumは超高濃度かつ使用量多め、Standardは高濃度、Lightは中濃度です。いずれも施術時間は90分です。",
      },
      {
        question: "初めてでもPremiumを選べますか？",
        answer:
          "はい。初めての方でもお選びいただけます。ケアの質や使用量を重視される方におすすめしています。",
      },
      {
        question: "1回で髪が生えるようになりますか？",
        answer:
          "発毛や育毛の結果を保証する施術ではありません。頭皮環境を整えることを目的とした美容ケアです。抜け毛などの症状が気になる場合は医療機関への相談もご検討ください。",
      },
    ],
  },
  color: {
    headline: "美しい髪色と、頭皮への思いやりを。",
    lead: "カラーを続けたい。でも頭皮のことも大切にしたい。そんな方へ、ゼロテクニックカラーと本格ウェットヘッドスパを組み合わせた特別なメニューです。",
    recommended: [
      "白髪染めと頭皮ケアを一緒に受けたい",
      "カラー剤が頭皮に触れることが気になる",
      "髪色だけでなく頭皮環境も大切にしたい",
      "落ち着いた個室で施術を受けたい",
    ],
    highlights: [
      {
        title: "ゼロテクニックカラー",
        description:
          "カラー剤を頭皮にできるだけ直接つけないよう、根元からわずかに離して塗布する技術です。",
      },
      {
        title: "ヘアカラーとスパを一度に",
        description:
          "アロマクリームスパや高保水Wトリートメントなどを組み合わせ、心地よい時間を演出します。",
      },
      {
        title: "頭皮ケア付きコースも",
        description:
          "高濃度ヒト幹細胞ケアStandardを組み合わせた上位コースもご用意しています。",
      },
    ],
    faq: [
      {
        question: "普通のヘアカラーとの違いは何ですか？",
        answer:
          "ゼロテクニックカラーに加えて、ウェットヘッドスパやトリートメントなどのケア工程を組み合わせている点が特徴です。",
      },
      {
        question: "ブリーチはできますか？",
        answer: "申し訳ございません。当店ではブリーチを使用しておりません。",
      },
      {
        question: "カラー剤のアレルギーがあっても大丈夫ですか？",
        answer:
          "ゼロテクニックカラーや残留ジアミンへのケアは、アレルギーを防ぐことを保証するものではありません。過去にカラー剤でアレルギー症状が出た方は、施術前に必ずご相談ください。",
      },
    ],
  },
  relaxation: {
    headline: "何もしない贅沢を、90分間。",
    lead: "水・スチーム・アロマクリーム・熟練の手技。ドライヘッドスパとは異なる、本格ウェットスパならではの心地よさをご体験ください。",
    recommended: [
      "毎日忙しく、自分だけの時間がほしい",
      "気分をリフレッシュしたい",
      "本格的なウェットヘッドスパを体験したい",
      "自分へのご褒美を探している",
    ],
    highlights: [
      {
        title: "ドライとは異なるウェットスパ",
        description:
          "シャンプーやスチーム、トリートメントを組み合わせ、頭皮を洗い上げる心地よさまで楽しめます。",
      },
      {
        title: "多彩なリラクゼーション工程",
        description:
          "足湯、カッサ、アロマクリームスパ、ホットストーンなどを取り入れています。",
      },
      {
        title: "完全個室で過ごす90分",
        description:
          "周囲の視線や会話を気にせず、静かな空間でゆったりとお過ごしいただけます。",
      },
    ],
    faq: [
      {
        question: "ドライヘッドスパとは何が違いますか？",
        answer:
          "当店では水やスチーム、シャンプー、トリートメントなどを使用します。頭をほぐすだけでなく、頭皮や髪を洗い上げる工程も含まれます。",
      },
      {
        question: "ヘッドスパが初めてでも大丈夫ですか？",
        answer:
          "はい。初めての方にもお選びいただけるメニューです。気になることがあれば施術前にご相談ください。",
      },
      {
        question: "どんな服装で行けばいいですか？",
        answer:
          "普段の服装でお越しいただけます。施術にあたり気になることがあれば、ご予約前にお問い合わせください。",
      },
    ],
  },
}

export function generateStaticParams() {
  return menus.map((menu) => ({ id: menu.id }))
}

export default async function MenuDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const menu = menus.find((m) => m.id === id)

  if (!menu) notFound()

  const guide = menuGuides[id]
  const isScalp = id === "scalp"

  return (
    <main className="min-h-screen bg-background">
      {/* HERO */}
      <section
        className={`relative w-full overflow-hidden ${
          menu.image
            ? "h-[55svh] min-h-[360px] max-h-[650px]"
            : "h-[35svh] min-h-[280px] bg-zinc-900"
        }`}
      >
        {menu.image && (
          <Image
            src={menu.image}
            alt={menu.tab}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        )}

        <div className="absolute inset-0 bg-black/60" />

        <Link
          href="/#menu"
          className="absolute left-5 top-8 z-10 text-xs tracking-widest text-white/80 transition hover:text-gold lg:left-10"
        >
          ← メニュー一覧へ
        </Link>

        <div className="absolute inset-0 flex flex-col items-center justify-center px-5 text-center">
          <p className="mb-4 text-xs tracking-[0.3em] text-gold">
            PRIVATE HEAD SPA
          </p>
          <h1 className="text-2xl leading-relaxed tracking-wider text-white sm:text-4xl">
            {menu.tab}
          </h1>
          <p className="mt-3 text-xs tracking-widest text-white/70">
            {menu.enTitle}
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-5 py-16 lg:px-10 lg:py-24">
        {/* INTRO */}
        {guide && (
          <section className="mb-20 text-center">
            <p className="text-xs tracking-[0.3em] text-gold">
              YOUR SPECIAL EXPERIENCE
            </p>
            <h2 className="mx-auto mt-6 max-w-3xl text-xl leading-[1.8] text-foreground sm:text-3xl">
              {guide.headline}
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-muted-foreground">
              {guide.lead}
            </p>
          </section>
        )}

        {/* DESCRIPTION */}
        <section className="mb-20">
          <div className="mx-auto max-w-3xl space-y-5 text-center text-sm leading-9 text-muted-foreground">
            {menu.descriptionParagraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </section>

        {/* RECOMMENDED */}
        {guide && (
          <section className="mb-20">
            <div className="mb-9 text-center">
              <p className="text-xs tracking-[0.3em] text-gold">
                RECOMMENDED FOR
              </p>
              <h2 className="mt-3 text-xl text-foreground sm:text-2xl">
                こんな方におすすめ
              </h2>
            </div>

            <div className="mx-auto grid max-w-3xl gap-3 sm:grid-cols-2">
              {guide.recommended.map((text) => (
                <div
                  key={text}
                  className="flex items-start gap-3 border border-border/40 bg-card px-5 py-5"
                >
                  <span className="text-gold">✓</span>
                  <p className="text-sm leading-7 text-foreground">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* HIGHLIGHTS */}
        {guide && (
          <section className="mb-20">
            <div className="mb-9 text-center">
              <p className="text-xs tracking-[0.3em] text-gold">
                OUR COMMITMENT
              </p>
              <h2 className="mt-3 text-xl text-foreground sm:text-2xl">
                このメニューのこだわり
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {guide.highlights.map((item, index) => (
                <div
                  key={item.title}
                  className="border border-gold/20 bg-card p-7"
                >
                  <p className="text-2xl text-gold/70">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-5 text-base leading-7 text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-8 text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* PRICING */}
        <section className="mb-20" id="course">
          <div className="mb-9 text-center">
            <p className="text-xs tracking-[0.3em] text-gold">
              MENU & PRICE
            </p>
            <h2 className="mt-3 text-xl text-foreground sm:text-2xl">
              コース・料金
            </h2>
            <p className="mt-4 text-sm text-muted-foreground">
              すべて90分・税込価格
            </p>
          </div>

          <div className="space-y-4">
            {menu.items.map((item, index) => {
              const isPremium = isScalp && index === 0

              return (
                <article
                  key={item.name}
                  className={`relative border p-6 sm:p-8 ${
                    isPremium
                      ? "border-gold/70 bg-card"
                      : "border-border/40 bg-card"
                  }`}
                >
                  {isPremium && (
                    <span className="mb-5 inline-block rounded-full border border-gold/60 px-4 py-1.5 text-[10px] tracking-[0.15em] text-gold">
                      PREMIUM COLLECTION
                    </span>
                  )}

                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                    <div className="max-w-xl">
                      <h3 className="text-lg leading-8 text-foreground">
                        {item.name}
                      </h3>
                      <p className="mt-3 text-sm leading-8 text-muted-foreground">
                        {item.detail}
                      </p>
                    </div>

                    <div className="shrink-0 sm:text-right">
                      <p className="text-xs text-muted-foreground">
                        {item.duration}
                      </p>
                      <p className="mt-2 text-3xl text-gold">
                        {item.price}
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        税込
                      </p>
                    </div>
                  </div>

                  <a
                    href={RESERVE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-7 flex min-h-12 w-full items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition sm:w-fit ${
                      isPremium
                        ? "bg-gold text-background hover:opacity-90"
                        : "border border-gold/60 text-gold hover:bg-gold hover:text-background"
                    }`}
                  >
                    このコースの空き状況を見る →
                  </a>
                </article>
              )
            })}
          </div>

          {isScalp && (
            <p className="mt-6 text-center text-xs leading-7 text-muted-foreground">
              3コースの主な違いはケア成分の濃度と使用量です。
              施術時間はいずれも90分です。
            </p>
          )}
        </section>

        {/* STEPS */}
        <section className="mb-20">
          <div className="mb-9 text-center">
            <p className="text-xs tracking-[0.3em] text-gold">
              TREATMENT FLOW
            </p>
            <h2 className="mt-3 text-xl text-foreground sm:text-2xl">
              施術内容
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
            {menu.steps.map((step, index) => (
              <div
                key={`${step}-${index}`}
                className="flex min-h-24 items-center justify-center border border-border/40 bg-card px-3 py-4 text-center"
              >
                <div>
                  <p className="mb-2 text-xs text-gold">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="text-xs leading-6 text-foreground">
                    {step}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        {guide && (
          <section className="mb-20">
            <div className="mb-9 text-center">
              <p className="text-xs tracking-[0.3em] text-gold">
                FAQ
              </p>
              <h2 className="mt-3 text-xl text-foreground sm:text-2xl">
                よくあるご質問
              </h2>
            </div>

            <div className="mx-auto max-w-3xl divide-y divide-border/40 border-y border-border/40">
              {guide.faq.map((item) => (
                <details key={item.question} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm leading-7 text-foreground">
                    <span>Q. {item.question}</span>
                    <span className="shrink-0 text-lg text-gold group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 pr-6 text-sm leading-8 text-muted-foreground">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>
        )}

        {/* FINAL CTA */}
        <section className="border border-gold/30 bg-card px-6 py-12 text-center sm:px-10 sm:py-16">
          <p className="text-xs tracking-[0.3em] text-gold">
            FIRST VISIT
          </p>
          <h2 className="mt-5 text-xl leading-8 text-foreground sm:text-2xl">
            初めての方も、安心してお越しください。
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-muted-foreground">
            完全予約制・完全個室のヘッドスパ専門店ゆう。
            お悩みやご希望を伺いながら、丁寧にご案内いたします。
            自分のためだけの特別な時間をお楽しみください。
          </p>

          <a
            href={RESERVE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto mt-8 flex min-h-12 w-full max-w-sm items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-medium text-background transition hover:opacity-90"
          >
            空き状況を確認して予約する →
          </a>

          <Link
            href="/#menu"
            className="mt-7 inline-block text-sm text-muted-foreground underline underline-offset-4 transition hover:text-gold"
          >
            ほかのメニューを見る
          </Link>
        </section>
      </div>
    </main>
  )
}
