import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { GiftSection } from "@/components/gift-section"
import { ScalpCareSection } from "@/components/scalp-care-section"
import { ColorValueSection } from "@/components/color-value-section"
import { MenuSection } from "@/components/menu-section"
import { Evidence } from "@/components/evidence"
import { About } from "@/components/about"
import { Faq } from "@/components/faq"
import { AccessMap } from "@/components/access-map"
import { CategoryLinks } from "@/components/category-links"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />

      {/* ▼売上導線（最重要ゾーン） */}
      <GiftSection />
      <ScalpCareSection />
      <ColorValueSection />

      {/* ▼比較・検討ゾーン */}
      <MenuSection />
      <Evidence />

      {/* ▼信頼ゾーン */}
      <About />
      <Faq />

      {/* ▼来店導線 */}
      <AccessMap />
      <CategoryLinks />
      <SiteFooter />
    </main>
  )
}
