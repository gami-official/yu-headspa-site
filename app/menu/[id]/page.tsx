
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
  }
> = {
  scalp: {
    headline: "これからの髪のために、今できる頭皮ケアを。",
    lead: "髪のボリュームや頭皮の状態が気になり始めた方へ。15年以上の施術経験を活かし、一人ひとりの頭皮に向き合う本格ウェットヘッドスパです。",
    recommended: [
      "髪のハリ・コシやボリュームが気になる",
      "頭皮の乾燥やベタつきが気になる",
      "本格的な頭皮ケアを始めたい",
      "自分に合ったケアを相談したい",
    ],
    highlights: [
      {
        title: "頭皮の状態に合わせたケア",
        description:
          "頭皮の状態やお悩みを確認し、一人ひとりに合わせて丁寧に施術します。",
      },
      {
        title: "本格ウェットヘッドスパ",
        description:
          "水やスチーム、洗浄と熟練の手技を組み合わせ、頭皮環境を整えることを目指します。",
      },
      {
        title: "濃度別のコースをご用意",
        description:
          "ご希望やご予算に合わせてコースを選べます。具体的な施術内容の違いはご予約前にご確認ください。",
      },
    ],
  },
  color: {
    headline: "美しい髪色も、頭皮への思いやりも。",
    lead: "ヘアカラーを楽しみたい。でも頭皮のことも大切にしたい。そんな方に向けた、ヘアカラーとヘッドスパを組み合わせたメニューです。",
    recommended: [
      "カラーと頭皮ケアを一緒に受けたい",
      "髪色だけでなく頭皮にも気を配りたい",
      "落ち着いた個室でカラーを楽しみたい",
      "施術時間も上質なリラックスタイムにしたい",
    ],
    highlights: [
      {
        title: "ヘアカラーとスパを一度に",
        description:
          "髪色の仕上がりと頭皮への配慮を大切にした、専門店ならではの組み合わせです。",
      },
      {
        title: "完全個室でゆったり",
        description:
          "周囲を気にせず、落ち着いた空間で施術をお受けいただけます。",
      },
      {
        title: "経験を活かした丁寧な施術",
        description:
          "髪や頭皮の状態、ご希望を確認しながら施術を進めます。",
      },
    ],
  },
  relaxation: {
    headline: "ただ休むだけではない、深く満たされる時間。",
    lead: "毎日頑張る自分に、特別なひとときを。完全個室の空間で、水と温もりに包まれる本格ウェットヘッドスパをご体験ください。",
    recommended: [
      "仕事や日常から離れてリフレッシュしたい",
      "ドライヘッドスパとは違う体験をしたい",
      "自分へのご褒美を探している",
      "大切な方へのギフトを検討している",
    ],
    highlights: [
      {
        title: "ウェットスパならではの心地よさ",
        description:
          "水やスチームを使った施術で、ドライスパとは異なる体験をお楽しみいただけます。",
      },
      {
        title: "五感に配慮した空間",
        description:
          "照明や香り、音、温度までこだわり、心地よい時間を演出します。",
      },
      {
        title: "自分だけのプライベート時間",
        description:
          "完全予約制・完全個室で、周囲を気にせずゆったりお過ごしいただけます。",
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

  return (
    <main className="min-h-screen bg-background">
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
            className="object-cover"
            sizes="100vw"
            priority
          />
        )}

        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute left-5 top-8 z-10 lg:left-10">
          <Link
            href="/#menu"
            className="text-xs tracking-widest text-white/80 transition hover:text-gold"
          >
            ← メニュー一覧へ
          </Link>
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center px-5 text-center">
          <p className="mb-4 text-xs tracking-[0.35em] text-gold">
            HEAD SPA MENU
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
        {guide && (
          <section className="mb-20 text-center">
            <p className="text-xs tracking-[0.3em] text-gold">
              FOR YOUR BEAUTY & WELLNESS
            </p>
            <h2 className="mx-auto mt-6 max-w-3xl text-xl leading-[1.8] text-foreground sm:text-3xl">
              {guide.headline}
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-muted-foreground">
              {guide.lead}
            </p>
          </section>
        )}

        <section className="mb-20">
          <div className="mx-auto max-w-3xl space-y-5 text-center text-sm leading-9 text-muted-foreground">
            {menu.descriptionParagraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </section>

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

        <section className="mb-20">
          <div className="mb-9 text-center">
            <p className="text-xs tracking-[0.3em] text-gold">
              MENU & PRICE
            </p>
            <h2 className="mt-3 text-xl text-foreground sm:text-2xl">
              コース・料金
            </h2>
          </div>

          <div className="border border-border/40 bg-card">
            {menu.items.map((item, index) => (
              <div
                key={item.name}
                className={`px-5 py-7 sm:px-8 ${
                  index < menu.items.length - 1
                    ? "border-b border-border/40"
                    : ""
                }`}
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-base leading-7 text-foreground">
                      {item.name}
                    </h3>
                    {item.detail && (
                      <p className="mt-2 text-xs leading-6 text-muted-foreground">
                        {item.detail}
                      </p>
                    )}
                  </div>

                  <div className="shrink-0 sm:text-right">
                    <p className="text-xs text-muted-foreground">
                      {item.duration}
                    </p>
                    <p className="mt-1 text-2xl text-gold">
                      {item.price}
                      <span className="ml-2 text-xs text-muted-foreground">
                        税込
                      </span>
                    </p>
                  </div>
                </div>

                <a
                  href={RESERVE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex min-h-11 w-full items-center justify-center rounded-full border border-gold bg-gold px-6 py-3 text-sm font-medium text-background transition hover:opacity-90 sm:w-auto"
                >
                  空き状況・予約を確認する →
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <div className="mb-9 text-center">
            <p className="text-xs tracking-[0.3em] text-gold">
              TREATMENT
            </p>
            <h2 className="mt-3 text-xl text-foreground sm:text-2xl">
              施術内容
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
            {menu.steps.map((step, index) => (
              <div
                key={`${step}-${index}`}
                className="flex min-h-20 items-center justify-center border border-border/40 bg-card px-3 py-4 text-center"
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

        <section className="border border-gold/25 bg-card px-6 py-12 text-center sm:px-10">
          <p className="text-xs tracking-[0.3em] text-gold">
            FIRST VISIT
          </p>
          <h2 className="mt-4 text-xl text-foreground sm:text-2xl">
            初めてのお客様へ
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-muted-foreground">
            初めてのヘッドスパでもご安心ください。
            ご希望や気になることを伺いながら、
            お一人おひとりに合わせて丁寧にご案内します。
            コース選びに迷われた場合もお気軽にご相談ください。
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
            className="mt-6 inline-block text-sm text-muted-foreground underline underline-offset-4 transition hover:text-gold"
          >
            ほかのメニューも見る
          </Link>
        </section>
      </div>
    </main>
  )
}
