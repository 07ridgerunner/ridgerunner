'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { trackEnhancedConversion } from '@/utils/enhancedConversions';
import { getTrackingParams } from '@/utils/travdx';

const PHONE = '+919682300904';

export default function InquiryModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const [form, setForm] = useState({
    name: '',
    phone: '',
    travelers: '',
    month: '',
  });

  useEffect(() => {
    // Global listener to open from other components
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('openInquiryModal', handleOpen);

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 7000); // 7 Seconds

    return () => {
      window.removeEventListener('openInquiryModal', handleOpen);
      clearTimeout(timer);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1. Fire to PHP in background — PHP se email + TravDX CRM dono jaate hain
    fetch('/send-mail.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...form,
        ...getTrackingParams(),
        leadSource: 'Inquiry Modal',
        formId: 'kashmir-inquiry-modal',
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

  const currentMonth = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(new Date());

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[20000] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#020617]/80 backdrop-blur-sm animate-fadeIn"
        onClick={() => setIsOpen(false)}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-sm bg-white rounded-xl overflow-hidden shadow-2xl animate-slideUp border border-blue-50">

        {/* Top Header Section (Premium Gradient) */}
        <div className="relative h-28 bg-gradient-to-br from-blue-700 to-indigo-900 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-2xl -mr-10 -mt-10" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gold-400 rounded-full blur-xl -ml-10 -mb-10" />
          </div>
          <div className="relative text-center px-4">
            <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/30 text-white text-[9px] font-black uppercase tracking-widest mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Limited Slots for {currentMonth}
            </div>
            <h3 className="text-white font-display text-lg md:text-xl font-bold leading-tight whitespace-nowrap">
              Plan Your Paradise Trip Today!
            </h3>
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center text-white transition-colors"
          >
            <i className="fas fa-times text-sm" />
          </button>
        </div>

        <div className="p-7">
          <p className="text-gray-500 text-[11px] font-medium text-center mb-6">
            Fill details below & get a <span className="text-blue-600 font-bold">Free Customized Itinerary</span> from our local experts.
          </p>

          <form onSubmit={handleSubmit} className="space-y-3.5">
            <div className="relative group">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-300 group-focus-within:text-blue-600 transition-colors">
                <i className="fas fa-user-circle text-sm" />
              </div>
              <input
                required
                type="text"
                placeholder="Full Name"
                className="w-full pl-11 pr-4 py-3 bg-blue-50/50 border border-blue-100 rounded-2xl text-sm focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 transition-all text-gray-800"
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>

            <div className="relative group">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-300 group-focus-within:text-blue-600 transition-colors">
                <i className="fas fa-phone text-sm" />
              </div>
              <input
                required
                type="tel"
                placeholder="WhatsApp Number"
                className="w-full pl-11 pr-4 py-3 bg-blue-50/50 border border-blue-100 rounded-2xl text-sm focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 transition-all text-gray-800"
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-300 group-focus-within:text-blue-600 transition-colors">
                  <i className="fas fa-users text-sm" />
                </div>
                <input
                  required
                  type="text"
                  placeholder="Travelers"
                  className="w-full pl-11 pr-4 py-3 bg-blue-50/50 border border-blue-100 rounded-2xl text-sm focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 transition-all text-gray-800"
                  onChange={(e) => setForm({ ...form, travelers: e.target.value })}
                />
              </div>
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-300 group-focus-within:text-blue-600 transition-colors">
                  <i className="fas fa-calendar-check text-sm" />
                </div>
                <input
                  required
                  type="date"
                  className="w-full pl-11 pr-4 py-3 bg-blue-50/50 border border-blue-100 rounded-2xl text-sm focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 transition-all text-gray-800"
                  onChange={(e) => setForm({ ...form, month: e.target.value })}
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full btn-shimmer text-white font-bold py-4 rounded-2xl shadow-xl shadow-blue-500/20 text-sm mt-3 group flex items-center justify-center gap-2"
            >
              Get My Free Kashmir Quote
              <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="mt-5 flex items-center justify-center gap-4 text-[10px] text-gray-400 font-semibold uppercase tracking-widest">
            <span className="flex items-center gap-1.5"><i className="fas fa-shield-check text-green-500" /> Secure</span>
            <span className="w-1 h-1 bg-gray-200 rounded-full" />
            <span className="flex items-center gap-1.5"><i className="fas fa-bolt text-blue-500" /> Fast Response</span>
          </div>
        </div>
      </div>
    </div>
  );
}
