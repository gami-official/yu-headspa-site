"use client"

import { FadeIn } from "@/components/fade-in"

const COUBIC_URL = "https://coubic.com/yuheadspa/services"
const LINE_URL = "https://lin.ee/7hso3k1"

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-black text-white">

      {/* 背景動画（少し縮小して余白出す） */}
      <div className="absolute inset-0 flex items-center justify-center">
        <video
          src="/videos/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="h-[110%] w-[110%] object-cover scale-95"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/85" />
      </div>

      {/* コンテンツ（完全中央寄せ） */}
      <div className="relative mx-auto flex min-h-[700px] max-w-4xl flex-col items-center justify-center px-5 py-20 text-center">

        {/* キャッチ */}
        <FadeIn>
          <p className="text-[11px] tracking-[0.45em] text-[#d6b36a]">
            〜贅沢を日常に〜
          </p>
        </FadeIn>

        {/* サブ */}
        <FadeIn delay={0.05}>
          <p className="mt-3 text-[10px] tracking-[0.3em] text-white/60">
            完全個室｜完全予約制｜1日3名限定
          </p>
        </FadeIn>

        {/* タイトル */}
        <FadeIn delay={0.1}>
          <h1 className="mt-5 text-[clamp(1.8rem,6vw,3.2rem)] leading-[1.5] tracking-[0.12em]">
            頭皮から整え、
            <br />
            髪も心も満たされる
            <br />
            ヘッドスパ専門店
          </h1>
        </FadeIn>

        {/* 説明 */}
        <FadeIn delay={0.15}>
          <p className="mt-5 max-w-xl text-sm leading-7 text-white/80 sm:text-base">
            抜け毛・薄毛・白髪・頭皮の違和感・疲労感に。
            育毛・カラー・リラクゼーションまで、
            お悩みに合わせて丁寧にご提案します。
          </p>
        </FadeIn>

        {/* CTA */}
        <FadeIn delay={0.2}>
          <div className="mt-7 flex w-full max-w-md flex-col gap-3">

            <a
              href={COUBIC_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-full bg-[#d6b36a] px-6 py-3 text-sm font-medium text-black"
            >
              空き状況を見る
            </a>

            <a
              href="#menu"
              className="w-full rounded-full border border-white/30 px-6 py-3 text-sm"
            >
              メニューを見る
            </a>

            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-full border border-white/30 px-6 py-3 text-sm text-white/80"
            >
              LINE相談
            </a>

          </div>
        </FadeIn>

        {/* スクロール */}
        <FadeIn delay={0.3}>
          <p className="mt-10 text-xs tracking-[0.2em] text-white/50">
            SCROLL ↓
          </p>
        </FadeIn>

      </div>
    </section>
  )
}
