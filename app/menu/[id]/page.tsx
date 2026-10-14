
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { menus } from "@/lib/menu-data"

const RESERVE_URL =
  "https://headspayu.stores.jp/reserve/yuheadspa/services#pageContent"

export function generateStaticParams() {
  return menus.map((menu) => ({ id: menu.id }))
}

export default async function MenuDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const menu = menus.find((item) => item.id === id)

  if (!menu) notFound()

  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <section className="relative flex min-h-[300px] items-center justify-center overflow-hidden sm:min-h-[400px] lg:min-h-[480px]">
        <Image
          src={menu.image}
          alt={menu.tab}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/65" />

        <Link
          href="/#menu"
          className="absolute left-4 top-6 z-10 rounded-full border border-white/40 bg-black/30 px-4 py-3 text-xs text-white sm:left-8"
        >
          ← メニュー一覧へ
        </Link>

        <div className="relative z-10 w-full px-5 py-20 text-center">
          <p className="text-xs tracking-[0.25em] text-gold">
            HEAD SPA MENU
          </p>

          <h1 className="mx-auto mt-5 max-w-3xl break-words text-2xl font-medium leading-relaxed text-white sm:text-3xl lg:text-4xl">
            {menu.tab}
          </h1>

          <p className="mt-3 break-words text-xs tracking-wider text-white/80 sm:text-sm">
            {menu.enTitle}
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-20">
        <section className="mx-auto mb-16 max-w-3xl">
          <div className="mb-8 text-center">
            <p className="text-xs tracking-[0.25em] text-gold">
              ABOUT
            </p>
            <h2 className="mt-3 text-xl font-medium sm:text-2xl">
              コースについて
            </h2>
          </div>

          <div className="space-y-5">
            {menu.descriptionParagraphs.map((paragraph, index) => (
              <p
                key={index}
                className="break-words text-sm leading-8 text-muted-foreground sm:text-base sm:leading-9"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        <section className="mb-16" id="price">
          <div className="mb-8 text-center">
            <p className="text-xs tracking-[0.25em] text-gold">
              PRICE & COURSE
            </p>
            <h2 className="mt-3 text-xl font-medium sm:text-2xl">
              コース・料金
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {menu.items.map((item, index) => (
              <article
                key={`${item.name}-${index}`}
                className="min-w-0 rounded-2xl border border-gold/25 bg-card p-5 sm:p-7"
              >
                {menu.id === "scalp" && index === 1 && (
                  <p className="mb-3 text-xs font-medium tracking-wider text-gold">
                    おすすめコース
                  </p>
                )}

                <h3 className="break-words text-base font-semibold leading-7 sm:text-lg">
                  {item.name}
                </h3>

                <p className="mt-4 break-words text-sm leading-7 text-muted-foreground">
                  {item.detail}
                </p>

                <div className="mt-6 flex flex-wrap items-end justify-between gap-3 border-t border-border/50 pt-5">
                  <span className="text-sm text-muted-foreground">
                    {item.duration}
                  </span>

                  <div className="text-right">
                    <span className="text-2xl font-semibold text-gold sm:text-3xl">
                      {item.price}
                    </span>
                    <span className="ml-2 text-xs text-muted-foreground">
                      税込
                    </span>
                  </div>
                </div>

                <a
                  href={RESERVE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex min-h-12 w-full items-center justify-center rounded-full bg-gold px-5 py-3 text-center text-sm font-medium text-background transition-opacity hover:opacity-80"
                >
                  このコースを予約する →
                </a>
              </article>
            ))}
          </div>

          {menu.id === "scalp" && (
            <p className="mt-5 text-sm leading-7 text-muted-foreground">
              ※ 3コースの違いはケア剤の濃度と使用量です。
              35,000円コースは超高濃度で使用量も多め、
              21,000円は高濃度、18,000円は中濃度です。
              施術による発毛・育毛の結果を保証するものではありません。
            </p>
          )}
        </section>

        <section className="mb-16">
          <div className="mb-8 text-center">
            <p className="text-xs tracking-[0.25em] text-gold">
              TREATMENT
            </p>
            <h2 className="mt-3 text-xl font-medium sm:text-2xl">
              施術内容
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              コースに含まれる主なケア
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {menu.steps.map((step, index) => (
              <div
                key={`${step}-${index}`}
                className="flex min-w-0 items-center gap-4 rounded-xl border border-border/50 bg-card px-4 py-4"
              >
                <span className="shrink-0 text-sm font-medium text-gold">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="min-w-0 break-words text-sm leading-6">
                  {step}
                </span>
              </div>
            ))}
          </div>

          <p className="mt-4 text-xs leading-6 text-muted-foreground">
            ※ 施術内容・順序は頭皮の状態などにより調整する場合があります。
          </p>
        </section>

        <section className="rounded-2xl border border-gold/30 bg-card px-5 py-10 text-center sm:px-10 sm:py-14">
          <p className="text-xs tracking-[0.25em] text-gold">
            RESERVATION
          </p>

          <h2 className="mt-4 text-xl font-medium sm:text-2xl">
            ご予約はこちら
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-muted-foreground">
            完全予約制のプライベートサロンです。
            空き状況は予約ページよりご確認いただけます。
          </p>

          <a
            href={RESERVE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto mt-7 flex min-h-12 w-full max-w-sm items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-80"
          >
            予約ページを開く →
          </a>
        </section>

        <div className="mt-10 text-center">
          <Link
            href="/#menu"
            className="inline-flex min-h-11 items-center justify-center px-5 text-sm text-muted-foreground underline underline-offset-4 hover:text-gold"
          >
            ← ほかのメニューを見る
          </Link>
        </div>
      </div>
    </main>
  )
}
