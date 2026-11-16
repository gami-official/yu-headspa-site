import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const siteUrl = "https://www.yuheadspa.net";
const bookingUrl = "https://book.squareup.com/appointments/w4hozbb9zwbeg5/location/LFXN7SMC38Q2H/services";

export const metadata: Metadata = {
  title: { absolute: "Private Head Spa in Osaka, Dainichi | Head Spa Yu Osaka" },
  description: "Private, appointment-only head spa in Dainichi, Moriguchi, Osaka. 60-minute sessions from ¥8,000. Scalp care and relaxation. Book the Osaka location through Square.",
  alternates: {
    canonical: `${siteUrl}/en/osaka`,
    languages: { ja: `${siteUrl}/osaka`, en: `${siteUrl}/en/osaka` },
  },
  openGraph: {
    title: "Private Head Spa in Osaka | Head Spa Yu Osaka",
    description: "A private 60-minute head spa experience in Dainichi, Osaka. Relaxation and scalp-care treatments, by appointment only.",
    url: `${siteUrl}/en/osaka`,
    siteName: "Head Spa Yu Osaka",
    locale: "en_US",
    type: "website",
    images: [{ url: `${siteUrl}/images/osaka-logo.png`, alt: "Head Spa Yu Osaka" }],
  },
  twitter: { card: "summary_large_image", title: "Head Spa Yu Osaka", images: [`${siteUrl}/images/osaka-logo.png`] },
};

const scalpCourses = [
  { name: "Scalp Care Light", price: "¥11,000", detail: "An introductory scalp-care treatment for those new to scalp care." },
  { name: "Scalp Care Standard", price: "¥13,000", detail: "More attentive care tailored to the condition of your scalp." },
  { name: "Scalp Care Premium", price: "¥20,000", detail: "Our premium option for more intensive scalp care." },
];

const routeSteps = [
  ["01", "Exit Dainichi Station at the location shown in the photo."],
  ["02", "Continue straight ahead."],
  ["03", "Keep walking straight past the landmark."],
  ["04", "Continue straight along the same road."],
  ["05", "Keep going a little farther."],
  ["06", "Turn left."],
  ["07", "The building housing our salon and warehouse will be on your right."],
  ["08", "Look for the building entrance shown in the photo."],
];

const faqs = [
  { q: "Can I visit without a reservation?", a: "No. All visits are by appointment only. Please book by the day before your visit; same-day bookings are not accepted." },
  { q: "How long is a session?", a: "All courses have a 60-minute appointment slot, including consultation. The hands-on treatment time may be shorter." },
  { q: "What if I don't know which treatment to choose?", a: "Select the 'Decide on Arrival' option when booking. We will reserve a 60-minute slot and help you choose a course at your visit." },
  { q: "Can I cancel my reservation?", a: "You can cancel online up to the day before your visit. For cancellations on the day, please call us." },
  { q: "How do I pay?", a: "Payment is made at the salon. Online prepayment is not available." },
  { q: "Can I use a gift card or head spa ticket?", a: "No. Gift cards and head spa tickets are valid only at our Fukuoka Main Salon and cannot be used at the Osaka location." },
  { q: "Are prices and treatments the same at both locations?", a: "No. Our Osaka and Fukuoka salons offer different menus, prices, and booking systems. Please check the location carefully before booking." },
  { q: "Is parking available?", a: "Yes. Parking is at a separate location. Please check the aerial map and parking photographs in the Access section." },
  { q: "Is there a restroom?", a: "Due to our facilities, please use a restroom before arriving at the salon." },
];

function BookButton({ children = "Book Head Spa Yu Osaka" }: { children?: string }) {
  return <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#777a59] px-8 py-4 text-center text-sm font-medium tracking-wide text-white shadow-sm transition hover:bg-[#5d6245]">{children} ↗</a>;
}
function Heading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return <div className="text-center"><p className="text-xs font-medium tracking-[0.25em] text-[#777a59]">{eyebrow}</p><h2 className="mt-4 text-2xl font-medium tracking-wide text-[#39362f] sm:text-3xl">{title}</h2>{description && <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-[#716c63]">{description}</p>}</div>;
}
function BookingNotice({ dark = false }: { dark?: boolean }) {
  return <div className={`mx-auto max-w-3xl rounded-2xl border p-5 text-left sm:p-7 ${dark ? "border-white/40 bg-white/10 text-white" : "border-[#d9cfb9] bg-white text-[#39362f]"}`}>
    <p className="text-sm font-semibold">Please confirm your salon before booking</p>
    <p className={`mt-2 text-sm leading-7 ${dark ? "text-white/90" : "text-[#716c63]"}`}>You are viewing <strong>Head Spa Yu Osaka</strong>. Our Fukuoka Main Salon has different treatments, prices, and a separate reservation system. <strong>Gift cards and head spa tickets are valid at Fukuoka only and cannot be used in Osaka.</strong></p>
    <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm"><Link href="/en/" className="underline underline-offset-4">Fukuoka Main Salon (English) ↗</Link><Link href="/osaka" className="underline underline-offset-4">大阪店 日本語 ↗</Link></div>
  </div>;
}

export default function OsakaEnglishPage() {
  return <main lang="en" className="min-h-screen overflow-x-hidden bg-[#faf8f3] text-[#39362f]">
    <header className="border-b border-[#ded9ce] bg-[#faf8f3]"><div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-5">
      <Link href="/en/osaka" className="text-sm font-medium tracking-wide text-[#565440]">HEAD SPA YU <span className="text-xs text-[#8c8579]">OSAKA</span></Link>
      <nav aria-label="Location and booking" className="flex flex-wrap items-center gap-3 text-xs"><Link href="/en/" className="underline underline-offset-4">Fukuoka</Link><Link href="/osaka" hrefLang="ja" className="underline underline-offset-4">日本語</Link><a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#777a59] px-4 py-3 text-white">Book Osaka ↗</a></nav>
    </div></header>

    <section className="relative overflow-hidden bg-[#f0ece3] px-5 pb-16 pt-12 text-center sm:pb-24 sm:pt-20"><div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-[#dce0ce]/50 blur-3xl"/><div className="relative mx-auto max-w-4xl">
      <p className="text-xs tracking-[0.25em] text-[#777a59]">QUICK RESET HEAD SPA · OSAKA</p><div className="mx-auto mt-6 w-36 sm:w-48"><Image src="/images/osaka-logo.png" alt="Head Spa Yu Osaka logo" width={500} height={500} priority className="h-auto w-full"/></div>
      <p className="mt-7 text-sm text-[#777a59]">Private Salon · Appointment Only</p><h1 className="mt-5 text-[clamp(2rem,7vw,3.5rem)] font-medium leading-[1.4]">Reset Your Mind<br/>in 60 Minutes.</h1><p className="mx-auto mt-6 max-w-xl text-sm leading-8 text-[#716c63]">Make space for yourself in a busy day. Discover a private head spa experience in Dainichi, Osaka, from relaxation to scalp care.</p>
      <div className="mt-8"><BookButton/></div><p className="mt-4 text-xs leading-7 text-[#8b857a]">60-minute appointment slots · From ¥8,000 (tax included)<br/>Weekdays only · Book by the previous day</p>
      <div className="mt-8"><BookingNotice/></div>
    </div></section>

    <section className="bg-[#393a31] px-5 py-16 text-center text-white sm:py-20"><div className="mx-auto max-w-4xl"><p className="text-xs tracking-[0.3em] text-[#c5c7ad]">ONE HOUR. YOUR RESET.</p><h2 className="mt-5 text-2xl leading-relaxed sm:text-4xl">A Moment to Unwind,<br/>Even on Your Busiest Day.</h2><p className="mt-6 text-sm leading-9 text-[#e2e0d7]">No need to set aside an entire afternoon.<br/>Our Osaka salon offers 60-minute appointment slots in a private setting.</p><div className="mt-9 grid gap-3 sm:grid-cols-3">{[["60 MIN", "All courses: 60-minute slots"],["PRIVATE", "By appointment only"],["SCALP CARE", "Relaxation and scalp care"]].map(([a,b])=><div key={a} className="rounded-xl border border-white/20 px-5 py-6"><p className="text-lg tracking-widest text-[#d8d2aa]">{a}</p><p className="mt-3 text-xs text-[#e2e0d7]">{b}</p></div>)}</div></div></section>

    <section className="px-5 py-20 sm:py-24"><div className="mx-auto max-w-5xl"><Heading eyebrow="OUR CONCEPT" title="Thoughtful Care in 60 Minutes" description="A comfortable experience tailored to your needs, with personal attention from beginning to end."/><div className="mt-12 grid gap-5 md:grid-cols-3">{[["01","Personal Consultation","We listen to your concerns and preferences before recommending care."],["02","Relaxation & Scalp Care","Comforting treatments designed to support a healthy scalp environment."],["03","Private Setting","Enjoy your own quiet moment in our appointment-only salon."]].map(([n,t,d])=><div key={n} className="rounded-2xl border border-[#e4dfd5] bg-white p-8 shadow-sm"><p className="text-sm text-[#92977a]">{n}</p><div className="mt-5 h-px w-12 bg-[#b7b18f]"/><h3 className="mt-6 text-lg font-medium">{t}</h3><p className="mt-4 text-sm leading-8 text-[#777167]">{d}</p></div>)}</div></div></section>

    <section id="menu" className="bg-[#f0ede5] px-5 py-20 sm:py-24"><div className="mx-auto max-w-5xl"><Heading eyebrow="MENU & PRICE" title="Treatments & Prices" description="Choose from relaxation and scalp-care options. Osaka prices and treatments differ from our Fukuoka Main Salon."/><p className="mt-5 text-center text-xs text-[#817c70]">All prices include tax · All appointments are 60-minute slots</p>
      <div className="mt-12 overflow-hidden rounded-2xl border border-[#e1dace] bg-white shadow-sm md:grid md:grid-cols-2"><div className="relative min-h-[280px]"><Image src="/images/osaka-relaxation.jpg" alt="Relaxation head spa treatment" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover"/></div><div className="flex flex-col justify-center p-8 sm:p-12"><p className="text-xs tracking-[0.2em] text-[#858b6a]">QUICK RELAXATION</p><h3 className="mt-4 text-xl">Relaxation Course</h3><p className="mt-5 text-3xl text-[#777a59]">¥8,000 <span className="text-xs text-[#8b857a]">incl. tax</span></p><p className="mt-5 text-sm leading-9 text-[#716c63]">Enjoy a calming head spa and a peaceful break from your busy routine.</p><p className="mt-5 text-xs text-[#8b857a]">60-minute appointment slot</p></div></div>
      <div className="mt-7 overflow-hidden rounded-2xl border border-[#e1dace] bg-white shadow-sm md:grid md:grid-cols-2"><div className="relative min-h-[300px]"><Image src="/images/osaka-scalp.png" alt="Scalp assessment and care" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover"/></div><div className="p-8 sm:p-12"><p className="text-xs tracking-[0.2em] text-[#858b6a]">SCALP & HAIR CARE</p><h3 className="mt-4 text-xl">Scalp Care Treatments</h3><p className="mt-5 text-sm leading-8 text-[#716c63]">Care tailored to your scalp condition and personal concerns.</p><div className="mt-7 divide-y divide-[#e8e3d8] border-t border-[#e8e3d8]">{scalpCourses.map(c=><div key={c.name} className="py-6"><div className="flex flex-wrap items-center justify-between gap-2"><h4 className="text-sm font-medium">{c.name}</h4><p className="text-xl text-[#777a59]">{c.price}</p></div><p className="mt-3 text-xs leading-7 text-[#777167]">{c.detail}</p><p className="mt-2 text-xs text-[#938b7e]">60-minute slot · Tax included</p></div>)}</div></div></div>
      <div className="mt-7 rounded-2xl border border-[#e1dace] bg-white p-8 text-center"><h3 className="text-lg font-medium">Decide on Arrival</h3><p className="mt-4 text-sm leading-8 text-[#716c63]">Not sure which course to choose? Reserve a 60-minute slot and decide during your visit. You will pay the price of the course you select.</p></div><div className="mt-9"><BookingNotice/></div><div className="mt-10 text-center"><BookButton>Book an Osaka Treatment</BookButton></div>
    </div></section>

    <section className="px-5 py-20 sm:py-24"><div className="mx-auto max-w-5xl"><Heading eyebrow="YOUR VISIT" title="What to Expect" description="From consultation to aftercare, we will look after you within your 60-minute appointment slot."/><div className="mt-12 grid gap-4 sm:grid-cols-3">{[["01","Consultation","We discuss your scalp condition and preferences."],["02","Head Spa Treatment","Enjoy your selected relaxation or scalp-care course."],["03","Aftercare Guidance","We review your treatment and provide guidance as needed."]].map(([n,t,d])=><div key={n} className="rounded-2xl bg-[#f0ede5] p-7 text-center"><p className="text-2xl text-[#858b6a]">{n}</p><h3 className="mt-4 text-base font-medium">{t}</h3><p className="mt-4 text-sm leading-8 text-[#716c63]">{d}</p></div>)}</div></div></section>

    <section className="bg-[#f0ede5] px-5 py-20 sm:py-24"><div className="mx-auto max-w-5xl"><Heading eyebrow="THE HEALER — MAYU" title="Meet Your Therapist"/><div className="mt-12 overflow-hidden rounded-2xl bg-white shadow-sm md:grid md:grid-cols-2"><div className="relative aspect-square bg-[#fffdf8]"><Image src="/images/osaka-mayu-healer.jpg" alt="Mayu, therapist at Head Spa Yu Osaka" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-contain"/></div><div className="flex flex-col justify-center p-8 sm:p-12"><p className="text-xs tracking-[0.2em] text-[#858b6a]">HEAD SPA THERAPIST</p><h3 className="mt-5 text-3xl">Mayu</h3><div className="mt-6 h-px w-12 bg-[#b7b18f]"/><p className="mt-7 text-sm leading-9 text-[#716c63]">I value a warm, personal approach and a relaxing experience for every guest.</p><p className="mt-5 text-sm leading-9 text-[#716c63]">Whether you are seeking a moment of calm or trying scalp care for the first time, you are very welcome.</p><div className="mt-8"><BookButton>Book a Session with Mayu</BookButton></div></div></div></div></section>

    <section id="access" className="px-5 py-20 sm:py-24"><div className="mx-auto max-w-5xl"><Heading eyebrow="ACCESS" title="Location & Directions" description="Approximately a 6-minute walk from Dainichi Station on the Osaka Metro Tanimachi Line. Follow our photo guide below."/>
      <div className="mt-12 overflow-hidden rounded-2xl bg-white shadow-sm md:grid md:grid-cols-2"><div className="relative min-h-[280px]"><Image src="/images/osaka-interior.png.jpg" alt="Interior of the private Osaka salon" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover"/></div><div className="flex flex-col justify-center p-8 sm:p-10"><p className="text-xs tracking-[0.2em] text-[#858b6a]">PRIVATE SALON</p><h3 className="mt-4 text-xl">Your Own Quiet Space</h3><p className="mt-5 text-sm leading-8 text-[#716c63]">Our private salon is located inside a building that also houses a warehouse. Enjoy a relaxed, appointment-only experience.</p></div></div>
      <div className="mt-8 overflow-hidden rounded-2xl bg-white shadow-sm md:grid md:grid-cols-2"><div className="relative min-h-[260px]"><Image src="/images/osaka-exterior.png.jpg" alt="Exterior of the Osaka salon building" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover"/></div><div className="flex flex-col justify-center p-8 sm:p-10"><p className="text-xs tracking-[0.2em] text-[#858b6a]">OUR LOCATION</p><h3 className="mt-4 text-xl">Look for This Building</h3><p className="mt-5 text-sm leading-8 text-[#716c63]">1-8-18 Dainichi-cho, Moriguchi, Osaka, Japan. Please arrive at your scheduled appointment time.</p></div></div>
      <div className="mt-16"><h3 className="text-center text-xl font-medium">Photo Directions from Dainichi Station</h3><p className="mt-4 text-center text-sm leading-8 text-[#716c63]">Follow photos 01 through 08 in order.</p><div className="mt-8 grid gap-5 sm:grid-cols-2">{routeSteps.map(([number,description])=><div key={number} className="overflow-hidden rounded-2xl border border-[#e4dfd5] bg-white"><div className="relative aspect-[4/3]"><Image src={`/images/osaka-route-${number}.png.jpg`} alt={`Directions from Dainichi Station, step ${number}`} fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover"/></div><div className="flex gap-4 p-5"><span className="text-xl text-[#858b6a]">{number}</span><p className="text-sm leading-7 text-[#716c63]">{description}</p></div></div>)}</div></div>
      <div className="mt-16"><h3 className="text-center text-xl font-medium">Parking Information</h3><p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-8 text-[#716c63]">Our parking area is separate from the salon. Please check the aerial map and photos below.</p><div className="relative mt-8 aspect-[4/3] overflow-hidden rounded-2xl bg-white sm:aspect-[16/9]"><Image src="/images/osaka-parking-map.png.jpg" alt="Aerial map showing the Osaka salon and parking area" fill sizes="100vw" className="object-contain"/></div><div className="mt-5 grid gap-5 sm:grid-cols-2">{[["/images/osaka-parking-01.png.jpg","Parking area and nearby landmarks"],["/images/osaka-parking-02.png.jpg","Parking entrance and surroundings"]].map(([src,alt])=><div key={src} className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-white"><Image src={src} alt={alt} fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover"/></div>)}</div><p className="mt-5 text-sm leading-8 text-[#716c63]">If you are unsure where to park, please call before arriving.</p></div>
      <div className="mt-12 rounded-2xl bg-[#f0ede5] p-8 sm:p-10"><h3 className="text-lg font-medium">Head Spa Yu — Osaka</h3><div className="mt-6 space-y-3 text-sm leading-8 text-[#716c63]"><p>1-8-18 Dainichi-cho, Moriguchi, Osaka 570-0003, Japan</p><p>About 6 minutes on foot from Dainichi Station</p><p>Hours: 9:30 AM – 5:00 PM</p><p>Closed: Saturdays, Sundays and Japanese public holidays</p><p>Advance reservation required (by the previous day)</p><p>Phone: <a href="tel:+81661159935" className="underline">+81-6-6115-9935</a></p></div><a href="https://www.google.com/maps/search/?api=1&query=%E5%A4%A7%E9%98%AA%E5%BA%9C%E5%AE%88%E5%8F%A3%E5%B8%82%E5%A4%A7%E6%97%A5%E7%94%BA1-8-18" target="_blank" rel="noopener noreferrer" className="mt-7 inline-block text-sm font-medium text-[#646d49] underline underline-offset-4">View on Google Maps ↗</a></div>
    </div></section>

    <section className="bg-[#f0ede5] px-5 py-20 sm:py-24"><div className="mx-auto max-w-3xl"><Heading eyebrow="FAQ" title="Frequently Asked Questions"/><div className="mt-12 space-y-3">{faqs.map(f=><details key={f.q} className="group rounded-xl border border-[#e2ddd2] bg-white p-6"><summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-sm font-medium leading-7"><span><span className="mr-3 text-[#858b6a]">Q.</span>{f.q}</span><span className="text-lg text-[#858b6a] group-open:rotate-45">+</span></summary><p className="mt-5 border-t border-[#eee9df] pt-5 text-sm leading-8 text-[#716c63]"><span className="mr-3 font-medium text-[#858b6a]">A.</span>{f.a}</p></details>)}</div></div></section>

    <section id="reservation" className="bg-[#777a59] px-5 py-20 text-center text-white sm:py-24"><p className="text-xs tracking-[0.3em] text-[#f1ecda]">RESERVATION · OSAKA</p><h2 className="mt-5 text-2xl font-medium sm:text-3xl">Book Your 60-Minute Reset</h2><p className="mt-7 text-sm leading-9 text-[#f7f4e9]">Appointment only · Book by the previous day<br/>Head Spa Yu Osaka, Dainichi</p><div className="mx-auto mt-8 max-w-lg rounded-2xl border border-white/30 p-7"><p className="text-sm">Appointment start times</p><p className="mt-4 text-sm leading-9">9:30 AM / 11:00 AM / 12:30 PM<br/>2:00 PM / 3:30 PM</p><p className="mt-4 text-xs text-[#f1ecda]">Weekdays only (closed weekends and public holidays)</p></div><div className="mx-auto mt-8 max-w-3xl"><BookingNotice dark/></div><a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="mt-9 inline-block rounded-full bg-white px-10 py-4 text-sm font-medium text-[#5d6245] transition hover:bg-[#f0ede5]">Book Osaka via Square ↗</a><p className="mt-6 text-xs leading-7 text-[#f1ecda]">Pay at the salon only · Cancel online by the previous day<br/>For same-day cancellations, please call us.</p></section>

    <footer className="bg-[#faf8f3] px-5 py-12 text-center"><p className="text-sm tracking-widest text-[#777a59]">HEAD SPA YU · OSAKA</p><div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-4 text-xs text-[#716c63]"><Link href="/en/" className="underline underline-offset-4">Fukuoka Main Salon</Link><Link href="/osaka" className="underline underline-offset-4">日本語</Link><a href="#access" className="underline underline-offset-4">Access</a><a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">Book Osaka</a></div><div className="mx-auto mt-8 max-w-lg border-t border-[#e4dfd5] pt-7"><p className="text-xs text-[#938b7e]">Operated by</p><a href="https://www.gamigami.net/" target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-sm font-medium text-[#646d49] underline underline-offset-4">GAMI Co., Ltd. ↗</a></div><p className="mt-8 text-xs text-[#9b9488]">© HEAD SPA YU OSAKA</p></footer>
  </main>;
}
