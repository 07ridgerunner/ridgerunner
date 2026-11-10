'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

const destinations = [
  {
    name: 'Srinagar',
    tagline: 'The Crown of Kashmir',
    desc: 'Dal Lake houseboats, Mughal gardens, the iconic Jhelum river, and vibrant bazaars — Srinagar is the soul of every Kashmir tour package.',
    image: '/srinagar-destination.avif',
    highlights: ['Dal Lake & Shikara Ride', 'Shalimar Bagh Garden', 'Shankaracharya Temple', 'Lal Chowk & Local Markets'],
    badge: { icon: <i className="fas fa-water mr-1" />, label: 'Must Visit' },
  },
  {
    name: 'Gulmarg',
    tagline: 'The Meadow of Flowers',
    desc: 'Asia\'s highest gondola, snow-covered slopes, and meadows in full bloom — Gulmarg is Kashmir\'s adventure capital for every season.',
    image: '/gulmarg-destination.jpg',
    highlights: ['Gondola Phase I & II', 'Skiing in Winter', 'Alpather Lake Trek', 'Golf Course (Asia\'s Highest)'],
    badge: { icon: <i className="fas fa-snowflake mr-1" />, label: 'Adventure Hub' },
  },
  {
    name: 'Pahalgam',
    tagline: 'The Valley of Shepherds',
    desc: 'Pine forests, crystal rivers, and serene meadows — Pahalgam is where Kashmir honeymoon packages come to life and families find their peace.',
    image: '/pahalgam-destination.webp',
    highlights: ['Betaab Valley', 'Aru Valley Trek', 'Baisaran Mini Switzerland', 'Lidder River Picnic'],
    badge: { icon: <i className="fas fa-heart mr-1" />, label: 'Honeymoon Hotspot' },
  },
  {
    name: 'Sonamarg',
    tagline: 'Meadow of Gold',
    desc: 'Thajiwas glacier, alpine meadows, and a gateway to the Amarnath Yatra — Sonamarg delivers Kashmir\'s most dramatic landscapes.',
    image: '/sonamarg-destination.jpg',
    highlights: ['Thajiwas Glacier', 'Nilagrad River', 'Horse Riding on Meadows', 'Amarnath Yatra Base'],
    badge: { icon: <i className="fas fa-mountain mr-1" />, label: 'Scenic Escape' },
  },
];

export default function Destinations() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.08 }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 px-4 bg-white" id="destinations">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 reveal">
          <p className="text-kashmir-500 text-sm font-semibold tracking-widest uppercase mb-2">
            Srinagar · Gulmarg · Pahalgam · Sonamarg
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-kashmir-950 mb-4">
            Destinations We Cover
          </h2>
          <div className="section-line mx-auto mb-4" />
          <p className="text-gray-500 max-w-lg mx-auto text-base">
            Every Kashmir trip covers the best destinations, curated for your travel style.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {destinations.map((dest, i) => (
            <div
              key={i}
              className="dest-card reveal group rounded-3xl overflow-hidden shadow-md bg-white border border-gray-100 hover:shadow-2xl transition-all duration-300"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={dest.image}
                  alt={`${dest.name} Kashmir`}
                  fill
                  className="dest-img object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <span className="absolute top-4 left-4 bg-white/20 backdrop-blur border border-white/30 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {dest.badge.icon} {dest.badge.label}
                </span>
                <div className="absolute bottom-4 left-4">
                  <h3 className="font-display text-2xl font-bold text-white">{dest.name}</h3>
                  <p className="text-blue-200 text-sm">{dest.tagline}</p>
                </div>
              </div>

              <div className="p-4">
                <p className="text-gray-500 text-sm mb-4 leading-relaxed">{dest.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {dest.highlights.map((h, j) => (
                    <span key={j} className="text-xs bg-kashmir-50 text-kashmir-700 px-2.5 py-1 rounded-full font-medium border border-kashmir-100">
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
