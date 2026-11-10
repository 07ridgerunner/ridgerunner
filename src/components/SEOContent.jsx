'use client';

export default function SEOContent() {
  return (
    <section className="py-6 px-4 bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto">
        <div className="bg-slate-50/80 rounded-[2.5rem] p-8 md:p-12 border border-slate-100 shadow-sm relative overflow-hidden">
          {/* Subtle Decorative Element */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-saffron-500/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl" />

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-1px bg-saffron-500" />
              <h2 className="text-kashmir-900 font-display text-xl md:text-2xl font-bold uppercase tracking-wide">
                Best Travel Agency for Kashmir Tour
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed text-sm md:text-base text-justify md:text-left">
              Plan yours perfect <span className="text-kashmir-950 font-bold">Kashmir Vacation</span> with <span className="text-kashmir-900 font-bold">Honor Tour &amp; Travels</span>, the best travel agency for Kashmir tours. We are recognized as leading <span className="text-kashmir-950 font-bold">Kashmir Tour Operators</span> delivering premium <span className="text-kashmir-900 font-bold">Kashmir Holiday Packages</span> at the best price. Whether you&apos;re looking for a romantic Kashmir tour package for couple, a family holiday, or <span className="text-kashmir-900 font-bold">Kashmir Group Tour Packages</span>, we offer customized itineraries covering Srinagar, Gulmarg, and Pahalgam. 
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <p className="text-gray-600 leading-relaxed text-sm md:text-base text-justify md:text-left">
                Get the best Kashmir trip cost with no hidden charges and 24/7 support. We take pride in our &quot;Guest First&quot; approach, ensuring every detail of your journey is handled with care and precision.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base font-medium border-l-2 border-saffron-200 pl-4 bg-saffron-50/30 py-2 rounded-r-xl">
                Travelers from <span className="text-kashmir-950 font-bold">Delhi, Mumbai, Bangalore, Hyderabad, Chennai, Kolkata, Pune, and Ahmedabad</span> trust us for seamless and memorable Kashmir travel experiences.
              </p>
            </div>

            {/* SEO Keyword Strip */}
            <div className="mt-8 pt-6 border-t border-slate-200/60">
              <p className="text-[10px] md:text-[11px] font-bold text-gray-500 uppercase tracking-[0.15em] leading-relaxed text-center sm:text-left">
                <span className="text-saffron-600 mr-2">Top Searched:</span>
                KASHMIR TRIP PACKAGE FROM DELHI <span className="mx-1.5 md:mx-2.5 text-slate-300 font-normal">|</span> 
                BEST KASHMIR TOUR PACKAGES <span className="mx-1.5 md:mx-2.5 text-slate-300 font-normal">|</span> 
                SRINAGAR TOUR PACKAGES <span className="mx-1.5 md:mx-2.5 text-slate-300 font-normal">|</span> 
                KASHMIR TOURS AND TRAVELS <span className="mx-1.5 md:mx-2.5 text-slate-300 font-normal">|</span> 
                KASHMIR LUXURY TOUR PACKAGES
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
