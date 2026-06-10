"use client"

const MAP_LINK_URL =
  "https://www.google.com/maps/search/?api=1&query=福岡県福岡市西区豊浜2丁目20-20-2"
const RESERVE_URL = "https://coubic.com/yuheadspa/services"
const TEL_LINK = "tel:0922849392"

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/40 bg-background">

      {/* クロージング */}
      <div className="mx-auto max-w-3xl px-5 pt-16 text-center lg:px-10">
        <p className="text-[10px] tracking-[0.35em] text-gold/70">
          FINAL RESERVE
        </p>

        <h2 className="mt-4 text-[clamp(1.6rem,5vw,2.4rem)] leading-[1.7] tracking-[0.08em] text-foreground">
          頭皮から整え、
          <br />
          髪の印象を変える一歩を
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-sm leading-8 text-muted-foreground">
          完全個室・一日三名限定。
          <br />
          お一人おひとりの状態に合わせた施術をご提供します。
        </p>

        <p className="mt-4 text-xs text-foreground/50">
          初めての方も安心してご利用いただけます
        </p>

        <a
          href={RESERVE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-gold px-10 py-4 text-base font-medium text-black transition hover:opacity-90"
        >
          空き状況を見る
        </a>

        <p className="mt-3 text-[11px] text-muted-foreground">
          ※完全予約制・一日三名限定
        </p>
      </div>

      {/* 情報 */}
      <div className="mx-auto mt-16 max-w-5xl px-5 pb-12 lg:px-10">
        <div className="grid gap-10 md:grid-cols-2 md:items-start">

          <div className="text-center md:text-left">
            <p className="text-[11px] tracking-[0.35em] text-gold/70">
              HEAD SPA SALON
            </p>

            <h3 className="mt-3 text-lg tracking-[0.08em] text-foreground">
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
              <p>定休日：日曜日・祝日</p>
              <p>完全予約制・完全個室・駐車場2台完備</p>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="w-full max-w-sm rounded-2xl border border-border/40 bg-card/50 p-5">

              <p className="text-center text-sm leading-7 text-muted-foreground md:text-left">
                ご来店前に場所の確認やルート検索をご利用いただけます。
              </p>

              <div className="mt-5 grid gap-3">
                <a
                  href={MAP_LINK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-gold/40 px-6 py-3 text-sm text-foreground transition hover:bg-gold/10"
                >
                  Googleマップで経路を見る
                </a>
              </div>

            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-border/40 pt-6 text-center">
          <p className="text-[11px] leading-6 text-muted-foreground">
            頭皮ケア・育毛ケア・完全個室の施術を福岡市西区でご提供しています。
          </p>

          <p className="mt-3 text-[10px] text-muted-foreground">
            © {new Date().getFullYear()} ヘッドスパ専門店 ゆう All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
