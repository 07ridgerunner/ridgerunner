import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { BookingForm } from '@/components/BookingForm';
import { GalleryFilter } from '@/components/GalleryFilter';
import { FAQAccordion } from '@/components/FAQAccordion';
import { faqs, siteSettings } from '@/data/siteData';

const img = (id, w = 1200) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;
const P = {
  hero: '/hero-sunrise-hiker.jpg',
  lone: '/hero-lone-hiker.jpg',
  peaks: img('1464822759023-fed622ff2c3b'),
  lake: img('1486870591958-9b9d0d1dda99'),
  forest: img('1501785888041-af3ef285b470'),
  sunset: img('1506905925346-21bda4d32df4'),
  camp: img('1519904981063-b0cf448d479e'),
  group: img('1551632811-561732d1e306'),
};

const trustBadges = [
  { icon: 'fa-user-check', label: 'Guided by Experts' },
  { icon: 'fa-calendar-check', label: 'Well Planned Itineraries' },
  { icon: 'fa-shield-heart', label: 'Safe & Supportive' },
  { icon: 'fa-compass', label: 'Meaningful Travel' },
];

const upcomingTreks = [
  { name: 'Kuari Pass Trek', nights: '6 Nights / 7 Days', level: 'Moderate', location: 'Uttarakhand', date: '7 Nov 2024', image: P.peaks },
  { name: 'Kedarkantha Trek', nights: '5 Nights / 6 Days', level: 'Easy to Moderate', location: 'Uttarakhand', date: '15 Dec 2024', image: P.forest },
  { name: 'Brahmatal Trek', nights: '6 Nights / 7 Days', level: 'Moderate', location: 'Uttarakhand', date: '10 Jan 2025', image: P.lake },
  { name: 'Dayara Bugyal Trek', nights: '5 Nights / 6 Days', level: 'Easy', location: 'Uttarakhand', date: '18 Jan 2025', image: P.sunset },
];

const destinations = [
  { name: 'Kuari Pass', place: 'Uttarakhand', image: P.peaks },
  { name: 'Kedarkantha', place: 'Uttarakhand', image: P.forest },
  { name: 'Brahmatal', place: 'Uttarakhand', image: P.lake },
  { name: 'Dayara Bugyal', place: 'Uttarakhand', image: P.sunset },
  { name: 'Hampta Pass', place: 'Himachal Pradesh', image: P.camp },
  { name: 'Valley of Flowers', place: 'Uttarakhand', image: P.group },
];

const whyChooseUs = [
  { icon: 'fa-user-shield', title: 'Experienced Guides', desc: 'Certified & local experts' },
  { icon: 'fa-shield-halved', title: 'Safety First', desc: 'Well-planned & supported' },
  { icon: 'fa-people-group', title: 'Small Group Batches', desc: 'Personal and enriching' },
  { icon: 'fa-mountain', title: 'Authentic Experiences', desc: 'Offbeat trails and real travel' },
  { icon: 'fa-leaf', title: 'Sustainable Travel', desc: 'Respecting nature and local communities' },
  { icon: 'fa-headset', title: 'End-to-End Support', desc: 'From planning to on-ground assistance' },
];

const steps = [
  { icon: 'fa-magnifying-glass-location', title: 'Pick your trek', desc: 'Browse routes by season, difficulty and duration.' },
  { icon: 'fa-comments', title: 'Send an enquiry', desc: 'Share dates and group size — we reply on WhatsApp.' },
  { icon: 'fa-clipboard-check', title: 'Confirm & prepare', desc: 'Get your itinerary, packing list and fitness tips.' },
  { icon: 'fa-person-hiking', title: 'Hit the trail', desc: 'Trek with expert guides, small groups and full support.' },
];

const counters = [
  ['10+', 'Years of experience'],
  ['4500+', 'Happy trekkers'],
  ['50+', 'Trek departures a year'],
  ['4.8/5', 'Average rating'],
];

const galleryItems = [
  { src: P.peaks, cat: 'Trekking' },
  { src: P.sunset, cat: 'Groups' },
  { src: P.camp, cat: 'Camps' },
  { src: P.lake, cat: 'Landscapes' },
  { src: P.forest, cat: 'Trekking' },
  { src: P.group, cat: 'Groups' },
  { src: P.hero, cat: 'Landscapes' },
  { src: P.sunset, cat: 'Camps' },
];

const testimonials = [
  { quote: 'An absolutely amazing experience with Ridge Runner Adventures. Well organised, supportive team and breathtaking views!', name: 'Priya S.', trek: 'Kuari Pass Trek' },
  { quote: 'Perfect blend of adventure, safety and fun. The guides were experienced and the whole journey was seamless.', name: 'Rohit K.', trek: 'Kedarkantha Trek' },
  { quote: 'One of the best treks I’ve done! Met amazing people and created memories for a lifetime.', name: 'Aarti K.', trek: 'Brahmatal Trek' },
];

const aboutPoints = [
  { icon: 'fa-binoculars', title: 'Our Vision', desc: 'To inspire more people to explore the mountains responsibly.' },
  { icon: 'fa-people-roof', title: 'Our Team', desc: 'A passionate team of guides and mountain lovers.' },
  { icon: 'fa-seedling', title: 'Sustainable Travel', desc: 'Respecting nature and supporting local communities.' },
];

function Heading({ eyebrow, title, sub }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow ? <p className="text-xs font-semibold uppercase tracking-[0.25em] text-ridge-navy/60">{eyebrow}</p> : null}
      <h2 className="mt-2 font-display text-4xl font-bold leading-tight text-ridge-navy sm:text-5xl">{title}</h2>
      <span className="mx-auto mt-3 block h-1 w-16 rounded-full bg-ridge-yellow" />
      {sub ? <p className="mt-4 text-slate-600">{sub}</p> : null}
    </div>
  );
}

function ArrowDot({ className = '' }) {
  return (
    <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ridge-yellow text-sm text-ridge-navy transition group-hover:translate-x-0.5 ${className}`}>
      <i className="fa-solid fa-arrow-right" aria-hidden="true" />
    </span>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-ridge-mist text-ridge-navy">
        {/* 1. HERO */}
        <section className="relative">
          <div className="relative isolate flex min-h-[560px] items-end overflow-hidden sm:min-h-[560px] lg:min-h-[540px] lg:items-center">
            <div className="kenburns absolute inset-0 -z-10 bg-cover bg-[position:72%_center] lg:bg-center" style={{ backgroundImage: `url("${P.hero}")` }} />
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/85 via-black/25 to-black/10 lg:bg-gradient-to-r lg:from-black/65 lg:via-black/15 lg:to-transparent" />
            <div className="mx-auto w-full max-w-7xl px-5 pb-20 pt-24 text-center sm:px-6 lg:px-8 lg:pb-24 lg:pt-10 lg:text-left">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/35 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur sm:text-xs">
                <span className="h-2 w-2 rounded-full bg-ridge-yellow" /> Small-group Himalayan treks
              </span>
              <h1 className="mt-5 font-display font-bold uppercase leading-[0.95]">
                <span className="block text-xl font-semibold tracking-[0.35em] text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.6)] sm:text-3xl">Mountains</span>
                <span className="mt-1 block text-[3.4rem] text-ridge-yellow [text-shadow:0_4px_24px_rgba(0,0,0,0.55)] sm:text-7xl lg:text-8xl">Are Calling</span>
              </h1>
              <p className="mx-auto mt-4 max-w-sm text-base font-medium text-white [text-shadow:0_2px_10px_rgba(0,0,0,0.7)] sm:text-lg lg:mx-0 lg:max-w-md">
                Group Treks · Real Experiences · Lifelong Memories
              </p>
              <div className="mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center lg:justify-start">
                <Link href="/treks" className="btn-pulse inline-flex items-center justify-center gap-3 rounded-full bg-ridge-yellow px-8 py-4 text-sm font-bold uppercase tracking-wider text-ridge-navy shadow-lg">
                  Explore Treks <i className="fa-solid fa-arrow-right" aria-hidden="true" />
                </Link>
                <a href={`https://wa.me/${siteSettings.whatsappNumber}`} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/50 bg-white/10 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white backdrop-blur">
                  <i className="fa-brands fa-whatsapp text-lg" aria-hidden="true" /> WhatsApp Us
                </a>
              </div>
              <div className="mt-6 flex items-center justify-center gap-3 text-sm text-white/90 lg:justify-start">
                <span className="text-ridge-yellow" aria-hidden="true">
                  {[0, 1, 2, 3, 4].map((n) => <i key={n} className="fa-solid fa-star mr-0.5 text-xs" />)}
                </span>
                <span><b>4.8/5</b> · 4500+ happy trekkers</span>
              </div>
            </div>
          </div>
          <div className="relative z-10 mx-auto -mt-10 max-w-5xl px-4 sm:px-6 lg:-mt-14">
            <div className="grid grid-cols-2 gap-x-3 gap-y-4 rounded-3xl bg-white p-4 shadow-xl ring-1 ring-slate-100 sm:p-5 md:grid-cols-4">
              {trustBadges.map((b) => (
                <div key={b.label} className="flex items-center gap-3 md:flex-col md:gap-2 md:px-2 md:text-center">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ridge-sky text-lg text-ridge-yellow-dark md:h-12 md:w-12 md:text-xl">
                    <i className={`fa-solid ${b.icon}`} aria-hidden="true" />
                  </span>
                  <span className="text-xs font-semibold leading-tight sm:text-sm">{b.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2. UPCOMING TREKS */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Heading title="Upcoming Treks" />
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {['All Treks', 'Winter', 'Spring', 'Summer', 'Monsoon'].map((c, i) => (
                <span key={c} className={`rounded-full px-5 py-2 text-sm font-semibold ${i === 0 ? 'bg-ridge-navy text-white' : 'bg-white ring-1 ring-slate-200'}`}>{c}</span>
              ))}
            </div>
            <div className="mt-10 grid gap-4 lg:grid-cols-2 lg:gap-6">
              {upcomingTreks.map((t) => (
                <Link key={t.name} href="/treks" className="group flex items-center gap-4 rounded-2xl bg-white p-3 shadow-md ring-1 ring-slate-100 transition hover:-translate-y-0.5 hover:shadow-xl sm:gap-5 sm:p-4">
                  <div className="h-28 w-28 shrink-0 overflow-hidden rounded-xl sm:h-32 sm:w-40">
                    <div className="h-full w-full bg-cover bg-center transition duration-500 group-hover:scale-110" style={{ backgroundImage: `url("${t.image}")` }} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-xl font-bold sm:text-2xl">{t.name}</h3>
                    <ul className="mt-1 space-y-0.5 text-[13px] text-slate-600">
                      <li><i className="fa-regular fa-moon w-4 text-ridge-yellow-dark" aria-hidden="true" /> {t.nights}</li>
                      <li><i className="fa-solid fa-signal w-4 text-ridge-yellow-dark" aria-hidden="true" /> {t.level}</li>
                      <li><i className="fa-solid fa-location-dot w-4 text-ridge-yellow-dark" aria-hidden="true" /> {t.location}</li>
                      <li><i className="fa-regular fa-calendar w-4 text-ridge-yellow-dark" aria-hidden="true" /> {t.date}</li>
                    </ul>
                  </div>
                  <ArrowDot className="h-10 w-10" />
                </Link>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link href="/treks" className="inline-flex items-center gap-2 rounded-full border-2 border-ridge-navy px-7 py-3 text-sm font-bold uppercase tracking-wider transition hover:bg-ridge-navy hover:text-white">
                View All Treks <i className="fa-solid fa-arrow-right" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        {/* 3. DESTINATIONS */}
        <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Heading eyebrow="Explore the Himalayas" title="Our Destinations" sub="From snow-capped peaks to alpine lakes, discover trails that stay with you forever." />
            <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
              {destinations.map((d) => (
                <Link key={d.name} href="/destinations" className="group relative block aspect-[4/5] overflow-hidden rounded-2xl shadow-md sm:aspect-[4/3] lg:aspect-[5/4]">
                  <div className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-110" style={{ backgroundImage: `url("${d.image}")` }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-ridge-navy/85 via-ridge-navy/10 to-transparent" />
                  <div className="absolute inset-x-3 bottom-3 flex items-end justify-between text-white sm:inset-x-5 sm:bottom-5">
                    <div>
                      <h3 className="font-display text-xl font-bold sm:text-2xl">{d.name}</h3>
                      <p className="text-xs text-white/80 sm:text-sm">{d.place}</p>
                    </div>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/70 text-xs transition group-hover:bg-ridge-yellow group-hover:text-ridge-navy">
                      <i className="fa-solid fa-arrow-right" aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 4. TREK DETAIL SPOTLIGHT */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl items-start gap-8 lg:grid-cols-2 lg:gap-12">
            <div>
              <div className="aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">
                <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: `url("${P.peaks}")` }} />
              </div>
              <div className="mt-3 grid grid-cols-3 gap-3">
                {[P.sunset, P.camp, P.forest].map((s) => (
                  <div key={s} className="aspect-[4/3] overflow-hidden rounded-xl">
                    <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: `url("${s}")` }} />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-ridge-navy/60">Featured trek</p>
              <h2 className="mt-2 font-display text-5xl font-bold">Kuari Pass Trek</h2>
              <p className="mt-2 text-slate-600"><i className="fa-solid fa-location-dot mr-2 text-ridge-yellow-dark" aria-hidden="true" />Uttarakhand</p>
              <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                {[
                  ['fa-regular fa-calendar', '6 Nights / 7 Days', 'Duration'],
                  ['fa-solid fa-signal', 'Moderate', 'Difficulty'],
                  ['fa-solid fa-mountain', '12,516 ft', 'Highest Altitude'],
                ].map(([ic, v, l]) => (
                  <div key={l} className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
                    <i className={`${ic} text-xl text-ridge-yellow-dark`} aria-hidden="true" />
                    <p className="mt-2 text-sm font-bold">{v}</p>
                    <p className="text-xs text-slate-500">{l}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex gap-5 overflow-x-auto border-b border-slate-200 text-sm font-semibold text-slate-500">
                {['Overview', 'Itinerary', 'Inclusions', 'Exclusions', 'FAQ'].map((t, i) => (
                  <span key={t} className={`whitespace-nowrap pb-3 ${i === 0 ? '-mb-px border-b-2 border-ridge-yellow text-ridge-yellow-dark' : ''}`}>{t}</span>
                ))}
              </div>
              <p className="mt-5 text-lg leading-relaxed text-slate-600">
                A breathtaking winter trek offering panoramic views of Nanda Devi, Dronagiri and snow-clad Himalayan peaks. Perfect for first-time trekkers and mountain lovers.
              </p>
              <div className="mt-7 grid grid-cols-2 gap-3 sm:max-w-md">
                <a href="#enquiry" className="rounded-full bg-ridge-yellow py-3.5 text-center text-sm font-bold uppercase tracking-wider shadow transition hover:bg-ridge-yellow-dark">Enquire Now</a>
                <Link href="/treks/kuari-pass-pangarchulla-peak" className="rounded-full border-2 border-ridge-navy py-3.5 text-center text-sm font-bold uppercase tracking-wider transition hover:bg-ridge-navy hover:text-white">Dates &amp; Batches</Link>
              </div>
            </div>
          </div>
        </section>

        {/* 5. WHY CHOOSE US */}
        <section className="relative overflow-hidden bg-white px-4 py-20 sm:px-6 lg:px-8">
          <div className="relative mx-auto max-w-7xl">
            <Heading eyebrow="Our strength" title="Why Ridge Runner Adventures" sub="More than just treks, we create meaningful mountain experiences." />
            <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
              {whyChooseUs.map((w) => (
                <div key={w.title} className="rounded-2xl bg-ridge-mist p-5 text-center shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-lg sm:p-8">
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-ridge-yellow text-2xl text-ridge-navy">
                    <i className={`fa-solid ${w.icon}`} aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-base font-bold sm:text-lg">{w.title}</h3>
                  <p className="mt-1 text-xs text-slate-600 sm:text-sm">{w.desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-12 text-center font-display text-3xl font-bold italic text-ridge-yellow-dark sm:text-4xl">Dare to Dream, Dare to Explore.</p>
          </div>
        </section>

        {/* 5b. HOW IT WORKS */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Heading eyebrow="Simple & stress-free" title="How It Works" sub="From the first message to the summit, we handle the details." />
            <div className="relative mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="pointer-events-none absolute left-[12%] right-[12%] top-8 hidden border-t-2 border-dashed border-ridge-yellow/60 lg:block" />
              {steps.map((st, i) => (
                <div key={st.title} className="relative text-center">
                  <span className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-ridge-yellow text-2xl shadow-lg ring-8 ring-ridge-mist">
                    <i className={`fa-solid ${st.icon}`} aria-hidden="true" />
                    <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-ridge-navy text-xs font-bold text-white">{i + 1}</span>
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-bold">{st.title}</h3>
                  <p className="mx-auto mt-2 max-w-[240px] text-sm text-slate-600">{st.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5c. STATS BANNER */}
        <section className="relative isolate overflow-hidden px-4 py-20 text-white sm:px-6 lg:px-8">
          <div className="absolute inset-0 -z-10 bg-cover bg-center" style={{ backgroundImage: `url("${P.lone}")` }} />
          <div className="absolute inset-0 -z-10 bg-black/55" />
          <div className="mx-auto max-w-7xl text-center">
            <p className="mx-auto max-w-3xl font-display text-3xl font-bold italic leading-snug sm:text-5xl">
              “Every summit begins with a single step.”
            </p>
            <div className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4">
              {counters.map(([n, l]) => (
                <div key={l} className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur">
                  <p className="font-display text-4xl font-bold text-ridge-yellow sm:text-5xl">{n}</p>
                  <p className="mt-1 text-sm text-white/85">{l}</p>
                </div>
              ))}
            </div>
            <Link href="/treks" className="mt-10 inline-flex items-center gap-3 rounded-full bg-ridge-yellow px-8 py-4 text-sm font-bold uppercase tracking-wider text-ridge-navy shadow-lg">
              Start Your Journey <i className="fa-solid fa-arrow-right" aria-hidden="true" />
            </Link>
          </div>
        </section>

        {/* 6. GALLERY */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Heading eyebrow="Moments from the trails" title="Our Experiences" sub="Real people. Real journeys. Real Himalayas." />
            <GalleryFilter items={galleryItems} />
          </div>
        </section>

        {/* 7. TESTIMONIALS */}
        <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Heading eyebrow="Voices from our trekkers" title="What Our Trekkers Say" sub="Stories, memories and moments that keep us going." />
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {testimonials.map((t) => (
                <figure key={t.name} className="flex flex-col rounded-2xl bg-ridge-mist p-6 shadow-sm ring-1 ring-slate-100">
                  <div className="flex items-center gap-4">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-ridge-yellow font-display text-2xl font-bold">{t.name[0]}</span>
                    <div className="text-ridge-yellow-dark" aria-label="5 out of 5 stars">
                      {[0, 1, 2, 3, 4].map((s) => (
                        <i key={s} className="fa-solid fa-star mr-0.5 text-sm" aria-hidden="true" />
                      ))}
                    </div>
                  </div>
                  <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-slate-700">“{t.quote}”</blockquote>
                  <figcaption className="mt-5 border-t border-slate-200 pt-4">
                    <p className="font-bold">– {t.name}</p>
                    <p className="text-sm text-slate-500">{t.trek}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* 8. ABOUT */}
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="text-center lg:text-left">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-ridge-navy/60">Our story</p>
              <h2 className="mt-2 font-display text-4xl font-bold sm:text-5xl">About<br />Ridge Runner Adventures</h2>
              <span className="mx-auto mt-3 block h-1 w-16 rounded-full bg-ridge-yellow lg:mx-0" />
              <p className="mt-5 text-lg leading-relaxed text-slate-600">
                Born from a deep love for the mountains, Ridge Runner Adventures is a community of trekkers, explorers and storytellers. We believe in responsible travel, meaningful experiences and creating journeys that go beyond destinations.
              </p>
              <Link href="/about" className="mt-7 inline-flex items-center gap-3 rounded-full bg-ridge-yellow px-8 py-3.5 text-sm font-bold uppercase tracking-wider shadow transition hover:-translate-y-0.5 hover:bg-ridge-yellow-dark">
                Our Story <i className="fa-solid fa-arrow-right" aria-hidden="true" />
              </Link>
            </div>
            <div className="aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">
              <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: `url("${P.lone}")` }} />
            </div>
          </div>
          <div className="mx-auto mt-10 grid max-w-7xl gap-4 sm:grid-cols-3">
            {aboutPoints.map((a) => (
              <div key={a.title} className="rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-slate-100">
                <i className={`fa-solid ${a.icon} text-3xl text-ridge-yellow-dark`} aria-hidden="true" />
                <h3 className="mt-3 font-bold">{a.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{a.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 8b. FAQ */}
        <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <Heading eyebrow="Good to know" title="Frequently Asked Questions" />
            <div className="mt-10">
              <FAQAccordion items={faqs} />
            </div>
            <div className="mt-8 text-center">
              <Link href="/faq" className="inline-flex items-center gap-2 rounded-full border-2 border-ridge-navy px-7 py-3 text-sm font-bold uppercase tracking-wider transition hover:bg-ridge-navy hover:text-white">
                More Questions <i className="fa-solid fa-arrow-right" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        {/* 9. BOOKING & ENQUIRY */}
        <section id="enquiry" className="scroll-mt-20 bg-white px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Heading eyebrow="Plan your next adventure" title="Book a Trek or Send an Enquiry" sub="Have questions? We’re here to help you plan the perfect trek." />
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <BookingForm treks={upcomingTreks.map((t) => t.name)} />
              </div>
              <div className="flex flex-col items-center justify-center rounded-3xl bg-ridge-sky p-8 text-center">
                <i className="fa-brands fa-whatsapp text-6xl text-emerald-500" aria-hidden="true" />
                <p className="mt-3 font-display text-2xl font-bold">Prefer a quick chat?</p>
                <a href={`https://wa.me/${siteSettings.whatsappNumber}`} target="_blank" rel="noreferrer" className="mt-4 rounded-full bg-emerald-600 px-7 py-3 text-sm font-bold text-white shadow transition hover:bg-emerald-700">
                  Chat on WhatsApp <i className="fa-solid fa-arrow-right ml-1" aria-hidden="true" />
                </a>
                <p className="mt-8 text-sm text-slate-600">Or drop us an email</p>
                <a href={`mailto:${siteSettings.email}`} className="font-semibold underline">{siteSettings.email}</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
