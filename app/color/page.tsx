import { Header } from "@/components/header"
import { FloatingReserve } from "@/components/floating-reserve"
import { SiteFooter } from "@/components/site-footer"

const COUBIC_URL = "https://coubic.com/yuheadspa/services"

export default function ColorLP() {
  return (
    <main>
      <Header />

      <section className="bg-black px-5 pb-20 pt-32 text-center text-white">
        <p className="text-[10px] tracking-[0.4em] text-[#d6b36a]">
          COLOR & SCALP CARE
        </p>

        <h1 className="mt-6 text-[clamp(2rem,6vw,3.3rem)] leading-[1.5] tracking-[0.1em]">
          白髪染めを続けながら、
          <br />
          頭皮と髪を守る
          <br />
          ヘアカラーヘッドスパ
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-white/72">
          カラーによる頭皮負担が気になる方へ。
          <br />
          美しい髪色と、将来の髪を見据えた頭皮ケアを同時に。
        </p>

        <a
          href={COUBIC_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex rounded-full bg-[#d6b36a] px-8 py-4 text-sm font-medium tracking-[0.08em] text-black transition hover:opacity-90"
        >
          空き状況を見る
        </a>
      </section>

      <section className="bg-background px-5 py-20 text-center">
        <p className="text-[10px] tracking-[0.35em] text-gold/70">
          CONCERNS
        </p>

        <h2 className="mt-4 text-[clamp(1.6rem,5vw,2.4rem)] leading-[1.7] tracking-[0.08em] text-foreground">
          こんなお悩みは
          <br />
          ありませんか？
        </h2>

        <div className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-3">
          {[
            "白髪染めを続けたいけど頭皮への負担が気になる",
            "カラー後の乾燥・かゆみ・違和感が気になる",
            "髪色だけでなく、将来の髪も大切にしたい",
          ].map((text) => (
            <div
              key={text}
              className="rounded-2xl border border-gold/20 bg-card px-6 py-7 text-sm leading-8 text-muted-foreground"
            >
              {text}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary px-5 py-20 text-center">
        <p className="text-[10px] tracking-[0.35em] text-gold/70">
          SOLUTION
        </p>

        <h2 className="mt-4 text-[clamp(1.6rem,5vw,2.4rem)] leading-[1.7] tracking-[0.08em] text-foreground">
          髪色を整えるだけでなく、
          <br />
          頭皮環境まで見据えたカラーケア
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-muted-foreground">
          ヘアカラーヘッドスパは、白髪や髪色のお悩みに寄り添いながら、
          頭皮への負担にも配慮する大人のための専門ケアです。
        </p>
      </section>

      <section id="menu" className="bg-background px-5 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-[10px] tracking-[0.35em] text-gold/70">
            COLOR HEAD SPA
          </p>

          <h2 className="mt-4 text-[clamp(1.7rem,5vw,2.6rem)] leading-[1.7] tracking-[0.08em] text-foreground">
            ヘアカラーヘッドスパ
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-muted-foreground">
            白髪染め・頭皮ケア・髪の印象づくりを一度に。
            カラーを楽しみながら、頭皮と髪を美しく整えます。
          </p>

          <div className="mt-10 rounded-2xl border border-gold/25 bg-card px-6 py-9">
            <p className="text-[10px] tracking-[0.28em] text-gold/70">
              RECOMMENDED
            </p>

            <h3 className="mt-4 text-xl leading-8 tracking-[0.08em] text-foreground">
              頭皮ケアカラーコース
            </h3>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-muted-foreground">
              頭皮状態を確認しながら、髪色と頭皮環境の両方を整えるコース。
              白髪染めを続けたい方、カラー後の頭皮負担が気になる方におすすめです。
            </p>

            <a
              href={COUBIC_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex rounded-full bg-gold px-8 py-4 text-sm font-medium tracking-[0.08em] text-black transition hover:opacity-90"
            >
              空き状況を見る
            </a>
          </div>
        </div>
      </section>

      <section className="bg-secondary px-5 py-20 text-center">
        <h2 className="text-[clamp(1.5rem,5vw,2.2rem)] leading-[1.7] tracking-[0.08em] text-foreground">
          白髪染めを我慢せず、
          <br />
          頭皮も美しく整える
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-muted-foreground">
          髪色も、頭皮も、将来の髪も大切にしたい方へ。
          まずは空き状況をご確認ください。
        </p>

        <a
          href={COUBIC_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex rounded-full bg-gold px-8 py-4 text-sm font-medium tracking-[0.08em] text-black transition hover:opacity-90"
        >
          空き状況を見る
        </a>
      </section>

      <FloatingReserve />
      <SiteFooter />
    </main>
  )
}
