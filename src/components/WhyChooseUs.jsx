'use client';
import { useEffect, useRef } from 'react';

const reasons = [
  {
    icon: <i className="fas fa-map-marker-alt" />,
    title: 'Born & Based in Kashmir',
    desc: 'We\'re not middlemen. Our team lives in Kashmir — giving you insider access, real-time updates, and on-ground support the moment you land.',
  },
  {
    icon: <i className="fas fa-star" />,
    title: '4.8★ Rating – 700+ Verified Reviews',
    desc: 'Real reviews from real travelers across Delhi, Noida, Gurgaon & Faridabad. Our reputation is built on genuine experiences, not paid placements.',
  },
  {
    icon: <i className="fas fa-bullseye" />,
    title: '100% Customized Itineraries',
    desc: 'No copy-paste packages. Every Kashmir tour is crafted around your budget, travel dates, group size, and preferences — honeymoon, family, or group.',
  },
  {
    icon: <i className="fas fa-tags" />,
    title: 'Best Price Guarantee',
    desc: 'Transparent pricing — no hidden charges, no surprise add-ons. What you see is what you pay. We match any lower price from a comparable package.',
  },
  {
    icon: <i className="fas fa-shield-halved" />,
    title: 'Full Safety & Security',
    desc: 'Emergency contacts, verified vehicles, licensed guides, and real-time support. Your safety in Kashmir is our highest priority.',
  },
  {
    icon: <i className="fas fa-bolt-lightning" />,
    title: 'Itinerary in 10 Minutes',
    desc: 'WhatsApp us right now and receive a custom Kashmir tour itinerary with pricing within 10 minutes. No calls needed to get started.',
  },
];

export default function WhyChooseUs() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.12 }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-10 px-3 bg-white" id="why-us">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 reveal">
          <p className="text-kashmir-500 text-sm font-semibold tracking-widest uppercase mb-2">
            Why 700+ Travelers Chose Us
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-kashmir-950 mb-4">
            The Kashmir Experts You Can Trust
          </h2>
          <div className="section-line mx-auto mb-4" />
          <p className="text-gray-500 max-w-xl mx-auto text-base">
            We&apos;re a Kashmir-based travel agency — not a Delhi operator. That makes all the difference.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <div
              key={i}
              className="reveal p-[1.5px] rounded-[1.5rem] bg-gradient-to-br from-blue-200 via-slate-100 to-saffron-300 hover:from-saffron-400 hover:to-orange-500 transition-all duration-500 shadow-sm hover:shadow-xl group"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="bg-white rounded-[calc(1.5rem-1.5px)] p-5 h-full flex flex-col transition-all duration-300 group-hover:bg-white/95">
                <div className="w-12 h-12 rounded-xl bg-kashmir-50 flex items-center justify-center text-kashmir-600 text-2xl mb-4 group-hover:scale-110 transition-transform shadow-inner border border-kashmir-100/50">
                  {r.icon}
                </div>
                <h3 className="font-display text-xl font-bold text-kashmir-900 mb-3 group-hover:text-kashmir-950 transition-colors">
                  {r.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {r.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
