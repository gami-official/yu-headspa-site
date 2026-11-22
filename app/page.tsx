
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { BeforeAfterSection } from "@/components/before-after-section"
import { VoiceSection } from "@/components/voice-section"
import { MenuSection } from "@/components/menu-section"
import { ReservationSection } from "@/components/reservation-section"
import { Essences } from "@/components/essences"
import { Evidence } from "@/components/evidence"
import { Faq } from "@/components/faq"
import { AccessMap } from "@/components/access-map"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <main>
      <Header />

      {/* ファーストビュー */}
      <Hero />

      {/* 主力メニュー：育毛・カラー */}
      <MenuSection />

      {/* 選ばれる10の理由 */}
      <Essences />

      {/* お客様の口コミ */}
      <VoiceSection />

      {/* 施術実績 */}
      <Evidence />

      {/* ギフト案内・予約カレンダー */}
      <ReservationSection />

      {/* 既存のビフォーアフター */}
      <BeforeAfterSection />

      {/* よくあるご質問 */}
      <Faq />

      {/* アクセス */}
      <AccessMap />

      {/* フッター */}
      <SiteFooter />
    </main>
  )
}
