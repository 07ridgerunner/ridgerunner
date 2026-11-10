'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { trackEnhancedConversion } from '@/utils/enhancedConversions';
import { getTrackingParams } from '@/utils/travdx';

const PHONE = '+919682300904';

export default function OfferModal({ isOpen, onClose }) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    month: '',
    packageType: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

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
        leadSource: 'Offer Modal',
        formId: 'kashmir-offer-modal',
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
    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-kashmir-950/80 backdrop-blur-sm animate-fadeIn" 
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-md bg-white rounded-xl shadow-3xl overflow-hidden animate-slideUp">
        {/* Header */}
        <div className="bg-gradient-to-r from-saffron-500 to-orange-600 p-5 text-white relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-black/10 rounded-full hover:bg-black/20 transition-colors"
          >
            <i className="fas fa-times" />
          </button>
          <div className="flex items-center gap-3 mb-3">
             <img src="/logo.png" alt="Honor Tour Logo" className="h-9 w-auto object-contain brightness-0 invert shadow-white/10 drop-shadow-sm" />
             <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
               <i className="fas fa-gift" /> Special Offer Activated
             </div>
          </div>
          <h3 className="font-display text-2xl font-bold leading-tight">Unlock Exclusive Kashmir Tour Offers</h3>
          <p className="text-white/80 text-xs mt-1">Get your personalized discount code on WhatsApp</p>
        </div>

        <div className="p-5">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 text-[11px] font-bold uppercase tracking-wider mb-1.5 ml-1">Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Rahul Sharma"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-saffron-500/20 focus:border-saffron-500 transition-all font-medium"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-[11px] font-bold uppercase tracking-wider mb-1.5 ml-1">WhatsApp Number</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="99XXXXXXXX"
                  pattern="[6-9][0-9]{9}"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-saffron-500/20 focus:border-saffron-500 transition-all font-medium"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-gray-700 text-[11px] font-bold uppercase tracking-wider mb-1.5 ml-1">Travel Date</label>
                  <input
                    type="date"
                    name="month"
                    required
                    value={form.month}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-saffron-500/20 focus:border-saffron-500 transition-all font-medium"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-[11px] font-bold uppercase tracking-wider mb-1.5 ml-1">Travelers</label>
                  <select
                    name="packageType"
                    required
                    value={form.packageType}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl px-4 py-3 appearance-none focus:outline-none focus:ring-2 focus:ring-saffron-500/20 focus:border-saffron-500 transition-all font-medium"
                  >
                    <option value="">Select</option>
                    <option>Honeymoon</option>
                    <option>Family</option>
                    <option>Group</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full btn-shimmer bg-saffron-500 hover:bg-saffron-600 text-white font-bold py-4 rounded-xl shadow-xl flex items-center justify-center gap-2 mt-2"
              >
                Claim My Offer Now
              </button>
              
              <p className="text-gray-400 text-[10px] text-center font-medium">✨ Limited period offer · Valid for first 50 bookings today</p>
            </form>
          ) : (
            <div className="py-10 text-center animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-3xl mx-auto mb-4">
                <i className="fas fa-check" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-1">Offer Claimed Successfully!</h4>
              <p className="text-gray-500 text-sm">Thank you for your interest. Our experts will contact you soon.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
