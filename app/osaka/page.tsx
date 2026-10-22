
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "ヘッドスパ専門店 ゆう 大阪店｜完全予約制",
  description:
    "大阪府守口市大日町の完全予約制ヘッドスパ専門店。リラクゼーションと育毛頭皮ケアを、落ち着いたプライベート空間でご提供します。",
};

const courses = [
  {
    name: "育毛ライトコース",
    en: "Scalp Care Light",
    price: "¥11,000",
    description:
      "頭皮環境を整えるための基本的なスカルプケア。初めて育毛ケアを受ける方にもおすすめです。",
  },
  {
    name: "育毛スタンダードコース",
    en: "Scalp Care Standard",
    price: "¥13,000",
    description:
      "頭皮の状態に合わせて、より丁寧なケアを行うスタンダードコースです。",
  },
  {
    name: "育毛プレミアムコース",
    en: "Scalp Care Premium",
    price: "¥20,000",
    description:
      "頭皮を集中的にケアする、ワンランク上のプレミアムコースです。",
  },
];

export default function OsakaPage() {
  return (
    <main className="min-h-screen bg-[#0d0d0d] text-[#f5efe5]">
      <header className="border-b border-[#c6a15b]/25">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
          <a href="/" className="text-sm tracking-widest text-[#d8b66d]">
            HEAD SPA YU
          </a>
          <a
            href="#reservation"
            className="rounded-full border border-[#c6a15b] px-5 py-2 text-xs text-[#e8cc92]"
          >
            WEB予約
          </a>
        </div>
      </header>

      {/* メインビジュアル */}
      <section className="px-5 py-16 text-center sm:py-24">
        <p className="mb-7 text-xs tracking-[0.3em] text-[#d6b36e]">
          HEAD SPA YU · OSAKA
        </p>

        <div className="mx-auto w-48 sm:w-64">
          <Image
            src="/images/osaka-logo.png"
            alt="ヘッドスパ専門店 ゆう 大阪店 ロゴ"
            width={500}
            height={500}
            priority
            className="h-auto w-full"
          />
        </div>

        <h1 className="mt-8 text-2xl leading-relaxed sm:text-4xl">
          ヘッドスパ専門店 ゆう
          <br />
          大阪店
        </h1>

        <p className="mt-6 text-sm tracking-widest text-[#d6b36e]">
          完全予約制・プライベート空間
        </p>

        <p className="mx-auto mt-7 max-w-xl text-sm leading-8 text-[#cfc7b9]">
          大阪府守口市大日町にあるヘッドスパ専門店。
          <br />
          心地よいリラクゼーションと、
          <br />
          一人ひとりに合わせた頭皮ケアをご提供します。
        </p>

        <a
          href="#menu"
          className="mt-9 inline-block rounded-full bg-[#c6a15b] px-9 py-4 text-sm font-medium text-black"
        >
          メニューを見る
        </a>
      </section>

      {/* メニュー */}
      <section id="menu" className="bg-[#171614] px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <p className="text-center text-xs tracking-[0.3em] text-[#c6a15b]">
            MENU & PRICE
          </p>
          <h2 className="mt-4 text-center text-2xl">
            メニュー・料金
          </h2>
          <p className="mt-4 text-center text-sm text-[#bdb5a8]">
            全コース60分・税込
          </p>

          {/* リラクゼーション */}
          <div className="mt-12 overflow-hidden rounded-xl border border-[#c6a15b]/30 bg-[#201e1b] md:grid md:grid-cols-2">
            <div className="relative min-h-[260px]">
              <Image
                src="/images/osaka-relaxation.jpg"
                alt="大阪店の女性施術者によるリラクゼーションヘッドスパ"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center p-7 sm:p-10">
              <p className="text-xs text-[#c6a15b]">
                RELAXATION HEAD SPA
              </p>
              <h3 className="mt-4 text-xl">
                リラクゼーションコース
              </h3>
              <p className="mt-5 text-2xl text-[#e7c78d]">
                ¥8,000
                <span className="ml-2 text-xs text-[#bdb5a8]">
                  60分（税込）
                </span>
              </p>
              <p className="mt-6 text-sm leading-8 text-[#d1c9bd]">
                頭・首まわりを丁寧にケアし、
                心身ともにリラックスできる時間をお届けします。
                日々の疲れを癒やしたい方におすすめです。
              </p>
            </div>
          </div>

          {/* 育毛コース */}
          <div className="mt-8 overflow-hidden rounded-xl border border-[#c6a15b]/30 bg-[#201e1b] md:grid md:grid-cols-2">
            <div className="relative min-h-[300px]">
              <Image
                src="/images/osaka-scalp.png"
                alt="大阪店の女性施術者による頭皮チェック"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="p-7 sm:p-10">
              <p className="text-xs text-[#c6a15b]">
                SCALP & HAIR CARE
              </p>
              <h3 className="mt-4 text-xl">
                育毛・頭皮ケアコース
              </h3>
              <p className="mt-5 text-sm leading-8 text-[#d1c9bd]">
                頭皮の状態に合わせたケアで、
                健やかな頭皮環境を目指します。
              </p>

              <div className="mt-7 space-y-5 border-t border-[#c6a15b]/25 pt-6">
                {courses.map((course) => (
                  <div key={course.name}>
                    <p className="text-xs text-[#bfa779]">
                      {course.en}
                    </p>
                    <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
                      <span className="text-sm">{course.name}</span>
                      <span className="text-lg text-[#e7c78d]">
                        {course.price}
                      </span>
                    </div>
                    <p className="mt-2 text-xs leading-6 text-[#bdb5a8]">
                      {course.description}
                    </p>
                    <p className="mt-1 text-xs text-[#bdb5a8]">
                      60分（税込）
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-xl border border-[#c6a15b]/30 p-7 text-center">
            <h3 className="text-lg">当日決める</h3>
            <p className="mt-3 text-sm leading-7 text-[#cfc7b9]">
              60分の予約枠を確保し、
              ご来店時にコースを決定できます。
              <br />
              料金は選択されたコースに応じて決まります。
            </p>
          </div>
        </div>
      </section>

      {/* 予約 */}
      <section id="reservation" className="px-5 py-20 text-center">
        <p className="text-xs tracking-[0.3em] text-[#c6a15b]">
          RESERVATION
        </p>
        <h2 className="mt-4 text-2xl">WEB予約</h2>
        <p className="mt-7 text-sm leading-8 text-[#cfc7b9]">
          ご予約は前日まで受け付けます。
          <br />
          当日予約不可・現地払いのみ。
        </p>

        <div className="mx-auto mt-8 max-w-xl rounded-xl border border-[#c6a15b]/30 p-7">
          <p className="text-sm text-[#e7c78d]">
            ご予約可能な時間
          </p>
          <p className="mt-4 text-sm leading-8">
            9:30 ／ 11:00 ／ 12:30
            <br />
            14:00 ／ 15:30
          </p>
          <p className="mt-5 text-xs text-[#bdb5a8]">
            土曜日・日曜日・祝日は休業
          </p>
        </div>

        <p className="mt-8 text-sm text-[#e7c78d]">
          Square予約ページは準備中です
        </p>
      </section>

      {/* アクセス */}
      <section className="bg-[#171614] px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <p className="text-center text-xs tracking-[0.3em] text-[#c6a15b]">
            ACCESS
          </p>
          <h2 className="mt-4 text-center text-2xl">
            店舗情報・アクセス
          </h2>

          <div className="mt-10 space-y-5 border-t border-[#c6a15b]/25 pt-8 text-sm leading-8">
            <p>ヘッドスパ専門店 ゆう 大阪店</p>
            <p>大阪府守口市大日町1-8-18</p>
            <p>営業時間：9:30〜17:00</p>
            <p>定休日：土曜日・日曜日・祝日</p>
            <p>
              電話：
              <a
                href="tel:0661159935"
                className="text-[#e7c78d] underline"
              >
                06-6115-9935
              </a>
            </p>
          </div>

          <a
            href="https://www.google.com/maps/search/?api=1&query=%E5%A4%A7%E9%98%AA%E5%BA%9C%E5%AE%88%E5%8F%A3%E5%B8%82%E5%A4%A7%E6%97%A5%E7%94%BA1-8-18"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block text-sm text-[#e7c78d] underline"
          >
            Googleマップで場所を見る →
          </a>
        </div>
      </section>

      <footer className="border-t border-[#c6a15b]/20 px-5 py-10 text-center">
        <a href="/" className="text-sm text-[#d8b66d]">
          福岡本店のホームページへ
        </a>
        <p className="mt-5 text-xs text-[#8e877d]">
          © HEAD SPA YU OSAKA
        </p>
      </footer>
    </main>
  );
}
