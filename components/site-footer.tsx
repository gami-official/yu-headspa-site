
"use client"

const MAP_LINK_URL =
  "https://www.google.com/maps/search/?api=1&query=福岡県福岡市西区豊浜2丁目20-20-2"

const RESERVE_URL =
  "https://headspayu.stores.jp/reserve/yuheadspa/services#pageContent"

const TEL_LINK = "tel:0922849392"
const LINE_URL = "https://lin.ee/7hso3k1"

const GIFT_URL =
  "https://gamistore.base.shop/items/144607972"

const ONLINE_URL = "https://headspayu.stores.jp/"

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
  }
}

const features = [
  {
    label: "15年以上",
    detail: "施術経験",
  },
  {
    label: "完全個室",
    detail: "プライベート空間",
  },
  {
    label: "1日3名",
    detail: "丁寧なおもてなし",
  },
  {
    label: "駐車場2台",
    detail: "店舗前に完備",
  },
]

export function SiteFooter() {
  const trackReserve = () => {
    window.dataLayer = window.dataLayer || []

    window.dataLayer.push({
      event: "reserve_click",
      reserve_location: "site_footer",
    })
  }

  return (
    <footer className="border-t border-gold/15 bg-background">
      <div className="mx-auto max-w-5xl px-5 pb-14 pt-14 text-center sm:pt-16 lg:px-10">
        <p className="text-[10px] tracking-[0.28em] text-gold/70">
          YOUR PRIVATE TIME
        </p>

        <h2 className="mx-auto mt-5 max-w-xl text-[clamp(1.5rem,5vw,2.2rem)] leading-[1.65] tracking-[0.03em] text-foreground">
          あなただけの、
          <br />
          上質なひとときを。
        </h2>

        <p className="mx-auto mt-5 max-w-lg text-sm leading-8 text-muted-foreground">
          技術も、空間も、おもてなしも。
          <br />
          一人ひとりに寄り添うヘッドスパを。
        </p>

        <div className="mx-auto mt-9 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.label}
              className="flex min-h-[92px] flex-col items-center justify-center rounded-2xl border border-gold/20 bg-card px-3 py-4"
            >
              <p className="text-sm font-medium tracking-[0.03em] text-foreground">
                {feature.label}
              </p>

              <p className="mt-2 text-[10px] leading-5 text-muted-foreground">
                {feature.detail}
              </p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-9 flex max-w-[560px] flex-col gap-3 sm:flex-row sm:justify-center">
          <a
            href={RESERVE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackReserve}
            className="inline-flex min-h-12 flex-1 items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-medium tracking-[0.08em] text-black transition hover:opacity-90"
          >
            ご予約・空き状況を見る
          </a>

          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 flex-1 items-center justify-center rounded-full border border-gold/40 px-6 py-3 text-sm tracking-[0.06em] text-foreground transition hover:border-gold hover:text-gold"
          >
            LINEで相談する
          </a>
        </div>

        <p className="mt-5 text-xs leading-7 text-muted-foreground">
          完全予約制・完全個室
        </p>
      </div>

      <div className="border-t border-border/30">
        <div className="mx-auto grid max-w-5xl gap-10 px-5 pb-12 pt-12 md:grid-cols-2 md:items-start lg:px-10">
          <div className="text-center md:text-left">
            <p className="text-[10px] tracking-[0.28em] text-gold/70">
              YU HEAD SPA
            </p>

            <h3 className="mt-4 text-lg leading-8 tracking-[0.04em] text-foreground">
              ヘッドスパ専門店 ゆう 本店
            </h3>

            <div className="mt-5 space-y-3 text-sm leading-7 text-muted-foreground">
              <p>
                〒819-0014
                <br />
                福岡県福岡市西区豊浜2丁目20-20-2
              </p>

              <p>
                TEL：
                <a
                  href={TEL_LINK}
                  className="text-foreground underline underline-offset-4 transition hover:text-gold"
                >
                  092-284-9392
                </a>
              </p>

              <p>営業時間：9:30〜16:30</p>

              <p>定休日：日曜日</p>

              <p>完全個室・駐車場2台完備</p>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="w-full max-w-sm rounded-2xl border border-gold/15 bg-card/50 p-6">
              <p className="text-center text-sm leading-7 text-muted-foreground md:text-left">
                ご来店の際は、店舗所在地をご確認ください。
              </p>

              <a
                href={MAP_LINK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-full border border-gold/40 px-5 py-3 text-sm text-foreground transition hover:bg-gold/10"
              >
                Googleマップで場所を見る →
              </a>

              <div className="mt-6 border-t border-border/40 pt-5">
                <p className="mb-3 text-[10px] tracking-[0.2em] text-gold/70">
                  ONLINE SERVICES
                </p>

                <div className="space-y-3">
                  <a
                    href={GIFT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm text-foreground/80 transition hover:text-gold"
                  >
                    ギフトカードを見る →
                  </a>

                  <a
                    href={ONLINE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm text-foreground/80 transition hover:text-gold"
                  >
                    会員限定オンラインストア →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border/30 px-5 py-7 text-center">
        <p className="text-xs leading-6 text-muted-foreground">
          福岡市西区の完全個室ヘッドスパ専門店
        </p>

        <p className="mt-2 text-[10px] leading-6 text-muted-foreground">
          © {new Date().getFullYear()} ヘッドスパ専門店 ゆう 本店
          All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
