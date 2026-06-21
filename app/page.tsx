import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { GiftSection } from "@/components/gift-section"
import { ScalpCareSection } from "@/components/scalp-care-section"
import { ColorValueSection } from "@/components/color-value-section"
import { BeforeAfterSection } from "@/components/before-after-section"
import { VoiceSection } from "@/components/voice-section"
import { MenuSection } from "@/components/menu-section"
import { ReservationSection } from "@/components/reservation-section"
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

      <div id="menu">
        <MenuSection />
      </div>

      <ReservationSection />

      <GiftSection />
      <ScalpCareSection />
      <ColorValueSection />
      <BeforeAfterSection />
      <VoiceSection />

      <Evidence />
      <About />
      <Faq />

      <AccessMap />
      <CategoryLinks />
      <SiteFooter />
    </main>
  )
}
