import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { MenuSection } from "@/components/menu-section"
import { Evidence } from "@/components/evidence"
import { Faq } from "@/components/faq"
import { AccessMap } from "@/components/access-map"

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <MenuSection />
      <Evidence />
      <Faq />
      <AccessMap />
    </main>
  )
}
