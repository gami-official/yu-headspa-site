"use client"

import { FadeIn } from "@/components/fade-in"

const COUBIC_URL = "https://coubic.com/yuheadspa/services"
const LINE_URL = "https://lin.ee/7hso3k1"

export function Hero() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-black text-white">
        {/* 背景動画 */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <video
            src="/videos/hero.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="h-[108%] w-[108%] object-cover scale-95"
          />
          <div className="absolute inset-0 bg-black/65" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/40 to-black/85" />
        </div>

        {/* メイン */}
        <div className="relative mx-auto flex min-h-[700px] max-w-5xl flex-col items-center justify-center px-5 py-20 text-center sm:min-h-[760px] sm:px-6 lg:min-h-screen lg:px-10">
          <div className="w-full max-w-3xl">
            <FadeIn>
              <p className="text-[11px] tracking-[0.45em] text-[#d6b36a] sm:text-xs">
                〜贅沢を日常に〜
              </p>
            </FadeIn>

            <FadeIn delay={0.05}>
              <p className="mt-3 text-[10px] tracking-[0.3em] text-white/60 sm:text-[11px]">
                完全個室｜完全予約制｜1日3名限定
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="mt-5 text-[clamp(1.9rem,7vw,3.6rem)] font-medium leading-[1.45] tracking-[0.12em] text-white">
                頭皮から整え、
                <br />
                髪も心も満たされる
                <br />
                ヘッドスパ専門店
              </h1>
            </FadeIn>

            <FadeIn delay={0.15}>
              <p className="mt-5 mx-auto max-w-xl text-sm leading-7 text-white/80 sm:text-base sm:leading-8">
                抜け毛・薄毛・白髪・頭皮の違和感・疲労感に。
                育毛・カラー・リラクゼーションまで、
                お悩みに合わせて丁寧にご提案します。
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="mt-8 mx-auto flex w-full max-w-md flex-col gap-3">
                <a
                  href={COUBIC_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full rounded-full bg-[#d6b36a] px-6 py-3.5 text-sm font-medium tracking-[0.08em] text-black transition hover:opacity-90"
                >
                  空き状況を見る
                </a>

                <a
                  href="#menu"
                  className="w-full rounded-full border border-white/30 bg-white/5 px-6 py-3.5 text-sm tracking-[0.08em] text-white transition hover:border-[#d6b36a] hover:text-[#d6b36a]"
                >
                  メニューを見る
                </a>

                <a
                  href={LINE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full rounded-full border border-white/30 bg-white/5 px-6 py-3.5 text-sm tracking-[0.08em] text-white/85 transition hover:border-[#d6b36a] hover:text-[#d6b36a]"
                >
                  LINEで相談する
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.28}>
              <div className="mt-10 flex justify-center">
                <a
                  href="#hero-issues"
                  className="text-xs tracking-[0.2em] text-white/50 transition hover:text-[#d6b36a]"
                >
                  SCROLL ↓
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 悩み訴求ブロック */}
      <section
        id="hero-issues"
        className="bg-background px-5 py-14 sm:px-6 sm:py-16 lg:px-10"
      >
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <div className="text-center">
              <p className="text-[11px] tracking-[0.35em] text-gold/70 sm:text-xs">
                FOR YOUR CONCERNS
              </p>
              <h2 className="mt-3 text-xl leading-[1.7] tracking-[0.12em] text-foreground sm:text-2xl">
                こんなお悩みはありませんか？
              </h2>
              <p className="mt-4 mx-auto max-w-2xl text-sm leading-7 text-muted-foreground">
                頭皮や髪の変化、慢性的な疲れに寄り添いながら、
                今の状態に合わせたケアをご提案します。
              </p>
            </div>
          </FadeIn>

          <div className="mt-10 grid gap-4 md:grid-cols-3 lg:gap-6">
            <FadeIn delay={0.05}>
              <div className="h-full rounded-2xl border border-gold/20 bg-card px-5 py-6 text-center shadow-sm">
                <p className="text-[10px] tracking-[0.26em] text-gold/70">
                  SCALP CARE
                </p>
                <h3 className="mt-3 text-base font-medium tracking-[0.08em] text-foreground">
                  抜け毛・薄毛・
                  <br />
                  分け目が気になる
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  ボリューム不足やハリコシ低下など、
                  頭皮環境から整えたい方へ。
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="h-full rounded-2xl border border-gold/20 bg-card px-5 py-6 text-center shadow-sm">
                <p className="text-[10px] tracking-[0.26em] text-gold/70">
                  COLOR CARE
                </p>
                <h3 className="mt-3 text-base font-medium tracking-[0.08em] text-foreground">
                  白髪染めを続けながら
                  <br />
                  頭皮も守りたい
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  頭皮負担やダメージに配慮しながら、
                  美しい髪色も大切にしたい方へ。
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="h-full rounded-2xl border border-gold/20 bg-card px-5 py-6 text-center shadow-sm">
                <p className="text-[10px] tracking-[0.26em] text-gold/70">
                  RELAXATION
                </p>
                <h3 className="mt-3 text-base font-medium tracking-[0.08em] text-foreground">
                  頭の重だるさや
                  <br />
                  疲れを癒したい
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  眼精疲労や睡眠の質の低下、
                  深い休息を求める方へ。
                </p>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.2}>
            <div className="mt-8 text-center">
              <a
                href="#menu"
                className="inline-flex items-center justify-center rounded-full border border-gold/30 px-6 py-3 text-sm tracking-[0.08em] text-foreground transition hover:border-gold hover:text-gold"
              >
                お悩みに合うメニューを見る
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
