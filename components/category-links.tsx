"use client"

import { FadeIn } from "@/components/fade-in"

const COUBIC_URL = "https://coubic.com/yuheadspa/services"
const LINE_URL = "https://lin.ee/7hso3k1"
const FRANCHISE_URL = "https://www.gamigami.net/headspa-franchise"

const sectionLinks: { label: string; sectionId: string; description: string }[] = [
  {
    label: "育毛ヘッドスパ",
    sectionId: "ikumou",
    description: "抜け毛・薄毛・分け目・ボリューム不足が気になる方へ",
  },
  {
    label: "ヘアカラーヘッドスパ",
    sectionId: "color",
    description: "白髪染め・ダメージ・頭皮負担が気になる方へ",
  },
  {
    label: "当店について",
    sectionId: "about",
    description: "完全個室・1日3名限定・上質な施術空間について",
  },
  {
    label: "アクセス",
    sectionId: "access",
    description: "所在地・駐車場・ご来店方法はこちら",
  },
  {
    label: "よくある質問",
    sectionId: "faq",
    description: "初めての方から多いご質問をまとめています",
  },
]

function scrollToSection(sectionId: string) {
  const el = document.getElementById(sectionId)
  if (el) {
    window.history.pushState(null, "", `#${sectionId}`)
    el.scrollIntoView({ behavior: "smooth" })
  }
}

export function CategoryLinks() {
  return (
    <section id="category" className="bg-secondary py-16 lg:py-24">
      <div className="mx-auto max-w-4xl px-5 lg:px-10">
        <FadeIn>
          <div className="mb-12 flex flex-col items-center text-center">
            <p className="mb-3 text-[11px] tracking-[0.45em] text-gold/70">
              GUIDE
            </p>
            <h2 className="text-xl tracking-[0.18em] text-foreground sm:text-2xl">
              お悩み・目的から選ぶ
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">
              育毛ヘッドスパ、ヘアカラーヘッドスパ、ご予約、LINE相談まで。
              気になる項目からそのままお進みください。
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-3 md:grid-cols-2">
          {sectionLinks.map((item, index) => (
            <FadeIn key={item.label} delay={index * 0.05}>
              <a
                href={`#${item.sectionId}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.sectionId)
                }}
                className="group flex min-h-[96px] flex-col justify-between rounded-2xl border border-border/40 bg-card px-5 py-5 transition-all duration-500 hover:border-gold/40 hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="text-sm tracking-[0.12em] text-foreground/85 transition-colors duration-500 group-hover:text-gold">
                    {item.label}
                  </span>
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-foreground/30 transition-all duration-500 group-hover:translate-x-1 group-hover:text-gold"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>

                <p className="mt-3 text-xs leading-6 text-muted-foreground">
                  {item.description}
                </p>
              </a>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <div className="mt-10 rounded-2xl border border-gold/20 bg-card px-6 py-8 text-center lg:px-10">
            <p className="text-[10px] tracking-[0.35em] text-gold/70">
              RESERVE & CONTACT
            </p>
            <h3 className="mt-3 text-lg tracking-[0.15em] text-foreground sm:text-xl">
              ご予約・ご相談はこちら
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">
              育毛ヘッドスパとヘアカラーヘッドスパのどちらが合うか迷う方も、
              まずはお気軽にご相談ください。
            </p>

            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={COUBIC_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-w-[220px] items-center justify-center rounded-full border border-gold bg-gold px-6 py-3 text-sm tracking-[0.12em] text-background transition hover:opacity-90"
              >
                予約する
              </a>

              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-w-[220px] items-center justify-center rounded-full border border-foreground/20 px-6 py-3 text-sm tracking-[0.12em] text-foreground transition hover:border-gold/50 hover:text-gold"
              >
                LINEで相談する
              </a>
            </div>

            <div className="mt-6">
              <a
                href={FRANCHISE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-foreground/40 underline transition-colors hover:text-gold"
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
