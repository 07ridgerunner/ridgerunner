'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import OfferModal from './OfferModal';

const WHATSAPP_BASE =
  'https://wa.me/919682300904?text=Hi%2C%20I%27m%20interested%20in%20the%20';

const packages = [
  {
    tag: <span><i className="fas fa-fire mr-1" /> Best Seller</span>,
    tagColor: 'bg-saffron-500',
    name: 'Kashmir Holiday Package for Family',
    subtitle: 'Srinagar · Gulmarg · Sonmarg · Pahalgam | Family Special Vacation',
    nights: '4 Nights / 5 Days',
    oldPrice: '₹12,999',
    price: '₹9,999',
    priceNote: 'Best price for family tour',
    image: '/Family-Kashmir-Package.webp',
    includes: ['Hotel + Houseboat Stay', 'Daily Breakfast & Dinner', 'Private Transport', 'Shikara Ride – Dal Lake'],
    waMsg: 'Kashmir+Family+Tour+(4N5D)',
  },
  {
    tag: <span><i className="fas fa-heart mr-1" /> Trending</span>,
    tagColor: 'bg-pink-500',
    name: 'Kashmir Tour Package for Couple Price',
    subtitle: 'Srinagar · Houseboat · Pahalgam · Gulmarg | 4 Nights Special',
    nights: '4 Nights / 5 Days',
    oldPrice: '₹14,500',
    price: '₹11,500',
    priceNote: 'per couple (Best Price)',
    image: '/honeymoon-package.webp',
    includes: ['Luxury Houseboat (1 night)', 'Romantic Candlelight Dinner', 'Shikara Ride at Sunset', 'Srinagar Sightseeing', 'Gulmarg Day Trip'],
    waMsg: 'Kashmir+Honeymoon+Package+(4N5D)',
  },
  {
    tag: <span><i className="fas fa-gem mr-1" /> Luxury Elite</span>,
    tagColor: 'bg-indigo-600',
    name: 'Kashmir Luxury Tour Packages',
    subtitle: 'Srinagar · Pahalgam · Gulmarg | Premium Holiday Experience',
    nights: '3 Nights / 4 Days',
    oldPrice: '₹24,999',
    price: '₹19,999',
    priceNote: 'Luxury Trip Selection',
    image: '/Premium-Kashmir-Retreat.webp',
    includes: ['Premium Houseboats', 'Private Luxury Transport', 'Pahalgam Valley Walk', 'Gulmarg Sightseeing & Stay', 'Mughal Gardens Visit'],
    waMsg: 'Luxury+Kashmir+Tour+Package+(3N4D)',
  },
  {
    tag: <span><i className="fas fa-users mr-1" /> Group Special</span>,
    tagColor: 'bg-kashmir-600',
    name: 'Kashmir Group Tour Packages',
    subtitle: 'Srinagar · Sonmarg · Pahalgam · Gulmarg | Friends & Groups',
    nights: '5 Nights / 6 Days',
    oldPrice: '₹19,999',
    price: '₹16,500',
    priceNote: 'per person (Group Discount)',
    image: '/group-tour.webp',
    includes: ['3 Star Hotel Accommodation', 'Daily Breakfast & Dinner', 'Sonamarg Sightseeing & Stay in Houseboat', 'Gulmarg & Drung Waterfall Visit', 'Guided Tours Included'],
    waMsg: 'Kashmir+Group+Tour+(5N6D)',
  },
  {
    tag: <span> Gulmarg Focus</span>,
    tagColor: 'bg-orange-500',
    name: 'Gulmarg Tour Packages Special',
    subtitle: 'Gulmarg · Srinagar · Pahalgam | 4 Nights Vacation',
    nights: '4 Nights / 5 Days',
    oldPrice: '₹18,500',
    price: '₹14,999',
    priceNote: 'Best Gulmarg Trip Selection',
    image: '/Classic-Kashmir-Package.jpg',
    includes: ['Gulmarg Gondola Rides', 'Srinagar Sightseeing', 'Houseboat Experience', 'Pahalgam Valley Walk'],
    waMsg: 'Gulmarg+Tour+Packages+(4N5D)',
  },
  {
    tag: <span><i className="fas fa-plane mr-1" /> From Other Cities</span>,
    tagColor: 'bg-amber-600',
    name: 'Kashmir Trip Package from Delhi/Surat',
    subtitle: 'Kashmir Tour Packages from Srinagar Arrival',
    nights: '4 Nights / 5 Days',
    oldPrice: '₹15,500',
    price: '₹12,500',
    priceNote: 'per traveler',
    image: '/vaishno-devi.webp',
    includes: ['Pickup from Srinagar Airport', '4 Nights Luxury Hotels', 'All Sightseeing Included', 'Local Guide Support'],
    waMsg: 'Kashmir+Trip+Package+from+Delhi+(4N5D)',
  },
];

export default function Packages() {
  const sectionRef = useRef(null);
  const [showInquiryModal, setShowInquiryModal] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-8 px-3 bg-gradient-to-b from-slate-50 to-blue-50/40" id="packages">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-3 reveal">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-kashmir-950 mb-1">
            Best Kashmir Holiday & Trip Packages
          </h2>
          <div className="section-line mx-auto mb-2" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {packages.map((pkg, i) => (
            <div
              key={i}
              className="package-card reveal bg-white rounded-xl overflow-hidden shadow-md flex flex-col"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={pkg.image}
                  alt={pkg.name}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className={`absolute top-3 left-3 ${pkg.tagColor} text-white text-[11px] font-bold px-2.5 py-1 rounded-full`}>
                  {pkg.tag}
                </span>
                <span className="absolute bottom-3 left-3 text-white text-xs font-semibold bg-black/40 px-2 py-1 rounded-lg">
                  {pkg.nights}
                </span>
              </div>

              {/* Body */}
              <div className="p-2.5 flex flex-col flex-1">
                <h3 className="font-display text-xl font-bold text-kashmir-900 mb-0.5">{pkg.name}</h3>
                <p className="text-kashmir-500 text-xs font-medium mb-3">{pkg.subtitle}</p>

                <ul className="space-y-1.5 mb-4">
                  {pkg.includes.slice(0, 4).map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-gray-600 text-xs">
                      <i className="fas fa-check text-saffron-500 mt-1 flex-shrink-0" />
                      <span className="flex-1">
                        {item}
                        {j === 3 && pkg.includes.length > 4 && (
                          <button
                            onClick={() => setShowInquiryModal(true)}
                            className="text-saffron-600 font-bold ml-1.5 hover:underline whitespace-nowrap"
                          >
                            + {pkg.includes.length - 4} more
                          </button>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <div className="mb-4">
                    <div className="flex items-baseline gap-2 flex-wrap">
                      <span className="text-gray-400 text-sm line-through decoration-saffron-500/50">{pkg.oldPrice}</span>
                      <span className="text-kashmir-900 font-bold text-2xl">{pkg.price}</span>
                      <span className="text-gray-400 text-[10px]">{pkg.priceNote}</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href="tel:+919682300904"
                      className="flex items-center justify-center bg-gradient-to-br from-blue-950 via-[#020617] to-slate-900 hover:from-blue-900 hover:to-slate-800 text-white font-bold text-[10px] uppercase tracking-wider py-3 rounded transition-all hover:shadow-lg border border-white/5"
                    >
                      Call Now
                    </a>
                    <button
                      onClick={() => setShowInquiryModal(true)}
                      className="flex items-center justify-center bg-saffron-500 hover:bg-saffron-600 text-white font-bold text-[10px] uppercase tracking-wider py-3 rounded transition-all hover:shadow-lg"
                    >
                      Inquiry Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {showInquiryModal && (
          <OfferModal isOpen={showInquiryModal} onClose={() => setShowInquiryModal(false)} />
        )}

        {/* Below cards CTA */}
        <div className="text-center mt-12 reveal">
          <p className="text-gray-500 text-sm mb-5">
            Need a custom package? We build itineraries around your budget & dates.
          </p>
          <a
            href="tel:+919682300904"
            className="group relative inline-flex items-center gap-2.5 bg-gradient-to-r from-saffron-500 to-orange-600 text-white font-black px-8 py-3.5 sm:px-12 sm:py-5 rounded-xl sm:rounded-2xl shadow-[0_10px_20px_-5px_rgba(249,115,22,0.4)] text-base sm:text-lg transition-all duration-300 hover:shadow-[0_20px_40px_-5px_rgba(249,115,22,0.5)] hover:-translate-y-1 hover:scale-[1.02] border-t border-white/20"
          >
            <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <i className="fas fa-phone-alt animate-pulse" />
            <span className="relative">Call for Custom Package</span>
          </a>
        </div>
      </div>
    </section>
  );
}
