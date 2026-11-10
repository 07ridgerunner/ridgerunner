'use client';
import { useState, useEffect } from 'react';

const WHATSAPP =
  'https://wa.me/919682300904?text=Hi%2C%20I%20want%20to%20book%20a%20Kashmir%20tour%20package%20urgently';

function CountdownTimer() {
  const [time, setTime] = useState({ h: 6, m: 59, s: 47 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        let { h, m, s } = prev;
        s -= 1;
        if (s < 0) { s = 59; m -= 1; }
        if (m < 0) { m = 59; h -= 1; }
        if (h < 0) { h = 11; m = 59; s = 59; } // reset to keep urgency alive
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const pad = (n) => String(n).padStart(2, '0');

  return (
    <div className="flex items-center gap-2 justify-center">
      {[['h', 'Hours'], ['m', 'Mins'], ['s', 'Secs']].map(([key, label], i) => (
        <div key={key} className="flex items-center gap-2">
          <div className="text-center">
            <div className="bg-white text-kashmir-900 font-bold text-2xl sm:text-3xl w-14 h-14 flex items-center justify-center rounded-xl shadow-lg font-display">
              {pad(time[key])}
            </div>
            <p className="text-blue-200 text-xs mt-1">{label}</p>
          </div>
          {i < 2 && <span className="text-white font-bold text-2xl mb-4">:</span>}
        </div>
      ))}
    </div>
  );
}

export default function Urgency() {
  return (
    <section className="py-10 px-4 urgency-strip" id="urgency">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-white/15 text-white text-xs font-bold px-3 py-1.5 rounded-full mb-5 border border-white/25">
          <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
          <i className="fas fa-fire mr-1" /> HIGH DEMAND SEASON ALERT
        </div>

        <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-3">
          Kashmir Slots Filling Up Fast!
        </h2>
        <p className="text-blue-100 text-base mb-8 max-w-xl mx-auto">
          Peak season for Kashmir tour packages is almost booked. Only limited slots left for
          {' '}<strong>May–September 2026</strong>. Lock your dates now before prices go up.
        </p>

        <CountdownTimer />

        <p className="text-white/60 text-xs mt-3 mb-8">
          Offer countdown — refreshes every session
        </p>

        {/* Urgency points */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {[
            { icon: <i className="fas fa-tag" />, text: 'Prices increase as season approaches' },
            { icon: <i className="fas fa-bed" />, text: 'Best hotels & houseboats book out early' },
            { icon: <i className="fas fa-bolt-lightning" />, text: 'Free itinerary if you enquire today' },
          ].map((item, i) => (
            <div key={i} className="bg-white/10 border border-white/20 rounded-2xl px-4 py-4 text-white text-sm">
              <span className="text-2xl block mb-2">{item.icon}</span>
              {item.text}
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('openInquiryModal'))}
            className="btn-shimmer inline-flex items-center justify-center text-white font-bold text-base px-8 py-4 rounded-2xl shadow-xl w-full sm:w-auto"
          >
            Reserve My Kashmir Slot Now
          </button>
        </div>
      </div>
    </section>
  );
}
