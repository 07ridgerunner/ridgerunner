'use client';
import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { trackEnhancedConversion } from '@/utils/enhancedConversions';
import { getTrackingParams } from '@/utils/travdx';

const PHONE = '+919682300904';

export default function LeadForm() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    month: '',
    people: '',
    budget: '',
    packageType: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.08 }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1. Fire to PHP in background — PHP se email + TravDX CRM dono jaate hain
    fetch('/send-mail.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...form,
        ...getTrackingParams(),
        leadSource: 'Main Lead Form',
        formId: 'kashmir-main-lead-form',
      }),
      keepalive: true
    }).catch(err => console.error(err));

    // 2. Fire Google Ads Enhanced Conversion tracking
    await trackEnhancedConversion({ name: form.name, phone: form.phone });

    // 3. Redirect after a tiny safety delay to ensure fetch is dispatched
    setTimeout(() => {
      window.location.href = '/thank-you.html';
    }, 400);
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 px-4 bg-gradient-to-br from-kashmir-950 via-kashmir-800 to-kashmir-600 relative overflow-hidden"
      id="contact"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-10 reveal">
          <p className="text-blue-200 text-sm font-semibold tracking-widest uppercase mb-2">
            Free Quote · No Obligation
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Plan Your Kashmir Tour Today
          </h2>
          <div className="section-line mx-auto mb-4" style={{ background: 'linear-gradient(90deg, #f5c842, #ff6b2b)' }} />
          <p className="text-blue-200 text-base max-w-xl mx-auto">
            Fill this quick form and receive a custom Kashmir itinerary with pricing on WhatsApp within <strong className="text-gold-400">10 minutes</strong>.
          </p>
        </div>

        {!submitted ? (
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 sm:p-8 reveal">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name */}
              <div>
                <label className="block text-blue-100 text-xs font-semibold mb-1.5">Your Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={form.name}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-blue-100 text-xs font-semibold mb-1.5">WhatsApp Number *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="10-digit mobile number"
                  pattern="[6-9][0-9]{9}"
                  value={form.phone}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              {/* Travel Month */}
              <div className="relative">
                <label className="block text-blue-100 text-xs font-semibold mb-1.5">Travel Date *</label>
                <input
                  name="month"
                  type="date"
                  required
                  value={form.month}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              {/* Number of People */}
              <div>
                <label className="block text-blue-100 text-xs font-semibold mb-1.5">Number of People *</label>
                <select
                  name="people"
                  required
                  value={form.people}
                  onChange={handleChange}
                  className="form-input"
                >
                  <option value="">Select</option>
                  <option>1 (Solo)</option>
                  <option>2 (Couple)</option>
                  <option>3–4 (Family)</option>
                  <option>5–8 (Group)</option>
                  <option>9+ (Large Group)</option>
                </select>
              </div>

              {/* Budget */}
              <div>
                <label className="block text-blue-100 text-xs font-semibold mb-1.5">Budget Per Person *</label>
                <select
                  name="budget"
                  required
                  value={form.budget}
                  onChange={handleChange}
                  className="form-input"
                >
                  <option value="">Select Budget Range</option>
                  <option>Under ₹10,000</option>
                  <option>₹10,000 – ₹15,000</option>
                  <option>₹15,000 – ₹20,000</option>
                  <option>₹20,000 – ₹30,000</option>
                  <option>₹30,000+ (Premium)</option>
                </select>
              </div>

              {/* Package Type */}
              <div>
                <label className="block text-blue-100 text-xs font-semibold mb-1.5">Package Type *</label>
                <select
                  name="packageType"
                  required
                  value={form.packageType}
                  onChange={handleChange}
                  className="form-input"
                >
                  <option value="">Select Type</option>
                  <option>Honeymoon Package</option>
                  <option>Family Package</option>
                  <option>Group Tour</option>
                  <option>Solo Trip</option>
                  <option>Budget Package</option>
                  <option>Premium / Luxury</option>
                </select>
              </div>

              {/* Submit */}
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="w-full btn-shimmer text-white font-bold text-[11px] sm:text-lg py-3 sm:py-4 px-2 sm:px-6 rounded-2xl shadow-2xl flex items-center justify-center gap-1.5 sm:gap-3"
                >
                  <i className="fab fa-whatsapp text-lg sm:text-xl" />
                  Get Free Kashmir Package on WhatsApp →
                </button>
                <p className="text-center text-blue-200/70 text-xs mt-3">
                  🔒 100% Private · No Spam · Itinerary in 10 Minutes
                </p>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center bg-white/10 backdrop-blur border border-white/20 rounded-3xl p-10 reveal">
            <div className="w-16 h-16 rounded-full bg-saffron-500 flex items-center justify-center mx-auto mb-4 text-3xl">
              <i className="fas fa-check" />
            </div>
            <h3 className="font-display text-2xl font-bold text-white mb-2">You&apos;re all set!</h3>
            <p className="text-blue-200">
              Opening WhatsApp... Our Kashmir travel expert will respond within 10 minutes.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
