import { Header } from "@/components/header"
import { FloatingReserve } from "@/components/floating-reserve"
import { MenuSection } from "@/components/menu-section"

export default function ScalpLP() {
  return (
    <main>
      <Header />

      {/* HERO（特化） */}
      <section className="bg-black text-white pt-32 pb-20 text-center px-5">
        <p className="text-[10px] tracking-[0.4em] text-[#d6b36a]">
          SCALP CARE SPECIAL
        </p>

        <h1 className="mt-6 text-[clamp(2rem,6vw,3.2rem)] leading-[1.5] tracking-[0.1em]">
          抜け毛・薄毛・分け目に
          <br />
          悩む方のための
          <br />
          ヘッドスパ
        </h1>

        <p className="mt-6 text-sm text-white/70 leading-7">
          頭皮環境を整え、
          髪の印象を根本から変える専門ケア
        </p>

        <a
          href="https://coubic.com/yuheadspa/services"
          target="_blank"
          className="mt-8 inline-flex rounded-full bg-[#d6b36a] px-8 py-4 text-black text-sm"
        >
          空き状況を見る
        </a>
      </section>

      {/* 悩み共感 */}
      <section className="py-20 text-center px-5">
        <h2 className="text-xl leading-8">
          このようなお悩みはありませんか？
        </h2>

        <ul className="mt-8 space-y-3 text-sm text-muted-foreground">
          <li>・抜け毛が増えてきた</li>
          <li>・分け目が気になる</li>
          <li>・髪のボリュームが減った</li>
          <li>・将来が不安</li>
        </ul>
      </section>

      {/* 解決 */}
      <section className="bg-secondary py-20 text-center px-5">
        <h2 className="text-xl leading-8">
          頭皮から整えることで
          <br />
          髪の印象は変わります
        </h2>

        <p className="mt-6 text-sm text-muted-foreground leading-7">
          一時的なケアではなく、
          頭皮環境から見直すことで
          髪が育つ土台を整えます。
        </p>
      </section>

      {/* メニュー流用 */}
      <MenuSection />

      {/* CTA */}
      <section className="py-20 text-center px-5">
        <h2 className="text-xl leading-8">
          気になり始めた今が
          <br />
          ケアの始めどきです
        </h2>

        <a
          href="https://coubic.com/yuheadspa/services"
          target="_blank"
          className="mt-8 inline-flex rounded-full bg-[#d6b36a] px-8 py-4 text-black text-sm"
        >
          空き状況を見る
        </a>
      </section>

      <FloatingReserve />
    </main>
  )
}
