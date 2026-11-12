import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PageHero } from '@/components/PageHero';
import { SectionHeading } from '@/components/SectionHeading';
import { CtaBand } from '@/components/CtaBand';

export const metadata = { title: 'About Us' };

const values = [
  { icon: 'fa-user-shield', title: 'Expert local knowledge', desc: 'Calm route planning led by guides who know every trail.' },
  { icon: 'fa-people-group', title: 'Small-group pacing', desc: 'Comfort-aware travel design for every kind of trekker.' },
  { icon: 'fa-shield-heart', title: 'Safety first', desc: 'Safety-first decisions with flexible route shifting.' },
  { icon: 'fa-leaf', title: 'Responsible travel', desc: 'Scenic, story-rich journeys that respect the mountains.' },
];

const stats = [
  ['10+', 'Years'],
  ['4.8/5', 'Rating'],
  ['4500+', 'Trekkers'],
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="bg-ridge-mist text-ridge-navy">
        <PageHero
          eyebrow="About us"
          title="We help travelers experience the Himalayas with confidence and wonder"
          description="Ridge Runner Adventures is built around thoughtful route design, local know-how and genuine respect for the mountain environment."
          backgroundImage="/hero-lone-hiker.jpg"
          breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'About' }]}
        />

        <section className="px-4 pb-10 sm:pb-20 pt-6 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <SectionHeading eyebrow="Our story" title="Every route is designed to feel both adventurous and well guided" />
              <p className="mt-6 text-lg leading-8 text-slate-600">We combine mountain expertise with a human-centered travel approach. Each journey is tailored to the pace, style and comfort level of the group so that the experience feels exciting without losing clarity, safety or purpose.</p>
              <p className="mt-4 text-lg leading-8 text-slate-600">From ridge walks and glacial passes to cultural expeditions and quiet valley routes, our work focuses on creating meaningful travel experiences that balance scenic impact, group flow and responsible guiding.</p>
              <div className="mt-8 grid grid-cols-3 gap-3 text-center">
                {stats.map(([n, l]) => (
                  <div key={l} className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
                    <p className="font-display text-3xl font-bold">{n}</p>
                    <p className="text-sm text-slate-500">{l}</p>
                  </div>
                ))}
              </div>
              <Link href="/treks" className="mt-8 inline-flex items-center gap-3 rounded-full bg-ridge-yellow px-8 py-3.5 text-sm font-bold uppercase tracking-wider shadow transition hover:-translate-y-0.5 hover:bg-ridge-yellow-dark">
                Explore Treks <i className="fa-solid fa-arrow-right" aria-hidden="true" />
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-3xl shadow-xl">
                <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1519904981063-b0cf448d479e?auto=format&fit=crop&w=1200&q=80")' }} />
              </div>
              <div className="absolute -bottom-5 left-4 rounded-2xl bg-ridge-yellow px-6 py-4 font-display text-xl font-bold shadow-xl sm:left-8">
                Dare to Dream,<br />Dare to Explore.
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-10 sm:py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading centered eyebrow="What matters most" title="The way we travel" />
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((v) => (
                <div key={v.title} className="rounded-2xl bg-ridge-mist p-7 text-center shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-lg">
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-ridge-yellow text-2xl">
                    <i className={`fa-solid ${v.icon}`} aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-lg font-bold">{v.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="pt-10 sm:pt-20">
          <CtaBand />
        </div>
      </main>
      <Footer />
    </>
  );
}
