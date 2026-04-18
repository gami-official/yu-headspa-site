"use client"

import { FadeIn } from "@/components/fade-in"

const COUBIC_URL = "https://coubic.com/yuheadspa/services"
const LINE_URL = "https://lin.ee/7hso3k1"

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-black text-white">
      {/* 背景動画 */}
      <div className="absolute inset-0">
        <video
          src="/videos/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80" />
      </div>

      {/* コンテンツ */}
      <div className="relative mx-auto flex min-h-[720px] max-w-6xl items-center px-5 py-24 sm:px-6 lg:min-h-screen lg:px-10">
        <div className="w-full max-w-2xl">

          {/* キャッチ */}
          <FadeIn>
            <p className="text-[11px] tracking-[0.4em] text-[#d6b36a]">
              〜贅沢を日常に〜
            </p>
          </FadeIn>

          {/* サブ情報 */}
          <FadeIn delay={0.05}>
            <p className="mt-3 text-[10px] tracking-[0.3em] text-white/60">
              完全個室｜完全予約制｜1日3名限定
            </p>
          </FadeIn>

          {/* タイトル */}
          <FadeIn delay={0.1}>
            <h1 className="mt-6 text-2xl leading-[1.5] tracking-[0.12em] sm:text-4xl lg:text-5xl">
              頭皮から整え、
              <br />
              髪も心も満たされる
              <br />
              ヘッドスパ専門店
            </h1>
          </FadeIn>

          {/* 説明 */}
          <FadeIn delay={0.15}>
            <p className="mt-5 text-sm leading-7 text-white/80 sm:text-base">
              抜け毛・薄毛・白髪・頭皮の違和感・疲労感に。
              育毛・カラー・リラクゼーションまで、
              お悩みに合わせて丁寧にご提案します。
            </p>
          </FadeIn>

          {/* CTA */}
          <FadeIn delay={0.2}>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">

              <a
                href={COUBIC_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto rounded-full bg-[#d6b36a] px-6 py-3 text-center text-sm font-medium text-black"
              >
                空き状況を見る
              </a>

              <a
                href="#menu"
                className="w-full sm:w-auto rounded-full border border-white/30 px-6 py-3 text-center text-sm text-white"
              >
                メニューを見る
              </a>

              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto rounded-full border border-white/30 px-6 py-3 text-center text-sm text-white/80"
              >
                LINE相談
              </a>

            </div>
          </FadeIn>

          {/* 下ナビ */}
          <FadeIn delay={0.3}>
            <div className="mt-10 text-center sm:text-left">
              <a
                href="#menu"
                className="text-xs tracking-[0.2em] text-white/50"
              >
                SCROLL ↓
              </a>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  )
}
