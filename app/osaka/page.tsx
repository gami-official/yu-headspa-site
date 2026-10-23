
import type { Metadata } from "next";
import Image from "next/image";

const siteUrl = "https://www.yuheadspa.net";
const bookingUrl =
  "https://book.squareup.com/appointments/w4hozbb9zwbeg5/location/LFXN7SMC38Q2H/services";

export const metadata: Metadata = {
  title: "ヘッドスパ専門店 ゆう 大阪店｜60分で、頭を切り替える。",
  description:
    "大阪府守口市大日町の完全予約制プライベートヘッドスパ。忙しい毎日に、上質な60分のリセットを。リラクゼーション8,000円から、育毛・頭皮ケアも。",
  alternates: {
    canonical: `${siteUrl}/osaka`,
  },
  openGraph: {
    title: "ヘッドスパ専門店 ゆう 大阪店｜60分で、頭を切り替える。",
    description:
      "忙しい毎日に、上質な60分のリセットを。大阪・大日の完全予約制プライベートヘッドスパ。",
    url: `${siteUrl}/osaka`,
    siteName: "ヘッドスパ専門店 ゆう 大阪店",
    type: "website",
    locale: "ja_JP",
    images: [
      {
        url: `${siteUrl}/images/osaka-logo.png`,
        alt: "ヘッドスパ専門店 ゆう 大阪店",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ヘッドスパ専門店 ゆう 大阪店",
    description: "60分で、頭を切り替える。",
    images: [`${siteUrl}/images/osaka-logo.png`],
  },
};

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

const routeSteps = [
  ["01", "大日駅で降り、写真の場所から地上へ出ます。"],
  ["02", "そのまままっすぐ進みます。"],
  ["03", "目印を過ぎても、まっすぐ進みます。"],
  ["04", "そのまま直進します。"],
  ["05", "もう少し直進します。"],
  ["06", "左に曲がります。"],
  ["07", "少し進むと、右手に倉庫兼サロンが見えます。"],
  ["08", "建物入口を目印にお越しください。"],
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
      "前日まではWEBからキャンセルできます。当日やむを得ずキャンセルされる場合は、お電話でご連絡ください。",
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

function BookingButton({
  children = "60分のヘッドスパを予約する",
}: {
  children?: string;
}) {
  return (
    <a
      href={bookingUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#777a59] px-8 py-4 text-center text-sm font-medium tracking-wide text-white shadow-sm transition hover:bg-[#5d6245]"
    >
      {children} →
    </a>
  );
}

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
      <p className="text-xs font-medium tracking-[0.25em] text-[#777a59]">
        {en}
      </p>
      <h2 className="mt-4 text-2xl font-medium tracking-wider text-[#39362f] sm:text-3xl">
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

export default function OsakaPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#faf8f3] text-[#39362f]">
      {/* HEADER */}
      <header className="border-b border-[#ded9ce] bg-[#faf8f3]">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-4 py-4 sm:px-5">
          <a
            href="/osaka"
            className="shrink-0 text-[13px] font-medium tracking-wide text-[#565440] sm:text-base"
          >
            HEAD SPA YU
            <span className="ml-1.5 text-[10px] text-[#8c8579] sm:text-xs">
              OSAKA
            </span>
          </a>

          <nav className="flex items-center gap-2 sm:gap-4">
            <a
              href="/en/osaka"
              className="text-[11px] text-[#666858] underline underline-offset-4 sm:text-xs"
            >
              ENGLISH
            </a>
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap rounded-full bg-[#777a59] px-3 py-2.5 text-[11px] text-white transition hover:bg-[#5d6245] sm:px-5 sm:text-xs"
            >
              WEB予約
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#f0ece3] px-5 pb-16 pt-12 sm:pb-24 sm:pt-20">
        <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-[#dce0ce]/50 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-[#e2d5c3]/60 blur-3xl" />

        <div className="relative mx-auto max-w-4xl text-center">
          <p className="text-[11px] font-medium tracking-[0.25em] text-[#777a59] sm:text-xs">
            QUICK RESET HEAD SPA
          </p>

          <div className="mx-auto mt-6 w-36 sm:w-48">
            <Image
              src="/images/osaka-logo.png"
              alt="ヘッドスパ専門店 ゆう 大阪店 ロゴ"
              width={500}
              height={500}
              priority
              className="h-auto w-full"
            />
          </div>

          <p className="mt-7 text-xs tracking-[0.15em] text-[#777a59] sm:text-sm">
            完全予約制・プライベートサロン
          </p>

          <h1 className="mt-5 text-[clamp(1.8rem,7.5vw,3.5rem)] font-medium leading-[1.5] tracking-tight">
            60分で、
            <br />
            頭を切り替える。
          </h1>

          <p className="mt-5 text-base font-medium leading-8 text-[#686558] sm:text-xl">
            忙しい毎日に、上質なリセットを。
          </p>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-8 text-[#716c63]">
            限られた時間でも、頭と心に余白を。
            <br />
            リラクゼーションから本格的な頭皮ケアまで。
            <br />
            大阪・大日のプライベートヘッドスパ。
          </p>

          <div className="mt-8">
            <BookingButton />
          </div>

          <p className="mt-4 text-xs leading-6 text-[#8b857a]">
            全コース60分枠｜税込8,000円〜
            <br />
            平日営業・前日までの予約制
          </p>
        </div>
      </section>

      {/* QUICK RESET */}
      <section className="bg-[#393a31] px-5 py-16 text-center text-white sm:py-20">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs tracking-[0.3em] text-[#c5c7ad]">
            ONE HOUR. YOUR RESET.
          </p>
          <h2 className="mt-5 text-2xl font-medium leading-relaxed tracking-wider sm:text-4xl">
            忙しい人にこそ、
            <br />
            頭を休める60分を。
          </h2>
          <p className="mt-6 text-sm leading-9 text-[#e2e0d7]">
            長時間の予定を組まなくても、
            <br />
            自分のための時間をつくれる。
            <br />
            大阪店は60分枠のヘッドスパ専門店です。
          </p>

          <div className="mt-9 grid gap-3 sm:grid-cols-3">
            {[
              ["60 MIN", "全コース60分枠"],
              ["PRIVATE", "完全予約制の空間"],
              ["SCALP CARE", "癒しと頭皮ケア"],
            ].map(([en, ja]) => (
              <div
                key={en}
                className="rounded-xl border border-white/20 px-5 py-6"
              >
                <p className="text-lg tracking-widest text-[#d8d2aa]">
                  {en}
                </p>
                <p className="mt-3 text-xs text-[#e2e0d7]">{ja}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONCEPT */}
      <section className="px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            en="OUR CONCEPT"
            title="60分に、上質なケアを。"
            description="短い時間だからこそ、心地よさと丁寧さを大切に。目的に合わせたヘッドスパをご用意しています。"
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
                title: "癒しと頭皮ケア",
                description:
                  "リラックスできる心地よさと、健やかな頭皮環境を目指すケアを大切にしています。",
              },
              {
                number: "03",
                title: "プライベート空間",
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
            description="リラクゼーションと育毛・頭皮ケア。目的に合わせて選べる4つのコース。"
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
                QUICK RELAXATION
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
                忙しい毎日に、頭を休める時間を。
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

          {/* DECIDE ON ARRIVAL */}
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

          {/* INTERIOR */}
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
                周囲を気にせず、頭皮ケアとリラクゼーションの時間を
                お過ごしください。
              </p>
            </div>
          </div>

          {/* EXTERIOR */}
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
                倉庫を併設した建物内にございます。
              </p>
              <p className="mt-4 text-xs leading-7 text-[#857e72]">
                ※ご予約時間に合わせてお越しください。
              </p>
            </div>
          </div>

          {/* ROUTE PHOTOS */}
          <div className="mt-16">
            <h3 className="text-center text-xl font-medium tracking-wider">
              大日駅からの写真付き道順
            </h3>
            <p className="mt-4 text-center text-sm leading-8 text-[#716c63]">
              写真を01から08まで順番にご覧ください。
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {routeSteps.map(([number, description]) => (
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
              駐車位置がご不明な場合は、
              ご来店前にお電話でお問い合わせください。
            </p>
          </div>

          {/* STORE DETAILS */}
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
          <SectionHeading
            en="FAQ"
            title="よくあるご質問"
          />

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
          60分のリセットを予約する
        </h2>

        <p className="mt-7 text-sm leading-9 text-[#f7f4e9]">
          完全予約制・前日まで受付
          <br />
          大阪・大日のプライベートヘッドスパ
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
          キャンセルは前日までWEB受付
          <br />
          当日のキャンセルはお電話でご連絡ください
        </p>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#faf8f3] px-5 py-12 text-center">
        <p className="text-sm tracking-widest text-[#777a59]">
          HEAD SPA YU · OSAKA
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-4 text-xs text-[#716c63]">
          <a
            href="/"
            className="underline underline-offset-4"
          >
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

          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4"
          >
            WEB予約
          </a>
        </div>

        <div className="mx-auto mt-8 max-w-lg border-t border-[#e4dfd5] pt-7">
          <p className="text-xs text-[#938b7e]">
            運営会社
          </p>
          <a
            href="https://www.gamigami.net/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-sm font-medium text-[#646d49] underline underline-offset-4 transition hover:text-[#39362f]"
          >
            株式会社GAMI ↗
          </a>
        </div>

        <p className="mt-8 text-xs text-[#9b9488]">
          © HEAD SPA YU OSAKA
        </p>
      </footer>
    </main>
  );
}
