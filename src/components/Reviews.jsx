'use client';
import { useEffect, useRef } from 'react';

const reviews = [
  {
    name: 'Rahul & Priya Sharma',
    location: 'Delhi',
    text: 'Best Kashmir honeymoon trip we could have asked for! Honor Tour arranged everything perfectly — houseboat, Gulmarg gondola, Pahalgam. Zero stress, zero hidden charges. Highly recommend!',
    rating: 5,
    avatar: 'R',
    color: 'from-blue-500 to-blue-700',
    package: 'Honeymoon Package · 6N7D',
  },
  {
    name: 'Amit Verma',
    location: 'Noida',
    text: 'Took the family package with 4 members. Kids had a blast at Gulmarg and Betaab Valley. Our guide knew every hidden spot. Will definitely book Kashmir trip again through Honor Tour!',
    rating: 5,
    avatar: 'A',
    color: 'from-kashmir-500 to-kashmir-700',
    package: 'Family Package · 7N8D',
  },
  {
    name: 'Sunita Mehta',
    location: 'Gurgaon',
    text: 'I was nervous booking a Kashmir trip as a first-timer. Honor Tour answered all my queries on WhatsApp within minutes. The entire trip from Srinagar to Sonamarg was flawless.',
    rating: 5,
    avatar: 'S',
    color: 'from-saffron-500 to-saffron-700',
    package: 'Classic Package · 5N6D',
  },
  {
    name: 'Deepak & Kavita Joshi',
    location: 'Faridabad',
    text: 'Booked last minute and they delivered! Customized our itinerary in under an hour, best price among 5 agencies we contacted. Dal Lake sunrise will stay with us forever.',
    rating: 5,
    avatar: 'D',
    color: 'from-purple-500 to-purple-700',
    package: 'Custom Package · 4N5D',
  },
  {
    name: 'Rohit Agarwal',
    location: 'Delhi NCR',
    text: 'Group of 8 friends — all different preferences. Honor Tour managed everything: adventure for some, relaxation for others. The local guide was phenomenal. Kashmir trip cost was totally worth it.',
    rating: 5,
    avatar: 'R',
    color: 'from-saffron-500 to-orange-600',
    package: 'Group Package · 6N7D',
  },
  {
    name: 'Meena Kapoor',
    location: 'Noida',
    text: 'Senior couple travelling to Kashmir for the first time. Honor Tour made it so comfortable — wheelchair-friendly transfers, hotels close to attractions. Local experts truly means local care.',
    rating: 5,
    avatar: 'M',
    color: 'from-pink-500 to-pink-700',
    package: 'Senior Package · 5N6D',
  },
];

function Stars({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <i key={i} className="fas fa-star text-gold-400 text-[10px]" />
      ))}
    </div>
  );
}

export default function Reviews() {
  const sectionRef = useRef(null);
  const [reviewsData, setReviewsData] = useState(reviews);

  useEffect(() => {
    async function loadReviews() {
       const liveReviews = await fetchGoogleReviews();
       if (liveReviews && liveReviews.length > 0) {
          // Map Google fields to our component fields
          const mappedReviews = liveReviews.map(r => ({
            name: r.author,
            location: 'Verified Traveler',
            text: r.text,
            rating: r.rating,
            avatar: r.initial,
            color: 'from-blue-500 to-indigo-700',
            package: 'Verified Google Review'
          }));
          setReviewsData(mappedReviews);
       }
    }
    loadReviews();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.08 }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="pt-10 pb-20 md:py-20 px-4 bg-gradient-to-b from-blue-50/50 to-white" id="reviews">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 reveal">
          <p className="text-kashmir-500 text-sm font-semibold tracking-widest uppercase mb-2">
            What Travelers Say
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-kashmir-950 mb-4">
            700+ Happy Kashmir Travelers
          </h2>
          <div className="section-line mx-auto mb-4" />
          {/* Overall rating */}
          <div className="inline-flex items-center gap-3 bg-white border border-gold-400/30 rounded-2xl px-5 py-3 shadow-sm mt-2">
            <div>
              <p className="text-4xl font-bold text-kashmir-900 font-display">4.8</p>
              <Stars count={5} />
            </div>
            <div className="text-left">
              <p className="text-gray-700 text-sm font-semibold">Overall Rating</p>
              <p className="text-gray-400 text-xs">Based on 700+ Google reviews</p>
            </div>
          </div>
        </div>

        {/* Review grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviewsData.map((r, i) => (
            <div
              key={i}
              className="review-card reveal rounded-2xl p-5 flex flex-col hover:scale-[1.02] transition-all bg-white border border-blue-50 shadow-sm"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="flex items-start gap-3 mb-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${r.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                  {r.avatar}
                </div>
                <div>
                  <p className="font-semibold text-kashmir-900 text-sm">{r.name}</p>
                  <p className="text-gray-400 text-xs">{r.location}</p>
                </div>
                <div className="ml-auto">
                  <Stars count={r.rating} />
                </div>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-3 flex-1">
                &ldquo;{r.text}&rdquo;
              </p>

              <div className="flex items-center justify-between mt-auto pt-3 border-t border-blue-50">
                <span className="text-kashmir-500 text-xs font-medium bg-kashmir-50 px-2 py-1 rounded-full">
                  {r.package}
                </span>
                <span className="text-xs text-gray-400 flex items-center gap-1">
                  <i className="fas fa-check-circle text-blue-500 text-[10px]" />
                  Google Review
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10 reveal">
          <a
            href="https://wa.me/919682300904?text=Hi%2C%20I%20want%20to%20plan%20a%20Kashmir%20tour%20package"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-shimmer text-white font-bold px-8 py-4 rounded-2xl shadow-xl text-base"
          >
            <i className="fab fa-whatsapp text-xl" />
            Join 700+ Happy Travelers – Book Now
          </a>
        </div>
      </div>
    </section>
  );
}
