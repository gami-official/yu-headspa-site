"use client"

import { FadeIn } from "@/components/fade-in"

const GIFT_URL = "https://gamistore.base.shop/"
const LINE_URL = "https://lin.ee/7hso3k1"

export function GiftSection() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-5xl px-5 lg:px-10">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs tracking-[0.35em] text-gold/70">
              GIFT TICKET
            </p>

            <h2 className="mt-4 text-2xl leading-relaxed tracking-[0.08em] text-foreground sm:text-3xl">
              大切な方へ、
              <br className="sm:hidden" />
              癒しの時間を贈る
            </h2>

            <p className="mt-6 text-sm leading-7 text-muted-foreground sm:text-base">
              誕生日、記念日、母の日、感謝の気持ちを伝えたいときに。
              <br className="hidden sm:block" />
              完全個室・完全予約制の上質なヘッドスパ体験を、
              ギフトとしてお贈りいただけます。
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <FadeIn delay={0.08}>
            <div className="rounded-2xl border border-gold/20 bg-card p-6 shadow-[0_12px_40px_rgba(0,0,0,0.06)] lg:p-8">
              <h3 className="text-lg tracking-[0.08em] text-foreground">
                ヘッドスパギフトが喜ばれる理由
              </h3>

              <div className="mt-6 space-y-5 text-sm leading-7 text-muted-foreground">
                <div>
                  <p className="font-medium text-foreground">
                    1. 記憶に残る、上質な贈り物
                  </p>
                  <p className="mt-1">
                    物ではなく、“自分をいたわる時間”を贈れる特別なギフト。
                    香り、空間、手技、静けさまで含めて心に残る体験です。
                  </p>
                </div>

                <div>
                  <p className="font-medium text-foreground">
                    2. 完全個室でゆっくり過ごせる
                  </p>
                  <p className="mt-1">
                    周りを気にせず、落ち着いて過ごせる大人のための空間。
                    忙しい毎日を過ごす方への贈り物にもぴったりです。
                  </p>
                </div>

                <div>
                  <p className="font-medium text-foreground">
                    3. 癒しと頭皮ケアを同時に
                  </p>
                  <p className="mt-1">
                    抜け毛、薄毛、白髪、乾燥、疲れなど、
                    気になりはじめたお悩みにもやさしく寄り添います。
                  </p>
                </div>

                <div>
                  <p className="font-medium text-foreground">
                    4. さまざまな贈り物シーンに対応
                  </p>
                  <p className="mt-1">
                    誕生日、母の日、結婚記念日、日頃の感謝を伝える贈り物として
                    選ばれやすいギフトです。
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.16}>
            <div className="rounded-2xl border border-gold/20 bg-card p-6 lg:p-8">
              <h3 className="text-lg tracking-[0.08em] text-foreground">
                こんな方への贈り物に
              </h3>

              <ul className="mt-6 space-y-3 text-sm leading-7 text-muted-foreground">
                <li>・母の日のプレゼントを探している</li>
                <li>・奥様やお母様へ感謝を伝えたい</li>
                <li>・忙しく頑張っている方に癒しを贈りたい</li>
                <li>・美容や頭皮ケアに関心のある方へ贈りたい</li>
                <li>・ありきたりではない上質なギフトを選びたい</li>
              </ul>

              <div className="mt-8 rounded-xl border border-border/40 bg-background/60 p-5">
                <p className="text-sm leading-7 text-muted-foreground">
                  大切な方に、
                  <span className="text-foreground">“自分をいたわる時間”</span>
                  を贈りたいと思ったら、
                  こちらからギフトチケットをご覧いただけます。
                </p>

                <div className="mt-5 grid gap-3">
                  <a
                    href={GIFT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-medium text-black transition hover:opacity-90"
                  >
                    ギフトチケットを購入する
                  </a>

                  <a
                    href={LINE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-gold/25 px-6 py-3 text-sm text-foreground/70 transition hover:border-gold/45 hover:text-foreground"
                  >
                    LINEで相談する
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.24}>
          <div className="mt-10 rounded-2xl border border-border/40 bg-card/50 px-6 py-8 text-center">
            <h3 className="text-lg tracking-[0.08em] text-foreground">
              ヘッドスパ専門店ゆう本店について
            </h3>

            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              福岡市西区にある、完全個室・完全予約制のヘッドスパ専門店です。
              一日3名限定で、お一人おひとりに合わせた丁寧な施術をご提供しています。
              育毛ヘッドスパ、ヘアカラーヘッドスパ、リラクゼーションまで、
              ただ気持ちいいだけではない、
              将来の髪と頭皮を見据えたケアを大切にしています。
            </p>

            <p className="mt-4 text-xs leading-6 text-muted-foreground">
              ※ギフトチケットの内容・ご利用方法は販売ページにてご確認ください
              <br />
              ※ご不明点はLINEよりお気軽にお問い合わせください
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
