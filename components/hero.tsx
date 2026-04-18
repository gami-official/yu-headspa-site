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
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/35 to-black/75" />
      </div>

      <div className="relative mx-auto flex min-h-[760px] max-w-6xl items-center px-5 pb-16 pt-28 sm:px-6 lg:min-h-screen lg:px-10">
        <div className="max-w-3xl">
          <FadeIn>
            <p className="text-[11px] tracking-[0.35em] text-[#d6b36a] sm:text-xs">
              HEAD SPA SALON YU
            </p>
          </FadeIn>

          <FadeIn delay={0.05}>
            <p className="mt-4 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] tracking-[0.16em] text-white/85 backdrop-blur-sm sm:text-xs">
              完全個室｜完全予約制｜1日3名限定｜駐車場2台あり
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="mt-6 text-3xl font-medium leading-[1.5] tracking-[0.12em] text-white sm:text-4xl sm:leading-[1.6] lg:text-5xl lg:leading-[1.7]">
              頭皮から整え、
              <br className="hidden sm:block" />
              髪も心も満たされる
              <br />
              ヘッドスパ専門店
            </h1>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="mt-6 max-w-2xl text-sm leading-8 text-white/80 sm:text-base">
              抜け毛・薄毛・白髪・頭皮の違和感・疲労感に。
              育毛ヘッドスパを中心に、ヘアカラーヘッドスパ、
              リラクゼーションヘッドスパまで、
              お悩みに合わせて丁寧にご提案します。
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={COUBIC_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-w-[220px] items-center justify-center rounded-full border border-[#d6b36a] bg-[#d6b36a] px-6 py-3 text-sm font-medium tracking-[0.12em] text-black transition hover:bg-transparent hover:text-[#d6b36a] sm:px-8"
              >
                空き状況を確認する
              </a>

              <a
                href="#menu"
                className="inline-flex min-w-[220px] items-center justify-center rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm tracking-[0.12em] text-white transition hover:border-[#d6b36a] hover:text-[#d6b36a] sm:px-8"
              >
                メニューを見る
              </a>

              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-w-[220px] items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm tracking-[0.12em] text-white/85 transition hover:border-[#d6b36a] hover:text-[#d6b36a] sm:px-8"
              >
                LINEで相談する
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.25}>
            <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-4 backdrop-blur-sm">
                <p className="text-[10px] tracking-[0.24em] text-[#d6b36a]">
                  SCALP CARE
                </p>
                <p className="mt-2 text-xs leading-6 text-white/80">
                  抜け毛・薄毛・
                  <br />
                  ボリューム不足に
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-4 backdrop-blur-sm">
                <p className="text-[10px] tracking-[0.24em] text-[#d6b36a]">
                  COLOR CARE
                </p>
                <p className="mt-2 text-xs leading-6 text-white/80">
                  白髪染め・頭皮負担・
                  <br />
                  ダメージが気になる方へ
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-4 backdrop-blur-sm">
                <p className="text-[10px] tracking-[0.24em] text-[#d6b36a]">
                  RELAXATION
                </p>
                <p className="mt-2 text-xs leading-6 text-white/80">
                  深い癒しと休息を
                  <br />
                  求める方へ
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="mt-8 text-xs leading-6 text-white/55">
              福岡市西区の完全個室ヘッドスパ専門店。
              上質な空間で、髪と頭皮を丁寧に整えます。
            </p>
          </FadeIn>

          <FadeIn delay={0.35}>
            <div className="mt-10 flex justify-center lg:justify-start">
              <a
                href="#menu"
                className="text-xs tracking-[0.18em] text-white/55 transition hover:text-[#d6b36a]"
              >
                SCROLL TO MENU ↓
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
