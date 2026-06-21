import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { BeforeAfterSection } from "@/components/before-after-section"
import { VoiceSection } from "@/components/voice-section"
import { MenuSection } from "@/components/menu-section"
import { ReservationSection } from "@/components/reservation-section"
import { Faq } from "@/components/faq"
import { AccessMap } from "@/components/access-map"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <VoiceSection />

      <div id="menu">
        <MenuSection />
      </div>

      <ReservationSection />
      <BeforeAfterSection />
      <Faq />
      <AccessMap />
      <SiteFooter />
    </main>
  )
}
