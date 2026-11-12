import Link from 'next/link';
import { siteSettings } from '@/data/siteData';

export function CtaBand({ title = 'Ready for your next mountain journey?', text = 'Tell us your dates and group size — we’ll shape the perfect plan.' }) {
  return (
    <section className="px-4 pb-10 sm:pb-20 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-ridge-yellow px-6 py-12 text-center shadow-xl sm:px-12 sm:py-14">
        <svg className="pointer-events-none absolute inset-x-0 bottom-0 h-24 w-full text-ridge-navy/[0.07]" viewBox="0 0 1200 100" preserveAspectRatio="none" aria-hidden="true">
          <path fill="currentColor" d="M0 100 L0 60 L120 20 L210 62 L330 8 L450 64 L580 30 L700 66 L830 14 L960 62 L1080 26 L1200 60 L1200 100 Z" />
        </svg>
        <div className="relative">
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold text-ridge-navy sm:text-5xl">{title}</h2>
          <p className="mx-auto mt-3 max-w-xl text-ridge-navy/80">{text}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="rounded-full bg-ridge-navy px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow transition hover:-translate-y-0.5 hover:bg-ridge-navy/90">
              Plan My Trip
            </Link>
            <a href={`https://wa.me/${siteSettings.whatsappNumber}`} target="_blank" rel="noreferrer" className="rounded-full border-2 border-ridge-navy px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-ridge-navy transition hover:bg-ridge-navy hover:text-white">
              <i className="fa-brands fa-whatsapp mr-2" aria-hidden="true" />WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CtaBand;
