'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import OfferModal from './OfferModal';

const WHATSAPP_LINK =
  'https://wa.me/919682300904?text=Hi%2C%20I%20want%20to%20book%20a%20Kashmir%20tour%20package.%20Please%20send%20me%20the%20best%20package%20details.';
const CALL_LINK = 'tel:+919682300904';

const trustItems = [
  { icon: <i className="fas fa-star" />, label: '4.8/5 Google Rating' },
  { icon: <i className="fas fa-user-check" />, label: '700+ Happy Travelers' },
  { icon: <i className="fas fa-map-marker-alt" />, label: 'Based in Kashmir' },
  { icon: <i className="fas fa-shield-halved" />, label: 'No Hidden Charges' },
  { icon: <i className="fas fa-headset" />, label: '24×7 Support' },
];

const reviews = [
  {
    text: 'Truly the best Kashmir tour! From Houseboat in Srinagar to snow in Gulmarg, everything was handled professionally by Bilal and team.',
    author: 'Anmol Rawat',
    location: 'Noida (NCR)',
    date: '2 weeks ago',
    initial: 'A',
  },
  {
    text: 'Very reliable and well-managed trip. The driver was so humble and a great guide. Loved the stay in Pahalgam. Worth every penny!',
    author: 'Meenakshi Iyer',
    location: 'Bangalore',
    date: '1 month ago',
    initial: 'M',
  },
  {
    text: 'Best price guaranteed indeed! We compared with 3 other agencies but Honor Tour gave the best itinerary and premium hotels.',
    author: 'Dr. Sandeep Singh',
    location: 'Chandigarh',
    date: '3 weeks ago',
    initial: 'S',
  },
  {
    text: 'Honeymoon special package was a dream. The decorations in the houseboat were beautiful. Highly recommend Honor Tour & Travels.',
    author: 'Pooja & Rahul',
    location: 'Mumbai',
    date: '2 months ago',
    initial: 'P',
  },
];

export default function Hero() {
  const tickerRef = useRef(null);
  const [activeReview, setActiveReview] = useState(0);
  const [reviewsState, setReviewsState] = useState(reviews);
  const [timeLeft, setTimeLeft] = useState(900); // 15 minutes in seconds
  const [showOfferModal, setShowOfferModal] = useState(false);
  const [activeBanner, setActiveBanner] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const banners = [
    '/banner-1.jpeg',
    '/banner-2.jpeg',
    '/banner-3.jpeg',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTransitionEnabled(true);
      setActiveBanner((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 900));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    const el = tickerRef.current;
    if (!el) return;
    // Clone for seamless loop
    el.innerHTML += el.innerHTML;
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveReview((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[94vh] md:min-h-screen flex flex-col"
      aria-label="Hero – Kashmir Tour Packages"
    >
      {/* Premium Gradient Mesh Background */}
      <div className="absolute inset-0 z-0 bg-[#020617] overflow-hidden">
        {/* Animated Gradient Orbs */}
        <div className="absolute -top-[10%] -left-[10%] w-[700px] h-[700px] rounded-full bg-blue-600/20 blur-[120px] animate-[pulse_8s_infinite]" />
        <div className="absolute top-[20%] -right-[5%] w-[500px] h-[500px] rounded-full bg-indigo-600/15 blur-[100px] animate-[pulse_10s_infinite_1s]" />
        <div className="absolute -bottom-[10%] left-[20%] w-[600px] h-[600px] rounded-full bg-teal-500/10 blur-[120px] animate-[pulse_12s_infinite_2s]" />

        {/* Subtle Grain Texture */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Darkening Overlay for Content Clarity */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 via-transparent to-[#020617]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-2 md:px-12 pt-16 md:pt-24 pb-2 md:pb-5 max-w-7xl mx-auto w-full">
        {/* Top Section: Text + Vertical Image Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-4 md:mb-8">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col">
            {/* Badge & Rotating Discount Circle */}
            <div className="flex items-center gap-4 mb-5 animate-[fadeUp_0.4s_ease_forwards]">
              <div className="inline-flex items-center gap-2 bg-orange-600/20 backdrop-blur-md border border-orange-500/30 text-orange-100 text-[10px] font-bold px-4 py-2 rounded-full tracking-wider uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
                Special Offer Ends in: <span className="text-white ml-1 font-mono text-[12px]">{formatTime(timeLeft)}</span>
              </div>

              {/* Rotating 30% OFF Circle */}
              <div className="relative w-12 h-12 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-600 rounded-full animate-[spin_8s_linear_infinite] shadow-[0_0_20px_rgba(239,68,68,0.3)]">
                  <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full opacity-50" />
                </div>
                <div className="relative z-10 flex flex-col items-center leading-none text-white select-none">
                  <span className="text-[13px] font-black font-display tracking-tight">30%</span>
                  <span className="text-[7px] font-bold uppercase">Off</span>
                </div>
              </div>
            </div>

            {/* Headline */}
            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4 animate-[fadeUp_0.5s_0.1s_ease_both]">
              Best Kashmir Tour Packages<br />
              <span className="text-white">for Holiday & Trip in 2026</span>
              <br />
              <span className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-100/80">
                – <span className="text-gold-400">#1 Kashmir Travel Agency</span> with 700+ <span className="text-orange-500 font-bold">Verified Google Reviews</span>
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-blue-100/70 text-xs sm:text-sm md:text-base max-w-xl mb-6 leading-relaxed animate-[fadeUp_0.5s_0.2s_ease_both]">
              Book yours customized <strong className="text-white">Kashmir Holiday Packages</strong>{' '}
              with the <strong className="text-gold-400">Best Travel Agency for Kashmir Tour</strong>. 
              We are specialized local tour operators for Srinagar, Gulmarg & Pahalgam vacation trips.
            </p>

            {/* Single Premium AI Button (Left Aligned, Normal Width) */}
            <div className="flex mb-6 animate-[fadeUp_0.5s_0.3s_ease_both]">
              <button
                onClick={() => window.dispatchEvent(new CustomEvent('openAIModal'))}
                className="btn-orange-shimmer flex items-center gap-2.5 text-black font-bold text-[13px] px-6 py-3 rounded-2xl shadow-2xl group transition-all hover:scale-[1.01] active:scale-95 w-fit"
              >
                <div className="flex items-center gap-2.5 text-left">
                  <i className="fas fa-wand-magic-sparkles text-lg" />
                  <div className="flex flex-col items-start leading-none text-black">
                    <span className="text-[8px] uppercase tracking-[0.2em] opacity-80 mb-1 font-black">Smart Trip Planner</span>
                    <span className="drop-shadow-sm font-sans tracking-tight">Generate AI Itinerary & Quotation</span>
                  </div>
                </div>
              </button>
            </div>

            {/* Micro trust indicators */}
            <div className="hidden md:flex items-center gap-2.5 whitespace-nowrap overflow-x-auto invisible-scrollbar pb-2 text-blue-200/60 text-[9px] sm:text-[11px] animate-[fadeUp_0.5s_0.4s_ease_both]">
              <span className="hidden md:flex items-center gap-1">
                <i className="fas fa-bolt-lightning text-blue-400" /> Free Itinerary in 10 Minutes
              </span>
              <span className="hidden md:inline-block opacity-30">·</span>
              <span className="hidden md:flex items-center gap-1">
                <i className="fas fa-tags text-blue-400" /> Best Price Guaranteed
              </span>
              <span className="hidden md:inline-block opacity-30">·</span>
              <span className="text-gold-400/80 font-bold uppercase tracking-wider text-[8px] sm:text-[10px] bg-white/5 px-2 py-0.5 rounded-full border border-white/10 flex items-center gap-1">
                <i className="fas fa-fire-flame-curved text-orange-400" /> Limited Slots Available
              </span>
            </div>
          </div>

          {/* Right Column: Vertical Image */}
          <div className="lg:col-span-5 hidden lg:block relative group p-2">
            <div className="absolute -inset-1 bg-gradient-to-br from-gold-500/30 to-blue-500/20 blur-2xl opacity-40 rounded-[3.5rem]" />
            <div className="relative rounded-[2.5rem] overflow-hidden border-[6px] border-white/10 shadow-3xl aspect-[3/2.5] animate-float">
              <Image
                src="/hero-banner.jpg"
                alt="Vertical view of Kashmir mountains"
                fill
                priority
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-8 right-8">
                <p className="text-gold-400 text-[9px] font-black uppercase tracking-[0.2em] mb-1.5">Paradise on Earth</p>
                <h3 className="text-white font-display text-2xl font-bold leading-tight">Explore the Beauty<br />of Kashmir Valley</h3>
              </div>
            </div>

            {/* Decoration card */}
            <div className="absolute -bottom-4 -left-4 bg-white/20 backdrop-blur-2xl border border-white/30 p-4 rounded-3xl shadow-2xl animate-float-delayed">
              <p className="text-white text-2xl font-black leading-none mb-1">10k+</p>
              <p className="text-blue-100/70 text-[8px] font-bold uppercase tracking-widest">Happy Travelers</p>
            </div>
          </div>
        </div>

        {/* Bottom Review Carousel Row (Continuous Infinite Left Scroll) */}
        <div className="relative overflow-hidden w-full animate-[fadeUp_0.5s_0.6s_ease_both]">
          <div className="flex items-center gap-4 mb-4 ml-1">
            <p className="text-white/40 text-[8px] font-black uppercase tracking-[0.3em]">Verified Google Reviews</p>
            <div className="h-px flex-1 bg-white/5 shadow-inner" />
          </div>

          <div className="flex gap-4 sm:gap-6 animate-marquee w-fit hover:[animation-play-state:paused]">
            {[...reviewsState, ...reviewsState, ...reviewsState].map((review, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-[280px] sm:w-[320px] flex items-start gap-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-3 shadow-2xl hover:bg-white/10 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-700 flex items-center justify-center text-white font-black text-lg flex-shrink-0 shadow-lg ring-2 ring-white/10 group-hover:scale-105 transition-transform">
                  {review.initial}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex gap-0.5 text-gold-400 text-[10px]">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="fas fa-star" />
                      ))}
                    </div>
                    <div className="flex items-center gap-1.5 bg-white/10 px-2 py-0.5 rounded-full border border-white/5">
                      <i className="fab fa-google text-[8px] text-blue-400" />
                      <span className="text-[7px] font-black text-[#34A853] uppercase tracking-tighter">Verified</span>
                    </div>
                  </div>
                  <p className="text-white text-[11px] leading-relaxed line-clamp-2 opacity-95 mb-1 font-medium">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <div className="flex items-center justify-between border-t border-white/10 pt-2.5">
                    <div className="flex flex-col">
                      <p className="text-white font-bold text-[11px] leading-none mb-1">{review.author}</p>
                      <div className="flex items-center gap-2 opacity-60">
                        <span className="text-[9px] text-blue-200">{review.location}</span>
                        <span className="w-0.5 h-0.5 rounded-full bg-white/30" />
                        <span className="text-[9px] text-white/50">{review.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile-only Premium Offer Slider (Auto-Height Banners) */}
          <div className="md:hidden mx-5 mt-4 relative overflow-hidden cursor-pointer group">
            <div
              className={`flex w-full h-full ${transitionEnabled ? 'transition-transform duration-700 ease-in-out' : ''}`}
              style={{ transform: `translateX(-${activeBanner * 100}%)` }}
              onClick={() => setShowOfferModal(true)}
            >
              {banners.map((img, idx) => (
                <div key={idx} className="flex-shrink-0 w-full h-full">
                  <img src={img} alt={`Special Offer ${idx + 1}`} className="w-full h-auto rounded-md block" />
                </div>
              ))}
            </div>
            {/* Nav Arrows (Reduced visual weight) */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setTransitionEnabled(true);
                setActiveBanner((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
              }}
              className="absolute inset-y-0 left-0 flex items-center px-1 opacity-10"
            >
              <i className="fas fa-chevron-left text-xs text-white" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setTransitionEnabled(true);
                setActiveBanner((prev) => (prev + 1) % banners.length);
              }}
              className="absolute inset-y-0 right-0 flex items-center px-1 opacity-10"
            >
              <i className="fas fa-chevron-right text-xs text-white" />
            </button>
          </div>
        </div>
      </div>

      {showOfferModal && (
        <OfferModal isOpen={showOfferModal} onClose={() => setShowOfferModal(false)} />
      )}

      {/* Trust ticker bar */}
      {/* <div className="relative z-10 bg-white/10 backdrop-blur border-t border-white/15 overflow-hidden py-2">
        <div className="flex overflow-hidden">
          <div ref={tickerRef} className="trust-ticker flex gap-10 pr-10">
            {[...trustItems, ...trustItems].map((item, i) => (
              <span key={i} className="flex items-center gap-2 text-white text-[11px] whitespace-nowrap">
                <span className="text-gold-400">{item.icon}</span>
                {item.label}
              </span>
            ))}
          </div>
        </div>
      </div> */}
    </section>
  );
}
