import Link from 'next/link';

export function PageHero({ eyebrow, title, description, backgroundImage, breadcrumbs }) {
  return (
    <section className="relative isolate overflow-hidden bg-ridge-navy text-white">
      {backgroundImage ? (
        <div className="kenburns absolute inset-0 -z-10 bg-cover bg-center" style={{ backgroundImage: `url("${backgroundImage}")` }} />
      ) : null}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ridge-navy/95 via-ridge-navy/75 to-ridge-navy/30" />

      <div className="mx-auto max-w-7xl px-4 pb-24 pt-14 sm:px-6 sm:pb-28 sm:pt-20 lg:px-8">
        {breadcrumbs?.length ? (
          <nav aria-label="Breadcrumb" className="mb-5 flex flex-wrap items-center gap-2 text-sm text-white/70">
            {breadcrumbs.map((b, i) => (
              <span key={b.label} className="flex items-center gap-2">
                {i > 0 ? <i className="fa-solid fa-chevron-right text-[9px]" aria-hidden="true" /> : null}
                {b.href ? <Link href={b.href} className="hover:text-ridge-yellow">{b.label}</Link> : <span className="text-white">{b.label}</span>}
              </span>
            ))}
          </nav>
        ) : null}
        {eyebrow ? <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ridge-yellow">{eyebrow}</p> : null}
        <h1 className="mt-3 max-w-4xl font-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">{title}</h1>
        <span className="mt-5 block h-1 w-20 rounded-full bg-ridge-yellow" />
        {description ? <p className="mt-5 max-w-2xl text-base text-white/85 sm:text-lg">{description}</p> : null}
      </div>

      {/* mountain-line edge */}
      <svg className="absolute inset-x-0 bottom-0 h-12 w-full text-ridge-mist sm:h-16" viewBox="0 0 1200 60" preserveAspectRatio="none" aria-hidden="true">
        <path fill="currentColor" d="M0 60 L0 38 L110 14 L200 40 L330 6 L450 42 L580 18 L700 44 L830 10 L960 40 L1080 16 L1200 38 L1200 60 Z" />
      </svg>
    </section>
  );
}

export default PageHero;
