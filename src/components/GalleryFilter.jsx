'use client';

import { useState } from 'react';

export function GalleryFilter({ items }) {
  const cats = ['All', ...Array.from(new Set(items.map((i) => i.cat)))];
  const [active, setActive] = useState('All');
  const shown = items.filter((i) => active === 'All' || i.cat === active);

  return (
    <>
      <div className="mt-8 flex flex-wrap justify-center gap-2">
        {cats.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setActive(c)}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
              active === c ? 'bg-ridge-navy text-white' : 'bg-white text-ridge-navy ring-1 ring-slate-200 hover:ring-ridge-yellow'
            }`}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="mt-8 grid auto-rows-[150px] grid-cols-2 gap-3 sm:auto-rows-[190px] md:grid-cols-4 md:gap-4">
        {shown.map((item, i) => (
          <div key={item.src} className={`overflow-hidden rounded-2xl ${i === 0 ? 'col-span-2 row-span-2' : ''}`}>
            <div
              role="img"
              aria-label={item.cat}
              className="h-full w-full bg-cover bg-center transition duration-700 hover:scale-110"
              style={{ backgroundImage: `url("${item.src}")` }}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default GalleryFilter;
