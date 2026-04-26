import { Header } from "@/components/header"
import { FloatingReserve } from "@/components/floating-reserve"
import { SiteFooter } from "@/components/site-footer"

const COUBIC_URL = "https://coubic.com/yuheadspa/services"

export default function RelaxationLP() {
  return (
    <main>
      <Header />

      <section className="bg-black px-5 pb-20 pt-32 text-center text-white">
        <p className="text-[10px] tracking-[0.4em] text-[#d6b36a]">
          DEEP RELAXATION HEAD SPA
        </p>

        <h1 className="mt-6 text-[clamp(2rem,6vw,3.3rem)] leading-[1.5] tracking-[0.1em]">
          頭の重さと疲れをほどく、
          <br />
          完全個室の
          <br />
          リラクゼーションヘッドスパ
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-white/72">
          眼精疲労・睡眠の質・首肩のこわばりに。
          <br />
          静かな個室で、深く休まる時間をご提供します。
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
          こんな疲れを
          <br />
          感じていませんか？
        </h2>

        <div className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-3">
          {[
            "頭が重く、すっきりしない日が続いている",
            "目の疲れや首肩のこわばりを感じる",
            "眠りが浅く、しっかり休めていない",
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
          頭皮からゆるめることで、
          <br />
          深い休息へ導きます
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-muted-foreground">
          忙しさでこわばった頭皮や頭まわりを丁寧にケア。
          ただ癒すだけではなく、心身が整うような上質な時間を大切にしています。
        </p>
      </section>

      <section id="menu" className="bg-background px-5 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-[10px] tracking-[0.35em] text-gold/70">
            RELAXATION HEAD SPA
          </p>

          <h2 className="mt-4 text-[clamp(1.7rem,5vw,2.6rem)] leading-[1.7] tracking-[0.08em] text-foreground">
            リラクゼーションヘッドスパ
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-muted-foreground">
            頭の重さ・眼精疲労・睡眠の質が気になる方へ。
            完全個室で、静かに深く整う時間をお過ごしいただけます。
          </p>

          <div className="mt-10 rounded-2xl border border-gold/25 bg-card px-6 py-9">
            <p className="text-[10px] tracking-[0.28em] text-gold/70">
              RECOMMENDED
            </p>

            <h3 className="mt-4 text-xl leading-8 tracking-[0.08em] text-foreground">
              深眠リラクゼーションコース
            </h3>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-muted-foreground">
              頭皮・首肩まわりのこわばりに寄り添い、
              疲労感や緊張をやわらげるためのリラクゼーションケアです。
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
          疲れを溜め込む前に、
          <br />
          頭から整える時間を
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-muted-foreground">
          忙しい日々の中で、自分を整えるための特別な時間を。
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
