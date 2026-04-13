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
    id: "relaxation",
    tab: "リラクゼーションヘッドスパ",
    enTitle: "Relaxation Head Spa",
    image: "/images/relaxation-bg.png",
    descriptionParagraphs: [
      "頭・首・額をオールハンドで丁寧にほぐし、アロマクリームバス・スチーム・ホットストーンで巡りを整え、深いリラックスへ導く上質なヘッドスパです。",
      "慢性的な疲労感、眼精疲労、睡眠の質の低下、頭の重だるさが気になる方におすすめです。",
      "完全個室の静かな空間で、日常を忘れる癒しの時間をお過ごしいただけます。",
    ],
    items: [
      {
        name: "Relaxation Head Spa",
        detail: "",
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
  {
    id: "scalp",
    tab: "育毛ヘッドスパ",
    enTitle: "Scalp Care Head Spa",
    image: "/images/menu-scalp.jpg",
    descriptionParagraphs: [
      "抜け毛・薄毛・分け目・ボリューム不足・ハリコシの低下が気になる方へ。頭皮環境を根本から整える、当店人気No.1の育毛ヘッドスパです。",
      "高濃度ヒト幹細胞ケアを使用し、頭皮にうるおいと栄養を与えながら、健やかで美しい髪を育む土台づくりを行います。",
      "完全個室・1日3名限定の落ち着いた空間で、周囲を気にせず本格的な頭皮ケアを受けていただけます。",
      "美容業界で注目されている頭皮ケア成分を取り入れ、お悩みの深さやご希望に合わせて3つのコースから最適なプランをご提案いたします。",
    ],
    items: [
      {
        name: "Scalp Care | Level 3",
        detail: "高濃度ヒト幹細胞ケア Premium",
        duration: "90min",
        price: "¥35,000",
      },
      {
        name: "Scalp Care | Level 2",
        detail: "高濃度ヒト幹細胞ケア Standard",
        duration: "90min",
        price: "¥21,000",
      },
      {
        name: "Scalp Care | Level 1",
        detail: "高濃度ヒト幹細胞ケア Light",
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
      "高濃度ヒト幹細胞ケアシャンプー",
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
    image: "/images/menu-color.jpg",
    descriptionParagraphs: [
      "白髪染めやカラーを続けながら、頭皮ケアも同時に叶えたい方へ。美しい髪色と健やかな頭皮環境を両立する、上質なヘアカラーヘッドスパです。",
      "ゼロテクニックカラーにより頭皮への刺激をできる限り抑え、髪や頭皮への負担に配慮しながら、艶感のある美しい仕上がりへ導きます。",
      "頭皮の違和感、乾燥、ダメージ、エイジングによる髪質変化が気になる大人女性にもおすすめです。",
      "福岡でも希少な、カラーと頭皮ケアを同時に受けられる特別なメニューです。",
      "※ブリーチは使用しておりません。",
    ],
    items: [
      {
        name: "Hair Color Head Spa + Scalp Care",
        detail: "高濃度ヒト幹細胞ケア Light",
        duration: "90min",
        price: "¥26,000",
      },
      {
        name: "Hair Color Head Spa",
        detail: "",
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
]
