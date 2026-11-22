
import type { Metadata, Viewport } from "next"
import Script from "next/script"
import { Noto_Serif_JP } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const SITE_URL = "https://www.yuheadspa.net"

const GTM_ID = "GTM-W9ZZDQDS"

const SITE_TITLE =
  "ヘッドスパ専門店ゆう｜福岡の育毛・カラーヘッドスパ・ギフト"

const SITE_DESCRIPTION =
  "福岡市西区豊浜の完全個室ヘッドスパ専門店ゆう。大切な方へ贈るヘッドスパギフト、髪と頭皮をいたわるカラーヘッドスパ、これからの髪を考える育毛ヘッドスパをご用意。15年以上の経験、1日3名限定・完全予約制。"

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-noto-serif-jp",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: SITE_TITLE,
    template: "%s｜ヘッドスパ専門店ゆう",
  },

  description: SITE_DESCRIPTION,

  keywords: [
    "ヘッドスパ 福岡",
    "福岡 ヘッドスパ",
    "福岡市西区 ヘッドスパ",
    "豊浜 ヘッドスパ",
    "ヘッドスパ ギフト 福岡",
    "ヘッドスパ プレゼント 福岡",
    "ヘッドスパ ギフトカード",
    "育毛ヘッドスパ 福岡",
    "育毛 頭皮ケア 福岡",
    "カラーヘッドスパ 福岡",
    "ヘアカラーヘッドスパ 福岡",
    "白髪染め ヘッドスパ 福岡",
    "完全個室 ヘッドスパ 福岡",
    "ヘッドスパ専門店ゆう",
  ],

  // 店舗別のcanonicalは各ページで設定。
  // ここで "/" を指定すると大阪店にも継承されるため設定しない。

  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: "ヘッドスパ専門店ゆう",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/images/ogp.jpg",
        width: 1200,
        height: 630,
        alt: "ヘッドスパ専門店ゆう｜福岡の育毛・カラーヘッドスパ・ギフト",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/images/ogp.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export const viewport: Viewport = {
  themeColor: "#1a1a1a",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" className={notoSerifJP.variable}>
      <body className="font-serif antialiased">

        {/* GTM：JavaScript無効時のフォールバック */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{
              display: "none",
              visibility: "hidden",
            }}
            title="Google Tag Manager"
          />
        </noscript>

        {/* 既存のGoogleタグマネージャーを維持 */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
        >
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({
                'gtm.start': new Date().getTime(),
                event:'gtm.js'
              });
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),
              dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(
              window,
              document,
              'script',
              'dataLayer',
              '${GTM_ID}'
            );
          `}
        </Script>

        {children}

        {/* Vercel Analytics：既存機能を維持 */}
        <Analytics />

      </body>
    </html>
  )
}
