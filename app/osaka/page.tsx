
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ヘッドスパ専門店 ゆう 大阪店｜完全予約制",
  description:
    "大阪府守口市大日町の完全予約制ヘッドスパ専門店。リラクゼーション・育毛頭皮ケアをプライベート空間でご提供します。",
};

const courses = [
  {
    name: "リラクゼーションコース",
    en: "Relaxation Head Spa",
    price: "¥8,000",
    description:
      "日々の疲れを癒やし、心地よい時間を過ごしていただくヘッドスパ。",
  },
  {
    name: "育毛ライトコース",
    en: "Scalp Care Light",
    price: "¥11,000",
    description:
      "頭皮環境を整えるための基本的なスカルプケア。",
  },
  {
    name: "育毛スタンダードコース",
    en: "Scalp Care Standard",
    price: "¥13,000",
    description:
      "頭皮の状態に合わせた、より充実したスカルプケア。",
  },
  {
    name: "育毛プレミアムコース",
    en: "Scalp Care Premium",
    price: "¥20,000",
    description:
      "頭皮を丁寧にケアする、上位のプレミアムコース。",
  },
];

const slots = ["9:30", "11:00", "12:30", "14:00", "15:30"];

export default function OsakaPage() {
  return (
    <main className="min-h-screen bg-[#10100f] text-[#f7f3eb]">
      <header className="border-b border-[#a58a57]/30">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-5">
          <a href="/" className="text-sm tracking-widest text-[#d7bb82]">
            HEAD SPA YU
          </a>
          <a
            href="#reservation"
            className="rounded-full border border-[#b99a61] px-5 py-2 text-xs tracking-wider text-[#e9d3a7]"
          >
            WEB予約
          </a>
        </div>
      </header>

      <section className="px-6 py-24 text-center sm:py-32">
        <p className="mb-6 text-xs tracking-[0.35em] text-[#c4a46b]">
          HEAD SPA YU · OSAKA
        </p>
        <h1 className="text-3xl font-medium leading-relaxed sm:text-5xl">
          ヘッドスパ専門店 ゆう
          <br />
          大阪店
        </h1>
        <p className="mt-8 text-lg tracking-widest text-[#e1c99c]">
          完全予約制・プライベート空間
        </p>
        <p className="mx-auto mt-7 max-w-xl text-sm leading-8 text-[#d1cbc1]">
          大阪・守口市大日町にある、
          <br />
          落ち着いた空間のヘッドスパ専門店。
          <br />
          心地よいリラクゼーションと
          <br />
          頭皮環境を整えるケアをご提供します。
        </p>
        <a
          href="#menu"
          className="mt-10 inline-block rounded-full bg-[#b99a61] px-9 py-4 text-sm font-medium text-[#15130f]"
        >
          メニューを見る
        </a>
      </section>

      <section className="bg-[#191816] px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs tracking-[0.3em] text-[#c4a46b]">
            PRIVATE SALON
          </p>
          <h2 className="mt-5 text-2xl">大阪店について</h2>
          <p className="mt-8 text-sm leading-9 text-[#d1cbc1]">
            人目を気にせず、ゆっくり過ごせるプライベート空間。
            <br />
            一人ひとりのお客様に向き合い、
            <br />
            丁寧な施術とくつろぎの時間を大切にしています。
          </p>
        </div>
      </section>

      <section id="menu" className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="text-center text-xs tracking-[0.3em] text-[#c4a46b]">
            MENU & PRICE
          </p>
          <h2 className="mt-4 text-center text-2xl">
            メニュー・料金
          </h2>
          <p className="mt-4 text-center text-sm text-[#bdb5a8]">
            全コース60分・税込価格
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {courses.map((course) => (
              <article
                key={course.name}
                className="rounded-xl border border-[#a58a57]/35 bg-[#1d1b18] p-7"
              >
                <p className="text-xs text-[#c4a46b]">
                  {course.en}
                </p>
                <h3 className="mt-3 text-lg">{course.name}</h3>
                <p className="mt-4 text-2xl text-[#e4c48d]">
                  {course.price}
                  <span className="ml-2 text-xs text-[#bdb5a8]">
                    / 60分（税込）
                  </span>
                </p>
                <p className="mt-5 text-sm leading-7 text-[#c7c0b5]">
                  {course.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-6 rounded-xl border border-[#a58a57]/35 p-6 text-center">
            <h3 className="text-lg">当日決める</h3>
            <p className="mt-3 text-sm leading-7 text-[#c7c0b5]">
              60分の予約枠を確保し、
              ご来店時にコースと料金を決定できます。
            </p>
          </div>
        </div>
      </section>

      <section
        id="reservation"
        className="bg-[#211e19] px-6 py-20 text-center"
      >
        <p className="text-xs tracking-[0.3em] text-[#c4a46b]">
          RESERVATION
        </p>
        <h2 className="mt-4 text-2xl">WEB予約</h2>
        <p className="mx-auto mt-7 max-w-xl text-sm leading-8 text-[#d1cbc1]">
          ご予約は前日まで承ります。
          <br />
          当日のご予約は受け付けておりません。
          <br />
          お支払いはご来店時となります。
        </p>
        <div className="mx-auto mt-8 max-w-lg rounded-xl border border-[#a58a57]/40 p-6">
          <p className="text-sm text-[#e4c48d]">
            ご予約可能な開始時間
          </p>
          <p className="mt-4 text-sm leading-8">
            {slots.join(" ／ ")}
          </p>
          <p className="mt-4 text-xs text-[#bdb5a8]">
            土曜・日曜・祝日は休業
          </p>
        </div>
        <p className="mt-8 text-sm text-[#e4c48d]">
          Square予約ページは準備中です
        </p>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <p className="text-center text-xs tracking-[0.3em] text-[#c4a46b]">
            ACCESS
          </p>
          <h2 className="mt-4 text-center text-2xl">
            アクセス・店舗情報
          </h2>
          <div className="mt-10 space-y-5 border-t border-[#a58a57]/30 pt-8 text-sm leading-7">
            <p>店舗名：ヘッドスパ専門店 ゆう 大阪店</p>
            <p>住所：大阪府守口市大日町1-8-18</p>
            <p>営業時間：9:30〜17:00</p>
            <p>定休日：土曜日・日曜日・祝日</p>
            <p>
              電話：
              <a
                href="tel:0661159935"
                className="text-[#e4c48d] underline"
              >
                06-6115-9935
              </a>
            </p>
          </div>
          <a
            href="https://www.google.com/maps/search/?api=1&query=%E5%A4%A7%E9%98%AA%E5%BA%9C%E5%AE%88%E5%8F%A3%E5%B8%82%E5%A4%A7%E6%97%A5%E7%94%BA1-8-18"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block text-sm text-[#e4c48d] underline"
          >
            Googleマップで場所を確認 →
          </a>
        </div>
      </section>

      <footer className="border-t border-[#a58a57]/25 px-6 py-10 text-center">
        <a href="/" className="text-sm text-[#d7bb82]">
          福岡本店のホームページへ
        </a>
        <p className="mt-5 text-xs text-[#8e877d]">
          © HEAD SPA YU OSAKA
        </p>
      </footer>
    </main>
  );
}
