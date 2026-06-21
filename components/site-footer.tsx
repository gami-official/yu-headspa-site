"use client"

const MAP_LINK_URL =
  "https://www.google.com/maps/search/?api=1&query=福岡県福岡市西区豊浜2丁目20-20-2"
const RESERVE_URL = "https://coubic.com/yuheadspa/services"
const TEL_LINK = "tel:0922849392"
const LINE_URL = "https://lin.ee/7hso3k1"
const GIFT_URL = "https://gamistore.base.shop/items/144607972"
const ONLINE_URL = "https://headspayu.stores.jp/"

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
  }
}

export function SiteFooter() {
  const handleReserveClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    window.dataLayer = window.dataLayer || []

    window.dataLayer.push({
      event: "reserve_click",
      reserve_location: "site_footer",
    })

    setTimeout(() => {
      window.open(RESERVE_URL, "_blank", "noopener,noreferrer")
    }, 300)
  }

  return (
    <footer className="mt-20 border-t border-border/40 bg-background">
      <div className="mx-auto max-w-3xl px-5 pt-14 text-center lg:px-10">
        <p className="text-[10px] tracking-[0.28em] text-gold/70">
          RESERVE
        </p>

        <h2 className="mt-4 text-[clamp(1.55rem,6vw,2.4rem)] leading-[1.55] tracking-[0.03em] text-foreground">
          迷ったら、
          <br />
          空き状況へ。
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-8 text-muted-foreground">
          口コミ100件突破。
          <br />
          完全個室で、頭皮から整えます。
        </p>

        <div className="mx-auto mt-6 grid max-w-xl grid-cols-2 gap-3">
          {["歴15年", "完全個室", "一日3名", "駐車場2台"].map((item) => (
            <div
              key={item}
              className="rounded-full border border-gold/20 bg-card px-4 py-3 text-xs tracking-[0.04em] text-foreground/75"
            >
              {item}
            </div>
          ))}
        </div>

        <div className="mx-auto mt-8 flex max-w-[280px] flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
          <a
            href={RESERVE_URL}
            onClick={handleReserveClick}
            className="inline-flex items-center justify-center rounded-full bg-gold px-10 py-4 text-base font-medium tracking-[0.08em] text-black transition hover:opacity-90 sm:min-w-[240px]"
          >
            空き状況を見る
          </a>

          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-gold/30 px-10 py-4 text-sm tracking-[0.06em] text-foreground transition hover:border-gold/60 hover:text-gold sm:min-w-[220px]"
          >
            LINEで相談
          </a>
        </div>

        <p className="mt-3 text-[11px] leading-6 text-muted-foreground">
          完全予約制・一日三名限定
        </p>
      </div>

      <div className="mx-auto mt-14 max-w-5xl px-5 pb-12 lg:px-10">
        <div className="grid gap-8 md:grid-cols-2 md:items-start">
          <div className="text-center md:text-left">
            <p className="text-[10px] tracking-[0.28em] text-gold/70">
              YU HEAD SPA
            </p>

            <h3 className="mt-3 text-lg tracking-[0.04em] text-foreground">
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
                  className="text-foreground underline underline-offset-2"
                >
                  092-284-9392
                </a>
              </p>

              <p>営業時間：9:30 - 16:30</p>
              <p>定休日：日曜日</p>
              <p>完全個室・駐車場2台完備</p>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="w-full max-w-sm rounded-2xl border border-border/40 bg-card/50 p-5">
              <p className="text-center text-sm leading-7 text-muted-foreground md:text-left">
                ご来店前に経路をご確認いただけます。
              </p>

              <div className="mt-5 grid gap-3">
                <a
                  href={MAP_LINK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-gold/40 px-6 py-3 text-sm text-foreground transition hover:bg-gold/10"
                >
                  Googleマップを見る
                </a>
              </div>

              <div className="mt-6 border-t border-border/40 pt-4 text-left">
                <p className="mb-2 text-[10px] tracking-[0.2em] text-gold/70">
                  ONLINE
                </p>

                <div className="space-y-2 text-sm">
                  <a
                    href={GIFT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-foreground/80 transition hover:text-gold"
                  >
                    ・ギフトカード
                  </a>

                  <a
                    href={ONLINE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-foreground/80 transition hover:text-gold"
                  >
                    ・会員限定オンライン
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-border/40 pt-6 text-center">
          <p className="text-[11px] leading-6 text-muted-foreground">
            福岡市西区の完全個室ヘッドスパ専門店。
          </p>

          <p className="mt-3 text-[10px] text-muted-foreground">
            © {new Date().getFullYear()} ヘッドスパ専門店ゆう本店 All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
