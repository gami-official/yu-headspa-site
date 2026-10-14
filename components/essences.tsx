
import Image from "next/image"

const essences = [
  {
    title: "完全個室のプライベート空間",
    text: "周りを気にせず、自分だけの時間をゆっくり過ごせる空間づくり。",
  },
  {
    title: "頭皮の状態を確認すること",
    text: "マイクロスコープなどを活用し、目に見えにくい頭皮の状態も確認。",
  },
  {
    title: "15年の経験を活かした施術",
    text: "積み重ねてきた経験を活かし、一人ひとりに丁寧に向き合う。",
  },
  {
    title: "育毛を見据えた頭皮ケア",
    text: "その場の気持ちよさだけでなく、健やかな髪を育む土台づくりを大切に。",
  },
  {
    title: "カラーと頭皮ケアを両立",
    text: "ヘアカラーを楽しみながら、頭皮への配慮も忘れない施術。",
  },
  {
    title: "クリームバスとスチームへのこだわり",
    text: "温かなスチームやクリームを取り入れ、心地よい施術時間をつくる。",
  },
  {
    title: "五感でくつろげる空間",
    text: "香りや温かさ、落ち着いた雰囲気まで大切にする。",
  },
  {
    title: "季節の花と美しい空間づくり",
    text: "生花などの小さなこだわりを重ね、訪れるたびに心が和む場所へ。",
  },
  {
    title: "1日3名限定の丁寧な対応",
    text: "予約を詰め込みすぎず、お客様一人ひとりと向き合う時間を大切に。",
  },
  {
    title: "ホームケアまで考えたご提案",
    text: "サロンでの施術だけで終わらず、ご自宅での頭皮・ヘアケアもサポート。",
  },
]

export function Essences() {
  return (
    <section
      id="essences"
      className="bg-secondary py-16 sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
        <div className="mb-10 text-center sm:mb-14">
          <p className="text-sm tracking-[0.3em] text-gold sm:text-base">
            10 ESSENCES
          </p>
          <h2 className="mt-3 text-xl font-semibold text-white sm:text-2xl">
            ヘッドスパ専門店ゆうの10のこだわり
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
            一人ひとりのお客様に、心地よい時間と丁寧な頭皮ケアを。
            ゆうが大切にしている10のこだわりをご紹介します。
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {essences.map((item, index) => {
            const number = String(index + 1).padStart(2, "0")

            return (
              <article
                key={number}
                className="min-w-0 overflow-hidden rounded-2xl border border-gold/20 bg-background"
              >
                <div className="relative aspect-[16/10] bg-zinc-900">
                  <Image
                    src={`/images/essence-${number}.png`}
                    alt={item.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                <div className="p-5 sm:p-6">
                  <p className="text-xs tracking-widest text-gold">
                    {number} / OUR COMMITMENT
                  </p>
                  <h3 className="mt-3 break-words text-base font-semibold leading-7 text-white sm:text-lg">
                    {item.title}
                  </h3>
                  <p className="mt-3 break-words text-sm leading-7 text-white/75">
                    {item.text}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
