import { notFound } from 'next/navigation';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PageHero } from '@/components/PageHero';
import { SectionHeading } from '@/components/SectionHeading';
import { BookingForm } from '@/components/BookingForm';
import { TrekCard } from '@/components/TrekCard';
import { siteSettings, treks } from '@/data/siteData';

export function generateStaticParams() {
  return treks.map((trek) => ({ slug: trek.slug }));
}

export async function generateMetadata({ params }) {
  const trek = treks.find((item) => item.slug === params.slug);
  if (!trek) return { title: 'Trek not found' };
  return { title: trek.name, description: trek.shortDescription };
}

const tabs = [
  ['overview', 'Overview'],
  ['itinerary', 'Itinerary'],
  ['inclusions', 'Inclusions'],
  ['carry', 'What to carry'],
  ['faq', 'FAQ'],
];

export default function TrekDetailPage({ params }) {
  const trek = treks.find((item) => item.slug === params.slug);
  if (!trek) notFound();

  const relatedTreks = treks.filter((item) => trek.relatedTreks?.includes(item.slug)).slice(0, 3);
  const photos = [trek.mainImage, ...(trek.gallery || [])].slice(0, 3);
  const stats = [
    ['fa-regular fa-calendar', 'Duration', trek.duration],
    ['fa-solid fa-signal', 'Difficulty', trek.difficulty],
    ['fa-solid fa-mountain', 'Max altitude', trek.maximumAltitude],
    ['fa-solid fa-sun', 'Best season', trek.bestSeason],
  ];

  return (
    <>
      <Header />
      <main className="bg-ridge-mist text-ridge-navy">
        <PageHero
          eyebrow={trek.state}
          title={trek.name}
          description={trek.shortDescription}
          backgroundImage={trek.mainImage}
          breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Treks', href: '/treks' }, { label: trek.name }]}
        />

        <section className="px-4 pb-20 pt-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_380px]">
            <div className="min-w-0">
              {/* Photos */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                {photos.map((p, i) => (
                  <div key={p} className={`overflow-hidden rounded-2xl shadow-md ${i === 0 ? 'col-span-2 aspect-[16/10] sm:aspect-[16/8]' : 'aspect-[16/11] sm:aspect-[16/9]'}`}>
                    <div className="h-full w-full bg-cover bg-center transition duration-700 hover:scale-105" style={{ backgroundImage: `url("${p}")` }} />
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
                {stats.map(([icon, label, value]) => (
                  <div key={label} className="rounded-2xl bg-white p-4 text-center shadow-sm ring-1 ring-slate-100">
                    <i className={`${icon} text-xl text-ridge-yellow-dark`} aria-hidden="true" />
                    <p className="mt-2 text-sm font-bold leading-snug">{value}</p>
                    <p className="text-xs text-slate-500">{label}</p>
                  </div>
                ))}
              </div>

              {/* Tabs */}
              <nav className="sticky top-[65px] sm:top-[69px] z-30 -mx-4 mt-8 overflow-x-auto bg-ridge-mist/95 px-4 backdrop-blur sm:mx-0 sm:px-0">
                <div className="flex gap-6 border-b border-slate-200 text-sm font-semibold text-slate-500">
                  {tabs.map(([id, label]) => (
                    <a key={id} href={`#${id}`} className="whitespace-nowrap border-b-2 border-transparent pb-3 pt-3 transition hover:border-ridge-yellow hover:text-ridge-navy">
                      {label}
                    </a>
                  ))}
                </div>
              </nav>

              <div id="overview" className="scroll-mt-32 pt-10">
                <SectionHeading eyebrow="Overview" title="A deeper look at the route" description={trek.description} />
              </div>

              <div id="itinerary" className="scroll-mt-32 pt-14">
                <SectionHeading eyebrow="Day by day" title="Itinerary" />
                {trek.itinerary.length ? (
                  <ol className="relative mt-8 space-y-6 border-l-2 border-ridge-yellow/50 pl-6 sm:pl-8">
                    {trek.itinerary.map((day) => (
                      <li key={`${trek.slug}-${day.day}`} className="relative rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100 sm:p-6">
                        <span className="absolute -left-[37px] top-6 flex h-5 w-5 items-center justify-center rounded-full bg-ridge-yellow ring-4 ring-ridge-mist sm:-left-[45px]" />
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <p className="text-xs font-bold uppercase tracking-[0.2em] text-ridge-yellow-dark">{day.day}</p>
                          <span className="rounded-full bg-ridge-sky px-3 py-1 text-xs font-semibold">{day.walking}</span>
                        </div>
                        <h3 className="mt-2 font-display text-2xl font-bold">{day.title}</h3>
                        <p className="mt-2 text-[15px] leading-7 text-slate-600">{day.description}</p>
                        <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-600">
                          <span className="rounded-full bg-slate-100 px-3 py-1"><i className="fa-solid fa-mountain mr-1.5" aria-hidden="true" />{day.altitude}</span>
                          <span className="rounded-full bg-slate-100 px-3 py-1"><i className="fa-solid fa-bed mr-1.5" aria-hidden="true" />{day.accommodation}</span>
                          <span className="rounded-full bg-slate-100 px-3 py-1"><i className="fa-solid fa-utensils mr-1.5" aria-hidden="true" />{day.meals}</span>
                        </div>
                      </li>
                    ))}
                  </ol>
                ) : (
                  <p className="mt-6 rounded-2xl border border-dashed border-slate-300 bg-white p-6 text-slate-600">Itinerary details will be updated when the departure schedule is confirmed.</p>
                )}
              </div>

              <div id="inclusions" className="scroll-mt-32 pt-14">
                <SectionHeading eyebrow="Good to know" title="Inclusions & exclusions" />
                <div className="mt-8 grid gap-5 md:grid-cols-2">
                  <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
                    <h3 className="font-display text-2xl font-bold">Included</h3>
                    <ul className="mt-4 space-y-3 text-[15px] text-slate-600">
                      {trek.inclusions.map((item) => (
                        <li key={item} className="flex gap-3"><i className="fa-solid fa-circle-check mt-1 text-emerald-500" aria-hidden="true" />{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
                    <h3 className="font-display text-2xl font-bold">Not included</h3>
                    <ul className="mt-4 space-y-3 text-[15px] text-slate-600">
                      {trek.exclusions.map((item) => (
                        <li key={item} className="flex gap-3"><i className="fa-solid fa-circle-xmark mt-1 text-rose-400" aria-hidden="true" />{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div id="carry" className="scroll-mt-32 pt-14">
                <SectionHeading eyebrow="Pack smart" title="What to carry" />
                <div className="mt-6 flex flex-wrap gap-3">
                  {trek.thingsToCarry.map((item) => (
                    <span key={item} className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold shadow-sm ring-1 ring-slate-200">
                      <i className="fa-solid fa-check mr-2 text-ridge-yellow-dark" aria-hidden="true" />{item}
                    </span>
                  ))}
                </div>
                <div className="mt-8 flex gap-4 rounded-2xl bg-ridge-yellow/20 p-6 ring-1 ring-ridge-yellow/50">
                  <i className="fa-solid fa-shield-heart mt-1 text-2xl text-ridge-yellow-dark" aria-hidden="true" />
                  <div>
                    <h3 className="font-display text-2xl font-bold">Safety & preparedness</h3>
                    <p className="mt-1 text-[15px] leading-7 text-slate-700">{trek.safetyInformation}</p>
                    <p className="mt-2 text-[15px] leading-7 text-slate-700"><span className="font-semibold">Fitness:</span> {trek.fitnessRequirements}</p>
                  </div>
                </div>
              </div>

              <div id="faq" className="scroll-mt-32 pt-14">
                <SectionHeading eyebrow="Questions" title="Frequently asked" />
                <ul className="mt-6 space-y-3">
                  {trek.faqs.map((q) => (
                    <li key={q} className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ridge-yellow text-sm font-bold">?</span>
                      <span className="font-medium">{q}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-sm text-slate-500">Send us your question using the enquiry form below — we reply quickly.</p>
              </div>
            </div>

            {/* Sticky booking card */}
            <aside className="lg:sticky lg:top-24 lg:self-start">
              <div className="overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-slate-100">
                <div className="bg-ridge-navy p-6 text-white">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ridge-yellow">Starting from</p>
                  <p className="mt-1 font-display text-4xl font-bold">{trek.startingPrice ? `₹${trek.startingPrice}` : 'On Request'}</p>
                  <p className="mt-1 text-sm text-white/70">Per person · private & group departures</p>
                </div>
                <div className="space-y-4 p-6 text-sm text-slate-600">
                  <p><i className="fa-solid fa-location-dot w-5 text-ridge-yellow-dark" aria-hidden="true" /><span className="font-semibold text-ridge-navy">Meeting point:</span> {trek.meetingPoint}</p>
                  <p><i className="fa-solid fa-flag-checkered w-5 text-ridge-yellow-dark" aria-hidden="true" /><span className="font-semibold text-ridge-navy">Ending point:</span> {trek.endingPoint}</p>
                  <p><i className="fa-solid fa-user w-5 text-ridge-yellow-dark" aria-hidden="true" /><span className="font-semibold text-ridge-navy">Minimum age:</span> {trek.minimumAge}</p>
                  <p><i className="fa-solid fa-people-group w-5 text-ridge-yellow-dark" aria-hidden="true" /><span className="font-semibold text-ridge-navy">Group size:</span> {trek.groupSize}</p>
                  <a href="#enquire" className="block rounded-full bg-ridge-yellow py-3.5 text-center text-sm font-bold uppercase tracking-wider text-ridge-navy shadow transition hover:bg-ridge-yellow-dark">Enquire Now</a>
                  <a href={`https://wa.me/${siteSettings.whatsappNumber}?text=${encodeURIComponent(`Hi, I'm interested in ${trek.name}`)}`} target="_blank" rel="noreferrer" className="block rounded-full border-2 border-emerald-600 py-3 text-center text-sm font-bold uppercase tracking-wider text-emerald-700 transition hover:bg-emerald-600 hover:text-white">
                    <i className="fa-brands fa-whatsapp mr-2" aria-hidden="true" />Chat on WhatsApp
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {relatedTreks.length ? (
          <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <SectionHeading centered eyebrow="Similar treks" title="Routes you may also love" />
              <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {relatedTreks.map((item) => <TrekCard key={item.slug} trek={item} />)}
              </div>
            </div>
          </section>
        ) : null}

        <section id="enquire" className="scroll-mt-20 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <SectionHeading eyebrow="Enquiry" title={`Ask about ${trek.name}`} description="Share your dates and group size. We’ll reply on WhatsApp with availability and a detailed plan." />
            </div>
            <div className="lg:col-span-3">
              <BookingForm treks={treks.map((t) => t.name)} defaultTrek={trek.name} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
