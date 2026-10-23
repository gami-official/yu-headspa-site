
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "ヘッドスパ専門店 ゆう 大阪店｜完全予約制の頭皮ケアサロン",
  description:
    "大阪府守口市大日町の完全予約制ヘッドスパ専門店。癒しを土台に、頭皮環境を整えるケアを。リラクゼーション・育毛頭皮ケアを提供しています。",
};

const bookingUrl =
  "https://book.squareup.com/appointments/w4hozbb9zwbeg5/location/LFXN7SMC38Q2H/services";

const scalpCourses = [
  {
    name: "育毛ライトコース",
    en: "SCALP CARE LIGHT",
    price: "¥11,000",
    description:
      "頭皮ケアを初めて受ける方にもおすすめの、基本的なスカルプケア。",
  },
  {
    name: "育毛スタンダードコース",
    en: "SCALP CARE STANDARD",
    price: "¥13,000",
    description:
      "頭皮の状態に合わせて、より丁寧にケアするスタンダードコース。",
  },
  {
    name: "育毛プレミアムコース",
    en: "SCALP CARE PREMIUM",
    price: "¥20,000",
    description:
      "頭皮を集中的にケアする、ワンランク上のプレミアムコース。",
  },
];

const faqs = [
  {
    question: "予約なしでも利用できますか？",
    answer:
      "当店は完全予約制です。ご予約は前日までにお願いいたします。当日のご予約は承っておりません。",
  },
  {
    question: "施術時間はどのくらいですか？",
    answer:
      "各コース60分の予約枠をご用意しています。カウンセリングなどを含むため、実際の施術時間とは異なります。",
  },
  {
    question: "どのコースを選べばよいかわかりません。",
    answer:
      "ご予約時に「当日決める」をお選びいただけます。60分の枠を確保し、ご来店時にコースをお決めいただけます。",
  },
  {
    question: "キャンセルはできますか？",
    answer:
      "キャンセルはご予約日の前日までにお願いいたします。前日まではWEBからお手続きいただけます。当日やむを得ずキャンセルされる場合は、必ずお電話でご連絡ください。",
  },
  {
    question: "支払い方法を教えてください。",
    answer:
      "お支払いはご来店時の現地払いです。オンラインでの事前決済は行っておりません。",
  },
  {
    question: "駐車場はありますか？",
    answer:
      "店舗とは別の場所に駐車場をご用意しています。アクセス欄の航空写真と駐車場写真をご確認ください。",
  },
  {
    question: "お手洗いは利用できますか？",
    answer:
      "設備の都合上、ご来店前にお手洗いをお済ませいただきますようお願いいたします。",
  },
];

function SectionHeading({
  en,
  title,
  description,
}: {
  en: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="text-center">
      <p className="text-xs font-medium tracking-[0.3em] text-[#74795b]">
        {en}
      </p>
      <h2 className="mt-4 text-2xl font-medium tracking-widest text-[#39362f] sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-[#716c63]">
          {description}
        </p>
      )}
    </div>
  );
}

function BookingButton({
  children = "WEB予約はこちら",
}: {
  children?: string;
}) {
  return (
    <a
      href={bookingUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center rounded-full bg-[#777a59] px-8 py-4 text-sm font-medium tracking-wider text-white shadow-sm transition hover:bg-[#5d6245]"
    >
      {children} →
    </a>
  );
}

export default function OsakaPage() {
  return (
    <main className="min-h-screen bg-[#faf8f3] text-[#39362f]">
      {/* HEADER */}
      <header className="border-b border-[#ded9ce] bg-[#faf8f3]">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-4">
          <a
            href="/osaka"
            className="text-sm font-medium tracking-[0.14em] text-[#565440]"
          >
            HEAD SPA YU
            <span className="ml-2 text-xs text-[#8c8579]">
              OSAKA
            </span>
          </a>

          <div className="flex items-center gap-3">
            <a
              href="/en/osaka"
              className="text-xs text-[#666858] underline underline-offset-4"
            >
              ENGLISH
            </a>

            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#777a59] px-4 py-2 text-xs text-white transition hover:bg-[#5d6245]"
            >
              WEB予約
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#f0ece3] px-5 py-16 sm:py-24">
        <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-[#dce0ce]/50 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-[#e2d5c3]/60 blur-3xl" />

        <div className="relative mx-auto max-w-4xl text-center">
          <p className="text-xs tracking-[0.3em] text-[#777a59]">
            PRIVATE HEAD SPA IN OSAKA
          </p>

          <div className="mx-auto mt-7 w-44 sm:w-56">
            <Image
              src="/images/osaka-logo.png"
              alt="ヘッドスパ専門店 ゆう 大阪店 ロゴ"
              width={500}
              height={500}
              priority
              className="h-auto w-full"
            />
          </div>

          <p className="mt-7 text-sm tracking-[0.2em] text-[#777a59]">
            完全予約制・プライベートサロン
          </p>

          <h1 className="mt-6 text-3xl font-medium leading-[1.7] tracking-wider sm:text-5xl">
            癒しを土台に、
            <br />
            頭皮環境を整えるケアを。
          </h1>

          <p className="mt-6 text-lg leading-9 text-[#686558]">
            がんばる毎日に、
            <br className="sm:hidden" />
            頭と心がほどける60分。
          </p>

          <p className="mx-auto mt-7 max-w-xl text-sm leading-9 text-[#716c63]">
            一人ひとりの頭皮とお悩みに寄り添う、
            <br />
            丁寧なカウンセリングと心地よいケア。
            <br />
            落ち着いた空間で、
            <br />
            自分のための時間をお過ごしください。
          </p>

          <div className="mt-10">
            <BookingButton />
          </div>

          <p className="mt-5 text-xs text-[#8b857a]">
            大阪府守口市大日町 ／ 前日までの完全予約制
          </p>
        </div>
      </section>

      {/* CONCEPT */}
      <section className="px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            en="OUR CONCEPT"
            title="大切にしていること"
            description="リラックスできる心地よさと、頭皮に向き合う専門的なケア。その両方を大切にしています。"
          />

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "丁寧なカウンセリング",
                description:
                  "頭皮の状態や日頃のお悩みを伺い、一人ひとりに合わせたケアをご案内します。",
              },
              {
                number: "02",
                title: "心地よい頭皮ケア",
                description:
                  "癒しを大切にしながら、健やかな頭皮環境を目指すケアをご提供します。",
              },
              {
                number: "03",
                title: "落ち着いたプライベート空間",
                description:
                  "完全予約制だからこそ、周囲を気にせず自分のための時間をお過ごしいただけます。",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="rounded-2xl border border-[#e4dfd5] bg-white p-8 shadow-sm"
              >
                <p className="text-sm tracking-widest text-[#92977a]">
                  {item.number}
                </p>
                <div className="mt-5 h-px w-12 bg-[#b7b18f]" />
                <h3 className="mt-6 text-lg font-medium leading-8">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-8 text-[#777167]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="bg-[#f0ede5] px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            en="MENU & PRICE"
            title="メニュー・料金"
            description="リラクゼーションと頭皮ケア。目的に合わせてお選びいただける4つのコースをご用意しています。"
          />

          <p className="mt-5 text-center text-xs text-[#817c70]">
            全コース60分枠・表示価格は税込
          </p>

          {/* RELAXATION */}
          <div className="mt-12 overflow-hidden rounded-2xl border border-[#e1dace] bg-white shadow-sm md:grid md:grid-cols-2">
            <div className="relative min-h-[280px]">
              <Image
                src="/images/osaka-relaxation.jpg"
                alt="リラクゼーションヘッドスパの施術風景"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="flex flex-col justify-center p-8 sm:p-12">
              <p className="text-xs tracking-[0.2em] text-[#858b6a]">
                RELAXATION
              </p>

              <h3 className="mt-4 text-xl font-medium">
                リラクゼーションコース
              </h3>

              <p className="mt-5 text-3xl text-[#777a59]">
                ¥8,000
                <span className="ml-3 text-xs text-[#8b857a]">
                  税込
                </span>
              </p>

              <p className="mt-5 text-sm leading-9 text-[#716c63]">
                日々の疲れを癒やしたい方へ。
                心地よいヘッドスパで、
                ゆったりとしたリラックスタイムをお届けします。
              </p>

              <p className="mt-5 text-xs text-[#8b857a]">
                予約枠：60分
              </p>
            </div>
          </div>

          {/* SCALP CARE */}
          <div className="mt-7 overflow-hidden rounded-2xl border border-[#e1dace] bg-white shadow-sm md:grid md:grid-cols-2">
            <div className="relative min-h-[300px]">
              <Image
                src="/images/osaka-scalp.png"
                alt="頭皮チェックとスカルプケアの様子"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="p-8 sm:p-12">
              <p className="text-xs tracking-[0.2em] text-[#858b6a]">
                SCALP & HAIR CARE
              </p>

              <h3 className="mt-4 text-xl font-medium">
                育毛・頭皮ケア
              </h3>

              <p className="mt-5 text-sm leading-8 text-[#716c63]">
                頭皮の状態やお悩みに合わせて、
                健やかな頭皮環境を目指すケアを行います。
              </p>

              <div className="mt-7 divide-y divide-[#e8e3d8] border-t border-[#e8e3d8]">
                {scalpCourses.map((course) => (
                  <div key={course.name} className="py-6">
                    <p className="text-[11px] tracking-widest text-[#858b6a]">
                      {course.en}
                    </p>

                    <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
                      <h4 className="text-sm font-medium">
                        {course.name}
                      </h4>
                      <p className="text-xl text-[#777a59]">
                        {course.price}
                      </p>
                    </div>

                    <p className="mt-3 text-xs leading-7 text-[#777167]">
                      {course.description}
                    </p>

                    <p className="mt-2 text-xs text-[#938b7e]">
                      60分枠・税込
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-7 rounded-2xl border border-[#e1dace] bg-white p-8 text-center">
            <h3 className="text-lg font-medium">
              当日決める
            </h3>

            <p className="mt-4 text-sm leading-8 text-[#716c63]">
              どのコースがよいか迷われている方は、
              <br />
              ご来店時にコースをお決めいただけます。
              <br />
              60分の予約枠を確保し、
              選択されたコースの料金を頂戴します。
            </p>
          </div>

          <div className="mt-10 text-center">
            <BookingButton />
          </div>
        </div>
      </section>

      {/* TREATMENT FLOW */}
      <section className="px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            en="YOUR VISIT"
            title="ご来店からお帰りまで"
            description="カウンセリングから施術後のご案内まで、約60分の予約枠でご対応します。"
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {[
              {
                number: "01",
                title: "カウンセリング",
                description:
                  "頭皮の状態やお悩み、ご希望を伺います。",
              },
              {
                number: "02",
                title: "ヘッドスパ・頭皮ケア",
                description:
                  "お選びいただいたコースに沿って施術します。",
              },
              {
                number: "03",
                title: "アフターカウンセリング",
                description:
                  "施術後の状態を確認し、必要に応じてご案内します。",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="rounded-2xl bg-[#f0ede5] p-7 text-center"
              >
                <p className="text-2xl text-[#858b6a]">
                  {step.number}
                </p>
                <h3 className="mt-4 text-base font-medium">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-8 text-[#716c63]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THERAPIST */}
      <section className="bg-[#f0ede5] px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            en="THERAPIST"
            title="セラピスト紹介"
          />

          <div className="mt-12 overflow-hidden rounded-2xl bg-white shadow-sm md:grid md:grid-cols-2">
            <div className="relative aspect-square bg-[#fffdf8]">
              <Image
                src="/images/osaka-therapist.jpg"
                alt="大阪店セラピスト まゆ"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain"
              />
            </div>

            <div className="flex flex-col justify-center p-8 sm:p-12">
              <p className="text-xs tracking-[0.2em] text-[#858b6a]">
                HEAD SPA THERAPIST
              </p>

              <h3 className="mt-5 text-3xl font-medium">
                まゆ
              </h3>

              <div className="mt-6 h-px w-12 bg-[#b7b18f]" />

              <p className="mt-7 text-sm leading-9 text-[#716c63]">
                お客様一人ひとりに寄り添い、
                心地よくリラックスできる時間を
                大切にしています。
              </p>

              <p className="mt-5 text-sm leading-9 text-[#716c63]">
                日々の疲れを癒やしたい方も、
                頭皮ケアが初めての方も、
                どうぞお気軽にご相談ください。
              </p>

              <div className="mt-8">
                <BookingButton>
                  まゆのヘッドスパを予約
                </BookingButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACCESS */}
      <section id="access" className="px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            en="ACCESS"
            title="店舗情報・アクセス"
            description="大阪メトロ谷町線「大日駅」から徒歩約6分。写真を見ながらお越しいただけます。"
          />

          <div className="mt-12 overflow-hidden rounded-2xl bg-white shadow-sm md:grid md:grid-cols-2">
            <div className="relative min-h-[280px]">
              <Image
                src="/images/osaka-interior.png.jpg"
                alt="大阪店のプライベートサロン内観"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-10">
              <p className="text-xs tracking-[0.2em] text-[#858b6a]">
                PRIVATE SALON
              </p>
              <h3 className="mt-4 text-xl font-medium">
                落ち着いた完全予約制の空間
              </h3>
              <p className="mt-5 text-sm leading-8 text-[#716c63]">
                倉庫内に設けたプライベートサロンです。
                周囲を気にせず、頭皮ケアとリラクゼーションの時間をお過ごしください。
              </p>
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl bg-white shadow-sm md:grid md:grid-cols-2">
            <div className="relative min-h-[260px]">
              <Image
                src="/images/osaka-exterior.png.jpg"
                alt="大阪店の建物外観"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-10">
              <p className="text-xs tracking-[0.2em] text-[#858b6a]">
                OUR LOCATION
              </p>
              <h3 className="mt-4 text-xl font-medium">
                こちらの建物が目印です
              </h3>
              <p className="mt-5 text-sm leading-8 text-[#716c63]">
                大阪府守口市大日町1-8-18。
                建物の入口には大阪店のロゴが掲示されています。
              </p>
              <p className="mt-4 text-xs leading-7 text-[#857e72]">
                ※倉庫を併設しています。ご予約時間に合わせてお越しください。
              </p>
            </div>
          </div>

          {/* ROUTE */}
          <div className="mt-16">
            <h3 className="text-center text-xl font-medium tracking-wider">
              大日駅からの写真付き道順
            </h3>
            <p className="mt-4 text-center text-sm leading-8 text-[#716c63]">
              写真を順番にご覧ください。大日駅から徒歩約6分です。
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {[
                ["01", "大日駅で降り、写真の場所から地上へ出ます。"],
                ["02", "そのまままっすぐ進みます。"],
                ["03", "目印を過ぎても、まっすぐ進みます。"],
                ["04", "そのまま直進します。"],
                ["05", "もう少し直進します。"],
                ["06", "左に曲がります。"],
                ["07", "少し進むと、右手に倉庫兼サロンが見えます。"],
                ["08", "建物入口の大阪店ロゴを目印にお越しください。"],
              ].map(([number, description]) => (
                <div
                  key={number}
                  className="overflow-hidden rounded-2xl border border-[#e4dfd5] bg-white"
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={`/images/osaka-route-${number}.png.jpg`}
                      alt={`大日駅からの道順 ${number}`}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex gap-4 p-5">
                    <span className="text-xl text-[#858b6a]">
                      {number}
                    </span>
                    <p className="text-sm leading-7 text-[#716c63]">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* PARKING */}
          <div className="mt-16">
            <h3 className="text-center text-xl font-medium tracking-wider">
              駐車場のご案内
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-8 text-[#716c63]">
              駐車場はサロンとは別の場所にございます。
              下の航空写真で位置関係をご確認ください。
            </p>

            <div className="relative mt-8 aspect-[4/3] overflow-hidden rounded-2xl bg-white sm:aspect-[16/9]">
              <Image
                src="/images/osaka-parking-map.png.jpg"
                alt="サロンと駐車場の位置関係を示した航空写真"
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>

            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              {[
                [
                  "/images/osaka-parking-01.png.jpg",
                  "駐車場の目印・周辺の様子",
                ],
                [
                  "/images/osaka-parking-02.png.jpg",
                  "駐車場の入口・周辺の様子",
                ],
              ].map(([src, alt]) => (
                <div
                  key={src}
                  className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-white"
                >
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            <p className="mt-5 text-sm leading-8 text-[#716c63]">
              駐車位置がご不明な場合は、ご来店前にお電話でお問い合わせください。
            </p>
          </div>

          {/* SHOP INFORMATION */}
          <div className="mt-12 rounded-2xl bg-[#f0ede5] p-8 sm:p-10">
            <h3 className="text-lg font-medium">
              ヘッドスパ専門店 ゆう 大阪店
            </h3>

            <div className="mt-6 space-y-3 text-sm leading-8 text-[#716c63]">
              <p>〒570-0003 大阪府守口市大日町1-8-18</p>
              <p>大阪メトロ谷町線「大日駅」徒歩約6分</p>
              <p>営業時間：9:30〜17:00</p>
              <p>定休日：土曜日・日曜日・祝日</p>
              <p>完全予約制・前日まで受付</p>
              <p>
                電話：
                <a
                  href="tel:0661159935"
                  className="text-[#646d49] underline"
                >
                  06-6115-9935
                </a>
              </p>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=%E5%A4%A7%E9%98%AA%E5%BA%9C%E5%AE%88%E5%8F%A3%E5%B8%82%E5%A4%A7%E6%97%A5%E7%94%BA1-8-18"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-block text-sm font-medium text-[#646d49] underline underline-offset-4"
            >
              Googleマップで確認する →
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f0ede5] px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <SectionHeading en="FAQ" title="よくあるご質問" />

          <div className="mt-12 space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-xl border border-[#e2ddd2] bg-white p-6"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-sm font-medium leading-7">
                  <span>
                    <span className="mr-3 text-[#858b6a]">
                      Q.
                    </span>
                    {faq.question}
                  </span>
                  <span className="text-lg text-[#858b6a] group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="mt-5 border-t border-[#eee9df] pt-5 text-sm leading-8 text-[#716c63]">
                  <span className="mr-3 font-medium text-[#858b6a]">
                    A.
                  </span>
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* RESERVATION */}
      <section
        id="reservation"
        className="bg-[#777a59] px-5 py-20 text-center text-white sm:py-24"
      >
        <p className="text-xs tracking-[0.3em] text-[#f1ecda]">
          RESERVATION
        </p>

        <h2 className="mt-5 text-2xl font-medium tracking-widest sm:text-3xl">
          ご予約はこちら
        </h2>

        <p className="mt-7 text-sm leading-9 text-[#f7f4e9]">
          完全予約制・前日まで受付
          <br />
          60分のプライベートヘッドスパ
        </p>

        <div className="mx-auto mt-8 max-w-lg rounded-2xl border border-white/30 p-7">
          <p className="text-sm">
            ご予約時間
          </p>
          <p className="mt-4 text-sm leading-9">
            9:30 ／ 11:00 ／ 12:30
            <br />
            14:00 ／ 15:30
          </p>
          <p className="mt-4 text-xs text-[#f1ecda]">
            平日のみ（土日祝休業）
          </p>
        </div>

        <a
          href={bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-9 inline-block rounded-full bg-white px-10 py-4 text-sm font-medium text-[#5d6245] transition hover:bg-[#f0ede5]"
        >
          SquareでWEB予約する →
        </a>

        <p className="mt-6 text-xs leading-7 text-[#f1ecda]">
          お支払いは現地払いのみ
          <br />
          キャンセルは前日までにお願いいたします
        </p>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#faf8f3] px-5 py-10 text-center">
        <p className="text-sm tracking-widest text-[#777a59]">
          HEAD SPA YU · OSAKA
        </p>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-6 text-xs text-[#716c63]">
          <a href="/" className="underline underline-offset-4">
            福岡本店
          </a>
          <a
            href="/en/osaka"
            className="underline underline-offset-4"
          >
            ENGLISH
          </a>
          <a
            href="#access"
            className="underline underline-offset-4"
          >
            アクセス
          </a>
        </div>

        <p className="mt-7 text-xs text-[#9b9488]">
          © HEAD SPA YU OSAKA
        </p>
      </footer>
    </main>
  );
}
