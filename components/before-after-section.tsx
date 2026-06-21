"use client"

import { FadeIn } from "@/components/fade-in"

const examples = [
  {
    title: "頭皮ケア",
    after: "頭皮環境を整える",
  },
  {
    title: "美髪ケア",
    after: "艶のある髪へ",
  },
  {
    title: "リラックス",
    after: "すっきり軽い感覚へ",
  },
]

export function BeforeAfterSection() {
  return (
    <section id="before-after" className="bg-background py-14 lg:py-18">
      <div className="mx-auto max-w-5xl px-5 lg:px-10">
        <FadeIn>
          <div className="text-center">
            <p className="text-[10px] tracking-[0.28em] text-gold/70">
              BENEFITS
            </p>

            <h2 className="mt-4 text-[clamp(1.45rem,5vw,2.2rem)] leading-[1.45] tracking-[0.03em] text-foreground">
              こんな方に選ばれています
            </h2>
          </div>
        </FadeIn>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {examples.map((item, index) => (
            <FadeIn key={item.title} delay={0.05 + index * 0.05}>
              <div className="rounded-2xl border border-gold/20 bg-card p-6 text-center shadow-sm">
                <p className="text-[10px] tracking-[0.22em] text-gold/70">
                  POINT {index + 1}
                </p>

                <h3 className="mt-4 text-base font-medium text-foreground">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm text-muted-foreground">
                  {item.after}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
