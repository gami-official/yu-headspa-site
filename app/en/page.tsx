
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Luxury Private Head Spa in Fukuoka | Head Spa Yu",
  description:
    "Experience a luxurious private head spa in Fukuoka, Japan. Scalp care, hair color head spa, and relaxation treatments. Private rooms, 90-minute sessions, and online reservations.",
  alternates: {
    canonical: "https://www.yuheadspa.net/en/",
    languages: {
      ja: "https://www.yuheadspa.net/",
      en: "https://www.yuheadspa.net/en/",
    },
  },
  openGraph: {
    title: "Luxury Private Head Spa in Fukuoka | Head Spa Yu",
    description:
      "A peaceful, private head spa experience in Fukuoka. Explore our treatments and book your 90-minute escape.",
    url: "https://www.yuheadspa.net/en/",
    locale: "en_US",
  },
}

const bookingUrl =
  "https://headspayu.stores.jp/reserve/yuheadspa/services#pageContent"

const treatments = [
  {
    number: "01",
    label: "SCALP CARE",
    title: "Scalp Care Head Spa",
    description:
      "A specialized scalp treatment designed to support a healthy scalp environment. Choose from three levels of care based on your needs.",
    image: "/images/04-headspa-treatment.webp",
    imagePosition: "center",
    courses: [
      { name: "Light", detail: "Medium concentration", price: "¥18,000" },
      { name: "Standard", detail: "High concentration", price: "¥21,000" },
      {
        name: "Premium",
        detail: "Extra-high concentration and increased product usage",
        price: "¥35,000",
      },
    ],
  },
  {
    number: "02",
    label: "HAIR COLOR",
    title: "Hair Color Head Spa",
    description:
      "Enjoy beautiful hair color together with a relaxing wet head spa. Our coloring technique is designed to minimize direct contact with the scalp.",
    image: "/images/07-glossy-hair.webp",
    imagePosition: "center",
    courses: [
      {
        name: "Hair Color Head Spa",
        detail: "Hair color and wet head spa",
        price: "¥21,000",
      },
      {
        name: "Hair Color + Scalp Care",
        detail: "Hair color, head spa, and additional scalp care",
        price: "¥26,000",
      },
    ],
  },
  {
    number: "03",
    label: "RELAXATION",
    title: "Relaxation Head Spa",
    description:
      "Unwind with a luxurious wet head spa featuring aromatic cream, steam, and warm stones. A peaceful moment away from everyday life.",
    image: "/images/08-relaxation-bed.webp",
    imagePosition: "center",
    courses: [
      {
        name: "Relaxation Head Spa",
        detail: "A complete relaxation experience",
        price: "¥16,000",
      },
    ],
  },
]

export default function EnglishHomePage() {
  return (
    <main className="min-h-screen bg-[#090909] font-serif text-[#f4eee5]">
      <header className="sticky top-0 z-50 border-b border-[#c8a66a]/20 bg-[#090909]/95 backdrop-blur-xl">
        <div className="mx-auto flex min-h-[72px] max-w-6xl items-center justify-between gap-3 px-5 sm:px-8">
          <Link href="/en/" className="min-w-0">
            <span className="block text-[15px] tracking-[0.1em] text-[#d4b675] sm:text-lg">
              HEAD SPA YU
            </span>
            <span className="block text-[9px] tracking-[0.17em] text-[#b7a994]">
              FUKUOKA · JAPAN
            </span>
          </Link>

          <div className="flex items-center gap-3 sm:gap-5">
            <Link
              href="/"
              className="text-xs tracking-wider text-[#b7a994] transition hover:text-white"
            >
              JP
            </Link>
            <span className="text-xs text-[#d4b675]">EN</span>
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#d4b675] px-5 py-2.5 text-xs font-semibold text-[#17120c] transition hover:bg-[#e6c990] sm:px-7"
            >
              Book Now ↗
            </a>
          </div>
        </div>
      </header>

      <section className="relative flex min-h-[650px] items-center justify-center overflow-hidden px-5 py-24 text-center sm:min-h-[740px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/04-headspa-treatment.webp')",
          }}
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#090909]" />

        <div className="relative z-10 mx-auto max-w-3xl">
          <p className="text-[10px] tracking-[0.35em] text-[#d4b675] sm:text-xs">
            FUKUOKA PRIVATE HEAD SPA
          </p>

          <h1 className="mt-9 text-[clamp(2.5rem,7vw,5rem)] leading-[1.3] tracking-[0.03em]">
            A Luxurious Escape,
            <br />
            Just for You.
          </h1>

          <p className="mx-auto mt-8 max-w-xl text-sm leading-9 text-[#ddd3c5] sm:text-base">
            Discover the art of Japanese head spa.
            <br />
            A private sanctuary for your scalp, hair, and mind.
          </p>

          <div className="mx-auto mt-9 h-px w-20 bg-[#d4b675]/70" />

          <p className="mt-8 text-xs tracking-[0.08em] text-[#c7b8a5] sm:text-sm">
            Private Treatment Room · By Appointment Only
          </p>

          <div className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row">
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-14 flex-1 items-center justify-center rounded-full bg-[#d4b675] px-8 text-sm font-medium text-[#17120c] transition hover:bg-[#e6c990]"
            >
              Check Availability ↗
            </a>
            <a
              href="#treatments"
              className="flex min-h-14 flex-1 items-center justify-center rounded-full border border-[#d4b675]/70 px-8 text-sm text-[#e2c58b] transition hover:bg-[#d4b675]/10"
            >
              Explore Treatments
            </a>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 text-center sm:py-28">
        <div className="mx-auto max-w-3xl">
          <p className="text-[11px] tracking-[0.3em] text-[#d4b675]">
            WELCOME TO HEAD SPA YU
          </p>
          <h2 className="mt-6 text-2xl leading-relaxed sm:text-4xl">
            Your Moment of Tranquility
            <br />
            in Fukuoka
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-sm leading-9 text-[#b9b0a6]">
            At Head Spa Yu, we believe that caring for your scalp and
            hair should also be a moment of deep relaxation. Enjoy a
            personalized 90-minute treatment in a peaceful private
            space, away from the rush of everyday life.
          </p>
        </div>
      </section>

      <section
        id="treatments"
        className="border-y border-[#c8a66a]/15 bg-[#101010] px-5 py-20 sm:py-28"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="text-[11px] tracking-[0.3em] text-[#d4b675]">
              OUR TREATMENTS
            </p>
            <h2 className="mt-5 text-3xl sm:text-4xl">
              Find Your Perfect Head Spa
            </h2>
            <p className="mt-5 text-sm leading-8 text-[#b9b0a6]">
              All treatments are 90 minutes. Prices include tax.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {treatments.map((treatment) => (
              <article
                key={treatment.number}
                className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#c8a66a]/25 bg-[#171717]"
              >
                <div
                  className="relative h-56 bg-cover"
                  style={{
                    backgroundImage: `url('${treatment.image}')`,
                    backgroundPosition: treatment.imagePosition,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  <div className="absolute bottom-5 left-6">
                    <p className="text-[10px] tracking-[0.2em] text-[#d4b675]">
                      {treatment.label}
                    </p>
                    <h3 className="mt-2 text-xl text-white">
                      {treatment.title}
                    </h3>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="min-h-28 text-sm leading-8 text-[#c4b9ad]">
                    {treatment.description}
                  </p>

                  <div className="mt-5 border-t border-[#c8a66a]/20 pt-5">
                    <p className="mb-5 text-[10px] tracking-[0.2em] text-[#d4b675]">
                      COURSES & PRICES
                    </p>

                    <div className="space-y-5">
                      {treatment.courses.map((course) => (
                        <div
                          key={course.name}
                          className="flex items-start justify-between gap-4"
                        >
                          <div>
                            <p className="text-sm text-[#f4eee5]">
                              {course.name}
                            </p>
                            <p className="mt-1 text-xs leading-6 text-[#a79b8e]">
                              {course.detail}
                            </p>
                          </div>
                          <p className="shrink-0 text-sm text-[#d4b675]">
                            {course.price}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <a
                    href={bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto flex min-h-12 items-center justify-center rounded-full bg-[#d4b675] px-5 py-3 text-sm font-medium text-[#17120c] transition hover:bg-[#e6c990] [margin-top:2rem]"
                  >
                    Check Availability ↗
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-[11px] tracking-[0.3em] text-[#d4b675]">
              VISIT US
            </p>
            <h2 className="mt-5 text-3xl sm:text-4xl">
              Our Fukuoka Location
            </h2>
          </div>

          <div className="mt-12 grid gap-8 rounded-2xl border border-[#c8a66a]/25 bg-[#151515] p-7 sm:grid-cols-2 sm:p-10">
            <div>
              <p className="text-xs tracking-[0.2em] text-[#d4b675]">
                ADDRESS
              </p>
              <p className="mt-4 text-sm leading-8 text-[#e4dbcf]">
                Head Spa Yu — Fukuoka Main Salon
                <br />
                2-20-20-2 Toyohama, Nishi-ku
                <br />
                Fukuoka, Japan 819-0014
              </p>
            </div>

            <div>
              <p className="text-xs tracking-[0.2em] text-[#d4b675]">
                OPENING HOURS
              </p>
              <p className="mt-4 text-sm leading-8 text-[#e4dbcf]">
                9:30 AM – 4:30 PM
                <br />
                Reservation Required
                <br />
                Private Treatment Room
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://www.google.com/maps/search/?api=1&query=2-20-20-2+Toyohama+Nishi-ku+Fukuoka+Japan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#d4b675]/70 px-8 text-sm text-[#d4b675] transition hover:bg-[#d4b675]/10"
            >
              Open in Google Maps ↗
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-[#c8a66a]/20 bg-[#15120e] px-5 py-20 text-center sm:py-24">
        <p className="text-[11px] tracking-[0.3em] text-[#d4b675]">
          RESERVATIONS
        </p>
        <h2 className="mt-6 text-3xl sm:text-4xl">
          Your Escape Awaits
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-sm leading-8 text-[#c4b9ad]">
          Choose your preferred treatment and date through our online
          booking page. Reservations are subject to availability.
        </p>

        <a
          href={bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mx-auto mt-9 flex min-h-14 max-w-sm items-center justify-center rounded-full bg-[#d4b675] px-8 text-sm font-medium text-[#17120c] transition hover:bg-[#e6c990]"
        >
          Book Your Head Spa ↗
        </a>

        <p className="mt-5 text-xs leading-7 text-[#a79b8e]">
          The booking page is provided by our reservation partner.
        </p>
      </section>

      <footer className="border-t border-[#c8a66a]/15 px-5 py-10 text-center">
        <p className="text-lg tracking-[0.12em] text-[#d4b675]">
          HEAD SPA YU
        </p>
        <p className="mt-3 text-xs text-[#a79b8e]">
          Fukuoka, Japan · Private Head Spa
        </p>

        <Link
          href="/"
          className="mt-6 inline-block text-xs text-[#d4b675] underline underline-offset-4"
        >
          日本語サイトに戻る
        </Link>

        <p className="mt-8 text-[10px] text-[#777067]">
          © Head Spa Yu. All rights reserved.
        </p>
      </footer>
    </main>
  )
}
