import Link from 'next/link';

export function TrekCard({ trek }) {
  return (
    <Link
      href={`/treks/${trek.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-slate-100 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <div className="h-full w-full bg-cover bg-center transition duration-700 group-hover:scale-110" style={{ backgroundImage: `url("${trek.mainImage}")` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-ridge-navy/60 via-transparent to-transparent" />
        <span className="absolute left-3 top-3 rounded-full bg-ridge-yellow px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-ridge-navy">
          {trek.state}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-2xl font-bold leading-tight text-ridge-navy">{trek.name}</h3>
        <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-600">{trek.shortDescription}</p>

        <ul className="mt-4 space-y-1.5 text-[13px] text-slate-600">
          <li><i className="fa-solid fa-signal w-5 text-ridge-yellow-dark" aria-hidden="true" />{trek.difficulty}</li>
          <li><i className="fa-regular fa-calendar w-5 text-ridge-yellow-dark" aria-hidden="true" />{trek.bestSeason}</li>
        </ul>

        <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-4">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">From</p>
            <p className="text-lg font-bold text-ridge-navy">{trek.startingPrice ? `₹${trek.startingPrice}` : 'On Request'}</p>
          </div>
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ridge-yellow text-ridge-navy transition group-hover:translate-x-1">
            <i className="fa-solid fa-arrow-right" aria-hidden="true" />
          </span>
        </div>
      </div>
    </Link>
  );
}

export default TrekCard;
