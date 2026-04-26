import type { Metadata, Viewport } from "next"
import Script from "next/script"
import { Noto_Serif_JP } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-noto-serif-jp",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.yuheadspa.net"),
  title: {
    default:
      "ヘッドスパ専門店ゆう｜福岡市西区の完全個室ヘッドスパ・育毛頭皮ケア",
    template: "%s｜ヘッドスパ専門店ゆう",
  },
  description:
    "福岡市西区豊浜の完全個室ヘッドスパ専門店。抜け毛・薄毛・白髪・分け目・頭皮ケアに。ヒト幹細胞ケアと専門技術で、髪質と印象を頭皮から整えます。一日三名限定・完全予約制。",
  keywords: [
    "ヘッドスパ 福岡",
    "ヘッドスパ 福岡市",
    "ヘッドスパ 西区",
    "福岡 ヘッドスパ 専門店",
    "育毛 ヘッドスパ 福岡",
    "頭皮ケア 福岡",
    "薄毛 改善 福岡",
    "抜け毛 改善 福岡",
    "白髪 頭皮ケア 福岡",
    "ヘッドスパ 個室 福岡",
    "ヘッドスパ 高級 福岡",
    "福岡市西区 ヘッドスパ",
    "豊浜 ヘッドスパ",
    "ヒト幹細胞 頭皮ケア",
  ],
  alternates: {
    canonical: "https://www.yuheadspa.net",
  },
  openGraph: {
    title:
      "ヘッドスパ専門店ゆう｜福岡市西区の完全個室ヘッドスパ・育毛頭皮ケア",
    description:
      "完全個室・一日三名限定。抜け毛・薄毛・白髪・分け目のお悩みに、頭皮から髪質と印象を整える専門ヘッドスパ。",
    url: "https://www.yuheadspa.net",
    siteName: "ヘッドスパ専門店ゆう",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/images/ogp.jpg",
        width: 1200,
        height: 630,
        alt: "ヘッドスパ専門店ゆう｜福岡市西区の完全個室ヘッドスパ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "ヘッドスパ専門店ゆう｜福岡市西区の完全個室ヘッドスパ・育毛頭皮ケア",
    description:
      "完全個室・一日三名限定。抜け毛・薄毛・白髪・分け目のお悩みに、頭皮から髪質と印象を整える専門ヘッドスパ。",
    images: ["/images/ogp.jpg"],
  },
  robots: {
    index: true,
    follow: true,
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: "ヘッドスパ専門店ゆう 本店",
    alternateName: "ヘッドスパ専門店 ゆう",
    image: "https://www.yuheadspa.net/images/ogp.jpg",
    url: "https://www.yuheadspa.net",
    telephone: "092-284-9392",
    email: "info@yuheadspa.net",
    priceRange: "¥¥¥",
    description:
      "福岡市西区豊浜の完全個室ヘッドスパ専門店。抜け毛・薄毛・白髪・分け目・頭皮ケアに。ヒト幹細胞ケアと専門技術で、髪質と印象を頭皮から整えます。",
    address: {
      "@type": "PostalAddress",
      postalCode: "819-0014",
      streetAddress: "豊浜2丁目20-20-2",
      addressLocality: "福岡市西区",
      addressRegion: "福岡県",
      addressCountry: "JP",
    },
    geo: {
      "@type": "GeoCoordinates",
      address: "福岡県福岡市西区豊浜2丁目20-20-2",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:30",
        closes: "16:30",
      },
    ],
    amenityFeature: [
      {
        "@type": "LocationFeatureSpecification",
        name: "完全個室",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "完全予約制",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "駐車場2台完備",
        value: true,
      },
    ],
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "育毛ヘッドスパ",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "ヘアカラーヘッドスパ",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "リラクゼーションヘッドスパ",
        },
      },
    ],
    sameAs: ["https://coubic.com/yuheadspa/services"],
  }

  return (
    <html lang="ja" className={notoSerifJP.variable}>
      <body className="font-serif antialiased">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W9ZZDQDS"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-W9ZZDQDS');
          `}
        </Script>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {children}
        <Analytics />
      </body>
    </html>
  )
}
