import Link from 'next/link';
import Image from 'next/image';
import { siteSettings } from '@/data/siteData';

const floatingBadges = [
  '10+ Years Experience',
  '4500+ Happy Trekkers',
  '4.8/5 Rated Adventures',
];

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <Image src={"/hero-sunrise-hiker.jpg"} alt="Mountain trek hero" fill priority sizes="100vw" className="object-cover opacity-65" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.32),_transparent_32%),linear-gradient(110deg,rgba(2,6,23,0.92)_0%,rgba(15,23,42,0.88)_45%,rgba(14,116,144,0.78)_100%)]" />
      </div>

      <div className="absolute -left-10 top-20 h-52 w-52 rounded-full bg-sky-400/20 blur-3xl animate-hero-orb" />
      <div className="absolute right-10 top-24 h-64 w-64 rounded-full bg-orange-400/20 blur-3xl animate-hero-orb-delayed" />
      <div className="absolute bottom-0 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-cyan-300/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
        <div className="max-w-2xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-100 backdrop-blur-sm animate-hero-fade-up">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.8)]" />
            Himalayan guiding for unforgettable journeys
          </div>

          <h1 className="font-display text-5xl font-bold leading-[0.9] sm:text-6xl lg:text-7xl animate-hero-fade-up">
            <span className="block">MOUNTAINS ARE</span>
            <span className="block bg-gradient-to-r from-sky-200 via-white to-amber-300 bg-clip-text text-transparent">CALLING</span>
          </h1>

          <p className="mt-5 max-w-xl text-lg text-sky-100 sm:text-xl animate-hero-fade-up delay-100">
            Group Treks | Real Experiences | Lifelong Memories
          </p>

          <div className="mt-8 flex flex-wrap gap-4 animate-hero-fade-up delay-150">
            <Link href="/treks" className="btn-shimmer inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-orange-300/30">
              Explore Treks
            </Link>
            <a href={`https://wa.me/${siteSettings.whatsappNumber}`} target="_blank" rel="noreferrer" className="rounded-full border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition duration-200 hover:bg-white/10 hover:shadow-[0_0_25px_rgba(56,189,248,0.3)]">
              Enquire Now
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 animate-hero-fade-up delay-200">
            {floatingBadges.map((badge) => (
              <span key={badge} className="rounded-full border border-white/15 bg-slate-950/35 px-3 py-2 text-xs font-medium text-slate-100 backdrop-blur-sm">
                {badge}
              </span>
            ))}
          </div>
        </div>

        <div className="relative self-end animate-hero-fade-up delay-200">
          <div className="absolute -left-10 top-8 rounded-full border border-amber-300/50 bg-amber-300/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-100 shadow-[0_0_20px_rgba(251,191,36,0.2)] backdrop-blur-sm">
            limited slots
          </div>

          <div className="absolute -right-6 bottom-10 rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm shadow-2xl backdrop-blur-md">
            <div className="flex items-center gap-2 text-sky-200">
              <span className="text-lg">★</span>
              <span>4.9 traveler rating</span>
            </div>
          </div>

          <div className="rounded-[28px] border border-white/15 bg-white/8 p-5 shadow-[0_30px_90px_rgba(15,118,110,0.35)] backdrop-blur-md">
            <div className="rounded-[22px] border border-sky-300/20 bg-slate-950/70 p-6">
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm uppercase tracking-[0.22em] text-sky-200">Featured departure</p>
                <span className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-200">
                  live
                </span>
              </div>

              <h2 className="mt-4 font-display text-3xl font-semibold text-white">Kuari Pass & Pangarchulla Peak</h2>

              <div className="mt-5 flex items-center gap-3 text-sm text-slate-200">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2.5 py-1">
                  <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
                  7D / 6N
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2.5 py-1">
                  <span className="inline-block h-2 w-2 rounded-full bg-sky-400" />
                  Easy to Moderate
                </span>
              </div>

              <ul className="mt-6 space-y-3 text-sm text-slate-200">
                <li className="flex items-center gap-2"><span className="text-sky-300">•</span> Guided by local experts</li>
                <li className="flex items-center gap-2"><span className="text-sky-300">•</span> Small groups and personal pacing</li>
                <li className="flex items-center gap-2"><span className="text-sky-300">•</span> Flexible batch schedules</li>
              </ul>

              <div className="mt-6 rounded-2xl border border-sky-500/40 bg-gradient-to-r from-sky-500/20 to-amber-400/10 px-4 py-3">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm text-sky-100">Next batch</span>
                  <span className="text-right text-sm font-bold text-white">Open for enquiries</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
