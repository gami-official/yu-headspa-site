
export type MenuItem = {
  name: string
  detail: string
  duration: string
  price: string
}

export type Menu = {
  id: string
  tab: string
  enTitle: string
  image: string
  descriptionParagraphs: string[]
  items: MenuItem[]
  steps: string[]
}

export const menus: Menu[] = [
  {
    id: "scalp",
    tab: "育毛ヘッドスパ",
    enTitle: "Scalp Care Head Spa",
    image: "/images/scalp.jpg",
    descriptionParagraphs: [
      "抜け毛・薄毛・分け目・ボリューム不足・ハリやコシの低下が気になる方へ。頭皮環境を健やかに整えるための育毛ヘッドスパです。",
      "ヒト幹細胞由来成分を配合したケアを取り入れ、頭皮にうるおいを与えながら、健やかな髪のための土台づくりをサポートします。",
      "3つのコースは使用するケア剤の濃度と使用量が異なります。35,000円は超高濃度で使用量も多め、21,000円は高濃度、18,000円は中濃度です。",
      "完全個室・1日3名限定の落ち着いた空間で、一人ひとりの頭皮の状態やお悩みに合わせて丁寧に施術いたします。",
      "初めてのお客様にも、それぞれのコースの違いをご説明したうえで、ご希望に合ったケアをご提案します。",
    ],
    items: [
      {
        name: "Scalp Care | Premium",
        detail: "超高濃度ヒト幹細胞ケア・使用量多め。より充実した頭皮ケアを希望される方に。",
        duration: "90min",
        price: "¥35,000",
      },
      {
        name: "Scalp Care | Standard",
        detail: "高濃度ヒト幹細胞ケア。頭皮の状態が気になり、本格的なケアを始めたい方に。",
        duration: "90min",
        price: "¥21,000",
      },
      {
        name: "Scalp Care | Light",
        detail: "中濃度ヒト幹細胞ケア。まずは頭皮ケアを体験してみたい方に。",
        duration: "90min",
        price: "¥18,000",
      },
    ],
    steps: [
      "頭皮マイクロスコープ",
      "ブラッシング",
      "足湯",
      "カッサ",
      "アロマクリームスパ",
      "ホットストーン",
      "ホットスチーム",
      "ヒト幹細胞ケアシャンプー",
      "高保水Wトリートメント",
      "頭皮ケア成分塗布",
      "電気バリブラシ",
      "ヘアドライ",
    ],
  },
  {
    id: "color",
    tab: "ヘアカラーヘッドスパ",
    enTitle: "Hair Color Head Spa",
    image: "/images/color.jpg",
    descriptionParagraphs: [
      "白髪染めやカラーを続けながら、頭皮ケアも同時に行いたい方へ。美しい髪色と健やかな頭皮環境の両立を目指すヘアカラーヘッドスパです。",
      "ゼロテクニックカラーを取り入れ、頭皮への負担に配慮しながら、艶のある美しい仕上がりを目指します。",
      "その場の仕上がりだけでなく、これからの髪と頭皮環境まで見据えたケアをご提供します。",
      "白髪ケアと頭皮ケアを同時に受けたい方、カラー時の頭皮への配慮を重視する方におすすめです。",
      "※ブリーチは使用しておりません。",
    ],
    items: [
      {
        name: "Hair Color Head Spa + Scalp Care",
        detail: "高濃度ヒト幹細胞ケア Standardを組み合わせたヘアカラーヘッドスパ",
        duration: "90min",
        price: "¥26,000",
      },
      {
        name: "Hair Color Head Spa",
        detail: "頭皮への配慮を大切にしたヘアカラーとヘッドスパ",
        duration: "90min",
        price: "¥21,000",
      },
    ],
    steps: [
      "ブラッシング",
      "頭皮保護",
      "ゼロテクカラー",
      "アロマクリームスパ",
      "濃密泡シャンプー",
      "高保水Wトリートメント",
      "頭皮保湿",
      "電気バリブラシ",
      "残留ジアミン除去",
      "ヘアドライ",
    ],
  },
  {
    id: "relaxation",
    tab: "リラクゼーションヘッドスパ",
    enTitle: "Relaxation Head Spa",
    image: "/images/relax.jpg",
    descriptionParagraphs: [
      "頭・首・額をオールハンドで丁寧にほぐす、リラクゼーションを重視したヘッドスパです。",
      "アロマクリームバス、温かなスチーム、ホットストーンを取り入れ、心地よい時間をご提供します。",
      "日頃の疲れや頭の重だるさが気になる方、ゆっくりとリラックスしたい方におすすめです。",
      "完全個室の静かな空間で、日常を離れた癒しのひとときをお過ごしください。",
      "初めてヘッドスパを体験する方にもおすすめのコースです。",
    ],
    items: [
      {
        name: "Relaxation Head Spa",
        detail: "心地よさとリラックスを重視したベーシックコース",
        duration: "90min",
        price: "¥16,000",
      },
    ],
    steps: [
      "ブラッシング",
      "足湯",
      "カッサ",
      "アロマクリームスパ",
      "ホットストーン",
      "ホットスチーム",
      "濃密泡シャンプー",
      "高保水Wトリートメント",
      "頭皮保湿",
      "電気バリブラシ",
      "ヘアドライ",
    ],
  },
]
