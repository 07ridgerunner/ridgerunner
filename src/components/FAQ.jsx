'use client';
import { useState, useEffect, useRef } from 'react';

const faqs = [
  {
    q: 'What is the best time to visit Kashmir?',
    a: 'Kashmir is beautiful year-round. March–June is peak spring/summer — tulips bloom, Gulmarg is perfect for trekking. July–September is lush green. December–February means snow & skiing. Most Kashmir holiday packages are booked for April–October.',
  },
  {
    q: 'How much does a Kashmir tour package cost from Delhi or Surat?',
    a: 'Kashmir trip cost depends on duration and hotel category. Budget packages start from ₹9,999/person (4N5D). We offer customized Kashmir trip packages from Delhi, Surat, Mumbai, and Bangalore starting from Srinagar arrival. Contact us for the best price for Kashmir tour.',
  },
  {
    q: 'Do you provide Kashmir tour packages from Srinagar directly?',
    a: 'Yes, we are local tour operators based in Srinagar and provide Kashmir tour packages starting right from your arrival at Srinagar airport. This is the most popular choice for travelers looking for a reliable local Kashmir travel agency.',
  },
  {
    q: 'How safe is Kashmir for a family or couple vacation?',
    a: 'Kashmir is 100% safe. We provide specialized Kashmir tour packages for family and couple vacations, ensuring premium stay and 24/7 on-ground assistance from our local experts.',
  },
  {
    q: 'What are the top locations covered in a 4-night Srinagar package?',
    a: 'A typical 4-night Srinagar package (5 Days) covers Srinagar (Dal Lake), Sonmarg, Gulmarg, and Pahalgam. This is the ideal duration for a short Kashmir vacation or holiday trip.',
  },
  {
    q: 'Can you offer the best price for Gulmarg tour packages?',
    a: 'Yes, being local experts, we offer the best kashmir tour packages and specialized Gulmarg packages with guaranteed best prices and zero hidden charges.',
  },
];

function FAQItem({ q, a, index }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`border rounded-2xl overflow-hidden transition-all duration-200 ${
        open ? 'border-kashmir-300 shadow-md' : 'border-gray-100'
      }`}
    >
      <button
        className="w-full flex items-center justify-between gap-4 px-4 py-3.5 text-left bg-white hover:bg-blue-50/40 transition-colors"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-semibold text-kashmir-900 text-sm sm:text-base leading-snug">
          <span className="text-kashmir-400 font-bold mr-2">Q{index + 1}.</span>
          {q}
        </span>
        <span
          className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
            open
              ? 'bg-kashmir-600 border-kashmir-600 text-white rotate-45'
              : 'border-kashmir-300 text-kashmir-500'
          }`}
        >
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>

      {open && (
        <div className="px-5 pb-4 bg-blue-50/30 border-t border-kashmir-100">
          <p className="text-gray-600 text-sm leading-relaxed pt-3">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
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
    <section ref={sectionRef} className="py-16 px-4 bg-white" id="faq">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8 reveal">
          <p className="text-kashmir-500 text-sm font-semibold tracking-widest uppercase mb-2">
            Frequently Asked Questions
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-kashmir-950 mb-4">
            Kashmir Tour – Common Questions
          </h2>
          <div className="section-line mx-auto" />
        </div>

        {/* Schema markup for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faqs.map((f) => ({
                '@type': 'Question',
                name: f.q,
                acceptedAnswer: { '@type': 'Answer', text: f.a },
              })),
            }),
          }}
        />

        <div className="space-y-3 reveal">
          {faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
          ))}
        </div>

        <div className="mt-8 text-center reveal">
          <p className="text-gray-500 text-sm mb-4">
            Have a question not listed here? Ask us directly on WhatsApp — we reply in minutes.
          </p>
          <a
            href="https://wa.me/919682300904?text=Hi%2C%20I%20have%20a%20question%20about%20Kashmir%20tour%20packages"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-saffron-500 hover:bg-saffron-600 text-white font-semibold px-6 py-3 rounded-xl transition-all shadow hover:shadow-saffron-200"
          >
            <i className="fab fa-whatsapp text-lg" />
            Ask on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
