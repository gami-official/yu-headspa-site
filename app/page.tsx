import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { MenuSection } from "@/components/menu-section"
import { Evidence } from "@/components/evidence"
import { About } from "@/components/about"
import { Faq } from "@/components/faq"
import { GiftSection } from "@/components/gift-section"
import { AccessMap } from "@/components/access-map"
import { CategoryLinks } from "@/components/category-links"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <GiftSection />
      <MenuSection />
      <Evidence />
      <About />
      <Faq />
      <AccessMap />
      <CategoryLinks />
      <SiteFooter />
    </main>
  )
}
