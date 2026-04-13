"use client"

import Image from "next/image"
import { FadeIn } from "@/components/fade-in"

const COUBIC_URL = "https://coubic.com/yuheadspa/services"
const LINE_URL = "https://lin.ee/7hso3k1"
const FRANCHISE_URL = "https://www.gamigami.net/headspa-franchise"

export function About() {
  return (
    <section id="about" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <FadeIn>
          <div className="mb-4 flex justify-center">
            <div className="relative h-24 w-24 overflow-hidden rounded-full border border-gold/30 lg:h-32 lg:w-32">
              <Image
                src="/images/about-portrait.png"
                alt="ヘッドスパ専門店ゆう"
                fill
                className="object-contain"
                sizes="128px"
              />
            </div>
          </div>
        </FadeIn>

        {/* 👇ここ変更 */}
        <FadeIn>
          <div className="mb-10 flex flex-col items-center text-center">
            <p className="mb-3 text-[11px] tracking-[0.45em] text-gold/70">
              ABOUT
            </p>
            <h2 className="text-xl tracking-[0.18em] text-foreground sm:text-2xl">
              福岡市で希少な本格育毛ヘッドスパ
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">
              抜け毛・薄毛・分け目・ボリューム不足にお悩みの方へ。
              頭皮環境から整えることで、髪本来の美しさを引き出します。
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
            <div>
              <div className="relative mx-auto aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border/30">
                <Image
                  src="/images/about-interior.png"
                  alt="当店の施術ルーム"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="mx-auto mt-6 w-full overflow-hidden rounded-2xl border border-border/30">
                <video
                  src="/videos/about.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full object-cover"
                />
              </div>
            </div>

            <div className="text-center lg:text-left">
              <p className="text-sm leading-8 tracking-[0.05em] text-foreground/75 lg:text-[15px]">
                福岡市西区豊浜の完全個室ヘッドスパ専門店。
                ヘッドスパ歴15年以上の技術で、育毛・頭皮改善・ヘアカラーヘッドスパまで、
                お悩みに合わせて丁寧にご提案いたします。
              </p>

              <p className="mt-5 text-sm leading-8 tracking-[0.05em] text-foreground/75 lg:text-[15px]">
                1日3名様限定・完全予約制だからこそ、
                流れ作業ではなく、お一人おひとりの状態に向き合い、
                頭皮環境から整える本格的なケアをご提供します。
              </p>

              {/* 👇希少性ブロック（追加） */}
              <div className="mt-6 rounded-2xl border border-gold/20 bg-card px-5 py-5">
                <p className="text-[10px] tracking-[0.3em] text-gold/70">
                  SPECIAL VALUE
                </p>
                <p className="mt-3 text-sm leading-7 text-foreground/80">
                  完全個室 × 1日3名限定 × 本格育毛ケア。
                  福岡市でも希少な、頭皮環境から整えるヘッドスパです。
                </p>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-gold/20 bg-card px-5 py-5">
                  <p className="text-[10px] tracking-[0.25em] text-gold/70">
                    SCALP CARE
                  </p>
                  <h3 className="mt-2 text-sm tracking-[0.12em] text-foreground">
                    育毛ヘッドスパ
                  </h3>
                  <p className="mt-2 text-xs leading-6 text-muted-foreground">
                    抜け毛・薄毛・分け目・ボリューム不足など、
                    頭皮環境から整えたい方へ。
                  </p>
                </div>

                <div className="rounded-2xl border border-gold/20 bg-card px-5 py-5">
                  <p className="text-[10px] tracking-[0.25em] text-gold/70">
                    HAIR COLOR
                  </p>
                  <h3 className="mt-2 text-sm tracking-[0.12em] text-foreground">
                    ヘアカラーヘッドスパ
                  </h3>
                  <p className="mt-2 text-xs leading-6 text-muted-foreground">
                    白髪染めと頭皮ケアを同時に。
                    ダメージや頭皮負担が気になる方へ。
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-[11px] tracking-[0.12em] text-foreground/60 lg:justify-start">
                <span className="rounded-full border border-border/30 px-4 py-2">
                  完全個室
                </span>
                <span className="rounded-full border border-border/30 px-4 py-2">
                  1日3名限定
                </span>
                <span className="rounded-full border border-border/30 px-4 py-2">
                  駐車場あり
                </span>
                <span className="rounded-full border border-border/30 px-4 py-2">
                  完全予約制
                </span>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* CTAはそのまま活かす */}
        <FadeIn delay={0.2}>
          <div
            id="reservation"
            className="mt-14 rounded-2xl border border-gold/20 bg-card px-6 py-8 text-center lg:px-10"
          >
            <p className="text-[10px] tracking-[0.35em] text-gold/70">
              RESERVATION
            </p>
            <h3 className="mt-3 text-lg tracking-[0.15em] text-foreground sm:text-xl">
              初めての方も安心してご予約ください
            </h3>

            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={COUBIC_URL}
                target="_blank"
                className="inline-flex min-w-[220px] items-center justify-center rounded-full border border-gold bg-gold px-6 py-3 text-sm tracking-[0.12em] text-background"
              >
                予約する
              </a>

              <a
                href={LINE_URL}
                target="_blank"
                className="inline-flex min-w-[220px] items-center justify-center rounded-full border border-foreground/20 px-6 py-3 text-sm tracking-[0.12em] text-foreground"
              >
                LINEで相談する
              </a>
            </div>

            <div className="mt-6">
              <a
                href={FRANCHISE_URL}
                target="_blank"
                className="text-[11px] text-foreground/40 underline"
              >
                この技術を学びたい方はこちら
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
