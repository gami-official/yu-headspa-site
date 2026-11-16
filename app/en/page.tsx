
import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: { absolute: "Luxury Private Head Spa in Fukuoka | Head Spa Yu" },
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
    images: [{ url: "/images/04-headspa-treatment.webp", alt: "Head Spa Yu Fukuoka Main Salon" }],
  },
  robots: { index: true, follow: true },
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
    image: "/images/menu-scalp-care.webp",
    imagePosition: "center",
    courses: [
      {
        name: "Light",
        detail: "Medium concentration",
        price: "¥18,000",
      },
      {
        name: "Standard",
        detail: "High concentration",
        price: "¥21,000",
      },
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
    image: "/images/menu-hair-color.webp",
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
    image: "/images/menu-relaxation.webp",
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

const essences = [
  {
    number: "01",
    label: "PRIVATE SPACE",
    title: "The Ultimate Luxury of a Completely Private Room",
    description: "No curious glances or surrounding conversations. From the moment the door closes, enjoy a special experience reserved entirely for you.",
    image: "/images/01-private-room.webp",
  },
  {
    number: "02",
    label: "24/7 ONLINE RESERVATION",
    title: "Effortless Booking, 24 Hours a Day, 365 Days a Year",
    description: "With treatments available by appointment only, your time is valued from the very beginning. Check availability and complete your booking online whenever it suits you.",
    image: "/images/02-art-interior.webp",
  },
  {
    number: "03",
    label: "TWO PRIVATE PARKING SPACES",
    title: "Two Parking Spaces for a Stress-Free Arrival",
    description: "Two parking spaces are available directly in front of our salon. The convenience of arriving comfortably by car is part of our thoughtful hospitality.",
    image: "/images/03-parking.webp",
    imagePosition: "center 58%",
  },
  {
    number: "04",
    label: "15+ YEARS OF EXPERTISE",
    title: "Over 15 Years of Experience, Reflected in Every Touch",
    description: "Years of dedicated experience shape our precise pressure and refined techniques. Each treatment is tailored to the individual, with a level of care that cannot be captured by a manual alone.",
    image: "/images/04-headspa-treatment.webp",
  },
  {
    number: "05",
    label: "WET HEAD SPA",
    title: "An Authentic Wet Head Spa Beyond Dry Treatments",
    description: "Water, steam, cleansing, conditioning, and expert hands come together in one complete experience. Discover the distinctive pleasure of a true wet head spa that cares directly for your scalp.",
    image: "/images/05-scalp-care.webp",
  },
  {
    number: "06",
    label: "TRUSTED BY VIPS & PROFESSIONALS",
    title: "Scalp Care Chosen by Celebrities and Medical Professionals",
    description: "Our specialized care is appreciated by clients who value beauty and well-being, including celebrities and medical professionals. We welcome those who seek quality and care about their scalp and future hair health.",
    image: "/images/06-consultation-space.webp",
  },
  {
    number: "07",
    label: "PREMIUM HAIR COLOR & SPA",
    title: "Beautiful Hair Color and Thoughtful Scalp Care",
    description: "We pursue beautiful color results while taking care to be considerate of the scalp. Enjoy a carefully designed experience combining professional hair coloring with a soothing head spa.",
    image: "/images/07-glossy-hair.webp",
    imagePosition: "center 45%",
  },
  {
    number: "08",
    label: "ONLY THREE GUESTS A DAY",
    title: "Just Three Guests a Day, with Quality Above Quantity",
    description: "We limit our appointments so we can give each guest our full attention. Leave the rush of everyday life behind and enjoy an unhurried, luxurious moment.",
    image: "/images/08-relaxation-bed.webp",
  },
  {
    number: "09",
    label: "FUTURE-FOCUSED SCALP CARE",
    title: "Care That Looks Beyond Today to Your Hair’s Future",
    description: "We assess your scalp condition and recommend care suited to your individual needs. Our goal is to support a healthy scalp environment, the foundation of beautiful hair.",
    image: "/images/09-counseling.webp",
  },
  {
    number: "10",
    label: "A FIVE-SENSE EXPERIENCE",
    title: "An Extraordinary Experience for All Five Senses",
    description: "From lighting, sound, and fragrance to warmth and the comfort of every touch, each detail is thoughtfully considered to create a truly refined spa experience.",
    image: "/images/10-floral-lighting.webp",
  },
]

const resultImages = Array.from({ length: 18 }, (_, index) => ({
  src: `/images/evidence-${String(index + 1).padStart(2, "0")}.webp`,
  alt: `Scalp care client example ${index + 1}`,
}))

export default function EnglishHomePage() {
  return (
    <main className="min-h-screen bg-[#090909] font-serif text-[#f4eee5]">
      {/* English header */}
      <header className="sticky top-0 z-50 border-b border-[#c8a66a]/20 bg-[#090909]/95 backdrop-blur-xl">
        <div className="mx-auto flex min-h-[72px] max-w-6xl items-center justify-between gap-2 px-3 sm:gap-4 sm:px-8">
          <Link href="/en/" className="min-w-0 shrink">
            <span className="block whitespace-nowrap text-[13px] tracking-[0.06em] text-[#d4b675] sm:text-lg sm:tracking-[0.1em]">
              HEAD SPA YU
            </span>
            <span className="block whitespace-nowrap text-[8px] tracking-[0.08em] text-[#b7a994] sm:text-[9px] sm:tracking-[0.17em]">
              FUKUOKA · JAPAN
            </span>
          </Link>

          <nav
            aria-label="Language and reservation"
            className="flex shrink-0 items-center gap-1.5 sm:gap-3"
          >
            <Link
              href="/"
              hrefLang="ja"
              lang="ja"
              aria-label="日本語サイトへ"
              className="inline-flex h-9 min-w-9 items-center justify-center rounded-full border border-[#d4b675]/70 px-2.5 text-[11px] font-medium text-[#d4b675] transition hover:bg-[#d4b675]/15 sm:px-4"
            >
              JP
            </Link>

            <span
              aria-current="page"
              className="inline-flex h-9 min-w-9 items-center justify-center rounded-full bg-[#d4b675]/15 px-2.5 text-[11px] font-semibold text-[#e6c990] ring-1 ring-inset ring-[#d4b675]/30 sm:px-4"
            >
              EN
            </span>

            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 items-center justify-center whitespace-nowrap rounded-full bg-[#d4b675] px-3 text-[11px] font-semibold text-[#17120c] transition hover:bg-[#e6c990] sm:px-7 sm:text-xs"
            >
              <span className="sm:hidden">Book ↗</span>
              <span className="hidden sm:inline">Book Now ↗</span>
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative flex min-h-[650px] items-center justify-center overflow-hidden px-5 py-24 text-center sm:min-h-[740px]">
        {/* Same background video as the Japanese Fukuoka homepage. */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
        />
        <video
          src="/videos/hero.mp4"
          poster="/images/hero-bg.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full scale-[1.08] object-cover sm:scale-[1.12] lg:scale-[1.15]"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#090909]" />

        <div className="relative z-10 mx-auto max-w-3xl">
          <p className="text-[10px] tracking-[0.35em] text-[#d4b675] sm:text-xs">
            FUKUOKA MAIN SALON
          </p>

          <p className="mt-5 text-sm tracking-[0.18em] text-white/90">
            HEAD SPA YU · FUKUOKA MAIN SALON
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

      {/* Store selection and gift policy */}
      <section aria-label="Important information before booking" className="border-y border-[#c8a66a]/30 bg-[#19150f] px-5 py-10">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-[11px] tracking-[0.25em] text-[#d4b675]">PLEASE CHECK YOUR LOCATION</p>
          <h2 className="mt-4 text-xl font-medium text-[#f4eee5] sm:text-2xl">You are viewing our Fukuoka Main Salon</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-8 text-[#d6cbbd]">
            Our Fukuoka and Osaka salons have different treatments, prices, and booking systems.
            Please confirm your preferred location before making a reservation.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-sm font-medium leading-8 text-[#e6c990]">
            Gift cards and head spa tickets are valid at the Fukuoka Main Salon only.
            They cannot be used at the Osaka salon.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#d4b675] px-6 py-3 text-sm font-medium text-[#17120c] transition hover:bg-[#e6c990]">
              Book Fukuoka (STORES) ↗
            </a>
            <Link href="/en/osaka" className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#d4b675]/70 px-6 py-3 text-sm text-[#e2c58b] transition hover:bg-[#d4b675]/10">
              View Osaka Salon →
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
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

      {/* Why Japanese head spa */}
      <section id="japanese-head-spa" className="border-y border-[#c8a66a]/15 bg-[#11100e] px-5 py-20 sm:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-[11px] tracking-[0.3em] text-[#d4b675]">THE JAPANESE HEAD SPA EXPERIENCE</p>
            <h2 className="mt-5 text-3xl leading-relaxed sm:text-4xl">More Than a Hair Treatment</h2>
            <p className="mx-auto mt-6 max-w-3xl text-sm leading-9 text-[#c4b9ad]">
              In Japan, a head spa is a thoughtful ritual that combines scalp cleansing,
              skilled hands, and quiet relaxation. At Head Spa Yu, we bring these elements
              together in a private setting, creating time to care for your scalp, hair, and peace of mind.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              { number: "01", title: "Personalized Scalp Care", body: "We consider your scalp condition and preferences before recommending an appropriate treatment." },
              { number: "02", title: "The Comfort of a Wet Spa", body: "Enjoy the combination of water, steam, cleansing, and carefully practiced hands." },
              { number: "03", title: "A Moment Entirely Yours", body: "A completely private treatment room and a limited number of guests create a peaceful experience." },
            ].map((item) => (
              <div key={item.number} className="rounded-2xl border border-[#c8a66a]/25 bg-[#1a1713] p-7">
                <p className="text-xs tracking-[0.2em] text-[#d4b675]">{item.number} / EXPERIENCE</p>
                <h3 className="mt-4 text-xl leading-8">{item.title}</h3>
                <p className="mt-4 text-sm leading-8 text-[#b9b0a6]">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ten reasons — matched to the Japanese Fukuoka homepage */}
      <section id="essences" className="overflow-hidden bg-[#171310] px-5 py-20 text-white sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="text-[11px] tracking-[0.25em] text-[#d6b36a]">10 REASONS TO CHOOSE YU</p>
            <h2 className="mt-5 text-2xl leading-relaxed sm:text-4xl">Ten Reasons to Choose Head Spa Yu</h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-white/65 sm:text-base">
              Expert techniques, a thoughtfully designed space, and heartfelt hospitality.
              <br className="hidden sm:block" /> Every detail is dedicated to your special moment.
            </p>
            <div className="mx-auto mt-7 h-px w-16 bg-[#d6b36a]/60" />
          </div>
          <p className="mb-4 text-center text-xs tracking-[0.1em] text-[#d6b36a]">Swipe to explore all 10 reasons →</p>
          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-6 sm:gap-5 lg:gap-6" aria-label="Ten reasons to choose Head Spa Yu">
            {essences.map((item) => (
              <article key={item.number} className="group flex w-[86%] shrink-0 snap-start flex-col overflow-hidden rounded-[20px] border border-[#d6b36a]/25 bg-[#211a15] sm:w-[47%] lg:w-[31%]">
                <div className="relative h-56 overflow-hidden sm:h-60 lg:h-64">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 31vw, (min-width: 640px) 47vw, 86vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ objectPosition: item.imagePosition ?? "center" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#211a15] via-[#211a15]/10 to-transparent" />
                  <div className="absolute bottom-4 left-5 flex items-end gap-3 sm:left-6">
                    <span className="text-5xl leading-none text-[#e5c783] sm:text-6xl">{item.number}</span>
                    <span className="mb-1 text-[9px] tracking-[0.16em] text-white/80">/ 10</span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col px-5 pb-6 pt-5 sm:p-7 sm:pt-5">
                  <p className="min-h-5 break-words text-[10px] leading-5 tracking-[0.09em] text-[#d6b36a]/85 sm:tracking-[0.13em]">{item.label}</p>
                  <h3 className="mt-3 text-lg leading-8 text-white sm:text-xl">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/70">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section id="your-visit" className="bg-[#11100e] px-5 py-20 sm:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-[11px] tracking-[0.3em] text-[#d4b675]">YOUR VISIT</p>
            <h2 className="mt-5 text-3xl sm:text-4xl">What to Expect at Head Spa Yu</h2>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-[#b9b0a6]">
              Visiting a Japanese head spa for the first time? Here is a simple guide
              to the experience. The exact steps vary by treatment.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {[
              { number: "01", title: "Book Your Appointment", body: "Choose your preferred 90-minute treatment and available time through our online booking page." },
              { number: "02", title: "Arrive & Share Your Preferences", body: "We discuss your scalp or hair concerns and the kind of experience you are looking for. Translation apps can help us communicate." },
              { number: "03", title: "Enjoy Your Private Treatment", body: "Relax in your private space while we provide the treatment you selected, with techniques tailored to your needs." },
              { number: "04", title: "Finish Feeling Refreshed", body: "Take a moment to unwind after your session. We can share general care suggestions when appropriate." },
            ].map((step) => (
              <div key={step.number} className="rounded-2xl border border-[#c8a66a]/20 bg-[#191715] p-7 sm:p-8">
                <p className="text-3xl text-[#d4b675]">{step.number}</p>
                <h3 className="mt-4 text-xl leading-8">{step.title}</h3>
                <p className="mt-4 text-sm leading-8 text-[#b9b0a6]">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatments */}
      <section
        id="treatments"
        className="scroll-mt-20 border-y border-[#c8a66a]/15 bg-[#101010] px-5 py-20 sm:py-28"
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
                          <div className="min-w-0">
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

      {/* Scalp care results */}
      <section
        id="results"
        className="scroll-mt-20 border-b border-[#c8a66a]/15 bg-[#0d0d0d] px-5 py-20 sm:py-28"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <p className="text-[11px] tracking-[0.3em] text-[#d4b675]">
              SCALP CARE RESULTS
            </p>

            <h2 className="mt-5 text-3xl leading-relaxed sm:text-4xl">
              Real Client Examples
            </h2>

            <p className="mt-5 text-sm leading-8 text-[#b9b0a6]">
              Explore photographs from individual scalp-care cases at
              Head Spa Yu. Every client has different scalp and hair
              needs.
            </p>
          </div>

          <p className="mb-4 text-center text-xs tracking-[0.1em] text-[#d4b675]">
            Swipe or scroll to explore all 18 examples →
          </p>

          <div
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-6"
            aria-label="Scalp care client photographs"
          >
            {resultImages.map((result, index) => (
              <div
                key={result.src}
                className="w-[min(82vw,390px)] shrink-0 snap-center overflow-hidden rounded-2xl border border-[#c8a66a]/25 bg-[#151515]"
              >
                <div className="relative aspect-[4/5] bg-black">
                  <Image
                    src={result.src}
                    alt={result.alt}
                    fill
                    sizes="(max-width: 640px) 82vw, 390px"
                    className="object-contain"
                  />
                </div>

                <div className="border-t border-[#c8a66a]/20 px-5 py-4">
                  <p className="text-xs tracking-[0.2em] text-[#d4b675]">
                    CASE {String(index + 1).padStart(2, "0")}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-7 max-w-2xl text-center text-xs leading-7 text-[#a79b8e]">
            These photographs show individual examples only. Results
            vary from person to person and similar changes are not
            guaranteed.
            <br />
            Treatment details and time periods may differ between cases.
          </p>

          <div className="mt-10 text-center">
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#d4b675] px-8 py-3 text-sm font-medium text-[#17120c] transition hover:bg-[#e6c990]"
            >
              Explore Scalp Care Reservations ↗
            </a>
          </div>
        </div>
      </section>

      {/* International guest guidance */}
      <section id="international-guests" className="border-y border-[#c8a66a]/20 bg-[#1b1610] px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-[11px] tracking-[0.3em] text-[#d4b675]">WELCOME, INTERNATIONAL GUESTS</p>
          <h2 className="mt-5 text-3xl leading-relaxed sm:text-4xl">Enjoy Your Head Spa in Fukuoka</h2>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-9 text-[#e1d6c8]">
            Guests from around the world are welcome. Our team primarily communicates in Japanese,
            but we use translation apps to help with consultations and questions.
            Fluent English conversation is not guaranteed.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-8 text-[#c4b9ad]">
            You can view the online reservation system in English by selecting the globe icon
            on the booking page. Please check that you are booking our Fukuoka Main Salon.
          </p>
          <a href={bookingUrl} target="_blank" rel="noopener noreferrer"
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-[#d4b675] px-8 py-3 text-sm font-medium text-[#17120c] transition hover:bg-[#e6c990]">
            Check Available Appointments ↗
          </a>
        </div>
      </section>

      {/* Location */}
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

      {/* International guest FAQs */}
      <section id="faq" className="border-t border-[#c8a66a]/15 bg-[#101010] px-5 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-[11px] tracking-[0.3em] text-[#d4b675]">FREQUENTLY ASKED QUESTIONS</p>
            <h2 className="mt-5 text-3xl sm:text-4xl">Good to Know Before You Visit</h2>
          </div>
          <div className="mt-10 space-y-4">
            {[
              { q: "Can I visit if I do not speak Japanese?", a: "Yes. We welcome international guests and use translation apps to support communication. Our staff may not be able to converse fluently in English." },
              { q: "How do I book in English?", a: "Open the reservation link and select the globe icon to switch the booking interface to English. Some treatment names or available slots may still be shown in Japanese." },
              { q: "Is the treatment room private?", a: "Yes. Our Fukuoka salon offers a completely private treatment space and welcomes a limited number of guests each day." },
              { q: "How long is an appointment?", a: "The Fukuoka treatments listed on this page are 90 minutes. Please review the selected service details when booking." },
              { q: "Is parking available?", a: "Yes. Two parking spaces are available in front of the Fukuoka salon." },
              { q: "Can I use a gift ticket at the Osaka salon?", a: "No. Gift cards and head spa tickets are valid at our Fukuoka Main Salon only." },
              { q: "Will scalp care guarantee hair growth?", a: "No. Individual scalp and hair conditions vary, and specific results cannot be guaranteed." },
            ].map((item) => (
              <details key={item.q} className="group rounded-2xl border border-[#c8a66a]/25 bg-[#191919] px-5 py-5 sm:px-7">
                <summary className="cursor-pointer list-none pr-2 text-base leading-7 text-[#f4eee5] marker:hidden">
                  <span className="flex items-start justify-between gap-4">
                    <span>{item.q}</span><span aria-hidden="true" className="shrink-0 text-xl text-[#d4b675] group-open:rotate-45">+</span>
                  </span>
                </summary>
                <p className="mt-4 border-t border-[#c8a66a]/20 pt-4 text-sm leading-8 text-[#b9b0a6]">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Reservations */}
      <section className="border-t border-[#c8a66a]/20 bg-[#15120e] px-5 py-20 text-center sm:py-24">
        <p className="text-[11px] tracking-[0.3em] text-[#d4b675]">
          RESERVATIONS
        </p>

        <h2 className="mt-6 text-3xl sm:text-4xl">
          Your Escape Awaits
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-sm leading-8 text-[#c4b9ad]">
          You are booking the Fukuoka Main Salon through STORES.
          Please confirm the salon location, treatment, and price before completing your reservation.
          Gift cards and head spa tickets are valid only at the Fukuoka Main Salon.
        </p>

        <a
          href={bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mx-auto mt-9 flex min-h-14 max-w-sm items-center justify-center rounded-full bg-[#d4b675] px-8 text-sm font-medium text-[#17120c] transition hover:bg-[#e6c990]"
        >
          Book Your Head Spa ↗
        </a>

        <div className="mx-auto mt-7 max-w-lg rounded-2xl border border-[#d4b675]/35 bg-[#211c16] px-5 py-6 text-left sm:px-7">
          <div className="flex items-center gap-3">
            <span aria-hidden="true" className="text-xl">
              🌐
            </span>
            <h3 className="text-base font-medium text-[#d4b675]">
              Booking in English
            </h3>
          </div>

          <p className="mt-3 text-sm leading-8 text-[#f1e8da]">
            On the booking page, click the globe icon (🌐) at the top
            and select &quot;English&quot; to view the reservation
            system in English.
          </p>

          <p className="mt-3 text-xs leading-7 text-[#b9b0a6]">
            Some treatment names and time slots may still appear in
            Japanese.
          </p>
        </div>

        <p className="mt-5 text-xs leading-7 text-[#a79b8e]">
          The booking page is provided by our reservation partner.
        </p>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#c8a66a]/15 px-5 py-10 text-center">
        <p className="text-lg tracking-[0.12em] text-[#d4b675]">
          HEAD SPA YU
        </p>

        <p className="mt-3 text-xs text-[#a79b8e]">
          Fukuoka, Japan · Private Head Spa
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Link href="/en/osaka" className="rounded-full border border-[#d4b675]/50 px-5 py-2.5 text-xs text-[#d4b675] transition hover:bg-[#d4b675]/10">
            Osaka Salon
          </Link>
          <Link
            href="/"
            hrefLang="ja"
            lang="ja"
            className="rounded-full border border-[#d4b675]/50 px-5 py-2.5 text-xs text-[#d4b675] transition hover:bg-[#d4b675]/10"
          >
            日本語 / JP
          </Link>

          <span
            aria-current="page"
            className="rounded-full bg-[#d4b675]/15 px-5 py-2.5 text-xs text-[#e6c990] ring-1 ring-inset ring-[#d4b675]/30"
          >
            English / EN
          </span>
        </div>

        <p className="mt-8 text-[10px] text-[#777067]">
          © Head Spa Yu. All rights reserved.
        </p>
      </footer>
    </main>
  )
}
