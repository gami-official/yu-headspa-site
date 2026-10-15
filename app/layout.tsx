
import type { Metadata, Viewport } from "next"
import Script from "next/script"
import { Noto_Serif_JP } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const SITE_URL = "https://www.yuheadspa.net"

const RESERVE_URL =
  "https://headspayu.stores.jp/reserve/yuheadspa/services#pageContent"

const SITE_TITLE =
  "ヘッドスパ専門店ゆう｜福岡市西区の完全個室ヘッドスパ・育毛頭皮ケア"

const SITE_DESCRIPTION =
  "福岡市西区豊浜の完全個室ヘッドスパ専門店。育毛・頭皮ケア、ヘアカラーヘッドスパ、リラクゼーションヘッドスパをご用意。ヒト幹細胞由来成分を取り入れた頭皮ケアも。1日3名限定・完全予約制。"

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
    "福岡市 ヘッドスパ",
    "福岡市西区 ヘッドスパ",
    "豊浜 ヘッドスパ",
    "ヘッドスパ専門店 福岡",
    "完全個室 ヘッドスパ 福岡",
    "育毛ヘッドスパ 福岡",
    "頭皮ケア 福岡",
    "ヘアカラーヘッドスパ 福岡",
    "リラクゼーションヘッドスパ 福岡",
    "ヒト幹細胞 頭皮ケア",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "@id": `${SITE_URL}/#salon`,

    name: "ヘッドスパ専門店ゆう 本店",
    alternateName: "ヘッドスパ専門店 ゆう",

    description: SITE_DESCRIPTION,

    url: SITE_URL,

    image: `${SITE_URL}/images/ogp.jpg`,

    telephone: "092-284-9392",
    email: "info@yuheadspa.net",

    priceRange: "¥16,000〜¥35,000",

    address: {
      "@type": "PostalAddress",
      postalCode: "819-0014",
      streetAddress: "西区豊浜2丁目20-20-2",
      addressLocality: "福岡市",
      addressRegion: "福岡県",
      addressCountry: "JP",
    },

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

    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "ヘッドスパメニュー",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "育毛ヘッドスパ",
          itemListElement: [
            {
              "@type": "Offer",
              price: "18000",
              priceCurrency: "JPY",
              itemOffered: {
                "@type": "Service",
                name: "育毛ヘッドスパ Light",
              },
            },
            {
              "@type": "Offer",
              price: "21000",
              priceCurrency: "JPY",
              itemOffered: {
                "@type": "Service",
                name: "育毛ヘッドスパ Standard",
              },
            },
            {
              "@type": "Offer",
              price: "35000",
              priceCurrency: "JPY",
              itemOffered: {
                "@type": "Service",
                name: "育毛ヘッドスパ Premium",
              },
            },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "ヘアカラーヘッドスパ",
          itemListElement: [
            {
              "@type": "Offer",
              price: "21000",
              priceCurrency: "JPY",
              itemOffered: {
                "@type": "Service",
                name: "Hair Color Head Spa",
              },
            },
            {
              "@type": "Offer",
              price: "26000",
              priceCurrency: "JPY",
              itemOffered: {
                "@type": "Service",
                name: "Hair Color Head Spa + Scalp Care",
              },
            },
          ],
        },
        {
          "@type": "Offer",
          price: "16000",
          priceCurrency: "JPY",
          itemOffered: {
            "@type": "Service",
            name: "リラクゼーションヘッドスパ",
          },
        },
      ],
    },

    potentialAction: {
      "@type": "ReserveAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: RESERVE_URL,
      },
      result: {
        "@type": "Reservation",
        name: "ヘッドスパ予約",
      },
    },
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

        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
        >
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
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />

        {children}

        <Analytics />
      </body>
    </html>
  )
}
